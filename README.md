# YiLu Health · 医路健康

面向外国患者的**来华就医（入境医疗）**多语言网站。帮助国际患者了解在中国可以做什么治疗、去哪些城市和医院、如何入境、大概花费多少，并通过咨询表单提交病例。

> 品牌名 “YiLu / 医路” 是占位品牌，可在 `src/lib/site.ts` 一处修改。

## 功能概览

| 模块 | 说明 |
| --- | --- |
| 多语言 | English、简体中文、Русский、العربية（RTL）、Français、Español、Bahasa Indonesia、Tiếng Việt |
| 语言路由 | 所有页面带语言前缀（`/en`、`/zh`、`/ar` …）；首次访问按浏览器语言自动跳转，手动切换后用 Cookie 记住 |
| 页面 | 首页、诊疗项目、医院与城市、签证与入境、费用与支付、常见问题、联系（咨询表单）、隐私与免责声明、404 |
| 咨询表单 | 前后端校验、蜜罐防机器人、按 IP 限流；通过 Webhook 和/或邮件（Resend）投递，**不在本应用内存储任何数据** |
| SEO | 每页 canonical + hreflang、`sitemap.xml`、`robots.txt`、FAQ 结构化数据（JSON-LD） |
| 无障碍 | 语义化标签、跳转到正文链接、键盘可操作的菜单、`prefers-reduced-motion` 支持 |

## 设计

视觉语言取自**青花瓷**：白底、钴蓝、一枚朱红印章。

- 扁平色块 + 细线网格排版，不使用渐变、阴影和装饰性卡片
- 品牌图形是「医」「路」两个汉字（思源宋体 Black 的矢量轮廓，内嵌为 SVG，任何设备上显示一致）
- 用旅行细节点题：机场三字码（PEK、PVG …）、行程路线式的流程图、可打印的出行清单
- 字体：IBM Plex Sans / Plex Sans Arabic / Plex Mono（随包自托管，不依赖 Google Fonts）；中文使用系统字体

## 技术栈

