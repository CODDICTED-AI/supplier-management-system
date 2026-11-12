/**
 * English is the source of truth: every other locale must match this shape
 * (enforced at compile time through the `Dictionary` type).
 */
const en = {
  meta: {
    tagline: 'Medical travel to China for international patients',
    description: 'YiLu Health helps international patients reach leading hospitals in China: case review, appointments, visa paperwork, interpreters, payment support and follow-up.',
  },
  nav: {
    treatments: 'Treatments',
    hospitals: 'Hospitals',
    visa: 'Visa & entry',
    costs: 'Costs',
    faq: 'FAQ',
    contact: 'Contact',
    cta: 'Free case review',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    skip: 'Skip to content',
  },
  common: {
    reviewed: 'Information last reviewed: {date}',
    officialSources: 'Official sources',
    typicalStay: 'Typical stay',
  },
  home: {
    hero: {
      eyebrow: 'Medical travel to China',
      title: 'China’s leading hospitals, within your reach.',
      subtitle: 'We guide international patients to the right hospital in China — reviewing your case, arranging appointments, visa paperwork, interpreters and payment, and staying with you through follow-up.',
      primary: 'Start a free case review',
      secondary: 'See how it works',
      notes: ['Free initial assessment', 'No obligation', 'Confidential'],
      glyphs: { yi: 'medicine', lu: 'road' },
    },
    stats: {
      items: [
        {
          value: '1.28M',
          label: 'international patient visits to major Chinese hospitals in 2025',
        },
        { value: '+73.6%', label: 'growth in those visits over three years' },
        { value: '79', label: 'countries with visa-free entry to mainland China (Feb 2026)' },
        { value: '240 h', label: 'visa-free transit for citizens of 57 countries' },
      ],
      source: 'Sources: National Health Commission of China; Ministry of Foreign Affairs; National Immigration Administration.',
    },
    why: {
      title: 'Why patients are choosing China',
      subtitle: 'Not only lower prices: speed, scale and therapies that are hard to access elsewhere.',
      items: [
        {
          title: 'Short waiting times',
          body: 'Specialist appointments, imaging and surgery dates are usually arranged within days or weeks, not months.',
        },
        {
          title: 'Advanced therapies',
          body: 'CAR-T cell therapy, proton and heavy-ion radiotherapy, robot-assisted surgery and a fast-growing range of new medicines.',
        },
        {
          title: 'High-volume expertise',
          body: 'Large academic hospitals treat complex cases every day, with multidisciplinary teams and dedicated international departments.',
        },
        {
          title: 'Clear, competitive costs',
          body: 'Private-pay prices are often a fraction of those in the United States, and you receive a written estimate before you travel.',
        },
        {
          title: 'Traditional Chinese Medicine at its source',
          body: 'Acupuncture, herbal medicine and rehabilitation at leading TCM hospitals, combined with modern diagnostics.',
        },
        {
          title: 'Easier entry',
          body: 'Visa-free entry for many passports, 240-hour visa-free transit and an online arrival card make short medical trips simple.',
        },
      ],
    },
    treatments: {
      title: 'What you can come for',
      subtitle: 'From a one-day check-up to complex cancer care.',
      all: 'View all treatments',
    },
    process: {
      title: 'How it works',
      subtitle: 'One coordinator, from your first message to your follow-up at home.',
      steps: [
        {
          when: 'Day 1',
          title: 'Tell us about your case',
          body: 'Send your diagnosis, reports and goals through our inquiry form. No payment is needed.',
        },
        {
          when: 'Days 2–5',
          title: 'Receive options and an estimate',
          body: 'We consult suitable hospitals and send you specialist feedback, a proposed plan and a written cost estimate.',
        },
        {
          when: 'Week 2',
          title: 'Prepare your trip',
          body: 'We book appointments, obtain the hospital letter for your visa if you need one, and arrange lodging and airport pickup.',
        },
        {
          when: 'Arrival',
          title: 'Treatment with an interpreter',
          body: 'A coordinator and medical interpreter accompany you through registration, consultations, tests and payment.',
        },
        {
          when: 'Afterwards',
          title: 'Follow-up at home',
          body: 'You leave with translated records and a follow-up plan, and we arrange remote reviews with your doctor.',
        },
      ],
      note: 'Illustrative timeline — every case is different.',
    },
    destinations: {
      title: 'Where you can be treated',
      subtitle: 'We help you choose among China’s main medical hubs according to your condition, not a fixed list.',
      cta: 'Explore hospitals and cities',
    },
    entry: {
      title: 'Getting in is simpler than you think',
      subtitle: 'China has opened up quickly since 2024. The right route depends on your passport and treatment plan.',
      items: [
        {
          title: '30 days visa-free',
          body: 'For ordinary passports from around 50 countries, plus countries with mutual exemption agreements.',
        },
        {
          title: 'Hainan: medical visits included',
          body: 'About 60 nationalities can enter Hainan visa-free, with medical treatment as a permitted purpose.',
        },
        {
          title: 'S2 visa for planned treatment',
          body: 'For longer or planned treatment, we help you obtain the hospital letter your visa application needs.',
        },
      ],
      cta: 'Read the visa & entry guide',
    },
    cta: {
      title: 'Not sure where to start?',
      body: 'Tell us about your situation. We will come back with realistic options, timing and an estimate — free of charge and without obligation.',
      button: 'Start a free case review',
    },
  },
  treatments: {
    title: 'Treatments and services',
    intro: 'These are the services international patients ask us about most. If yours is not listed, send us your case — we will tell you honestly whether China is a good option for it.',
    popular: 'Commonly requested',
    items: {
      checkup: {
        name: 'Health check-ups & screening',
        summary: 'Comprehensive one- or two-day programmes with on-site imaging, endoscopy and specialist review of your results.',
        points: [
          'Executive check-up packages',
          'MRI, low-dose CT and PET-CT',
          'Gastroscopy and colonoscopy under sedation',
          'Cardiac and cancer screening',
        ],
        stay: '1–3 days',
      },
      oncology: {
        name: 'Cancer care',
        summary: 'Multidisciplinary cancer centres with high case volumes, modern radiotherapy and access to recently approved cell and targeted therapies.',
        points: [
          'CAR-T cell therapy for blood cancers',
          'Proton and heavy-ion (carbon-ion) therapy',
          'Targeted therapy and immunotherapy',
          'Minimally invasive and robot-assisted surgery',
        ],
        stay: '2–8 weeks, depending on the plan',
      },
      tcm: {
        name: 'Traditional Chinese Medicine',
        summary: 'Integrative programmes at leading TCM hospitals for pain, recovery and chronic conditions, alongside modern diagnostics.',
        points: [
          'Acupuncture and moxibustion',
          'Tuina therapeutic massage',
          'Individualised herbal medicine',
          'Rehabilitation after stroke or surgery',
        ],
        stay: '1–4 weeks',
      },
      dental: {
        name: 'Dental care',
        summary: 'Implants, orthodontics and full-mouth restoration using international implant systems and digital treatment planning.',
        points: [
          'Dental implants',
          'Crowns and veneers',
          'Orthodontics and clear aligners',
          'Full-mouth rehabilitation',
        ],
        stay: '3–10 days; implants may need two visits',
      },
      eye: {
        name: 'Eye care',
        summary: 'High-volume ophthalmology centres for laser vision correction, cataract surgery and retinal assessment.',
        points: [
          'SMILE and LASIK laser vision correction',
          'ICL implantable lenses',
          'Cataract surgery with premium lenses',
          'Retina and glaucoma assessment',
        ],
        stay: '3–7 days',
      },
      ortho: {
        name: 'Orthopaedics & spine',
        summary: 'Joint replacement, spine surgery and sports medicine, increasingly robot-assisted, followed by structured rehabilitation.',
        points: [
          'Hip and knee replacement',
          'Minimally invasive spine surgery',
          'Arthroscopy and sports injuries',
          'Rehabilitation programmes',
        ],
        stay: '2–4 weeks',
      },
      cardio: {
        name: 'Heart & vascular care',
        summary: 'National cardiovascular centres offering interventional and surgical treatment for complex heart disease.',
        points: [
          'Coronary angiography and stenting',
          'Valve repair and replacement, including TAVR',
          'Arrhythmia ablation',
          'Bypass and structural heart surgery',
        ],
        stay: '1–3 weeks',
      },
      remote: {
        name: 'Remote second opinion',
        summary: 'Before you decide to travel, a Chinese specialist reviews your records and imaging and discusses your options by video.',
        points: [
          'Review of reports and imaging',
          'Video consultation with an interpreter',
          'Translated written summary',
          'Treatment options and cost estimate',
        ],
        stay: 'No travel needed',
      },
    },
    notOffered: {
      title: 'What we do not arrange',
      body: 'We do not arrange organ transplants, surrogacy, or therapies that have not been approved by Chinese regulators. China prohibits transplant tourism, and we work only with licensed medical institutions.',
    },
  },
  hospitals: {
    title: 'Hospitals and destinations',
    intro: 'China’s strongest hospitals are concentrated in a handful of cities. Below are well-known institutions that international patients often ask about, grouped by city.',
    disclaimer: 'Hospitals are listed for information only. A listing does not imply a partnership or endorsement, and services for international patients vary by hospital. For every case we confirm with the hospital that it can accept you before you travel.',
    types: { public: 'Public hospital', private: 'Private hospital', zone: 'Pilot-zone hospital' },
    tags: {
      general: 'Complex & multidisciplinary care',
      oncology: 'Oncology',
      proton: 'Proton & heavy-ion therapy',
      hematology: 'Haematology & cell therapy',
      cardio: 'Heart & vascular',
      neuro: 'Neurology & neurosurgery',
      ortho: 'Orthopaedics',
      eye: 'Ophthalmology',
      dental: 'Dentistry',
      tcm: 'Traditional Chinese Medicine',
      surgery: 'Minimally invasive surgery',
      innovative: 'Overseas-approved drugs & devices',
      checkup: 'Check-ups',
    },
    cities: {
      beijing: {
        name: 'Beijing',
        blurb: 'The capital concentrates many of China’s top national hospitals — a first choice for complex diagnoses, heart disease, neurology and cancer.',
      },
      shanghai: {
        name: 'Shanghai',
        blurb: 'China’s most international city, with more than 20 public hospitals in its international medical tourism pilot and strong private hospitals. Known for oncology and proton and heavy-ion therapy.',
      },
      guangzhou: {
        name: 'Guangzhou',
        blurb: 'A southern hub close to Hong Kong and Southeast Asia, noted for cancer care, ophthalmology and Traditional Chinese Medicine.',
      },
      shenzhen: {
        name: 'Shenzhen',
        blurb: 'Next door to Hong Kong, with modern hospitals run to international standards and easy cross-border access.',
      },
      hangzhou: {
        name: 'Hangzhou',
        blurb: 'Home to Zhejiang University’s teaching hospitals, strong in hepatobiliary and minimally invasive surgery, about an hour from Shanghai by train.',
      },
      chengdu: {
        name: 'Chengdu',
        blurb: 'The medical centre of western China, anchored by West China Hospital — one of the country’s largest and highest-ranked.',
      },
      hainan: {
        name: 'Hainan · Boao Lecheng',
        blurb: 'A tropical island with a national pilot zone where licensed hospitals may use innovative drugs and devices approved overseas but not yet on the mainland market — and visa-free entry that covers medical treatment.',
      },
    },
    choose: {
      title: 'How we help you choose',
      items: [
        {
          title: 'Specialty first',
          body: 'We start from the departments with the deepest experience in your condition, not from a hospital brand.',
        },
        {
          title: 'International readiness',
          body: 'We check language support, international wards, payment options and how quickly the hospital can see you.',
        },
        {
          title: 'Practical fit',
          body: 'Flight connections, visa route, climate, companion needs and budget all shape the final recommendation.',
        },
      ],
    },
  },
  visa: {
    title: 'Visa & entry guide',
    intro: 'Entering China has become much simpler since 2024. Which route fits you depends on your passport, how long treatment will take and where you will be treated. This page is general guidance, not legal advice — always confirm with official sources before you book.',
    options: [
      {
        title: '30-day visa-free entry',
        badge: 'Short visits',
        body: 'Ordinary passport holders from around 50 countries — including most of Europe, the United Kingdom, Canada, Australia, New Zealand, Japan, South Korea, Russia and several Gulf and Latin American states — can enter mainland China without a visa for up to 30 days. Countries with mutual exemption agreements, such as Singapore, Malaysia, Thailand, the UAE, Qatar and Kazakhstan, have similar access.',
        points: [
          'Permitted purposes are business, tourism, family visits, exchange and transit.',
          'Medical treatment is not a listed purpose. Consultations and check-ups during a visit are common, but if treatment is the main reason for your trip, ask the Chinese embassy or consulate whether you should apply for a visa.',
          'Most arrangements are announced through 31 December 2026 (Russia: 31 December 2027). Check for extensions before you book.',
        ],
      },
      {
        title: 'Hainan 30-day visa-free entry',
        badge: 'Medical purpose allowed',
        body: 'Citizens of about 60 countries can enter Hainan Province without a visa for up to 30 days, and medical treatment is an explicitly permitted purpose. Hainan is home to the Boao Lecheng International Medical Tourism Pilot Zone.',
        points: [
          'Your stay is limited to Hainan Province.',
          'Well suited to check-ups, planned procedures and therapies available in Boao Lecheng.',
        ],
      },
      {
        title: '240-hour visa-free transit',
        badge: 'Up to 10 days',
        body: 'Citizens of 57 countries — including the United States, Indonesia and Vietnam — can stay up to 240 hours in designated regions while travelling on to a third country or region. Hong Kong and Macao count as third regions.',
        points: [
          'You need a confirmed onward ticket to a third country or region within 240 hours.',
          'Entry is through designated ports, and you must stay within the permitted provinces.',
          'Enough time for many check-ups, consultations and second opinions.',
        ],
      },
      {
        title: 'S2 visa for medical treatment',
        badge: 'Planned treatment',
        body: 'For planned treatment, longer stays, or passports without visa-free access, the usual route is an S2 (short-term private affairs) visa supported by a hospital’s invitation or admission letter.',
        points: [
          'Typical documents: passport, application form, photo, and a hospital letter stating the diagnosis, planned treatment, duration and estimated cost. Proof of funds may be requested.',
          'S2 covers stays of up to 180 days. Longer treatment requires an S1 visa and a residence permit.',
          'Accompanying family members can apply with proof of relationship.',
          'Once your treatment plan is confirmed, we help you obtain the hospital letter.',
        ],
      },
      {
        title: 'If treatment takes longer than planned',
        badge: 'Extensions',
        body: 'You can apply to the local Exit-Entry Administration for an extension or a stay permit before your current permission expires, supported by a certificate from your hospital.',
        points: ['Apply at least seven days before your permitted stay ends.'],
      },
    ],
    arrival: {
      title: 'Online arrival card',
      body: 'Since 20 November 2025, foreign travellers can complete the arrival card online before landing — on the National Immigration Administration (NIA) website, in the “NIA 12367” app, or in its WeChat and Alipay mini-programs. You can also complete it on arrival.',
    },
    checklist: {
      title: 'Before you fly',
      items: [
        'Passport valid for at least six months, with blank pages',
        'Appointment confirmation or hospital invitation letter (printed)',
        'Medical records and imaging, translated into English or Chinese',
        'Prescription medicines in original packaging, with a doctor’s letter',
        'Travel and medical insurance details',
        'Accommodation address and a local contact number',
        'An international card, plus Alipay or WeChat Pay set up',
        'Return or onward ticket',
      ],
    },
    links: {
      nia: 'National Immigration Administration',
      visaCenter: 'Chinese Visa Application Service Center',
      arrivalCard: 'Online arrival card',
    },
    disclaimer: 'Visa rules change and are applied by the authorities case by case. We are not a visa agency and cannot guarantee entry. The country lists and dates above are summaries; the official announcements prevail.',
  },
  costs: {
    title: 'Costs & payment',
    intro: 'International patients pay privately in China. Prices in international departments and private hospitals are higher than local public rates, yet often well below private prices in the United States and other high-cost markets.',
    table: {
      title: 'Indicative price ranges',
      caption: 'Approximate ranges in US dollars, compiled from public reports in 2026. They are not quotations — the written estimate from your hospital is what counts.',
      service: 'Service',
      range: 'Indicative range in China',
      note: 'Good to know',
      rows: {
        checkup: {
          name: 'Comprehensive health check-up',
          note: 'Depends on imaging (MRI, CT, PET-CT) and endoscopy add-ons',
        },
        mri: { name: 'MRI scan, one region', note: 'Usually available within days' },
        implant: {
          name: 'Dental implant with crown, per tooth',
          note: 'The implant brand drives the price',
        },
        vision: {
          name: 'Laser vision correction, both eyes',
          note: 'SMILE or LASIK; ICL lenses cost more',
        },
        proton: {
          name: 'Proton or heavy-ion therapy, full course',
          note: 'Varies with tumour type and number of sessions',
        },
        cart: {
          name: 'CAR-T cell therapy',
          note: 'Reported total cost; totals above US$500,000 are commonly reported in the United States',
        },
      },
    },
    pay: {
      title: 'How to pay',
      items: [
        {
          title: 'International cards',
          body: 'Visa and Mastercard are accepted in most international departments and private hospitals.',
        },
        {
          title: 'Alipay and WeChat Pay',
          body: 'Both apps let you link a foreign card after passport verification — ideal for daily expenses. Transaction limits apply, so large bills are usually settled by card or transfer.',
        },
        {
          title: 'Bank transfer',
          body: 'For major treatment, hospitals issue an estimate or pro-forma invoice and accept international wire transfers.',
        },
        {
          title: 'Deposits',
          body: 'Hospitals commonly ask for a deposit before admission. Any unused balance is refunded at discharge.',
        },
      ],
    },
    insurance: {
      title: 'Insurance',
      points: [
        'China’s public health insurance does not cover visitors.',
        'Many private hospitals and some international departments offer direct billing with international insurers; pre-authorisation is usually required.',
        'Otherwise you pay first and claim afterwards. We help you obtain itemised invoices and medical reports in English.',
        'Before you travel, check whether your policy covers planned treatment abroad.',
      ],
    },
    factors: {
      title: 'What shapes your total cost',
      items: [
        'Hospital and ward type (international or VIP ward versus general ward)',
        'Length of stay, and whether a companion travels with you',
        'Imported versus domestic medicines and devices',
        'Interpreter, coordination and accommodation services',
      ],
    },
    fees: {
      title: 'Our fees',
      body: 'Your initial case review is free. Hospital bills are paid directly to the hospital. If you ask us to coordinate your trip, we quote our service fee in writing before you commit to anything.',
    },
  },
  faq: {
    title: 'Frequently asked questions',
    intro: 'Short answers to the questions we hear most. For anything else, write to us.',
    items: [
      {
        q: 'Can foreigners be treated in Chinese hospitals?',
        a: 'Yes. Many leading public hospitals run international medical departments, and private international hospitals serve foreign patients every day. You register with your passport and pay privately.',
      },
      {
        q: 'Will the doctors speak my language?',
        a: 'In international departments and private hospitals many doctors speak English. For other languages, and in general wards, we arrange a medical interpreter who stays with you during consultations.',
      },
      {
        q: 'Do I need a visa?',
        a: 'It depends on your passport and the length of your stay. Many nationalities can enter visa-free for 30 days or use 240-hour transit; for planned or longer treatment an S2 visa with a hospital letter is the usual route. See our visa & entry guide.',
      },
      {
        q: 'How much will it cost?',
        a: 'It depends on the hospital, ward and treatment. Before you travel you receive a written estimate from the hospital. Our costs page shows indicative ranges for common services.',
      },
      {
        q: 'How soon can I be seen?',
        a: 'Check-ups and specialist consultations can usually be arranged within days. Surgery and complex therapies depend on the pre-treatment assessment, but waiting lists are generally short.',
      },
      {
        q: 'What medical records should I send?',
        a: 'A summary of your diagnosis, recent test results, imaging reports (and the image files if available), pathology reports, and a list of current medicines. English or Chinese is best; we can arrange translation from other languages.',
      },
      {
        q: 'Will my insurance pay?',
        a: 'Chinese public insurance does not cover visitors. Some international policies cover treatment in China and some hospitals offer direct billing. Check with your insurer before you travel; we help with the documents you need for a claim.',
      },
      {
        q: 'Is treatment in China safe?',
        a: 'Every country has stronger and weaker hospitals. We work only with licensed institutions and focus on major academic and established private hospitals. No treatment is free of risk, and your doctors will explain the risks and alternatives to you before you consent.',
      },
      {
        q: 'Can a family member travel with me?',
        a: 'Yes, and for surgery or longer treatment we recommend it. Companions can use the same visa-free schemes or apply for a visa alongside you. We help with accommodation near the hospital.',
      },
      {
        q: 'What happens after I go home?',
        a: 'You receive your discharge summary, test results and imaging, translated where needed. We arrange remote follow-up with your treating doctor and can share your records with your doctor at home.',
      },
      {
        q: 'Are you a hospital? Do you give medical advice?',
        a: 'No. YiLu Health is a medical travel coordinator. Diagnosis and treatment decisions are made only by licensed doctors at the hospital that treats you.',
      },
      {
        q: 'Is there anything you do not arrange?',
        a: 'Yes. We do not arrange organ transplants, surrogacy, or therapies that are not approved by Chinese regulators.',
      },
    ],
  },
  contact: {
    title: 'Start your free case review',
    intro: 'Tell us briefly what you need. A coordinator will reply in your language with next steps. Sending this form creates no obligation.',
    form: {
      name: 'Full name',
      email: 'Email',
      phone: 'Phone / WhatsApp (optional)',
      country: 'Country or region of residence',
      treatment: 'What do you need help with?',
      city: 'Preferred city (optional)',
      timeframe: 'When would you like to travel? (optional)',
      message: 'Briefly describe your situation',
      messageHint: 'For example: your diagnosis, treatment so far and what you hope to achieve. Please do not send documents yet — we will give you a secure way to share them.',
      select: 'Please select',
      other: 'Something else / not sure',
      anyCity: 'No preference',
      timeframes: {
        asap: 'As soon as possible',
        month: 'Within a month',
        quarter: 'Within three months',
        exploring: 'Just exploring',
      },
      consent: 'I agree that YiLu Health may use the information I provide, including health information, to answer my inquiry, as described in the privacy notice.',
      privacyLink: 'Privacy notice',
      submit: 'Send inquiry',
      sending: 'Sending…',
      successTitle: 'Thank you — we have received your inquiry.',
      successBody: 'A coordinator will reply by email. If you do not see our message, please check your spam folder.',
      again: 'Send another inquiry',
      errorGeneric: 'We could not send your inquiry. Please try again in a moment.',
      errorValidation: 'Please check the highlighted fields and try again.',
      errorRate: 'Too many attempts. Please wait a few minutes and try again.',
      errorUnavailable: 'The online form is temporarily unavailable. Please contact us directly.',
    },
    aside: {
      title: 'What happens next',
      steps: [
        'A coordinator reads your message and may ask a few questions.',
        'We tell you which records to send and how to share them securely.',
        'You receive specialist feedback, options and a cost estimate.',
      ],
      privacy: 'Your information is used only to answer your inquiry and is shared with a hospital only with your consent.',
      directTitle: 'Prefer to write to us directly?',
      email: 'Email',
      whatsapp: 'WhatsApp',
      wechat: 'WeChat ID',
    },
  },
  legal: {
    title: 'Privacy notice & medical disclaimer',
    updated: 'Last updated: {date}',
    sections: [
      {
        title: 'Medical disclaimer',
        body: 'The content of this website is general information and is not medical advice. It does not replace consultation with a qualified doctor. Do not delay seeking care or disregard professional advice because of something you read here. In an emergency, call your local emergency number.',
      },
      {
        title: 'Our role',
        body: 'YiLu Health is a medical travel coordinator, not a medical institution. We do not diagnose or treat. All medical decisions are made by you and the licensed doctors at the hospital that treats you. We do not guarantee any treatment outcome, visa decision or price.',
      },
      {
        title: 'Information on this site',
        body: 'Visa rules, prices and hospital services change. We review this site regularly, but we cannot guarantee that every detail is current. Official announcements and the written estimate from your hospital always prevail.',
      },
      {
        title: 'What personal information we collect',
        body: 'When you send an inquiry we collect the details you enter: your name, contact details, country, and the health information you choose to describe. We do not ask for medical documents through the website form.',
      },
      {
        title: 'How we use and share it',
        body: 'We use your information only to answer your inquiry and, at your request, to coordinate your care. We share it with hospitals or other service providers only with your consent. We do not sell personal information.',
      },
      {
        title: 'Storage and your rights',
        body: 'We keep inquiry information only as long as needed for the purposes above or as required by law. You may ask us at any time to access, correct or delete your information, or withdraw your consent, by contacting us.',
      },
      {
        title: 'Cookies',
        body: 'This website uses one functional cookie to remember your language choice. It does not use advertising or tracking cookies.',
      },
    ],
  },
  footer: {
    tagline: 'Your coordinator for medical travel to China.',
    explore: 'Explore',
    support: 'Support',
    legal: 'Privacy & disclaimer',
    disclaimer: 'YiLu Health is a medical travel coordinator, not a medical provider. Content on this site is general information, not medical advice.',
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    body: 'The page you are looking for does not exist or has moved.',
    cta: 'Back to the home page',
  },
}

export type Dictionary = typeof en

export default en
