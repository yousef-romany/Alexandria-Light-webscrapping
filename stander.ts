import axios from 'axios';
import { JSDOM } from 'jsdom';
import iconv from 'iconv-lite';
import fs from 'fs';
import path from 'path';

const baseUrl = "https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Coptic-Popes-History_000-index_.html";

interface MoreInfo {
  birthPlace?: string;
  nameBeforePapacy?: string;
  enthronementDate?: string;
  departureDate?: string;
  durationOnThrone?: string;
  interregnumDuration?: string;
  residence?: string;
  burialPlace?: string;
  contemporaryKings?: string;
}

interface PopeImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
}

interface PopeNames {
  english?: string;
  greek?: string;
  coptic?: string;
  amharic?: string;
}

interface Pope {
  century?: string;
  index: number;
  name: string;
  years: string;
  durationYears?: string;
  durationMonths?: string;
  durationDays?: string;
  moreInfo?: MoreInfo;
  link?: string;
  images?: PopeImage[];
  names?: PopeNames;
}

// دالة استخراج الاسم: كل الروابط + النص
function getPopeName(cell: HTMLTableCellElement) {
  const links = Array.from(cell.querySelectorAll('a'));
  if (links.length === 0) return cell.textContent?.trim() || '';
  return links.map(a => a.textContent?.trim()).filter(Boolean).join(' ');
}

async function scrapePopes() {
  const response = await axios.get(baseUrl, { responseType: 'arraybuffer' });
  const html = iconv.decode(Buffer.from(response.data), 'windows-1256');
  const dom = new JSDOM(html);
  const document = dom.window.document;

  const table = document.querySelector('#AutoNumber1') as HTMLTableElement;
  if (!table) {
    console.error("الجدول مش موجود!");
    return;
  }

  const rows = Array.from(table.querySelectorAll('tr'));
  let currentCentury = '';
  const popes: Pope[] = [];

  for (const row of rows) {
    const cells = Array.from(row.querySelectorAll('td'));
    if (cells.length === 0) continue;

    // تحديث القرن لو موجود
    const centuryLink = cells[0].querySelector('a');
    if (centuryLink && cells[0].getAttribute('rowspan')) {
      currentCentury = centuryLink.textContent?.trim() || '';
    }

    // تحديد رقم البابا
    const indexCell = cells.find(cell => /^\d+$/.test(cell.textContent?.trim() || ''));
    if (!indexCell) continue;
    const index = parseInt(indexCell.textContent!.trim());

    // خلية الاسم
    const nameCell = cells[cells.indexOf(indexCell) + 1];
    if (!nameCell) continue;
    const name = getPopeName(nameCell);

    // سنوات الحكم
    const yearsCell = cells[cells.indexOf(nameCell) + 1];
    const years = yearsCell?.textContent?.trim() || '';

    // مدة الحبريّة
    const durationYears = cells[cells.indexOf(yearsCell!) + 1]?.textContent?.trim();
    const durationMonths = cells[cells.indexOf(yearsCell!) + 2]?.textContent?.trim();
    const durationDays = cells[cells.indexOf(yearsCell!) + 3]?.textContent?.trim();

    // رابط صفحة البابا
    const popeLink = nameCell.querySelector('a')?.getAttribute('href') || '';

    const pope: Pope = {
      century: currentCentury,
      index,
      name,
      years,
      durationYears,
      durationMonths,
      durationDays,
      link: popeLink,
      images: [],
      names: {},
    };

    // جلب بيانات صفحة البابا
    if (popeLink) {
      try {
        const popeUrl = new URL(popeLink, baseUrl).href;
        const popeResp = await axios.get(popeUrl, { responseType: 'arraybuffer' });
        const popeHtml = iconv.decode(Buffer.from(popeResp.data), 'windows-1256');
        const popeDom = new JSDOM(popeHtml);
        const popeDoc = popeDom.window.document;

        // moreInfo
        const moreInfoObj: MoreInfo = {};
        popeDoc.querySelectorAll('ul li').forEach(li => {
          const textBold = li.querySelector('b')?.textContent?.trim() || '';
          const textValue = li.textContent?.replace(textBold, '').replace(/^:?\s*/, '').trim();

          if (textBold.includes("المدينة الأصلية")) moreInfoObj.birthPlace = textValue;
          else if (textBold.includes("الاسم قبل")) moreInfoObj.nameBeforePapacy = textValue;
          else if (textBold.includes("تاريخ التقدمة")) moreInfoObj.enthronementDate = textValue;
          else if (textBold.includes("تاريخ النياحة")) moreInfoObj.departureDate = textValue;
          else if (textBold.includes("مدة الإقامة")) moreInfoObj.durationOnThrone = textValue;
          else if (textBold.includes("مدة خلو")) moreInfoObj.interregnumDuration = textValue;
          else if (textBold.includes("محل إقامة")) moreInfoObj.residence = textValue;
          else if (textBold.includes("محل الدفن")) moreInfoObj.burialPlace = textValue;
          else if (textBold.includes("الملوك المعاصرون")) moreInfoObj.contemporaryKings = textValue;
        });
        pope.moreInfo = moreInfoObj;

        // الصور
        const imgs: PopeImage[] = [];
        popeDoc.querySelectorAll('table img').forEach(img => {
          const src = img.getAttribute('src') || '';
          // تجاهل الشعارات والصور الغلط
          if (!src.includes('sts-logo') && !src.includes('gear') && !src.includes('Next-Arrow') && !src.includes('Previous-Arrow')) {
            imgs.push({
              src: new URL(src, popeUrl).href,
              alt: img.getAttribute('alt') || '',
              title: img.getAttribute('title') || '',
              caption: img.closest('table')?.querySelector('.caption')?.textContent?.trim() || ''
            });
          }
        });
        pope.images = imgs;

        // الأسماء باللغات المختلفة
        const namesP = popeDoc.querySelector('div#bodytext p[align="justify"]');
        if (namesP) {
          const textHTML = namesP.innerHTML;
          // الإنجليزية
          const engMatch = textHTML.match(/اللغة الإنجليزية<\/a>:\s*([^<]+)/);
          if (engMatch) pope.names!.english = engMatch[1].trim();
          // اليونانية
          const grMatch = textHTML.match(/اللغة اليونانية<\/a>:.*?<span dir="ltr">([^<]+)<\/span>/);
          if (grMatch) pope.names!.greek = grMatch[1].trim();
          // القبطية
          const copticMatch = textHTML.match(/اللغة القبطية<\/a>:.*?font[^>]*>([^<]+)/);
          if (copticMatch) pope.names!.coptic = copticMatch[1].trim();
          // الأمهرية
          const amhMatch = textHTML.match(/اللغة الأمهرية<\/a>:\s*([^<]+)/);
          if (amhMatch) pope.names!.amharic = amhMatch[1].trim();
        }

      } catch (err) {
        console.error("فشل في جلب صفحة البابا:", popeLink, err);
      }
    }

    popes.push(pope);
  }

  const outDir = path.join(process.cwd(), 'out');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'output.json'), JSON.stringify(popes, null, 2), 'utf-8');
  console.log(`تم الحفظ في out/output.json, عدد البطاركة: ${popes.length}`);
}

scrapePopes();
