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
  /** removed from the font request; kept here as a record of what was dropped */
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
  snap: { enabled: boolean; type: 'y proximity' | 'y mandatory'; minWidth: number };
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

export interface WorkProjectImage {
  src: string;
  alt: string;
}

export interface WorkProject {
  client: string;
  /** section anchor: betway | spotify | kenvue */
  id: string;
  theme: 'dark' | 'paper';
  /** imagery column side on desktop; stacked imagery-first on mobile */
  imageSide: 'left' | 'right';
  logo: string;
  logoAlt: string;
  /** betway mark ships black — invert to white on dark bands */
  logoInvert: boolean;
  headline: string;
  body: string;
  linkLabel: string;
  linkHref: string;
  /** static stack, no entrance animation */
  images: WorkProjectImage[];
  delays: { logo: number; headline: number; body: number; link: number };
}

export interface WorkContent {
  id: 'work';
  enabled: boolean;
  eyebrow: string;
  title: string;
  subLines: [string, string];
  delays: { eyebrow: number; title: number; sub: number };
  projects: WorkProject[];
}

export interface StatsContent {
  id: 'stats';
  enabled: boolean;
}

export interface ProcessContent {
  id: 'process';
  enabled: boolean;
}

export interface ContactButton {
  label: string;
  href: string;
  style: 'outline' | 'filled';
}

export interface ContactContent {
  id: 'contact';
  enabled: boolean;
  eyebrow: string;
  title: string;
  portrait: string;
  portraitAlt: string;
  aboutTitle: string;
  body: string;
  buttons: [ContactButton, ContactButton];
  delays: { eyebrow: number; title: number; photo: number; about: number; body: number; buttons: number };
}

export interface FooterContent {
  id: 'footer';
  enabled: boolean;
}

export interface ShowreelContent {
  id: 'showreel';
  enabled: boolean;
  eyebrow: string;
  title: string;
  poster: string;
  posterAlt: string;
  videoId: string;
  delays: { eyebrow: number; title: number };
}

export interface ClientLogo {
  name: string;
  src: string;
  alt: string;
}

export interface ClientsHeaderSegment {
  text: string;
  accent: boolean;
}

export interface ClientsContent {
  id: 'clients';
  enabled: boolean;
  header: {
    eyebrow: string;
    lines: ClientsHeaderSegment[][];
    delays: { eyebrow: number; title: number };
  } | null;
  logos: ClientLogo[];
}

export interface ArticleCard {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  linkLabel: string;
  linkHref: string;
  delay: number;
}

export interface ArticlesContent {
  id: 'articles';
  enabled: boolean;
  eyebrow: string;
  title: string;
  delays: { eyebrow: number; title: number };
  left: [ArticleCard, ArticleCard];
  right: [ArticleCard, ArticleCard];
}

