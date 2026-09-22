/**
 * STEVIEBEZ portfolio — single source of truth.
 *
 * Adjust values here and (once components are wired to it) the site follows.
 * No runtime dependencies: plain data + types only.
 *
 * Currently live sections: hero, why.
 * Remaining sections exist only as disabled stubs until requested.
 */

export interface SiteMeta {
  title: string;
  description: string;
  lang: string;
  siteUrl: string;
  owner: { name: string; role: string; location: string; email: string };
  heroPreload: { as: 'image'; href: string; fetchpriority: 'high' };
}

export interface Palette {
  paper: string;
  ink: string;
  muted: string;
  red: string;
  terra: string;
  green: string;
  dark: string;
  /** readability gradient lives inside hero-art.jpg, not in CSS */
  heroGradientBaked: boolean;
}

export interface FontStack {
  family: string;
  weights: number[];
  fallback: string;
  usage: string;
}

export interface Typography {
  display: FontStack;
  support: FontStack;
  /** older stacks still referenced by not-yet-migrated styles; do not add new usages */
  legacy: FontStack[];
  googleFontsUrl: string;
}

export type SpacingKey =
  | 's4'
  | 's8'
  | 's12'
  | 's16'
  | 's24'
  | 's32'
  | 's48'
  | 's64'
  | 's96'
  | 's128';

export interface Spacing {
  scale: Record<SpacingKey, number>;
  rules: {
    headingToText: string;
    paragraphToParagraph: string;
    relatedComponents: string;
    contentGroups: string;
    sectionToSection: string;
  };
}

export interface Grid {
  /** .wrap width in CSS today */
  contentMaxWidth: number;
  desktop: { columns: 12; outerPad: number; gutter: number };
  tablet: { columns: 8; outerPad: number };
  mobile: { columns: 4; outerPad: number; gutter: number };
  breakpoints: { tablet: number; desktop: number };
}

export interface NavSettings {
  /** settings only — no nav component exists yet */
  desktopHeight: number;
  mobileHeight: number;
  style: string;
}

export type RevealFrom = 'up' | 'left' | 'right';

export interface Animations {
  reveal: {
    enterOffsetY: number;
    exitOffsetY: number;
    slideOffsetX: number;
    opacityMs: number;
    transformMs: number;
    easing: string;
    observerThreshold: number;
  };
  snap: { enabled: boolean; type: 'y proximity'; minWidth: number };
  reducedMotion: string;
}

export interface HeroContent {
  id: 'hero';
  enabled: boolean;
  eyebrow: string;
  nameLines: [string, string];
  skillLines: [string, string, string];
  image: { src: string; alt: string; objectPosition: 'center'; eager: boolean };
  delays: { eyebrow: number; name: number; skills: number };
}

export interface WhyRow {
  label: string;
  img: string;
  alt: string;
  /** text side: 'left' (image right) or 'right' (image left) */
  side: 'left' | 'right';
  from: RevealFrom;
  delay: number;
}

export interface WhyContent {
  id: 'why';
  enabled: boolean;
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  subLines: [string, string];
  delays: { eyebrow: number; title: number; sub: number };
  rows: [WhyRow, WhyRow, WhyRow];
}

/** Disabled stubs — content arrives when each section is requested. */
export interface MarqueeContent {
  id: 'marquee';
  enabled: boolean;
}

export interface ServicesContent {
  id: 'services';
  enabled: boolean;
}

export interface WorkContent {
  id: 'work';
  enabled: boolean;
  eyebrow: string;
  title: string;
  subLines: [string, string];
  delays: { eyebrow: number; title: number; sub: number };
}

export interface StatsContent {
  id: 'stats';
  enabled: boolean;
}

export interface ProcessContent {
  id: 'process';
  enabled: boolean;
}

export interface ContactContent {
  id: 'contact';
  enabled: boolean;
}

export interface FooterContent {
  id: 'footer';
  enabled: boolean;
}

export type SectionContent =
  | HeroContent
  | WhyContent
  | MarqueeContent
  | ServicesContent
  | WorkContent
  | StatsContent
  | ProcessContent
  | ContactContent
  | FooterContent;

export interface SiteConfig {
  meta: SiteMeta;
  palette: Palette;
  typography: Typography;
  spacing: Spacing;
  grid: Grid;
  nav: NavSettings;
  animations: Animations;
  sections: SectionContent[];
}

