/**
 * Well-known hospitals that international patients frequently ask about.
 *
 * This is an informational directory, not a list of partners. Only neutral, publicly
 * known facts are recorded here (name, city, ownership type, main specialties).
 * Translated labels for `type` and `tags` live in the dictionaries.
 */

export const cityIds = ['beijing', 'shanghai', 'guangzhou', 'shenzhen', 'hangzhou', 'chengdu', 'hainan'] as const
export type CityId = (typeof cityIds)[number]

/** IATA code of the main international airport serving each destination. */
export const cityAirports: Record<CityId, string> = {
  beijing: 'PEK',
  shanghai: 'PVG',
  guangzhou: 'CAN',
  shenzhen: 'SZX',
  hangzhou: 'HGH',
  chengdu: 'TFU',
  hainan: 'HAK',
}

export type HospitalType = 'public' | 'private' | 'zone'

export type HospitalTag =
  | 'general'
  | 'oncology'
  | 'proton'
  | 'hematology'
  | 'cardio'
  | 'neuro'
  | 'ortho'
  | 'eye'
  | 'dental'
  | 'tcm'
  | 'surgery'
  | 'innovative'
  | 'checkup'

export type Hospital = {
  name: string
  nameZh: string
  type: HospitalType
  tags: HospitalTag[]
}

export const hospitalsByCity: Record<CityId, Hospital[]> = {
  beijing: [
    { name: 'Peking Union Medical College Hospital', nameZh: '北京协和医院', type: 'public', tags: ['general', 'checkup'] },
    { name: 'Fuwai Hospital', nameZh: '中国医学科学院阜外医院', type: 'public', tags: ['cardio'] },
    { name: 'Beijing Tiantan Hospital', nameZh: '北京天坛医院', type: 'public', tags: ['neuro'] },
    { name: 'Cancer Hospital, Chinese Academy of Medical Sciences', nameZh: '中国医学科学院肿瘤医院', type: 'public', tags: ['oncology'] },
    { name: 'Beijing Tongren Hospital', nameZh: '北京同仁医院', type: 'public', tags: ['eye'] },
    { name: 'Beijing Jishuitan Hospital', nameZh: '北京积水潭医院', type: 'public', tags: ['ortho'] },
    { name: "Guang'anmen Hospital", nameZh: '中国中医科学院广安门医院', type: 'public', tags: ['tcm'] },
    { name: 'Beijing United Family Hospital', nameZh: '北京和睦家医院', type: 'private', tags: ['general', 'checkup'] },
  ],
  shanghai: [
    { name: 'Ruijin Hospital', nameZh: '上海交通大学医学院附属瑞金医院', type: 'public', tags: ['hematology', 'general', 'proton'] },
    { name: 'Zhongshan Hospital, Fudan University', nameZh: '复旦大学附属中山医院', type: 'public', tags: ['cardio', 'general'] },
    { name: 'Huashan Hospital, Fudan University', nameZh: '复旦大学附属华山医院', type: 'public', tags: ['neuro', 'general'] },
    { name: 'Fudan University Shanghai Cancer Center', nameZh: '复旦大学附属肿瘤医院', type: 'public', tags: ['oncology'] },
    { name: 'Shanghai Proton and Heavy Ion Center', nameZh: '上海市质子重离子医院', type: 'public', tags: ['proton', 'oncology'] },
    { name: 'Longhua Hospital', nameZh: '上海中医药大学附属龙华医院', type: 'public', tags: ['tcm'] },
    { name: 'Jiahui International Hospital', nameZh: '上海嘉会国际医院', type: 'private', tags: ['general', 'oncology', 'checkup'] },
  ],
  guangzhou: [
    { name: 'Sun Yat-sen University Cancer Center', nameZh: '中山大学肿瘤防治中心', type: 'public', tags: ['oncology'] },
    { name: 'The First Affiliated Hospital, Sun Yat-sen University', nameZh: '中山大学附属第一医院', type: 'public', tags: ['general'] },
    { name: 'Zhongshan Ophthalmic Center', nameZh: '中山大学中山眼科中心', type: 'public', tags: ['eye'] },
    { name: 'Guangdong Provincial Hospital of Chinese Medicine', nameZh: '广东省中医院', type: 'public', tags: ['tcm'] },
  ],
  shenzhen: [
    { name: 'The University of Hong Kong–Shenzhen Hospital', nameZh: '香港大学深圳医院', type: 'public', tags: ['general', 'checkup'] },
  ],
  hangzhou: [
    { name: 'The First Affiliated Hospital, Zhejiang University School of Medicine', nameZh: '浙江大学医学院附属第一医院', type: 'public', tags: ['general', 'hematology'] },
    { name: 'Sir Run Run Shaw Hospital', nameZh: '浙江大学医学院附属邵逸夫医院', type: 'public', tags: ['surgery', 'general'] },
  ],
  chengdu: [
    { name: 'West China Hospital, Sichuan University', nameZh: '四川大学华西医院', type: 'public', tags: ['general', 'surgery'] },
    { name: 'West China Hospital of Stomatology', nameZh: '四川大学华西口腔医院', type: 'public', tags: ['dental'] },
  ],
  hainan: [
    { name: 'Boao Super Hospital', nameZh: '博鳌超级医院', type: 'zone', tags: ['innovative', 'general'] },
    { name: 'Ruijin Hainan Hospital', nameZh: '上海交通大学医学院附属瑞金医院海南医院', type: 'zone', tags: ['innovative', 'oncology'] },
  ],
}
