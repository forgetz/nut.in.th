// Sub-sites under nut.in.th, shown on the /sites/ page.
// Add, remove or reorder entries here. Descriptions are PLACEHOLDERS — replace with what each site really is.

export interface SubSite {
  host: string; // e.g. 'lunax.nut.in.th'
  name: string;
  description: { th: string; en: string };
  status?: 'live' | 'wip'; // 'wip' shows a quiet "in progress" note
  href?: string; // where the card links; defaults to https://<host>/
}

export const subSites: SubSite[] = [
  {
    host: 'nebula.nut.in.th',
    name: 'NebulaStudio',
    description: {
      th: 'เครื่องมือเตรียมและอัปโหลด YouTube Shorts ไปยังช่องของคุณเอง ใช้ได้เฉพาะบัญชีที่ได้รับอนุญาต',
      en: 'YouTube Shorts automation: prepare Shorts and publish them to your own channel. Approved accounts only',
    },
    status: 'live',
    href: '/nebula-studio/',
  },
  {
    host: 'lunax.nut.in.th',
    name: 'Lunax',
    description: {
      th: 'คำอธิบายชั่วคราว ใส่ว่าเว็บนี้คืออะไรและใช้ทำอะไร',
      en: 'Placeholder description. Say what this site is and what it is for',
    },
    status: 'live',
  },
];