export const siteConfig = {
  meta: {
    title: 'STEVIEBEZ — Senior Multimedia Designer',
    description: 'Portfolio of Stevie Bezuidenhout — Senior Multimedia Designer.',
    lang: 'en',
    siteUrl: 'https://steviebez-portfolio.netlify.app',
    owner: {
      name: 'Stephan Bezuidenhout',
      role: 'Senior Multimedia Designer',
      location: 'Cape Town, South Africa',
      email: 'steviebez@gmail.com',
    },
    heroPreload: { as: 'image', href: 'images/hero-art.jpg', fetchpriority: 'high' },
  },
  palette: {
    paper: '#faf8f4',
    ink: '#111111',
    muted: '#6f6c66',
    red: '#f04438',
    terra: '#c2704e',
    green: '#63d15e',
    dark: '#101010',
    heroGradientBaked: true,
  },
  typography: {
    display: {
      family: 'Prata',
      weights: [400],
      fallback: 'Georgia, serif',
      usage: 'hero name, section headlines',
    },
    support: {
      family: 'Barlow',
      weights: [400, 500, 600, 700],
      fallback: 'system-ui, sans-serif',
      usage: 'eyebrows, skill lines, labels',
    },
    legacy: [
      { family: 'Playfair Display', weights: [500, 600], fallback: 'Georgia, serif', usage: 'deprecated' },
      { family: 'Inter', weights: [400, 500, 600, 700, 800], fallback: 'system-ui, sans-serif', usage: 'deprecated' },
      { family: 'IBM Plex Mono', weights: [400, 500, 600], fallback: 'monospace', usage: 'deprecated' },
    ],
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Prata&family=Barlow:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,600;1,400;1,500;1,600&family=Inter:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap',
  },
  spacing: {
    scale: { s4: 4, s8: 8, s12: 12, s16: 16, s24: 24, s32: 32, s48: 48, s64: 64, s96: 96, s128: 128 },
    rules: {
      headingToText: '16–24px',
      paragraphToParagraph: '12–16px',
      relatedComponents: '24–32px',
      contentGroups: '32–64px',
      sectionToSection: '64–128px by importance and viewport',
    },
  },
  grid: {
    contentMaxWidth: 1200,
    desktop: { columns: 12, outerPad: 40, gutter: 24 },
    tablet: { columns: 8, outerPad: 32 },
    mobile: { columns: 4, outerPad: 20, gutter: 16 },
    breakpoints: { tablet: 720, desktop: 1024 },
  },
  nav: {
    desktopHeight: 72,
    mobileHeight: 56,
    style: 'visually lightweight, never competes with artwork',
  },
  animations: {
    reveal: {
      enterOffsetY: 26,
      exitOffsetY: -28,
      slideOffsetX: 120,
      opacityMs: 700,
      transformMs: 800,
      easing: 'cubic-bezier(.22,1,.36,1)',
      observerThreshold: 0,
    },
    snap: { enabled: true, type: 'y proximity', minWidth: 1024 },
    reducedMotion: 'force all visible, no transitions',
  },
  sections: [
    {
      id: 'hero',
      enabled: true,
      eyebrow: 'Multimedia Designer',
      nameLines: ['Stephan', 'Bezuidenhout'],
      skillLines: ['Design – Animation', 'AI – Python – Houdini', 'ComfyUI – Agentic'],
      image: { src: 'images/hero-art.jpg', alt: '', objectPosition: 'center', eager: true },
      delays: { eyebrow: 0, name: 0.1, skills: 0.2 },
    },
    {
      id: 'why',
      enabled: true,
      eyebrow: 'Why me?',
      titleBefore: 'Familiar with brand identity and the language of',
      titleAccent: 'design',
      subLines: ['Creating scalable design', 'imagery and visuals'],
      delays: { eyebrow: 0, title: 0.1, sub: 0.2 },
      rows: [
        {
          label: 'Technical Understanding',
          img: 'images/why-technical.jpg',
          alt: 'Monochrome geometric paper study',
          side: 'left',
          from: 'left',
          delay: 0.3,
        },
        {
          label: 'Experience',
          img: 'images/why-experience.jpg',
          alt: 'Red light reflected on wet asphalt',
          side: 'right',
          from: 'right',
          delay: 0.4,
        },
        {
          label: 'Always Learning',
          img: 'images/why-learning.jpg',
          alt: 'Blue foliage at night',
          side: 'left',
          from: 'left',
          delay: 0.5,
        },
      ],
    },
    { id: 'marquee', enabled: false },
    { id: 'services', enabled: false },
    {
      id: 'work',
      enabled: true,
      eyebrow: 'RECENT PROJECTS',
      title: 'PORTFOLIO',
      subLines: [
        'MOTION DESIGN - CAMPAIGN CONTENT - SOCIAL MEDIA',
        'AI IMAGE VIDEO - 3D MOTION - VIDEO EDITING',
      ],
      delays: { eyebrow: 0, title: 0.1, sub: 0.2 },
    },
    { id: 'stats', enabled: false },
    { id: 'process', enabled: false },
    { id: 'contact', enabled: false },
    { id: 'footer', enabled: false },
  ],
} satisfies SiteConfig;
