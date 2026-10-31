'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'tr' | 'en';

interface I18nContextValue {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (trText: string, enText: string) => string;
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'tr',
  setLocale: () => {},
  t: (trText) => trText,
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('tr');

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const params = new URLSearchParams(window.location.search);
    const urlLang = params.get('lang');
    const saved = window.localStorage.getItem('masallah_lang');
    if (urlLang === 'en' || urlLang === 'tr') {
      setLocaleState(urlLang);
    } else if (saved === 'en' || saved === 'tr') {
      setLocaleState(saved);
    }
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('masallah_lang', next);
    }
  }

  function t(trText: string, enText: string) {
    return locale === 'tr' ? trText : enText;
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

/**
 * 46 Ana Kaynağın Türkçe Açıklama ve Kullanım Amaçları Sözlüğü
 */
export const SOURCE_TR_DESCRIPTIONS: Record<string, { desc: string; purpose: string; categoryTr: string }> = {
  'inspora': {
    categoryTr: 'Görsel Tasarım',
    desc: 'Çağdaş web tasarımları, editoryal tipografi eşleşmeleri, güçlü renk paletleri ve sanat yönetimi (art direction) için küratörlü görsel ilham arşivi.',
    purpose: 'Görsel referanslar, layout fikirleri, tipografi ve renk kullanımı'
  },
  'recent-design': {
    categoryTr: 'Görsel Tasarım',
    desc: 'Yeni yayınlanan dijital ürünleri, stüdyo portfolyolarını ve güncel landing page trendlerini kronolojik olarak sunan modern tasarım vitrini.',
    purpose: 'Güncel web tasarım trendleri, çağdaş UI yaklaşımları ve landing page örnekleri'
  },
  'lapa-ninja': {
    categoryTr: 'Landing Page',
    desc: '6.000+ SaaS, AI ve geliştirici aracı landing page tasarımını, dönüşüm (conversion) odaklı bölüm yapılarını ve sayfa akışlarını derleyen galeri.',
    purpose: 'Landing page örnekleri, section tasarımları ve conversion odaklı referanslar'
  },
  'minimal-gallery': {
    categoryTr: 'Minimalist Tasarım',
    desc: 'İsviçre (Swiss) grid sistemi, negatif boşluk kullanımı ve yalın tipografiye dayalı minimalist web sitelerini seçen editoryal galeri.',
    purpose: 'Minimalist web tasarımı, editoryal layout ve temiz görsel sistemler'
  },
  'uiguana': {
    categoryTr: 'Ürün Arayüzü (UI)',
    desc: 'SaaS uygulama ekranları, çok adımlı onboarding akışları, boş/yükleniyor/hata durumları (multi-state UI) ve kontrol paneli kalıpları referansı.',
    purpose: 'UI örnekleri, interface patternleri ve ürün tasarımı referansları'
  },
  'nngroup': {
    categoryTr: 'Kullanıcı Deneyimi (UX)',
    desc: 'Jakob Nielsen’in 10 Kullanılabilirlik Heuristiği, göz izleme araştırmaları, bilgi mimarisi ve kanıta dayalı etkileşim tasarımı otoritesi.',
    purpose: 'Usability, UX araştırmaları, kullanıcı davranışları ve UX prensipleri'
  },
  'laws-of-ux': {
    categoryTr: 'UX Yasaları',
    desc: 'Fitts Yasası, Hick Yasası, Jakob Yasası ve Doherty Eşiği gibi insan algısını ve arayüz ergonomisini yöneten psikoloji ilkeleri koleksiyonu.',
    purpose: 'UX yasaları, psikoloji prensipleri ve etkileşim tasarımı ilkeleri'
  },
  'design-spells': {
    categoryTr: 'Mikro Etkileşim',
    desc: 'Yazılıma ruh katan yaratıcı mikro etkileşimler, fizik tabanlı buton tepkileri, manyetik imleçler ve sürpriz UI detayları galerisi.',
    purpose: 'Micro-interaction, motion design ve yaratıcı UI davranışları'
  },
  'tympanus-codrops': {
    categoryTr: 'Kreatif Kodlama',
    desc: 'Deneysel WebGL shader geçişleri, 3D kaydırma efektleri ve açık kaynaklı interaktif frontend demoları yayınlayan yaratıcı laboratuvar.',
    purpose: 'Yaratıcı frontend deneyleri, WebGL, geçiş efektleri ve kaynak kodlu demolar'
  },
  'motion-dev': {
    categoryTr: 'Web & React Animasyon',
    desc: 'React ve JavaScript için donanım hızlandırmalı yay (spring) fiziği, FLIP layout geçişleri, scroll animasyonları ve gesture motoru.',
    purpose: 'Web animation, React layout transition, gestures ve motion kalıpları'
  },
  'react-bits': {
    categoryTr: 'Animasyonlu Component',
    desc: 'Modern arayüzlere doğrudan eklenebilen 110+ animasyonlu React bileşeni, kinetik metin efektleri, spotlight kartlar ve WebGL arka planlar.',
    purpose: 'Animasyonlu React bileşenleri, metin efektleri ve yaratıcı UI öğeleri'
  },
  'motion-sites': {
    categoryTr: 'Motion Web Vitrin',
    desc: 'Hareket odaklı modern web sitelerini, kaydırma koreografilerini ve yapay zeka web tasarım prompt şablonlarını bir araya getiren vitrin.',
    purpose: 'Motion odaklı web siteleri, animasyon örnekleri ve tasarım promptları'
  },
  'component-gallery': {
    categoryTr: 'Design System',
    desc: '60+ kurumsal tasarım sisteminin (Polaris, Carbon, Primer, Material) UI bileşenlerini nasıl isimlendirdiğini ve yapılandırdığını karşılaştıran ansiklopedi.',
    purpose: 'UI component karşılaştırmaları, bileşen anatomileri ve tasarım sistemi kalıpları'
  },
  'designsystems-one': {
    categoryTr: 'Design System',
    desc: 'Design token hiyerarşileri, çoklu marka temalandırma, Figma-kod boru hatları ve bileşen yönetişimi üzerine kapsamlı rehber.',
    purpose: 'Design system referansları, token yapıları ve bileşen mimarileri'
  },
  'design-systems-one': {
    categoryTr: 'Design System',
    desc: 'Design token hiyerarşileri, çoklu marka temalandırma, Figma-kod boru hatları ve bileşen yönetişimi üzerine kapsamlı rehber.',
    purpose: 'Design system referansları, token yapıları ve bileşen mimarileri'
  },
  'shadcn-ui': {
    categoryTr: 'React Component',
    desc: 'Radix UI ve Tailwind CSS üzerine kurulu, kaynak kodunu doğrudan projenize kopyalayarak tam kontrol sağlayan erişilebilir bileşen sistemi.',
    purpose: 'Erişilebilir React bileşenleri, açık kaynak kodları ve design system temeli'
  },
  'radix-ui': {
    categoryTr: 'Headless UI',
    desc: 'Klavye navigasyonu, odak yönetimi (focus trap) ve WAI-ARIA uyumluluğunu hazır sunan stilsiz (headless) temel React bileşenleri.',
    purpose: 'Accessible primitives, headless bileşenler ve etkileşim altyapısı'
  },
  'mdn-web-docs': {
    categoryTr: 'Web Standartları',
    desc: 'HTML, CSS, JavaScript, WebGL, View Transitions ve tarayıcı Web API standartları için en kapsamlı açık teknik dokümantasyon.',
    purpose: 'HTML, CSS, JavaScript, Web API ve tarayıcı teknolojileri standartları'
  },
  'ishadeed': {
    categoryTr: 'CSS & Layout Ustalığı',
    desc: 'Ahmad Shadeed’in Container Queries, :has(), Defensive CSS ve duyarlı (responsive) arayüz mimarisi üzerine görsel ve interaktif makaleleri.',
    purpose: 'Modern CSS, responsive tasarım, Defensive CSS ve detaylı UI uygulaması'
  },
  'patterns-dev': {
    categoryTr: 'Frontend Mimarisi',
    desc: 'JavaScript tasarım kalıpları, React render mimarileri (SSR, SSG, Islands, Streaming) ve performans optimizasyonu başucu kaynağı.',
    purpose: 'Frontend mimarisi, tasarım kalıpları, render ve performans stratejileri'
  },
  'google-github-io': {
    categoryTr: 'Mühendislik Standartları',
    desc: 'Google mühendislik ekiplerinin yayınladığı resmi TypeScript, JavaScript, HTML/CSS kodlama standartları ve açık kaynak dokümantasyonları.',
    purpose: 'Google açık kaynak projeleri, kod kalitesi ve mühendislik rehberleri'
  },
  'typescript': {
    categoryTr: 'Tip Güvenliği & Mimari',
    desc: 'Statik tip kontrolü, discriminated union modelleri ve derleme zamanı güvenliği ile ölçeklenebilir mimariler sağlayan JavaScript üst kümesi.',
    purpose: 'TypeScript tip kalıpları, dil standartları ve güvenli frontend mimarisi'
  },
  'testing-library': {
    categoryTr: 'Bileşen Testi',
    desc: 'Uygulama detayları yerine erişilebilir DOM rolleri (getByRole) ve gerçek kullanıcı davranışları üzerinden UI testi yazmayı sağlayan kütüphane.',
    purpose: 'Kullanıcı davranışı odaklı UI testi ve React test kalıpları'
  },
  'playwright': {
    categoryTr: 'E2E Test & Otomasyon',
    desc: 'Chromium, WebKit ve Firefox üzerinde uçtan uca (E2E) test, görsel regresyon karşılaştırması ve otomatik ekran görüntüsü alma çatısı.',
    purpose: 'E2E test, tarayıcı otomasyonu, görsel test ve kalite kontrol'
  },
  'storybook': {
    categoryTr: 'Bileşen Dokümantasyonu',
    desc: 'UI bileşenlerini uygulamadan izole biçimde her durumda (boş, yükleniyor, hata) geliştirmek, belgelemek ve test etmek için standart atölye.',
    purpose: 'Bileşen dokümantasyonu, izole geliştirme ve görsel tasarım sistemi testi'
  },
  'owasp-cheatsheets': {
    categoryTr: 'Uygulama Güvenliği',
    desc: 'XSS engelleme, CSP, CSRF, kimlik doğrulama, gizli anahtar (secret) yönetimi ve güvenli HTTP başlıkları için pratik güvenlik kontrol listeleri.',
    purpose: 'Web güvenliği, XSS/CSRF koruması, secret yönetimi ve güvenli kodlama'
  },
  'pixelfx': {
    categoryTr: 'Piksel VFX & Ajan Becerisi',
    desc: '21 kategoride 244 prosedürel piksel sanat efekti (ateş, buz, büyü, patlama, UI) ve "taslak çiz, render al, incele, iyileştir" döngülü Claude/AI becerisi.',
    purpose: 'Prosedürel piksel efektleri, çift tamponlu (renk+ışık) canvas VFX ve oyun efektleri'
  },
  'remotion': {
    categoryTr: 'React Video Motoru',
    desc: 'React bileşenleri, CSS, Canvas ve Three.js kullanarak kare-hassasiyetinde (frame-deterministic) programatik MP4/WebM videolar üreten motor.',
    purpose: 'React tabanlı programatik video üretimi, zaman çizelgesi ve animasyon'
  },
  'remotion-skills': {
    categoryTr: 'Video Ajan Becerileri',
    desc: 'Kodlama ajanlarının Remotion ile otomatik video, altyazı, 3D harita uçuşu ve kompozisyon üretmesi için resmi AI Agent Skills deposu.',
    purpose: 'Kodlama ajanları için resmi video üretim becerileri ve prompt iş akışları'
  },
  'animejs': {
    categoryTr: 'Timeline & Stagger',
    desc: 'Çok katmanlı zaman çizelgesi (timeline), 2 boyutlu grid stagger dalgaları, SVG çizim/morphing ve yay fiziği sunan hafif JS animasyon motoru.',
    purpose: 'Timeline koreografisi, 2D stagger, SVG ve DOM animasyonu'
  },
  'motion-repo': {
    categoryTr: 'Animasyon Motoru (Repo)',
    desc: 'Motion (eski Framer Motion) kütüphanesinin WAAPI hibrit motorunu ve React layout projeksiyon algoritmalarını barındıran resmi kaynak deposu.',
    purpose: 'UI animasyonu kaynak kodu ve WAAPI/React layout geçiş altyapısı'
  },
  'manim': {
    categoryTr: 'Matematiksel Animasyon',
    desc: '3Blue1Brown tarzı matematiksel denklemler, LaTeX dönüşümleri, algoritmik diyagramlar ve eğitici teknik videolar için Python animasyon motoru.',
    purpose: 'Animasyonlu diyagramlar, matematiksel kanıtlar ve eğitici açıklayıcı videolar'
  },
  'lottie-web': {
    categoryTr: 'Vektör Animasyon',
    desc: 'After Effects animasyonlarını Bodymovin JSON formatında web üzerinde SVG veya Canvas ile yüksek performansta oynatan Airbnb kütüphanesi.',
    purpose: 'Hafif vektör animasyon oynatma, scroll-scrubbing ve web entegrasyonu'
  },
  'mcp-for-blender': {
    categoryTr: 'Blender AI Entegrasyonu',
    desc: 'AI ajanlarının Model Context Protocol (MCP) üzerinden doğrudan Blender sahneleri, 3D modeller, materyaller ve ışıklar oluşturmasını sağlayan köprü.',
    purpose: 'Prompt ile Blender 3D sahne oluşturma, düzenleme ve ajan otomasyonu'
  },
  'threejs': {
    categoryTr: '3D WebGL Motoru',
    desc: 'Web üzerinde 3 boyutlu sahneler, kameralar, PBR materyaller, özel GLSL shaderlar ve interaktif deneyimler oluşturmak için temel 3D kütüphanesi.',
    purpose: '3D sahneler, kamera hareketleri, ışıklandırma, shader ve WebGL örnekleri'
  },
  'three-gpu-pathtracer': {
    categoryTr: 'GPU Path Tracing',
    desc: 'Three.js sahnelerinde gerçekçi küresel aydınlatma (global illumination), kırılma (caustics) ve yumuşak gölgeler üreten BVH hızlandırmalı GPU path tracer.',
    purpose: 'Gerçekçi ışıklandırma, yansıma ve tarayıcı içi GPU path tracing'
  },
  'jolt-physics': {
    categoryTr: '3D Fizik Motoru',
    desc: 'Çok çekirdekli çarpışma (collision), katı cisim (rigid body) ve yumuşak cisim (soft body) fiziğini WebAssembly ile tarayıcıya taşıyan yüksek performanslı motor.',
    purpose: 'Çarpışma fiziği, rigid/soft body simülasyonu ve Three.js fizik entegrasyonu'
  },
  'postprocessing': {
    categoryTr: 'WebGL Post-Processing',
    desc: 'Bloom, alan derinliği (Depth of Field), renk derecelendirme (LUT) ve kromatik sapma efektlerini tek shader geçişinde birleştiren Three.js kütüphanesi.',
    purpose: 'Bloom, depth of field, color grading ve birleştirilmiş WebGL görsel efektleri'
  },
  'three-quarks': {
    categoryTr: 'GPU Parçacık & VFX',
    desc: 'Tek çizim çağrısında (BatchedRenderer) binlerce parçacık, iz (trail), kuvvet alanı ve patlama efekti çalıştıran Three.js VFX motoru.',
    purpose: 'Parçacık sistemleri, iz (trail) efektleri ve 3D görsel efektler'
  },
  'tweakpane': {
    categoryTr: 'Canlı Parametre Paneli',
    desc: 'Shader değişkenlerini, fizik sabitlerini, renkleri ve animasyon hızlarını gerçek zamanlı ince ayarlamak için kompakt kontrol paneli.',
    purpose: 'Canlı sahne kontrolleri, debug panelleri ve gerçek zamanlı parametre ayarı'
  },
  'comfyui': {
    categoryTr: 'Node Tabanlı AI İş Akışı',
    desc: 'Görsel ve video üretim modellerini düğüm (node) grafikleriyle birbirine bağlayan, JSON API üzerinden tekrarlanabilir üretim sağlayan iş akışı motoru.',
    purpose: 'Node tabanlı generative AI iş akışları ve görsel/video üretim boru hatları'
  },
  'cosyvoice': {
    categoryTr: 'Çok Dilli Ses Üretimi',
    desc: 'Doğal vurgu ve duygu kontrolüyle Türkçe dahil çok dilli seslendirme (voice-over) ve sıfır örneklemli ses sentezi üreten açık kaynak sistem.',
    purpose: 'Çok dilli ses üretimi, dublaj ve otomatik video seslendirme akışı'
  },
  'librosa': {
    categoryTr: 'Müzik & Ritim Analizi',
    desc: 'Müzik senkronlu animasyonlar için BPM tempo tespiti, vuruş (beat/onset) yakalama ve frekans analizi yapan standart Python kütüphanesi.',
    purpose: 'Beat detection, tempo analizi ve müzik senkronlu animasyon verisi üretimi'
  },
  'whisperx': {
    categoryTr: 'Kelime Hassasiyetli Altyazı',
    desc: 'Wav2vec2 fonem hizalaması ile konuşmaları milisaniye hassasiyetinde kelime kelime zaman damgalayan ve otomatik altyazı üreten sistem.',
    purpose: 'Kelime seviyesinde altyazı zamanlaması, konuşma metne dökme ve senkronizasyon'
  },
  'obs-studio': {
    categoryTr: 'Ekran Kaydı & Prodüksiyon',
    desc: 'Yüksek kare hızında ekran yakalama, WebGL tarayıcı katmanları ve obs-websocket ile otomatik sahne yönetimi sağlayan açık kaynak stüdyo.',
    purpose: 'Ekran kaydı, sahne yönetimi ve prodüksiyon kayıt boru hattı'
  },
  'lossless-cut': {
    categoryTr: 'Kayıpsız Video Kesme',
    desc: 'Videoları yeniden encode etmeden keyframe sınırlarından saniyeler içinde kayıpsız kesip birleştiren FFmpeg tabanlı hızlı kurgu aracı.',
    purpose: 'Yeniden encoding yapmadan hızlı video kesme ve klip çıkarma'
  },
  'ffmpeg': {
    categoryTr: 'Medya İşleme & Encoding',
    desc: 'Video/ses dönüştürme, sıkıştırma, EBU R128 ses seviyesi dengeleme (-14 LUFS), altyazı gömme ve web yayını optimizasyonu için evrensel motor.',
    purpose: 'Video encoding, sıkıştırma, ses işleme ve medya teslimat komutları'
  }
};
