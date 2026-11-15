// Sub-sites under nut.in.th, shown on the /sites/ page.
// Add, remove or reorder entries here. Descriptions are PLACEHOLDERS — replace with what each site really is.

export interface SubSite {
  host: string; // e.g. 'lunax.nut.in.th'
  name: string;
  description: { th: string; en: string };
  status?: 'live' | 'wip'; // 'wip' shows a quiet "in progress" note
}

export const subSites: SubSite[] = [
  {
    host: 'nebula.nut.in.th',
    name: 'Nebula',
    description: {
      th: 'คำอธิบายชั่วคราว ใส่ว่าเว็บนี้คืออะไรและใช้ทำอะไร',
      en: 'Placeholder description. Say what this site is and what it is for',
    },
    status: 'live',
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