- [Next.js 16](https://nextjs.org)（App Router，全部页面静态生成）+ React 19 + TypeScript
- Tailwind CSS 4
- 无数据库、无第三方 i18n 库：翻译是带类型约束的 TypeScript 字典，缺少任何一个键都会编译失败

## 快速开始

需要 Node.js 20.9 或更高版本。

```bash
npm install
cp .env.example .env.local   # 按需填写
npm run dev                  # http://localhost:3000
```

其他命令：

```bash
npm run build       # 生产构建
npm run start       # 启动生产服务
npm run lint        # ESLint
npm run typecheck   # 类型检查（同时校验所有语言字典结构一致）
```

## 环境变量

见 `.env.example`。

| 变量 | 作用 |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | 站点正式域名，用于 canonical、hreflang 和 sitemap |
| `NEXT_PUBLIC_CONTACT_EMAIL` / `NEXT_PUBLIC_WHATSAPP` / `NEXT_PUBLIC_WECHAT_ID` | 联系页展示的直接联系方式；留空则不显示 |
| `INQUIRY_WEBHOOK_URL`、`INQUIRY_WEBHOOK_SECRET` | 表单投递方式一：把咨询以 JSON POST 到你的 CRM / n8n / 自建接口 |
| `RESEND_API_KEY`、`INQUIRY_TO_EMAIL`、`INQUIRY_FROM_EMAIL` | 表单投递方式二：通过 Resend 发邮件 |

**注意：** 生产环境必须至少配置一种表单投递方式，否则表单会明确提示“暂不可用”（接口返回 503），而不是假装提交成功。开发环境下未配置时会直接接受提交，便于调试。

## 部署

推荐 Vercel：导入仓库后会自动识别为 Next.js 项目（`vercel.json` 已指定），在项目设置中填好上面的环境变量即可。

也可以部署到任何能运行 Node.js 的环境：`npm run build && npm run start`。

## 如何修改内容

| 想改什么 | 改哪里 |
| --- | --- |
| 品牌名、官方链接、内容核对日期 | `src/lib/site.ts` |
| 各语言文案 | `src/i18n/locales/*.ts`（`en.ts` 是基准结构） |
| 医院名录、城市、机场代码 | `src/data/hospitals.ts` |
| 参考价格 | `src/data/prices.ts` |
| 诊疗项目列表 | `src/data/treatments.ts` + 各语言字典中的 `treatments.items` |
| 颜色、字体、通用样式 | `src/app/globals.css` |

### 新增一种语言

1. 在 `src/i18n/config.ts` 的 `locales` 和 `localeMeta` 中加入语言代码
2. 复制 `src/i18n/locales/en.ts` 为新文件并翻译
3. 在 `src/i18n/dictionaries.ts` 的 `loaders` 中注册

## 目录结构

```
src/
├── app/
│   ├── [locale]/          各语言页面（layout、首页、treatments、hospitals、visa、costs、faq、contact、legal）
│   ├── api/inquiry/       咨询表单接口
│   ├── globals.css        设计系统
│   ├── sitemap.ts / robots.ts / icon.svg
├── components/            页头、页脚、语言切换、表单、品牌图形等
├── data/                  医院、价格、诊疗项目
├── i18n/                  语言配置与 8 个语言字典
├── lib/                   站点配置、SEO、表单校验
└── proxy.ts               按浏览器语言 / Cookie 重定向到对应语言
```

## 上线前必须核对的事项

这个网站的文案是基于 2026 年 11 月的公开信息调研后撰写的**初稿**，上线前请逐项确认：

1. **签证与入境政策**：多数 30 天免签安排公布的有效期到 **2026-12-31**，是否延期需以国家移民管理局公告为准；240 小时过境免签、海南免签的国家数量也可能变化。核对后更新 `src/lib/site.ts` 中的 `contentReviewed`。
2. **价格区间**：`src/data/prices.ts` 中的数字整理自媒体公开报道，不同来源差异很大，仅作量级参考，请用合作医院的实际报价替换。
3. **医院名录**：目前是“国际患者常咨询的知名医院”信息性列表，页面已声明不代表合作关系。确定合作医院后请相应调整。
4. **服务承诺**：文案中的承诺（初步评估免费、提供医疗翻译、协助取得医院邀请函、书面报价等）需与实际运营能力一致。
5. **翻译**：7 种非英语版本均未经母语人士审校，上线前建议请母语者（尤其是阿拉伯语、俄语、越南语、印尼语）通读一遍。
6. **法律合规**：隐私声明是模板，涉及健康信息和跨境传输，需由法务按《个人信息保护法》、GDPR 等适用法规审定；若在中国大陆托管或面向境内推广，还需注意 ICP 备案、医疗广告及互联网医疗信息服务的相关规定。
7. **主体信息**：补充运营主体名称、资质和真实联系方式。

### 调研参考来源

以下来源用于撰写文案（构建环境的网络策略不允许直接打开这些页面，数据取自搜索摘要，**请在上线前逐条复核原文**）：

- 国家卫健委数据（2025 年重点医院国际患者 128 万人次，三年增长 73.6%）：[Sixth Tone](https://www.sixthtone.com/news/1018204)、[People's Daily Online](https://en.people.cn/n3/2026/0909/c90000-20497580.html)
- 行业现状与障碍：[Caixin Global](https://www.caixinglobal.com/2026-02-05/china-draws-more-foreign-patients-but-medical-tourism-is-still-a-niche-102411611.html)、[上海市政府英文网](https://english.shanghai.gov.cn/en-PatientStories/20260204/22f9cf20dd344f309eb638c391d0e381.html)
- 免签国家数量（2026 年 2 月，79 国）：[AP via WTOP](https://wtop.com/world/2026/02/china-grants-uk-and-canada-visa-free-entry-raising-total-to-79-countries)
- 单方面免签延期公告：[中国驻沙特使馆](https://sa.china-embassy.gov.cn/eng/lsfw/202511/t20251104_11746345.htm)
- 240 小时过境免签（57 国）：[国家移民管理局](https://en.nia.gov.cn/n147418/n147468/c217849/content.html)
- 海南免签入境事由（含就医）：[中国驻印尼使馆](https://id.china-embassy.gov.cn/eng/lsqw/zytz/202407/t20240731_11463622.htm)
- 在线入境卡：[中国驻美使馆](https://us.china-embassy.gov.cn/eng/lsfw/zj/qz2021/202512/t20251203_11765346.htm)
- CAR-T 费用对比：[36Kr](https://eu.36kr.com/en/p/3973977153532417)

## 许可

「医」「路」字形轮廓来自 [Noto Serif SC](https://github.com/notofonts/noto-cjk)（SIL Open Font License 1.1）。
