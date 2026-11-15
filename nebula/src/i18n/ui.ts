// UI strings for both languages.
// Text marked "PLACEHOLDER" is a stand-in: replace it with your real details.

export const languages = { th: 'ไทย', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'th';

export const site = {
  brand: 'Nebula',
  owner: 'Nut', // PLACEHOLDER: your name as it should appear
  email: 'hello@nut.in.th', // PLACEHOLDER: public contact address
  github: 'https://github.com/forgetz', // PLACEHOLDER
  linkedin: '', // PLACEHOLDER: leave empty to hide
  // Credit for the hero photo (src/assets/hero-nebula.*). Leave empty if it is your own image.
  heroCredit: { th: '', en: '' },
};

export const ui = {
  th: {
    'meta.description': 'Nebula — รวมผลงานพัฒนาระบบหลังบ้านเว็บไซต์ของ Nut',
    'nav.work': 'ผลงาน',
    'nav.gallery': 'แกลเลอรี',
    'nav.sites': 'เว็บในเครือ',
    'sites.title': 'เว็บในเครือ nut.in.th',
    'sites.lead': 'เว็บย่อยที่แยกออกไปเป็นโปรเจกต์ของตัวเอง',
    'sites.wip': 'กำลังทำ',
    'nav.about': 'เกี่ยวกับ',
    'nav.contact': 'ติดต่อ',
    'nav.menu': 'เมนู',
    'nav.close': 'ปิดเมนู',
    'nav.skip': 'ข้ามไปที่เนื้อหา',
    'lang.switch': 'Read in English',
    // PLACEHOLDER: hero copy
    'hero.eyebrow': 'Nebula · nut.in.th',
    'hero.title': 'งานพัฒนาระบบหลังบ้านของ Nut',
    'hero.lead': 'ระบบหลังบ้านของเว็บไซต์องค์กร เว็บแคมเปญ แอปบน Facebook และระบบของหน่วยงานรัฐ ให้แบรนด์อย่าง Honda, Samsung, Snickers และพฤกษา',
    'hero.primary': 'ดูผลงาน',
    'hero.secondary': 'ติดต่อ',
    'work.title': 'ผลงานที่เลือกมา',
    'work.all': 'ผลงานทั้งหมด',
    'work.allTitle': 'ผลงานทั้งหมด',
    'work.allLead': 'งานเว็บตั้งแต่ปี 2011 เรียงจากล่าสุด',
    'work.year': 'ปี',
    'work.client': 'ลูกค้า',
    'work.kind': 'ประเภท',
    'work.role': 'บทบาท',
    'work.stack': 'เครื่องมือ',
    'work.visit': 'เปิดเว็บไซต์',
    'work.back': 'กลับไปหน้าผลงาน',
    // PLACEHOLDER: about copy
    'gallery.title': 'แกลเลอรี',
    'gallery.lead': 'ภาพที่สร้างด้วย ComfyUI งานทดลองเรื่องแสง สี และอวกาศ',
    'gallery.latest': 'ภาพล่าสุด',
    'gallery.all': 'ดูทั้งหมด',
    'gallery.empty': 'ยังไม่มีภาพในแกลเลอรี',
    'gallery.image': 'ภาพที่',
    'gallery.prev': 'ภาพก่อนหน้า',
    'gallery.next': 'ภาพถัดไป',
    'gallery.close': 'ปิด',
    'about.title': 'เกี่ยวกับ',
    'about.body': 'ผมชื่อ Nut ทำงานพัฒนาระบบหลังบ้านของเว็บไซต์มาตั้งแต่ปี 2011 ทั้งเว็บองค์กร เว็บแคมเปญ แอปบน Facebook และระบบของหน่วยงานรัฐ เว็บนี้ตั้งชื่อว่า Nebula เพราะผลงานแต่ละชิ้นก็เหมือนกลุ่มก๊าซที่ค่อยๆ รวมตัวเป็นดาว',
    'contact.title': 'ติดต่อ',
    'contact.body': 'ถ้ามีโปรเจกต์ที่อยากคุยกัน ส่งอีเมลมาได้เลย ผมตอบภายในไม่กี่วันทำการ',
    'contact.email': 'ส่งอีเมล',
    'footer.terms': 'ข้อกำหนดการใช้งาน',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'legal.updated': 'ปรับปรุงล่าสุด',
    'notfound.title': 'ไม่พบหน้านี้',
    'notfound.body': 'ลิงก์อาจเปลี่ยนไปแล้ว ลองกลับไปที่หน้าแรก',
    'notfound.home': 'กลับหน้าแรก',
  },
  en: {
    'meta.description': 'Nebula — back-end web development work by Nut',
    'nav.work': 'Work',
    'nav.gallery': 'Gallery',
    'nav.sites': 'Sites',
    'sites.title': 'Sites on nut.in.th',
    'sites.lead': 'Smaller sites that grew into projects of their own',
    'sites.wip': 'In progress',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close menu',
    'nav.skip': 'Skip to content',
    'lang.switch': 'อ่านภาษาไทย',
    'hero.eyebrow': 'Nebula · nut.in.th',
    'hero.title': 'Back-end development work by Nut',
    'hero.lead': 'The back end behind corporate sites, campaign sites, Facebook apps and government systems for brands such as Honda, Samsung, Snickers and Pruksa',
    'hero.primary': 'See the work',
    'hero.secondary': 'Contact',
    'work.title': 'Selected work',
    'work.all': 'All work',
    'work.allTitle': 'All work',
    'work.allLead': 'Web work since 2011, newest first',
    'work.year': 'Year',
    'work.client': 'Client',
    'work.kind': 'Type',
    'work.role': 'Role',
    'work.stack': 'Stack',
    'work.visit': 'Visit site',
    'work.back': 'Back to work',
    'gallery.title': 'Gallery',
    'gallery.lead': 'Images made with ComfyUI, experiments in light, colour and space',
    'gallery.latest': 'Latest images',
    'gallery.all': 'See all',
    'gallery.empty': 'No images in the gallery yet',
    'gallery.image': 'Image',
    'gallery.prev': 'Previous image',
    'gallery.next': 'Next image',
    'gallery.close': 'Close',
    'about.title': 'About',
    'about.body': "I'm Nut. I have built the back end of websites since 2011: corporate sites, campaign sites, Facebook apps and government systems. The site is called Nebula because each project starts as loose material that slowly pulls into shape.",
    'contact.title': 'Contact',
    'contact.body': 'If you have a project in mind, send an email. I usually reply within a few working days.',
    'contact.email': 'Send email',
    'footer.terms': 'Terms of service',
    'footer.privacy': 'Privacy policy',
    'legal.updated': 'Last updated',
    'notfound.title': 'Page not found',
    'notfound.body': 'The link may have changed. Try the home page.',
    'notfound.home': 'Go to home',
  },
} as const;

export type UIKey = keyof (typeof ui)['th'];

export function useT(lang: Lang) {
  return (key: UIKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Build a path for a locale. path is locale-less, e.g. '/', '/work/', '/terms/'. */
export function localizePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `/${lang}${clean}`.replace(/\/+/g, '/');
}

/** Swap the locale prefix of a URL pathname. */
export function switchLangPath(pathname: string, to: Lang) {
  const parts = pathname.split('/');
  if (langs.includes(parts[1] as Lang)) parts[1] = to;
  else return localizePath(to, pathname);
  return parts.join('/');
}

export function otherLang(lang: Lang): Lang {
  return lang === 'th' ? 'en' : 'th';
}

export function formatDate(date: Date, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'th' ? 'th-TH' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
