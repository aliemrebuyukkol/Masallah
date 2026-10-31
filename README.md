# Masallah

**Designs, Prompts, Experiments, Repositories & Creative References**

**Live Archive:** [https://nazartesi.com/masallahpub](https://nazartesi.com/masallahpub)  
**GitHub Repository:** [https://github.com/aliemrebuyukkol/Masallah](https://github.com/aliemrebuyukkol/Masallah)  
**Release:** `v1.0.0` (`main`)

---

## 1. Masallah Nedir?

**Masallah**, 46 ana tasarım, UI/UX, motion, kreatif kodlama, 3D/WebGL, ses/video üretim zinciri, test ve güvenlik kaynağını tek bir yaşayan bilgi tabanı ve interaktif web arşivinde birleştiren açık kaynaklı bir katalog ve geliştirici referans sistemidir.

Basit bir yer imi (bookmark) listesi değildir; her kaynak için:
1. **Kaynağın doğrulanmış kimliği ve lisansı** (`data/sources.json`)
2. **Görsel & mimari analizleri** (`Layout`, `Typography`, `Color System`, `Spacing`, `Motion`, `Component Language`)
3. **Nasıl kullanılacağı ve kurulum komutları** (`data/repos.json`)
4. **Minimal, özgün kod örnekleri** (`examples/`)
5. **Orijinal kaynak promptu (Original Prompt)** (`data/prompts.json`)
6. **Masallah için soyutlanmış & optimize edilmiş prompt (Masallah Optimized Prompt)** (`data/prompts.json`)
7. **Tarayıcıda çalışan interaktif canlı demolar (Live Demos)** (`apps/web/src/components/LiveDemoStudio.tsx`)
8. **Kaynakları birbirine bağlayan uçtan uca üretim iş akışları (Workflows)** (`catalog/workflows/`)

bir arada sunulur.

---

## 2. Canlı Arşiv & İstatistikler

- **Production Web Adresi:** [https://nazartesi.com/masallahpub](https://nazartesi.com/masallahpub)
- **Master Sources (Ana Kaynaklar):** `46` (10 ana disiplin kategorisi altında)
- **Unified Catalog Entries (Toplam Katalog Kaydı):** `114`
- **Prompts (Orijinal + Masallah Optimize):** `47`
- **GitHub Repositories:** `35` (`motion.dev` #10 ve `motiondivision/motion` #30 tekil ürün olarak ilişkilendirilmiş ve tekilleştirilmiştir)
- **Designs & Visual Analyses:** `18`
- **Interactive Live Demos & Examples:** `33` (`10` canlı interaktif sandbox)
- **Multi-Tool Connected Workflows:** `4` (`AI Video Pipeline`, `Interactive 3D Pipeline`, `Product UI Pipeline`, `Procedural Pixel VFX Pipeline`)

---

## 3. Kategori ve Bölüm Yapısı

Masallah web uygulaması ve veri modeli 16 ana bölüm ve 28 içerik etiketi (`ContentType`) barındırır:

- **Designs** (`Inspora`, `Recent Design`, `Lapa Ninja`, `Minimal Gallery`)
- **Prompts & Agent Skills** (`Remotion Skills`, `PixelFX Skill`, `MCP for Blender`, `Motion Sites`)
- **UI / UX** (`UI Guana`, `Nielsen Norman Group`, `Laws of UX`)
- **Motion & Interaction** (`Design Spells`, `Tympanus / Codrops`, `Motion`, `React Bits`, `Anime.js`, `Lottie Web`)
- **Components & Design Systems** (`Component Gallery`, `Design Systems One`, `shadcn/ui`, `Radix UI`)
- **Repositories** (35 açık kaynak GitHub projesi)
- **Creative Coding & VFX** (`PixelFX`, `Three.quarks`, `Tympanus / Codrops`)
- **3D & WebGL** (`Three.js`, `Three GPU Pathtracer`, `Jolt Physics`, `postprocessing`, `MCP for Blender`, `Tweakpane`)
- **Video, Audio & Generative AI** (`Remotion`, `Manim`, `ComfyUI`, `CosyVoice`, `librosa`, `WhisperX`, `OBS Studio`, `LosslessCut`, `FFmpeg`)
- **Workflows** (Çoklu araç boru hatları)
- **Frontend Craft** (`MDN Web Docs`, `Ahmad Shadeed`)
- **Architecture & Code Quality** (`Patterns.dev`, `Google GitHub Pages`, `TypeScript`)
- **Testing & QA** (`Testing Library`, `Playwright`, `Storybook`)
- **Security** (`OWASP Cheat Sheet Series`)
- **Resources & Tools**
- **Sources** (`/masallahpub/sources` — 46 kaynağın tamamı ve kapsam matrisi)

---

## 4. Repository Yapısı

```text
Masallah/
│
├── README.md
├── LICENSE
├── THIRD_PARTY_NOTICES.md
├── SOURCE_INDEX.md
├── CONTRIBUTING.md
├── package.json
│
├── apps/
│   └── web/                      # Next.js 15 (TypeScript) Static Export (/masallahpub)
│       ├── src/
│       │   ├── app/              # /, /sources, /prompts, /repos, /demos, /workflows, /item/[slug]
│       │   ├── components/       # ArchiveExplorer, LiveDemoStudio, CatalogCard, CopyPromptButton
│       │   ├── lib/              # Veri katmanı, filtreleme ve OWASP URL doğrulayıcı
│       │   └── __tests__/        # Vitest + Testing Library davranış testleri
│       └── e2e/                  # Playwright E2E ve responsive screenshot testleri
│
├── catalog/
│   ├── designs/                  # Görsel analiz ve soyutlanmış tasarım promptları (.md)
│   ├── prompts/                  # Original & Masallah Optimized prompt dosyaları (.md)
│   ├── projects/                 # Öne çıkan vitrin kayıtları
│   ├── repos/                    # GitHub repository katalog dosyaları (.md)
│   ├── components/               # Component & Design System dizini
│   ├── motion/                   # Motion & Interaction dizini
│   ├── three-d/                  # 3D, WebGL, Shader & VFX dizini
│   ├── video/                    # Video, Audio & Generative AI dizini
│   ├── workflows/                # Çok adımlı üretim iş akışları (.md)
│   └── resources/                # Frontend, Mimari, Test ve Güvenlik kaynakları
│
├── examples/
│   ├── ui/
│   ├── prompts/
│   ├── websites/
│   ├── motion/
│   ├── three-d/
│   ├── video/
│   └── code/
│
├── assets/
│   ├── images/
│   ├── previews/                 # 46 kaynak SVG önizlemesi + Playwright masaüstü/mobil ekran görüntüleri
│   ├── thumbnails/
│   └── icons/
│
├── data/
│   ├── catalog.json              # Birleştirilmiş ana katalog (114 kayıt)
│   ├── prompts.json              # 47 Original + Masallah Optimized prompt
│   ├── sources.json              # 46 ana kaynak kaydı (Source Registry şeması)
│   ├── repos.json                # 35 GitHub repository метаverisi ve örnekleri
│   ├── examples.json             # Canlı demolar, görsel analizler ve iş akışları
│   └── tags.json                 # Kategori, ContentType ve etiket frekans dizini
│
├── scripts/
│   ├── collect/
│   │   ├── discover-sources.mjs  # Canlı HTTP + GitHub API (gh api) keşif betiği
│   │   └── security-scan.mjs     # OWASP pre-commit secret & URL güvenlik tarayıcısı
│   ├── normalize/
│   │   ├── sources-seed.mjs
│   │   ├── prompts-seed.mjs
│   │   ├── workflows-examples-seed.mjs
│   │   ├── build-catalog.mjs     # Veri normalleştirici ve Markdown/SVG üreticisi
│   │   └── validate-catalog.mjs  # Şema ve tekilleştirme (deduplication) doğrulayıcısı
│   └── generate-previews/
│       └── capture-previews.mjs  # Preview ve thumbnail senkronizasyonu
│
└── docs/
    ├── architecture.md
    ├── sources.md
    ├── workflows.md
    └── deployment.md
```

---

## 5. Local Development, Build & Test

### Kurulum

```bash
git clone https://github.com/aliemrebuyukkol/Masallah.git
cd Masallah
npm --prefix apps/web install
```

### Geliştirme Sunucusu

```bash
npm run dev
# http://localhost:3100/masallahpub adresinde açılır
```

### Veri Normalizasyonu, Güvenlik Taraması ve Production Build

```bash
# 1. Katalog JSON, Markdown ve SVG önizlemelerini üret
npm run normalize

# 2. Şema bütünlüğünü ve 46 kaynak kapsamını doğrula
npm run validate

# 3. OWASP gizli anahtar (secret) ve URL protokol taramasını çalıştır
npm run security:scan

# 4. TypeScript kontrolü, Vitest birim testleri ve Next.js statik export derlemesi
npm run typecheck
npm test
npm run build
```

### Playwright E2E Testleri

```bash
npm run test:e2e
```

---

## 6. Deployment (`https://nazartesi.com/masallahpub`)

Web uygulaması `next.config.mjs` içerisinde `output: 'export'` ve `basePath: '/masallahpub'` ile yapılandırılmıştır.
Derlenen statik çıktı (`apps/web/out/`), ana `nazartesi.com` dosyalarına (`index.html`, `masallah.html`, vb.) hiç dokunmadan yalnızca `/masallahpub` alt dizini altına kopyalanır ve Firebase Hosting üzerinden yayınlanır. Ayrıntılar için [`docs/deployment.md`](./docs/deployment.md) dosyasına bakın.

---

## 7. Yeni İçerik Ekleme Rehberi

### Yeni Kaynak Ekleme
1. `scripts/normalize/sources-seed.mjs` içine yeni kaynak nesnesini ekleyin.
2. `npm run normalize && npm run validate` komutlarını çalıştırarak `data/sources.json` ve `SOURCE_INDEX.md` dosyalarını güncelleyin.

### Yeni Prompt Ekleme
1. `scripts/normalize/prompts-seed.mjs` dosyasına hem `originalPrompt` hem de `optimizedPrompt` alanlarını içeren yeni kaydı ekleyin.
2. `npm run normalize` komutuyla `data/prompts.json` ve `catalog/prompts/*.md` çıktısını üretin.

### Yeni Örnek veya Canlı Demo Ekleme
1. `scripts/normalize/workflows-examples-seed.mjs` içerisine örnek kod ve açıklamayı ekleyin.
2. İnteraktif bir demo ise `apps/web/src/components/LiveDemoStudio.tsx` bileşenine yeni sekme modunu ekleyin ve `npm test && npm run build` ile doğrulayın.

---

## 8. Lisans ve Kaynak Atıfları (Licensing & Attribution)

- **Masallah Katalog Mimarisi, Özgün Kod Örnekleri ve Soyutlanmış Promptlar:** [MIT License](./LICENSE)
- **Üçüncü Taraf Kaynaklar ve Açık Kaynak Kütüphaneler:** İndekslenen 46 kaynağın her biri kendi orijinal lisansına ve kullanım koşullarına tabidir. Yeniden dağıtımı kısıtlı olan galeri sitelerinin yalnızca bağlantıları, метаverileri ve soyutlanmış stil analizleri kataloglanmıştır; `ComfyUI` ve `CosyVoice` gibi yapay zeka araçlarının model ağırlık dosyaları (checkpoint) depoya dahil edilmemiştir.
- Tam lisans ve atıf tablosu için [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) ve [`SOURCE_INDEX.md`](./SOURCE_INDEX.md) dosyalarını inceleyin.