export type SectionContent =
  | HeroContent
  | WhyContent
  | MarqueeContent
  | ServicesContent
  | WorkContent
  | ShowreelContent
  | ClientsContent
  | ArticlesContent
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
      { family: 'Playfair Display', weights: [500, 600], fallback: 'Georgia, serif', usage: 'removed' },
      { family: 'Inter', weights: [400, 500, 600, 700, 800], fallback: 'system-ui, sans-serif', usage: 'removed' },
      { family: 'IBM Plex Mono', weights: [400, 500, 600], fallback: 'monospace', usage: 'removed' },
    ],
    googleFontsUrl:
      'https://fonts.googleapis.com/css2?family=Prata&family=Barlow:wght@400;500;600;700&display=swap',
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
    snap: { enabled: true, type: 'y mandatory', minWidth: 1024 },
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
      projects: [
        {
          client: 'Betway',
          id: 'betway',
          theme: 'dark',
          imageSide: 'left',
          logo: 'images/logo-betway.svg',
          logoAlt: 'Betway',
          logoInvert: true,
          headline: 'LEADING COMPLETE REBRAND',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
          linkLabel: 'PROJECT LINK >',
          linkHref: 'https://www.behance.net/gallery/168940825/Betway-Esports-Evolution',
          images: [
            { src: 'images/betway-1.jpg', alt: 'Betway esports sports bonus banner' },
            { src: 'images/betway-2.jpg', alt: 'Betway watch live in-play banner' },
            { src: 'images/betway-3.jpg', alt: 'Betway Boost enhanced odds banner' },
          ],
          delays: { logo: 0, headline: 0.1, body: 0.2, link: 0.3 },
        },
        {
          client: 'Kenvue',
          id: 'kenvue',
          theme: 'paper',
          imageSide: 'left',
          logo: 'images/logo-kenvue.png',
          logoAlt: 'Kenvue',
          logoInvert: false,
          headline: 'CAMPAIGN CONTENT AND REGIONALIZATION',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
          linkLabel: 'PROJECT LINK >',
          linkHref: 'https://www.behance.net/gallery/249239709/KENVUE-BITES',
          images: [],
          delays: { logo: 0, headline: 0.1, body: 0.2, link: 0.3 },
        },
        {
          client: 'Spotify',
          id: 'spotify',
          theme: 'dark',
          imageSide: 'left',
          logo: 'images/logo-spotify.png',
          logoAlt: 'Spotify',
          logoInvert: false,
          headline: 'SOCIAL MEDIA CONTENT CREATION',
          body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.',
          linkLabel: 'PROJECT LINK >',
          linkHref: 'https://www.behance.net/gallery/249222587/Spotify-Bites-2023',
          images: [
            { src: 'images/spotify-1.jpg', alt: 'Spotify Wrapped top charts tiles' },
            { src: 'images/spotify-2.jpg', alt: 'Spotify Wrapped social and concert tiles' },
            { src: 'images/spotify-3.jpg', alt: 'Spotify Top Songs of 2023 tiles' },
          ],
          delays: { logo: 0, headline: 0.1, body: 0.2, link: 0.3 },
        },
      ],
    },
    {
      id: 'showreel',
      enabled: true,
      eyebrow: '2023',
      title: 'SHOWREEL',
      poster: 'images/showreel-poster.jpg',
      posterAlt: 'Stylized character floating above a glowing magenta phone booth',
      videoId: 'JOVwH2UFHDQ',
      delays: { eyebrow: 0, title: 0.1 },
    },
    { id: 'stats', enabled: false },
    {
      id: 'clients',
      enabled: true,
      header: {
        eyebrow: 'CREATIVE COLLABORATORS',
        lines: [
          [
            { text: 'BRANDS I ', accent: false },
            { text: 'WORKED', accent: true },
            { text: ' WITH AND', accent: false },
          ],
          [
            { text: 'CREATED', accent: true },
            { text: ' WITH', accent: false },
          ],
        ],
        delays: { eyebrow: 0, title: 0.1 },
      },
      logos: [
        { name: 'Oracle', src: 'images/logos/oracle.svg', alt: 'Oracle' },
        { name: 'Sprite', src: 'images/logos/sprite.svg', alt: 'Sprite' },
        { name: 'Kenvue', src: 'images/logos/kenvue.png', alt: 'Kenvue' },
        { name: 'VML', src: 'images/logos/vml.png', alt: 'VML' },
        { name: 'Betway', src: 'images/logos/betway.svg', alt: 'Betway' },
        { name: 'Mondelez International', src: 'images/logos/mondelez.svg', alt: 'Mondelez International' },
        { name: 'Audible', src: 'images/logos/audible.svg', alt: 'Audible' },
        { name: 'Accenture', src: 'images/logos/accenture.svg', alt: 'Accenture' },
        { name: 'Aromat', src: 'images/logos/aromat.png', alt: 'Aromat' },
        { name: 'Spotify', src: 'images/logos/spotify.svg', alt: 'Spotify' },
        { name: 'West Ham United', src: 'images/logos/westham.svg', alt: 'West Ham United' },
        { name: 'BMW', src: 'images/logos/bmw.svg', alt: 'BMW' },
        { name: 'Shell', src: 'images/logos/shell.svg', alt: 'Shell' },
        { name: 'Razer', src: 'images/logos/razer.svg', alt: 'Razer' },
        { name: 'Furia Esports', src: 'images/logos/furia.png', alt: 'Furia Esports' },
        { name: 'G2 Esports', src: 'images/logos/g2.png', alt: 'G2 Esports' },
        { name: 'WPP', src: 'images/logos/wpp.svg', alt: 'WPP' },
        { name: 'Ford', src: 'images/logos/ford.svg', alt: 'Ford' },
        { name: 'Nestle', src: 'images/logos/nestle.svg', alt: 'Nestle' },
        { name: 'Philip Morris International', src: 'images/logos/pmi.svg', alt: 'Philip Morris International' },
        { name: 'Sunglass Hut', src: 'images/logos/sunglass-hut.png', alt: 'Sunglass Hut' },
      ],
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
    {
      id: 'articles',
      enabled: true,
      eyebrow: 'OF COURSE',
      title: 'JUST MORE',
      delays: { eyebrow: 0, title: 0.1 },
      left: [
        {
          title: 'DIRECTING MACHINES',
          body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing dolor mollitia dolor quod temporibus eligendi officia sunt amet possimus exercitation occaecat in id ipsum atque lorem eos maxime qui est culpa non occaecat nostrud illum iusto labore lorem magna fugiat fugiat cillum nostrud in ut placeat eos mollitia veniam atque.',
          image: 'images/article-painting.jpg',
          imageAlt: 'Orange abstract painting with white line work',
          linkLabel: 'PROJECT LINK >',
          linkHref:
            'https://www.linkedin.com/pulse/directing-machines-building-automated-creative-local-bezuidenhout-zzgjf/',
          delay: 0.2,
        },
        {
          title: 'BEHANCE PORTFOLIO',
          body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing dolor mollitia dolor quod temporibus eligendi officia sunt amet possimus exercitation occaecat in id ipsum atque lorem eos maxime qui est culpa non occaecat nostrud illum iusto labore lorem magna fugiat fugiat cillum nostrud in ut placeat eos mollitia veniam atque.',
          image: 'images/article-painting.jpg',
          imageAlt: 'Orange abstract painting with white line work',
          linkLabel: 'PROJECT LINK >',
          linkHref: 'https://www.behance.net/steviebez',
          delay: 0.4,
        },
      ],
      right: [
        {
          title: 'DRIBBBLE',
          body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing dolor mollitia dolor quod temporibus eligendi officia sunt amet possimus exercitation occaecat in id ipsum atque lorem eos maxime qui est culpa non occaecat nostrud illum iusto labore lorem magna fugiat fugiat cillum nostrud in ut placeat eos mollitia veniam atque.',
          image: 'images/article-painting.jpg',
          imageAlt: 'Orange abstract painting with white line work',
          linkLabel: 'PROJECT LINK >',
          linkHref: 'https://dribbble.com/steviebez',
          delay: 0.3,
        },
        {
          title: 'AI WORKFLOW WITH MCP',
          body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing dolor mollitia dolor quod temporibus eligendi officia sunt amet possimus exercitation occaecat in id ipsum atque lorem eos maxime qui est culpa non occaecat nostrud illum iusto labore lorem magna fugiat fugiat cillum nostrud in ut placeat eos mollitia veniam atque.',
          image: 'images/article-painting.jpg',
          imageAlt: 'Orange abstract painting with white line work',
          linkLabel: 'PROJECT LINK >',
          linkHref:
            'https://www.linkedin.com/pulse/developing-real-time-telemetry-dashboard-ltx-video-23-bezuidenhout-5laaf/',
          delay: 0.5,
        },
      ],
    },
    { id: 'process', enabled: false },
    {
      id: 'contact',
      enabled: true,
      eyebrow: 'DETAILS',
      title: 'CONTACT',
      portrait: 'images/portrait.jpg',
      portraitAlt: 'Portrait of Stephan Bezuidenhout',
      aboutTitle: 'ABOUT ME',
      body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit adipiscing dolor mollitia dolor quod temporibus eligendi officia sunt amet possimus exercitation occaecat in id ipsum atque lorem eos maxime qui est culpa non occaecat nostrud illum iusto labore lorem magna fugiat fugiat cillum nostrud in ut placeat eos mollitia veniam atque.',
      buttons: [
        { label: 'RESUME  >', href: 'resume.pdf', style: 'outline' },
        { label: 'CONTACT  >', href: 'mailto:steviebez@gmail.com', style: 'filled' },
      ],
      delays: { eyebrow: 0, title: 0.1, photo: 0.2, about: 0.3, body: 0.35, buttons: 0.4 },
    },
    { id: 'footer', enabled: false },
  ],
} satisfies SiteConfig;
