````markdown
# Alexandria's Light - Web Scraping 🕯️

This repository contains the **web scraping script** used to collect and structure historical data about the **Popes of the Coptic Orthodox Church of Alexandria** from [St-Takla.org](https://st-takla.org).

The extracted data powers the ["Alexandria's Light"](https://github.com/yousef-romany/Alexandria) interactive timeline web application.

---

## ✨ Features

- Scrapes the full list of **118 Popes of Alexandria** from the index page.
- Extracts:
  - Basic information (index, name, years of papacy).
  - Detailed info (birth place, enthronement/departure dates, residence, burial place, etc.).
  - Multilingual names (English, Greek, Coptic, Amharic).
  - Image galleries (with captions).
- Saves all data as a **structured JSON file** (`out/output.json`).

---

## 🛠️ Tech Stack

- **axios** → HTTP requests  
- **jsdom** → HTML parsing  
- **iconv-lite** → Handle Arabic encoding (Windows-1256 → UTF-8)  
- **Node.js fs/path** → File system operations  

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm (or yarn/pnpm)

### Installation
Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/alexandrias-light-scraper.git
cd alexandrias-light-scraper
npm install
````

### Run the scraper

```bash
npm start
```

or (if script is named `scrape.ts`/`scrape.js`):

```bash
ts-node scrape.ts
```

### Output

After running, the script generates a JSON file:

```
out/output.json
```

Example:

```json
[
  {
    "century": "الآباء البطاركة في القرن \n      الأول",
    "index": 1,
    "name": "البابا مرقس الأول (مارمرقس الرسول)",
    "years": "61 - 68 م.",
    "durationYears": "7",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-001-Pope-Mark-the-Evangelist_.html",
    "moreInfo": {
      "birthPlace": ":\nأدرنا\n بوليس ( الخمس\n مدن \n الغربية)",
      "synaxariumText": "في مثل هذا اليوم الموافق 26 أبريل سنة 68 م. استشهد \n الرسول العظيم القديس مرقس كاروز الديار المصرية وأول باباوات الإسكندرية \n وأحد السبعين رسولا كان اسمه أولًا يوحنا كما يقول الكتاب: أن الرسل \n كانوا يصلون في بيت مريم أم يوحنا المدعو مرقس (أع 12: 12) وهو الذي \n أشار إليه \nالسيد المسيح له المجد بقوله لتلاميذه: \" أذهبوا إلى المدينة \n إلى فلان وقولوا له. المعلم يقول وقتي قريب وعندك أصنع الفصح مع تلاميذي \n (مت 26: 18) \" ولقد كان بيته أول كنيسة مسيحية حيث فيه أكلوا الفصح وفيه اختبأوا بعد \nموت السيد المسيح وفي عليته حل عليهم الروح القدس."
    },
    "names": {
      "english": "St. Mark the Apostle, Evangelist and Martyr",
      "greek": "Ευαγγελιστής Μάρκος / Πάπας Μάρκος",
      "coptic": "Markoc piqe`wrimoc% pimarturoc% \npieuaggelicthc% pi`apoctoloc"
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-001.jpg",
        "alt": "St-Takla.org Image: Pope Mark I, St. Mark the Apostle, Evangelist and Martyr (Saint Marcos) - Pope of Alexandria and Patriarch of the See of St. Mark (1) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا مرقس الأول (مارمرقس الرسول) - بابا الإسكندرية وبطريرك الكرازة المرقسية (1) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Mark I, St. Mark the Apostle, Evangelist and Martyr (Saint Marcos) - Pope \nof Alexandria and Patriarch of the See of St. Mark (1) - Arabic, Coptic and \nEnglish name - Designed by Michael Ghaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Saints-and-Figures/24-Meem/Saint-Mark-The-Evangelist/www-St-Takla-org--Coptic-Saints-Saint-Mark-06.jpg",
        "alt": "St-Takla.org Image: Saint Mark the Evangelist (of Libya), modern Coptic icon صورة في موقع الأنبا تكلا: القديس مارمرقس الرسول، الليبي - أيقونة قبطية حديثة",
        "title": "",
        "caption": "St-Takla.org Image:\nSaint Mark the Evangelist (of Libya), modern Coptic icon"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن \n      الأول",
    "index": 2,
    "name": "البابا أنيانوس",
    "years": "68 - 83 م.",
    "durationYears": "14",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-002-Pope-Anianus_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \n\nأنيانوس - \nسيم أسقفًا في \nبشنس 62 م.",
          "links": [
            {
              "text": "أنيانوس",
              "href": "../../characters/people/alif/enianos.html"
            },
            {
              "text": "سيم أسقفًا",
              "href": "../bishops/alif/anianus-first.html"
            },
            {
              "text": "بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/El-Seneksar-or-Sanaksar-09-Bachans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n64 م.",
          "links": []
        },
        {
          "text": "تاريخ \n النياحة: \n\n20 هاتور - 83 م. \n (82؟ - 84؟)",
          "links": [
            {
              "text": "20 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/20-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n22 \nسنة",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n15 يومً",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالكنيسة المرقسية - \n الإسكندرية",
          "links": [
            {
              "text": "الكنيسة المرقسية - \n الإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون (قياصرة): \n\nنيرون - جلبا - اوثون \n - ميتليوس - سباسيان - تيطس -\nدومتيان",
          "links": [
            {
              "text": "نيرون",
              "href": "../../Coptic-History/CopticHistory_01-Historical-Notes-on-the-Mother-Church/Christian-Church-History__053-Emperor-Niron.html"
            },
            {
              "text": "دومتيان",
              "href": "../../Coptic-History/CopticHistory_01-Historical-Notes-on-the-Mother-Church/Christian-Church-History__054-Emperor-Dometian.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n22 \nسنة",
      "interregnumDuration": ": \n15 يومً",
      "residence": ": \n\nالكنيسة المرقسية - \n الإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 86 ميلادية تنيَّح الأب القديس \n الأنبا إنيانوس ثاني \n\nباباوات الأسكندرية. وكان هذا القديس من أهالي \n مدينة الإسكندرية، ابنا لوالدين وثنيين، وكان إسكافيًا. وحدث انه لما \n دخل القديس مرقس الرسول مدينة الإسكندرية، اتفق بالتدبير الإلهي انه عثر \n فانقطع حذاؤه فدفعه لإنيانوس ليصلحه. وقد حدث وهو يغرز فيه المخراز أن \n نفذ إلى الجهة الأخرى وجرح إصبعه. فصرخ من الألم وقال باليونانية \"ايس \n ثيئوس\" أي \"يا الله الواحد\"، فلما سمع القديس مرقس ذلك مجد المسيح حيث \n سمعه يذكر اسم الله. ثم أخذ ترابًا من الأرض وتفل عليه ووضعه علي إصبع \n\n أنيانوس فبرئ في الحال، وتعجب \n\n أنيانوس من ذلك كثيرًا، وأخذ القديس مرقس \n إلى منزله، وسأله عن اسمه ومعتقده، ومن أين أتي، فقصَّ عليه الرسول من \n كتب الأنبياء عن \n  \n  ألوهية \nالسيد المسيح، وعن سر تجسده وموته وقيامته وعمل \n الآيات باسمه. فاستضاء عقل \n أنيانوس وآمن هو وأهل بيته، وتعمدوا باسم \n الآب والابن والروح القدس، فحلت عليهم النعمة الإلهية، ولازموا سماع \n تعليم الرسول، فعلمهم علوم الكنيسة وفرائضها وسننها. ولما عزم القديس \n مرقس علي الذهاب إلى الخمس المدن الغربية، وضع يده علي إنيانوس وكرَّسه \n بطريركًا علي مدينة الإسكندرية سنة 64 ميلادية. فظل يبشر أهلها ويعمدهم \n سرًا. ويعضدهم ويثبتهم علي الإيمان بالمسيح، ثم جعل \nداره كنيسة، ويقال \n أنها هي المعروفة\nبكنيسة القديس مار مرقس الشهيد. والتي تقوم في مكانها \n الآن\nالكنيسة المرقسية بالإسكندرية. وأقام هذا القديس علي الكرسي اثنتين \n وعشرون سنة. ثم تنيَّح بسلام. صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Anianus of Alexandria",
      "greek": "Ανιανός Αλεξανδρείας / Πάπας Αννιανός"
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-002.jpg",
        "alt": "St-Takla.org Image: St. Anianus, Pope Anianos - Pope of Alexandria and Patriarch of the See of St. Mark (2) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أنيانوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (2) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Anianus, Pope Anianos - Pope of Alexandria and Patriarch of the See of St. \nMark (2) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Saints-and-Figures/24-Meem/Saint-Mark-The-Evangelist/Statues/www-St-Takla-org--087-St-Mark-Baptising-Anianus-Tullio-Lombardo-1481-Basilica-dei-Santi-Giovanni-e-Paolo-Venice.gif",
        "alt": "St-Takla.org         Image: Relief of St. Mark baptizing Anianus. - By Tullio Lombardo, 1481, found in the Basilica dei Santi Giovanni e Paolo, Venice صورة: نحت نافر يصور القديس مرقس يعمد أنيانوس، الفنان توليو لومباردو، 1481، في بازيليكا دي سانتي جيوفاني إيه باولو، فينيسيا",
        "title": "",
        "caption": "St-Takla.org Image:\nRelief of St. Mark baptizing Anianus. - By Tullio Lombardo, 1481, found in the \nBasilica dei Santi Giovanni e Paolo, Venice"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن \n      الأول",
    "index": 3,
    "name": "البابا ميليوس",
    "years": "83 - 95 م.",
    "durationYears": "11",
    "durationMonths": "9",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-003-Pope-Avilius_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمليانوس وابيليوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 كيهك - أول ديسمبر 83 للميلاد",
          "links": [
            {
              "text": "4 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/04-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\nأول توت - 30 أغسطس 95 للميلاد",
          "links": [
            {
              "text": "أول توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/01-Toot.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n11 سنة و9 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n5 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nدومتيانوس",
          "links": [
            {
              "text": "دومتيانوس",
              "href": "../../Coptic-History/CopticHistory_01-Historical-Notes-on-the-Mother-Church/Christian-Church-History__054-Emperor-Dometian.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n11 سنة و9 أشهر",
      "interregnumDuration": ": \n5 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 98 م. تنيَّح القديس ميليوس \n بابا الإسكندرية الثالث من مار مرقس. هذا القديس قدم في السنة الخامسة \n عشرة من ملك \nدومتيانوس بن اسباسيانوس ملك رومية. وذلك بعد صعود ربنا \n يسوع المسيح بخمس وخمسين سنة. فرعى رعية المسيح أحسن رعاية وأقام على \n الكرسي المرقسي اثنتي عشرة سنة. وتنيَّح بسلام. صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Milius of Alexandria, Melyos / Avilius / Abilius, Sabellius, Abylius, Abitius",
      "greek": "Πάπας Αβίλιος Αλεξανδρείας",
      "amharic": "አባ ሜሊዮስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-003.jpg",
        "alt": "St-Takla.org Image: St. Avilius, Pope Milieos - Pope of Alexandria and Patriarch of the See of St. Mark (3) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ميليوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (3) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Avilius, Pope Milieos - Pope of Alexandria and Patriarch of the See of St. \nMark (3) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-003.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Milieos, Coptic Orthodox Pope #3 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ميليوس البطريرك الثالث من بطاركة الكرازة المرقسية: 3. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Milieos, Coptic Orthodox Pope #3 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن \n      الأول",
    "index": 4,
    "name": "البابا كرذوذوس",
    "years": "95 - 106 م.",
    "durationYears": "10",
    "durationMonths": "9",
    "durationDays": "10",
    "link": "Life-of-Coptic-Pope-004-Pope-Kedron_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nكرذونوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n7 توت - 5 سبتمبر 95 للميلاد",
          "links": [
            {
              "text": "7 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/07-Toot.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n21 بؤونه - 15 يونيو 106 للميلاد",
          "links": [
            {
              "text": "21 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/21-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات و9 أشهر و10 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية \nبالإسكندرية",
          "links": [
            {
              "text": "المرقسية \nبالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nدومتيانوس - نوفا -\nتراجان",
          "links": [
            {
              "text": "دومتيانوس",
              "href": "../../Coptic-History/CopticHistory_01-Historical-Notes-on-the-Mother-Church/Christian-Church-History__054-Emperor-Dometian.html"
            },
            {
              "text": "تراجان",
              "href": "../../Coptic-History/CopticHistory_01-Historical-Notes-on-the-Mother-Church/Christian-Church-History__055-Emperor-Trajan.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n10 سنوات و9 أشهر و10 أيام",
      "residence": ": \n\nالمرقسية \nبالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم (15 يونية سنة 106 م.) تنيَّح البابا \n القديس كردونوس الرابع من \nباباوات الكرازة المرقسية وقد تعمد هذا الأب من \n يد القديس مرقس الرسول كاروز الديار المصرية. وتعلم علوم الكنيسة وبعد \n نياحة البابا ميليوس رسم بابا للكرسي المرقسي في \n7 توت (5 سبتمبر سنة 95 \n م.) فرعي شعبه أحسن رعاية بالوعظ والتعليم والإرشاد مدة إحدى عشرة سنة \n وشهرًا واثني عشر يومًا وتنيَّح بسلام(4)(5)(6). صلاته تكون معنا. ولربنا المجد دائمًا \n . آمين."
    },
    "names": {
      "english": "Pope Kedron of Alexandria / Kedronos",
      "greek": "Πάπας Κέδρων Αλεξανδρείας",
      "coptic": "Papa Kerdwnou",
      "amharic": "አባ ካርዶኖስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-004.jpg",
        "alt": "St-Takla.org Image: St. Kedron, Pope Kerdonou - Pope of Alexandria and Patriarch of the See of St. Mark (4) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا كرذوذوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (4) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Kedron, Pope Kerdonou - Pope of Alexandria and Patriarch of the See of St. \nMark (4) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-004.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Kerdonou, Coptic Orthodox Pope #4, and next is a coin of Emperor Trajan, who the Pope martyred in his time. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا كرذوذوس البطريرك الرابع من بطاركة الكرازة المرقسية: 4، وبجانبه عملة الإمبراطور تراجان الذي استشهد البابا في عصره. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Kerdonou, Coptic Orthodox Pope #4, and next to him is a coin of Emperor Trajan, who the Pope was martyred in his time. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 5,
    "name": "البابا بريموس",
    "years": "106 - 118 م.",
    "durationYears": "13",
    "durationMonths": "1",
    "durationDays": "12",
    "link": "Life-of-Coptic-Pope-005-Pope-Primus_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبريموس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n22 بؤونه - 16 يونيو 106 للميلاد(1)",
          "links": [
            {
              "text": "22 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/22-Bawoonah.html"
            },
            {
              "text": "(1)",
              "href": "#(1)"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n3 مسرى - 27 يوليو 118 للميلاد",
          "links": [
            {
              "text": "3 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/03-Mesraa.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n13 سنة وشهرًا واحدًا و12 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n9 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية \nبالإسكندرية",
          "links": [
            {
              "text": "المرقسية \nبالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nتراجان - \nهدريانوس",
          "links": [
            {
              "text": "تراجان",
              "href": "../../Coptic-History/CopticHistory_01-Historical-Notes-on-the-Mother-Church/Christian-Church-History__055-Emperor-Trajan.html"
            },
            {
              "text": "هدريانوس",
              "href": "../../encyclopedia/characters/president-king/hadrian.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n13 سنة وشهرًا واحدًا و12 يومًا",
      "interregnumDuration": ": \n9 أيام",
      "residence": ": \n\nالمرقسية \nبالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 106 م. تنيَّح البابا \n ابريموس البطريرك الخامس، وقد تعمد من يد مار مرقس الرسول وهو أحد \n الثلاثة الذين رسمهم مرقس الرسول قسوسًا مع الأسقف \nإنيانوس البطريرك \n الثاني وكان ناسكًا عفيفا حسن الأفعال تولي الكرسي الرسولي في \n22 بؤونه (\n 16 يونيو سنة 106 م.) وكانت الكنيسة في مدة رئاسته في سلام."
    },
    "names": {
      "english": "Pope Primus of Alexandria",
      "greek": "Πάπας Πρίμος Αλεξανδρείας",
      "coptic": "Papa `Primou",
      "amharic": "አባ ፕሪሙስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-005.jpg",
        "alt": "St-Takla.org Image: St. Primus, Pope Epriemou - Pope of Alexandria and Patriarch of the See of St. Mark (5) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا بريموس - بابا الإسكندرية وبطريرك الكرازة المرقسية (5) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Primus, Pope Epriemou - Pope of Alexandria and Patriarch of the See of St. \nMark (5) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-005.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Epriemou, Coptic Orthodox Pope #5 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بريموس البطريرك الخامس من بطاركة الكرازة المرقسية: 5. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Epriemou, Coptic Orthodox Pope #5 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 6,
    "name": "البابا يسطس",
    "years": "118 - 129 م.",
    "durationYears": "10",
    "durationMonths": "10",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-006-Pope-Justus_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيسطس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n13 توت - 6 أغسطس 118 للميلاد (121؟)",
          "links": [
            {
              "text": "13 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/13-Toot.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n12 بؤونه (13؟) - 6 يونيو 129 للميلاد \n(131؟)",
          "links": [
            {
              "text": "12 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/12-Bawoonah.html"
            },
            {
              "text": "13",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/13-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات و10 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا ويومًا واحدً",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nهدريانوس",
          "links": [
            {
              "text": "هدريانوس",
              "href": "../../encyclopedia/characters/president-king/hadrian.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n10 سنوات و10 أشهر",
      "interregnumDuration": ": \nشهرًا واحدًا ويومًا واحدً",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Justus of Alexandria",
      "greek": "Πάπας Ιούστος Αλεξανδρείας",
      "coptic": "Papa Iouctou",
      "amharic": "አባ ዮስቱስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-006.jpg",
        "alt": "St-Takla.org Image: St. Justus, Pope Iostos - Pope of Alexandria and Patriarch of the See of St. Mark (6) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا يسطس - بابا الإسكندرية وبطريرك الكرازة المرقسية (6) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Justus, Pope Iostos - Pope of Alexandria and Patriarch of the See of St. \nMark (6) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-006.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Iostos (Justus), Coptic Orthodox Pope #6 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. His Holiness Pope Iostos (Justus), Coptic Orthodox Pope #6 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يسطس البطريرك السادس من بطاركة الكرازة المرقسية: 6. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Iostos (Justus), Coptic Orthodox Pope #6 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. His Holiness Pope Iostos (Justus), Coptic Orthodox Pope #6 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 7,
    "name": "البابا أومانيوس",
    "years": "129 - 141 م.",
    "durationYears": "12",
    "durationMonths": "3",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-007-Pope-Eumenes_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nاومانيوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n11 أبيب - 7 يوليو 129 للميلاد",
          "links": [
            {
              "text": "11 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/11-Abeeb.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n9 \nبابه - 7 أكتوبر 141 للميلاد",
          "links": [
            {
              "text": "9 \nبابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/09-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n12 سنة و3 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n26 يومً",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nهدريانوس - \nأنطونيوس بيوس (ابن هدريانوس الذي تبنّاه)",
          "links": [
            {
              "text": "هدريانوس",
              "href": "../../encyclopedia/characters/president-king/hadrian.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n12 سنة و3 أشهر",
      "interregnumDuration": ": \n26 يومً",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 146 ميلادية تنيَّح القديس \n أومانيوس السابع من \nباباوات الكرازة المرقسية. وقد رسمه \nابريموس البابا \n الخامس شماسًا، فأقام في هذه الخدمة عشر سنين. ولما قدم \nالقديس يسطس \n البابا السادس، ورأى نجاحه وتدينه وعلمه رسمه قسًا. ووكل إليه تعليم \n المؤمنين بكنيسة الإسكندرية وتدبيرهم وتهذيبهم على مبادئ الدين الصحيح."
    },
    "names": {
      "english": "Pope Eumenes of Alexandria",
      "greek": "Πάπας Ευμένης Αλεξανδρείας",
      "coptic": "Papa Eumeniou",
      "amharic": "አባ ኦማኒዮስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-007.jpg",
        "alt": "St-Takla.org Image: St. Eumenius, Pope Oumenios - Pope of Alexandria and Patriarch of the See of St. Mark (7) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أومانيوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (7) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Eumenius, Pope Oumenios - Pope of Alexandria and Patriarch of the See of St. \nMark (7) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-007.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Oumenios, Coptic Orthodox Pope #7 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أومانيوس البطريرك السابع من بطاركة الكرازة المرقسية: 7. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Oumenios, Coptic Orthodox Pope #7 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 8,
    "name": "البابا مرقيانوس",
    "years": "141 - 152 م.",
    "durationYears": "10",
    "durationMonths": "2",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-008-Pope-Markianos.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمرقيانوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n8 هاتور - 3 نوفمبر 141 للميلاد",
          "links": [
            {
              "text": "8 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/08-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n6 طوبه - 2 يناير 152 للميلاد",
          "links": [
            {
              "text": "6 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/06-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات وشهران",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nيومان",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأسكندرية",
          "links": [
            {
              "text": "المرقسية بالأسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأنطونيوس بيوس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n10 سنوات وشهران",
      "interregnumDuration": ": \nيومان",
      "residence": ": \n\nالمرقسية بالأسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 154 م. تنيَّح القديس \n مركيانوس بابا الإسكندرية الثامن. وقد ولد بالإسكندرية، ولما تنيَّح \n البابا أومانيوس اجتمع الآباء مع الشعب بثغر الإسكندرية وتشاوروا من \n يقيمونه علي الكرسي عوضًا عنه. فوقع اختيارهم جميعًا علي مركيانوس لعلمه وتقواه فأقام علي الكرسي تسع سنين وشهرين و26 يومًا مداومًا علي تعليم \n رعيته حارسا لها من التعاليم الغريبة. ولما أكمل سعيه الصالح مرضيًا \n للرب تنيَّح بسلام. صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Markianos of Alexandria",
      "greek": "Πάπας Μαρκιανός Αλεξανδρείας",
      "coptic": "Papa Marki`anou",
      "amharic": "አባ ማሪአኑስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-008.jpg",
        "alt": "St-Takla.org Image: St. Markianos, Pope Markianos - Pope of Alexandria and Patriarch of the See of St. Mark (8) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا مرقيانوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (8) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Markianos, Pope Markianos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (8) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-008.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Markianos, Coptic Orthodox Pope #8 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مرقيانوس البطريرك الثامن من بطاركة الكرازة المرقسية: 8. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Markianos, Coptic Orthodox Pope #8 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 9,
    "name": "البابا كلاديانوس",
    "years": "152 - 166 م.",
    "durationYears": "14",
    "durationMonths": "6",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-009-Pope-Celadion_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nكالاوتيانوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n8 طوبه - 4 يناير  152 للميلاد",
          "links": [
            {
              "text": "8 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/08-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n9 أبيب - 3يوليو 166 للميلاد",
          "links": [
            {
              "text": "9 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/09-Abeeb.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة و6 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n22 يومً",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nانطونيوس بيوس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n14 سنة و6 أشهر",
      "interregnumDuration": ": \n22 يومً",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 166 م. تنيَّح البابا \n كلاديانوس التاسع من \nباباوات الكرازة المرقسية. كان رجلًا عالمًا فاضلًا \n ممدوح السيرة فانتخب بطريركا في \n8 طوبه (4 يناير سنة 152 م.) بعد نياحة \n سلفه البابا مركيانوس، فاستمر يعلم ويعظ ويهذب شعبه إلى أن تنيَّح بسلام \n بعد أن أقام علي الكرسي مدة أربع عشرة سنة وستة أشهر."
    },
    "names": {
      "english": "Pope Celadion of Alexandria / Keladionus",
      "greek": "Πάπας Κελαδίων Αλεξανδρείας",
      "coptic": "Papa Kallau;i`anou",
      "amharic": "አባ ክላዲአኑስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-009.jpg",
        "alt": "St-Takla.org Image: St. Celadion, Pope Kalavtianos - Pope of Alexandria and Patriarch of the See of St. Mark (9) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا كلاديانوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (9) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Celadion, Pope Kalavtianos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (9) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-009.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Kalavtianos, Coptic Orthodox Pope #9 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا كلاديانوس البطريرك التاسع من بطاركة الكرازة المرقسية: 9. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Kalavtianos, Coptic Orthodox Pope #9 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 10,
    "name": "البابا أغريبينوس",
    "years": "166 - 178 م.",
    "durationYears": "11",
    "durationMonths": "6",
    "durationDays": "5",
    "link": "Life-of-Coptic-Pope-010-Pope-Agrippinus_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nاغربينوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول مسرى - 25 يوليو 166 للميلاد",
          "links": [
            {
              "text": "أول مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/01-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n5 أمشير - 30 يناير 178 للميلاد",
          "links": [
            {
              "text": "5 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/05-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n11 سنة و6 أشهر و5 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرا واحدا و4 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nماركوس أوريليوس - \nلوسيوس فيروس",
          "links": [
            {
              "text": "ماركوس أوريليوس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__011-Four-Orilios-Antonious.html"
            },
            {
              "text": "لوسيوس فيروس",
              "href": "https://st-takla.org/Gallery/search.html?q=\"www-st-takla-org--10-9-antiquities-museum-b-0204.jpg\"\"www-st-takla-org--10-9-antiquities-museum-b-0205.jpg\"\"www-st-takla-org--10-9-antiquities-museum-b-0206.jpg\"\"www-st-takla-org--10-9-antiquities-m"
            },
            {
              "text": "",
              "href": "https://st-takla.org/Gallery/search.html?q=\"www-st-takla-org--10-9-antiquities-museum-b-0204.jpg\"\"www-st-takla-org--10-9-antiquities-museum-b-0205.jpg\"\"www-st-takla-org--10-9-antiquities-museum-b-0206.jpg\"\"www-st-takla-org--10-9-antiquities-m"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n11 سنة و6 أشهر و5 أيام",
      "interregnumDuration": ": \nشهرا واحدا و4 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 181 م. تنيَّح الأب القديس \n الأنبا إغربينوس بابا الإسكندرية العاشر. كان هذا الأب قديسًا طاهرًا \n خائفًا الله، فرسموه قسًا علي كنيسة الإسكندرية. ولما تنيَّح \nالأب كلاديانوس \n البابا التاسع اختير هذا القديس من شعب المدينة الإكليروس بطريركًا. \n فتولي بنعمة الله الخلافة علي الكرسي الرسولي، وسار سيرًا رسوليًا، وكارزًا ومعلمًا الناس أصول الإيمان وشرائعه المحيية. مهتما بكل قواه في حراسة الرعية معلمًا ومصليًا عن جميعهم. لم يقتن ذهبًا ولا فضة، إلا ما كان \n ضروريًا لسد حاجته فقط. وأكمل في الجهاد اثنتي عشرة سنة وتنيَّح بسلام. \n صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Agrippinus of Alexandria",
      "greek": "Πάπας Αγριππίνος Αλεξανδρείας",
      "coptic": "Papa Agrippinou",
      "amharic": "አባ አግሪፒኑስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-010.jpg",
        "alt": "St-Takla.org Image: St. Agrippinus, Pope Aghreppinios - Pope of Alexandria and Patriarch of the See of St. Mark (10) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أغريبينوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (10) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Agrippinus, Pope Aghreppinios - Pope of Alexandria and Patriarch of the See \nof St. Mark (10) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-010.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Aghreppinios, Coptic Orthodox Pope #10 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أغريبينوس البطريرك العاشر من بطاركة الكرازة المرقسية: 10. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Aghreppinios, Coptic Orthodox Pope #10 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 11,
    "name": "البابا يوليانوس",
    "years": "178 - 188 م.",
    "durationYears": "10",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-011-Pope-Julian_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوليانوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 برمهات - 4 مارس 178 للميلاد",
          "links": [
            {
              "text": "9 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/09-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n8 برمهات - 3 مارس 188 للميلاد",
          "links": [
            {
              "text": "8 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/08-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و4 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nكومودوس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n10 سنوات",
      "interregnumDuration": ": \nشهرًا واحدًا و4 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 188 م. (3 مارس) تنيَّح الأب \n القديس يوليانوس البابا إلحادي عشر من \nباباوات الكرازة المرقسية. كان \n هذا الأب طالبا بالكلية الإكليريكية التي أسسها مار مرقس، ورسم قسًا \n بمدينة الإسكندرية، وقد فاق الكثيرين بعلمه وعفافه وتقواه. فرسم \n بطريركًا في \n9 برمهات (سنة 178 م.). وبعد اختياره رأى أن الوثنيين لا \n يسمحون للأساقفة بالخروج عن مدينة الإسكندرية. فكان هو يخرج سرًا منها \n ليرسم كهنة في كل مكان. وقبل انتقاله أعلنه \n\n ملاك الرب أن الكرام الذي \n يأتيه بعنقود عنب، هو الذي سيخلفه في كرسي البطريركية. وفي ذات يوم \n بينما كان ديمتريوس الكرام يشذب أشجاره، عثر على عنقود عنب في غير أوانه، وقدمه للبطريرك فسر من هذه الهدية، وقص على الأساقفة الرؤيا، وأوصاهم \n بتنصيب الكرام بطريركًا بعده. وقد وضع هذا الأب مقالات وميامر كثيرة، \n وكان مداومًا على تعليم الشعب ووعظه وافتقاده، وأقام على الكرسي الرسولي \n عشر سنين. ثم تنيَّح بسلام. صلاته تكون معنا. آمين."
    },
    "names": {
      "english": "Pope Julian of Alexandria / Yulianus",
      "greek": "Πάπας Ιουλιανός Αλεξανδρείας",
      "coptic": "Papa Iouli`anou",
      "amharic": "አባ ዩሊአኑስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-011.jpg",
        "alt": "St-Takla.org Image: St. Julian - Pope Yulianos - Pope of Alexandria and Patriarch of the See of St. Mark (11) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا يوليانوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (11) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Julian - Pope Yulianos - Pope of Alexandria and Patriarch of the See of St. \nMark (11) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-011.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yulianos (Julian), Coptic Orthodox Pope #11 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوليانوس البطريرك الحادي عشر من بطاركة الكرازة المرقسية: 11. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yulianos (Julian), Coptic Orthodox Pope #11 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني",
    "index": 12,
    "name": "البابا ديمتريوس الأول (الكرام)",
    "years": "188 - 230 م.",
    "durationYears": "42",
    "durationMonths": "7",
    "durationDays": "5",
    "link": "Life-of-Coptic-Pope-012-Pope-Demetrius_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nديميتريوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 برمهات - 4 مارس 188 للميلاد",
          "links": [
            {
              "text": "9 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/09-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n12 بابه - 9 أكتوبر 230 للميلاد",
          "links": [
            {
              "text": "12 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/12-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n42 سنة و7 أشهر و5 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n26 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nكومودوس - برتيناكس Pertinax - نجره -\nساويرس - كاراكلاوجيتا",
          "links": [
            {
              "text": "ساويرس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__012-Five-Saweeros.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nديمتريوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ12",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nديمتريوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ12",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/012-Pope-Dimetrios-I.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n42 سنة و7 أشهر و5 أيام",
      "interregnumDuration": ": \n26 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 224 ميلادية، تنيَّح الأب \n البكر الطاهر، مجاهد الشهوة وقاهر الطبيعة الأنبا ديمتريوس الأول والـ12 \n من \n\nباباوات الأسكندرية. هذا القديس كان فلاحًا أميًّا، لا يعرف القراءة \n والكتابة، وكان متزوجًا. وأقام مع زوجته سبعًا وأربعين سنة، إلى أن اختير \n بطريركًا، ولم يعرف أحدهما الآخر معرفة الأزواج، بل لبثا طوال هذه المدة \n وهما في بكوريتهما وطهارتهما. ولم يكن أحد من الشعب يعرف ما هما عليه."
    },
    "names": {
      "english": "Pope Demetrius I of Alexandria",
      "greek": "Πάπας Δημήτριος Α΄ Αλεξανδρείας",
      "coptic": "pi`agioc Dhmhtrioc أو \nPapa Dymytriou =a",
      "amharic": "አባ ዲሜጥሮስ ተካሌ ወይን."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-012.jpg",
        "alt": "St-Takla.org Image: St. Demetrius the Vinedresser - Pope Demetrios - Pope of Alexandria and Patriarch of the See of St. Mark (12) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ديمتريوس الأول (الكرام) - بابا الإسكندرية وبطريرك الكرازة المرقسية (12) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Demetrius the Vinedresser - Pope Demetrios - Pope of Alexandria and \nPatriarch of the See of St. Mark (12) - Arabic, Coptic and English name - \nDesigned by Michael Ghaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Popes/012-Pope-Dimetrios-I/www-St-Takla-org--Saint-Pope-Dimetrios-12.jpg",
        "alt": "St-Takla.org Image: His Holiness Saint Pope Dimetrios the Vineyardist (vinegrower, viticulturist) - El Baba Coptic Pope Demetrius I (number 12) صورة في موقع الأنبا تكلا: قداسة البابا المعظم البابا ديمتريوس الكرام رقم 12 - الأنبا دمتريوس، ديميتريوس الكرام",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Saint Pope Dimetrios the Vineyardist (vinegrower, viticulturist) - \nEl Baba Coptic Pope Demetrius I (number 12)"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث",
    "index": 13,
    "name": "البابا ياروكلاس",
    "years": "230 - 246 م.",
    "durationYears": "16",
    "durationMonths": "1",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-013-Pope-Theoclas_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nياركلاس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 هاتور - 5 نوفمبر 230 للميلاد",
          "links": [
            {
              "text": "9 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/09-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n8 كيهك - 4 ديسمبر 246 للميلاد",
          "links": [
            {
              "text": "8 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/08-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n16 سنة وشهر واحدً",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n25 يوم",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأسكندر -\nمكسيمينوس - جورديانوس الأول - \nجورديانوس الثاني - جورديانوس الثالث - فيلبس الأول",
          "links": [
            {
              "text": "مكسيمينوس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__013-Six-Maximianos.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n16 سنة وشهر واحدً",
      "interregnumDuration": ": \n25 يوم",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 240 م. تنيَّح الأب القديس \n ياروكلاس بابا الإسكندرية الثالث عشر، وقد ولد من والدين وثنيين إلا \n أنهما آمنًا وتعمدًا بعد ولادته، وكانا قد أدباه بالحكمة اليونانية ثم \n بالحكمة المسيحية، ودرس الأناجيل الأربعة والرسائل، فرسمه القديس ديمتريوس بابا الإسكندرية الثاني عشر شماسا ثم قسا علي كنيسة الإسكندرية \n فنجح في الخدمة، وكان أمينًا في كل ما أؤتمن عليه، ولما تنيَّح \nالأب ديمتريوس انتخب القديس ياروكلاس لرتبة البطريركية، فرعي رعية المسيح \n أحسن رعاية، ورد كثيرين من الصابئة (عابدي الكواكب) وعمدهم وقد كرس جهوده علي التعليم \n والوعظ وإرشاد المخالفين، كما سلم للقديس ديونوسيوس النظر في الأحكام \n وتدبير أمور المؤمنين. وأقام علي الكرسي ثلاث عشر سنة، وتنيَّح بسلام، \n صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Heraclas of Alexandria",
      "greek": "Πάπας Ηρακλάς Αλεξανδρείας / Ἡρακλῆς‎‎ / Θεοκλάς",
      "coptic": "Papa Ieraklac",
      "amharic": "አባ ሔራክላስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-013.jpg",
        "alt": "St-Takla.org Image: St. Heraclas - Pope Yaraklas - Pope of Alexandria and Patriarch of the See of St. Mark (13) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ياروكلاس - بابا الإسكندرية وبطريرك الكرازة المرقسية (13) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Heraclas - Pope Yaraklas - Pope of Alexandria and Patriarch of the See of \nSt. Mark (13) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-013.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yaraklas, Coptic Orthodox Pope #13 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ياروكلاس البطريرك الثالث عشر من بطاركة الكرازة المرقسية: 13. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yaraklas, Coptic Orthodox Pope #13 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث",
    "index": 14,
    "name": "البابا ديونسيوس",
    "years": "246 - 264 م.",
    "durationYears": "17",
    "durationMonths": "2",
    "durationDays": "10",
    "link": "Life-of-Coptic-Pope-014-Pope-Dionysius_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nديونيسيوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول طوبه - 28 ديسمبر 246 للميلاد",
          "links": [
            {
              "text": "أول طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/01-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n13 برمهات - 8 مارس 264 للميلاد",
          "links": [
            {
              "text": "13 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/13-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n17 سنة وشهران و10 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n8 أشهر",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالدومينيكوم الديونيسي",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nفيلبس الأول - \nديسيوس - جاللوس -\nفاليريانوس \n- جالليوناس",
          "links": [
            {
              "text": "ديسيوس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__014-Seven-Disios.html"
            },
            {
              "text": "فاليريانوس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__015-Eight-Valerian.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nديونيسيوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ14",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nديونيسيوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ14",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/014-Pope-Dionysius.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n17 سنة وشهران و10 أيام",
      "interregnumDuration": ": \n8 أشهر",
      "residence": ": \nالدومينيكوم الديونيسي",
      "synaxariumText": "في مثل هذا اليوم. (8 مارس سنة 264 ميلادية) تنيَّح \n الأب العظيم الأنبا ديونيسيوس الرابع عشر من \nباباوات الكرازة المرقسية. \n وهذا كان ابنا لأبوين على مذهب الصابئة (عابدي الكواكب) وقد اهتم والده \n بتعليمه كل علوم الصابئة."
    },
    "names": {
      "english": "Pope Dionysius of Alexandria",
      "greek": "Πάπας Διονύσιος Αλεξανδρείας",
      "coptic": "Papa Di`onuciou",
      "amharic": "አባ ዲዮናሲዮስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-014.jpg",
        "alt": "St-Takla.org Image: St. Dionysius the Great - Pope Dionysios - Pope of Alexandria and Patriarch of the See of St. Mark (14) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ديونسيوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (14) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Dionysius the Great - Pope Dionysios - Pope of Alexandria and Patriarch of \nthe See of St. Mark (14) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/014-Pope-Dionysius/www-St-Takla-org--Pope-Dionysius-of-Alexandria-no-14-001.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Dionysius of Alexandria, no. 14 صورة في موقع الأنبا تكلا: قداسة البابا ديونيسيوس الإسكندري رقم 14",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Dionysius of Alexandria, no. 14"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث",
    "index": 15,
    "name": "البابا مكسيموس",
    "years": "264 - 282 م.",
    "durationYears": "17",
    "durationMonths": "5",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-015-Pope-Maximus_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمكسيموس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n13 هاتور؟ - 9 نوفمبر 264 للميلاد",
          "links": [
            {
              "text": "13 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/13-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n14 برمودة - 9 أبريل 282 للميلاد",
          "links": [
            {
              "text": "14 برمودة",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/14-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n17 سنة و5 أشهر",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالدومينيكوم الديونيسي",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nجاللوناوس - كلوديوس - أوريليانوس - تاسيتوس \n- بربوس - كاروس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n17 سنة و5 أشهر",
      "residence": ": \nالدومينيكوم الديونيسي",
      "synaxariumText": "في مثل هذا اليوم الموافق 9 أبريل سنة 282 م. تنيَّح \n الأب القديس الأنبا مكسيموس الخامس عشر من \nباباوات الكرازة المرقسية. \n ولد هذا الأب بمدينة الإسكندرية من أبوين مسيحيين فعلماه وهذباه وقد تفقه \n في اللغة اليونانية ثم درس العلوم الدينية وكان رجلًا يخاف الله فرسمه \n البابا ياروكلاس الثالث عشر شماسًا علي كنيسة الإسكندرية، ثم رسمه \nالبابا ديونيسيوس الرابع عشر قسًا ونظرًا لتقدمه في الفضيلة والعلم أختاره الآباء \n الأساقفة لكرسي البطريركية بعد نياحة\nالبابا ديونيسيوس وتولي الكرسي في \n 12 هاتور؟ (9 نوفمبر سنة 264 م.) , وبعد رسامته بزمن قليل وردت رسالة من \n مجمع إنطاكية تتضمن أسباب حرم بولس السميساطي والمشايعين له فقرأها علي \n كهنة الإسكندرية ثم حرر منشورا وأرسله مع رسالة المجمع إلى سائر بلاد مصر \n وأثيوبيا والنوبة يتضمن تحذيرهم من بدعة بولس السميساطي وقد زالت بدعة هذا \n المبتدع بموته (كما جاء في مخطوط بشبين الكوم) في أيام هذا القديس ظهر \n إنسان من الشرق \" بلاد الفرس أسمه \"ماني\" قال هذا عن نفسه أنه \n الباراقليط روح القدس وجاء إلى أرض الشام وجادله أسقفها القديس ارشلاوس \n وأظهر ضلاله فترك الشام ورجع إلى بلاد الفرس: فأخذه بهرام الملك وشقه \n نصفين أما الأب مكسيموس فقد ظل مجاهدا وحارسا لرعيته ومثبتا لها بالعظات \n والإنذارات مدة سبع عشرة سنة وخمسة أيام وتنيَّح بسلام صلاته تكون معنا \n ولربنا المجد دائمًا. آمين."
    },
    "names": {
      "english": "Pope Maximus of Alexandria",
      "greek": "Πάπας Μάξιμος Αλεξανδρείας",
      "coptic": "Papa Maximou",
      "amharic": "አባ ማክሲሙስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-015.jpg",
        "alt": "St-Takla.org Image: St. Maximus - Pope Maximos - Pope of Alexandria and Patriarch of the See of St. Mark (15) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا مكسيموس - بابا الإسكندرية وبطريرك الكرازة المرقسية (15) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Maximus - Pope Maximos - Pope of Alexandria and Patriarch of the See of St. \nMark (15) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-015.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Maximus, Coptic Orthodox Pope #15, and below is a picture of the excommunicated Paul of Samosata - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مكسيموس البطريرك الخامس عشر من بطاركة الكرازة المرقسية: 15، وبأسفل صورة المحروم بولس السموساطي. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Maximus, Coptic Orthodox Pope #15, and below is a picture of the excommunicated Paul of Samosata - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث",
    "index": 16,
    "name": "البابا ثاؤنا",
    "years": "282 - 301 م.",
    "durationYears": "19",
    "durationMonths": "1",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-016-Pope-Theonas_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nتاوون",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 كيهك - 27 نوفمبر 282 للميلاد",
          "links": [
            {
              "text": "2 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/02-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n2 طوبه 18 للشهداء - 28 ديسمبر 301 \n للميلاد",
          "links": [
            {
              "text": "2 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/02-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n19 سنة وشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nكاروس - نيمريانوس -\nديوكلتيانوس",
          "links": [
            {
              "text": "ديوكلتيانوس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__017-Ten-Deocletean.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n19 سنة وشهرًا واحدًا",
      "synaxariumText": "في مثل هذا اليوم من سنة 300 م. تنيح القديس ثاؤنا \n بابا الإسكندرية السادس عشر وكان هذا القديس عالمًا تقيًا وديعًا رقيقًا محبًا \n للجميع. بروح المودة واللطف تمكن من تشييد كنيسة بالإسكندرية علي اسم \n العذراء البتول والدة الإله. إذ أن المؤمنين كانوا حتى زمانه يصلون \n ويقدسون في البيوت والمغائر خوفًا من غير المؤمنين الذين ظل يلاطفهم لينال \n رغباته وقد رد كثيرين منهم إلى \nالإيمان بالسيد المسيح وعمدهم. وقد عمد في \n السنة الأولى من رياسته القديس بطرس الذي خلفه علي كرسي مار مرقس وهو \n البابا السابع عشر وقد قيل أنه رسمه أغنسطسًا وهو لم يزل بعد في الخامسة \n من عمره ثم رقاه شماسًا في الثانية عشرة وقسًا في السادسة عشرة. وفي زمان \n هذا الأب ظهر بالإسكندرية رجل اسمه سبيليوس كان يعلم أن الأب والابن \n والروح القدس أقنوم واحد. فحرمه وأبطل قوله بالبرهان المقنع ولما أكمل \n سعيه تنيح بسلام بعد أن أقام علي الكرسي تسع عشرة سنة. صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Theonas of Alexandria",
      "greek": "Πάπας Θεωνάς Αλεξανδρείας",
      "coptic": "Papa :e`wna",
      "amharic": "አባ ቴኦናስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-016.jpg",
        "alt": "St-Takla.org Image: St. Theonas - Pope Theona - Pope of Alexandria and Patriarch of the See of St. Mark (16) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ثاؤنا - بابا الإسكندرية وبطريرك الكرازة المرقسية (16) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Theonas - Pope Theona - Pope of Alexandria and Patriarch of the See of St. \nMark (16) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-016.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Theona, Coptic Orthodox Pope #16, and at his feet is an image of the heretic Sabellius - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ثاؤنا البطريرك السادس عشر من بطاركة الكرازة المرقسية: 16، وعند قدميه صورة سابيليوس المبتدع. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Theona, Coptic Orthodox Pope #16, and at his feet is an image of the heretic Sabellius - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 17,
    "name": "البابا بطرس الأول خاتم \nالشهداء",
    "years": "302 - 311 م.",
    "durationYears": "9",
    "durationMonths": "10",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-017-Pope-Peter-the-Martyr_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبطرس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول \nأمشير \nسنة 18 للشهداء - 25 يناير 302 \n للميلاد",
          "links": [
            {
              "text": "أول \nأمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/01-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n29 هاتور \nسنة 28 للشهداء - 25 نوفمبر 311 \n للميلاد (يوافق بالتقويم المتبع حاليًا 8/9 ديسمبر)",
          "links": [
            {
              "text": "29 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/29-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n9 سنوات و10 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n20 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nديوكلتيانوس (ديقليديانوس)",
          "links": [
            {
              "text": "ديوكلتيانوس (ديقليديانوس)",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__017-Ten-Deocletean.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nبطرس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ17",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nبطرس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ17",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/017-Saint-Peter-seal-of-Martyrs.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n9 سنوات و10 أشهر",
      "interregnumDuration": ": \n20 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم استشهد القديس بطرس بابا الإسكندرية \n السابع عشر وخاتم الشهداء، وكان أبوه كبير قسوس الإسكندرية، اسمه \n ثاؤدسيوس، واسم أمه صوفية، وكانا خائفين من الله كثيرا ولم يرزقا ولدا \n . فلما كان \nالخامس من شهر \nأبيب، وهو عيد القديسين بطرس وبولس، ذهبت أمه \n إلى الكنيسة، فرأت النساء وهن حاملات أولادهن، فحزنت جدا وبكت، وسألت \n السيد المسيح بدموع إن يرزقها ولدًا، وفي تلك الليلة ظهر لها بطرس وبولس \n وأعلماها أن الرب قد قبل صلاتها، وسوف يعطيها ولدا تسميه بطرس، وأمراها \n أن تمضي إلى البطريرك ليباركها، فلما استيقظت عرفت زوجها بما رأت ففرح \n بذلك ثم مضت إلى الأب البطريرك وعرفته بالرؤيا وطلبت منه أن يصلي من \n أجلها فصلي وباركها، وبعد قليل رزقت هذا القديس بطرس، وفي كمال سبع \n سنين سلموه للبابا ثاؤنا مثل صموئيل النبي، فصار له كابن خاص وألحقه \n بالمدرسة اللاهوتية، فتعلم وبرع في الوعظ والإرشاد، ثم كرسه أغنسطسًا \n فشماسًا، وبعد قليل قسا وصار يحمل عنه كثيرا من شئون الكنيسة، وتنيَّح\nالبابا ثاؤنا بعد أن أوصى أن يكون الأب بطرس خلفًا له."
    },
    "names": {
      "english": "Peter I of Alexandria",
      "greek": "Πάπας Πέτρος Α΄ Αλεξανδρείας",
      "coptic": "pi`agioc Petroc ieromarturoc \npiarxh`ereuc / \nPapa Petrou =a / Ⲡⲁⲡⲁ Ⲁⲃⲃⲁ ⲡⲉⲧⲣⲟⲥ ⲁ̅, ⲡⲓⲁⲅⲓⲟⲥ ⲡⲉⲧⲣⲟⲥ ⲓⲉⲣⲟⲙⲁⲣⲧⲩⲣⲟⲥ ⲡⲓⲁⲣⲭⲏⲉⲣⲉⲩⲥ",
      "amharic": "አባ ጴጥሮስ ተፍጻሜ ሰማዕት."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-017.jpg",
        "alt": "St-Takla.org Image: St. Peter the Seal of the Martyrs - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (17) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا بطرس الأول (خاتم الشهداء) - بابا الإسكندرية وبطريرك الكرازة المرقسية (17) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter the Seal of the Martyrs - Pope Petros - Pope of Alexandria and \nPatriarch of the See of St. Mark (17) - Arabic, Coptic and English name - \nDesigned by Michael Ghaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/017-Saint-Peter-seal-of-Martyrs/www-St-Takla-org--Coptic-Saints-Saint-Peter-seal-of-Martyrs-01.jpg",
        "alt": "St-Takla.org         Image: His Holiness Pope Peter (Botros) of Alexandria, the Seal of Martyrs صورة: قداسة البابا المعظم الأنبا البابا بطرس خاتم الشهداء",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Peter (Botros) of Alexandria, the Seal of Martyrs."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 18,
    "name": "البابا أرشلاوس",
    "years": "311 - 312 م.",
    "durationYears": "",
    "durationMonths": "6",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-018-Pope-Achillas_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nاشيلاس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n19 كيهك 28 للشهداء - 14 ديسمبر 311 \n للميلاد",
          "links": [
            {
              "text": "19 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/19-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n19 بؤونه 28 للشهداء - 13 يونيو 312 \n للميلاد",
          "links": [
            {
              "text": "19 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/19-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n15 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالمعبد القيصري",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nجاليريوس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n6 أشهر",
      "interregnumDuration": ": \n15 يومًا",
      "residence": ": \nالمعبد القيصري",
      "synaxariumText": "في مثل هذا اليوم من سنة 28 ش. 23 يونيو سنة 312 م. \n تنيَّح البابا أرشيلاوس البطريرك الثامن عشر وقد كان قسًا في كنيسة \n الإسكندرية ولما نال \nالبابا بطرس الأول خاتم الشهداء إكليل الشهادة اتفق \n المؤمنون بالإسكندرية وجمعوا الأساقفة ورسموا أرشيلاوس القس بطريركًا عوضًا \n عنه كما كان قد أوصي قبل انتقاله من هذا العالم فلما جلس علي الكرسي \n البطريركي في \n19 كيهك سنة 28 ش. (24 ديسمبر سنة 311 م.) تقدم إليه جماعة \n من الشعب وطلبوا منه قبول أريوس فقبل سؤالهم ورسمه شماسا. ولما قبله \n وخالف وصية أبيه بطرس لم يقم علي الكرسي سوي ستة شهور وتنيَّح."
    },
    "names": {
      "english": "Pope Achillas of Alexandria",
      "greek": "Πάπας Αχιλλάς Αλεξανδρείας",
      "coptic": "Papa Ar,elaou",
      "amharic": "አባ አቺላስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-018.jpg",
        "alt": "St-Takla.org Image: St. Achillas the Great - Pope Archelaos - Pope of Alexandria and Patriarch of the See of St. Mark (18) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أرشلاوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (18) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Achillas the Great - Pope Archelaos - Pope of Alexandria and Patriarch of \nthe See of St. Mark (18) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-018.jpg",
        "alt": "St-Takla.org Image: Pope Achillas the Great, Coptic Orthodox Pope #18, and behind him the image of Arius the heretic, whom he accepted in the church, after pretending to be remorseful. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا أرشيلاؤس البطريرك الثامن عشر من بطاركة الكرازة المرقسية: 18، ويظهر خلفه صورة أريوس الهرطوقي الذي قبله بعدما تظاهر بالندم. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Achillas the Great, Coptic Orthodox Pope #18, and behind him the image of Arius the heretic, whom he accepted in the church, after pretending to be remorseful. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 19,
    "name": "البابا \nألكسندروس الأول",
    "years": "312 - 328 م.",
    "durationYears": "15",
    "durationMonths": "9",
    "durationDays": "20",
    "link": "Life-of-Coptic-Pope-019-Pope-Alexander-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nألكسندروس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n3 أبيب 28 للشهداء - 27 يونيو 312 للميلاد",
          "links": [
            {
              "text": "3 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/03-Abeeb.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n22 برموده 44 للشهداء - 17 أبريل 328 \n للميلاد",
          "links": [
            {
              "text": "22 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/22-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n15 سنة و9 أشهر و20 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n13 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالمعبد القيصري",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nجالليوناس - \nمكسيميانوس - \n \nقسطنطين",
          "links": [
            {
              "text": "مكسيميانوس",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-018-Father-Athanasius-Fahmy-George/003-El-Esteshhad/Martyrdom-in-the-Patristic-Thgought__013-Six-Maximianos.html"
            },
            {
              "text": "قسطنطين",
              "href": "../Coptic-Orthodox-Saints-Biography/Coptic-Saints-Story_1396.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nألكسندر الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ19",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nألكسندر الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ19",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/019-Pope-Alexander.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n15 سنة و9 أشهر و20 يومًا",
      "interregnumDuration": ": \n13 يومًا",
      "residence": ": \nالمعبد القيصري",
      "synaxariumText": "في مثل هذا اليوم من سنة 44 ش. (17 أبريل سنة 328 م.) \n تنيَّح الأب القديس البابا الكسندروس التاسع عشر من \nباباوات الكرازة المرقسية وقد ولد هذا البابا بمدينة الإسكندرية من أبوين مسيحيين. ونشأ \n في خدمة الكنيسة فرسمه البابا مكسيموس أغنسطسًا، والبابا ثاؤنا شماسًا، \n والبابا بطرس قسًا. وكان بكرًا طاهرًا ولما دنا وقت استشهاد البابا بطرس \n دخل إليه الكسندروس في السجن هو والأب أرشلاؤس الذي صار بطريركًا بعده \n وسألاه أن يحل \n\n أريوس من الحرم فأعاد حرمه أمامهما وعرفهما أن \n \n السيد المسيح قد ظهر له في رؤيا وأمره بذلك وأعلمه بجلوس \nالأب أرشلاؤس بطريركًا \n بعده وبعد الأب أرشلاؤس يجلس البابا الكسندروس وأوصي بهذا كهنة \n الإسكندرية وأمرهم بعدم قبول \n\n أريوس وألا يكون له معهم شركة."
    },
    "names": {
      "english": "Pope Alexander I of Alexandria",
      "greek": "Πάπας Αλέξανδρος Α΄ Αλεξανδρείας",
      "coptic": "Papa `Alexan`drou =a",
      "amharic": "አባ እለእስክንድሮስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-019.jpg",
        "alt": "St-Takla.org Image: St. Alexander I - Pope Alexanderos - Pope of Alexandria and Patriarch of the See of St. Mark (19) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ألكسندروس الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (19) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Alexander I - Pope Alexanderos - Pope of Alexandria and Patriarch of the See \nof St. Mark (19) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/019-Pope-Alexander/www-St-Takla-org--Coptic-Pope-Alexander-19-001.jpg",
        "alt": "St-Takla.org Image: Icon of the Saint Pope Alexander of Alexandria in Veljusa Monastery, Macedonia - XI - XIV c. صورة في موقع الأنبا تكلا: أيقونة قداسة البابا المعظم الأنبا أليكسندروس بابا الإسكندرية التاسع عشر - الأيقونة ترجع إلى ما بين القرنين 11-14، وموجودة في دير فيلجوسا، مقدونية",
        "title": "",
        "caption": "St-Takla.org Image:\nIcon of the Saint Pope Alexander of Alexandria in Veljusa Monastery, Macedonia - \nXI - XIV c."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 20,
    "name": "البابا أثناسيوس الأول (أثناسيوس الرسولي)",
    "years": "328 - 373 م.",
    "durationYears": "45",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-020-Pope-Athanasius-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأثناسيوس",
          "links": []
        },
        {
          "text": "الميلاد: \n296 م. - الإسكندرية - من والدين وثنيين",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n8 بشنس 44 للشهداء - 5 مايو 328 للميلاد",
          "links": [
            {
              "text": "8 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/08-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n7 بشنس 98 ش. (90؟) \n- 373 ميلادية",
          "links": [
            {
              "text": "7 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/07-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n45 سنة (46 و15 يوم؟)",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n13 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية ثم الدومينيكوم الديونيسي ثم \n المعبد\n القيصري ثم الدومينيكوم الديونيسي",
          "links": [
            {
              "text": "المرقسية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا \n/ \n\nكنيسة العباسية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            },
            {
              "text": "كنيسة العباسية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/hadayek-el-kobba--waily--abbasia/cathedral/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nقسطنطين الكبير - \nيوليانوس\n- جوفيانوس - فالنس",
          "links": [
            {
              "text": "قسطنطين الكبير",
              "href": "../Coptic-Orthodox-Saints-Biography/Coptic-Saints-Story_1396.html"
            },
            {
              "text": "يوليانوس",
              "href": "../Coptic-Orthodox-Saints-Biography/julian-apostate.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nأثناسيوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ20",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nأثناسيوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ20",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/020-St-Athanasius.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n45 سنة (46 و15 يوم؟)",
      "interregnumDuration": ": \n13 يومًا",
      "residence": ": \n\nالمرقسية ثم الدومينيكوم الديونيسي ثم \n المعبد\n القيصري ثم الدومينيكوم الديونيسي",
      "synaxariumText": "في مثل هذا اليوم من سنة 89 ش. (373) تنيَّح \nالبابا \n العظيم الأنبا أثناسيوس الرسولي العشرين من باباوات الكرازة المرقسية. وقد \n ولد هذا الأب من أبوين وثنيين نحو سنتيّ 295 و298 م. وحدث وهو في المكتب \n أن رأي بعض أولاد المسيحيين يقومون بتمثيل الطقوس المسيحية فجعلوا البعض \n منهم قسوسًا والبعض شمامسة وأحدهم أسقفا فطلب أن يشترك معهم فمنعوه قائلين: أنت وثني ولا يجوز لك الاختلاط بنا فقال لهم: أنا من الآن نصراني \n ففرحوا به وجعلوه عليهم بطريركًا وأجلسوه في مكان عال وصاروا يقدمون له \n الخضوع واتفق عبور \nالبابا الكسندروس في تلك الساعة فلما رآهم علي هذه \n الحال قال للذين معه عن أثناسيوس لابد أن يرتقي هذا الصبي إلى درجة سامية \n يوما ما."
    },
    "names": {
      "english": "Saint Pope Athanasius I of Alexandria / Athanasius the Great / Athanasius the Confessor / Athanasius the Apostolic",
      "greek": "Πάπας Αθανάσιος Αλεξανδρείας / Μέγας Αθανάσιος / Άγιος Αθανάσιος",
      "coptic": "pi`agioc Aqanacioc pi`apoctolikoc أو \nPapa `A;anaciou =a",
      "amharic": "አባ አትናቴዎስ ሐዋርያዊ - اللغة اللاتينية: Athanasius Alexandrinus."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-020.jpg",
        "alt": "St-Takla.org Image: St. Athanasius the Apostolic - Pope Athanasios - Pope of Alexandria and Patriarch of the See of St. Mark (20) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أثناسيوس الأول (أثناسيوس الرسولي) - بابا الإسكندرية وبطريرك الكرازة المرقسية (20) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Athanasius the Apostolic - Pope Athanasios - Pope of Alexandria and \nPatriarch of the See of St. Mark (20) - Arabic, Coptic and English name - \nDesigned by Michael Ghaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/020-St-Athanasius/www-St-Takla-org--Coptic-Saints-Saint-Athanasius-02.jpg",
        "alt": "St-Takla.org Image: Icon of Saint Athanasius (Asanasios) the Coptic Pope, Athanasius of Alexandria, modern Coptic art, and showing Arius the heretic and a symbol of the triumph of the Pope over his heresy صورة في موقع الأنبا تكلا: أيقونة قبطية حديثة تصور القديس أثناسيوس الإسكندري - البابا أثاناسيوس الرسولي، ويظهر رمز أريوس الهرطوقي ونصرة القديسة على هرطقته",
        "title": "",
        "caption": "St-Takla.org Image:\nIcon of Saint Athanasius (Asanasios) the Coptic Pope, Athanasius of Alexandria, modern Coptic \nart, and showing Arius the heretic and a symbol of the triumph of the Pope over \nhis heresy."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/020-St-Athanasius/www-St-Takla-org--Saint-Athanasius-of-Alexandria-004-Samy-Hennes-Coptic.jpg",
        "alt": "St-Takla.org         Image: Modern Coptic art: His Holiness Pope Athanasius of Alexandria, icon by Samy Hennes صورة: من الفن القبطي المعاصر، قداسة البابا المعظم الأنبا أثناسيوس بابا السكندري، أيقونة للرسام الفنان سامي حنس",
        "title": "",
        "caption": "St-Takla.org Image:\nModern Coptic art: His Holiness Pope Athanasius of Alexandria, icon by Samy \nHennes."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/020-St-Athanasius/www-St-Takla-org--Coptic-Saints-Saint-Athanasius-01.jpg",
        "alt": "St-Takla.org Image: Greek icon of Pope Saint Athanasius of Alexandria. صورة في موقع الأنبا تكلا: القديس أثناسيوس السكندري، البابا المصري، أيقونة يونانية.",
        "title": "",
        "caption": "St-Takla.org Image:\nGreek icon of Pope Saint Athanasius of Alexandria."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 21,
    "name": "البابا بطرس الثاني",
    "years": "373 - 379 م.",
    "durationYears": "5",
    "durationMonths": "9",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-021-Pope-Peter-II_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبطرس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n19 بشنس 89 للشهداء - 16 مايو 373 للميلاد",
          "links": [
            {
              "text": "19 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/19-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n20 أمشير 95 للشهداء (97؟) - 15 فبراير 379 \n للميلاد (380؟)",
          "links": [
            {
              "text": "20 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/20-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n5 سنوات و9 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nفالنس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n5 سنوات و9 أشهر",
      "interregnumDuration": ": \nشهرًا واحدًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 370 م. تنيَّح الأب القديس \n المغبوط الأنبا بطرس الثاني بابا الإسكندرية الحادي والعشرون. وقدم \n بطريركا بعد \n\n\n\nالقديس أثناسيوس الرسولي معلمه، وقد قاسي شدائد كثيرة من \n أتباع أريوس، الذين حاولوا قتله مرارًا، فكان يهرب منهم وظل مختفيًا مدة \n سنتين أقاموا خلالها واحدًا منهم بدلًا له اسمه لوكيوس، غير إن المؤمنين \n تمكنوا من إبعاد لوكيوس الدخيل، وإعادة الأب بطرس حيث أقام في كرسيه ست \n سنين مضطهدا مقاوما. ولما كمل له ثماني سنين نقله الرب من أتعاب هذا \n العالم ومضي إلى النعيم الدائم. صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Peter II of Alexandria",
      "greek": "Πάπας Πέτρος Β΄ Αλεξανδρείας",
      "coptic": "Papa Petrou =b",
      "amharic": "አባ ጴጥሮስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-021.jpg",
        "alt": "St-Takla.org Image: St. Peter II - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (21) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا بطرس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (21) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter II - Pope Petros - Pope of Alexandria and Patriarch of the See of \nSt. Mark (21) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-021.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter II, Coptic Orthodox Pope #21, and at his feet a picture of Lucius, the intruder Arian Patriarch - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بطرس الثاني البطريرك الحادي والعشرون من بطاركة الكرازة المرقسية: 21، وعند قديمه صورة لوكويس البطريرك الأريوسي الدخيل. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Peter II, Coptic Orthodox Pope #21, and at his feet a picture of Lucius, the intruder Arian Patriarch - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 22,
    "name": "البابا تيموثاوس الأول \n(الكبير)",
    "years": "379 - 385 م.",
    "durationYears": "6",
    "durationMonths": "4",
    "durationDays": "6",
    "link": "Life-of-Coptic-Pope-022-Pope-Timothy-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nتيموثاوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n17 برمهات 95 للشهداء (97؟) - 14 مارس 379 \n للميلاد (380؟)",
          "links": [
            {
              "text": "17 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/17-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n26 أبيب 101 ش. - 385 ميلادية",
          "links": [
            {
              "text": "26 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/26-Abeeb.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 سنوات و4 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n26 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nثيؤدوسيوس",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nتيموثاوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ22",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nتيموثاوس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ22",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/020-St-Athanasius.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n6 سنوات و4 أشهر و6 أيام",
      "interregnumDuration": ": \n26 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 101 ش. (20 يولية سنة 385 م.) تنيَّح البابا القديس تيموثاؤس الثاني والعشرون من \nباباوات الكرازة المرقسية وقد تولي هذا القديس الكرسي في \n17 برمهات سنة 95 ش. (14 مارس \n سنة 379 م.) وقد رعي رعية المسيح أحسن رعاية وحرسها من الذئاب الأريوسية \n وفي السنة السادسة من رئاسته ملك ثاؤدسيوس الكبير وفيها أمر الملك بعقد \n المجمع المسكوني بالقسطنطينية لمحاكمة مقدونيوس وسبليوس وأبوليناريوس، \n وأظهر ضلالهم كما هو مذكور في \nاليوم الأول من شهر أمشير."
    },
    "names": {
      "english": "Pope Timothy I of Alexandria",
      "greek": "Πάπας Τιμόθεος Α΄ Αλεξανδρείας",
      "coptic": "Papa Timo;eou =a",
      "amharic": "አባ ጢሞቴዎስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-022.jpg",
        "alt": "St-Takla.org Image: St. Timothy I - Pope Timotheos - Pope of Alexandria and Patriarch of the See of St. Mark (22) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا تيموثاوس الأول (الكبير) - بابا الإسكندرية وبطريرك الكرازة المرقسية (22) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org \nImage: St. Timothy I - Pope Timotheos - Pope of Alexandria and Patriarch of the \nSee of St. Mark (22) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-022.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Timothy I, Coptic Orthodox Pope #22 - He cared for building churches in Alexandria - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا تيموثاوس الكبير البطريرك الثاني والعشرون من بطاركة الكرازة المرقسية: 22، وقد اهتم ببناء الكنائس في الإسكندرية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Timothy I, Coptic Orthodox Pope #22 - He cared for building churches in Alexandria - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع",
    "index": 23,
    "name": "البابا ثاؤفيلس",
    "years": "385 - 412 م.",
    "durationYears": "27",
    "durationMonths": "2",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-023-Pope-Theophilus-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nثاؤفيلس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n22 مسرى 101 للشهداء - 16 أغسطس 385 \n للميلاد",
          "links": [
            {
              "text": "22 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/22-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n18 بابه 128 للشهداء - 15 أكتوبر 412 \n للميلاد",
          "links": [
            {
              "text": "18 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/18-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n27 سنة وشهران",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nيومان",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nثيؤدوسيوس - اركاديوس - ثيؤدوسيوس الثاني",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nثاوفيلوس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ23",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nثاوفيلوس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ23",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/023-Pope-Theophilus.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n27 سنة وشهران",
      "interregnumDuration": ": \nيومان",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 404 ميلادية تنيَّح الأب \n القديس الأنبا ثاؤفيلس الثالث والعشرون من \n\nباباوات الأسكندرية، كان \n تلميذا للأب القديس أثناسيوس الرسولي، وتربى عنده، وتأدب منه الأدب \n الروحاني."
    },
    "names": {
      "english": "Pope Theophilus I of Alexandria",
      "greek": "Πάπας Θεόφιλος Αλεξανδρείας",
      "coptic": "pi`agioc Qe`oviloc أو \nPapa :e`ovilou =a",
      "amharic": "አባ ቴዎፍሎስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-023.jpg",
        "alt": "St-Takla.org Image: St. Theophilus - Pope Theophilos - Pope of Alexandria and Patriarch of the See of St. Mark (23) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ثاؤفيلس - بابا الإسكندرية وبطريرك الكرازة المرقسية (23) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org \nImage: St. Theophilus - Pope Theophilos - Pope of Alexandria and Patriarch of \nthe See of St. Mark (23) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/023-Pope-Theophilus/www-St-Takla-org--Coptic-Pope-Theophilus-23-001.jpg",
        "alt": "St-Takla.org Image: His Holiness Saint PopeTheophilus and the Serapeum. Gospel book in hand، stands triumphantly atop the Serapeum in 391. The cult image of Serapis، crowned with the modius، is visible within the temple at the bottom. Marginal illustration from a chronicle written in Alexandria in the early fifth century، thus providing a nearly contemporary portrait of Theophilus. صورة في موقع الأنبا تكلا: قداسة البابا المعظم القديس الأنبا ثيؤفيلوس بابا الإسكندرية الثالث والعشرون معه سيراف، والإنجيل المقدس في يده، ويقف ظافرًا بجانب السيرافيم - الصورة ترجع إلى سنة 391 تقريبًا في معبد السيرابيس، ويوجد صور توضيحية جانبية تعود إلى أوائل القرن الخامس الميلادي، مما يوضح أن هذه الصورة هي صورة معاصرة في ذلك الحين تقريبًا للبابا ثيوفيلس السكندري.",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Saint PopeTheophilus and the Serapeum. Gospel book in hand، stands \ntriumphantly atop the Serapeum in 391. The cult image of Serapis، crowned with \nthe modius، is visible within the temple at the bottom. Marginal illustration \nfrom a chronicle written in Alexandria in the early fifth century، thus \nproviding a nearly contemporary portrait of Theophilus."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس",
    "index": 24,
    "name": "البابا كيرلس الأول (كيرلس عمود الدين | كيرلس الكبير)",
    "years": "412 - 444 م.",
    "durationYears": "31",
    "durationMonths": "8",
    "durationDays": "10",
    "link": "Life-of-Coptic-Pope-024-Pope-Cyril-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nكيرلس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n20 بابه 128 للشهداء - 17 أكتوبر 412 \n للميلاد",
          "links": [
            {
              "text": "20 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/20-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n3 أبيب 160 للشهداء - 27 يونيو 444 \n للميلاد",
          "links": [
            {
              "text": "3 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/03-Abeeb.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n31 سنة و8 أشهر و10 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة بوكاليا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة بوكاليا",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nثيؤدوسيوس الثاني",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nكيرلس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ24",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nكيرلس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ24",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/024-Saint-Pope-Cyril-The-Great.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n31 سنة و8 أشهر و10 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 160 ش. (27 يونية سنة 444 م.) \n تنيَّح الأب العظيم عمود الدين ومصباح الكنيسة الأرثوذكسية القديس كيرلس \n الأول البابا الإسكندري والبطريرك الرابع والعشرون."
    },
    "names": {
      "english": "Pope Cyril of Alexandria",
      "greek": "Πάπας Κύριλλος Α΄ Αλεξανδρείας",
      "coptic": "pi`agioc Kirilloc أو \nPapa Kurillou =a",
      "amharic": "አባ ቄርሎስ ዓምደ ሃይማኖት - اللغة اللاتينية: Cyrillus Alexandrinus."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-024.jpg",
        "alt": "St-Takla.org Image: St. Cyril the Pillar of Faith - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of St. Mark (24) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا كيرلس الأول (كيرلس عمود الدين | كيرلس الكبير) - بابا الإسكندرية وبطريرك الكرازة المرقسية (24) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cyril the Pillar of Faith - Pope Kyrillos - Pope of Alexandria and Patriarch \nof the See of St. Mark (24) - Arabic, Coptic and English name - Designed by \nMichael Ghaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/024-Saint-Pope-Cyril-The-Great/www-St-Takla-org--Saint-Pope-Cyril-The-Great-02.jpg",
        "alt": "St-Takla.org Image: Saint Cyril the Great of Alexandria, Coptic pope, modern Coptic icon صورة في موقع الأنبا تكلا: أيقونة قبطية حديثة تصور القديس البابا كيرلس الكبير بابا الإسكندرية وبطريرك الكرازة المرقسية",
        "title": "",
        "caption": "St-Takla.org Image:\nSaint Cyril the Great of Alexandria, Coptic pope, modern Coptic icon."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/024-Saint-Pope-Cyril-The-Great/www-St-Takla-org--Saint-Pope-Cyril-The-Great-01.jpg",
        "alt": "St-Takla.org Image: Saint Cyril the Great of Alexandria, Coptic pope, modern Coptic icon ",
        "title": "",
        "caption": "St-Takla.org Image:\nSaint Cyril the Great of Alexandria, Coptic pope, modern Coptic icon."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/024-Saint-Pope-Cyril-The-Great/www-St-Takla-org--Saint-Pope-Cyril-The-Great-03.jpg",
        "alt": "St-Takla.org Image: Saint Cyril the Great Coptic Pope of Alexandria. صورة في موقع الأنبا تكلا: أيقونة قبطية، قداسة البابا القديس كيرلس الكبير، عمود الدين بابا الإسكندرية.",
        "title": "",
        "caption": "St-Takla.org Image: Saint Cyril the Great Coptic Pope of Alexandria."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس",
    "index": 25,
    "name": "البابا ديسقورس الأول (بطل الأرثوذكسية)",
    "years": "444 - 454 م.",
    "durationYears": "10",
    "durationMonths": "1",
    "durationDays": "9",
    "link": "Life-of-Coptic-Pope-025-Pope-Dioscorus-I_.html",
    "moreInfo": {
      "birthPlace": "الإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: ديوسقوروس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 مسرى 160 للشهداء - 26 يوليو 444 \n للميلاد",
          "links": [
            {
              "text": "2 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/02-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n7 توت 171 للشهداء - 4 سبتمبر 454 للميلاد",
          "links": [
            {
              "text": "7 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/07-Toot.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: 10 سنوات وشهرًا واحدًا و9 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: سنة واحدة",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية والمنفي",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: جزيرة غاغرا Gagra بفلاغونيا",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: ثيؤدوسيوس الثاني - مارقيانوس",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\n\n\nصور قداسة البابا المعظم الأنبا \nديسقوروس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ25",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nديسقوروس الأول، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ25",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/025-Saint-Pope-Dioscorus.html"
            }
          ]
        }
      ],
      "durationOnThrone": "10 سنوات وشهرًا واحدًا و9 أيام",
      "interregnumDuration": "سنة واحدة",
      "residence": "المرقسية بالإسكندرية والمنفي",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Dioscorus I of Alexandria / Dioscorus the Great",
      "greek": "Πάπας Διόσκορος Α΄ Αλεξανδρείας",
      "coptic": "penca' Diockoroc أو \nPapa Diockorou =a",
      "amharic": "አባ ዲዮስቆሮስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-025.jpg",
        "alt": "St-Takla.org Image: St. Dioscorus the Champion of Orthodoxy - Pope Dioscoros - Pope of Alexandria and Patriarch of the See of St. Mark (25) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ديسقورس الأول (بطل الأرثوذكسية) - بابا الإسكندرية وبطريرك الكرازة المرقسية (25) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Dioscorus the Champion of Orthodoxy - Pope Dioscoros - Pope of Alexandria \nand Patriarch of the See of St. Mark (25) - Arabic, Coptic and English name - \nDesigned by Michael Ghaly for St-Takla.org, November 2019"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/025-Saint-Pope-Dioscorus/www-st-takla-org--st-dioscorus-the-great-10.jpg",
        "alt": "St-Takla.org Image: Modern Coptic icon of His Holiness Pope Dioscorus I of Alexandria. صورة في موقع الأنبا تكلا: أيقونة قبطية حديثة تصور قداسة البابا المعظم الأنبا ديسقورس الكبير بابا الإسكندرية.",
        "title": "",
        "caption": "St-Takla.org Image: Modern Coptic icon of His Holiness Pope Dioscorus I of Alexandria."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/025-Saint-Pope-Dioscorus/www-St-Takla-org--Saint-Pope-Dioscorus-02.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Dioscorus I of Alexandria, hand drawn. صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا ديسقوروس الأول حامي الإيمان، رسم باليد.",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Dioscorus I of Alexandria, hand drawn."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/025-Saint-Pope-Dioscorus/www-St-Takla-org--Saint-Pope-Dioscorus-03.jpg",
        "alt": "St-Takla.org Image: His Holiness Saint Pope Dioscorus I of Alexandria, Egypt - modern Coptic icon صورة في موقع الأنبا تكلا: قداسة البابا المعظم القديس الأنبا ديسقورس 25 - أيقونة قبطية حديثة",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Saint Pope Dioscorus I of Alexandria, Egypt - modern Coptic icon"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس",
    "index": 26,
    "name": "البابا تيموثاوس الثاني",
    "years": "455 - 477 م.",
    "durationYears": "21",
    "durationMonths": "10",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-026-Pope-Timothy-II_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nتيموثاوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n3 بابه 172 للشهداء - أول أكتوبر 455 \n للميلاد",
          "links": [
            {
              "text": "3 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/03-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n7 مسرى 193 للشهداء - 31 يوليو 477 \n للميلاد",
          "links": [
            {
              "text": "7 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/07-Mesraa.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n21 سنة و10 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية والمنفي",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nلاون الأول - لاون الثاني - زينون",
          "links": []
        }
      ],
      "durationOnThrone": ": \n21 سنة و10 أشهر",
      "interregnumDuration": ": \nشهرًا واحدًا",
      "residence": ": \n\nالمرقسية بالإسكندرية والمنفي",
      "synaxariumText": "في مثل هذا اليوم من سنة 193 ش. (31 يوليه سنة 477 م. \n ) تنيَّح البابا القديس تيموثاوس الثاني البطريرك السادس والعشرون من \n \nباباوات الكرازة المرقسية وقد اختير هذا الأب للبطريركية بعد نياحة \nالأب \n المجاهد البابا ديسقورس في \n3 بابه سنة 173 ش. (أول أكتوبر سنة 455 م.) \n وحلت به شدائد كثيرة في سبيل المحافظة علي الإيمان الأرثوذكسي حيث نفاه \n الملك لاون الكبير إلى جزيرة غاغرا Gagra بفلاغونيا ولبث في منفاه سبع سنوات \n إلى أن أعاده الملك لاون الصغير بكرامة عظيمة وقضي بقية أيامه في تثبيت \n المؤمنين علي الإيمان المستقيم وتنيَّح بسلام بعد أن جلس علي الكرسي \n المرقسي واحد وعشرين سنة وعشرة شهور."
    },
    "names": {
      "english": "Pope Timothy II of Alexandria / Timothy Ailuros",
      "greek": "Πάπας Τιμόθεος Β΄ Αλεξανδρείας",
      "coptic": "Papa Timo;eou =b",
      "amharic": "አባ ጢሞቴዎስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-026.jpg",
        "alt": "St-Takla.org Image: St. Timothy II - Pope Timotheos - Pope of Alexandria and Patriarch of the See of St. Mark (26) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا تيموثاوس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (26) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Timothy II - Pope Timotheos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (26) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-026.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Timothy II, Coptic Orthodox Pope #26, and behind him is the silhouette of Emperor Leo I, who exiled him to the island of Gangra in Paphlagonia - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا تيموثاوس الثاني البطريرك السادس والعشرون من بطاركة الكرازة المرقسية: 26، وبخلفه خيال الإمبراطور ليو الأول الذي نفاه إلى جزيرة جانجرا في بافلاجونيا. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Timothy II, Coptic Orthodox Pope #26, and behind him is the silhouette of Emperor Leo I, who exiled him to the island of Gangra in Paphlagonia - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس",
    "index": 27,
    "name": "البابا بطرس الثالث",
    "years": "477 - 489 م.",
    "durationYears": "13",
    "durationMonths": "1",
    "durationDays": "29",
    "link": "Life-of-Coptic-Pope-027-Pope-Peter-III_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبطرس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 توت 194 للشهداء - أول سبتمبر 477 \n للميلاد",
          "links": [
            {
              "text": "4 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/04-Toot.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n2 هاتور 206 للشهداء - 29 أكتوبر 489 \n للميلاد",
          "links": [
            {
              "text": "2 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/02-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n13 سنة وشهرًا واحدًا و29 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية والمنفي",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nزينون",
          "links": []
        }
      ],
      "durationOnThrone": ": \n13 سنة وشهرًا واحدًا و29 يومًا",
      "interregnumDuration": ": \nشهرًا واحدًا",
      "residence": ": \n\nالمرقسية بالإسكندرية والمنفي",
      "synaxariumText": "في مثل هذا اليوم من سنة 481 ميلادية تنيَّح القديس \n العظيم الأنبا بطرس السابع والعشرون من \n\nباباوات الأسكندرية. وقد قدم \n بطريركًا بعد نياحة القديس تيموثاوس البابا السادس والعشرين. وبعد جلوسه \n علي الكرسي الرسولي بقليل وصلت إليه من القديس أكاكيوس بطريرك \n القسطنطينية رسالة، يعترف فيها بالطبيعة الواحدة، كقول \nالقديس كيرلس \n والقديس ديسقورس، وأوضح فيها أنه لا يصح أن يقال بالطبيعتين بعد الاتحاد \n لئلا تبطل فائدة الاتحاد. فأجاب الأب بطرس برسالة يعلن فيها قبوله في \n الأمانة المستقيمة، وأرسلها مع ثلاثة من علماء الأساقفة فقبلهم الأب \n أكاكيوس بالاحترام وشاركهم في صلاة القداس وقرا الرسالة علي خاصته ومن \n يشايعه (يؤيده)، ثم كتب رسالة أخرى جامعة إلى الأب بطرس الذي عند وصولها إليه \n جمع الآباء والأساقفة وقرأها عليهم، ففرحوا بها واستحسنوا عباراتها \n ومعانيها، واعترفوا بشركته معهم في الأمانة الأرثوذكسية. وقد قاسي هذا الأب شدائد كثيرة من المخالفين له في الدين وفي الرأي ونفي من كرسيه مرة \n ثم عاد. وكان في نفيه مداوما علي تعليم الرعية ووعظها برسائله التي \n يرسلها إليهم. وفي حضوره بأقواله. وأقام علي الكرسي المرقسي ثماني سنين \n . ثم تنيَّح بسلام."
    },
    "names": {
      "english": "Pope Peter III of Alexandria / Peter Mongus",
      "greek": "Πάπας Πέτρος Γ΄ Αλεξανδρείας",
      "coptic": "Papa Petrou =g",
      "amharic": "አባ ጴጥሮስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-027.jpg",
        "alt": "St-Takla.org Image: St. Peter III - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (27) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا بطرس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (27) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter III - Pope Petros - Pope of Alexandria and Patriarch of the See of St. \nMark (27) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-027.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter III, Coptic Orthodox Pope #27, and next to him is a picture of Saint Acacius, Patriarch of Constantinople, a partner in the orthodox faith. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بطرس الثالث البطريرك السابع والعشرون من بطاركة الكرازة المرقسية: 27، وبجانبه صورة القديس أكاكيوس بطريرك القسطنطينية الشريك في الإيمان القويم. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Peter III, Coptic Orthodox Pope #27, and next to him is a picture of Saint Acacius, Patriarch of Constantinople, a partner in the orthodox faith. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس",
    "index": 28,
    "name": "البابا أثناسيوس الثاني",
    "years": "489 - 496 م.",
    "durationYears": "6",
    "durationMonths": "9",
    "durationDays": "20",
    "link": "Life-of-Coptic-Pope-028-Pope-Athanasius-II_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأثناسيوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 كيهك 206 للشهداء - 27 نوفمبر 489 \n للميلاد",
          "links": [
            {
              "text": "2 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/02-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n20 توت 213 للشهداء - 17 سبتمبر 496 \n للميلاد",
          "links": [
            {
              "text": "20 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/20-Toot.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 سنوات و9 أشهر و20 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n13 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية والمنفي",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nزينون - أنسطاس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n6 سنوات و9 أشهر و20 يومًا",
      "interregnumDuration": ": \n13 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية والمنفي",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Athanasius II of Alexandria",
      "greek": "Πάπας Αθανάσιος Β΄ Αλεξανδρείας",
      "coptic": "Papa `A;anaciou =b",
      "amharic": "አባ አትናቴዎስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-028.jpg",
        "alt": "St-Takla.org Image: St. Athanasius II - Pope Athanasios - Pope of Alexandria and Patriarch of the See of St. Mark (28) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أثناسيوس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (28) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Athanasius II - Pope Athanasios - Pope of Alexandria and Patriarch of the \nSee of St. Mark (28) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-028.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Athanasius II, Coptic Orthodox Pope #28 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أثناسيوس الثاني البطريرك الثامن من بطاركة الكرازة المرقسية: 28. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Athanasius II, Coptic Orthodox Pope #28 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس",
    "index": 29,
    "name": "البابا يوأنس الأول (البابا يوحنا الأول)",
    "years": "496 - 505 م.",
    "durationYears": "8",
    "durationMonths": "7",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-029-Pope-John-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحنا",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول بابه 213 للشهداء - 29 سبتمبر 496 \n للميلاد",
          "links": [
            {
              "text": "أول بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/01-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n4 بشنس 221 للشهداء - 29 أبريل 505 \n للميلاد",
          "links": [
            {
              "text": "4 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/04-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n8 سنوات و7 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: أنسطاس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n8 سنوات و7 أشهر",
      "interregnumDuration": ": \nشهرًا واحدًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 221 ش. (29 أبريل سنة 505 م.) تنيَّح البابا القديس يوحنا التاسع والعشرون من \nباباوات الكرازة المرقسية \n . وقد ولد هذا الأب بمدينة الإسكندرية من أبوين مسيحيين ومال منذ حداثته \n إلى حياة الرهبنة فترهب ببرية القديس مقاريوس واختير للبطريركية بعد\nسلفه \n البابا أثناسيوس فتمنع ولكن الأساقفة والكهنة والأراخنة أخذوه قهرًا \n ورسموه في \nأول بابه سنة 213 ش. (29 سبتمبر سنة 496 م.) فلما جلس علي \n الكرسي اهتم اهتمامًا زائدًا بالتعليم والوعظ وتثبيت المؤمنين علي الإيمان \n المستقيم وهو أول بطريرك أخذ من الرهبان."
    },
    "names": {
      "english": "Pope John I of Alexandria",
      "greek": "Πάπας Ιωάννης Β΄ της Αλεξάνδρειας",
      "coptic": "pi`agioc Iwannhc / \nPapa Iwannou =a",
      "amharic": "አባ ዮሐንስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-029.jpg",
        "alt": "St-Takla.org Image: St. John I - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (29) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا يوأنس الأول (البابا يوحنا الأول) - بابا الإسكندرية وبطريرك الكرازة المرقسية (29) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John I - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (29) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-029.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope John I, Coptic Orthodox Pope #29, and next to him is a coin of Emperor Zeno, who used to send the needs of Coptic monasteries. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الأول البطريرك التاسع والعشرون من بطاركة الكرازة المرقسية: 29، وبجانبه عملة الإمبراطور زينون الذي كان يرسل احتياجات الأديرة القبطية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope John I, Coptic Orthodox Pope #29, and next to him is a coin of Emperor Zeno, who used to send the needs of Coptic monasteries. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس",
    "index": 30,
    "name": "البابا يوأنس الثاني",
    "years": "505 - 516 م.",
    "durationYears": "10",
    "durationMonths": "11",
    "durationDays": "23",
    "link": "Life-of-Coptic-Pope-030-Pope-John-II_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحنا",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\n\nدير الزجاج (دير الغار)",
          "links": [
            {
              "text": "دير الزجاج (دير الغار)",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n3 بؤونه 221 للشهداء - 29 مايو 505 \n للميلاد",
          "links": [
            {
              "text": "3 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/03-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n27 بشنس 232 للشهداء - 22 مايو 516 \n للميلاد",
          "links": [
            {
              "text": "27 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/27-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات و11 شهرًا و23 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n7 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأنسطاس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n10 سنوات و11 شهرًا و23 يومًا",
      "interregnumDuration": ": \n7 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 232 ش. (22 مايو سنة 16 5م) \n تنيَّح البابا القديس الأنبا يوأنس الثاني البطريرك الثلاثون من \nباباوات الكرازة المرقسية. وكان قد ترهب منذ حداثته وأجهد نفسه بكل أنواع الجهاد \n وأقام في مكان منفرد، وزاد في نسكه وتقشفه فذاع صيته لعلمه وتقواه \n فاختير لبطريركية المدينة العظمي الإسكندرية في \n3 بؤونه سنة 221 ش. (29 \n مايو سنة 505 م.) فكتب ميامر وعظات كثيرة وكانت الكنيسة في أيامه في هدوء \n وسلام وساعد علي ذلك تربع الملك البار الأرثوذكسي أنسطاسيوس علي أريكة \n الملك وكان يجلس علي كرسي إنطاكية في ذلك الحين \nالقديس ساويرس الذي كتب \n إلى الأنبا يؤنس رسالة في الاتحاد قال فيها: \"أن المسيح إلهنا من بعد \n الاتحاد طبيعة واحدة مشيئة واحدة من غير افتراق. وانه يؤمن بإيمان الأب \n كيرلس والأب ديسقورس\"."
    },
    "names": {
      "english": "Pope John II of Alexandria / John Niciota",
      "greek": "Πάπας Ιωάννης Γ΄ Αλεξανδρείας",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =b",
      "amharic": "አባ ዮሐንስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-030.jpg",
        "alt": "St-Takla.org Image: St. John II - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (30) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا يوأنس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (30) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John II - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (30) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-030.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope John II, Coptic Orthodox Pope #30 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الثاني البطريرك الثلاثون من بطاركة الكرازة المرقسية: 30. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope John II, Coptic Orthodox Pope #30 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس",
    "index": 31,
    "name": "البابا ديسقورس الثاني",
    "years": "516 - 518 م.",
    "durationYears": "2",
    "durationMonths": "4",
    "durationDays": "15",
    "link": "Life-of-Coptic-Pope-031-Pope-Dioscorus-II_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nديسقوروس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n3 بؤؤنه 232 للشهداء - 29 مايو 516 \n للميلاد",
          "links": [
            {
              "text": "3 بؤؤنه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/03-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n17 \nبابه 235 للشهداء - 14 أكتوبر 518 للميلاد",
          "links": [
            {
              "text": "17 \nبابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/17-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنتان و4 أشهر و15 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n25 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: أنسطاس - جيستنيوس الأول",
          "links": []
        }
      ],
      "durationOnThrone": ": \nسنتان و4 أشهر و15 يومًا",
      "interregnumDuration": ": \n25 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 511 ميلادية تنيَّح الأب \n القديس ديسقورس الحادي والثلاثون من\n\nباباوات الأسكندرية. وقد قدم بطريركًا \n بإرشاد الروح القدس بعد نياحة \nسلفه القديس يوحنا. كان هذا الأب وديعًا في \n أخلاقه، فاضلا في علمه وعمله، كاملًا في حياته. حتى أنه لم يكن من يشبهه \n في جيله. فقدم بطريركًا بإرشاد الروح القدس، وكانت باكورة أعماله أنه بعد \n ارتقائه الكرسي المرقسي كتب رسالة جامعة إلى \nالأب القديس ساويرس بطريرك \n إنطاكية ضمنها القول عن الثالوث الأقدس المساوي في الجوهر والألوهية، ثم \n شرح التجسد، وأن الله الكلمة قد اتحد بجسد بشرى كامل في كل شيء بنفس عاقلة \n ناطقة، وأنه صار معه بالاتحاد ابنًا واحدًا، ربًا واحدًا، لا يفترق إلى \n اثنين، وأن الثالوث واحد قبل الاتحاد وبعده، لم تدخل عليه زيادة بالتجسد."
    },
    "names": {
      "english": "Pope Dioscorus II of Alexandria",
      "greek": "Πάπας Διόσκορος Β΄ Αλεξανδρείας",
      "coptic": "Diockoroc أو \nPapa Diockorou =b",
      "amharic": "አባ ዲዮስቆሮስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-031.jpg",
        "alt": "St-Takla.org Image: St. Dioscorus II - Pope Dioscoros - Pope of Alexandria and Patriarch of the See of St. Mark (31) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ديسقورس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (31) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Dioscorus II - Pope Dioscoros - Pope of Alexandria and Patriarch of the See \nof St. Mark (31) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-031.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Dioscorus II, Coptic Orthodox Pope #31 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ديسقورس الثاني البطريرك الحادي والثلاثون من بطاركة الكرازة المرقسية: 31. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Dioscorus II, Coptic Orthodox Pope #31 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس",
    "index": 32,
    "name": "البابا تيموثاوس الثالث",
    "years": "518 - 536 م.",
    "durationYears": "17",
    "durationMonths": "3",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-032-Pope-Timothy-III_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nتيموثاوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n1 هاتور 235 للشهداء - 8 نوفمبر 518 \n للميلاد",
          "links": [
            {
              "text": "1 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/01-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n13 أمشير 252 للشهداء - 8 فبراير 536 \n للميلاد",
          "links": [
            {
              "text": "13 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/13-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n17 سنة و3 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nيومان",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nجيستنيوس الأول - جيستنيانوس \nالثاني (؟)",
          "links": []
        }
      ],
      "durationOnThrone": ": \n17 سنة و3 أشهر",
      "interregnumDuration": ": \nيومان",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 528 م. تنيَّح الأب القديس \n الأنبا تيموثاوس الثالث بابا الإسكندرية الثاني والثلاثون. وكان جلوسه \n علي الكرسي الرسولي سنة 511 م.، وقد نالت هذا \nالأب شدائد كثيرة بسبب \n المحافظة علي الإيمان المستقيم. وحضر في أيامه \n\nالقديس ساويرس بطريرك \n انطاكية إلي الديار المصرية هربًا من الاضطهاد. وتجول الاثنان في البلاد \n والأديرة يثبتان الشعب علي المعتقد الأرثوذكسي. ولأنه لم يوافق الملك \n مرقيان علي قوانين المجمع الخليقدوني، فقد نفاه عن كرسيه. وفي يوم نفيه \n عارض المؤمنين في تنفيذ الأمر، فقتل منهم بأمر الملك نحو مئتي \nألف نفس. و\n قد تنيَّح هذا الأب في المنفي هو والقديس ساويرس الأنطاكي بعد أن أقام علي \n الكرسي المرقسي 17 سنة صلاته تكون معنا. ولربنا المجد دائمًا أبديًا آمين."
    },
    "names": {
      "english": "Pope Timothy III of Alexandria",
      "greek": "Πάπας Τιμόθεος Γ΄ Αλεξανδρείας",
      "coptic": "Papa Timo;eou =g",
      "amharic": "አባ ጢሞቴዎስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-032.jpg",
        "alt": "St-Takla.org Image: St. Timothy III - Pope Timotheos - Pope of Alexandria and Patriarch of the See of St. Mark (32) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا تيموثاوس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (32) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Timothy III - Pope Timotheos - Pope of Alexandria and Patriarch of the See \nof St. Mark (32) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-032.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Timothy III, Coptic Orthodox Pope #32, and next to him is the icon of Saint Bishop Severus, Patriarch of Antioch, who came to Egypt to escape persecution. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا تيموثاوس الثالث البطريرك الثاني والثلاثون من بطاركة الكرازة المرقسية: 32، وبجانبه أيقونة القديس الأنبا ساويرس بطريرك أنطاكية الذي أتى إلى مصر هربًا من الاضطهاد. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Timothy III, Coptic Orthodox Pope #32, and next to him is the icon of Saint Bishop Severus, Patriarch of Antioch, who came to Egypt to escape persecution. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس",
    "index": 33,
    "name": "البابا \nثيودوسيوس الأول",
    "years": "536 - 567 م.",
    "durationYears": "31",
    "durationMonths": "4",
    "durationDays": "15",
    "link": "Life-of-Coptic-Pope-033-Pope-Theodosius-I_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nهاودوسيوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n15 أمشير 252 للشهداء - 10 نوفمبر 536 \n للميلاد",
          "links": [
            {
              "text": "15 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/15-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n28 بؤونه 283 للشهداء - 22 يونيو 567 \n للميلاد",
          "links": [
            {
              "text": "28 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/28-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n31 سنة و4 أشهر و15 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و3 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية ثم المنفي",
          "links": [
            {
              "text": "المرقسية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: جيستنيانوس الأول - جيستنيوس الثاني",
          "links": []
        }
      ],
      "durationOnThrone": ": \n31 سنة و4 أشهر و15 يومًا",
      "interregnumDuration": ": \nشهرًا واحدًا و3 أيام",
      "residence": ": \n\nالمرقسية ثم المنفي",
      "synaxariumText": "في مثل هذا اليوم من سنة 283 ش. (22 يونيو سنة 567 م. \n ) تنيَّح القديس ثاؤدسيوس البطريرك الثالث والثلاثين من \nباباوات الكرازة المرقسية. وذلك أنه بعد نياحة \nتيموثاوس أجتمع الأساقفة والشعب \n الأرثوذكسي ورسموا هذا الأب بطريركا وكان عالما حافظا لكتب الكنيسة وبعد \n أيام أثار عليه عدو الخير قوما أشرارًا من أهل المدينة وأخذوا فاكيوس رئيس \n شمامسة كنيسة الإسكندرية ورسموه بطريركا بمعاونة يوليانوس. الذي كان \n البابا تيموثاوس قد حرمه لموافقته لمجمع خلقيدونية. ولما رسم فاكيوس نفوا \n البابا ثاؤدسيوس إلى جرسيمانوس وكان \nالقديس ساويرس الأنطاكي يقيم في سخا \n من بلاد مصر وكان يعزيه ويصبره ذاكرا له ما جرى للرسل وليوحنا ذهبي الفم. \n وبعد ستة أشهر من نفيه ذهب إلى مليج وأقام بها سنتين وبعد ذلك تقدم أهل \n الإسكندرية إلى الوالي وطلبوا منه أن يأمر بإعادة راعيهم الشرعي وطرد \n فاكيوس الدخيل ووصل الخبر إلى الملك يوستينيانوس والملكة المحبة للإله \n ثاؤذورا. فأرسلت تسأل عن صحة رسامة البابا ثاؤدسيوس حتى إذا كانت طبق \n القانون يتسلم كرسيه فعقدوا مجمعا من الشعب ومائة وعشرين كاهنًا وأجمعوا \n علي أن ثاؤدسيوس رسم باتفاق الأساقفة والشعب وفقًا للقانون. وكان فاكيوس \n حاضرًا في المجمع فوقف معترفًا بأنه هو المعتدي وطلب مسامحته علي أن يبقي \n رئيس شمامسة كما كان قبلا وأرسلوا للملكة بذلك غير أنه لما كان الملك \n موافقا علي المعتقد غير الصحيح فكتب إلى نائبه في الإسكندرية يقول: \"إذا \n اتفق معنا البطريرك ثاؤدسيوس في الإيمان فتضاف إليه مع البطريركية \n الولاية علي الإسكندرية وإذ لم يوافق يخرج من المدينة\" فلما سمع \n البطريرك هذا القول قال: \"هكذا الشيطان قال للسيد المسيح بعد ما أراه \n جميع مماليك العالم ومجدها أعطيك هذه جميعها أن خررت وسجدت لي\" (مت 4: \n 8 و9) ثم خرج من المدينة ومضي إلى الصعيد وأقام هناك يثبت المؤمنين. ثم استدعاه \n الملك إلى القسطنطينية فذهب إليها مع بعض الكهنة العلماء فتلقاه الملك \n بإكرام عظيم وأجلسه في مكان ممتاز وأخذ يتملقه ويخاطبه بلطف لكي يوافق \n علي معتقد مجمع خلقيدونية وإذ لم يوافقه نفاه إلى صعيد مصر وأقام عوضا \n عنه شخصًا يسمي بولس فلما وصل هذا إلى الإسكندرية لم يقبله أهلها ولبث سنة \n لم يتقرب إليه إلا نفر قليل. ولما وصل هذا الأمر إلى الملك أمر بإغلاق \n الكنائس حتى يخضعوا للبطريرك الذي عينه الملك فبني المؤمنون كنيسة علي \n اسم القديس مرقس خارج المدينة وأخري علي اسم القديسين قزمان ودميان \n وكانوا يتقربون فيهما ويعمدون أولادهم."
    },
    "names": {
      "english": "Pope Theodosius I of Alexandria",
      "greek": "Πάπας Θεοδόσιος Α΄ Αλεξανδρείας",
      "coptic": "pi`agioc Qe`odocioc أو \nPapa :e`odocioc =a",
      "amharic": "አባ ቴዎዶሲዮስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-033.jpg",
        "alt": "St-Takla.org Image: St. Theodosius I - Pope Theodosios - Pope of Alexandria and Patriarch of the See of St. Mark (33) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا ثيودوسيوس الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (33) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Theodosius I - Pope Theodosios - Pope of Alexandria and Patriarch of the See \nof St. Mark (33) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-033.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Theodosius I, Coptic Orthodox Pope #33, and below the picture are the two who were ordained patriarchs in his time. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ثيودوسيوس الأول البطريرك الثالث والثلاثون من بطاركة الكرازة المرقسية: 33، وبأسفل الصورة الاثنان الذان تم رسامتها بطاركة في عصره. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Theodosius I, Coptic Orthodox Pope #33, and below the picture are the two who were ordained patriarchs in his time. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس",
    "index": 34,
    "name": "البابا بطرس الرابع",
    "years": "567 - 569 م.",
    "durationYears": "1",
    "durationMonths": "10",
    "durationDays": "25",
    "link": "Life-of-Coptic-Pope-034-Pope-Peter-IV_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبطرس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n1 مسرى 283 للشهداء - 25 يوليو 567 \n للميلاد",
          "links": [
            {
              "text": "1 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/01-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n25 بؤونه 285 للشهداء - 19 يونيو 569 \n للميلاد",
          "links": [
            {
              "text": "25 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/25-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنة واحدة و10 أشهر و25 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n8 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدير الفاتيه وبيعة القديس يوسف\nبدير \n الزجاج",
          "links": [
            {
              "text": "بدير \n الزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nجيستنيوس الثاني",
          "links": []
        }
      ],
      "durationOnThrone": ": \nسنة واحدة و10 أشهر و25 يومًا",
      "interregnumDuration": ": \n8 أيام",
      "residence": ": \nدير الفاتيه وبيعة القديس يوسف\nبدير \n الزجاج",
      "synaxariumText": "في مثل هذا اليوم من سنة 285 ش. (19 يونية 569 م.) \n تنيَّح القديس المجاهد البابا بطرس البطريرك الرابع والثلاثين من \nباباوات الكرازة المرقسية. وذلك لما تنيَّح \nسلفه البابا ثاؤدسيوس في المنفي بأمر \n وسباسيانوس الملك لأنه لم يوافقه علي قرارات مجمع خلقدونية تقدم أعيان \n مدينة الإسكندرية إلى واليها في ذلك الوقت وكان رجلا صالحا مستقيم الرأي \n وأظهروا له ألمهم من خلو الكرسي البطريركي فأشار عليهم أن يذهبوا إلى \n\nدير \nالزجاج. كما لو كانوا ذاهبين للصلاة. ثم يرسموا هناك البطريرك الذي \n يرغبونه. ففرحوا بذلك وأخذ الأساقفة هذا الأب بطرس إلى هناك ورسموه \n بطريركا، في \nأول مسرى سنة 283 ش. (25 يوليه سنة 567 م.) وكان \nالأنبا ساويرس الأنطاكي قد تنيَّح. فلما بلغ أهالي إنطاكية أن المصريين قد رسموا \n لهم بطريركًا رسموا لهم هم أيضا بطريركًا يسمي ثاؤفانيوس وتراسل هو والبابا \n بطرس برسائل الإيمان الأرثوذكسي. وكان كل منهما يذكر أخاه في صلاة \n القداس. إلا أن كلا منها لم يجرؤ علي الذهاب إلى مقر كرسيه فكان البابا \n بطرس يقيم في دير أبيفانية قبلي \n\nدير \nالزجاج. كما كان ثاؤفانيوس يقيم في \n دير أفتونيوس بظاهر إنطاكية. وكان يومئذ بظاهر الإسكندرية ستمائة دير \n واثنتان وثلاثون قرية جميع سكانها أرثوذكسيين وكانت مدينة الإسكندرية \n ومدن مصر والصعيد ورهبان \nالأديرة بجبل شيهيت وأثيوبيا والنوبة تحت رئاسة \n البابا بطرس. ولم يكن يفتر عن إرسال الرسائل إلى المؤمنين ليثبتهم علي \n الإيمان المستقيم وكان يطوف أديرة الإسكندرية وقراها يعلمهم ويعظهم \n ويثبتهم وكان قد اختر رجلًا قديسًا عالمًا يسمي داميانوس وجعله كاتبًا له \n وأوكل إليه الاهتمام بالكنائس وهو الذي صار بطريركا بعده أما البابا بطرس \n فقد استمر في الاهتمام برعيته وتثبيتهم علي الإيمان الأرثوذكسي حتى تنيَّح \n بسلام. صلاته تكون معنا. ولربنا المجد دائمًا. آمين."
    },
    "names": {
      "english": "Pope Peter IV of Alexandria",
      "greek": "Πάπας Πέτρος Δ΄",
      "coptic": "Papa Petrou =d",
      "amharic": "አባ ጴጥሮስ 4ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-034.jpg",
        "alt": "St-Takla.org Image: St. Peter IV - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (34) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا بطرس الرابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (34) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter IV - Pope Petros - Pope of Alexandria and Patriarch of the See of St. \nMark (34) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-034.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter IV, Coptic Orthodox Pope #34, and next to him is the icon of the monk Damian, who helped him in his service and became patriarch after him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بطرس الرابع البطريرك الرابع والثلاثون من بطاركة الكرازة المرقسية: 34، وبجانبه أيقونة الراهب دميان الذي ساعده في الخدمة وأصبح بطريركا بعده. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Peter IV, Coptic Orthodox Pope #34, and next to him is the icon of the monk Damian, who helped him in his service and became patriarch after him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس",
    "index": 35,
    "name": "البابا دميان",
    "years": "569 - 605 م.",
    "durationYears": "35",
    "durationMonths": "11",
    "durationDays": "16",
    "link": "Life-of-Coptic-Pope-035-Pope-Damian_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nداميانوس | دميان",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير \nباتيرون وبويحنس",
          "links": [
            {
              "text": "دير \nباتيرون",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            },
            {
              "text": "بويحنس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-yehnes-the-short/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 أبيب 285 للشهداء - 26 يونيو 569 \n للميلاد (563؟)",
          "links": [
            {
              "text": "2 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/02-Abeeb.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n18 بؤونه 321 للشهداء - 12 يونيو 605 \n للميلاد (598؟)",
          "links": [
            {
              "text": "18 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/18-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n35 سنة و11 شهرًا و16 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n7 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nجيستنيوس الثاني - طيباريوس الثاني - موريسيوس \n- فوكاس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n35 سنة و11 شهرًا و16 يومًا",
      "interregnumDuration": ": \n7 أيام",
      "residence": ": \n\nدير \nالزجاج",
      "synaxariumText": "في مثل هذا اليوم من سنة 321 ش. 12 يونيو سنة 605 م. \n تنيَّح البابا القديس داميانوس البطريرك الخامس والثلاثين من \nباباوات الكرازة المرقسية وقد كان منذ حداثته في \nبرية شيهيت فلبث عابدا مجاهدا ست \n عشرة سنة ورسم شماسا \nبدير القديس يوحنا القصير ثم ذهب إلى \nدير الآباء \n غربي مدينة الإسكندرية وهناك زاد في نسكه."
    },
    "names": {
      "english": "Pope Damian of Alexandria",
      "greek": "Πάπας Δαμιανός",
      "coptic": "Papa Damianou",
      "amharic": "አባ ዳሚአኖስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-035.jpg",
        "alt": "St-Takla.org Image: St. Damian - Pope Damianos - Pope of Alexandria and Patriarch of the See of St. Mark (35) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا دميان - بابا الإسكندرية وبطريرك الكرازة المرقسية (35) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Damian - Pope Damianos - Pope of Alexandria and Patriarch of the See of St. \nMark (35) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/035-pope-damian/www-st-takla-org--pope-damian-of-alexandria-01.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Damian of Alexandria, 35th Pope of Alexandria & Patriarch of the See of St. Mark. صورة في موقع الأنبا تكلا: قداسة البابا دميان (البابا داميانوس)، بابا الإسكندرية وبطريرك الكرازة المرقسية 35.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness \nPope Damian of Alexandria, 35th Pope of Alexandria & Patriarch of \nthe See of St. Mark."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 36,
    "name": "البابا أنسطاسيوس",
    "years": "605 - 616 م.",
    "durationYears": "11",
    "durationMonths": "6",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-036-Pope-Anastasius_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nانسطاسيوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n24 بؤونه 321 للشهداء - 18 يونيو 605 \n للميلاد",
          "links": [
            {
              "text": "24 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/24-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n22 كيهك 332 للشهداء - 18 ديسمبر 616 \n للميلاد",
          "links": [
            {
              "text": "22 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/22-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n11 سنة و6 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nيومان",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nفوكاس -\nهرقل الأول",
          "links": [
            {
              "text": "هرقل الأول",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__18-Al-Hokam-Fi-Misr-05-Herclies.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n11 سنة و6 أشهر",
      "interregnumDuration": ": \nيومان",
      "residence": ": \n\nدير \nالزجاج",
      "synaxariumText": "في مثل هذا اليوم من سنة 611 م. تنيَّح الأب القديس \n أنسطاسيوس السادس والثلاثون من \n\nباباوات الأسكندرية. كان هذا الأب من \n أكابر الإسكندرية، وكان في أول أمره رئيسا علي الديوان، ثم صار فيما \n بعد قسا علي كنيسة الثغر الإسكندري، وبعد قليل اختير للبطريركية، فاهتم \n بالكنائس اهتمامًا زائدًا، ورسم أساقفة وكهنة علي الجهات الخالية، وشيد \n عدة كنائس، واستعاد من الملكيين ما كانوا قد اغتصبوه، لأنه كان محبوبًا \n منهم لعلمه وفضله وتقواه، وارجع كثيرين منهم إلى الإيمان الأرثوذكسي، \n ولما مات ملك القسطنطينية، وشي بعض الأشرار إلى خليفته إن البطريرك لما \n رسم حرم الملك وأمانته، فغضب الملك وأرسل إلى والي الإسكندرية أن يسلم \n إلى أولوجيوس بطريرك الروم كنيسة قزمان ودميان وأوقافها، فحزن الأب من \n ذلك كثيرًا، غير أن الرب عزاه من ناحية أخرى، وذلك أن بطرس المخالف \n بطريرك إنطاكية كان قد مات، وأقيم عِوضًا عنه راهب قديس عالم يسمي \n أثناسيوس قويم المعتقد، الذي بمجرد أن صار بطريركا عمل علي تجديد \n الاتحاد بين كنيستي الإسكندرية وإنطاكية، فكتب رسالة بالإيمان المستقيم، \n وأرسلها إلى الأب أنسطاسيوس ففرح بها جدًا وجمع بعضًا من الأساقفة والكهنة \n وقرأها عليهم، ثم رد علي الأب أثناسيوس بأنه يتمني من صميم قلبه أن يراه، فحضر \nالأب أثناسيوس إلى الإسكندرية ومعه الأساقفة والكهنة، فلما علم \n بقدومه الأب أنسطاسيوس، وكان \nبالأسقيط حضر إلى الإسكندرية وذهب إلى \n البحر مع الأساقفة والكهنة واستقبله بالتحية والإكرام، ثم عقدوا مجمعًا \n بأحد الأديرة التي علي ساحل البحر استمر شهرًا وهم يتباحثون في أصول الدين، ثم عاد البطريرك الأنطاكي إلى كرسيه بسلام، وكان الأب أنسطاسيوس \n مداومًا علي تعليم رعيته بنفسه وبكتبه، وكان من كثرة علمه وفصاحته يكتب \n كل سنة كتابا، وقد ظل علي الكرسي البطريركي اثنتي عشرة سنة وستة أشهر \n وعشرة أيام، كتب أثناءها اثني عشر كتابا رتبها علي حروف الهجاء القبطية \n أي انه ابتداء في أول سنة بحرف A وفي الثانية بحرف B وهكذا إلى إن كتب \n الكتاب الثاني عشر ورسمه بحرف L، ثم تنيَّح بسلام."
    },
    "names": {
      "english": "Pope Anastasius of Alexandria",
      "greek": "Πάπας Αναστάσιος",
      "coptic": "Papa Anactaciou",
      "amharic": "አባ አናስታሲዮስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-036.jpg",
        "alt": "St-Takla.org Image: St. Anastasius - Pope Anastasios - Pope of Alexandria and Patriarch of the See of St. Mark (36) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أنسطاسيوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (36) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Anastasius - Pope Anastasios - Pope of Alexandria and Patriarch of the See \nof St. Mark (36) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-036.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Anastasius, Coptic Orthodox Pope #36, and next to him are the twelve books he wrote, each with the first letter of the Coptic alphabet. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أنسطاسيوس البطريرك السادس والثلاثون من بطاركة الكرازة المرقسية: 36، وبجانبه الكتب الاثني عشر الذين كتبهم، كل بأول حرف في الأبجدية القبطية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Anastasius, Coptic Orthodox Pope #36, and next to him are the twelve books he wrote, each with the first letter of the Coptic alphabet. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 37,
    "name": "البابا أندرونيقوس",
    "years": "616 - 623 م.",
    "durationYears": "6",
    "durationMonths": "",
    "durationDays": "14",
    "link": "Life-of-Coptic-Pope-037-Pope-Andronicus_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nاندرونيقوس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n24 كيهك 332 للشهداء - 20 \nديسمبر 616 للميلاد",
          "links": [
            {
              "text": "24 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/24-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n8 طوبه 339 للشهداء - 3 يناير  623 للميلاد",
          "links": [
            {
              "text": "8 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/08-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 سنوات و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالأنجيليون بالإسكندرية",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nهيرقل الأول",
          "links": [
            {
              "text": "هيرقل الأول",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__18-Al-Hokam-Fi-Misr-05-Herclies.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n6 سنوات و14 يومًا",
      "residence": ": \nالأنجيليون بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 617 م. تنيَّح الأب القديس \n الأنبا أندرونيقوس بابا الإسكندرية السابع والثلاثون. كان هذا الأب من \n عائلة عريقة في المجد. وكان ابن عمه رئيسا لديوان الإسكندرية، فتعلم \n وتهذب ودرس الكتب المقدسة وبرع في معرفة معانيها. ونظرا لعلمه وتقواه \n وتصدقه علي الفقراء رسموه شماسًا، ثم اتفق الرأي علي اختياره بطريركًا. \n وان لم يسكن الديارات كما فعل السلف الصالح، وظل في الإسكندرية طوال \n أيام رئاسته، غير مهتم بسطوة الملكيين. ولكن الجو لم يصفو له لأن الفرس \n قد غزوا بلاد الشرق وجازوا نهر الفرات، واستولوا علي حلب وإنطاكية \n وأورشليم وغيرها، وقتلوا وأسروا من المسيحيين عددًا كبيرًا. ثم استولوا \n علي مصر وجاءوا إلى الإسكندرية وكان حولها ستمائة دير عامرة بالرهبان \n فقتلوا من فيها ونهبوها وهدموها. فلما علم سكان الإسكندرية بما فعلوا \n فتحوا لهم أبواب المدينة ورأي قائد المعسكر في رؤيا الليل من يقول له قد \n سلمت لك هذه المدينة فلا تخربها، بل اقتل أبطالها لأنهم منافقون. فقبض \n علي الوالي وقيده. ثم أمر أكابر المدينة أن يخرجوا إليه رجالها من ابن \n ثماني عشرة سنة إلى خمسين سنة، ليعطي كل واحد عشرين دينارا وبرتبهم \n جنودًا للمدينة. فخرج إليه ثمانون ألف رجل. فكتب أسماءهم ثم قتلهم جميعا \n بالسيف. وبعد ذلك قصد بجيشه الصعيد فمر في طريقه بمدينة نقيوس وسمع أن \n في \nالمغائر التي حولها سبعمائة راهب فأرسل من قتلهم. وظل يعمل في القتل \n والتخريب إلى أن انتصر عليه\n\n هرقل وطرده من البلاد. أما الأب البطريرك \n فإنه سار سيرة فاضلة. وبعد ما أكمل في الرئاسة ست سنين تنيَّح بسلام. \n صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Andronicus of Alexandria",
      "greek": "Πάπας Ανδρόνικος",
      "coptic": "Papa An`dronikou",
      "amharic": "አባ አንድሮኒኩስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-037.jpg",
        "alt": "St-Takla.org Image: St. Andronicus - Pope Andronikos - Pope of Alexandria and Patriarch of the See of St. Mark (37) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019 صورة في موقع الأنبا تكلا: البابا أندرونيقوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (37) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Andronicus - Pope Andronikos - Pope of Alexandria and Patriarch of the See \nof St. Mark (37) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-037.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Andronicus, Coptic Orthodox Pope #37 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أندرونيقوس البطريرك السابع والثلاثون من بطاركة الكرازة المرقسية: 37. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Andronicus, Coptic Orthodox Pope #37 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 38,
    "name": "البابا بنيامين الأول",
    "years": "623 - 662 م.",
    "durationYears": "39",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-038-Pope-Benjamin-I_.html",
    "moreInfo": {
      "birthPlace": ": \nبرشوط - البحيرة",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبرشوط - البحيرة",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبنيامين",
          "links": []
        },
        {
          "text": "من أبناء دير: \nدير قبريوس (قنوبوس)",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 طوبه 339 للشهداء \n - 4 يناير 623 للميلاد",
          "links": [
            {
              "text": "9 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/09-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n8 طوبه 378 للشهداء \n - 3 يناير 663 للميلاد",
          "links": [
            {
              "text": "8 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/08-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n39 سنة",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n6 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدير متراس \n بالإسكندرية",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nهيرقل الأول - \nهرقل الثاني \n- عمر - عثمان - على - حسن بن على - معاوية",
          "links": [
            {
              "text": "هيرقل الأول",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__18-Al-Hokam-Fi-Misr-05-Herclies.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n39 سنة",
      "interregnumDuration": ": \n6 أيام",
      "residence": ": \nدير متراس \n بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 656 م. تنيَّح الأب المغبوط \n القديس الأنبا بنيامين بابا الإسكندرية الثامن والثلاثون. وهذا الأب كان \n من البحيرة من بلدة برشوط وكان أبواه غنيين، وقد ترهب عند شيخ قديس يسمي \n ثاؤنا بدير القديس قنوبوس بجوار الإسكندرية. وكان ينمو في الفضيلة وحفظ \n كتب الكنيسة حتى بلغ درجة الكمال المسيحي. وذات ليلة سمع في رؤيا الليل \n من يقول له افرح يا بنيامين فإنك سترعى قطيع المسيح. ولما اخبر أباه \n بالرؤيا قال له أن الشيطان يريد أن يعرقلك فإياك والكبرياء، فازداد في \n الفضيلة."
    },
    "names": {
      "english": "Pope Benjamin I of Alexandria",
      "greek": "Πάπας Βενιαμίν Α΄",
      "coptic": "Papa Beni`amin =a",
      "amharic": "አባ ቤኒአሚን 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-038.jpg",
        "alt": "t-Takla.org Image: St. Benjamin I - Pope Binyamin - Pope of Alexandria and Patriarch of the See of St. Mark (38) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا بنيامين الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (38) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "t-Takla.org Image:\nSt. Benjamin I - Pope Binyamin - Pope of Alexandria and Patriarch of the See of \nSt. Mark (38) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-038.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Benjamin I, Coptic Orthodox Pope #38, and next to him is the Muslim military leader Amr Ibn Al-As. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بنيامين الأول البطريرك الثامن والثلاثون من بطاركة الكرازة المرقسية: 38، وبجانبه القائد العسكري المسلم عمرو ابن العاص. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Benjamin I, Coptic Orthodox Pope #38, and next to him is the Muslim military leader Amr Ibn Al-As. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 39,
    "name": "البابا أغاثون",
    "years": "662 - 680 م.",
    "durationYears": "18",
    "durationMonths": "9",
    "durationDays": "3",
    "link": "Life-of-Coptic-Pope-039-Pope-Agatho_.html",
    "moreInfo": {
      "birthPlace": ": \nمريوط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمريوط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأغاثون",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n14 طوبه 378 للشهداء - 9 يناير 662 \n للميلاد",
          "links": [
            {
              "text": "14 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/14-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n16 بابه 397 للشهداء - 13 أكتوبر 680 \n للميلاد",
          "links": [
            {
              "text": "16 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/16-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n18 سنة و9 أشهر و3 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمعاوية بن أبي سفيان",
          "links": []
        }
      ],
      "durationOnThrone": ": \n18 سنة و9 أشهر و3 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و14 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 673 ميلادية تنيَّح الأب \n البطريرك القديس الأنبا أغاثو التاسع والثلاثون من \n\nباباوات الأسكندرية، \n وكان تلميذ للأب القديس بنيامين البابا الثامن \nوالثلاثون، الذي اختفي زمنا من وجه \n مضطهديه الخلقيدونين وترك أغاثو يواظب على وعظ المؤمنين وتثبيتهم في \n الإيمان المستقيم. فكان أغاثو يطوف الشوارع والأسواق في النهار في زِيّ \n نجار، وفي الليل كان يتزيا بزي (يلبس) كاهن ويطوف البيوت أيضا واعظا ومرشدا، وظل \n كذلك إلى أن فتح العرب مصر وعاد الأب البطريرك بنيامين إلى مركزه."
    },
    "names": {
      "english": "Pope Agatho of Alexandria",
      "greek": "Πάπας Αγάθων",
      "coptic": "Papa `Aga;ou",
      "amharic": "አባ አጋሶን."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-039.jpg",
        "alt": "St-Takla.org Image: St. Agathon - Pope Aghathon - Pope of Alexandria and Patriarch of the See of St. Mark (39) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا أغاثون - بابا الإسكندرية وبطريرك الكرازة المرقسية (39) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Agathon - Pope Aghathon - Pope of Alexandria and Patriarch of the See of St. \nMark (39) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-039.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Aghathon, Coptic Orthodox Pope #39, and next to him was Pope John III (the next one) after he saw a future vision about him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أغاثون البطريرك التاسع والثلاثون من بطاركة الكرازة المرقسية: 39، وبجانبه البابا يوحنا الثالث (الذي يليه) بعدما رأى رؤيا مستقبلية عنه. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Aghathon, Coptic Orthodox Pope #39, and next to him was Pope John III (the next one) after he saw a future vision about him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 40,
    "name": "البابا يوأنس الثالث",
    "years": "680 - 689 م.",
    "durationYears": "9",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-040-Pope-John-III_.html",
    "moreInfo": {
      "birthPlace": ": \nسمنود",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nسمنود",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nحنا",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول كيهك 397 للشهداء - 27 \nنوفمبر 680 للميلاد",
          "links": [
            {
              "text": "أول كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/01-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\nأول كيهك 406 للشهداء - 27 نوفمبر 689 \n للميلاد",
          "links": [
            {
              "text": "أول كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/01-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n9 سنوات",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و7 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمعاوية - يزيد بن معاوية - مروان أبن الحاكم \n- \nعبد الملك بن مروان",
          "links": [
            {
              "text": "عبد الملك بن مروان",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__27-Al-Hokam-Fi-Misr-13-Abdel-Malek-Ibn-Marwan.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n9 سنوات",
      "interregnumDuration": ": \nشهرًا واحدًا و7 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John III of Alexandria",
      "greek": "Πάπας Ιωάννης Γ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =g",
      "amharic": "አባ ዮሐንስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-040.jpg",
        "alt": "St-Takla.org Image: Pope John III - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (40) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (40) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope John III - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (40) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-040.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope John III, Coptic Orthodox Pope #40, and at the bottom of the picture is the governor of Egypt in his time, Abd al-Aziz ibn Marwan. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الثالث البطريرك الأربعون من بطاركة الكرازة المرقسية: 40، وبأسفل الصورة والي مصر في عصره عبد العزيز بن مروان. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope John III, Coptic Orthodox Pope #40, and at the bottom of the picture is the governor of Egypt in his time, Abd al-Aziz ibn Marwan. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 41,
    "name": "البابا إسحق",
    "years": "690 - 692 م.",
    "durationYears": "2",
    "durationMonths": "10",
    "durationDays": "2",
    "link": "Life-of-Coptic-Pope-041-Pope-Isaac_.html",
    "moreInfo": {
      "birthPlace": ": \nالبرلس",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالبرلس",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nاسحق",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n8 طوبه 406 للشهداء - 3 يناير  690 للميلاد",
          "links": [
            {
              "text": "8 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/08-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n9 هاتور 409 للشهداء - 5 \nنوفمبر 692 للميلاد",
          "links": [
            {
              "text": "9 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/09-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنتان و10 أشهر ويومان",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا وحدًا و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nعبد الملك بن مروان",
          "links": [
            {
              "text": "عبد الملك بن مروان",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__27-Al-Hokam-Fi-Misr-13-Abdel-Malek-Ibn-Marwan.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \nسنتان و10 أشهر ويومان",
      "interregnumDuration": ": \nشهرًا وحدًا و14 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Isaac of Alexandria / Isaac the Just",
      "greek": "Πάπας Ισαάκ",
      "coptic": "Papa `Icaak",
      "amharic": "አባ ይስሐቅ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-041.jpg",
        "alt": "St-Takla.org Image: St. Isaac - Pope Ishaac - Pope of Alexandria and Patriarch of the See of St. Mark (41) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا إسحق - بابا الإسكندرية وبطريرك الكرازة المرقسية (41) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Isaac - Pope Ishaac - Pope of Alexandria and Patriarch of the See of St. \nMark (41) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-041.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Isaac, Coptic Orthodox Pope #41, who cared for renewing churches. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا إسحق البطريرك الحادي والأربعون من بطاركة الكرازة المرقسية: 41، وقد اهتم بتجديد الكنائس. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Isaac, Coptic Orthodox Pope #41, who cared for renewing churches. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع",
    "index": 42,
    "name": "البابا سيمون الأول",
    "years": "692 - 700 م.",
    "durationYears": "7",
    "durationMonths": "7",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-042-Pope-Simeon-I_.html",
    "moreInfo": {
      "birthPlace": ": \nسورياني الجنس (سرياني)",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nسورياني الجنس (سرياني)",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nسمعان",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n23 كيهك 409 للشهداء - 19 \nديسمبر 692 للميلاد",
          "links": [
            {
              "text": "23 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/23-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n24 أبيب 416 للشهداء - 18 \nيوليو 700 للميلاد",
          "links": [
            {
              "text": "24 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/24-Abeeb.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n7 سنوات و7 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 سنوات و9 أشهر و7 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير \nالزجاج، ثم \nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nعبد الملك بن مروان",
          "links": [
            {
              "text": "عبد الملك بن مروان",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__27-Al-Hokam-Fi-Misr-13-Abdel-Malek-Ibn-Marwan.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n7 سنوات و7 أشهر",
      "interregnumDuration": ": \n3 سنوات و9 أشهر و7 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Simeon I of Alexandria",
      "greek": "Πάπας Συμεών Α΄",
      "coptic": "Papa Cumewn =a",
      "amharic": "አባ ስምዖን 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-042.jpg",
        "alt": "St-Takla.org Image: St. Simeon I - Pope Simeon - Pope of Alexandria and Patriarch of the See of St. Mark (42) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا سيمون الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (42) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Simeon I - Pope Simeon - Pope of Alexandria and Patriarch of the See of St. \nMark (42) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-042.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Seemon (Simeon) I, Coptic Orthodox Pope #42 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا سيمون الأول البطريرك الثاني والأربعون من بطاركة الكرازة المرقسية: 42. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Seemon (Simeon) I, Coptic Orthodox Pope #42 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن",
    "index": 43,
    "name": "البابا الكسندروس \nالثاني",
    "years": "704 - 729 م.",
    "durationYears": "25",
    "durationMonths": "9",
    "durationDays": "7",
    "link": "Life-of-Coptic-Pope-043-Pope-Alexander-II_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "المدينة \nالأصلية له: \nبناوبوصير - المحلة الكبرى",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nالكسندروس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير \nالزجاج",
          "links": [
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n30 برموده 420 للشهداء - 25 أبريل 704 \n للميلاد",
          "links": [
            {
              "text": "30 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/30-Bermodah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n7 أمشير 445 للشهداء - أول فبراير 729 \n للميلاد",
          "links": [
            {
              "text": "7 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/07-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n25 سنة و9 أشهر و7 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و23 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nعبد الملك بن مروان - الوليد بن عبد الملك \n - سليمان - عمرو بن عبد العزيز - يزيد بن عبد الملك - هشام",
          "links": [
            {
              "text": "عبد الملك بن مروان",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__27-Al-Hokam-Fi-Misr-13-Abdel-Malek-Ibn-Marwan.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n25 سنة و9 أشهر و7 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و23 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Alexander II of Alexandria",
      "greek": "Πάπας Αλέξανδρος Β΄",
      "coptic": "Papa `Alexan`drou =b",
      "amharic": "አባ እለእስክንድሮስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-043.jpg",
        "alt": "St-Takla.org Image: St. Alexander II - Pope Alexanderos - Pope of Alexandria and Patriarch of the See of St. Mark (43) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا الكسندروس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (43) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Alexander II - Pope Alexanderos - Pope of Alexandria and Patriarch of the \nSee of St. Mark (43) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-043.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Alexanderos II, Coptic Orthodox Pope #43 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا الكسندروس الثاني البطريرك الثالث والأربعون من بطاركة الكرازة المرقسية: 43. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Alexanderos II, Coptic Orthodox Pope #43 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن",
    "index": 44,
    "name": "البابا قزمان الأول",
    "years": "729 - 730 م.",
    "durationYears": "1",
    "durationMonths": "3",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-044-Pope-Cosmas-I_.html",
    "moreInfo": {
      "birthPlace": ": \nبناوبوصير بالمحلة الكبرى",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبناوبوصير بالمحلة الكبرى",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nقزمان",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n30 برمهات 445 للشهداء - 26 مارس 729 \n للميلاد",
          "links": [
            {
              "text": "30 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/30-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n3 بؤونه 446 للشهداء - 24 يونيو 730 \n للميلاد",
          "links": [
            {
              "text": "3 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/03-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنة واحدة و3 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة و3 أشهر",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nهشام بن عبد الملك",
          "links": []
        }
      ],
      "durationOnThrone": ": \nسنة واحدة و3 أشهر",
      "interregnumDuration": ": \nسنة واحدة و3 أشهر",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Cosmas I of Alexandria",
      "greek": "Πάπας Κοσμάς Α΄",
      "coptic": "Papa Kocma =a",
      "amharic": "አባ ኮዝማ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-044.jpg",
        "alt": "St-Takla.org Image: St. Cosmas I - Pope Kosma - Pope of Alexandria and Patriarch of the See of St. Mark (44) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا قزمان الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (44) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cosmas I - Pope Kosma - Pope of Alexandria and Patriarch of the See of St. \nMark (44) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-044.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Kosma I (Cosmas), Coptic Orthodox Pope #44 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا قزمان الأول البطريرك الرابع والأربعون من بطاركة الكرازة المرقسية: 44. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Kosma I (Cosmas), Coptic Orthodox Pope #44 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن",
    "index": 45,
    "name": "البابا \nثيؤذوروس الأول",
    "years": "730 - 742 م.",
    "durationYears": "11",
    "durationMonths": "7",
    "durationDays": "7",
    "link": "Life-of-Coptic-Pope-045-Pope-Theodorus-II_.html",
    "moreInfo": {
      "birthPlace": ": \nبنا",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبنا",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nتادرس",
          "links": []
        },
        {
          "text": "من أبناء دير: \nدير طمنبوره (طنبوره) بمريوط",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول أبيب 446 للشهداء - 25 يونيو 730 \n للميلاد",
          "links": [
            {
              "text": "أول أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/01-Abeeb.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n7 أمشير 458 للشهداء - أول فبراير 742 \n للميلاد",
          "links": [
            {
              "text": "7 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/07-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n11 سنة و7 أشهر و7 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة و7 أشهر و7 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nهشام بن عبد الملك",
          "links": []
        }
      ],
      "durationOnThrone": ": \n11 سنة و7 أشهر و7 أيام",
      "interregnumDuration": ": \nسنة واحدة و7 أشهر و7 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Theodoros I of Alexandria",
      "greek": "Πάπας Θεόδωρος Α΄",
      "coptic": "Papa \nAbba \nQe`odwroc أو .Papa \n:e`odwrou =a",
      "amharic": "አባ ቴዎዶሩስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-045.jpg",
        "alt": "St-Takla.org Image: St. Theodore I - Pope Tawadros - Pope of Alexandria and Patriarch of the See of St. Mark (45) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ثيؤذوروس الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (45) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Theodore I - Pope Tawadros - Pope of Alexandria and Patriarch of the See of \nSt. Mark (45) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-045.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Theodoros (Theodore/Tawadros) I, Coptic Orthodox Pope #45 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ثيؤذوروس الأول البطريرك الخامس والأربعون من بطاركة الكرازة المرقسية: 45. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Theodoros (Theodore/Tawadros) I, Coptic Orthodox Pope #45 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن",
    "index": 46,
    "name": "البابا خائيل الأول",
    "years": "743 - 767 م.",
    "durationYears": "23",
    "durationMonths": "6",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-046-Pope-Khail-I_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل \n البطريركية: \nخائيل",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n17 توت 460 للشهداء - 14 \n سبتمبر 743 للميلاد (744؟)",
          "links": [
            {
              "text": "17 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/17-Toot.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n16 برمهات 483 للشهداء - 12 مارس \n 767 للميلاد (768؟)",
          "links": [
            {
              "text": "16 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/16-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n23 سنة ونصف",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n15 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nدير \nالزجاج ثم \nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nهشام بن عبد الملك - الوليد بن يزيدي - زيد بن الوليد\n وابراهيم - مروان - عبد الله أبو العباس السفاح \n- عبد الله أبو جعفر المنصور",
          "links": []
        }
      ],
      "durationOnThrone": ": \n23 سنة ونصف",
      "interregnumDuration": ": \n15 يومًا",
      "residence": ": \n\nدير \nالزجاج ثم \nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Michael I of Alexandria / Khaʾil I",
      "greek": "Πάπας Μιχαήλ Α΄",
      "coptic": "Papa <ayl =a",
      "amharic": "አባ ሚካኤል 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-046.jpg",
        "alt": "St-Takla.org Image: St. Khael I - Pope Khail - Pope of Alexandria and Patriarch of the See of St. Mark (46) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا خائيل الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (46) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Khael I - Pope Khail - Pope of Alexandria and Patriarch of the See of St. \nMark (46) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Art-Portraits-Paintings/Christian/Artists/M/Anton/Digital/www-St-Takla-org--pope-Khail-I-1-Mina-Anton.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Khail I (Mikhail), Coptic Pope 46, The Patriarch, 2011, used with permission - by Mina Anton صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا خائيل الأول (ميخائيل الأول)، بابا الإسكندرية وبطريرك الكرازة المرقسية 46، 2011، موضوعة بإذن - رسم الفنان مينا أنطون",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Khail I (Mikhail), Coptic Pope 46, The Patriarch, 2011, used \nwith permission - by Mina Anton"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن",
    "index": 47,
    "name": "البابا مينا الأول",
    "years": "767 - 776 م.",
    "durationYears": "8",
    "durationMonths": "10",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-047-Pope-Mina-I_.html",
    "moreInfo": {
      "birthPlace": ": \nسمنود",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nسمنود",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمينا",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول برموده 483 للشهداء - 27 مارس 767 \n للميلاد",
          "links": [
            {
              "text": "أول برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/01-Bermodah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n30 طوبه 492 للشهداء - 26 يناير 776 \n للميلاد",
          "links": [
            {
              "text": "30 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/30-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n8 سنوات و10 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n11 شهرًا و16 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nعبد الله أبو جعفر المنصور - محمد منصور \n المهدي",
          "links": [
            {
              "text": "عبد الله أبو جعفر المنصور",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__29-Al-Hokam-Fi-Misr-15-Aby-Gha3far-Al-Mansour.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n8 سنوات و10 أشهر",
      "interregnumDuration": ": \n11 شهرًا و16 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mina I of Alexandria / Menas I",
      "greek": "Πάπας Μηνάς Α΄",
      "coptic": "Papa Myna =a",
      "amharic": "አባ ሜና 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-047.jpg",
        "alt": "St-Takla.org Image: Pope Mina I - Pope Mena - Pope of Alexandria and Patriarch of the See of St. Mark (47) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مينا الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (47) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Mina I - Pope Mena - Pope of Alexandria and Patriarch of the See of St. \nMark (47) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-047.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mina I, Coptic Orthodox Pope #47, and the bottom of the picture shows the Pope with the bishops as they are forced to work on ships and paint them, and intruder Patriarch Boutros also appears on the other side. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مينا الأول البطريرك السابع والأربعون من بطاركة الكرازة المرقسية: 47، ويظهر بأسفل الصورة البابا مع الأساقفة وهم مرغمون على العمل في السفن وطلائها، كما يظهر البطريرك الدخيل بطرس على الجانب الآخر. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mina I, Coptic Orthodox Pope #47, and the bottom of the picture shows the Pope with the bishops as they are forced to work on ships and paint them, and intruder Patriarch Boutros also appears on the other side. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن",
    "index": 48,
    "name": "البابا يؤانس الرابع",
    "years": "777 - 799 م.",
    "durationYears": "22",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-048-Pope-John-IV_.html",
    "moreInfo": {
      "birthPlace": ": \nبناوبوصير - المحلة الكبرى",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبناوبوصير - المحلة الكبرى",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحنا",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n17 طوبه؟ 493 للشهداء - 12 \nيناير 777 للميلاد",
          "links": [
            {
              "text": "17 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/17-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n16 طوبه 515 للشهداء - 11 \nيناير 799 للميلاد",
          "links": [
            {
              "text": "16 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/16-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n22 سنة",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n15 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمحمد منصور المهدي - موسى مهدي الهادي - \n\nهارون الرشيد",
          "links": [
            {
              "text": "هارون الرشيد",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__30-Al-Hokam-Fi-Misr-16-Haroun-El-Rasheed.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n22 سنة",
      "interregnumDuration": ": \n15 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John IV of Alexandria",
      "greek": "Πάπας Ιωάννης Δ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwanou =d",
      "amharic": "አባ ዮሐንስ 4ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-048.jpg",
        "alt": "St-Takla.org Image: St. John IV - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (48) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يؤانس الرابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (48) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John IV - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (48) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-048.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope John IV, Coptic Orthodox Pope #48, and next to him a scenes of casting lots three times to choose the patriarch, and it fell upon him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يؤانس الرابع البطريرك الثامن والأربعون من بطاركة الكرازة المرقسية: 48، ويظهر بجانبه مشهد إلقاء القرعة ثلاثة مرات لاخيتار البطريرك فوقعت عليه. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope John IV, Coptic Orthodox Pope #48, and next to him a scenes of casting lots three times to choose the patriarch, and it fell upon him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 49,
    "name": "البابا مرقس الثاني",
    "years": "799 - 819 م.",
    "durationYears": "20",
    "durationMonths": "2",
    "durationDays": "21",
    "link": "Life-of-Coptic-Pope-049-Pope-Mark-II_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "المدينة \nالأصلية له: \nالإسكندرية",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمرقس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 أمشير 515 للشهداء - 26 يناير 799 \n للميلاد",
          "links": [
            {
              "text": "2 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/02-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n22 برموده 535 للشهداء - 17 ابريل 819 \n للميلاد",
          "links": [
            {
              "text": "22 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/22-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n20 سنة وشهران و21 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n12 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \nبيعة نبروه ثم\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nهارون الرشيد - الأمين - المأمون",
          "links": [
            {
              "text": "هارون الرشيد",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__30-Al-Hokam-Fi-Misr-16-Haroun-El-Rasheed.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n20 سنة وشهران و21 يومًا",
      "interregnumDuration": ": \n12 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 535 ش. (17 أبريل سنة 819 م.) \n تنيَّح الأب المغبوط مرقس التاسع والأربعين من \nباباوات الكرازة المرقسية. \n هذا البابا كان من أهل الإسكندرية، بكرا طاهرًا عالمًا فاضلا. وقد رسمه \n البابا يوحنا شماسا فقسا فكان كل من يسمعه يطرب بصوته وبحسن نغماته في \n الصلاة وسلم إليه البابا البطريرك تدبير البطريركية ولم يكن يعمل شيئًا \n إلا بعد أخذ رأيه، وعندما \nألبسه الإسكيم المقدس  \n`cxhma في الهيكل. صاح أحد \n الشيوخ قائلا: هذا الشماس الذي اسمه مرقس سيستحق أن يجلس علي كرسي أبيه \n مرقس لما تنيَّح البابا يوحنا أجمع الأساقفة علي اختياره بطريركًا فهرب إلى \n البرية ولكنهم لحقوا به وأحضروه ورسموه بطريركا في يوم \n2 أمشير سنة 515 ش. \n (26 يناير 799م) فأهتم بشئون الكنائس وعمر ما خرب منها ورد أرباب البدع \n إلى الرأي القويم وأبرأ مرضي كثيرين وأخرج من بعضهم الشياطين وقال لبعضهم \n أن ما أصابكم حدث نتيجة تجاسركم علي التناول من الأسرار المقدسة بجهل، \n فاحفظوا نفوسكم منذ الآن من الكلام الرديء الذي يخرج من أفواهكم. وفي \n أيامه استولي العرب علي جزائر الروم وسبوا كثيرين من نسائهم وأولادهم \n وآتوا بهم إلى الإسكندرية وشرعوا في بيعهم فجمع من المؤمنين مالا علاوة \n علي ما كان عنده من أموال الأديرة ودفع في سبيل إنقاذهم وإطلاق حريتهم \n مبلغ ثلاثة آلاف دينار وكتب لهم أوراق عتقهم وزود من رجع إلى بلاده \n بالمال اللازم له وزوج من بقي منهم وصار يعتني بهم وأهتم هذا الأب بكنيسة \n المخلص التي بالإسكندرية وجددها فأحرقها بعض الأشرار فعاد وجددها ثانية."
    },
    "names": {
      "english": "Pope Mark II of Alexandria",
      "greek": "Πάπας Μάρκος Β΄",
      "coptic": "Papa Markou =b",
      "amharic": "አባ ማርቆስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-049.jpg",
        "alt": "St-Takla.org Image: St. Mark II - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (49) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (49) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Mark II - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (49) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-049.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mark II, Coptic Orthodox Pope #49, and next to him are scenes of his freeing slaves and paying their price. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مرقس الثاني البطريرك التاسع والأربعون من بطاركة الكرازة المرقسية: 49، ويظهر بجانبه مشاهد من تحريره للعبيد ودفع ثمنهم. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mark II, Coptic Orthodox Pope #49, and next to him are scenes of his freeing slaves and paying their price. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 50,
    "name": "البابا يعقوب",
    "years": "819 - 830 م.",
    "durationYears": "10",
    "durationMonths": "9",
    "durationDays": "9",
    "link": "Life-of-Coptic-Pope-050-Pope-Jacob_.html",
    "moreInfo": {
      "birthPlace": ": \nنبروه",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nنبروه",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nياكوبوس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 بشنس 535 للشهداء - 29 أبريل 819 \n للميلاد",
          "links": [
            {
              "text": "4 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/04-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n14 أمشير 546 للشهداء - 8 فبراير 830 \n للميلاد",
          "links": [
            {
              "text": "14 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/14-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات و9 أشهر و9 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n7 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \nتيد",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالمأمون",
          "links": [
            {
              "text": "المأمون",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__31-Al-Hokam-Fi-Misr-17-Al-Ma2moon.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n10 سنوات و9 أشهر و9 أيام",
      "interregnumDuration": ": \n7 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 821 م. تنيَّح القديس العظيم \n الأنبا يعقوب بابا الإسكندرية الخمسون. كان هذا الأب راهبًا \nبدير القديس \n مقاريوس ونظرًا لقداسته وتقواه أجمع الكل علي انتخابه بطريركًا بعد نياحة\nالبابا مرقس التاسع والأربعين وجلس علي الكرسي في \nشهر بشنس سنة 810 م. فجدد \n الكنائس وعمر الأديرة وقد وهبه الله عمل الآيات. من ذلك أنً شماسا \n بالإسكندرية تجرأ عليه بوقاحة قائلًا ادفع ما عليك للكنائس أو امض إلى \n ديرك فأجابه البابا قائلا انك لا تعود تراني منذ الآن فمضي الشماس إلى \n بيته ومرض لوقته ومات بعد حين، ومنها أيضا إن أرخنا اسمه مقاريوس من نبروه كان قد طعن في السن ولم يرزق نسلًا، وبعد زمن رزقه الله ولدا فأقام \n وليمة دعا إليها هذا القديس وحدث أثناء الوليمة أن مات الطفل فلم يضطرب \n والده، بل حمله بإيمان ووضعه أمام البابا واثقًا أن الله يسمع لصفيه \n ويعيد نفس الطفل إليه، فأخذ البابا الطفل ورشمه بعلامة الصليب علي جبهته \n وصدره وقلبه، وهو يصلي قائلًا: يا سيدي يسوع المسيح الواهب الحياة. أقم \n بقدرتك هذا الطفل حيًا لأبيه ثم نفخ في وجهه فعادت نفس الطفل إليه ودفعه \n إلى أبيه. ولما أكمل جهاده الحسن تنيَّح بسلام بعد أن أقام علي الكرسي \n المرقسي عشر سنين وتسعة أشهر وثمانية وعشرون يومًا. صلاته تكون معنا. \n ولربنا المجد دائما أبديا آمين."
    },
    "names": {
      "english": "Pope Jacob of Alexandria / Pope James of Alexandria",
      "greek": "Πάπας Ιάκωβος",
      "coptic": "Papa Iakwbou",
      "amharic": "አባ ያኮቡስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-050.jpg",
        "alt": "St-Takla.org Image: St. James - Pope Yakobos - Pope of Alexandria and Patriarch of the See of St. Mark (50) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يعقوب - بابا الإسكندرية وبطريرك الكرازة المرقسية (50) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. James - Pope Yakobos - Pope of Alexandria and Patriarch of the See of St. \nMark (50) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-050.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Jacob, Coptic Orthodox Pope #50, and below appears a picture of the infant who the Pope raised from the dead by a miracle. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يعقوب البطريرك الخمسون من بطاركة الكرازة المرقسية: 50، ويظهر بأسفل صورة الطفل الرضيع الذي أقامه البابا من الموت بمعجزة. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Jacob, Coptic Orthodox Pope #50, and below appears a picture of the infant who the Pope raised from the dead by a miracle. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 51,
    "name": "البابا سيمون الثاني",
    "years": "830 - 830 م.",
    "durationYears": "",
    "durationMonths": "7",
    "durationDays": "15",
    "link": "Life-of-Coptic-Pope-051-Pope-Simeon-II_.html",
    "moreInfo": {
      "birthPlace": ": \nالإسكندرية",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالإسكندرية",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nسمعان",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار ودير \nالزجاج",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            },
            {
              "text": "دير \nالزجاج",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/al-zogag-abi-sir/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n21 أمشير 546 للشهداء - 15 \nفبراير 830 للميلاد",
          "links": [
            {
              "text": "21 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/21-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n3 بابه 547 للشهداء - 30 سبتمبر 830 \n للميلاد",
          "links": [
            {
              "text": "3 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/03-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n7 أشهر و15 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة وشهرًا واحدًا و17 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالمأمون",
          "links": [
            {
              "text": "المأمون",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__31-Al-Hokam-Fi-Misr-17-Al-Ma2moon.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n7 أشهر و15 يومًا",
      "interregnumDuration": ": \nسنة واحدة وشهرًا واحدًا و17 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم سنة 822 ميلادية تنيَّح الأب الطاهر \n الأنبا سيماؤن الثاني، الحادي والخمسون من \nباباوات الكرازة المرقسية. \n وكان هذا القديس من أهالي الإسكندرية ابنا لأبوين مسيحيين أرثوذكسيين من \n أكابر المدينة. وقد رضع لبن الإيمان من صغره. وتأدب بعلوم الكنيسة وأختار \n لنفسه سيرة الرهبنة، فقصد \nجبل شيهيت وترهَّب في قلاية \nسلفه الأنبا يعقوب \n البطريرك. ومكث عنده عدة سنوات، أضنك فيها جسمه بالنسك الطويل، والتعبُد \n الكثير ولما قدم الأنبا مرقس الثاني بطريركًا، طلبه من \nأبيه الروحي الأنبا \n يعقوب، لما علم عنه من السيرة الصالحة، والتدبير الحسن فمكث عنده إلى أن \n تنيَّح."
    },
    "names": {
      "english": "Pope Simeon II of Alexandria",
      "greek": "Πάπας Συμεών Β΄",
      "coptic": "Papa Cumewn =b",
      "amharic": "አባ ስምዖን 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-051.jpg",
        "alt": "St-Takla.org Image: St. Simeon II - Pope Simon - Pope of Alexandria and Patriarch of the See of St. Mark (51) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا سيمون الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (51) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Simeon II - Pope Simon - Pope of Alexandria and Patriarch of the See of St. \nMark (51) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-051.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Seemeon (Simeon) II, Coptic Orthodox Pope #51 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا سيمون الثاني البطريرك الحادي والخمسون من بطاركة الكرازة المرقسية: 51. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Seemeon (Simeon) II, Coptic Orthodox Pope #51 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 52,
    "name": "البابا يوساب الأول",
    "years": "831 - 849 م.",
    "durationYears": "17",
    "durationMonths": "11",
    "durationDays": "2",
    "link": "Life-of-Coptic-Pope-052-Pope-Joseph-I_.html",
    "moreInfo": {
      "birthPlace": ": \nمنوف",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمنوف",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوسف",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n21 هاتور 548 للشهداء - 18 \nنوفمبر 831 للميلاد",
          "links": [
            {
              "text": "21 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/21-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n23 بابه 566 للشهداء - 20 \nأكتوبر 849 للميلاد",
          "links": [
            {
              "text": "23 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/23-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n17 سنة و11 شهرا ويومان",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالمأمون - المعتصم - الواثق - \nالمتوكل",
          "links": [
            {
              "text": "المأمون",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__31-Al-Hokam-Fi-Misr-17-Al-Ma2moon.html"
            },
            {
              "text": "المتوكل",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__32-Al-Hokam-Fi-Misr-18-Al-Motawakel-Wal-Montaser.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n17 سنة و11 شهرا ويومان",
      "interregnumDuration": ": \nشهرًا واحدًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 841 ميلادية تنيَّح الأب \n القديس الأنبا يوساب الثاني والخمسون من \n\nباباوات الأسكندرية. كان من \n أولاد عظماء منوف وأغنيائها، ولما انتقل أبواه وتركاه رباه بعض المؤمنين. ولما كبر قليلًا تَصَدَّق بأكثر أمواله، ثم قصد برية القديس مقاريوس، \n وتَرَهَّب عند شيخ قديس. ولما قدم \nالأنبا مرقس الثاني التاسع والأربعون من \n باباوات الإسكندرية، وسمع بسيرته دعاه إليه. ولما أراد العودة إلى \n البرية رسمه قسًا وأرسله. فمكث هناك مدة إلى إن تنيَّح \nالأنبا سيماؤن \n الثاني الحادي والخمسون، وظل الكرسي شاغرًا إلى إن اتفق بعض الأساقفة مع \n بعض من عامة الإسكندرية علي تقدمة شخص متزوج كان قد رشاهم بالمال. فلما \n علم بقية الأساقفة أنكروا عليهم عملهم هذا وطلبوا إلى الله إن يرشدهم إلى \n مَنْ يريده فأرشدهم إلى هذا الأب. فتذكروا سيرته الصالحة، وتدبيره حينما \n كان عند الأب الأنبا مرقس، وأرسلوا بعض الأساقفة لإحضاره. فصلي هؤلاء \n إلى الله قائلين \"نسألك يا رب إن كنت قد اخترت هذا الأب لهذه الرتبة، \n فلتكن علامة ذلك إننا نجد بابه مفتوحًا عند وصولنا إليه\". فلما وصلوا \n وجدوا بابه مفتوحًا، حيث كان يودع بعض زائريه من الرهبان. وإذ هم بإغلاق \n الباب رآهم مقبلين فاستقبلهم بفرح وأدخلهم قلايته. فلما دخلوا امسكوه \n وقالوا له \"مستحق\". فصاح وبكي وبدأ يُظْهِر لهم نقائصه وعثراته، فلم \n يقبلوا منه، وأخذوه إلى ثغر الإسكندرية ووضعوا عليه اليد. ولما جلس علي \n الكرسي المرقسي اهتم بالكنائس كثيرًا. وكان يشتري بما يفضل عنه من موارده \n أملاكًا ويوقفها علي الكنائس. وكان كثير التعليم للشعب لا يغفل عن أحد \n منهم فحسده الشيطان وسبب له أحزانًا كثيرة. من ذلك إن أسقف تنيس وأسقف \n مصر أغاظا شعب كرسيهما فأنكر هذا الأب عليهما ذلك، وطلب إليهما مرارًا \n كثيرة إن يترفقا برعيتهما، فلم يقبلا منه نصيحة، واستغاثت رعيتهما \n قائلة: إن أنت أرغمتنا علي الخضوع لهما تحولنا إلى مِلة أخرى، وإذ اجتهد \n كثيرًا في الصُلح بين الفريقين ولم ينجح، دعا الأساقفة من سائر البلاد \n وأطلعهم علي أمر الأسقفين وتبرأ من عملهما، فكتبوا جميعهم بقطعهما. \n فلما سقطا مضيا إلى الوالي بالقاهرة، ولفقا علي الأب قضية كاذبة، فأرسل \n الوالي أخاه مع بعض الجند لإحضار البطريرك. ولما وصلوا إليه جرد أخو \n الأمير سيفه، وأراد قتله، ولكن الله أمال يده عنه فجاءت الضربة في \n العمود فانكسر السيف. فازداد الأمير غضبًا وجرد سكينًا وضرب الأب في جنبه \n بكل قوته، فلم تنل منه شيئًا سوي إن قطعت الثياب ولم تصل إلى جسمه، فتحقَّق \n الأمير إن في البطريرك نعمة إلهية ووقاية سماوية تصده عن قتله، فاحترمه \n وأتى به إلى أخيه، وأعلمه بما جري له معه، فاحترمه الحاكم أيضًا وخافه، \n ثم استخبره عن القضية التي رفعت عليه، فاثبت له عدم صحتها واعلمه بأمر \n الأسقفين، فاقتنع وأكرمه، وأمر بأن لا يُعارضه أحد في رسامة أو عزل أحد \n من الأساقفة، أو في أي عمل يختص بالبيعة. وكان مداومًا علي وَعْظ الخطاة \n وردع المخالفين، مثبتًا الشعب علي الإيمان المستقيم الذي تسلمه من آبائه، مفسرًا لهم ما استشكل عليهم فهمه، حارسا لهم بتعاليمه وصلواته. وقد \n اظهر الله تعالي علي يدي هذا الأب عجائب كثيرة. ولما أكمل هذه السيرة \n المرضية تنيَّح بسلام بعد إن أقام علي الكرسي تسع عشرة سنة. وفي الرهبنة \n تِسعًا وثلاثين. وقبلها نيفا وعشرين سنة. صلاته تكون معنا أمين."
    },
    "names": {
      "english": "Pope Joseph I of Alexandria / Abba Yousab I",
      "greek": "Πάπας Ιωσήφ Α΄",
      "coptic": "Papa Iwcyv =a",
      "amharic": "አባ ዮሳብ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-052.jpg",
        "alt": "St-Takla.org Image: St. Joseph - Pope Yousab - Pope of Alexandria and Patriarch of the See of St. Mark (52) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوساب الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (52) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Joseph - Pope Yousab - Pope of Alexandria and Patriarch of the See of St. \nMark (52) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-052.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yousab I (Job), Coptic Orthodox Pope #52 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوساب الأول البطريرك الثاني والخمسون من بطاركة الكرازة المرقسية: 52. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yousab I (Job), Coptic Orthodox Pope #52 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 53,
    "name": "البابا خائيل الثاني",
    "years": "849 - 851 م.",
    "durationYears": "1",
    "durationMonths": "4",
    "durationDays": "28",
    "link": "Life-of-Coptic-Pope-053-Pope-Khail-II_.html",
    "moreInfo": {
      "birthPlace": ": \n؟",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n؟",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nخابيل",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير بويحنس (أبو يحنس - الأنبا يحنس)",
          "links": [
            {
              "text": "دير بويحنس (أبو يحنس - الأنبا يحنس)",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-yehnes-the-short/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n24 هاتور 566 للشهداء - 20 \nنوفمبر 849 للميلاد",
          "links": [
            {
              "text": "24 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/24-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n22 برموده 567 للشهداء - 17 \nأبريل 851 للميلاد",
          "links": [
            {
              "text": "22 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/22-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنة واحدة و4 أشهر و28 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهران و21 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالمتوكل",
          "links": [
            {
              "text": "المتوكل",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__32-Al-Hokam-Fi-Misr-18-Al-Motawakel-Wal-Montaser.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \nسنة واحدة و4 أشهر و28 يومًا",
      "interregnumDuration": ": \nشهران و21 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية",
      "synaxariumText": "في مثل هذا اليوم من سنة 567 ش. (17 أبريل سنة 851 م. \n ) تنيَّح الأب القديس البابا خائيل الثالث والخمسون من \n\nباباوات الأسكندرية. \n كان هذا الأب راهبًا قديسًا وقد رسم قمصًا علي \nدير القديس الأنبا يحنس وكان \n ذا سيره صالحة فاختاره بطريركًا وأعتلي كرسي البطريركية في \n24 هاتور سنة \n 566 ش. (20 نوفمبر سنة 849 م.). ولما حلت أيام الصوم المقدس صعد إلى \n البرية ليقضيها هناك. فتذكر حياته الأولى في البرية فسأل الله ببكاء \n وتضرع قائلا أنت تعلم يا رب أني لا أزال أهوي الوحدة وأني ليس لي طاقة علي \n هذا المركز الذي أنا فيه فقبل الرب دعاءه وتنيَّح بسلام بعد عيد الفصح. \n بعد أن قضي علي الكرسي سنة واحدة وأربعة أشهر وثمانية وعشرين يوما. \n صلاته تكون معنا. ولربنا المجد دائمًا. آمين."
    },
    "names": {
      "english": "Pope Michael II of Alexandria / Abba Khail II",
      "greek": "Πάπας Μιχαήλ Β΄",
      "coptic": "Papa <ayl =b",
      "amharic": "አባ ሚካኤል 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-053.jpg",
        "alt": "St-Takla.org Image: St. Khael II - Pope Khail - Pope of Alexandria and Patriarch of the See of St. Mark (53) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا خائيل الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (53) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Khael II - Pope Khail - Pope of Alexandria and Patriarch of the See of St. \nMark (53) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-053.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Khail II, Coptic Orthodox Pope #53 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا خائيل الثاني البطريرك الثالث والخمسون من بطاركة الكرازة المرقسية: 53. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Khail II, Coptic Orthodox Pope #53 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 54,
    "name": "البابا قزمان الثاني",
    "years": "851 - 858 م.",
    "durationYears": "7",
    "durationMonths": "4",
    "durationDays": "9",
    "link": "Life-of-Coptic-Pope-054-Pope-Cosmas-II_.html",
    "moreInfo": {
      "birthPlace": ": \nسمنود",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nسمنود",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nقسما",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n14 أبيب 567 للشهداء - 8 يوليو 851 \n للميلاد",
          "links": [
            {
              "text": "14 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/14-Abeeb.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n21 هاتور 575 للشهداء - 17 نوفمبر 858 \n للميلاد",
          "links": [
            {
              "text": "21 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/21-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n7 سنوات و4 أشهر و9 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و21 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية ثم دميرة ودنوشر",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \nبيعه القديس بطلماوس ثم دميرة ودنوشر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالمتوكل",
          "links": [
            {
              "text": "المتوكل",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__32-Al-Hokam-Fi-Misr-18-Al-Motawakel-Wal-Montaser.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n7 سنوات و4 أشهر و9 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و21 يومًا",
      "residence": ": \n\nالمرقسية بالإسكندرية ثم دميرة ودنوشر",
      "synaxariumText": "في مثل هذا اليوم من سنة 859 ميلادية تنيَّح القديس \n قسما الثاني، الرابع والخمسون من \n\nباباوات الإسكندرية، وقد ولد بسمنود \n وترهب\nبدير القديس مقاريوس، ولما خلا كرسي البطريركية أجمع رأي الأساقفة \n والأراخنة علي اختيار هذا الأب، فرسم بطريركًا وقد لحقت به أحزان كثيرة، \n كما جرت علي المؤمنين في زمانه بلايا وتجارب عديدة، وظهرت في أيامه بعض \n العجائب، منها إن دما خرج من أيقونة السيدة العذراء التي في كنيسة \n القديس ساويرس بالبرية المقدسة، كما إن أكثر الأيقونات التي بالديار \n المصرية كانت أيضًا مبللة بالدموع، وقد عللوا هذه الظاهرة العجيبة أنها \n بسبب ما نال الأب البطريرك والمؤمنين من البلاء والأحزان، وكان رغم كل \n ما أصابه مداوما علي تعليم المؤمنين وتثبيتهم بغيرة ونشاط وأقام علي \n الكرسي سبع سنين وستة أشهر، ثم تنيَّح بسلام، صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Cosmas II of Alexandria",
      "greek": "Πάπας Κοσμάς Β΄",
      "coptic": "Papa Kocma =b",
      "amharic": "አባ ኮዝማ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-054.jpg",
        "alt": "St-Takla.org Image: St. Cosmas II - Pope Kosma - Pope of Alexandria and Patriarch of the See of St. Mark (54) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا قزمان الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (54) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cosmas II - Pope Kosma - Pope of Alexandria and Patriarch of the See of St. \nMark (54) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-054.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Kosma II, Coptic Orthodox Pope #54, and next to him is an icon of the Virgin Mary, from which blood came out, and other icons that were soaked with tears. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا قزمان الثاني البطريرك الرابع والخمسون من بطاركة الكرازة المرقسية: 54، وبجانبه أيقونة السيدة العذراء التي خرج منها دمًا، ونماذج من الأيقونات التي كانت مبللة بالدموع. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Kosma II, Coptic Orthodox Pope #54, and next to him is an icon of the Virgin Mary, from which blood came out, and other icons that were soaked with tears. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 55,
    "name": "البابا شنوده الأول",
    "years": "859 - 880 م.",
    "durationYears": "21",
    "durationMonths": "3",
    "durationDays": "11",
    "link": "Life-of-Coptic-Pope-055-Pope-Shenouda-I_.html",
    "moreInfo": {
      "birthPlace": ": \nالبتانون \nPaqanon، قرية الثلاثين ربوة",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالبتانون \nPaqanon، قرية الثلاثين ربوة",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nشنودة",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n13 طوبه 575 للشهداء - 8 يناير 859 \n للميلاد",
          "links": [
            {
              "text": "13 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/13-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n24 برموده 596 للشهداء - 19 أبريل 880 \n للميلاد",
          "links": [
            {
              "text": "24 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/24-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n21 سنة و3 أشهر و11 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n6 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالإسكندرية والمحلة الكبرى  (وهو آخِر من سَكَنَ في الإسكندرية)",
          "links": [
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالمتوكل - \nالمنتصر - المستعين - أحمد بن \n طولون\nفي خلافة المعتز - المهتدي - المعتمد",
          "links": [
            {
              "text": "المتوكل",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__32-Al-Hokam-Fi-Misr-18-Al-Motawakel-Wal-Montaser.html"
            },
            {
              "text": "المنتصر",
              "href": "../../Coptic-History/CopticHistory_03-CopticChurch-and-the-Arab-Invasion/Coptic-Church-and-Arabian-Egypt__32-Al-Hokam-Fi-Misr-18-Al-Motawakel-Wal-Montaser.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n21 سنة و3 أشهر و11 يومًا",
      "interregnumDuration": ": \n6 أيام",
      "residence": ": \n\nالمرقسية بالإسكندرية والمحلة الكبرى  (وهو آخِر من سَكَنَ في الإسكندرية)",
      "synaxariumText": "في مثل هذا اليوم من سنة 596 ش. (19 أبريل سنة 880 م.) تنيَّح الأب العظيم البابا سانوتيوس الخامس والخمسون من \nباباوات الكرازة المرقسية. وهذا القديس كان قد تَرَهَّب\nبدير القديس مقاريوس وإذ تزايد في \n الفضيلة والعبادة عين قمصا علي كنيسة الدير واختير بعد قليل للبطريركية \n بتزكية الشعب والأساقفة واعتلي الكرسي في \n13 طوبة 575 ش. (8 يناير سنة \n 859 م.) فحلت به شدائد كثيرة واضطهادات قاسية. وكان الله يجري علي يديه \n آيات كثيرة وشفي أمراضا مستعصية."
    },
    "names": {
      "english": "Pope Shenouda I of Alexandria",
      "greek": "Πάπας Σενούντα Α΄",
      "coptic": "peniwt abba }enou; أو \n\nPapa Cenou;iou \n(Senouda =a).",
      "amharic": "አባ ሺኖዳ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-055.jpg",
        "alt": "t-Takla.org Image: St. Shenouda I - Pope Shenoute - Pope of Alexandria and Patriarch of the See of St. Mark (55) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا شنوده الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (55) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "t-Takla.org Image:\nSt. Shenouda I - Pope Shenoute - Pope of Alexandria and Patriarch of the See of \nSt. Mark (55) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-055.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Sanotius (Shenouda I), Coptic Orthodox Pope #55 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا شنوده الأول البطريرك الخامس والخمسون من بطاركة الكرازة المرقسية: 55. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Sanotius (Shenouda I), Coptic Orthodox Pope #55 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع",
    "index": 56,
    "name": "البابا ميخائيل الأول",
    "years": "880 - 907 م.",
    "durationYears": "27",
    "durationMonths": "1",
    "durationDays": "9",
    "link": "Life-of-Coptic-Pope-056-Pope-Michael-I----Khail-III_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل \n البطريركية: \nخاييل",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n30 برموده  596 للشهداء - 25 أبريل 880 \n للميلاد",
          "links": [
            {
              "text": "30 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/30-Bermodah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n20 برمهات 623 للشهداء - 16 مارس 907 \n للميلاد",
          "links": [
            {
              "text": "20 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/20-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n27 سنة وشهرًا واحدًا و9 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنتان وشهران",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدمرو ثم\nبيعه العذراء بقصر الشمع (\n المعلقة)",
          "links": [
            {
              "text": "بيعه العذراء بقصر الشمع (\n المعلقة)",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nبن طولون - خمرويه (خمارويه) - هارون - شعبان - المكتفي",
          "links": []
        }
      ],
      "durationOnThrone": ": \n27 سنة وشهرًا واحدًا و9 أيام",
      "interregnumDuration": ": \nسنتان وشهران",
      "residence": ": \nدمرو ثم\nبيعه العذراء بقصر الشمع (\n المعلقة)",
      "synaxariumText": "في مثل هذا اليوم من سنة 623 ش. (16 مارس 907 م.) تنيح \nالأب \nالقديس الأنبا خائيل السادس والخمسون من باياوإت الكرازة المرقسية. رُسِمَ بطريركًا \nفي \n \n 20 برمودة سنة 596 ش. (25 أبريل سنة 880 م.). وكان ذا خِصال حميدة غير أن أحزانًا \nشديدة حَلَّت به: منها أن \nالبابا قسما كان قد بنى كنيسة على اسمه الشهيد أبطلماوس \nببلدة دنوشر لأسقف سخا.. وحدث أن أهالي دنوشر \nأرادوا أن يدعوا الأب البطريرك وبعض الأساقفة المجاورين لتكريس هذه الكنيسة. فلم \nيطب لديه هذا الآمر. ولما عملوا على غير رغبته، وجاء الأب البطريرك ومعه الأساقفة، لم يقبل هذا الأسقف البقاء، فخرج من الكنيسة مدعيًا أنه ذهب ليهتم فأمر طعامهم. \nفلما طال غيابه كثيرًا وحان وقت القداس صلي الأب البطريرك صلاة الشكر ورفع القربان \nبعد إلحاح من الأساقفة وبما له من حقوق الرئاسة. وعلم الأسقف بذلك فدفعه شره وحبه \nلمجد العالم إلى الغضب بدعوى أن البطريرك تعدى القوانين ورفع قربانًا في أبرشية بدون \nإذن صاحبها. وعاد إلى الكنيسة مسرعًا إذ دخله الشيطان ودفعه إلى الشر وتعدى على \nالمذبح المقدس الطاهر. أما البابا البطريرك فأكمل صلاة القداس بكل هدوء وكمال."
    },
    "names": {
      "english": "Pope Michael I of Alexandria",
      "greek": "Πάπας Μιχαήλ Α΄",
      "coptic": "Papa Mi,ayl =a",
      "amharic": "አባ ሚካኤል 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-056.jpg",
        "alt": "St-Takla.org Image: St. Michael I - Pope Khail - Pope of Alexandria and Patriarch of the See of St. Mark (56) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ميخائيل الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (56) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Michael I - Pope Khail - Pope of Alexandria and Patriarch of the See of St. \nMark (56) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-056.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Michael I, Coptic Orthodox Pope #56, and below the picture appears Deacon Ibn al-Munzir, who was thrown into prison with him for a full year after an evil bishop slandered him in the era of Ibn Tulun. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ميخائيل الأول البطريرك السادس والخمسون من بطاركة الكرازة المرقسية: 56، ويظهر أسفل الصورة الشماس ابن المنذر الذي طرح معه في السجن سنة كاملة بعد وشاية أسقف شرير في عصر ابن طولون. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Michael I, Coptic Orthodox Pope #56, and below the picture appears Deacon Ibn al-Munzir, who was thrown into prison with him for a full year after an evil bishop slandered him in the era of Ibn Tulun. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 57,
    "name": "البابا غبريال الأول",
    "years": "909 - 920 م.",
    "durationYears": "10",
    "durationMonths": "9",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-057-Pope-Gabriel-I_.html",
    "moreInfo": {
      "birthPlace": ": \nالميه قرب شبين الكوم",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالميه قرب شبين الكوم",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nغبريال",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n21 بشنس 625 للشهداء - 16 مايو 909 للميلاد",
          "links": [
            {
              "text": "21 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/21-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n21 أمشير 636 للشهداء - 15 فبراير 920 \n للميلاد",
          "links": [
            {
              "text": "21 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/21-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n10 سنوات و9 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nوادي هبيب",
          "links": [
            {
              "text": "وادي هبيب",
              "href": "../../Coptic-History/places/sites/africa/egypt/beheira/scetis-wadi-el-natrun.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالمقتدر",
          "links": []
        }
      ],
      "durationOnThrone": ": \n10 سنوات و9 أشهر",
      "interregnumDuration": ": \n14 يومًا",
      "residence": ": \nوادي هبيب",
      "synaxariumText": "في مثل هذا اليوم من سنة 911 م. تنيَّح الأب العظيم \n القديس غبريال بابا الإسكندرية السابع والخمسون وقد ترهب هذا القديس منذ \n حداثته وقام بعبادات كثيرة. وكان محبًا للانفراد والوحدة. وكان يكثر من \n البكاء في الصلاة طالبا من الله أن ينجيه من مكائد الشيطان."
    },
    "names": {
      "english": "Pope Gabriel I of Alexandria",
      "greek": "Πάπας Γαβριήλ Α΄",
      "coptic": "Papa Gabriyl =a",
      "amharic": "አባ ገብርኤል 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-057.jpg",
        "alt": "St-Takla.org Image: St. Gabriel I - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (57) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (57) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Gabriel I - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (57) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-057.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel I, Coptic Orthodox Pope #57 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال الأول البطريرك السابع والخمسون من بطاركة الكرازة المرقسية: 57. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel I, Coptic Orthodox Pope #57 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 58,
    "name": "البابا قزمان \nالثالث",
    "years": "920 - 932 م.",
    "durationYears": "12",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-058-Pope-Cosmas-III_.html",
    "moreInfo": {
      "birthPlace": ": \n؟",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n؟",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nقزمان",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 برمهات 636 للشهداء - 28 فبراير 920 \n للميلاد",
          "links": [
            {
              "text": "4 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/04-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n3 برمهات 648 للشهداء - 27 فبراير 932 \n للميلاد",
          "links": [
            {
              "text": "3 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/03-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n12 سنة",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا وحدًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالريف",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون:المقتدر",
          "links": []
        }
      ],
      "durationOnThrone": ": \n12 سنة",
      "interregnumDuration": ": \nشهرًا وحدًا",
      "residence": ": \nالريف",
      "synaxariumText": "في مثل هذا اليوم من سنة 648 ش. (27 فبراير 932 \n ميلادية) تنيَّح الأب المغبوط الأنبا قزما الثامن والخمسون من \nباباوات الكرازة المرقسية. وكان هذا الأب بارًا، طاهرًا، عفيفًا، كثير الرحمة، \n مُلِمًّا بما في كتب البيعة واستيعاب معانيها.. ولما اختير للبطريركية في \n4 \n برمهات سنة 636 ش. (28 فبراير سنة 920) رعى رعيته بخوف الله وحسن \n التدبير، وكان يوزع ما يفضل عنه على المساكين وعلى تشييد الكنائس، إلا \n أن الشيطان لم يدعه بلا حزن لما رأى سيرته هذه. فحدث أنه لما رسم مطرانًا لأثيوبيا من الرهبان اسمه بطرس أوفده إلى هناك، فقابله ملكها بفرح عظيم. وبعد زمن مرض الملك، وشعر بدنو أجله، فأستحضر ولديه، ودعا المطران \n إليه، ورفع التاج عن رأسه وسلمه للمطران قائلًا: \"أنا ذاهب إلى المسيح \n والذي ترى أنه يصلح من ولدى للملك بعدى فتوجه\" ولما توفي الملك رأى \n المطران والوزراء أن الابن الأصغر أصلح للملك، فألبسوه التاج. وحدث بعد \n قليل أن وصل إلى أثيوبيا راهب من \nدير الأنبا انطونيوس اسمه بقطر ومعه \n رفيق له اسمه مينا، وطلبا من المطران مالًا فلم يعطهما، فأغواهما الشيطان ليدبرا مكيدة ضده. فلبس أحدهما زى الأساقفة ولبس الآخر زى \n تلميذًا له، وزورا كتابا من الأب البطريرك إلى رجال الدولة يقول فيه \"بلغنا أنه قد حضر عندكم إنسان ضال اسمه بطرس، وادعى أننا أوفدناه مطرانًا \n عليكم وهو في ذلك كاذب. والذي يحمل إليكم هذا الكتاب هو المطران الشرعي \n مينا. وقد بلغنا أن بطرس المذكور قد توج ابن الملك الصغير دون الكبير، \n مخالفًا في ذلك الشرائع الدينية والمدنية، فيجب حال وصوله أن تنفوا كلا \n من المطران والملك، وأن تعتبروا الأب مينا حامل رسائلنا هذه مطرانًا \n شرعيا. وتسمحوا له أن يتوج الابن الأكبر ملكًا\". وقدم الراهبان الكتاب \n لابن الملك الأكبر، فلما قرأه جمع الوزراء وأكابر المملكة وتلاه عليهم. \n فأمروا بنفي المطران بطرس، وأجلسوا مينا مكانه وبقطر وكيلًا له ونزعوا \n تاج الملك من الابن الصغير وتوجوا أخاه الكبير بدلًا منه، غير أنه لم تمض \n على ذلك مدة حتى وقع نفور بين المطران الزائف ووكيله الذي انتهز فرصة \n غياب مطرانه، وطرد الخدم، ونهب كل ما وجده، وعاد إلى مصر وأسلم. ولما \n وصلت هذه الأخبار إلى البابا قزما حزن حزنًا عظيمًا، وأرسل كتابًا إلى أثيوبيا بحرم مينا الكاذب. فغضب الملك على مينا وقتله، وطلب المطران \n بطرس من منفاه فوجده قد تنيَّح، ولم يقبل الأب البطريرك أن يرسم لهم \n مطرانا عوضه، وهكذا فعل البطاركة الأربعة الذين تولوا الكرسي بعده. \n وكانت أيام هذا الأب كلها سلاما وهدوءا، لولا هذا الحادث. وقد قضى على \n الكرسي المرقسي اثنتي عشرة سنة وتنيَّح بسلام صلاته تكون معنا آمين."
    },
    "names": {
      "english": "Pope Cosmas III of Alexandria",
      "greek": "Πάπας Κοσμάς Γ΄",
      "coptic": "Papa Kocma =g",
      "amharic": "አባ ኮዝማ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-058.jpg",
        "alt": "St-Takla.org Image: St. Cosmas III - Pope Kosma - Pope of Alexandria and Patriarch of the See of St. Mark (58) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا قزمان الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (58) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cosmas III - Pope Kosma - Pope of Alexandria and Patriarch of the See of St. \nMark (58) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-058.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Kosma III, Coptic Orthodox Pope #58 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا قزمان الثالث البطريرك الثامن والخمسون من بطاركة الكرازة المرقسية: 58. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Kosma III, Coptic Orthodox Pope #58 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 59,
    "name": "البابا مكاريوس الأول",
    "years": "932 - 952 م.",
    "durationYears": "19",
    "durationMonths": "11",
    "durationDays": "23",
    "link": "Life-of-Coptic-Pope-059-Pope-Macarius-I_.html",
    "moreInfo": {
      "birthPlace": ": \nشبرا قبالة قرب الإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nشبرا قبالة قرب الإسكندرية، مصر",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمقاره",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول برموده 648 للشهداء - 27 مارس 932 \n للميلاد",
          "links": [
            {
              "text": "أول برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/01-Bermodah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n24 برمهات 668 للشهداء - 20 مارس 952 \n للميلاد",
          "links": [
            {
              "text": "24 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/24-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n19 سنة و11 شهرًا و23 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n4 أشهر و5 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدمرو",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالقاهر - المعتضد - الراضي - المستكفي - المطيع \n- محمد الأخشيدي - أبو القاسم",
          "links": []
        }
      ],
      "durationOnThrone": ": \n19 سنة و11 شهرًا و23 يومًا",
      "interregnumDuration": ": \n4 أشهر و5 أيام",
      "residence": ": \nدمرو",
      "synaxariumText": "في مثل هذا اليوم من سنة 668 ش. (0 2 مايو سنة 1952 م. \n ) تنيَّح الأب القديس الأنبا مقار الأول التاسع والخمسون من \nباباوات الكرازة المرقسية. وقد ولد في بلدة شبرا وزهد العالم منذ صغره واشتاق إلى السيرة \n الرهبانية. فقصد \nجبل شيهيت\nبدير القديس مقاريوس، وسار في سيرة صالحة \n أهلته لانتخابه بطريركا خلفًا\nللبابا قزما (قزمان). فاعتلى الكرسي \nالمرقسي في \nأول \n برمودة سنة 648 ش. (27 مارس سنة 932 م.)."
    },
    "names": {
      "english": "Pope Macarius I of Alexandria",
      "greek": "Πάπας Μακάριος Α΄",
      "coptic": "Papa Makariou =a",
      "amharic": "አባ ማካሪ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-059.jpg",
        "alt": "St-Takla.org Image: St. Macarius I - Pope Macarios - Pope of Alexandria and Patriarch of the See of St. Mark (59) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مكاريوس الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (59) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Macarius I - Pope Macarios - Pope of Alexandria and Patriarch of the See of \nSt. Mark (59) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-059.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Macarius I, Coptic Orthodox Pope #59, and below is the scene of his visit to his mother while she was spinning when she felt sad for him because of the patriarchal responsibility. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مكاريوس الأول البطريرك التاسع والخمسون من بطاركة الكرازة المرقسية: 59، وبأسفل مشهد زيارته لأمه وهي تغزل عندما حزنت عليه بسبب مسئولية البطريركية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Macarius I, Coptic Orthodox Pope #59, and below is the scene of his visit to his mother while she was spinning when she felt sad for him because of the patriarchal responsibility. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 60,
    "name": "البابا ثاؤفانيوس",
    "years": "952 - 956 م.",
    "durationYears": "4",
    "durationMonths": "4",
    "durationDays": "11",
    "link": "Life-of-Coptic-Pope-060-Pope-Theophanius_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nثاوفانيوس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول مسرى 668 للشهداء (669؟) - 25 يوليو 952 \n للميلاد (953؟)",
          "links": [
            {
              "text": "أول مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/01-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n10 كيهك 673 للشهداء \n(4 برمهات 674؟) - 6 ديسمبر 956 \n للميلاد",
          "links": [
            {
              "text": "10 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/10-Keyahk.html"
            },
            {
              "text": "4 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/04-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n4 سنوات و4 أشهر و11 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالإسكندرية",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nأُلْقِيَ في البحر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأبو القاسم الأخشيدي",
          "links": []
        }
      ],
      "durationOnThrone": ": \n4 سنوات و4 أشهر و11 يومًا",
      "residence": ": \nالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Theophilus II of Alexandria / Pope Theophanes",
      "greek": "Πάπας Θεόφιλος Β΄ / Θεοφάνης",
      "coptic": "Papa :e`ovaniou",
      "amharic": "አባ ቴዎፋኒዮስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-060.jpg",
        "alt": "St-Takla.org Image: St. Theophilus - Pope Theophilos - Pope of Alexandria and Patriarch of the See of St. Mark (60) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ثاؤفانيوس - بابا الإسكندرية وبطريرك الكرازة المرقسية (60) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Theophilus - Pope Theophilos - Pope of Alexandria and Patriarch of the See \nof St. Mark (60) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-060.jpg",
        "alt": "St-Takla.org Image: Pope Theophanius, Coptic Orthodox Pope #60, and next to him was the shape of a boat, on which he died after he had a nervous breakdown. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا ثاؤفانيوس البطريرك الستون من بطاركة الكرازة المرقسية: 60، وبجانبه شكل مركب، حيث مات عليها بعدما تشنجت أعصابه. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Theophanius, Coptic Orthodox Pope #60, and next to him was the shape of a boat, on which he died after he had a nervous breakdown. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 61,
    "name": "البابا مينا الثاني",
    "years": "956 - 974 م.",
    "durationYears": "17",
    "durationMonths": "11",
    "durationDays": "6",
    "link": "Life-of-Coptic-Pope-061-Pope-Mina-II_.html",
    "moreInfo": {
      "birthPlace": ": \nصندلا، مركز كفر الشيخ",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nصندلا، مركز كفر الشيخ",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمين",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n11 كيهك 673 للشهداء - 7 ديسمبر 956 \n للميلاد",
          "links": [
            {
              "text": "11 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/11-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n16 هاتور 691 للشهداء - 13 نوفمبر 974",
          "links": [
            {
              "text": "16 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/16-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n17 سنة و11 شهرًا و6 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و20 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالريف ثم تيدا بمحلة دانيال",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nمحلة دانيال غربية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأبو القاسم - أبو الحسن - كافور أبو \n المسك\n - أبو الفوارس - معد المعز لدين الله الفاطمي",
          "links": []
        }
      ],
      "durationOnThrone": ": \n17 سنة و11 شهرًا و6 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و20 يومًا",
      "residence": ": \nالريف ثم تيدا بمحلة دانيال",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mina II of Alexandria / Pope Menas II",
      "greek": "Πάπας Μηνάς Β΄",
      "coptic": "Papa Myna =b",
      "amharic": "አባ ሜና 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-061.jpg",
        "alt": "St-Takla.org Image: Pope Mina II - Pope Mena - Pope of Alexandria and Patriarch of the See of St. Mark (61) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مينا الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (61) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Mina II - Pope Mena - Pope of Alexandria and Patriarch of the See of St. \nMark (61) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-061.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mina II, Coptic Orthodox Pope #61, and below appears a picture of his wife, whom he was forced to marry, and then encouraged her to become a virgin, and he himself became a monk. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مينا الثاني البطريرك الحادي والستون من بطاركة الكرازة المرقسية: 61، ويظهر بأسفل صورة زوجته التي تزوجها مرغمًا، وشجعها على البتولية وترهَّب هو كذلك. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mina II, Coptic Orthodox Pope #61, and below appears a picture of his wife, whom he was forced to marry, and then encouraged her to become a virgin, and he himself became a monk. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 62,
    "name": "البابا ابرآم (ابن زرعة)",
    "years": "975 - 979 م.",
    "durationYears": "3",
    "durationMonths": "6",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-062-Pope-Abraham_.html",
    "moreInfo": {
      "birthPlace": ": \n\n\nسوريا\n(سرياني)",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\n\nسوريا\n(سرياني)",
          "links": [
            {
              "text": "سوريا",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-002-Holy-Arabic-Bible-Dictionary/12_S/S_157.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nإبراهيم",
          "links": []
        },
        {
          "text": "من أبناء دير: \n(عِلماني)",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n7 طوبه 691 للشهداء - 3 يناير 975 للميلاد",
          "links": [
            {
              "text": "7 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/07-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n6 كيهك 695 للشهداء - 3 ديسمبر 979 \n للميلاد(1)",
          "links": [
            {
              "text": "6 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/06-Keyahk.html"
            },
            {
              "text": "(1)",
              "href": "#(1)"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n3 سنوات و6 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و25 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمعد المعز لدين الله الفاطمي - نزار العزيز بالله الفاطمي",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nابرأم ابن زرعة، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ62",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nابرأم ابن زرعة، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ62",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/062-Pope-Ibraam-Ibn-Zaraa.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n3 سنوات و6 أشهر",
      "interregnumDuration": ": \n3 أشهر و25 يومًا",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": "في مثل هذا اليوم من سنة 979 ميلادية(2) تنيَّح القديس \n أنبا أبرام بابا الإسكندرية الثاني والستون، كان هذا الأب من نصارى \n المشرق، وهو ابن زرعة السرياني وكان تاجرًا ثريا وتردد علي مصر مرارا \n وأخيرا أقام فيها، وكان يتحلى بفضائل كثيرة، منها الرحمة علي ذوي الحاجة \n ، وشاع ذكره بالصلاح والعلم، وعندما خلا الكرسي البطريركي، اجمع رأي \n الأساقفة والشيوخ العلماء علي اختياره بطريركًا، فلما جلس علي كرسي \n الكرازة المرقسية وزع كل ماله علي الفقراء والمساكين، وفي أيامه عين \n قزمان الوزير القبطي ابن مينا واليا علي فلسطين، فأودع عند الأب \n البطريرك مئة آلف دينار إلى أن يعود، وأوصاه بتوزيعها علي الفقراء \n والمساكين والكنائس والأديرة إن مات هناك، فلما بلغ البطريرك خبر \n استيلاء هفكتين علي بلاد الشام وفلسطين، ظن إن قزمان قد مات، فوزع ذلك \n المال حسب الوصية، ولكن قزمان كان قد نجا من الموت وعاد إلى مصر فأخبره الأب بما فعله بوديعته فسر بذلك وفرح فرحًا جزيلًا، ومن مآثره \nأنه أبطل \n العادات الرديئة، ومنع وحرم كل من يأخذ رشوة من أحد لينال درجة بالكنيسة \n ، كما حرم علي الشعب اتخاذ السراري وشدد في ذلك كثيرًا، فلما علم بذلك \n الذين اتخذوا لأنفسهم سراري، استيقظ فيهم خوف الله، كما خافوا أيضًا من \n حرمه، فأطلقوا سبيل سراريهم وذهبوا إليه تائبين، ما عدا رجلا من سراة \n الدولة، فإنه لم يخف الله تعالي ولا حرم هذا الأب الذي وعظه كثيرا وأطال \n أناته عليه، حيث لم يرتدع ولم يخش إن يهلكه الله، ومع هذا لم يتوان \n الأب عن تعليمه وإصلاحه، بل أتضع كالمسيح معلمه وذهب إلى داره، فلما سمع \n الرجل بقدوم الأب إليه أغلق بابه دونه، فلبث الأب زهاء ساعتين أمام \n الباب وهو يقرع فلم يفتح له، ولا كلمة، ولما تحقق إن هذا المسكين قد \n فصل نفسه بنفسه من رعية المسيح، وأصبح بجملته عضوًا فاسدًا، رأي انه من \n الصواب قطعه من جسم الكنيسة حتى لا يفسد بقية الأعضاء، فحرمه قائلا “ إن \n دمه علي رأسه، ثم نفض غبار نعله علي عتبة بابه، فاظهر الله آيته في تلك \n الساعة أمام أعين الحاضرين إذ انشقت عتبة الدار، وكانت من الصوان، إلى \n نصفين، وبعد ذلك اظهر الله قدرته حيث افتقر حتى لم يبق معه درهم واحد، \n كما طرد من خدمته مهانًا، وأصابته بعض الأمراض التي أدت إلى موته أشر \n ميتة، وصار عبرة لغيره، إذ اتعظ به خطاة كثيرون وخافوا مما أصابه."
    },
    "names": {
      "english": "Pope Abraham of Alexandria / Saint Abraam Ebn",
      "greek": "Πάπας Αβραάμ",
      "coptic": "Papa Abraam",
      "amharic": "አባ አብራም 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-062.jpg",
        "alt": "St-Takla.org Image: St. Abraham - Pope Avraam - Pope of Alexandria and Patriarch of the See of St. Mark (62) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ابرآم (ابن زرعة) - بابا الإسكندرية وبطريرك الكرازة المرقسية (62) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Abraham - Pope Avraam - Pope of Alexandria and Patriarch of the See of St. \nMark (62) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/062-Pope-Ibraam-Ibn-Zaraa/www-St-Takla-org--Sts-Abram-Ibn-Zaraan-n-Samaan-003.jpg",
        "alt": "St-Takla.org Image: Saint Abram Ibn Zaraa the Coptic Pope #62 with St. Samaan El Kharraz (St, Simon the Tanner), details from a Coptic icon of the miracle of moving the Mokattam Mountain, Egypt صورة في موقع الأنبا تكلا: القديس الأنبا ابرآم ابن زرعة البابا القبطي رقم 62 مع القديس الأنبا سمعان الخراز - تفاصيل من أيقونة قبطية تصور معجزة نقل جبل المقطم في مصر",
        "title": "",
        "caption": "St-Takla.org Image:\n\nSaint Abraam Ebn Zara'a the Coptic Pope \n#62 with St. Saman El Kharaz (St, Simon the Tanner), ancient Coptic icon.\nThis icon is located at Saint Mary El Mualaka Church, Old Cairo (Masr El Adima), \ngoes back to the 15th century, showing the Coptic Pope and St. Simon, both \nstanding, where St. Ibram is wearing the Clerical cloak and holding in His right \nhand three candles (like what we do no in the Prayer of \"Efnoty Nay Nan\" i. e. \nLord have mercy), and the people reply back \"Kirelicon\" with the same meaning, \nand holding in his left hand St. Sam3an the Tanner, who is wearing brocaded \nclothes, and holding two water skins, and on the left side of the icon we see \nSt. Mary the Virgin above inside a circle, and pointing her finger to ElBaba \nEphram. And this icon is a proof that this miracle actually happened then.\nPainting by Boghdady Abo El Saadany (1176 M./1460 A.D.)"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العاشر",
    "index": 63,
    "name": "البابا فيلوثاؤس",
    "years": "979 - 1003 م.",
    "durationYears": "24",
    "durationMonths": "7",
    "durationDays": "10",
    "link": "Life-of-Coptic-Pope-063-Pope-Philotheos_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل \n البطريركية: \nفيلوثاوس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 برموده 695 للشهداء - 28 مارس 979 \n للميلاد",
          "links": [
            {
              "text": "2 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/02-Bermodah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n12 هاتور 720 للشهداء - 8 نوفمبر 1003 \n للميلاد",
          "links": [
            {
              "text": "12 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/12-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n24 سنة و7 أشهر و10 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهران و8 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nمحلة دانيال ودمرو",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nمرو (سخا)",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالعزيز الفاطمي - الحاكم بأمر الله",
          "links": []
        }
      ],
      "durationOnThrone": ": \n24 سنة و7 أشهر و10 أيام",
      "interregnumDuration": ": \nشهران و8 أيام",
      "residence": ": \nمحلة دانيال ودمرو",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Philotheos of Alexandria",
      "greek": "Πάπας Φιλόθεος",
      "coptic": "Papa Vilo;eou",
      "amharic": "አባ ፊሎቴዎስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-063.jpg",
        "alt": "St-Takla.org Image: Pope Philotheos - Pope of Alexandria and Patriarch of the See of St. Mark (63) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا فيلوثاؤس - بابا الإسكندرية وبطريرك الكرازة المرقسية (63) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Philotheos - Pope of Alexandria and Patriarch of the See of St. Mark (63) - \nArabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, \nNovember 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-063.jpg",
        "alt": "St-Takla.org Image: Pope Philotheos, Coptic Orthodox Pope #63, and next to him is an image of the vision he saw at the Holy Liturgy: a hand crossing over the Holy Bread. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا فيلوثاؤس البطريرك الثالث والستون من بطاركة الكرازة المرقسية: 63، وبجانبه صورة الرؤيا التي رآها في القداس الإلهي: يد ترشم الصليب على القربان. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Philotheos, Coptic Orthodox Pope #63, and next to him is an image of the vision he saw at the Holy Liturgy: a hand crossing over the Holy Bread. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الحادي عشر",
    "index": 64,
    "name": "البابا زكريا",
    "years": "1004 - 1032 م.",
    "durationYears": "27",
    "durationMonths": "11",
    "durationDays": "12",
    "link": "Life-of-Coptic-Pope-064-Pope-Zacharias_.html",
    "moreInfo": {
      "birthPlace": ": \n\nالإسكندرية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \n\nالإسكندرية، مصر",
          "links": [
            {
              "text": "الإسكندرية، مصر",
              "href": "../../Alexandria-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية: \nزخارياس",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n20 طوبه 720 للشهداء (716؟) - 16 يناير 1004 \n للميلاد",
          "links": [
            {
              "text": "20 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/20-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n13 هاتور  748 للشهداء (745؟) - 4 يناير 1032 للميلاد (1027؟)",
          "links": [
            {
              "text": "13 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/13-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n27 سنة و11 شهرًا و12 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهران و15 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nأبو سيفين ووادي النطرون ودير شهران و دمرو",
          "links": [
            {
              "text": "وادي النطرون",
              "href": "../../Coptic-History/places/monasteries/scetis.html"
            },
            {
              "text": "دير شهران",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-barsoum-maasara/index.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة السيدة العذراء بالدرج",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة السيدة العذراء بالدرج",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-bablion.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالحاكم بأمر الله - الظافر \n (المنتصر بالله)؟",
          "links": []
        }
      ],
      "durationOnThrone": ": \n27 سنة و11 شهرًا و12 يومًا",
      "interregnumDuration": ": \nشهران و15 يومًا",
      "residence": ": \nأبو سيفين ووادي النطرون ودير شهران و دمرو",
      "synaxariumText": "في مثل هذا اليوم من سنة 1027 ميلادية تنيَّح القديس \n العظيم الأنبا زخارياس الرابع والستون من \n\nباباوات \nالإسكندرية، كان من \n أهل الإسكندرية، ورسم قسا بها، وكان طاهر السيرة، وديع الخلق، ولما \n تنيَّح القديس فيلوثاؤس البابا الثالث والستون، اجتمع الأساقفة ليختاروا \n بالهام الله من يصلح، وبينما هم مجتمعون في كنيسة القديس مرقس الرسولي \n يبحثون عمن يصلح، بلغهم إن أحد أعيان الإسكندرية المدعو إبراهيم بن بشر \n وكان مقربا من الخليفة، قدم له رشوة، وحصل منه علي مرسوم بتعيينه \n بطريركًا، وأوفده مع بعض الجند إلى الإسكندرية، فحزنوا وطلبوا بقلب واحد \n من الله أن يمنع عن كنيسته هذا الذي يتقدم لرعايتها بالرشوة ونفوذ \n السلطان، وأن يختار لها من يصلح، وفيما هم علي هذا الحال، نزل الأب زخارياس من سلم الكنيسة يحمل جرة، فزلت قدمه وسقط يتدحرج إلى الأرض، \n وإذ ظلت الجرة بيده سالمة تعجب الأساقفة والكهنة من ذلك، وسألوا عنه أهل \n الثغر، فاجمع الكل علي تقواه وعلمه، فاتفق رأيهم مع الأساقفة علي \n تقدمته بطريركًا، ووصل إبراهيم بن بشر فوجدهم قد انتهوا من تكريس الأب زخارياس بطريركًا، فلما اطلع الآباء الأساقفة علي كتاب الملك استدعوا \n إبراهيم وطيبوا خاطره ورسموه قسا فقمصا، ثم وعدوه بالأسقفية عند خلو \n إحدى الإبراشيات، أما الأب زخارياس فقد قاسي شدائد كثيرة، منها إن راهبا \n رفع عده شكاوى ضده إلى الحاكم بأمر الله الذي تولي الخلافة سنة 989 \n ميلادية فاعتقله وألقاه للسباع فلم تؤذه، فلم يصدق الحاكم علي متولي أمر \n السباع وظن أنه أخذ من البطريرك رشوة، فأبقى السباع مدة بغير طعام ثم \n ذبح خروفا ولطخ بدمه ثياب البطريرك وألقاه للسباع ثانية فلم تؤذه أيضًا بل \n جعلها الله تستأنس به، فتعجب الحاكم وأمر برفعه من بين السباع واعتقله \n ثلاثة أشهر، توعده فيها بالقتل والطرح في النار إن لم يترك دينه، فلم \n يخف البطريرك، ثم وعده بان يجعله قاضي القضاة فلم تفتنه المراتب \n العالمية، ولم يستجب لأمر الحاكم، أخيرًا أطلق سبيله بوساطة أحد الأمراء، فذهب إلى  \nوادي هبيب وأقام هناك تسع سنين، لحق الشعب في أثنائها أحزان \n كثيرة ومتاعب جمة، كما هدمت كنائس عديدة، وتحنن \n \n السيد المسيح فأزال هذه \n الشدة عن كنيسته وحول الحاكم عن ظلمه، فأمر بعمارة الكنائس التي هدمت، \n وأن يعاد إليها جميع ما سلب منها، وصدر الأمر بقرع الناقوس ثانيا، وبعد \n ذلك أقام الأب زخارياس اثني عشر عامًا، كان فيها مهتما ببناء الكنائس \n وترميم ما هدم منها، وبقي في البطريركية ثمانية وعشرون عاما، وانتقل \n إلى الرب بسلام، صلاته تكون معنا ولربنا المجد دائما أبديًا آمين."
    },
    "names": {
      "english": "Pope Zacharias of Alexandria",
      "greek": "Πάπας Ζαχαρίας",
      "coptic": "Papa Za,ariac",
      "amharic": "አባ ዘካርያ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-064.jpg",
        "alt": "St-Takla.org Image: St. Zacharias - Pope Zakharias - Pope of Alexandria and Patriarch of the See of St. Mark (64) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا زكريا - بابا الإسكندرية وبطريرك الكرازة المرقسية (64) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Zacharias - Pope Zakharias - Pope of Alexandria and Patriarch of the See of \nSt. Mark (64) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-064.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Zakharias (Zacharias), Coptic Orthodox Pope #64, and with him was a lion, as he had been thrown to the wild lions, but they did not eat him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا زكريا البطريرك الرابع والستون من بطاركة الكرازة المرقسية: 64، ومعه أسد حيث تم إلقاؤه للسباع فلم تأكله. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Zakharias (Zacharias), Coptic Orthodox Pope #64, and with him was a lion, as he had been thrown to the wild lions, but they did not eat him. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الحادي عشر",
    "index": 65,
    "name": "البابا شنودة الثاني",
    "years": "1032 - 1046 م.",
    "durationYears": "14",
    "durationMonths": "7",
    "durationDays": "11",
    "link": "Life-of-Coptic-Pope-065-Pope-Shenouda-II_.html",
    "moreInfo": {
      "birthPlace": ": \nبلبانه عدى، مركز منيا القمح",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبلبانه عدى، مركز منيا القمح",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nشنوده",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n23 برمهات 748 للشهداء (كيهك 745 \nش. ؟) - 19 مارس 1032 \n للميلاد",
          "links": [
            {
              "text": "23 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/23-Baramhat.html"
            },
            {
              "text": "كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/El-Seneksar-or-Sanaksar-04-Keiahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n2 هاتور 763 (12 هاتور 761 \nش. ؟) للشهداء - 29 أكتوبر 1046 \n للميلاد (21؟)",
          "links": [
            {
              "text": "2 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/02-Hatoor.html"
            },
            {
              "text": "12 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/12-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة و7 أشهر و11 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و12 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدمرو والمختاره بالروضة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nكنيسة دمرو",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالظاهر بن الحاكم - المستنصر",
          "links": []
        }
      ],
      "durationOnThrone": ": \n14 سنة و7 أشهر و11 يومًا",
      "interregnumDuration": ": \nشهرًا واحدًا و12 يومًا",
      "residence": ": \nدمرو والمختاره بالروضة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Shenouda II of Alexandria",
      "greek": "Πάπας Σενούντα Β΄",
      "coptic": "peniwt abba }enou; أو \nPapa Cenou;iou =b",
      "amharic": "አባ ሺኖዳ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-065.jpg",
        "alt": "St-Takla.org Image: Pope Shenouda II - Pope Shenoute - Pope of Alexandria and Patriarch of the See of St. Mark (65) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا شنودة الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (65) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Shenouda II - Pope Shenoute - Pope of Alexandria and Patriarch of the See \nof St. Mark (65) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-065.jpg",
        "alt": "St-Takla.org Image: Pope Shenouda II, Coptic Orthodox Pope #65, with a coins purse in his hands, due to his love of money: Simony. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا شنودة الثاني البطريرك الخامس والستون من بطاركة الكرازة المرقسية: 65، ويظهر بيده صرة من العملات، لمحبته في المال: السيمونية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Shenouda II, Coptic Orthodox Pope #65, with a coins purse in his hands, due to his love of money: Simony. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الحادي عشر",
    "index": 66,
    "name": "البابا خرسطوذولس",
    "years": "1046 - 1077 م.",
    "durationYears": "31",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-066-Pope-Christodolos_.html",
    "moreInfo": {
      "birthPlace": ": \nبوره بحيرة المنزلة",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبوره بحيرة المنزلة",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nخريستوذولس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير البراموس",
          "links": [
            {
              "text": "دير البراموس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-paromeos/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n15 كيهك 763 للشهداء - 11 ديسمبر 1046 \n للميلاد",
          "links": [
            {
              "text": "15 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/15-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n14 كيهك 794 للشهداء - 10 ديسمبر 1077 \n للميلاد",
          "links": [
            {
              "text": "14 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/14-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n31 سنة",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و8 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدمرو ثم\nالمعلقة بمصر وكنيسة المختارة",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالمستقر",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nخريستوذولوس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ66",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nخريستوذولوس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ66",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/66.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n31 سنة",
      "interregnumDuration": ": \n3 أشهر و8 أيام",
      "residence": ": \nدمرو ثم\nالمعلقة بمصر وكنيسة المختارة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Christodoulos of Alexandria / Pope Abd",
      "greek": "Πάπας Χριστόδουλος",
      "coptic": "Papa `<rictodoloc",
      "amharic": "አባ ክርስቶዱሎስ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-066.jpg",
        "alt": "St-Takla.org Image: St. Christoldoulos - Pope Khristodoulos - Pope of Alexandria and Patriarch of the See of St. Mark (66) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا خرسطوذولس - بابا الإسكندرية وبطريرك الكرازة المرقسية (66) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Christoldoulos - Pope Khristodoulos - Pope of Alexandria and Patriarch of \nthe See of St. Mark (66) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/066-Pope-Christodoulos/www-st-takla-org--pope-christodoulos-66-01.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Christodoulos of Alexandria 66 (Pope Abd-el-Messiah), Coptic icon. صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا خريستوذولس (البابا عبد المسيح)، بابا الإسكندرية وبطريرك الكرازة المرقسية الـ66، أيقونة قبطية.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Christodoulos of Alexandria 66 (Pope Abd-el-Messiah), Coptic icon."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الحادي عشر",
    "index": 67,
    "name": "البابا كيرلس الثاني",
    "years": "1078 - 1092 م.",
    "durationYears": "14",
    "durationMonths": "2",
    "durationDays": "20",
    "link": "Life-of-Coptic-Pope-067-Pope-Cyril-II_.html",
    "moreInfo": {
      "birthPlace": ": \nأفلاقة، دمنهور، البحيرة، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nأفلاقة، دمنهور، البحيرة، مصر",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nجرجس - أبونا الراهب جورجيوس المقاري",
          "links": []
        },
        {
          "text": "من أبناء دير: \nدير قبريوس (قنوبوس) - صومعة سنجار",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n22 برمهات 794 للشهداء \n(1078 م.)",
          "links": [
            {
              "text": "22 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/22-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n12 بؤونه 808 \nللشهداء (1092 م.)",
          "links": [
            {
              "text": "12 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/12-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة ونصف",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n6 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nدير متراس بالإسكندرية",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nالمرقسية بالإسكندرية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المرقسية بالإسكندرية",
              "href": "../../Coptic-History/places/africa/egypt/alexandria/saint-mark-church-mahatet-el-raml.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nهيرقل الأول - الثاني - عمر - عثمان - على \n- حسن بن على - معاوية",
          "links": []
        }
      ],
      "durationOnThrone": ": \n14 سنة ونصف",
      "interregnumDuration": ": \n6 أيام",
      "residence": ": \nدير متراس بالإسكندرية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Cyril II of Alexandria",
      "greek": "Πάπας Κύριλλος Β΄",
      "coptic": "pi`agioc Kurilloc أو \nPapa Kurillou =b",
      "amharic": "አባ ቄርሎስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-067.jpg",
        "alt": "St-Takla.org Image: St. Cyril II - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of St. Mark (67) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا كيرلس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (67) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cyril II - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (67) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-067.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril II, Coptic Orthodox Pope #67, and next to him is a manuscript in which 34 laws for the clergy and bishops were written down during his reign. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا كيرلس الثاني البطريرك السابع والستون من بطاركة الكرازة المرقسية: 67، وبجانبه مخطوط فيه تم تدوين 34 قانونًا للإكليروس والأساقفة في عهده. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Cyril II, Coptic Orthodox Pope #67, and next to him is a manuscript in which 34 laws for the clergy and bishops were written down during his reign. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Books/from-books/general/edhp/1/www-st-takla-org--egypt-dh-a-265.jpg",
        "alt": "St-Takla.org Image: Bab el-Footoh, by Carl Werner - from the book: Egypt: Descriptive, Historical, and Picturesque- Vol. 1 - by Georg Ebers (tr. Clara Courtenay Poynter Bell), 1885. صورة في موقع الأنبا تكلا: باب الفتوح في القاهرة الإسلامية، رسم الفنان كارل فيرنر - من صور كتاب: مصر: وصفيًّا، تاريخيًّا وتصويريًّا - جزء 1 - لـ جيورج إبيرس (ترجمة كلارا كورتناي بوينتر بيل)، 1885 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nBab el-Footoh, by Carl Werner - from the book: Egypt: Descriptive, Historical, \nand Picturesque- Vol. 1 - by Georg Ebers (tr. Clara Courtenay Poynter Bell),  1885."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Books/from-books/general/edhp/1/www-st-takla-org--egypt-dh-a-264.jpg",
        "alt": "St-Takla.org Image: Bab en-Nasr, by Bernhard Fiedler - from the book: Egypt: Descriptive, Historical, and Picturesque- Vol. 1 - by Georg Ebers (tr. Clara Courtenay Poynter Bell), 1885. صورة في موقع الأنبا تكلا: باب النصر في القاهرة الإسلامية، رسم الفنان بيرنهارد فيدلر - من صور كتاب: مصر: وصفيًّا، تاريخيًّا وتصويريًّا - جزء 1 - لـ جيورج إبيرس (ترجمة كلارا كورتناي بوينتر بيل)، 1885 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nBab en-Nasr, by Bernhard Fiedler - from the book: Egypt: Descriptive, \nHistorical, and Picturesque- Vol. 1 - by Georg Ebers (tr. Clara Courtenay \nPoynter Bell), 1885."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الحادي عشر",
    "index": 68,
    "name": "البابا ميخائيل الثاني",
    "years": "1092 - 1102 م.",
    "durationYears": "9",
    "durationMonths": "7",
    "durationDays": "17",
    "link": "Life-of-Coptic-Pope-068-Pope-Michael-II----IV_.html",
    "moreInfo": {
      "birthPlace": ": \nصالحجر (سخا)",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nصالحجر (سخا)",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nميخائيل",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار - صومعة سنجار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n12 بابه 809 للشهداء - 9 أكتوبر 1092 \n للميلاد",
          "links": [
            {
              "text": "12 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/12-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n30 بشنس 818 للشهداء - 25 مايو 1102 \n للميلاد",
          "links": [
            {
              "text": "30 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/30-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n9 سنوات و7 أشهر و17 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n65 أشهر (؟) و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالمستقر - المستعلي",
          "links": []
        }
      ],
      "durationOnThrone": ": \n9 سنوات و7 أشهر و17 يومًا",
      "interregnumDuration": ": \n65 أشهر (؟) و14 يومًا",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": "في مثل هذا اليوم من سنة 818 ش. (25 مايو سنة 1102 م. \n ) تنيَّح الأب القديس البابا ميخائيل الثامن والستون من \nباباوات الكرازة المرقسية وقد كان عالمًا فاضلًا تأدب بكتب الكنيسة منذ صغره وحفظ أكثرها \n فاشتاقت نفسه الطاهرة إلى التعبد لله فخرج إلى البرية وترهب \nبدير القديس \n مقاريوس وبعد عدة سنين رُسِمَ قسًا ثم خرج إلى ناحية سنجار وحبس نفسه في \n مغارة هناك أكثر من عشرين سنة وهو يجاهد جهادًا عظيمًا حتى ذاعت فضائله \n فوقع عليه الاختيار للكرسي البطريركي فتولاه في \n12 بابه سنة 809 ش. (9 \n أكتوبر سنة 1092) بعد أن أقر بالإيمان المستقيم وتعهد بافتقاد إكليروس \n الإسكندرية وكنائسها بنوع خاص وباجتناب السيمونية (هذه اللفظة اتخذوها من \n اسم سيمون الساحر الذي قال عنه كاتب سفر الأعمال أنه كان يريد أن يشتري \n مواهب الروح القدس بالفضة)."
    },
    "names": {
      "english": "Pope Michael II of Alexandria",
      "greek": "Πάπας Μιχαήλ Β΄",
      "coptic": "Papa Mi,ayl ==b",
      "amharic": "አባ ሚካኤል 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-068.jpg",
        "alt": "St-Takla.org Image: St. Michael II - Pope Mikhail - Pope of Alexandria and Patriarch of the See of St. Mark (68) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ميخائيل الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (68) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Michael II - Pope Mikhail - Pope of Alexandria and Patriarch of the See of \nSt. Mark (68) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-068.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Michael II, Coptic Orthodox Pope #68 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ميخائيل الثاني البطريرك الثامن والستون من بطاركة الكرازة المرقسية: 68. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Michael II, Coptic Orthodox Pope #68 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني عشر",
    "index": 69,
    "name": "البابا مكاريوس الثاني",
    "years": "1102 - 1128 م.",
    "durationYears": "26",
    "durationMonths": "1",
    "durationDays": "11",
    "link": "Life-of-Coptic-Pope-069-Pope-Macarius-II_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل \n البطريركية: \nمقاره",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n13 هاتور 819 للشهداء (817؟) - 9 نوفمبر 1102 \n للميلاد",
          "links": [
            {
              "text": "13 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/13-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n4 توت 844 \nللشهداء - 19 ديسمبر 1128 للميلاد (1129؟)",
          "links": [
            {
              "text": "4 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/04-Toot.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n26 سنة وشهرًا واحدًا و11 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنتان وشهرًا واحدًا و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة وقلاية ذرا بجزيرة بني نصر",
          "links": [
            {
              "text": "المعلقة",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n\nالمعلقة\n/\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "المعلقة",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالآمر",
          "links": []
        }
      ],
      "durationOnThrone": ": \n26 سنة وشهرًا واحدًا و11 يومًا",
      "interregnumDuration": ": \nسنتان وشهرًا واحدًا و14 يومًا",
      "residence": ": \n\nالمعلقة وقلاية ذرا بجزيرة بني نصر",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Macarius II of Alexandria",
      "greek": "Πάπας Μακάριος Β΄",
      "coptic": "Papa Makariou =b",
      "amharic": "አባ ማካሪ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-069.jpg",
        "alt": "St-Takla.org Image: St. Macarius II - Pope Macarios - Pope of Alexandria and Patriarch of the See of St. Mark (69) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مكاريوس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (69) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Macarius II - Pope Macarios - Pope of Alexandria and Patriarch of the See of \nSt. Mark (69) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-069.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Macarius II, Coptic Orthodox Pope #69 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مكاريوس الثاني البطريرك التاسع والستون من بطاركة الكرازة المرقسية: 69. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Macarius II, Coptic Orthodox Pope #69 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني عشر",
    "index": 70,
    "name": "البابا غبريال الثاني",
    "years": "1131 - 1145 م.",
    "durationYears": "14",
    "durationMonths": "2",
    "durationDays": "2",
    "link": "Life-of-Coptic-Pope-070-Pope-Gabriel-II_.html",
    "moreInfo": {
      "birthPlace": ": \nمصر - الفسطاط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمصر - الفسطاط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبو العلا بن تريك",
          "links": []
        },
        {
          "text": "من أبناء دير: \n- (عِلماني)",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 أمشير 847 للشهداء - 3 فبراير 1131 \n للميلاد",
          "links": [
            {
              "text": "9 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/09-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n10 برموده 861 للشهداء - 5 أبريل 1145 \n للميلاد",
          "links": [
            {
              "text": "10 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/10-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة وشهران ويومان",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و24 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nأبو مرقوره أبو سيفين",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة أبو سيفين / \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة أبو سيفين",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالحافظ",
          "links": []
        }
      ],
      "durationOnThrone": ": \n14 سنة وشهران ويومان",
      "interregnumDuration": ": \n3 أشهر و24 يومًا",
      "residence": ": \nأبو مرقوره أبو سيفين",
      "synaxariumText": "في مثل هذا اليوم من سنة 861 ش. (5 أبريل سنة 1145 م. \n ) تنيَّح الأب القديس العظيم البابا غبريال الثاني البطريرك السبعون من \n \nباباوات الكرازة المرقسية الشهير بابن تريك. هذا البابا كان من كبار \n مدينة مصر وأراخنتها، وكان كاتبًا ناسخًا عالمًا فاضلًا ذا سيرة حميدة. وقد \n نسخ بيده كتبا كثيرة قبطية وعربية فوعي محتوياتها وفهم معانيها فاختاره \n مقدمو الشعب ورؤساؤهم لكرسي البطريركية، وتمت رسامته\nيوم 9 أمشير سنة \n 847 ش. (3 فبراير سنة 1131 م.)"
    },
    "names": {
      "english": "Pope Gabriel II of Alexandria",
      "greek": "Πάπας Γαβριήλ Β΄",
      "coptic": "Papa Gabriyl =b",
      "amharic": "አባ ገብርኤል 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-070.jpg",
        "alt": "St-Takla.org Image: St. Gabriel II - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (70) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (70) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Gabriel II - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (70) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-070.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel II, Coptic Orthodox Pope #70, holding the Euchologion, in which he added a part to the final confession in the Divine Liturgy. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال الثاني البطريرك السبعون من بطاركة الكرازة المرقسية: 70، وهو ممسكًا بالخولاجي الذي أضاف فيه جزء على الاعتراف الأخير في القداس الإلهي. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel II, Coptic Orthodox Pope #70, holding the Euchologion, in which he added a part to the final confession in the Divine Liturgy. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني عشر",
    "index": 71,
    "name": "البابا ميخائيل الثالث",
    "years": "1145 - 1146 م.",
    "durationYears": "",
    "durationMonths": "8",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-071-Pope-Michael-III----V_.html",
    "moreInfo": {
      "birthPlace": ": \nدقادوس، ميت غمر، الدقهلية، مصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nدقادوس، ميت غمر، الدقهلية، مصر",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nميخائيل",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n5 مسرى 861 للشهداء - 29 يوليو 1145 \n للميلاد",
          "links": [
            {
              "text": "5 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/05-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n3 برموده 862 للشهداء - 29 مارس 1146 \n للميلاد",
          "links": [
            {
              "text": "3 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/03-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n8 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة و4 أشهر و27 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة وأبو مقار",
          "links": [
            {
              "text": "المعلقة",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            },
            {
              "text": "أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالحافظ",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nميخائيل الثالث، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ71",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nميخائيل الثالث، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ71",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/71.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n8 أشهر",
      "interregnumDuration": ": \nسنة واحدة و4 أشهر و27 يومًا",
      "residence": ": \n\nالمعلقة وأبو مقار",
      "synaxariumText": "في مثل هذا اليوم من سنة 862 ش. (29 مارس 1146 م.) \n تنيَّح الأب القديس البابا ميخائيل الحادي والسبعون من بطاركة الكرازة \n المرقسية وقد اشتاق إلى السيرة الطاهرة فترهب \nبدير القديس مقاريوس. ولبث \n في البرية إلى سن الشيخوخة في سيرة صالحة مرضية. فلما تنيَّح \nالبابا \n غبريال السبعون، قضي الأساقفة والكهنة والأراخنة ثلاثة شهور في البحث \n عمن يصلح خلفًا له وتقدم لترشيح نفسه راهب من \nدير القديس مقاريوس يدعي يوأنس بن كدران يعاونه في ذلك الأنبا يعقوب أسقف طنطا. إلا أن أساقفة \n الصعيد وكهنة الإسكندرية وأراخنة مصر لم يقبلوا ذلك، أخيرا اتفق الجميع \n علي اختيار ثلاثة من الرهبان وهم. يوأنس أبو الفتح. وميخائيل من \nدير \n القديس مقاريوس. وسليمان الدخياري من \nدير البرموس. وألقوا قرعة بينهم \n فأصابت الراهب ميخائيل فرسموه بطريركا في \n5 مسري سنة 861 ش. (29 يوليه \n سنة 1145 م.) وكان شيخًا جليلًا محبًا للفقراء والمساكين. واتخذ له كاتبا \n يحرر له ما يرسله إلى الأساقفة والكهنة من العظات والتعاليم. ولما مرض \n توجه إلى \nدير القديس مقاريوس وهناك تنيَّح بسلام بعد أن أقام علي الكرسي \n ثمانية شهور. صلاته تكون معنا. ولربنا المجد دائمًا. آمين."
    },
    "names": {
      "english": "Pope Michael III of Alexandria",
      "greek": "Πάπας Μιχαήλ Γ΄",
      "coptic": "Papa Mi,ayl =g",
      "amharic": "አባ ሚካኤል 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-071.jpg",
        "alt": "St-Takla.org Image: St. Michael III - Pope Mikhail - Pope of Alexandria and Patriarch of the See of St. Mark (71) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ميخائيل الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (71) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Michael III - Pope Mikhail - Pope of Alexandria and Patriarch of the See of \nSt. Mark (71) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/071-Pope-Michael-III/www-st-takla-org--pope-mikhail-iii-01.jpg",
        "alt": "St-Takla.org Image: St. Michael III - Pope Mikhail - Pope of Alexandria and Patriarch of the See of St. Mark (71), Coptic icon by Zakaria Bekhit, 2020 - from Pope Mikhail no. 71 book, by Dr. Philemon Kamel. صورة في موقع الأنبا تكلا: قداسة البابا ميخائيل الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (71) - أيقونة قبطية من رسم الفنان زكريا بخيت، 2020 - من كتاب البابا ميخائيل الـ(71)، د. فليمون كامل.",
        "title": "",
        "caption": "St-Takla.org Image: St. Michael III - \nPope Mikhail - Pope of Alexandria and Patriarch of the See of St. Mark \n(71), Coptic icon by Zakaria Bekhit, 2020 - from Pope Mikhail no. 71 \nbook, by Dr. Philemon Kamel."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني عشر",
    "index": 72,
    "name": "البابا يؤانس الخامس",
    "years": "1147 - 1166 م.",
    "durationYears": "18",
    "durationMonths": "8",
    "durationDays": "4",
    "link": "Life-of-Coptic-Pope-072-Pope-John-V_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل \n البطريركية: \nيؤنس بن أبي الفتح - حنا الراهب",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو يحنس",
          "links": [
            {
              "text": "دير أبو يحنس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-yehnes-the-short/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 النسيء 863 للشهداء - 25 أغسطس 1147 \n للميلاد",
          "links": [
            {
              "text": "2 النسيء",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/13-Nasea/02-Nasea.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n4 بشنس 882 للشهداء - 29 أبريل 1166 \n للميلاد",
          "links": [
            {
              "text": "4 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/04-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n18 سنة و8 أشهر و4 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nأبو مرقوره",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\n\nكنيسة أبو سيفين /\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة أبو سيفين",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالحافظ - الظافر - الفايز - الفاضد",
          "links": []
        }
      ],
      "durationOnThrone": ": \n18 سنة و8 أشهر و4 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و14 يومًا",
      "residence": ": \nأبو مرقوره",
      "synaxariumText": "في مثل هذا اليوم من سنة 882 ش. (29 أبريل سنة 1166 م. \n ) تنيَّح البابا يوأنس الخامس البطريرك (72) وهو يوحنا الراهب من \nدير أبي يحنس. تولي الكرسي في يوم 2 نسيء سنة 863 ش. (25 أغسطس سنة 1147 م.) وكان \n قديسا صالحا عفيفا. وفي أيامه لما تولي الوزارة العادل بن السلار في \n خلافة الأمام الظهر أمر الصاري مصر والقاهرة بشد الزنانير وخلع الطيالس \n ولم يدم ذلك طويلا لأن الله انتقم منه سريعا إذ قام عليه والي مصر وقتله \n وأخذ منه الوزارة."
    },
    "names": {
      "english": "Pope John V of Alexandria",
      "greek": "Πάπας Ιωάννης Ε΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =e",
      "amharic": "አባ ዮሐንስ 5ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-072.jpg",
        "alt": "St-Takla.org Image: St. John V - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (72) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يؤانس الخامس - بابا الإسكندرية وبطريرك الكرازة المرقسية (72) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John V - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (72) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-072.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis V (John), Coptic Orthodox Pope #72, and next to him is the icon of the martyr Bashnouna, who was martyred during his reign. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يؤانس الخامس البطريرك الثاني والسبعون من بطاركة الكرازة المرقسية: 72، وبجانبه أيقونة الشهيد بشنونة الذي استشهد في عهده. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis V (John), Coptic Orthodox Pope #72, and next to him is the icon of the martyr Bashnouna, who was martyred during his reign. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني عشر",
    "index": 73,
    "name": "البابا مرقص الثالث",
    "years": "1166 - 1189 م.",
    "durationYears": "22",
    "durationMonths": "6",
    "durationDays": "19",
    "link": "Life-of-Coptic-Pope-073-Pope-Mark-III_.html",
    "moreInfo": {
      "birthPlace": ": \nسرياني",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nسرياني",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبو الفرج بن أبو السعد ابن زرعه",
          "links": []
        },
        {
          "text": "من أبناء دير: \n(عِلماني)",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n18 بؤونه 882 للشهداء - 12 يونيو 1166 \n للميلاد",
          "links": [
            {
              "text": "18 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/18-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n6 طوبة 905 للشهداء - أول يناير 1189 \n للميلاد",
          "links": [
            {
              "text": "6 طوبة",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/06-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n22 سنة و6 أشهر و19 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n28 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير أبو مقار",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالعاضد الفاطمي -\nصلاح الدين الأيوبي",
          "links": [
            {
              "text": "صلاح الدين الأيوبي",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__17-Al-Dawla-Al-Aioubia.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nمرقص الثالث، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ73",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nمرقص الثالث، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ73",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/73.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n22 سنة و6 أشهر و19 يومًا",
      "interregnumDuration": ": \n28 يومًا",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mark III of Alexandria",
      "greek": "Πάπας Μάρκος Γ΄",
      "coptic": "Papa Markou =g",
      "amharic": "አባ ማርቆስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-073.jpg",
        "alt": "St-Takla.org Image: Pope Mark III - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (73) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقص الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (73) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Mark III - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (73) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/073-Pope-Mark-III/www-st-takla-org--pope-mark-III-01.jpg",
        "alt": "St-Takla.org Image: Saint Pope Mark III of Alexandria: Pope Mark Ibn Zaraa (image 1), Bohairic Evangelical Tetra, circa 1178-1180, illumination on parchment, height: 38.5 cm (15.1 in); width: 27.5 cm (10.8 in), Bibliothèque nationale de France, Copte 13 f1v. صورة في موقع الأنبا تكلا: القديس البابا مرقس الثالث السكندري: البابا مرقس بن زرعة (صورة 1)، تيترا من إنجيل بحيري، حوالي سنة 1178-1180 م.، زخرفة على الرق، الارتفاع: 38.5 سم.؛ العرض: 27.5 سم.، المكتبة الوطنية الفرنسية.",
        "title": "",
        "caption": "St-Takla.org Image: Saint Pope Mark III of Alexandria: Pope Mark Ibn Zaraa (image 1), Bohairic Evangelical Tetra, circa 1178-1180, illumination on parchment, height: 38.5 cm (15.1 in); width: 27.5 cm (10.8 in), Bibliothèque nationale de France, Copte 13 f1v."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثاني عشر",
    "index": 74,
    "name": "البابا يوأنس السادس",
    "years": "1189 - 1216 م.",
    "durationYears": "26",
    "durationMonths": "11",
    "durationDays": "8",
    "link": "Life-of-Coptic-Pope-074-Pope-John-VI_.html",
    "moreInfo": {
      "birthPlace": ": \nمصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمصر",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحنا أبو المجد",
          "links": []
        },
        {
          "text": "من أبناء دير: \n- (عِلماني)",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n14 أمشير؟ 905 للشهداء - 29 يناير 1189 \n للميلاد",
          "links": [
            {
              "text": "14 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/14-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n11 طوبه 932 للشهداء - 7 يناير 1216 \n للميلاد",
          "links": [
            {
              "text": "11 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/11-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n26 سنة و11 شهرا و8 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n19 سنة و5 أشهر و10 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \nكنيسة الدرج تحت قبر البابا زخارياس",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nصلاح الدين الأيوبي - الملك العزيز - المنصور - العادل الأول - الكامل",
          "links": [
            {
              "text": "صلاح الدين الأيوبي",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__17-Al-Dawla-Al-Aioubia.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n26 سنة و11 شهرا و8 أيام",
      "interregnumDuration": ": \n19 سنة و5 أشهر و10 أيام",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John VI of Alexandria",
      "greek": "Πάπας Ιωάννης ΣΤ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou ^",
      "amharic": "አባ ዮሐንስ 6ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-074.jpg",
        "alt": "St-Takla.org Image: Pope John VI - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (74) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس السادس - بابا الإسكندرية وبطريرك الكرازة المرقسية (74) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope John VI - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (74) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-074.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis VI, Coptic Orthodox Pope #74 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس السادس البطريرك الرابع والسبعون من بطاركة الكرازة المرقسية: 74. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis VI, Coptic Orthodox Pope #74 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث عشر",
    "index": 75,
    "name": "البابا\n  كيرلس الثالث",
    "years": "1235 - 1243 م.",
    "durationYears": "7",
    "durationMonths": "8",
    "durationDays": "23",
    "link": "Life-of-Coptic-Pope-075-Pope-Cyril-III_.html",
    "moreInfo": {
      "birthPlace": ": \nالفيوم",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالفيوم",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nداود الفيومي",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n23 بؤونه 951 للشهداء - 17 يونيو 1235 \n للميلاد",
          "links": [
            {
              "text": "23 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/23-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n14 برمهات 959 للشهداء - 10 مارس 1243 \n للميلاد",
          "links": [
            {
              "text": "14 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/14-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n7 سنوات و8 أشهر و23 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n7 سنوات و6 أشهر و28 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \nالشمع بالجيزة",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالملك الكامل - العادل الثاني - الصالح - المعظم",
          "links": []
        }
      ],
      "durationOnThrone": ": \n7 سنوات و8 أشهر و23 يومًا",
      "interregnumDuration": ": \n7 سنوات و6 أشهر و28 يومًا",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": "في مثل هذا اليوم من سنة 959 ش. الموافق 0 1 مارس 1243 \n تنيَّح الأب القديس الأنبا كيرلس الخامس والسبعون من \nباباوات الكرازة المرقسية، المعروف بابن لقلق. وقد رسم هذا الأب في \nالثالث والعشرين من \n شهر بؤونة سنة 951 للشهداء (17 يونية 1235 م.). وحصلت معارضات في \n اختياره أولًا، وأخيرا انتهى الإجماع عليه. وفي أيام هذا الأب اجتمع \n مجمع من سائر أساقفة الكرازة المرقسية ووضعوا قانونا شاملا للكنيسة. \n وكان الشيخ الأجل العلامة الصفي ابن العسال كاتبا لهذا المجمع. وأقام \n هذا الأب على الكرسي البطريركي سبع سنين وثمانية أشهر وثلاثة وعشرين يوما \n . وتنيَّح بدير الشمع في سنة 959 للشهداء. (10 مارس 1243 م.). صلاته \n تكون معنا. آمين"
    },
    "names": {
      "english": "Pope Cyril III of Alexandria / Pope Cyril ibn Laqlaq",
      "greek": "Πάπας Κύριλλος Γ΄",
      "coptic": "pi`agioc Kurilloc أو \nPapa Kurillou =g",
      "amharic": "አባ ቄርሎስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-075.jpg",
        "alt": "St-Takla.org Image: St. Cyril III - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of St. Mark (75) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا كيرلس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (75) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cyril III - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (75) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-075.jpg",
        "alt": "St-Takla.org Image: Pope Cyril III, Coptic Orthodox Pope #75, with a coins purse in his hands, due to his love of money: Simony. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا كيرلس الثالث البطريرك الخامس والسبعون من بطاركة الكرازة المرقسية: 75، ويظهر بيده صرة من العملات، لمحبته في المال: السيمونية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Cyril III, Coptic Orthodox Pope #75, with a coins purse in his hands, due to his love of money: Simony. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث عشر",
    "index": 76,
    "name": "البابا \nأثناسيوس الثالث",
    "years": "1250 - 1261 م.",
    "durationYears": "11",
    "durationMonths": "1",
    "durationDays": "18",
    "link": "Life-of-Coptic-Pope-076-Pope-Athanasius-III_.html",
    "moreInfo": {
      "birthPlace": ": \nمصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمصر",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبولس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n12 بابه 967 للشهداء - 9 أكتوبر 1250 \n للميلاد",
          "links": [
            {
              "text": "12 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/12-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\nأول كيهك 978 للشهداء - 27 نوفمبر 1261 \nللميلاد",
          "links": [
            {
              "text": "أول كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/01-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n11 سنة وشهرًا واحدًا و18 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و5 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة مرقوريوس أبو سيفين",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مرقوريوس أبو سيفين",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nشجرة الدر - موسى الأشرف - الملك المعز \nعز الدين أيبك - الجاسنليز التركماني - المنصور - المظفر - الملك الظاهر بيبرس",
          "links": []
        }
      ],
      "durationOnThrone": ": \n11 سنة وشهرًا واحدًا و18 يومًا",
      "interregnumDuration": ": \nشهرًا واحدًا و5 أيام",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Athanasius III of Alexandria",
      "greek": "Πάπας Αθανάσιος Γ΄",
      "coptic": "Papa `A;anaciou =g",
      "amharic": "አባ አትናቴዎስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-076.jpg",
        "alt": "St-Takla.org Image: Pope Athanasius III - Pope Athanasios - Pope of Alexandria and Patriarch of the See of St. Mark (76) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا أثناسيوس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (76) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Athanasius III - Pope Athanasios - Pope of Alexandria and Patriarch of the \nSee of St. Mark (76) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-076.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Athanasius III, Coptic Orthodox Pope #76 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا أثناسيوس الثالث البطريرك السادس والسبعون من بطاركة الكرازة المرقسية: 76. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Athanasius III, Coptic Orthodox Pope #76 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث عشر",
    "index": 77,
    "name": "البابا غبريال الثالث",
    "years": "1268 - 1271 م.",
    "durationYears": "2",
    "durationMonths": "2",
    "durationDays": "10",
    "link": "Life-of-Coptic-Pope-077-Pope-Gabriel-III_.html",
    "moreInfo": {
      "birthPlace": ": \nقبطي استوطن في الشام",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nقبطي استوطن في الشام",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nالراهب \nغبريال\n ابن فخر الكفاءة",
          "links": [
            {
              "text": "الراهب \nغبريال",
              "href": null
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n24 بابه 985 للشهداء - 21 أكتوبر 1268 \n للميلاد",
          "links": [
            {
              "text": "24 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/24-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n6 طوبه 987 للشهداء - أول يناير 1271 \n للميلاد",
          "links": [
            {
              "text": "6 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/06-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنتان وشهران و10 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nمرقوريوس أبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "مرقوريوس أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالملك الظاهر بيبرس",
          "links": []
        }
      ],
      "durationOnThrone": ": \nسنتان وشهران و10 أيام",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Gabriel III of Alexandria",
      "greek": "Πάπας Γαβριήλ Γ΄",
      "coptic": "Papa Gabiyl =g",
      "amharic": "አባ ገብርኤል 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-077.jpg",
        "alt": "St-Takla.org Image: St. Gabriel III - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (77) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (77) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Gabriel III - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (77) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-077.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel III, Coptic Orthodox Pope #77, and with him the 78th Patriarch who was ordained at the same time! - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال الثالث البطريرك السابع والسبعون من بطاركة الكرازة المرقسية: 77، ويظهر معه البطريرك 78 الذي سيم في نفس عصره. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel III, Coptic Orthodox Pope #77, and with him the 78th Patriarch who was ordained at the same time! - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث عشر",
    "index": 78,
    "name": "البابا يوأنس السابع",
    "years": "1271 - 1293 م.",
    "durationYears": "29",
    "durationMonths": "1",
    "durationDays": "8",
    "link": "Life-of-Coptic-Pope-078-Pope-John-VII_.html",
    "moreInfo": {
      "birthPlace": ": \nمصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمصر",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحنا",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة الأولى: \n\n6 طوبه 978 للشهداء - 1 يناير 1262 للميلاد",
          "links": [
            {
              "text": "6 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/06-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n العزل: \n\n24 \nبابه 985 للشهداء - 20 أكتوبر 1268 للميلاد (21؟)",
          "links": [
            {
              "text": "24 \nبابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/24-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة الثانية: \n\n7 طوبه 987 للشهداء - 2 يناير 1271 \n للميلاد",
          "links": [
            {
              "text": "7 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/07-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n26 برموده 1009 للشهداء - 21 أبريل 1293 \n للميلاد",
          "links": [
            {
              "text": "26 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/26-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n29 سنة وشهرًا واحدًا و8 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة وشهران و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمعلقة بمصر",
          "links": [
            {
              "text": "المعلقة بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-mary-church-el-maalaka.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \nدير النسطور بالبساتين",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالملك الظاهر - نصر الدين - العادل \n - السلطان قلاوون -\nالأشرف خليل \n- الملك الناصر",
          "links": [
            {
              "text": "الأشرف خليل",
              "href": "../../Coptic-History/CopticHistory_04-Coptic-Church-from-the-10th-to-19th-Centuries/Coptic-Encyclopedia__Coptic-Church-History-10-20-Centuries__15-Al-Mamaleek-04-Al-Ashraf-Khalil-Ibn-Kalawoun.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n29 سنة وشهرًا واحدًا و8 أيام",
      "interregnumDuration": ": \nسنة واحدة وشهران و14 يومًا",
      "residence": ": \n\nالمعلقة بمصر",
      "synaxariumText": "في مثل هذا اليوم من سنة 1009 ش. (21 أبريل سنة 1293 \n م.) تنيَّح البابا يؤنس السابع البطريرك الثامن والسبعون. ومن أمره أنه \n بعد أن رشح أراخنة القاهرة البابا غبريال الثالث للبطريركية واختاروه \n ورسموه قمصًا، اتفق بعض أراخنة مصر علي يوأنس بن أبي سعيد السكري وعملوا \n قرعة هيكلية فسحب اسم غبريال، فنازعه يوأنس المذكور ومن كان معه فأبطل \n القرعة وقدم يوأنس في\n6 طوبة سنة 978 ش. (أول يناير سنة 1262 م.) بعد \n وفاة البابا (أثناسيوس الثالث) سلفه وأقام بطريركًا ست سنين وتسعة شهور \n وتسعة عشر يومًا ثم عزل وتولي مكانه \nالبابا غبريال الثالث من \n24 بابه سنة \n 985 ش. إلى \n6 طوبه سنة 987 ش. ثم عزل غبريال وأعيد يوأنس بأمر السلطان في \n7 \n طوبه."
    },
    "names": {
      "english": "Pope John VIII of Alexandria",
      "greek": "Πάπας Ιωάννης Ζ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =z",
      "amharic": "አባ ዮሐንስ 7ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-078.jpg",
        "alt": "St-Takla.org Image: St. John VII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (78) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس السابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (78) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John VII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (78) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-078.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis VII, Coptic Orthodox Pope #78, and with him appears the 77th Patriarch who was ordained at the same time! - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس السابع البطريرك الثامن والسبعون من بطاركة الكرازة المرقسية: 78، ويظهر معه البطريرك 77 الذي سيم في نفس عصره. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis VII, Coptic Orthodox Pope #78, and with him appears the 77th Patriarch who was ordained at the same time! - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثالث عشر",
    "index": 79,
    "name": "البابا \nثيؤدوسيوس الثاني",
    "years": "1294 - 1300م.",
    "durationYears": "5",
    "durationMonths": "5",
    "durationDays": "28",
    "link": "Life-of-Coptic-Pope-079-Pope-Theodosius-II_.html",
    "moreInfo": {
      "birthPlace": ": \nالمني",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالمني",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nعبد المسيح بن رويل (ابن زويل) / عبد المسيح بن \nأبي مكين الإفرنجي الشهير بابن روبل / الراهب ثيؤدوسيوس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو فانا",
          "links": [
            {
              "text": "دير أبو فانا",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/abo-fana-mallawy/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n10 أبيب 1010 للشهداء - 4 يوليو 1294 \n للميلاد",
          "links": [
            {
              "text": "10 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/10-Abeeb.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n5 طوبه 1016 للشهداء - أول يناير 1300 \n للميلاد",
          "links": [
            {
              "text": "5 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/05-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n5 سنوات و5 أشهر و28 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nالمعلقة وأبو مرقوره",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nدير النسطور - البساتين",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالعادل - المنصور - \nالناصر محمد بن قلاوون",
          "links": [
            {
              "text": "الناصر محمد بن قلاوون",
              "href": "../../Coptic-History/CopticHistory_04-Coptic-Church-from-the-10th-to-19th-Centuries/Coptic-Encyclopedia__Coptic-Church-History-10-20-Centuries__11-Al-Malek-El-Nasser-Kalawoun.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n5 سنوات و5 أشهر و28 يومًا",
      "interregnumDuration": ": \nشهرًا واحدًا و14 يومًا",
      "residence": ": \nالمعلقة وأبو مرقوره",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Theodosios II of Alexandria",
      "greek": "Πάπας Θεοδόσιος Β΄",
      "coptic": "pi`agioc Qe`odocioc أو \nPapa :e`odociou =b",
      "amharic": "አባ ቴዎዶሲዮስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-079.jpg",
        "alt": "St-Takla.org Image: Pope Theodosius II - Pope Theodosios - Pope of Alexandria and Patriarch of the See of St. Mark (79) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ثيؤدوسيوس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (79) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Theodosius II - Pope Theodosios - Pope of Alexandria and Patriarch of the \nSee of St. Mark (79) - Arabic, Coptic and English name - Designed by Michael \nGhaly for St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-079.jpg",
        "alt": "St-Takla.org Image: Pope Theodosius II, Coptic Orthodox Pope #79, with a coins purse in his hands, due to his love of money: Simony. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا ثيؤدوسيوس الثاني البطريرك التاسع والسبعون من بطاركة الكرازة المرقسية: 79، ويظهر بيده صرة من العملات، لمحبته في المال: السيمونية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Theodosius II, Coptic Orthodox Pope #79, with a coins purse in his hands, due to his love of money: Simony. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 80,
    "name": "البابا يوأنس الثامن",
    "years": "1300 - 1320 م.",
    "durationYears": "20",
    "durationMonths": "3",
    "durationDays": "15",
    "link": "Life-of-Coptic-Pope-080-Pope-John-VIII_.html",
    "moreInfo": {
      "birthPlace": ": \nمنيه بني خصيم (المنيا)",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمنيه بني خصيم (المنيا)",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحنا ابن ابسال بنيامين",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير شهران",
          "links": [
            {
              "text": "دير شهران",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-barsoum-maasara/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n19 أمشير 1016 للشهداء - 14 فبراير 1300 \n للميلاد",
          "links": [
            {
              "text": "19 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/19-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n4 بؤونه 1036 للشهداء - 29 مايو 1320 \n للميلاد",
          "links": [
            {
              "text": "4 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/04-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n20 سنة و3 أشهر و15 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n4 أشهر",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nمرقوريوس أبو سيفين والعذراء بحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير شهران",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير شهران",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-barsoum-maasara/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nالملك الناصر محمد بن قلاوون",
          "links": [
            {
              "text": "الملك الناصر محمد بن قلاوون",
              "href": "../../Coptic-History/CopticHistory_04-Coptic-Church-from-the-10th-to-19th-Centuries/Coptic-Encyclopedia__Coptic-Church-History-10-20-Centuries__11-Al-Malek-El-Nasser-Kalawoun.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n20 سنة و3 أشهر و15 يومًا",
      "interregnumDuration": ": \n4 أشهر",
      "residence": ": \nمرقوريوس أبو سيفين والعذراء بحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John VIII of Alexandria / ibn Qiddis",
      "greek": "Πάπας Ιωάννης Η΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =y",
      "amharic": "አባ ዮሐንስ 8ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-080.jpg",
        "alt": "St-Takla.org Image: St. John VIII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (80) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الثامن - بابا الإسكندرية وبطريرك الكرازة المرقسية (80) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John VIII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (80) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-080.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis VIII, Coptic Orthodox Pope #80 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الثامن البطريرك الثمانون من بطاركة الكرازة المرقسية: 80. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis VIII, Coptic Orthodox Pope #80 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 81,
    "name": "البابا يوأنس التاسع",
    "years": "1320 - 1327 م.",
    "durationYears": "6",
    "durationMonths": "6",
    "durationDays": "1",
    "link": "Life-of-Coptic-Pope-081-Pope-John-IX_.html",
    "moreInfo": {
      "birthPlace": ": \nناحية نفيا منوفية",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nناحية نفيا منوفية",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبونا الراهب يوأنس النقادي",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول بابة 1037 للشهداء - 28 سبتمبر 1320 \n للميلاد",
          "links": [
            {
              "text": "أول بابة",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/01-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n2 برموده 1043 للشهداء - 29 مارس 1327 \n للميلاد",
          "links": [
            {
              "text": "2 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/02-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 سنوات و6 أشهر ويومًا واحدًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و11 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زؤيلة (زويلة)",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nدير النسطور",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nمحمد بن قلاوون",
          "links": [
            {
              "text": "محمد بن قلاوون",
              "href": "../../Coptic-History/CopticHistory_04-Coptic-Church-from-the-10th-to-19th-Centuries/Coptic-Encyclopedia__Coptic-Church-History-10-20-Centuries__11-Al-Malek-El-Nasser-Kalawoun.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n6 سنوات و6 أشهر ويومًا واحدًا",
      "interregnumDuration": ": \nشهرًا واحدًا و11 يومًا",
      "residence": ": \nحارة زؤيلة (زويلة)",
      "synaxariumText": "في مثل هذا اليوم سنة 1043 ش. 29 مارس سنة 1327 م. تنيَّح \n البابا يوأنس التاسع البطريرك (81) وهو من ناحية نفيا منوفية ويعرف \n بيوأنس النقادي أحد الأخوين. وفي أيامه جرت شدائد كثيرة علي النصارى \n فمنهم من قتل ومن حرق ومن صلب وشهروا بهم علي الجمال وألبسوهم العمائم \n والثياب الزرقاء، ثم تحنن الله علي الشعب برحمته. وتنيَّح البابا بحارة \n زويلة ودفن بدير النسطور بعد أن قام علي الكرسي ست سنين وستة شهور ويما \n واحدا لأنه تولي الكرسي في \nيوم أول بابه سنة 1037 ش. (28 سبتمبر سنة 1321 \n م.) صلاته تكون معنا. ولربنا المجد دائمًا. آمين."
    },
    "names": {
      "english": "Pope John IX of Alexandria",
      "greek": "Πάπας Ιωάννης Θ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =;",
      "amharic": "አባ ዮሐንስ 9ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-081.jpg",
        "alt": "St-Takla.org Image: St. John IX - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (81) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس التاسع - بابا الإسكندرية وبطريرك الكرازة المرقسية (81) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John IX - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (81) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-081.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis IX, Coptic Orthodox Pope #81 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس التاسع البطريرك الحادي والثمانون من بطاركة الكرازة المرقسية: 81. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis IX, Coptic Orthodox Pope #81 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 82,
    "name": "البابا بنيامين الثاني",
    "years": "1327 - 1339 م.",
    "durationYears": "11",
    "durationMonths": "7",
    "durationDays": "26",
    "link": "Life-of-Coptic-Pope-082-Pope-Benjamin-II_.html",
    "moreInfo": {
      "birthPlace": ": \nالدميقراط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالدميقراط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nبنيامين",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n15 بشنس 1043 للشهداء - 10 مارس 1327 \n للميلاد",
          "links": [
            {
              "text": "15 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/15-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n11 طوبه 1055 للشهداء - 6 يناير 1339 \n للميلاد",
          "links": [
            {
              "text": "11 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/11-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n11 سنة و7 أشهر و26 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n11 شهرًا و26 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير شهران \n/\n\nدير أنبا بيشوي",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير شهران",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-barsoum-maasara/index.html"
            },
            {
              "text": "دير أنبا بيشوي",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-bishoy/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nمحمد بن قلاون",
          "links": [
            {
              "text": "محمد بن قلاون",
              "href": "../../Coptic-History/CopticHistory_04-Coptic-Church-from-the-10th-to-19th-Centuries/Coptic-Encyclopedia__Coptic-Church-History-10-20-Centuries__11-Al-Malek-El-Nasser-Kalawoun.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n11 سنة و7 أشهر و26 يومًا",
      "interregnumDuration": ": \n11 شهرًا و26 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Benjamin II of Alexandria",
      "greek": "Πάπας Βενιαμίν Β΄",
      "coptic": "Papa Beniamin =b",
      "amharic": "አባ ቤኒያሚን 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-082.jpg",
        "alt": "St-Takla.org Image: Pope Benjamin II - Pope Binyamin - Pope of Alexandria and Patriarch of the See of St. Mark (82) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا بنيامين الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (82) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Benjamin II - Pope Binyamin - Pope of Alexandria and Patriarch of the See \nof St. Mark (82) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-082.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Benjamin II, Coptic Orthodox Pope #82, and next to him the icon of Saint Parsoma the Naked, who predicted that he would sit on the See of Mark. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بنيامين الثاني البطريرك الثاني والثمانون من بطاركة الكرازة المرقسية: 82، ويظهر بجانبه أيقونة القديس أنبا برسوم العريان الذي تنبأ بجلوسه على الكرسي المرقسي . - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Benjamin II, Coptic Orthodox Pope #82, and next to him the icon of Saint Parsoma the Naked, who predicted that he would sit on the See of Mark. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 83,
    "name": "البابا بطرس الخامس",
    "years": "1340 - 1348 م.",
    "durationYears": "8",
    "durationMonths": "6",
    "durationDays": "6",
    "link": "Life-of-Coptic-Pope-083-Pope-Peter-V_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل \n البطريركية: بطرس ابن داود",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nأبو مقار",
          "links": [
            {
              "text": "أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n6 طوبه؟ 1056 للشهداء - 2 يناير 1340 \n للميلاد (1349؟)",
          "links": [
            {
              "text": "6 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/06-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n14 أبيب 1064 للشهداء - 8 يوليو 1348 \n للميلاد (1663؟)",
          "links": [
            {
              "text": "14 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/14-Abeeb.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n8 سنوات و6 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و27 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nدير الحبش بمصر القديمة",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nمحمد بن قلاوون - أبو بكر المنصور - علاء \n الدين الأشرف - أحمد الناصر - إسماعيل الصالح - شعبان الكامل - ابن نثر المظفر \n- السلطان حسن",
          "links": [
            {
              "text": "محمد بن قلاوون",
              "href": "../../Coptic-History/CopticHistory_04-Coptic-Church-from-the-10th-to-19th-Centuries/Coptic-Encyclopedia__Coptic-Church-History-10-20-Centuries__11-Al-Malek-El-Nasser-Kalawoun.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n8 سنوات و6 أشهر و6 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و27 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Peter V of Alexandria",
      "greek": "Πάπας Πέτρος Ε΄",
      "coptic": "Papa Petrou =e",
      "amharic": "አባ ጴጥሮስ 5ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-083.jpg",
        "alt": "St-Takla.org Image: St. Peter V - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (83) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا بطرس الخامس - بابا الإسكندرية وبطريرك الكرازة المرقسية (83) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter V - Pope Petros - Pope of Alexandria and Patriarch of the See of St. \nMark (83) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-083.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter V, Coptic Orthodox Pope #83 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بطرس الخامس البطريرك الثالث والثمانون من بطاركة الكرازة المرقسية: 83. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Peter V, Coptic Orthodox Pope #83 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 84,
    "name": "البابا مرقس الرابع",
    "years": "1348 - 1363 م.",
    "durationYears": "14",
    "durationMonths": "4",
    "durationDays": "26",
    "link": "Life-of-Coptic-Pope-084-Pope-Mark-IV_.html",
    "moreInfo": {
      "birthPlace": ": \nقليوب",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nقليوب",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": []
        },
        {
          "text": "قبل الرهبنة: الأسعد فرج الله ابن القس \nالأكرم",
          "links": []
        },
        {
          "text": "أبونا الراهب القس غبريال",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير شهران",
          "links": [
            {
              "text": "دير شهران",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-barsoum-maasara/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n8 توت 1065 للشهداء - 5 سبتمبر 1348 \n للميلاد(3)",
          "links": [
            {
              "text": "8 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/08-Toot.html"
            },
            {
              "text": "(3)",
              "href": "#(3)"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n6 أمشير 1079 للشهداء - 31 يناير 1363 \n للميلاد",
          "links": [
            {
              "text": "6 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/06-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة و4 أشهر و26 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير شهران",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير شهران",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-barsoum-maasara/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالسلطان حسن (الناصر بدر الدين حسن) - الصالح \nحسن بن ناصر الناصر \n- محمد المنصور",
          "links": []
        }
      ],
      "durationOnThrone": ": \n14 سنة و4 أشهر و26 يومًا",
      "interregnumDuration": ": \n3 أشهر و6 أيام",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mark IV of Alexandria",
      "greek": "Πάπας Μάρκος Δ΄",
      "coptic": "Papa Markou =d",
      "amharic": "አባ ማርቆስ 4ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-084.jpg",
        "alt": "St-Takla.org Image: Pope Mark IV - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (84) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقس الرابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (84) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Mark IV - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (84) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-084.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mark IV, Coptic Orthodox Pope #84 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مرقس الرابع البطريرك الرابع والثمانون من بطاركة الكرازة المرقسية: 84. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mark IV, Coptic Orthodox Pope #84 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 85,
    "name": "البابا يوأنس العاشر",
    "years": "1363 - 1369 م.",
    "durationYears": "6",
    "durationMonths": "2",
    "durationDays": "7",
    "link": "Life-of-Coptic-Pope-085-Pope-John-X_.html",
    "moreInfo": {
      "birthPlace": ": \nدمشق الشام",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nدمشق الشام",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوحن",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n12 بشنس 1079 للشهداء - 7 مايو 1363 \n للميلاد",
          "links": [
            {
              "text": "12 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/12-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n19 أبيب 1085 للشهداء - 13 يوليو 1369 \n للميلاد",
          "links": [
            {
              "text": "19 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/19-Abeeb.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 سنوات وشهران و7 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n5 أشهر و23 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \nالحبش بجوار سمعان الخراز",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالسلطان شعبان - حسن الأشرف",
          "links": []
        }
      ],
      "durationOnThrone": ": \n6 سنوات وشهران و7 أيام",
      "interregnumDuration": ": \n5 أشهر و23 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John X of Alexandria / Abba Yoannis X",
      "greek": "Πάπας Ιωάννης Ι΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i",
      "amharic": "አባ ዮሐንስ 10ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-085.jpg",
        "alt": "St-Takla.org Image: St. John X - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (85) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس العاشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (85) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John X - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (85) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-085.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis X, Coptic Orthodox Pope #85 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس العاشر البطريرك الخامس والثمانون من بطاركة الكرازة المرقسية: 85. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis X, Coptic Orthodox Pope #85 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 86,
    "name": "البابا غبريال الرابع",
    "years": "1370 - 1378 م.",
    "durationYears": "8",
    "durationMonths": "3",
    "durationDays": "22",
    "link": "Life-of-Coptic-Pope-086-Pope-Gabriel-IV_.html",
    "moreInfo": {
      "durationOnThrone": ": \n8 سنوات و3 أشهر و22 يومًا",
      "interregnumDuration": ": \nشهران و27 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": "في مثل هذا اليوم من سنة 1094 ش. (أبريل سنة 1378 م.) \n تنيَّح البابا غبريال الرابع البطريرك (86) وكان \nرئيسًا لدير المحرق وتولي \n الكرسي في \n11 طوبه سنة 1086 ش. (6 يناير سنة 1370 م.) وكان عالمًا فاضلًا \n وعابدا ناسكا. وحدث في أيامه في سنة 1370 م. ظهور نور عظيم أضاء الطرق \n ليلا إلى الثلث الأخير من الليل وقارب ضوء النهار وفي سنة 1371 م. فاض \n النيل فيضانًا كبيرًا كاد يغرق البلاد وعاصر السلطان شعبان والسلطان علي بن \n شعبان المنصور. وجلس علي الكرسي 8 سنوات وثلاثة أشهر واثنين وعشرين يومًا \n ودفن بالحبش بجوار سمعان الخراز."
    },
    "names": {
      "english": "Pope Gabriel IV of Alexandria",
      "greek": "Πάπας Γαβριήλ Δ΄",
      "coptic": "Papa Gabriyl =d",
      "amharic": "አባ ገብርኤል 4ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-086.jpg",
        "alt": "St-Takla.org Image: St. Gabriel IV - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (86) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال الرابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (86) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Gabriel IV - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (86) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-086.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel IV, Coptic Orthodox Pope #86 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال الرابع البطريرك السادس والثمانون من بطاركة الكرازة المرقسية: 86. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel IV, Coptic Orthodox Pope #86 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الرابع عشر",
    "index": 87,
    "name": "البابا متاؤس الأول",
    "years": "1378 - 1408 م.",
    "durationYears": "30",
    "durationMonths": "5",
    "durationDays": "6",
    "link": "Life-of-Coptic-Pope-087-Pope-Matthew-I_.html",
    "moreInfo": {
      "birthPlace": ": \nبني روح - الأشمونين",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nبني روح - الأشمونين",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبونا الراهب القس متى الفاني (الراهب متى المسكين)",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "من أبناء دير:",
          "links": []
        },
        {
          "text": "دير أبو فانا",
          "links": [
            {
              "text": "دير أبو فانا",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/abo-fana-mallawy/index.html"
            }
          ]
        },
        {
          "text": "ثم انتقل إلى \nدير المحرق",
          "links": [
            {
              "text": "دير المحرق",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-muharraq/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\nأول \nمسرى 1094 للشهداء - 25 يوليو 1378 \n للميلاد",
          "links": [
            {
              "text": "أول \nمسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/01-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n5 طوبه 1125 للشهداء - 31 ديسمبر 1408 \n للميلاد (1409؟)",
          "links": [
            {
              "text": "5 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/05-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n30 سنة و5 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و20 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nالأنبا رويس بالخندق",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "الأنبا رويس بالخندق",
              "href": "../../Coptic-History/places/africa/egypt/cairo/hadayek-el-kobba--waily--abbasia/cathedral/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nعلي شعبان المنصور - جاجى بن شعبان الصالح \n- السلطان برقوق - فرج بن برقوق الناصر - عبد العزيز بن المنصور",
          "links": []
        }
      ],
      "durationOnThrone": ": \n30 سنة و5 أشهر و6 أيام",
      "interregnumDuration": ": \n3 أشهر و20 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Matthew I of Alexandria / Pope Matheos I",
      "greek": "Πάπας Ματθαίος Α΄",
      "coptic": "Papa Mat;eou =a",
      "amharic": "አባ ማቴዎስ 1ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-087.jpg",
        "alt": "St-Takla.org Image: Pope Matthew - Pope Matheos - Pope of Alexandria and Patriarch of the See of St. Mark (87) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا متاؤس الأول - بابا الإسكندرية وبطريرك الكرازة المرقسية (87) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Matthew - Pope Matheos - Pope of Alexandria and Patriarch of the See of St. \nMark (87) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-087.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mettaous I (Matthew), Coptic Orthodox Pope #87, and below is a picture of the hyena whose cub he saved. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا متاؤس الأول البطريرك السابع والثمانون من بطاركة الكرازة المرقسية: 87، وبأسفل صورة الضبعة التي أنقذ صغيرتها. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mettaous I (Matthew), Coptic Orthodox Pope #87, and below is a picture of the hyena whose cub he saved. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/abbaseya/reweis/www-St-Takla-org--abbasiya-cathedral-106.jpg",
        "alt": "St-Takla.org Image: A marble tombstone on the tomb of the Holy Coptic Patriarchs: HH Pope Metawos I (87) (1094-1125 m.) - HH Pope John XI (89) (1143-1168 m.) - HH Pope Methawos II (90) (1169-1182 m.) - HH Pope Gabriel VI (91) (1182-1191 m.) - Inscribed also: This Church was renewed at the time of HH Pope Yousab II (115) on 1665 m./1949, by Nahdet El-Kanaes Al-Markazeya Association (Progress of Churches Central Assoc.) in Egypt - from St. Reweiss Church, Abbassia, Cairo, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: لوحة رخامية في مقبرة الآباء البطاركة الأقباط: البابا متاؤس الأول 87 (1094-1125ش.) - البابا يؤانس الحادي عشر 89 (1143-1168 ش.) - البابا متاؤس الثاني 90 (1169-1182 ش) - البابا غبريال السادس 91 (1182-1191 ش.) - ومكتوب أيضًا: تجددت هذه البيعة المقدسة في عهد البابا يوساب الثاني البطريرك 115 سنة 1665 ش. - 1949 م. بمعرفة جمعية نهضة الكنائس المركزية بمصر - من صور كنيسة الأنبا رويس، بالكاتدرائية بالعباسية، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nA marble tombstone on the tomb of the Holy Coptic Patriarchs: HH Pope Metawos I \n(87) (1094-1125 m.) - HH Pope John XI (89) (1143-1168 m.) - HH Pope Methawos II \n(90) (1169-1182 m.) - HH Pope Gabriel VI (91) (1182-1191 m.) - Inscribed also: \nThis Church was renewed at the time of HH Pope Yousab II (115) on 1665 m./1949, \nby Nahdet El-Kanaes Al-Markazeya Association (Progress of Churches Central \nAssoc.) in Egypt - from St. Reweiss Church, Abbassia, Cairo, Egypt - October  2011 - Photograph by Michael Ghaly for St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس عشر",
    "index": 88,
    "name": "البابا غبريال الخامس",
    "years": "1409 - 1427 م.",
    "durationYears": "17",
    "durationMonths": "8",
    "durationDays": "12",
    "link": "Life-of-Coptic-Pope-088-Pope-Gabriel-V_.html",
    "moreInfo": {
      "birthPlace": ": \nالجيزة",
      "durationOnThrone": ": \n17 سنة و8 أشهر و12 يومًا",
      "interregnumDuration": ": \n4 أشهر و8 أيام",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Gabriel V of Alexandria",
      "greek": "Πάπας Γαβριήλ Ε΄",
      "coptic": "Papa Gabriyl =e",
      "amharic": "አባ ገብርኤል 5ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-088.jpg",
        "alt": "St-Takla.org Image: Pope Gabriel V - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (88) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال الخامس - بابا الإسكندرية وبطريرك الكرازة المرقسية (88) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Gabriel V - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (88) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-088.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel V, Coptic Orthodox Pope #88, and next to him is a tambourine and a triangle as a symbol of his having provided the people with many writings on church rituals. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال الخامس البطريرك الثامن والثمانون من بطاركة الكرازة المرقسية: 88، وبجانبه دف وتريانتو كرمز لقيامه بزويد الشعب بكتابات كثيرة في الطقوس الكنسية. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel V, Coptic Orthodox Pope #88, and next to him is a tambourine and a triangle as a symbol of his having provided the people with many writings on church rituals. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس عشر",
    "index": 89,
    "name": "البابا يوأنس الحادي عشر",
    "years": "1427 - 1452 م.",
    "durationYears": "24",
    "durationMonths": "11",
    "durationDays": "23",
    "link": "Life-of-Coptic-Pope-089-Pope-John-XI_.html",
    "moreInfo": {
      "birthPlace": ": \nالمقسم بمصر أو المقسى",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالمقسم بمصر أو المقسى",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": []
        },
        {
          "text": "فرج (أبو الفرج)",
          "links": []
        },
        {
          "text": "القس الأسعد أبي الفرج، كاهن كنيسة القديس مرقوريوس أبي \nالسيفين",
          "links": []
        },
        {
          "text": "تاريخ \n التقدمة: \n\n16 بشنس 1143 للشهداء - 11 مايو 1427 \n للميلاد",
          "links": [
            {
              "text": "16 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/16-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n9 بشنس 1168 للشهداء - 4 مايو 1452 \n للميلاد",
          "links": [
            {
              "text": "9 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/09-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n24 سنة و11 شهرًا و23 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n4 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير الخندق",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير الخندق",
              "href": "../../Coptic-History/places/africa/egypt/cairo/hadayek-el-kobba--waily--abbasia/cathedral/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالأشرف يوسف جمال الدين العزيز - أبو سعيد الظاهر \n- عثمان فخر",
          "links": []
        }
      ],
      "durationOnThrone": ": \n24 سنة و11 شهرًا و23 يومًا",
      "interregnumDuration": ": \n4 أشهر و6 أيام",
      "residence": ": \nحارة زويلة",
      "synaxariumText": "في مثل هذا اليوم من سنة 1168 ش. (4 مايو سنة 1452) \n تنيَّح البابا يؤنس الحادي عشر البطريرك (89) ويعرف بيوأنس المقسي لأنه كان \n من المقسي بالقاهرة وكان اسمه فرج قبل اعتلائه الكرسي البطريركي وقد رسم \n بطريركًا في \n16 بشنس سنة 1143 ش. (11 مايو سنة 1427 م.) وجلس علي الكرسي \n مدة 24 سنة و11 شهرا و23 يوما. وكانت إقامته بقلاية بالبطريركية بحارة \n زويلة وتنيَّح ودفن في مقبرة دير الخندق. وخلا الكرسي بعده أربعة شهور \n وستة أيام وعاصر من الملوك الأشرف والعزيز والظاهر والمنصور وقد حلت به \n شدائد كثيرة دعت إلى توسط ملوك \nأثيوبيا وتهديد السلطنة المصرية بقطع \n مياه أو ماء النيل عنها بسبب اضطهاد النصارى وقد بودلت البعثات الحكومية بين أثيوبيا \n ومصر وقد منع من مراسلة الملوك بأثيوبيا والنوبة بدون اطلاع حكام الدولة \n صلاته تكون معنا. آمين."
    },
    "names": {
      "english": "Pope John XI of Alexandria",
      "greek": "Πάπας Ιωάννης ΙΑ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=a",
      "amharic": "አባ ዮሐንስ 11ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-089.jpg",
        "alt": "St-Takla.org Image: St. John XI - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (89) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الحادي عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (89) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John XI - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (89) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-089.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XI, Coptic Orthodox Pope #89 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الحادي عشر البطريرك التاسع والثمانون من بطاركة الكرازة المرقسية: 89. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XI, Coptic Orthodox Pope #89 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس عشر",
    "index": 90,
    "name": "البابا متاؤس الثاني",
    "years": "1452 - 1465 م.",
    "durationYears": "13",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-090-Pope-Matthew-II_.html",
    "moreInfo": {
      "nameBeforePapacy": [
        {
          "text": "الاسم قبل الرسامة: \nأبونا الراهب سليمان المحرقي (الراهب سليمان \nالصعيدي)",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \n\nدير المحرق",
          "links": [
            {
              "text": "دير المحرق",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-muharraq/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n13 توت 1169 للشهداء - 10 سبتمبر 1452 \n للميلاد (1453؟)",
          "links": [
            {
              "text": "13 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/13-Toot.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n13 توت 1182 للشهداء - 10 سبتمبر 1465 \n للميلاد (1466؟)",
          "links": [
            {
              "text": "13 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/13-Toot.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n13 سنة",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n4 أشهر و29 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير المحرق",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير المحرق",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-muharraq/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأنيال أبو نصر الأشرف - أحمد بن أنيال المؤيد \n- خشقادم سيف الدين الظاهر",
          "links": []
        }
      ],
      "durationOnThrone": ": \n13 سنة",
      "interregnumDuration": ": \n4 أشهر و29 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Matthew II / Pope Matthias II",
      "greek": "Πάπας Ματθαίος Β΄",
      "coptic": "Papa Mat;eou =b",
      "amharic": "አባ ማቴዎስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-090.jpg",
        "alt": "St-Takla.org Image: St. Matthew II - Pope Matheos - Pope of Alexandria and Patriarch of the See of St. Mark (90) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا متاؤس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (90) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Matthew II - Pope Matheos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (90) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-090.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mettaous II, Coptic Orthodox Pope #90 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا متاؤس الثاني البطريرك والتسعون من بطاركة الكرازة المرقسية: 90. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mettaous II, Coptic Orthodox Pope #90 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس عشر",
    "index": 91,
    "name": "البابا غبريال السادس",
    "years": "1466 - 1474 م.",
    "durationYears": "8",
    "durationMonths": "10",
    "durationDays": "6",
    "link": "Life-of-Coptic-Pope-091-Pope-Gabriel-VI_.html",
    "moreInfo": {
      "birthPlace": ": \nالعرابة",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالعرابة",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n15 أمشير؟ 1182 للشهداء - 9 فبراير 1466 \n للميلاد",
          "links": [
            {
              "text": "15 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/15-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n19 كيهك 1191 للشهداء - 15 ديسمبر 1474 \n للميلاد (1475؟)",
          "links": [
            {
              "text": "19 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/19-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n8 سنوات و10 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنتان وشهرًا واحدًا و22 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nدير الخندق",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير الخندق",
              "href": "../../Coptic-History/places/africa/egypt/cairo/hadayek-el-kobba--waily--abbasia/cathedral/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nخشقادم - ابن سعيد الظاهر - أبو سعيد الظاهر \n- قايتباي - أبو النصر الأشرف",
          "links": []
        }
      ],
      "durationOnThrone": ": \n8 سنوات و10 أشهر و6 أيام",
      "interregnumDuration": ": \nسنتان وشهرًا واحدًا و22 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Gabriel VI of Alexandria",
      "greek": "Πάπας Γαβριήλ ΣΤ΄",
      "coptic": "Papa Gabriyl ^",
      "amharic": "አባ ገብርኤል 6ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-091.jpg",
        "alt": "St-Takla.org Image: Pope Gabriel VI - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (91) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال السادس - بابا الإسكندرية وبطريرك الكرازة المرقسية (91) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Gabriel VI - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (91) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-091.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel VI, Coptic Orthodox Pope #91 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال السادس البطريرك الحادي والتسعون من بطاركة الكرازة المرقسية: 91. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel VI, Coptic Orthodox Pope #91 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الخامس عشر",
    "index": 92,
    "name": "البابا ميخائيل الرابع",
    "years": "1477 - 1478 م.",
    "durationYears": "1",
    "durationMonths": "",
    "durationDays": "3",
    "link": "Life-of-Coptic-Pope-092-Pope-Michael-IV----VI_.html",
    "moreInfo": {
      "birthPlace": ": \nسمالوط (أو سنباط؟)",
      "durationOnThrone": ": \nسنة واحدة و3 أيام (سنة و3 شهور؟)",
      "interregnumDuration": ": \nسنتان وشهران و8 أيام",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Michael VI of Alexandria",
      "greek": "Πάπας Μιχαήλ Δ΄",
      "coptic": "Papa Mi,ayl =d",
      "amharic": "አባ ሚካኤል 6ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-092.jpg",
        "alt": "St-Takla.org Image: Pope Michael IV - Pope Mikhail - Pope of Alexandria and Patriarch of the See of St. Mark (92) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ميخائيل الرابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (92) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Michael IV - Pope Mikhail - Pope of Alexandria and Patriarch of the See of \nSt. Mark (92) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-092.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Michael IV, Coptic Orthodox Pope #92 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا ميخائيل الرابع البطريرك الثاني والتسعون من بطاركة الكرازة المرقسية: 92. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Michael IV, Coptic Orthodox Pope #92 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس عشر",
    "index": 93,
    "name": "البابا يوأنس الثاني عشر",
    "years": "1480 - 1483 م.",
    "durationYears": "3",
    "durationMonths": "4",
    "durationDays": "17",
    "link": "Life-of-Coptic-Pope-093-Pope-John-XII_.html",
    "moreInfo": {
      "birthPlace": ": \n\n\nنقادة (نجادة)",
      "durationOnThrone": ": \n3 سنوات و4 أشهر و17 يومًا",
      "interregnumDuration": ": \n5 أشهر و5 أيام",
      "residence": ": \nحارة الدرج",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John XII of Alexandria",
      "greek": "Πάπας Ιωάννης ΙΒ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=b",
      "amharic": "አባ ዮሐንስ 12ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-093.jpg",
        "alt": "St-Takla.org Image: Pope John XII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (93) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الثاني عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (93) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope John XII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (93) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-093.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XII, Coptic Orthodox Pope #93 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الثاني عشر البطريرك الثالث والتسعون من بطاركة الكرازة المرقسية: 93. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XII, Coptic Orthodox Pope #93 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس عشر",
    "index": 94,
    "name": "البابا يوأنس الثالث عشر",
    "years": "1484 - 1524 م.",
    "durationYears": "39",
    "durationMonths": "11",
    "durationDays": "26",
    "link": "Life-of-Coptic-Pope-094-Pope-John-XIII_.html",
    "moreInfo": {
      "birthPlace": ": \nصدفا، مديرية أسيوط",
      "durationOnThrone": ": \n39 سنة و11 شهرا و26 يومًا",
      "interregnumDuration": ": \nسنة واحدة و7 أشهر و25 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John XIII of Alexandria",
      "greek": "Πάπας Ιωάννης ΙΓ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=g",
      "amharic": "አባ ዮሐንስ 13ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-094.jpg",
        "alt": "St-Takla.org Image: Pope John XIII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (94) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الثالث عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (94) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope John XIII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (94) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-094.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XIII, Coptic Orthodox Pope #94, and with him is the icon of the martyr Salib the New, who was martyred in his time. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الثالث عشر البطريرك الرابع والتسعون من بطاركة الكرازة المرقسية: 94، ومعه أيقونة الشهيد صليب الجديد الذي استشهد في عصره. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XIII, Coptic Orthodox Pope #94, and with him is the icon of the martyr Salib the New, who was martyred in his time. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس عشر",
    "index": 95,
    "name": "البابا غبريال السابع",
    "years": "1525 - 1568 م.",
    "durationYears": "43",
    "durationMonths": "",
    "durationDays": "25",
    "link": "Life-of-Coptic-Pope-095-Pope-Gabriel-VII_.html",
    "moreInfo": {
      "birthPlace": ": \nمنشأة المحرق المعروفة بأبو عايشة",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمنشأة المحرق المعروفة بأبو عايشة",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nرفائيل",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\n\nدير السريان",
          "links": [
            {
              "text": "دير السريان",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-sourian/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 بابه 1242 للشهداء - أول أكتوبر 1525 \n للميلاد",
          "links": [
            {
              "text": "4 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/04-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n10 أبيب (29 بابه؟) 1285 للشهداء - 26 أكتوبر 1568 \n للميلاد",
          "links": [
            {
              "text": "10 أبيب",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/11-Abeeb/10-Abeeb.html"
            },
            {
              "text": "29 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/29-Babah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n43 سنة و25 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنتان و5 أشهر و23 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة  \n\nمرقوريوس أبو سيفين",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            },
            {
              "text": "مرقوريوس أبو سيفين",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالسلطان سليمان القانوني (سليمان خان الأول بن \nسليم خان الأول) - السلطان سليم الثاني",
          "links": []
        }
      ],
      "durationOnThrone": ": \n43 سنة و25 يومًا",
      "interregnumDuration": ": \nسنتان و5 أشهر و23 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Gabriel VII of Alexandria",
      "greek": "Πάπας Γαβριήλ Ζ΄",
      "coptic": "Papa Gabiyl =z",
      "amharic": "አባ ገብርኤል 7ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-095.jpg",
        "alt": "St-Takla.org Image: St. Gabriel VII - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (95) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال السابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (95) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Gabriel VII - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of \nSt. Mark (95) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/095-pope-gabriel-vii/www-st-takla-org--pope-gabriel-vii-01.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel VII (Pope Ghabrial) - Pope of Alexandria and Patriarch of the See of St. Mark (95) - Art by Fr. Bemwa Al-Souriany, 2021 (used with permission), at the guesthouse, Al-Sourian Monastery, Wady El-Natroun, Egypt. صورة في موقع الأنبا تكلا: قداسة البابا غبريال السابع، بابا الإسكندرية وبطريرك الكرازة المرقسية (95) - تنفيذ الأب الراهب بموا السرياني (موضوعة بإذن)، توجد في قصر ضيافة دير السريان، وادي النطرون، مصر.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness \nPope Gabriel VII (Pope Ghabrial) - Pope of Alexandria and Patriarch \nof the See of St. Mark (95) - Art by Fr. Bemwa Al-Souriany, 2021 \n(used with permission), at the guesthouse, Al-Sourian Monastery, \nWady El-Natroun, Egypt."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس عشر",
    "index": 96,
    "name": "البابا يوأنس الرابع عشر",
    "years": "1571 - 1586 م.",
    "durationYears": "15",
    "durationMonths": "4",
    "durationDays": "19",
    "link": "Life-of-Coptic-Pope-096-Pope-John-XIV_.html",
    "moreInfo": {
      "birthPlace": ": \nمنفلوط",
      "durationOnThrone": ": \n15 سنة و4 أشهر و19 يومًا",
      "interregnumDuration": ": \n9 أشهر و14 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": "في مثل هذا اليوم من سنة 1302 ش. (6 سبتمبر 1586 م.) \n في أيام السلطان مراد الثالث العثماني تنيَّح البابا يؤنس الرابع عشر \n البطريرك الـ96. وهو من منفلوط ويعرف باسم يؤنس المنفلوطي تَرَهَّب \nبدير البراموس بوادي النطرون وكُرِّسَ بطريركًا في عهد السلطان سليم الثاني \n العثماني في\n22 برمودة سنة 1287 ش. (17 أبريل سنة 1571 م.) وفي أيامه لبس \n المسيحيون العمائم السوداء وقد وردت إليه رسالة من \nبابا رومية (جرجوار \n 13) ورد عليه الجواب. وقد طلب إليه السلطان سليم جمع الجزية من \n المسيحيين فلم يتخلف أحد منهم عن الدفع ثم توجه إلى الإسكندرية ولما عاد \n شعر بضعف ثم تنيَّح بها ودفن في بيعة مار جرجس ببرما ونقل جسده بعد ذلك إلى \n دير السريان وقد مكث علي الكرسي 15 سنة و4 أشهر و19 يومًا."
    },
    "names": {
      "english": "Pope John XIV of Alexandria",
      "greek": "Πάπας Ιωάννης ΙΔ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=d",
      "amharic": "አባ ዮሐንስ 14ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-096.jpg",
        "alt": "St-Takla.org Image: St. John XIV - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (96) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الرابع عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (96) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John XIV - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (96) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-096.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XIV, Coptic Orthodox Pope #96 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الرابع عشر البطريرك السادس والتسعون من بطاركة الكرازة المرقسية: 96. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XIV, Coptic Orthodox Pope #96 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السادس عشر",
    "index": 97,
    "name": "البابا غبريال الثامن",
    "years": "1587 - 1603 م.",
    "durationYears": "15",
    "durationMonths": "10",
    "durationDays": "24",
    "link": "Life-of-Coptic-Pope-097-Pope-Gabriel-VIII_.html",
    "moreInfo": {
      "birthPlace": ": \nالمنبير (مير)",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالمنبير (مير)",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nشنوده",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا بيشوي",
          "links": [
            {
              "text": "دير أنبا بيشوي",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-bishoy/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n16 بؤونه 1303 للشهداء - 20 يونيو 1587 \n للميلاد",
          "links": [
            {
              "text": "16 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/16-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n9 بشنس 1319 للشهداء - 14 مايو 1603 \n للميلاد",
          "links": [
            {
              "text": "9 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/09-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n15 سنة و10 أشهر و24 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و16 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\n\nدير السريان",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير السريان",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-sourian/index.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمراد الثالث - محمد الثالث - أحمد الأول",
          "links": []
        }
      ],
      "durationOnThrone": ": \n15 سنة و10 أشهر و24 يومًا",
      "interregnumDuration": ": \nشهرًا واحدًا و16 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": "في مثل هذا اليوم من سنة 1319 ش. (14 مايو سنة 1603 م. \n ) تنيَّح البابا غبريال الثامن البطريرك (97) في أيام سلطنة أحمد الأول \n العثماني. وهو من مير وترهب \nبدير أنبا بيشوي ببرية شيهيت وكان اسمه شنوده \n ورسم بطريركا في يوم الأحد \n16 بؤونة سنة 1303 ش. (20 يونيو سنة 1587 م.) \n وكان المتقدم في رسامته أنبا زخارياس أسقف القدس الشريف وأنبا كيرلس الخيامي ببيعة مرقوريوس أبي سيفين بمصر القديمة وقد حدث حول أقامته \n بطريركا أن اختلف النصارى وعملوا أربع بطاركة وعزلوه ثم عاد بعد ذلك إلى \n كرسيه في أيام السلطان مراد الثالث العثماني وثبتت له البطريركية. وقد \n جاء في كتاب الرسائل والكاثوليكون المخطوط باللغة العربية \nبدير القديس \n أنطونيوس أن هذا البطريرك أمر أن يكون صوم الرسل من \n21 بؤونة إلى \n5 أبيب \n وأن لا يكون صوم في ثلاثة أيام نينوي وأن يكون ابتداء صوم الميلاد من \nأول \n كيهك وأن يكون صوم العذراء اختياريا ووافق علي هذا التعديل جميع الأقباط \n وقتئذ. ثم عادوا بعد نياحته إلى ترتيب الصوم القديم. وقد تنيَّح هذا \n البابا \nبدير العذراء المعروف بالسريان بعد أن أقام علي الكرسي 15 سنة و10 \n أشهر و24 يومًا."
    },
    "names": {
      "english": "Pope Gabriel VIII of Alexandria",
      "greek": "Πάπας Γαβριήλ Η΄",
      "coptic": "Papa Gabriyl =y",
      "amharic": "አባ ገብርኤል 8ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-097.jpg",
        "alt": "St-Takla.org Image: St. Gabriel VIII - Pope Ghabrial - Pope of Alexandria and Patriarch of the See of St. Mark (97) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا غبريال الثامن - بابا الإسكندرية وبطريرك الكرازة المرقسية (97) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Gabriel VIII - Pope Ghabrial - Pope of Alexandria and Patriarch of the See \nof St. Mark (97) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-097.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Gabriel VIII, Coptic Orthodox Pope #97 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا غبريال الثامن البطريرك السابع والتسعون من بطاركة الكرازة المرقسية: 97. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Gabriel VIII, Coptic Orthodox Pope #97 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع عشر",
    "index": 98,
    "name": "البابا مرقس الخامس",
    "years": "1603 - 1619 م.",
    "durationYears": "16",
    "durationMonths": "2",
    "durationDays": "9",
    "link": "Life-of-Coptic-Pope-098-Pope-Mark-V_.html",
    "moreInfo": {
      "birthPlace": ": \nالبياضية",
      "durationOnThrone": ": \n16 سنة وشهران و9 أيام",
      "interregnumDuration": ": \n6 أيام",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mark V of Alexandria",
      "greek": "Πάπας Μάρκος Ε΄",
      "coptic": "Papa Markou =e",
      "amharic": "አባ ማርቆስ 5ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-098.jpg",
        "alt": "St-Takla.org Image: Pope Mark V - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (98) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقس الخامس - بابا الإسكندرية وبطريرك الكرازة المرقسية (98) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Mark V - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (98) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-098.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mark V, Coptic Orthodox Pope #98 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مرقس الخامس البطريرك الثامن والتسعون من بطاركة الكرازة المرقسية: 98. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mark V, Coptic Orthodox Pope #98 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع عشر",
    "index": 99,
    "name": "البابا يوأنس الخامس عشر",
    "years": "1619 - 1629 م.",
    "durationYears": "9",
    "durationMonths": "11",
    "durationDays": "22",
    "link": "Life-of-Coptic-Pope-099-Pope-John-XV_.html",
    "moreInfo": {
      "birthPlace": ": \nملوي",
      "durationOnThrone": ": \n9 سنوات و11 شهرًا و22 يومًا",
      "interregnumDuration": ": \nسنة واحدة",
      "residence": ": \nحارة زويلة",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope John XV of Alexandria / Abba Yoannis El",
      "greek": "Πάπας Ιωάννης ΙΕ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=e",
      "amharic": "አባ ዮሐንስ 15ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-099.jpg",
        "alt": "St-Takla.org Image: St. John XV - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (99) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الخامس عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (99) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John XV - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (99) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-099.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XV, Coptic Orthodox Pope #99 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الخامس عشر البطريرك التاسع والتسعون من بطاركة الكرازة المرقسية: 99. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XV, Coptic Orthodox Pope #99 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع عشر",
    "index": 100,
    "name": "البابا متاؤس الثالث",
    "years": "1631 - 1646 م.",
    "durationYears": "14",
    "durationMonths": "6",
    "durationDays": "23",
    "link": "Life-of-Coptic-Pope-100-Pope-Matthew-III_.html",
    "moreInfo": {
      "birthPlace": ": \nطوخ النصارى",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nطوخ النصارى",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nتادرس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار - \nدير البرموس",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            },
            {
              "text": "دير البرموس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-paromeos/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 النسئ 1347 للشهداء - 8 سبتمبر 1631 للميلاد",
          "links": [
            {
              "text": "4 النسئ",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/13-Nasea/04-Nasea.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n25 برمهات 1362 للشهداء - 31 مارس 1646 للميلاد(1642؟)",
          "links": [
            {
              "text": "25 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/25-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة و6 أشهر و23 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n19 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة وكنيسة طوخ",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة طوخ",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة طوخ",
              "href": "../../Coptic-History/places/africa/egypt/menofia/saint-mary-and-st-george-church-toukh-delka-talla.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمراد الرابع - إبراهيم الأول",
          "links": []
        }
      ],
      "durationOnThrone": ": \n14 سنة و6 أشهر و23 يومًا",
      "interregnumDuration": ": \n19 يومًا",
      "residence": ": \nحارة زويلة وكنيسة طوخ",
      "synaxariumText": "في مثل هذا اليوم من سنة 1362 ش. (31 مارس 1646 م.)، \n في يوم سبت لعازر، تنيَّح البابا متاوس الثالث البطريرك المائة وهو يُعرَف \n باسم متى الطوخي. وهو ابن أبوين مسيحيين من ناحية طوخ النصارى بإقليم \n المنوفية. وكانا خائفين الله، محبين للغرباء، محسنين للفقراء \n والمحتاجين. رزقهم الله بالابن تادرس فأحسنا تربيته وأدباه بكل أدب روحاني \n وعلماه كتب البيعة المقدسة وحلت نعمة الله علي هذا الابن المبارك فانكب \n على الدرس والتعليم المسيحي إلى أن حركته نعمة الله إلى السيرة الملائكية \n والحياة النسكية فخرج من بلده وترك أهله وأقاربه وتبع قول المسيح له \n المجد ومضى إلى \nبرية شيهيت ميزان القلوب وترهب بكنيسة القديس العظيم أبى \n مقار فجاهد في النسك والعبادة جهادا بليغا. فرسموه قسا، فتزايد في \n التقشف، ونما في الفضيلة فأقاموه قمصًا ورئيسًا علي الدير المذكور."
    },
    "names": {
      "english": "Pope Matthew III of Alexandria",
      "greek": "Πάπας Ματθαίος Γ΄",
      "coptic": "Papa Mat;eou =g",
      "amharic": "አባ ማቴዎስ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-100.jpg",
        "alt": "St-Takla.org Image: St. Matthew III - Pope Matheos - Pope of Alexandria and Patriarch of the See of St. Mark (100) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا متاؤس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (100) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Matthew III - Pope Matheos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (100) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-100.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mettaous III, Coptic Orthodox Pope #100 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا متاؤس الثالث البطريرك المائة من بطاركة الكرازة المرقسية: 100. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mettaous III, Coptic Orthodox Pope #100 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع عشر",
    "index": 101,
    "name": "البابا مرقس السادس",
    "years": "1646 - 1656 م.",
    "durationYears": "10",
    "durationMonths": "",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-101-Pope-Mark-VI_.html",
    "moreInfo": {
      "birthPlace": ": \nبهجوره",
      "durationOnThrone": ": \n10 سنوات",
      "interregnumDuration": ": \n4 سنوات و7 أشهر و16 يومًا",
      "residence": ": \nحارة زويلة",
      "synaxariumText": "في مثل هذا اليوم من سنة 1372 ش. (20 أبريل 1656 م.) \n تنيَّح البابا مرقس السادس البطريرك الإسكندري (101) وهو يعرف بمرقس \n البهجوري لأنه من بهجورة وَتَرَهَّب \nبدير القديس أنطونيوس. ولما تنيَّح البابا \n متاؤس الثاني البطريرك المائة اتفق المعلم بشارة المتقدم علي الأراخنة في \n ذلك العصر هو وجماعة المصريين علي رسامة هذا الأب، وترأس احتفال الرسامة \n الأنبا خرستوذولو أسقف بيت المقدس في يوم الأحد\n15 برمودة سنة 1362 ش. (\n 20 أبريل سنة 1646 م.) ودعي مرقس السادس وبعد رسامته وقع خلاف كبير بينه \n وبين المعلم بشارة. ومن أعمال هذا البابا المأثورة أنه أصدر أمرًا \n للرهبان بمنعهم من الإقامة في العالم وبعودتهم جميعا إلى أديرتهم فغضب \n الرهبان من هذا الأمر ولم يوافقوا عليه وامتنعوا عن العمل به وحرك \n الشيطان عدو الخير أحد الرهبان المدعو قدسي فرفع للباشا عريضة ضد \n البطريرك ادعي فيها بأنه يمد الناس بالفلقة ويقتلهم بها فاهتم الوالي \n بالشكوى وأمر بكشف الحقيقة وعند التحقيق أنكر الراهب موضوع الشكوى وظهرت \n براءة البابا من التهمة الواردة في عريضة الشكوى ولكنه غرم بغرامة دفعها \n عنه أكابر الدولة وفي \n21 طوبة سنة 1365 ش. نودي بأن لا يركب النصارى خيولًا \n ولا يلبسوا قفاطين حمراء ولا طواقي جوخ حمراء ولا مراكيب وإنما يلبسون \n قفاطين زرقاء طول الواحدة عشرون ذراعًا."
    },
    "names": {
      "english": "Pope Mark VI of Alexandria / Abba Marcos VI",
      "greek": "Πάπας Μάρκος ΣΤ΄",
      "coptic": "Papa Markou ^",
      "amharic": "አባ ማርቆስ 6ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-101.jpg",
        "alt": "St-Takla.org Image: St. Mark VI - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (101) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقس السادس - بابا الإسكندرية وبطريرك الكرازة المرقسية (101) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Mark VI - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (101) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-101.jpg",
        "alt": "St-Takla.org Image: Pope Mark VI of Alexandria, Coptic Orthodox Pope #101, with a coins purse appearing next to him, due to his love of money. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: البابا مرقس السادس البطريرك الواحد بعد المائة من بطاركة الكرازة المرقسية: 101، ويظهر بجانبه صرة من العملات، لمحبته في المال. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Mark VI of Alexandria, Coptic Orthodox Pope #101, with a coins purse appearing next to him, due to his love of money. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع عشر",
    "index": 102,
    "name": "البابا متاؤس الرابع",
    "years": "1660 - 1675 م.",
    "durationYears": "14",
    "durationMonths": "8",
    "durationDays": "9",
    "link": "Life-of-Coptic-Pope-102-Pope-Matthew-IV_.html",
    "moreInfo": {
      "birthPlace": ": \nمير",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nمير",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nجرجس",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير البرموس",
          "links": [
            {
              "text": "دير البرموس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-paromeos/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n30 هاتور 1377 للشهداء - 6 ديسمبر 1660 للميلاد",
          "links": [
            {
              "text": "30 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/30-Hatoor.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n16 مسرى  1391 للشهداء - 15 أغسطس 1675 للميلاد",
          "links": [
            {
              "text": "16 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/16-Mesraa.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n14 سنة و8 أشهر و9 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n7 أشهر",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة زويلة ثم حارة الروم",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nأبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمحمد الرابع",
          "links": []
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا متاؤس الرابع البطريرك رقم 102",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا متاؤس الرابع البطريرك رقم 102",
              "href": "../bishops/popes/102-matthew-iv.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n14 سنة و8 أشهر و9 أيام",
      "interregnumDuration": ": \n7 أشهر",
      "residence": ": \nحارة زويلة ثم حارة الروم",
      "synaxariumText": "في مثل هذا اليوم من سنة 1391 ش. (15 أغسطس سنة 1675 \n م.) تنيَّح البابا متاؤس الرابع البطريرك الـ102. وهو يعرف باسم متى \n الميرى. ولد هذا الأب من أبوين مسيحيين تقيين كانا من الأبرار الصالحين \n يعملان الصدقات والحسنات وهما من أغنياء أهل مير من إقليم الأشمونين \n بكرسي قسقام المعروف بالمحرق وكانت لهما أراض زراعية متسعة ومواشي. وقد \n رزقا ثلاثة أولاد ذكور أحدهم هذا الأب الفاضل وكان أحب أخوته عند والديه \n وكان اسمه أولا جرجس. وقد اعتنيا بتربيته وهذباه بكل أدب ووقار، ولم \n يكلفاه كأخويه بالعمل في الحقل والزراعة ولا برعي المواشي بل جعلاه ينصرف \n إلى القراءة والتعليم حتى صار عالما بالكتب المقدسة أكثر من أهل جيله \n وأصبح قادرا علي تفسير معانيها لمن أشكل عليه أمرها ولما كبر زهد هذا \n العالم الزائل ومضي إلى \nدير السيدة العذراء المعروف بالبراموس في برية \n شيهيت وأقام به ست سنوات فتراءى له في حلم أن أبويه حزينان عليه وعرفا \n عنه أنه مات لأنهما لم يهتديا إلى مكانه. فقام لوقته وأعلم إخوته في \n الدير فأشاروا عليه بالتوجه إلى بلده لرؤية والديه فمضي إلى مير وسلم \n عليهما. فلما وقع نظرهما عليه فرحا فرحا عظيما وبعد ذلك أرادا أن يزوجاه \n فلما علم القديس من أخ صديق له بما اعتزما عليه هرب وعاد إلى ديره ثانيًا \n فتلقاه أخوته الرهبان بالترحاب والسرور وسكن مع هؤلاء القديسين، وسلك \n معهم سبيل المحبة والإخلاص وخدمهم الخدمات الصادقة فزكوه للرهبنة وبعد \n ذلك رسم قسًا علي الدير وبعد أيام من ذلك لبس\nالإسكيم المقدس. وصار يجهد \n نفسه بالسهر والصلاة والعبادة والسجود أكثر مما فرض علي غيره من الرهبان \n فكان يصوم من الليل إلى الليل وفي زمن الشتاء كان يصوم يومين يومين \n واستمر علي هذا المنوال مدة حياته حتى اكتسب رضاء الرب بأعماله الصالحة \n وعبادته المرضية وتقشفه التقوى."
    },
    "names": {
      "english": "Pope Matthew IV of Alexandria / Anba Matta El",
      "greek": "Πάπας Ματθαίος Δ΄",
      "coptic": "Papa Mat;eou =d",
      "amharic": "አባ ማቴዎስ 4ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-102.jpg",
        "alt": "St-Takla.org Image: St. Matthew IV - Pope Matheos - Pope of Alexandria and Patriarch of the See of St. Mark (102) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا متاؤس الرابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (102) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Matthew IV - Pope Matheos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (102) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-102.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mettaous IV, Coptic Orthodox Pope #102 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا متاؤس الرابع البطريرك الثاني بعد المائة من بطاركة الكرازة المرقسية: 102. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mettaous IV, Coptic Orthodox Pope #102 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن السابع عشر",
    "index": 103,
    "name": "البابا يوأنس السادس عشر",
    "years": "1676 - 1718 م.",
    "durationYears": "42",
    "durationMonths": "3",
    "durationDays": "",
    "link": "Life-of-Coptic-Pope-103-Pope-John-XVI_.html",
    "moreInfo": {
      "birthPlace": ": \nطوخ النصاري",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nطوخ النصاري",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nإبراهيم",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 برمهات 1392 للشهداء - 5 مايو 1676 \n للميلاد",
          "links": [
            {
              "text": "9 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/09-Baramhat.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n10 بؤونه 1434 للشهداء - 15 يونيو 1718 \n للميلاد",
          "links": [
            {
              "text": "10 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/10-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n42 سنة و3 أشهر",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهران و6 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة الروم",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nأبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمحمد الرابع - سليمان الثاني - أحمد الثاني \n - مصطفي الثاني - أحمد الثالث",
          "links": []
        }
      ],
      "durationOnThrone": ": \n42 سنة و3 أشهر",
      "interregnumDuration": ": \nشهران و6 أيام",
      "residence": ": \nحارة الروم",
      "synaxariumText": "في مثل هذا اليوم من سنة 1434 للشهداء الأبرار (15 \n يونية سنة 1718 م.) تنيَّح البابا يوأنس السادس عشر البطريرك الثالث بعد \n المائة. ويُعْرَف هذا البابا باسم يوأنس الطوخي وكان والداه مسيحيين من طوخ \n النصارى بكرسي المنوفية، فربيا نجلهما وكان يدعي إبراهيم أحسن تربية \n وزوداه بكل معرفة وأدب وعلماه أحسن تعليم وكانت نعمة الله حالة عليه منذ \n صباه فنشأ وترعرع في الفضيلة والحياة الطاهرة. ولما تنيَّح والده زهد \n العالم واشتاق لحياة الرهبنة فمضي إلى \nدير القديس أنطونيوس ببرية العربة \n وَتَرَهَّب فيه ولبس الزي الرهباني واتشح\nبالإسكيم المقدس. فلما تفاضل في \n العبادة والنسك اختاره الآباء الرهبان فرسمه \nالبابا متاؤس الرابع بكنيسة \n السيدة العذراء بحارة زويلة قسا علي \nالدير المذكور فازداد في رتبته \n الجديدة فضلًا وزهدًا حتى شاع ذكر ورعه واتضاعه ودعته. ولما تنيَّح\nالبابا \n البطريرك متاوس وخلا الكرسي بعده اجتمع الآباء الأساقفة والكهنة \n والأراخنة لاختيار الراعي الصالح فانتخبوا عددا من الكهنة والرهبان وكان \n هذا الأب من جملتهم وعملوا قرعة هيكلية بعد أن أقاموا القداسات ثلاثة \n أيام وهم يطلبون من الله سبحانه وتعالي أن يرشدهم إلى من يصلح لرعاية \n شعبه ولما سحب اسم هذا الأب في القرعة علموا وتحققوا أن الله هو الذي \n اختاره إليه هذه الرتبة. وتمت رسامته في يوم الأحد المبارك الموافق \n9 \nبرمهات سنة 1392 ش. (5 مايو سنة 1676 م.) ودعي يوأنس السادس عشر، وكان \n الاحتفال برسامته فخما عظيما عم فيه الفرح جميع الأقطار المصرية."
    },
    "names": {
      "english": "Pope John XVI of Alexandria",
      "greek": "Πάπας Ιωάννης ΙΣΤ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=^",
      "amharic": "አባ ዮሐንስ 16ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-103.jpg",
        "alt": "St-Takla.org Image: St. John XVI - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (103) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس السادس عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (103) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John XVI - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. \nMark (103) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-103.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XVI, Coptic Orthodox Pope #103 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس السادس عشر البطريرك الثالث بعد المائة من بطاركة الكرازة المرقسية: 103. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XVI, Coptic Orthodox Pope #103 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن عشر",
    "index": 104,
    "name": "البابا بطرس السادس",
    "years": "1718 - 1726 م.",
    "durationYears": "7",
    "durationMonths": "7",
    "durationDays": "11",
    "link": "Life-of-Coptic-Pope-104-Pope-Peter-VI_.html",
    "moreInfo": {
      "birthPlace": ": \nناحية أسيوط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nناحية أسيوط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبونا الراهب القمص مرجان الأسيوطي (أبونا مرجان \nالأنبا بولا)",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n17 مسرى 1434 للشهداء - 21 أغسطس 1718 للميلاد",
          "links": [
            {
              "text": "17 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/17-Mesraa.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n26 برمهات 1442 للشهداء - 2 أبريل 1726 للميلاد",
          "links": [
            {
              "text": "26 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/26-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n7 سنوات و7 أشهر و11 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n9 أشهر و11 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة الروم",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nأبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأحمد الثالث",
          "links": []
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا بطرس السادس البطريرك رقم 104",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا بطرس السادس البطريرك رقم 104",
              "href": "../bishops/popes/104-peter-vi.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n7 سنوات و7 أشهر و11 يومًا",
      "interregnumDuration": ": \n9 أشهر و11 يومًا",
      "residence": ": \nحارة الروم",
      "synaxariumText": "في مثل هذا اليوم تعيد الكنيسة تذكار نياحة البابا \n بطرس السادس البطريرك 104 في سنة 1442 ش. (2 أبريل سنة 1726 م.) وكان هذا \n الأب الطوباوي والملاك الروحاني ابنا لأبوين مسيحيين طاهرين من المدينة \n المحبة لله أسيوط. فربياه أحسن تربية وثقفاه بالعلوم والآداب الكنسية \n حتى برع فيها. وكان اسمه مرجان ولكنه اشتهر باسم بطرس الأسيوطي فيما بعد."
    },
    "names": {
      "english": "Pope Peter VI of Alexandria / Abba Petros VI",
      "greek": "Πάπας Πέτρος ΣΤ΄",
      "coptic": "Papa Petrou ^",
      "amharic": "አባ ጴጥሮስ 6ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-104.jpg",
        "alt": "St-Takla.org Image: St. Peter VI - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (104) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا بطرس السادس - بابا الإسكندرية وبطريرك الكرازة المرقسية (104) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter VI - Pope Petros - Pope of Alexandria and Patriarch of the See of St. \nMark (104) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-104.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter VI, Coptic Orthodox Pope #104 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا بطرس السادس البطريرك الرابع بعد المائة من بطاركة الكرازة المرقسية: 104. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Peter VI, Coptic Orthodox Pope #104 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن عشر",
    "index": 105,
    "name": "البابا يوأنس السابع عشر",
    "years": "1727 - 1745 م.",
    "durationYears": "18",
    "durationMonths": "3",
    "durationDays": "8",
    "link": "Life-of-Coptic-Pope-105-Pope-John-XVII_.html",
    "moreInfo": {
      "birthPlace": ": \nملوي",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nملوي",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبونا الراهب القمص عبد السيد الملواني (أبونا عبد \nالسيد الأنبا بولا)",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا أنطونيوس - \nأنبا بولا",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            },
            {
              "text": "أنبا بولا",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-paul-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n6 طوبه 1443 للشهداء - 12 يناير 1727 للميلاد",
          "links": [
            {
              "text": "6 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/06-Topah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n13 برموده 1461 للشهداء - 20 أبريل 1745 للميلاد",
          "links": [
            {
              "text": "13 برموده",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/08-Bermodah/13-Bermodah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n18 سنة و3 أشهر و8 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nشهرًا واحدًا و10 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة الروم",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nأبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nأحمد الثالث - محمود الأول",
          "links": []
        }
      ],
      "durationOnThrone": ": \n18 سنة و3 أشهر و8 أيام",
      "interregnumDuration": ": \nشهرًا واحدًا و10 أيام",
      "residence": ": \nحارة الروم",
      "synaxariumText": "في مثل هذا اليوم تنيَّح البابا الفاضل والحبر الكامل \n والحكيم العاقل البابا يوأنس السابع عشر البطريرك (105) من بطاركة \n الكرسي الإسكندري. وكان والدا هذا الأب مسيحيين تقيين من أهل ملوي في \n الصعيد فلما أتم السنة الخامسة والعشرين من عمره زهد العالم الزائل ومضي \n إلى \nدير القديس أنطونيوس وتَرَهَّب هناك وكان اسمه عبد السيد وأنتقل منه إلى \n دير القديس الأنبا بولا بعد تعميره فأجهد نفسه في العبادة وانكب علي \n تثقيف نفسه فتعلم القراءة والكتابة لأنه لم يكن يعرفهما من قبل وتبحر بعد \n ذلك في دراسة الكتب المقدسة وبعد أن أجهد نفسه في الفضيلة والنسك وتزود \n بعلوم الكنيسة وكتبها اختاره الآباء الرهبان ليكون قسيسا لهم علي \nدير \n أنبا بولا فرسمه البابا يوأنس البطريرك (103) مع زميله مرجان الأسيوطي \n الذي صار فيما بعد \nالبابا بطرس السادس البطريرك (104) الذي قبله. ولما \n تنيَّح البابا بطرس السادس البطريرك (104) تشاور الآباء الأساقفة والكهنة \n والأراخنة في من يصلح للبطريركية ووقع اختيارهم علي تقديم هذا الأب \n فأحضروه من الدير إلى مصر وعملوا قرعة هيكلية -كما جرت العادة- وبعد \n القداسات التي أقيمت لمدة ثلاثة أيام تمت القرعة فسحب اسمه فرسم بطريركًا \n في كنيسة الشهيد مرقوريوس أبي سيفين بمصر القديمة في يوم الأحد \n6 طوبة \n سنة 1443 ش. (12 يناير سنة 1727 م.) وبعد رسامته وقبل قراءة الإنجيل \n فتحوا باب مقبرة الآباء البطاركة ليأخذ -كالعادة- الصليب والعكاز من \nالمتنيَّح سلفه فلما نزل المقبرة وأخذ الصليب, طقطق العظم في المقبرة في \n وجهه ففزع لوقته وأمر بإبطال هذه العادة قائلًا: أن الصلبان أو العكاكيز \n كثيرة ثم أبطل هذا التقليد. وكان الغرض منه أن يتعظ الخلف من مصير السلف \n حتى لا يغتر بالمركز ويتكبر فتكون رؤيته لمصير سلفه عظة وعبرة دائمة \n أمامه ولبث البابا بعد رسامته مقيما أسبوعا في مصر القديمة وبعدها توجه \n إلى القلاية البطريركية بحارة الروم."
    },
    "names": {
      "english": "Pope John XVII of Alexandria / Abba Youannis XVII",
      "greek": "Πάπας Ιωάννης ΙΖ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=z",
      "amharic": "አባ ዮሐንስ 17ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-105.jpg",
        "alt": "St-Takla.org Image: St. John XVII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (105) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس السابع عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (105) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John XVII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (105) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-105.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XVII, Coptic Orthodox Pope #105 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس السابع عشر البطريرك الخامس بعد المائة من بطاركة الكرازة المرقسية: 105. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XVII, Coptic Orthodox Pope #105 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن عشر",
    "index": 106,
    "name": "البابا مرقس السابع",
    "years": "1745 - 1769 م.",
    "durationYears": "23",
    "durationMonths": "11",
    "durationDays": "8",
    "link": "Life-of-Coptic-Pope-106-Pope-Mark-VIII_.html",
    "moreInfo": {
      "birthPlace": ": \nقوصن",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nقوصن",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبونا الراهب سمعان الأنبا بولا",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا بولا\n-\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا بولا",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-paul-red-sea/index.html"
            },
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n24 بشنس 1461 للشهداء - 30 مايو 1745 \n للميلاد",
          "links": [
            {
              "text": "24 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/24-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n12 بشنس 1485 للشهداء - 18 مايو 1769 للميلاد",
          "links": [
            {
              "text": "12 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/12-Bashans.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n23 سنة و11 شهرًا و18 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n5 أشهر و5 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة الروم",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nأبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمحمود الأول - عثمان الثالث - مصطفي \n الثالث",
          "links": []
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا مرقس السابع البطريرك رقم 106",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا مرقس السابع البطريرك رقم 106",
              "href": "../bishops/popes/106-mark-vii.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n23 سنة و11 شهرًا و18 يومًا",
      "interregnumDuration": ": \n5 أشهر و5 أيام",
      "residence": ": \nحارة الروم",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mark VII of Alexandria / Abba Marcos VII",
      "greek": "Πάπας Μάρκος Ζ΄",
      "coptic": "Papa Markou =z",
      "amharic": "አባ ማርቆስ 7ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-106.jpg",
        "alt": "St-Takla.org Image: St. Mark VII - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (106) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقس السابع - بابا الإسكندرية وبطريرك الكرازة المرقسية (106) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Mark VII - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (106) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-106.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mark VII, Coptic Orthodox Pope #106 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا مرقس السابع البطريرك السادس بعد المائة من بطاركة الكرازة المرقسية: 106. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Mark VII, Coptic Orthodox Pope #106 - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن عشر",
    "index": 107,
    "name": "البابا يوأنس الثامن عشر",
    "years": "1769 - 1796 م.",
    "durationYears": "26",
    "durationMonths": "7",
    "durationDays": "14",
    "link": "Life-of-Coptic-Pope-107-Pope-John-XVIII_.html",
    "moreInfo": {
      "birthPlace": ": \nالفيوم",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالفيوم",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nيوسف",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n15 بابه 1486 للشهداء - 23 أكتوبر 1769 \n للميلاد",
          "links": [
            {
              "text": "15 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/15-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n2 بؤونه 1512 للشهداء - 7 يونيو  1796 \n للميلاد",
          "links": [
            {
              "text": "2 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/02-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n26 سنة و7 أشهر و14 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و26 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \nحارة الروم",
          "links": []
        },
        {
          "text": "محل\n الدفن: \n\nأبو سيفين بمصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "أبو سيفين بمصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/masr-el-adima/saint-abo-sefein-church.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nمصطفي الثالث - على بك الكبير - مراد بك \n أبو الذهب",
          "links": []
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا يوأنس الثامن عشر البطريرك رقم 107",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا يوأنس الثامن عشر البطريرك رقم 107",
              "href": "../bishops/popes/107-john-xviii.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n26 سنة و7 أشهر و14 يومًا",
      "interregnumDuration": ": \n3 أشهر و26 يومًا",
      "residence": ": \nحارة الروم",
      "synaxariumText": "في مثل هذا اليوم تعيد الكنيسة بتذكار البابا يوأنس \n الثامن عشر البطريرك (107). وكان من أهالي الفيوم وكان يدعي أولا باسم \n يوسف وترهبن \nبدير القديس العظيم الأنبا أنطونيوس بجبل العربة فلما تنيَّح \n البابا مرقس السابع سلفه أجمع رأي الأساقفة والكهنة وأراخنة الشعب علي \n اختياره بطريركا فأحضروه ورسموه بطريركا في كنيسة القديس مرقوريوس أبي \n سيفين بمصر القديمة في يوم الأحد المبارك \n15 بابه سنة 1486 ش. (23 أكتوبر \n سنة 1769 م.) ودعي باسم يوأنس الثامن عشر البطريرك (107). وفي أيامه سعي \n بابا روميه لاجتذاب الكنائس الشرقية وخاصة كنيسة مصر الأرثوذكسية إلى \n المذهب الكاثوليكي وقام بنشر كتاب أعمال مجمع خلقيدونية ووزعوه علي جميع \n البلاد الشرقية فكان ذلك سببا في انشقاق الكنيسة ورفض الاعتراف بأمانته \n البابا القديس ديسقورس البطريرك (25). ثم أرسل \nبابا رومية مندوبًا من \n قبله للبابا يوأنس يحمل رسالة يدعوه فيها إلى الاتحاد معه فسلم البابا \n هذه الرسالة إلى \nالأنبا\n \nيوساب الأبح أسقف جرجا وكلفه بدراستها والرد \n عليها فقام هذا العلامة الكبير واللاهوتي العظيم بالرد عليها وتفنيد دعوى \n روما فدافع عن كنيسته وأمانتها ومعتقداتها دفاعا مجيدا خلد به ذكراه أما \n كتاب أعمال مجمع خلقيدونية فقد أتي علي عكس ما كانت تنتظره روما من نشره \n إذ جاء مثبتا لصحة معتقدات الكنيسة القبطية الأرثوذكسية فندم \nأسقف روما \n علي نشره في الشرق وقام بجمع نسخه وأحرقها. وقد نالت البابا يوأنس في \n مدة رئاسته شدائد وضيقات كثيرة من حكام البلاد والولاة العثمانيين وقام \n القائد التركي بمصادرة الخزينة البطريركية وأخذ أموالها الأمر الذي اضطر \n البابا إلى أن يختفي من ظلم هؤلاء الحكام الذين أرهقوا المسيحيين \n بأحكامهم الجائرة وبزيادة الضرائب المقررة عليهم واشترك البابا يوأنس مع \n المعلم \nإبراهيم الجوهري رئيس كتاب مصر في ذلك العهد في تعمير الأديرة \n والكنائس كما قام بعمل الميرون المقدس وتنيَّح في \nاليوم الثاني من شهر \n بؤونه المبارك سنة 1512 للشهداء الأبرار (الموافق 7 يونيو سنة 1796 م.) \n بعد أن قام علي الكرسي البطريركي 26 سنة و7 أشهر و16 يوما ودفن بمقبرة \n البطاركة الأبرار في كنيسة القديس مرقوريوس أبي سيفين وظل الكرسي بعده \n خاليا مدة ثلاثة أشهر وستة وعشرين يوم."
    },
    "names": {
      "english": "Pope John XVIII of Alexandria / Abba Youannis",
      "greek": "Πάπας Ιωάννης ΙΗ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=y",
      "amharic": "አባ ዮሐንስ 18ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-107.jpg",
        "alt": "St-Takla.org Image: St. John XVIII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (107) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس الثامن عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (107) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. John XVIII - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (107) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/000-ai/www-st-takla-org--ai-coptic-orthodox-pope-107.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Yoannis XVIII, Coptic Orthodox Pope #107, and next to him is the image of the righteous Ibrahim Al-Jawhari. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023. صورة في موقع الأنبا تكلا: قداسة البابا يوأنس الثامن عشر البطريرك السابع بعد المائة من بطاركة الكرازة المرقسية: 107، وبجانبه صورة المعلم إبراهيم الجوهري البار. - فن بالذكاء الاصطناعي، فكرة وتعديل مايكل غالي لموقع الأنبا تكلاهيمانوت، أكتوبر 2023 م.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Yoannis XVIII, Coptic Orthodox Pope #107, and next to him is the image of the righteous Ibrahim Al-Jawhari. - AI art, idea and edit by Michael Ghaly for St-Takla.org, October 2023."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن الثامن عشر",
    "index": 108,
    "name": "البابا مرقس الثامن",
    "years": "1796 - 1809 م.",
    "durationYears": "13",
    "durationMonths": "2",
    "durationDays": "19",
    "link": "Life-of-Coptic-Pope-108-Pope-Mark-IX_.html",
    "moreInfo": {
      "birthPlace": ":\nطما",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له:\nطما",
          "links": []
        },
        {
          "text": "الاسم قبل البطريركية:\nيوحنا",
          "links": []
        },
        {
          "text": "من أبناء دير:\n\n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ التقدمة:\n\n 24 توت؟ 1513 للشهداء - 2 أكتوبر 1796 للميلاد",
          "links": [
            {
              "text": "24 توت",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/01-Toot/24-Toot.html"
            }
          ]
        },
        {
          "text": "تاريخ النياحة:\n\n 13 كيهك 1526 للشهداء - 21 ديسمبر 1809 للميلاد",
          "links": [
            {
              "text": "13 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/13-Keyahk.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة على \nالكرسي: \n13 سنة وشهران و19 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو الكرسي:\n3 أيام",
          "links": []
        },
        {
          "text": "محل إقامة البطريرك:\nحارة الروم والمرقسية \nبالأزبكية",
          "links": [
            {
              "text": "المرقسية \nبالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن:\n\n\nكنيسة مارمرقس بالأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك المعاصرون:\nالسلطان عبد الحميد - إبراهيم بك - مراد \n بك -\nالاحتلال الفرنسي - \nمحمد علي الكبير",
          "links": [
            {
              "text": "الاحتلال الفرنسي",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-020-Father-Tadros-Yaacoub-Malaty/008-AlKanisa-Wal-Rohaneya/Coptic-Church-Spirituality-138-French-Campaign.html"
            },
            {
              "text": "محمد علي الكبير",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__20-Fatret-Hokm-Mohammed-Ali.html"
            }
          ]
        }
      ],
      "enthronementDate": ":\n\n 24 توت؟ 1513 للشهداء - 2 أكتوبر 1796 للميلاد",
      "departureDate": ":\n\n 13 كيهك 1526 للشهداء - 21 ديسمبر 1809 للميلاد",
      "durationOnThrone": ": \n13 سنة وشهران و19 يومًا",
      "interregnumDuration": ":\n3 أيام",
      "residence": ":\nحارة الروم والمرقسية \nبالأزبكية",
      "contemporaryKings": ":\nالسلطان عبد الحميد - إبراهيم بك - مراد \n بك -\nالاحتلال الفرنسي - \nمحمد علي الكبير",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Mark VIII of Alexandria / Abba Marcos VIII",
      "greek": "Πάπας Μάρκος Η΄",
      "coptic": "Papa Markou =y",
      "amharic": "አባ ማርቆስ 8ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-108.jpg",
        "alt": "St-Takla.org Image: St. Mark VIII - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. Mark (108) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مرقس الثامن - بابا الإسكندرية وبطريرك الكرازة المرقسية (108) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Mark VIII - Pope Marcos - Pope of Alexandria and Patriarch of the See of St. \nMark (108) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-154.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Mark VIII #108 (1796-1809), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا مرقس الثامن الـ108 (1796-1809 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Mark VIII #108 (1796-1809), Coptic icon - from the Old Coptic \nCathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly \nfor St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع عشر",
    "index": 109,
    "name": "البابا بطرس السابع (بطرس الجاولي)",
    "years": "1809 - 1852 م.",
    "durationYears": "42",
    "durationMonths": "3",
    "durationDays": "12",
    "link": "Life-of-Coptic-Pope-109-Pope-Peter-VII_.html",
    "moreInfo": {
      "birthPlace": ":\nالجاوليه \n(الجاولي) مركز منفلوط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له:\nالجاوليه \n(الجاولي) مركز منفلوط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nمنقريوس قبل الرهبنة - مرقوريوس بعدها",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير الأنبا أنطونيوس",
          "links": [
            {
              "text": "دير الأنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n16 كيهك 1526 للشهداء -  24 ديسمبر 1809 \n للميلاد",
          "links": [
            {
              "text": "16 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/16-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n28 برمهات 1568 ش. - 5 ابريل 1852 م.",
          "links": [
            {
              "text": "28 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/28-Baramhat.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: 42 سنة و3 أشهر و12 \nيومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n3 أشهر و20 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: المرقسية \nبالأزبكية",
          "links": [
            {
              "text": "المرقسية \nبالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n      \n\nالكنيسة المرقسية الكبرى، الأزبكية، القاهرة، مصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "الكنيسة المرقسية الكبرى، الأزبكية، القاهرة، مصر",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: محمد علي باشا - إبراهيم \nباشا (إبراهيم محمد علي باشا) - عباس حلمي الأول",
          "links": []
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا بطرس السابع البطريرك رقم 109 (25 أسقفًا)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا بطرس السابع البطريرك رقم 109",
              "href": "../bishops/popes/109-peter-vii.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": 42 سنة و3 أشهر و12 \nيومًا",
      "interregnumDuration": ": \n3 أشهر و20 يومًا",
      "residence": ": المرقسية \nبالأزبكية",
      "synaxariumText": "في مثل هذا اليوم من سنة 1568 ش. (5 أبريل سنه 1852 م. \n ) تنيَّح القديس البابا بطرس السابع البطريرك الـ109 ولد هذا الأب بقرية \n الجاولى مركز منفلوط، وكان اسمه أولا منقريوس. زهد العالم منذ صغره \n فقادته العناية الإلهية إلى \nدير القديس العظيم أنطونيوس، فَتَرَهَّب فيه وتعمق \n في العبادة والنسك والطهارة كما تفرغ إلى مطالعة الكتب الكنسية وتزود \n بالعلوم الطقسية واللاهوتية الأمر الذي دعا إلى رسامته قسا علي \nالدير \n ففاق أقرانه في ممارسة الفضائل وتأدية الفرائض وقد دعي القس مرقوريوس، \n ثم رقي قمصا لتقشفه وغيرته وطهارة قلبه."
    },
    "names": {
      "english": "Pope Peter VII of Alexandria / Abba Boutros El",
      "greek": "Πάπας Πέτρος Η΄",
      "coptic": "Papa Petrou =z",
      "amharic": "አባ ጴጥሮስ 7ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-109.jpg",
        "alt": "St-Takla.org Image: St. Peter VII - Pope Petros - Pope of Alexandria and Patriarch of the See of St. Mark (109) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا بطرس السابع (بطرس الجاولي) - بابا الإسكندرية وبطريرك الكرازة المرقسية (109) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Peter VII - Pope Petros - Pope of Alexandria and Patriarch of the See of St. \nMark (109) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/sarabamon/www-St-Takla-org--azbakia-church-168.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter VII (Pope Botros El-Gawly) - from St. Sarabamoun Shrine at the Old Cathedral, Azbakia, Cairo, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا بطرس الجاولي - من صور مزار الأنبا صرابامون أبو طرحة في الكاتدرائية القديمة بالأزبكية، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Peter VII (Pope Botros El-Gawly) - from St. Sarabamoun Shrine \nat the Old Cathedral, Azbakia, Cairo, Egypt - October 2011 - Photograph by \nMichael Ghaly for St-Takla.org"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/sarabamon/www-St-Takla-org--azbakia-church-172.jpg",
        "alt": "St-Takla.org Image: Relics of Saints (top to bottom): Saints (right to left): Pope Morkos VIII, Pope Boutrous VII, St. Sarabamon of the Scacf - from St. Sarabamoun Shrine at the Old Cathedral, Azbakia, Cairo, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: رفات وأجساد الآباء القديسون (من أعلى لأسفل): البابا مرقس الثامن، البابا بطرس السابع، الأنبا صرابامون أبو طرحه - من صور مزار الأنبا صرابامون أبو طرحة في الكاتدرائية القديمة بالأزبكية، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nRelics of Saints (top to bottom): Saints (right to left): Pope Morkos VIII, Pope \nBoutrous VII, St. Sarabamon of the Scacf - from St. Sarabamoun Shrine at the Old \nCathedral, Azbakia, Cairo, Egypt - October 2011 - Photograph by Michael Ghaly \nfor St-Takla.org"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-155.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Peter VII #109 (1809-1852), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا بطرس السابع (بطرس الجاولي) الـ109 (1809-1852 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Peter VII #109 (1809-1852), Coptic icon - from the Old Coptic \nCathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly \nfor St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع عشر",
    "index": 110,
    "name": "البابا كيرلس\n  الرابع (أبو الإصلاح)",
    "years": "1853 - 1861 م.",
    "durationYears": "6",
    "durationMonths": "7",
    "durationDays": "13",
    "link": "Life-of-Coptic-Pope-110-Pope-Cyril-IV_.html",
    "moreInfo": {
      "birthPlace": ": \nالصوامعة، مركز أخميم",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالصوامعة، مركز أخميم",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nأبونا الراهب القس داود الصومعي",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n28 بشنس\n (11 بؤونه؟) 1570 للشهداء - 17 يونيو 1854 للميلاد",
          "links": [
            {
              "text": "28 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/28-Bashans.html"
            },
            {
              "text": "11 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/11-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n23 طوبه 1577 للشهداء - 30 يناير1861 للميلاد",
          "links": [
            {
              "text": "23 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/23-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n6 سنوات و7 أشهر و13 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة و4 أشهر و16 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأزبكية",
          "links": [
            {
              "text": "المرقسية بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n\nكنيسة مارمرقس بالأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nعباس الأول - \n\nسعيد باشا",
          "links": [
            {
              "text": "سعيد باشا",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-020-Father-Tadros-Yaacoub-Malaty/008-AlKanisa-Wal-Rohaneya/Coptic-Church-Spirituality-145-Said-Pacha.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nكيرلس الرابع، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ110",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nكيرلس الرابع، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ110",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/110-Pope-Cyril-IV.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا كيرلس الرابع البطريرك رقم 110 (7 أساقفة)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا كيرلس الرابع البطريرك رقم 110",
              "href": "../bishops/popes/110-cyril-iv.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n6 سنوات و7 أشهر و13 يومًا",
      "interregnumDuration": ": \nسنة واحدة و4 أشهر و16 يومًا",
      "residence": ": \n\nالمرقسية بالأزبكية",
      "synaxariumText": "في مثل هذا اليوم تنيَّح الأب العظيم الأنبا كيرلس \n الرابع بابا الإسكندرية العاشر بعد المائة. وقد ولد هذا الأب ببلدة \n الصوامعة الشرقية من أعمال جرجا من أبوين تقيين حوالي سنة 1816 م.، \n وأسمياه داود باسم جد أبيه، واعتني والده بتربيته وتعليمه. وفي الثانية \n والعشرين من عمره قصد \nدير القديس أنطونيوس لزهده في أباطيل الحياة. \n وهناك سلك طريق الفضيلة والنسك، مما جعل القس أثناسيوس القلوصني، رئيس \n الدير وقتئذ أن يلبسه ثوب الرهبنة، فدأب منذ ذلك الحين علي الدرس \n والمطالعة. وبعد سنتين من ترهبه تنيَّح رئيس الدير، فأجمع الرهبان علي \n اختيار هذا الأب رئيسا، فرسمه \nالأنبا بطرس الجاولي البابا المئة والتاسع \n قسًا وعينه رئيسًا علي الدير، فاهتم بشئون الدير والرهبان أبلغ اهتمام. \n وكان حاد الذكاء وعلي قسط وافر من الإلمام بالمسائل الدينية، ولذلك فإنه \n لما نشب خلاف بين الأحباش في بعض الأمور العقائدية، استدعاه \nالأب \n البطريرك الأنبا بطرس الجاولي، وكلفه بالذهاب إلى البلاد الحبشية لفض \n هذا النزاع. فقام بمهمته خير قيام. وعاد الأب داود من الحبشة في يوم \n السبت 13 يوليه من سنة 1853 م. وكان قد تنيَّح \nالبابا بطرس الجاولي في 15 \n أبريل سنة 1852 م. وعند الشروع في اختيار خلف له، اختلفت أراء الشعب، \n فالبعض اختار الأب داود، والبعض اختار غيره. ثم استقر الرأي علي رسامته \n مطرانًا عامًا سنة 1853 م. واستمر سنة وشهرين، أظهر خلالها من حسن التصرف، ما جعله أهلا لأن يقام بطريركًا، فتمت رسامته في \n28 بشنس سنة 1571 ش. (\n 1854 م.). وقد أفرغ قصارى جهده في سبيل تهذيب الشبان وتعليمهم. فقد \n أنشأ المدرسة القبطية الكبرى بالبطريركية، وفتح مدرسة أخرى في حارة السقايين وشدد في تعليم اللغة القبطية فيهما، كما اشتري مطبعة كبيرة طبع \n فيها عدة كتب كنسية. وعموما فإن إليه يرجع الفضل في تقدم الأقباط، وقد \n هدم كنيسة البطريركية القديمة وشيد غيرها، ولكنه لم يتمكن من إتمامها \n لتغيبه في البلاد الحبشية للمرة الثانية. وكان هذا الحبر العظيم عالما \n شديد الاعتصام بقوانين الكنيسة، وكان محسنا ذا عناية شديدة بذوي الحاجة \n ومحبوبا من رعيته، وتنيَّح في \n23 طوبة سنة 1577ش (1861 م.)."
    },
    "names": {
      "english": "Pope Cyril IV of Alexandria / Abba Kyrillos IV",
      "greek": "Πάπας Κύριλλος Δ΄",
      "coptic": "pi`agioc Kurilloc أو \nPapa Kurillou =d",
      "amharic": "አባ ቄርሎስ 4ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-110.jpg",
        "alt": "St-Takla.org Image: Pope Cyril IV - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of St. Mark (110) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا كيرلس الرابع (أبو الإصلاح) - بابا الإسكندرية وبطريرك الكرازة المرقسية (110) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Cyril IV - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (110) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/110-Pope-Cyril-IV/www-St-Takla-org--H-H-Pope-Cyril-IV-110-001.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril IV (Father of reform), Coptic Pope # 110 صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا كيرلس الرابع أبو الإصلاح، بابا الإسكندرية رقم 110",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Cyril IV (Father of reform), Coptic Pope # 110."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/110-Pope-Cyril-IV/www-St-Takla-org--H-H-Pope-Cyril-IV-110-002.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril IV (Father of reform), Coptic Pope # 110 صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا كيرلس الرابع أبو الإصلاح، بابا الإسكندرية رقم 110",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Cyril IV (Father of reform), Coptic Pope no. 110."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/110-Pope-Cyril-IV/www-St-Takla-org--H-H-Pope-Cyril-IV-110-003.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril IV (Father of reform), Coptic Pope # 110 صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا كيرلس الرابع أبو الإصلاح، بابا الإسكندرية رقم 110",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Cyril IV (110th) Patriarch of Alexandria - Father of Reform."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-156.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril IV #110 (1853-1861), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا كيرلس الرابع أبو الإصلاح ال110 (1853-1861 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Cyril IV #110 (1853-1861), Coptic icon - from the Old Coptic \nCathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly \nfor St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع عشر",
    "index": 111,
    "name": "البابا ديمتريوس الثاني",
    "years": "1862 - 1870 م.",
    "durationYears": "7",
    "durationMonths": "7",
    "durationDays": "3",
    "link": "Life-of-Coptic-Pope-111-Pope-Demetrius-II_.html",
    "moreInfo": {
      "birthPlace": ": \nجلده بني سويف",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nجلده بني سويف",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "أبونا الراهب القمص ميخائيل المقاري",
          "links": []
        },
        {
          "text": "أبونا الراهب القمص ميخائيل عبد السيد",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير أبو مقار",
          "links": [
            {
              "text": "دير أبو مقار",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-macarius-natrun/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n9 بؤونه 1578 للشهداء - 15 يونيو 1862 للميلاد",
          "links": [
            {
              "text": "9 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/09-Bawoonah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n11 طوبه 1586 للشهداء -18 يناير 1870 للميلاد",
          "links": [
            {
              "text": "11 طوبه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/05-Topah/11-Topah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n7 سنوات و7 أشهر و3 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n4 سنوات و9 أشهر و14 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأزبكية",
          "links": [
            {
              "text": "المرقسية بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة مارمرقس بالأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \n\nسعيد باشا - إسماعيل \nباش",
          "links": [
            {
              "text": "سعيد باشا",
              "href": "../../Full-Free-Coptic-Books/FreeCopticBooks-020-Father-Tadros-Yaacoub-Malaty/008-AlKanisa-Wal-Rohaneya/Coptic-Church-Spirituality-145-Said-Pacha.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا ديمتريوس الثاني البطريرك رقم 111 (أسقف \nواحد)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا ديمتريوس الثاني البطريرك رقم 111",
              "href": "../bishops/popes/111-demetrius-ii.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n7 سنوات و7 أشهر و3 أيام",
      "interregnumDuration": ": \n4 سنوات و9 أشهر و14 يومًا",
      "residence": ": \n\nالمرقسية بالأزبكية",
      "synaxariumText": "في مثل هذا اليوم من سنة 1578 ش. (15 يونيو سنة 1862 \n م.) تذكار جلوس البابا ديمتريوس الثاني البطريرك الـ111 علي كرسي الكرازة \n المرقسية. ولد هذا الأب ببلدة جلدة محافظة المنيا وترهب \nبدير القديس \n مقاريوس ولما تنيَّح \nرئيس الدير اختاروه للرئاسة فأحسن الإدارة. ونظرًا لما \n اتصف به من حسن الصفات رسموه بطريركًا خلفًا \nللبابا العظيم الأنبا كيرلس \n الرابع البطريرك الـ110 وقد أكمل بناء الكنيسة المرقسية الكبرى كما شيد \n جملة مبان في البطريركية وفي ديره بنواحي أتريس. وفي سنة 1869 م. حضر \n الاحتفال بفتح قناة السويس وقابل أعظم الملوك ونال حسن الالتفات من \n السلطان عبد العزيز، انه عندما تقدم منه هذا البابا للسلام عليه، قبله \n علي صدره ففزع السلطان من ذلك. فوثب الحجاب عليه ثم سألوه قائلين: \n لماذا فعلت هكذا؟ فقال: أن كتاب الله يقول: قلب الملك في يد الرب (أم \n 21: 1). فأنا بتقبيلي هذا قد قبلت يد الله. فسر السلطان من حسن جواب \n البابا وأنعم عليه بكثير من الأراضي الزراعية لمساعدة الفقراء والمدارس \n وقد طاف البطريرك في باخرة حكومية متفقدا كنائس الوجه القبلي فرد الضالين \n وثبت المؤمنين وبعد أن أكمل في الرئاسة سبع سنين وسبعة أشهر وسبعة أيام \n تنيَّح بسلام ليلة عيد الغطاس \n11 طوبة سنة 1586 ش. (18 يناير سنة 1870 م.)"
    },
    "names": {
      "english": "Pope Demetrius II of Alexandria",
      "greek": "Πάπας Δημήτριος Β΄",
      "coptic": "pi`agioc Dhmhtrioc أو \nPapa Dymytriou =b",
      "amharic": "አባ ዲሜጥሮስ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-111.jpg",
        "alt": "St-Takla.org Image: Pope Demetrius II - Pope Demetrios - Pope of Alexandria and Patriarch of the See of St. Mark (111) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا ديمتريوس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (111) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Demetrius II - Pope Demetrios - Pope of Alexandria and Patriarch of the See \nof St. Mark (111) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-157.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Dimetrious II #111 (1862-1870), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا ديمتريوس الثاني الـ111 (1862-1870 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Dimetrious II #111 (1862-1870), Coptic icon - from the Old \nCoptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by \nMichael Ghaly for St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن التاسع عشر",
    "index": 112,
    "name": "البابا كيرلس الخامس",
    "years": "1874 - 1927 م.",
    "durationYears": "52",
    "durationMonths": "9",
    "durationDays": "6",
    "link": "Life-of-Coptic-Pope-112-Pope-Cyril-V_.html",
    "moreInfo": {
      "birthPlace": ": \nتزمنت - بني سويف",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nتزمنت - بني سويف",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "أبونا الراهب القمص يوحنا البرموسي",
          "links": []
        },
        {
          "text": "أبونا الراهب القمص يوحنا الناسخ",
          "links": []
        },
        {
          "text": "من أبناء دير: \n\nدير البرموس",
          "links": [
            {
              "text": "دير البرموس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-paromeos/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n23 بابه 1591 للشهداء - أول نوفمبر 1874 \n للميلاد",
          "links": [
            {
              "text": "23 بابه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/02-Babah/23-Babah.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\nأول مسرى 1643 للشهداء - 7 أغسطس 1927 للميلاد",
          "links": [
            {
              "text": "أول مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/01-Mesraa.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n52 سنة و9 أشهر و6 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة و4 أشهر و10 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأزبكية",
          "links": [
            {
              "text": "المرقسية بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n\nكنيسة مارمرقس بالأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nإسماعيل باشا - توفيق باشا - عباس باشا الثاني \n- السلطان حسين - فؤاد الأول",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا \nكيرلس الخامس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ112",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا \nكيرلس الخامس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ112",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/112-Pope-Kirellos-5.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا كيرلس الخامس البطريرك رقم 112 (44 أسقفًا)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا كيرلس الخامس البطريرك رقم 112",
              "href": "../bishops/popes/112-cyril-v.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n52 سنة و9 أشهر و6 أيام",
      "interregnumDuration": ": \nسنة واحدة و4 أشهر و10 أيام",
      "residence": ": \n\nالمرقسية بالأزبكية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Cyril V of Alexandria / Abba Kyrillos V",
      "greek": "Πάπας Κύριλλος Ε΄",
      "coptic": "pi`agioc Kurilloc أو .Papa \nKurillou =e",
      "amharic": "አባ ቄርሎስ 5ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-112.jpg",
        "alt": "St-Takla.org Image: Pope Cyril V - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of St. Mark (112) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا كيرلس الخامس - بابا الإسكندرية وبطريرك الكرازة المرقسية (112) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Cyril V - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (112) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/112-Pope-Kirellos-5/www-St-Takla-org--112-Pope-Kirellos-5-01.jpg",
        "alt": "St-Takla.org Image: Pope Cyril V of Alexandria. صورة في موقع الأنبا تكلا: البابا كيرلس الخامس، البطريرك رقم 112.",
        "title": "",
        "caption": "St-Takla.org Image: Pope Cyril V of Alexandria."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/112-Pope-Kirellos-5/www-St-Takla-org--H-H-Pope-Cyrilus-V-112-002.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril V (El-Baba Kirellos Al Khames), Coptic Pope no. 112. صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا كيرلس الخامس، بابا الإسكندرية رقم 112.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Cyril V (El-Baba Kirellos Al Khames), Coptic Pope no. 112."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-158.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril V #112 (1874-1927), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا كيرلس الخامس الـ112 (1874-1927 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Cyril V #112 (1874-1927), Coptic icon - from the Old Coptic \nCathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly \nfor St-Takla.org"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/112-Pope-Kirellos-5/www-St-Takla-org--Pope-Cyril-V-112-003.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril V (El Baba Kirellos Al Khames), Coptic Pope # 112 (image 3). صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا كيرلس الخامس، بابا الإسكندرية رقم 112 (صورة 3).",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Cyril V (El Baba Kirellos Al Khames), Coptic Pope # 112 (image  3)."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العشرين",
    "index": 113,
    "name": "البابا\n  يوأنس التاسع عشر",
    "years": "1928 - 1942 م.",
    "durationYears": "13",
    "durationMonths": "6",
    "durationDays": "5",
    "link": "Life-of-Coptic-Pope-113-Pope-John-XIX_.html",
    "moreInfo": {
      "birthPlace": ": \nدير تاسا، البداري، أسيوط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nدير تاسا، البداري، أسيوط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": []
        },
        {
          "text": "أبونا يوحنا الراهب (يوحنا \nالبراموسي)",
          "links": [
            {
              "text": "أبونا يوحنا الراهب (يوحنا \nالبراموسي)",
              "href": "../../characters/monk-father/yaa/yohana-elbaramoosy.html"
            }
          ]
        },
        {
          "text": "الأنبا يوأنس مطران البحيرة و \nالمنوفية",
          "links": [
            {
              "text": "الأنبا يوأنس مطران البحيرة و \nالمنوفية",
              "href": "../bishops/yaa/youanes-beheira.html"
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير البراموس",
          "links": [
            {
              "text": "دير البراموس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-paromeos/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n7 كيهك 1645 للشهداء - 16 ديسمبر 1928 \n للميلاد",
          "links": [
            {
              "text": "7 كيهك",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/04-Keyahk/07-Keyahk.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n14 بؤونه 1658 للشهداء - 21 يونيو 1942 \n للميلاد",
          "links": [
            {
              "text": "14 بؤونه",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/10-Bawoonah/14-Bawoonah.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \n13 سنة و6 أشهر و5 أيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \nسنة واحدة و7 أشهر و22 يومً",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأزبكية",
          "links": [
            {
              "text": "المرقسية بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n\nكنيسة مارمرقس - الأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس - الأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالملك فؤاد الأول - الملك فاروق الأول",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا يوأنس التاسع عشر، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ113",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا يوأنس التاسع عشر، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ113",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/113-Pope-John-XIX.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا يوأنس التاسع عشر البطريرك رقم 113 (17 \nأسقفًا)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا يوأنس التاسع عشر البطريرك رقم 113",
              "href": "../bishops/popes/113-john-xix.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \n13 سنة و6 أشهر و5 أيام",
      "interregnumDuration": ": \nسنة واحدة و7 أشهر و22 يومً",
      "residence": ": \n\nالمرقسية بالأزبكية",
      "synaxariumText": "في مثل هذا اليوم من سنة 1658 للشهداء (1942 م.) \n تنيَّح البابا يوأنس التاسع عشر وهو الثالث عشر بعد المائة من\n\nباباوات الأسكندرية. ولد بدير تاسا التابعة لمركز البداري بمديرية أسيوط في سنة \n 1571 للشهداء (1855م) من والدين تقيين فنشأ علي البر والتقوى وتشرب حب \n الفضيلة وشغف منذ صغره بقراءة سير القديسين، ثم تاقت نفسه إلى الاقتداء \n بهم فقصد \nدير السيدة العذراء بالبرموس بوادي النطرون في \nشهر برمودة سنة \n 1591 للشهداء. وهناك قضي مدة الاختبار -التي يقضيها عادة طالب الترهب- \n علي الوجه الأكمل. ثم أندمج في سلك الرهبنة في \n3 كيهك سنة 1592 للشهداء \n (1876م). ونظرًا لما اتصف به من حدة الذهن والذكاء المتوقد والعبادة \n الحارة فقد استقر رأي الآباء علي تزكيته قسًا. فرسمه \nالسعيد الذكر المتنيَّح البابا كيرلس الخامس البطريرك (112) قسًا في سنة 1593 ش. ثم قمصًا \n في \nبرمهات سنة 1594 ش. \n(1878 م. تقريبًا) وفي اليوم نفسه أُسْنِدَت إليه\nرئاسة الدير، فمكث في \n الرئاسة عشر سنوات كان فيها مثال الهمة والحزم والأمانة وطهارة السلوك \n والتقوى وحسن التدبير."
    },
    "names": {
      "english": "Pope John XIX of Alexandria",
      "greek": "Πάπας Ιωάννης ΙΘ΄",
      "coptic": "pi`agioc Iwannhc أو \nPapa Iwannou =i=;",
      "amharic": "አባ ዮሐንስ 19ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-113.jpg",
        "alt": "St-Takla.org Image: Pope John XIX - Pope Yoannis - Pope of Alexandria and Patriarch of the See of St. Mark (113) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوأنس التاسع عشر - بابا الإسكندرية وبطريرك الكرازة المرقسية (113) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope John XIX - Pope Yoannis - Pope of Alexandria and Patriarch of the See of \nSt. Mark (113) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/113-Pope-John-XIX/www-St-Takla-org--H-H-Pope-Yoannes-XIX-113-001.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope John XIX (19), Alexandrian Coptic Pope # 113 صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا يوأنس التاسع عشر، بابا الإسكندرية رقم 113",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope John XIX (19), Alexandrian Coptic Pope # 113."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-159.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope John XIX #113 (1928-1942), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا يوأنس التاسع عشر الـ113 (1928-1942 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope John XIX #113 (1928-1942), Coptic icon - from the Old Coptic \nCathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly \nfor St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العشرين",
    "index": 114,
    "name": "البابا مكاريوس الثالث",
    "years": "1944 - 1945 م.",
    "durationYears": "1",
    "durationMonths": "6",
    "durationDays": "19",
    "link": "Life-of-Coptic-Pope-114-Pope-Macarius-III_.html",
    "moreInfo": {
      "birthPlace": ": \nالمحلة الكبرى",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nالمحلة الكبرى",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية: \nالأب عبد المسيح الراهب - \nالأنبا مكاريوس مطران أسيوط",
          "links": [
            {
              "text": "الأب عبد المسيح الراهب",
              "href": "../bishops/meem/makaryos-asiot.html"
            },
            {
              "text": "الأنبا مكاريوس مطران أسيوط",
              "href": "../bishops/meem/makaryos-asiot.html"
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا بيشوي",
          "links": [
            {
              "text": "دير أنبا بيشوي",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-bishoy/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n5 أمشير 1660 للشهداء - 13 فبراير 1944 \n للميلاد",
          "links": [
            {
              "text": "5 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/05-Amsheer.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n25 مسرى 1661 للشهداء - 31 أغسطس 1945 \n للميلاد",
          "links": [
            {
              "text": "25 مسرى",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/12-Mesraa/25-Mesraa.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: \nسنة واحدة و6 أشهر و19 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: \n8 أشهر و24 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأزبكية",
          "links": [
            {
              "text": "المرقسية بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\n\nكنيسة مارمرقس بالأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك \n المعاصرون: \nالملك فاروق الأول",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا مكاريوس الثالث، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ114",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا مكاريوس الثالث، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ114",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/114-Pope-Macarius-III.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": \nسنة واحدة و6 أشهر و19 يومًا",
      "interregnumDuration": ": \n8 أشهر و24 يومًا",
      "residence": ": \n\nالمرقسية بالأزبكية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Macarius III of Alexandria / Abba Macari III",
      "greek": "Πάπας Μακάριος Γ΄",
      "coptic": "Papa Makariou =g",
      "amharic": "አባ ማካሪ 3ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-114.jpg",
        "alt": "St-Takla.org Image: Pope Macarius III - Pope Macarius - Pope of Alexandria and Patriarch of the See of St. Mark (114) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا مكاريوس الثالث - بابا الإسكندرية وبطريرك الكرازة المرقسية (114) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Macarius III - Pope Macarius - Pope of Alexandria and Patriarch of the See \nof St. Mark (114) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/114-Pope-Macarius-III/www-St-Takla-org--H-H-Pope-Makarius-III-114-001.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Makarious III, Coptic Pope # 114 صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا مكاريوس الثالث، بابا الإسكندرية رقم 114",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Makarious III, Coptic Pope # 114."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-160.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Macarius III #114 (1944-1945), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا: قداسة البابا مكاريوس الثالث الـ114 (1944-1945 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Macarius III #114 (1944-1945), Coptic icon - from the Old \nCoptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by \nMichael Ghaly for St-Takla.org"
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العشرين",
    "index": 115,
    "name": "البابا يوساب الثاني",
    "years": "1946 - 1956 م.",
    "durationYears": "10",
    "durationMonths": "5",
    "durationDays": "17",
    "link": "Life-of-Coptic-Pope-115-Pope-Yusab-II.html",
    "moreInfo": {
      "birthPlace": ": النغاميش، البلينا",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: النغاميش، البلينا",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": []
        },
        {
          "text": "أقلاديوس \n(26)",
          "links": [
            {
              "text": "(26)",
              "href": "#(26)"
            }
          ]
        },
        {
          "text": "أبونا الراهب القمص أقلوديوس الأنطوني",
          "links": [
            {
              "text": "أبونا الراهب القمص أقلوديوس الأنطوني",
              "href": "../../characters/monk-father/alif/ecladios-alantony.html"
            }
          ]
        },
        {
          "text": "الأنبا \nيوساب مطران جرجا",
          "links": [
            {
              "text": "الأنبا \nيوساب مطران جرجا",
              "href": "../bishops/yaa/yousab-gerga.html"
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير أنبا أنطونيوس",
          "links": [
            {
              "text": "دير أنبا أنطونيوس",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-anthony-red-sea/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n18 بشنس 1662 للشهداء - 26 مايو 1946 \n للميلاد",
          "links": [
            {
              "text": "18 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/18-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n4 هاتور 1673 للشهداء - 13 نوفمبر 1956 \n للميلاد",
          "links": [
            {
              "text": "4 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/04-Hatoor.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: 10 سنوات و5 أشهر و17 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: سنتان و5 أشهر و27 يومًا",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية - الأزبكية",
          "links": [
            {
              "text": "المرقسية - الأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nكنيسة مارمرقس بالأزبكية",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "كنيسة مارمرقس بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "الملوك و\n رؤساء جمهورية مصر العربية المعاصرين: الملك فاروق الأول - \nمحمد نجيب - \n\n\nجمال عبد الناصر",
          "links": [
            {
              "text": "محمد نجيب",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__24-Al-3ahd-Al-Gomhoory.html"
            },
            {
              "text": "جمال عبد الناصر",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__25-Fatret-7okmGamal-Abdel-Nasser.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا يوساب الثاني، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ115",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا يوساب الثاني، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ115",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/115-Pope-Yousab-2.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \n\nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا يوساب الثاني البطريرك رقم 115 (25 أسقفًا)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا يوساب الثاني البطريرك رقم 115",
              "href": "../bishops/popes/115-joseph-ii.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": 10 سنوات و5 أشهر و17 يومًا",
      "interregnumDuration": ": سنتان و5 أشهر و27 يومًا",
      "residence": ": \n\nالمرقسية - الأزبكية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Joseph II of Alexandria / Abba Yousab II",
      "greek": "Πάπας Ιωσήφ Β΄",
      "coptic": "Papa Iwcyv =b",
      "amharic": "አባ ዮሳብ 2ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-115.jpg",
        "alt": "St-Takla.org Image: Pope Joseph II - Pope Yousab - Pope of Alexandria and Patriarch of the See of St. Mark (115) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا يوساب الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (115) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Joseph II - Pope Yousab - Pope of Alexandria and Patriarch of the See of \nSt. Mark (115) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/01-Cairo/cathedral-azbakeya/building/www-St-Takla-org--azbakia-church-161.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Youab II #115 (1946-1956), Coptic icon - from the Old Coptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by Michael Ghaly for St-Takla.org  صورة في موقع الأنبا تكلا: قداسة البابا يوساب الثاني الـ115 (1946-1956 م.)، أيقونة قبطية حديثة - من صور الكاتدرائية القديمة بالأزبكية، مبنى، القاهرة، مصر - أكتوبر 2011 - تصوير مايكل غالي لـ: موقع الأنبا تكلا هيمانوت",
        "title": "",
        "caption": "St-Takla.org \nImage: His Holiness Pope Youab II #115 (1946-1956), Coptic icon - from the Old \nCoptic Cathedral, building, Azbakia, Egypt - October 2011 - Photograph by \nMichael Ghaly for St-Takla.org"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Architecture/Christian-Places/Coptic/Churches/Egypt/Alexandria/St-Mark-Church-Mahatet-El-Raml/www-st-takla-org--saint-mark-church-alexandria-088.jpg",
        "alt": "St-Takla.org Image: Memorial marble plate at St. Mark Church (Al-Morkoseya) in Alexandria, Egypt (Mahattet Al-Raml): \"Saint Mark Cathedral in Alexandria was rebuilt during the era of Pope Yousab II, Coptic Pope of Alexandria and the Patriarch of the See of St. Mark (155th), and the work started on Tuba 22, 1666 M. (January 30 1950), and was consecrated on Babah 30 1669 (November 9 1952)\". صورة في موقع الأنبا تكلا: اللوحة الرخامية الموجودة في الكنيسة المرقسية بالإسكندرية بمصر (محطة الرمل)، وتقول: \"أ‘ُعيد بناء الكاتدرائية المرقسية بالإسكندرية في عهد الأنبا يوساب الثاني بابا الإسكندرية وبطريرك الكرازة المرقسية الخامس عشر بعد المائة، وبُدء العمل يوم 22 طوبة 1666 للشهداء الموافق 30 يناير سنة 1950 ميلادية، وتم تدشينها في 30 بابه 1669 للشهداء، الموافق 9 نوفمبر سنة 1952 ميلادية\".",
        "title": "",
        "caption": "St-Takla.org Image:\nMemorial marble plate at St. Mark Church (Al-Morkoseya) in Alexandria, Egypt (Mahattet \nAl-Raml): \"Saint Mark Cathedral in Alexandria was rebuilt during the era of Pope \nYousab II, Coptic Pope of Alexandria and the Patriarch of the See of St. Mark \n(155th), and the work started on Tuba 22, 1666 M. (January 30 1950), and was \nconsecrated on Babah 30 1669 (November 9 1952)\"."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العشرين",
    "index": 116,
    "name": "البابا كيرلس السادس (رجل الصلاة)",
    "years": "1959 - 1971 م.",
    "durationYears": "11",
    "durationMonths": "9",
    "durationDays": "29",
    "link": "Life-of-Coptic-Pope-116-Pope-Cyril-VI_.html",
    "moreInfo": {
      "birthPlace": ": دمنهور",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: دمنهور",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            }
          ]
        },
        {
          "text": "أ. عازر يوسف عطا (قبل الرهبنة)",
          "links": [
            {
              "text": "أ. عازر يوسف عطا",
              "href": "../../characters/people/ain/azir-yosef.html"
            }
          ]
        },
        {
          "text": "أبونا الراهب القمص مينا \nالمتوحد",
          "links": [
            {
              "text": "أبونا الراهب القمص مينا \nالمتوحد",
              "href": "../../characters/monk-father/meem/mena-recluse.html"
            }
          ]
        },
        {
          "text": "أبونا الراهب القمص مينا البراموسي",
          "links": [
            {
              "text": "أبونا الراهب القمص مينا البراموسي",
              "href": "../../characters/monk-father/meem/mena-elbaramosi.html"
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\nدير السيدة العذراء - البرموس، وادي النطرون، مصر",
          "links": [
            {
              "text": "دير السيدة العذراء - البرموس، وادي النطرون، مصر",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-paromeos/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n2 بشنس 1675 للشهداء - 10 مايو 1959 \n للميلاد",
          "links": [
            {
              "text": "2 بشنس",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/09-Bashans/02-Bashans.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n\n30 أمشير 1687 للشهداء - 9 مارس 1971 للميلاد",
          "links": [
            {
              "text": "30 أمشير",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/06-Amsheer/30-Amsheer.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: 11 سنة و9 أشهر و29 يومًا",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي: 8 أشهر و5 أيام",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالمرقسية بالأزبكية",
          "links": [
            {
              "text": "المرقسية بالأزبكية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/wast-al-kahira/saint-mark-church-morkosia-el-azbakeya.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير مارمينا - مريوط - الإسكندرية - \n مصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير مارمينا - مريوط - الإسكندرية - \n مصر",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mina-mariout/index.html"
            }
          ]
        },
        {
          "text": "رؤساء \n الجمهورية المعاصرون: \n\nجمال عبد الناصر حسين - \n\n\nمحمد أنور \nمحمد السادات",
          "links": [
            {
              "text": "جمال عبد الناصر حسين",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__25-Fatret-7okmGamal-Abdel-Nasser.html"
            },
            {
              "text": "محمد أنور \nمحمد السادات",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__26-Fatret-7okm-Al-Sadat.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا كيرلس السادس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ116",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا كيرلس السادس، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ116",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/116-H-H-Pope-Cyril-VI-Baba-Kerolos.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا كيرلس السادس البطريرك رقم 116 (21 أسقفًا)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا كيرلس السادس البطريرك رقم 116",
              "href": "../bishops/popes/116-cyril-vi.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": 11 سنة و9 أشهر و29 يومًا",
      "interregnumDuration": ": 8 أشهر و5 أيام",
      "residence": ": \n\nالمرقسية بالأزبكية",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope Cyril VI of Alexandria / Abba Kyrillos VI",
      "greek": "Πάπας Κύριλλος ΣΤ΄",
      "coptic": "pi`agioc Kurilloc  أو \n\nPapa Kurillou ^",
      "amharic": "አባ ቄርሎስ 6ኛ."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-116.jpg",
        "alt": "St-Takla.org Image: St. Cyril VI - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of St. Mark (116) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا كيرلس السادس (رجل الصلاة) - بابا الإسكندرية وبطريرك الكرازة المرقسية (116) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nSt. Cyril VI - Pope Kyrillos - Pope of Alexandria and Patriarch of the See of \nSt. Mark (116) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/116-H-H-Pope-Cyril-VI-Baba-Kerolos/13-His-Holines-Pope-Kyrillos-the-Sixth-Face/www-St-Takla-org--Pope-Kyrillos-VI--El-Baba-Cyril--Face-005.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Cyril VI of Alexandria. صورة في موقع الأنبا تكلا: قداسة البابا المعظم الأنبا كيرلس السادس بابا الإسكندرية وبطريرك الكرازة المرقسية.",
        "title": "",
        "caption": "St-Takla.org Image: His Holiness Pope Cyril VI of Alexandria."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العشرين",
    "index": 117,
    "name": "البابا شنوده الثالث (معلم المسكونة)",
    "years": "1971 - 2012 م.",
    "durationYears": "40",
    "durationMonths": "4",
    "durationDays": "3",
    "link": "Life-of-Coptic-Pope-117-Pope-Shenouda-III_.html",
    "moreInfo": {
      "birthPlace": ": \nأسيوط",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: \nأسيوط",
          "links": []
        },
        {
          "text": "الاسم قبل \n البطريركية:\n\nنظير جيد روفائيل قبل الرهبنة\n\nأبونا الراهب القس أنطونيوس \n السرياني\nبعدها\n\nالأنبا شنودة أسقف عام التعليم والمعاهد الدينية",
          "links": [
            {
              "text": "الاسم قبل \n البطريركية",
              "href": null
            },
            {
              "text": "نظير جيد روفائيل",
              "href": "../../characters/people/noon/nazeer-gaied.html"
            },
            {
              "text": "أبونا الراهب القس أنطونيوس \n السرياني",
              "href": "../../characters/monk-father/alif/antonius-elsoriany.html"
            },
            {
              "text": "الأنبا شنودة أسقف عام التعليم والمعاهد الدينية",
              "href": "../bishops/sheen/shenouda-teaching.html"
            }
          ]
        },
        {
          "text": "نظير جيد روفائيل قبل الرهبنة",
          "links": [
            {
              "text": "نظير جيد روفائيل",
              "href": "../../characters/people/noon/nazeer-gaied.html"
            }
          ]
        },
        {
          "text": "أبونا الراهب القس أنطونيوس \n السرياني\nبعدها",
          "links": [
            {
              "text": "أبونا الراهب القس أنطونيوس \n السرياني",
              "href": "../../characters/monk-father/alif/antonius-elsoriany.html"
            }
          ]
        },
        {
          "text": "الأنبا شنودة أسقف عام التعليم والمعاهد الدينية",
          "links": [
            {
              "text": "الأنبا شنودة أسقف عام التعليم والمعاهد الدينية",
              "href": "../bishops/sheen/shenouda-teaching.html"
            }
          ]
        },
        {
          "text": "من أبناء دير: \n\n\nدير السيدة العذراء والأنبا يحنس كاما - \n السريان",
          "links": [
            {
              "text": "دير السيدة العذراء والأنبا يحنس كاما - \n السريان",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-mary-sourian/index.html"
            }
          ]
        },
        {
          "text": "تاريخ \n التقدمة: \n\n4 هاتور 1688 للشهداء - 14 نوفمبر \n\n1971\n للميلاد",
          "links": [
            {
              "text": "4 هاتور",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/04-Hatoor.html"
            },
            {
              "text": "1971",
              "href": "../../General-Knowledge-Articles/07-Calendars/Annual-Calendar-Arabic-1971.html"
            }
          ]
        },
        {
          "text": "تاريخ \n النياحة: \n8 برمهات 1728 للشهداء - 17 مارس\n2012\n للميلاد",
          "links": [
            {
              "text": "8 برمهات",
              "href": "../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/07-Baramhat/08-Baramhat.html"
            },
            {
              "text": "2012",
              "href": "../../General-Knowledge-Articles/07-Calendars/Annual-Calendar-Arabic-2012.html"
            }
          ]
        },
        {
          "text": "مدة الإقامة \n على الكرسي: 40 سنة و4 أشهر و3 \nأيام",
          "links": []
        },
        {
          "text": "مدة خلو \n الكرسي بعده: 8 أشهر، ويوم واحد (218 يومًا)",
          "links": []
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nالأنبا رويس بالعباسية",
          "links": [
            {
              "text": "الأنبا رويس بالعباسية",
              "href": "../../Coptic-History/places/africa/egypt/cairo/hadayek-el-kobba--waily--abbasia/cathedral/index.html"
            }
          ]
        },
        {
          "text": "محل\n الدفن: \n\nدير الأنبا بيشوي، وادي النطرون، البحيرة، مصر",
          "links": [
            {
              "text": "محل\n الدفن",
              "href": "cemeteries.html"
            },
            {
              "text": "دير الأنبا بيشوي، وادي النطرون، البحيرة، مصر",
              "href": "../../Coptic-History/places/monasteries/africa/egypt/st-bishoy/index.html"
            }
          ]
        },
        {
          "text": "رؤساء \n الجمهورية المعاصرين: \n\nمحمد أنور \nمحمد السادات -\n محمد حسني \nسيد مبارك - محمد حسين طنطاوي",
          "links": [
            {
              "text": "محمد أنور \nمحمد السادات",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__26-Fatret-7okm-Al-Sadat.html"
            },
            {
              "text": "محمد حسني \nسيد مبارك",
              "href": "../../General-Knowledge-Articles/02-Egypt-Masr-Arabic-Articles/Tarikh-Masr-Egyptian-History__27-Mesr-tahtt7okm-Mohamed-Hosni-Mobarak.html"
            }
          ]
        },
        {
          "text": "صور الأب البطريرك: \n\n\n\nصور قداسة البابا المعظم الأنبا شنوده الثالث، بابا الإسكندرية \nوبطريرك الكرازة المرقسية الـ117 - صور مزار البابا شنوده الثالث بدير الأنبا بيشوي",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا شنوده الثالث، بابا الإسكندرية \nوبطريرك الكرازة المرقسية الـ117",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/117-Pope-Shenouda-III.html"
            },
            {
              "text": "صور مزار البابا شنوده الثالث بدير الأنبا بيشوي",
              "href": "https://st-takla.org/Gallery/Architecture/Christian-Places/Coptic/Monasteries/sb/ps.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم:\nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا شنوده الثالث البطريرك رقم 117 (116 أسقفًا)",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا شنوده الثالث البطريرك رقم 117",
              "href": "../bishops/popes/117-shenouda-iii.html"
            }
          ]
        }
      ],
      "durationOnThrone": ": 40 سنة و4 أشهر و3 \nأيام",
      "interregnumDuration": ": 8 أشهر، ويوم واحد (218 يومًا)",
      "residence": ": \n\nالأنبا رويس بالعباسية",
      "synaxariumText": null
    },
    "names": {
      "english": "H.H.",
      "amharic": "ብጹዕ"
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-117.jpg",
        "alt": "St-Takla.org Image: Pope Shenouda III - Pope of Alexandria and Patriarch of the See of St. Mark (117) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا شنوده الثالث (معلم المسكونة) - بابا الإسكندرية وبطريرك الكرازة المرقسية (117) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Shenouda III - Pope of Alexandria and Patriarch of the See of St. Mark \n(117) - Arabic, Coptic and English name - Designed by Michael Ghaly for \nSt-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/117-Pope-Shenouda-III/01-Face/www-St-Takla-org--Pope-Shenooda-III-01.jpg",
        "alt": "St-Takla.org Image: His Holiness Pope Shenouda III of Alexandria, 77, photograph by Emad Nasry. صورة في موقع الأنبا تكلا: قداسة البابا شنودة الثالث - البطريرك رقم 117، تصوير عماد نصري.",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Holiness Pope Shenouda III of Alexandria, 77, photograph by Emad Nasry."
      }
    ]
  },
  {
    "century": "الآباء البطاركة في القرن العشرين",
    "index": 118,
    "name": "البابا \nتواضروس الثاني",
    "years": "2012 - الآن م.",
    "durationYears": "",
    "durationMonths": "",
    "durationDays": "",
    "link": "../popes/118/pope-tawadrous-ii.html",
    "moreInfo": {
      "birthPlace": ": المنصورة، الدقهلية، \nمصر",
      "nameBeforePapacy": [
        {
          "text": "المدينة الأصلية له: المنصورة، الدقهلية، \nمصر",
          "links": [
            {
              "text": "مصر",
              "href": "../../../Egypt-1_.html"
            }
          ]
        },
        {
          "text": "الاسم قبل \n البطريركية:",
          "links": []
        },
        {
          "text": "د. وجيه صبحي باقي سليمان \n- قبل \n\nالرهبنة",
          "links": [
            {
              "text": "د. وجيه صبحي باقي سليمان",
              "href": "../../../characters/people/waaw/wagih-sobhy-baky.html"
            },
            {
              "text": "الرهبنة",
              "href": "../../../Coptic-Faith-Creed-Dogma/Coptic-Rite-n-Ritual-Taks-Al-Kanisa/Dictionary-of-Coptic-Ritual-Terms/4-Coptic-Terminology_Reh-Zein/Rahbana__Monasticism.html"
            }
          ]
        },
        {
          "text": "قدس أبونا الأب الراهب ثيئودور الأنبا بيشوي Theodore - وهو نفس اسم تواضروس أو \nتادرس ولكن باليونانية Θεόδωρος.",
          "links": [
            {
              "text": "قدس أبونا الأب الراهب ثيئودور الأنبا بيشوي",
              "href": "../../../characters/monk-father/thaa/theodore-elanba-pishoy.html"
            }
          ]
        },
        {
          "text": "الأنبا \nتاوضروس أسقف عام البحيرة بمصر",
          "links": [
            {
              "text": "الأنبا \nتاوضروس أسقف عام البحيرة بمصر",
              "href": "../../bishops/taa/tawadros-behera.html"
            }
          ]
        },
        {
          "text": "من أبناء دير:\nدير الأنبا بيشوي، وادي النطرون، \nمصر",
          "links": [
            {
              "text": "دير الأنبا بيشوي، وادي النطرون",
              "href": "../../../Coptic-History/places/monasteries/africa/egypt/st-bishoy/index.html"
            },
            {
              "text": "مصر",
              "href": "../../../Egypt-1_.html"
            }
          ]
        },
        {
          "text": "تاريخ التقدمة:\n9 هاتور 1729 - 18 نوفمبر\n2012\n للميلاد",
          "links": [
            {
              "text": "9 هاتور",
              "href": "../../../Full-Free-Coptic-Books/Synaxarium-or-Synaxarion/03-Hatoor/09-Hatoor.html"
            },
            {
              "text": "2012",
              "href": "../../../General-Knowledge-Articles/07-Calendars/Annual-Calendar-Arabic-2012.html"
            }
          ]
        },
        {
          "text": "محل إقامة \n البطريرك: \n\nكاتدرائية الأنبا رويس بالعباسية، القاهرة، مصر",
          "links": [
            {
              "text": "كاتدرائية الأنبا رويس بالعباسية، القاهرة، مصر",
              "href": "../../../Coptic-History/places/africa/egypt/cairo/hadayek-el-kobba--waily--abbasia/cathedral/index.html"
            }
          ]
        },
        {
          "text": "رؤساء \n الجمهورية المعاصرين: محمد محمد مرسي عيسى العياط - عدلي محمود محمود منصور - عبد الفتاح سعيد حسين خليل السيسي",
          "links": []
        },
        {
          "text": "صور الأب البطريرك: \n\nصور قداسة البابا المعظم الأنبا تواضروس الثاني، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ118",
          "links": [
            {
              "text": "صور قداسة البابا المعظم الأنبا تواضروس الثاني، بابا الإسكندرية وبطريرك الكرازة \nالمرقسية الـ118",
              "href": "https://st-takla.org/Gallery/Clergy/Coptic-Popes/118-Pope-Tawadrous-II.html"
            }
          ]
        },
        {
          "text": "الأساقفة الذين رسمهم: \nقائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا تواضروس الثاني البطريرك رقم 118",
          "links": [
            {
              "text": "قائمة الآباء الأساقفة الذين قام \nبرسامتهم قداسة البابا تواضروس الثاني البطريرك رقم 118",
              "href": "../../bishops/popes/118-theodore-ii.html"
            }
          ]
        }
      ],
      "enthronementDate": ":\n9 هاتور 1729 - 18 نوفمبر\n2012\n للميلاد",
      "residence": ": \n\nكاتدرائية الأنبا رويس بالعباسية، القاهرة، مصر",
      "synaxariumText": null
    },
    "names": {
      "english": "Pope",
      "amharic": "ብጹዕ ወቅዱስ አቡነ ታዋድሮስ ፪ኛ / አባ ቴዎዶሩስ 2ኛ - اللغة اللاتينية: Papa Theodorus II."
    },
    "images": [
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Words/Christian/popes-names/www-st-takla-org--coptic-pope-118.jpg",
        "alt": "St-Takla.org Image: Pope Tawadros II - Pope Tawadrous - Pope of Alexandria and Patriarch of the See of St. Mark (118) - Arabic, Coptic and English name - Designed by Michael Ghaly for St-Takla.org, November 2019. صورة في موقع الأنبا تكلا: البابا تواضروس الثاني - بابا الإسكندرية وبطريرك الكرازة المرقسية (118) - الاسم باللغات العربية، القبطية، الإنجليزية - تصميم مايكل غالي لـ: موقع الأنبا تكلا هيمانوت، نوفمبر 2019 م.",
        "title": "",
        "caption": "St-Takla.org Image:\nPope Tawadros II - Pope Tawadrous - Pope of Alexandria and Patriarch of the See \nof St. Mark (118) - Arabic, Coptic and English name - Designed by Michael Ghaly \nfor St-Takla.org, November 2019."
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/St-Takla-Haymanot-Church/Tawadros/2013-04/www-St-Takla-org--Pope-Tawadros-Church-2013-178.jpg",
        "alt": "St-Takla.org Image: Photo of the visit of His Holiness Pope Tawadros II to Saint Takla Haymanout Coptic Church, Ibrahimia, Alexandria, Egypt, on Saturday April 6th, 2013 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا:  صورة من صور زيارة قداسة البابا المعظم الأنبا تواضروس الثاني 118 (البابا تاوضروس) إلى كنيسة الأنبا تكلاهيمانوت بالإبراهيمية، الإسكندرية، يوم السبت الموافق 6 إبريل 2013 - تصوير مايكل غالي لموقع الأنبا تكلاهيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nPhoto of the visit of His Holiness Pope Tawadros II to Saint Takla Haymanout \nCoptic Church, Ibrahimia, Alexandria, Egypt, on Saturday April 6th, 2013 - \nPhotograph by Michael Ghaly for St-Takla.org"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/118-Pope-Tawadrous-II/03-Bishop/07-Face/www-St-Takla-org--Pope-Tawadros-II-118-Face-005.jpg",
        "alt": "St-Takla.org Image: His Grace Bishop Tawadrous, General Bishop of Beheira, who became on November 2012 His Holiness Pope Tawadrous the Second, the Coptic Orthodox Pope #118 صورة في موقع الأنبا تكلا: نيافة الحبر الجليل الأنبا تواضروس أسقف عام البحيرة، والذي أصبح في نوفمبر 2012 هو البطريرك البابا تواضروس الثاني البابا رقم 118 في الكرازة المرقسية",
        "title": "",
        "caption": "St-Takla.org Image: His Grace Bishop Tawadrous, General Bishop of \nBeheira, who became on November 2012 His Holiness Pope Tawadrous the Second, the \nCoptic Orthodox Pope #118"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/St-Takla-Haymanot-Church/Tawadros/2013-04/www-St-Takla-org--Pope-Tawadros-Church-2013-406.jpg",
        "alt": "St-Takla.org Image: Photo of the visit of His Holiness Pope Tawadros II to Saint Takla Haymanout Coptic Church, Ibrahimia, Alexandria, Egypt, on Saturday April 6th, 2013 - Photograph by Michael Ghaly for St-Takla.org صورة في موقع الأنبا تكلا:  صورة من صور زيارة قداسة البابا المعظم الأنبا تواضروس الثاني 118 (البابا تاوضروس) إلى كنيسة الأنبا تكلاهيمانوت بالإبراهيمية، الإسكندرية، يوم السبت الموافق 6 إبريل 2013 - تصوير مايكل غالي لموقع الأنبا تكلاهيمانوت",
        "title": "",
        "caption": "St-Takla.org Image:\nPhoto of the visit of His Holiness Pope Tawadros II to Saint Takla Haymanout \nCoptic Church, Ibrahimia, Alexandria, Egypt, on Saturday April 6th, 2013 - \nPhotograph by Michael Ghaly for St-Takla.org"
      },
      {
        "src": "https://st-takla.org/Gallery/var/resizes/Clergy/Coptic-Popes/118-Pope-Tawadrous-II/04-Altar-lot/www-St-Takla-org--Pope-Tawadros-II-118-Lot-006.jpg",
        "alt": "St-Takla.org Image: The Altar Lot in St. Rewis Cathedral, Cairo, Egypt, on November 4, 2012, that resulted in choosing the Coptic Pope number 118, His Holiness Pope Tawadrous the Second We can see in this photo His Eminence Metropolitan Bakhomios of El-Beheira holding the paper that has the name of the new Pope. صورة في موقع الأنبا تكلا: القرعة الهيكلية في كاتدرائية الأنبا رويس بالقاهرة، مصر، يوم 4 نوفمبر 2012، والتي نتجت عن اختيار البابا 118، وهو قداسة البابا تاوضروس الثاني وهنا يضع نيافة الحبر الجليل الأنبا باخوميوس مطران البحيرة اسم البابا الجديد الذي تم اختياره أمام الجميع",
        "title": "",
        "caption": "St-Takla.org Image:\nThe Altar Lot in St. Rewis Cathedral, Cairo, Egypt, on November 4, 2012, that \nresulted in choosing the Coptic Pope number 118, His Holiness Pope Tawadrous the \nSecond We can see in this photo His Eminence Metropolitan Bakhomios of El-Beheira \nholding the paper that has the name of the new Pope."
      },
      {
        "src": "https://st-takla.org/Gallery/var/albums/Clergy/Coptic-Popes/118-Pope-Tawadrous-II/03-Bishop/02-Pope-Shenouda-III/www-St-Takla-org--Pope-Tawadros-II-118-Pope-Shenouda-004.jpg",
        "alt": "St-Takla.org Image: His Grace Bishop Tawadrous, the General Bishop of Beheira being blessed by His Holiness the late Pope Shenouda III صورة في موقع الأنبا تكلا: نيافة الحبر الجليل الأنبا تواضروس يوم أسقف عام البحيرة مع مثلث الرحمات قداسة البابا شنوده الثالث وهو يقبل يده ليأخذ بركته",
        "title": "",
        "caption": "St-Takla.org Image:\nHis Grace Bishop Tawadrous, the General Bishop of Beheira being blessed by His \nHoliness the late Pope Shenouda III"
      }
    ]
  }
]
```

---

## 📂 Project Structure

```
.
├── scrape.ts          # Main scraping script
├── package.json
├── out/
│   └── output.json    # Generated dataset
```

---

## 📜 Data Source

All data is scraped from **[St-Takla.org](https://st-takla.org)**, a comprehensive resource for Coptic Orthodox heritage.

---

## ⚠️ Disclaimer

* This project is for **educational and research purposes only**.
* Please respect the content and copyright of the original source.

---

## 🤝 Related Project

Check out the main web app that uses this data:
👉 [Alexandria's Light – Interactive Timeline](https://github.com/your-username/alexandrias-light)

```