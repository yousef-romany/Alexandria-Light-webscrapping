import axios from 'axios';
import { JSDOM } from 'jsdom';
import iconv from 'iconv-lite';
import fs from 'fs';
import path from 'path';

const url = "https://st-takla.org/Saints/Coptic-Synaxarium-Orthodox-Saints-Biography-00-Coptic-Orthodox-Popes/Coptic-Popes-History_000-index_.html";

interface MoreInfo {
  birthPlace?: string;
  nameBeforePapacy?: string | Array<{ text: string | null; links: { text: string | null; href: string | null }[] }>;
  enthronementDate?: string;
  departureDate?: string;
  durationOnThrone?: string;
  interregnumDuration?: string;
  residence?: string;
  burialPlace?: string;
  contemporaryKings?: string;
  synaxariumText?: string;
}

interface PopeNames {
  english?: string;
  greek?: string;
  coptic?: string;
  amharic?: string;
}

interface PopeImage {
  src: string;
  alt: string;
  title: string;
  caption: string;
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
  names?: PopeNames;
  images?: PopeImage[];
}

// دالة استخراج الاسم: كل الروابط + النص
function getPopeName(cell: HTMLTableCellElement) {
  const links = Array.from(cell.querySelectorAll('a'));
  if (links.length === 0) return cell.textContent?.trim() || '';
  return links.map(a => a.textContent?.trim()).filter(Boolean).join(' ');
}

// استخراج الأسماء من صفحة البابا
function extractNames(popeDoc: Document): PopeNames {
  const names: PopeNames = {};
  const bodyText = popeDoc.querySelector('div#bodytext');
  if (!bodyText) return names;

  const paragraphs = Array.from(bodyText.querySelectorAll('p'));
  paragraphs.forEach(p => {
    const text = p.textContent || '';

    const engMatch = text.match(/اللغة الإنجليزية\s*:\s*([^-\n]+)/);
    if (engMatch) names.english = engMatch[1].trim();

    const greekMatch = text.match(/اللغة اليونانية\s*:\s*([^\-]+)/);
    if (greekMatch) names.greek = greekMatch[1].trim();

    const copticMatch = text.match(/اللغة القبطية\s*:\s*([\s\S]+?)(?:\s*-\s*|$)/);
    if (copticMatch) names.coptic = copticMatch[1].trim();

    const amharicMatch = text.match(/اللغة الأمهرية\s*:\s*(.+)/);
    if (amharicMatch) names.amharic = amharicMatch[1].trim();
  });

  return names;
}

// استخراج الصور من صفحة البابا
function extractImages(popeDoc: Document): PopeImage[] {
  const images: PopeImage[] = [];
  const bodyText = popeDoc.querySelector('div#bodytext');
  if (!bodyText) return images;

  const tables = Array.from(bodyText.querySelectorAll('table'));
  tables.forEach(table => {
    const imgEl = table.querySelector('img');
    const captionEl = table.querySelector('.caption');
    if (!imgEl) return;

    const srcRaw = imgEl.getAttribute('src') || '';
    const src = srcRaw.startsWith('http') ? srcRaw : new URL(srcRaw, url).href;

    const ignoreList = [
      "sts-logo-ar-2.png",
      "gear.png",
      "St-Takla-org_Next-Arrow.png",
      "St-Takla-org_Previous-Arrow.png"
    ];
    if (ignoreList.some(ignore => src.includes(ignore))) return;

    const alt = imgEl.getAttribute('alt') || '';
    const title = imgEl.getAttribute('title') || '';
    const caption = captionEl?.textContent?.trim() || '';

    images.push({ src, alt, title, caption });
  });

  return images;
}

// استخراج نص السنكسار فقط
function extractSynaxariumText(popeDoc: Document): string | null {
  const bodyText = popeDoc.querySelector('div#bodytext');
  if (!bodyText) return null;

  const paragraphs = Array.from(bodyText.querySelectorAll('p'));
  for (const p of paragraphs) {
    const text = p.textContent?.trim() || '';
    if (text.startsWith("في مثل هذا اليوم")) {
      return text;
    }
  }
  return null;
}

// استخراج معلومات إضافية
function extractMoreInfo(popeDoc: Document): MoreInfo {
  const moreInfo: MoreInfo = {};
  const lis = popeDoc.querySelectorAll('ul li');

  lis.forEach(li => {
    const textBold = li.querySelector('b')?.textContent?.trim() || '';
    const textValue = li.textContent?.replace(textBold, '').replace(/^:?\s*/, '').trim();

    if (textBold.includes("الاسم قبل")) {
      const ul = li.closest('ul');
      if (ul) {
        moreInfo.nameBeforePapacy = Array.from(ul.querySelectorAll('li')).map(liItem => {
          const links = Array.from(liItem.querySelectorAll('a')).map(a => ({
            text: a.textContent?.trim(),
            href: a.getAttribute('href')
          }));
          return { text: liItem.textContent?.trim(), links };
        });
      } else {
        moreInfo.nameBeforePapacy = textValue;
      }
    } else if (textBold.includes("المدينة الأصلية")) moreInfo.birthPlace = textValue;
    else if (textBold.includes("تاريخ التقدمة")) moreInfo.enthronementDate = textValue;
    else if (textBold.includes("تاريخ النياحة")) moreInfo.departureDate = textValue;
    else if (textBold.includes("مدة الإقامة")) moreInfo.durationOnThrone = textValue;
    else if (textBold.includes("مدة خلو")) moreInfo.interregnumDuration = textValue;
    else if (textBold.includes("محل إقامة")) moreInfo.residence = textValue;
    else if (textBold.includes("محل الدفن")) moreInfo.burialPlace = textValue;
    else if (textBold.includes("الملوك المعاصرون")) moreInfo.contemporaryKings = textValue;
  });

  // نص السنكسار
  moreInfo.synaxariumText = extractSynaxariumText(popeDoc);

  return moreInfo;
}

async function scrapePopes() {
  const response = await axios.get(url, { responseType: 'arraybuffer' });
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

    const centuryLink = cells[0].querySelector('a');
    if (centuryLink && cells[0].getAttribute('rowspan')) {
      currentCentury = centuryLink.textContent?.trim() || '';
    }

    const indexCell = cells.find(cell => /^\d+$/.test(cell.textContent?.trim() || ''));
    if (!indexCell) continue;
    const index = parseInt(indexCell.textContent!.trim());

    const nameCell = cells[cells.indexOf(indexCell) + 1];
    if (!nameCell) continue;
    const name = getPopeName(nameCell);

    const yearsCell = cells[cells.indexOf(nameCell) + 1];
    const years = yearsCell?.textContent?.trim() || '';

    const durationYears = cells[cells.indexOf(yearsCell!) + 1]?.textContent?.trim();
    const durationMonths = cells[cells.indexOf(yearsCell!) + 2]?.textContent?.trim();
    const durationDays = cells[cells.indexOf(yearsCell!) + 3]?.textContent?.trim();

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
    };

    if (popeLink) {
      try {
        const popeUrl = new URL(popeLink, url).href;
        const popeResp = await axios.get(popeUrl, { responseType: 'arraybuffer' });
        const popeHtml = iconv.decode(Buffer.from(popeResp.data), 'windows-1256');
        const popeDom = new JSDOM(popeHtml);
        const popeDoc = popeDom.window.document;

        pope.moreInfo = extractMoreInfo(popeDoc);
        pope.names = extractNames(popeDoc);
        pope.images = extractImages(popeDoc);
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
