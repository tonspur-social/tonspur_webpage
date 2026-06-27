import { Play, Smartphone } from 'lucide-react';

export type Cover = {
  title: string;
  tag: string;
  meta: string;
  grad: string;
  stars?: number;
};

export type Feature = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  flip?: boolean;
};

export type Stat = {
  num: string;
  label: string;
};

export const storeBadges = [
  {
    label: 'App Store',
    small: 'Laden im',
    icon: Smartphone,
    envKey: 'VITE_APP_STORE_URL',
  },
  {
    label: 'Google Play',
    small: 'Jetzt bei',
    icon: Play,
    envKey: 'VITE_GOOGLE_PLAY_URL',
  },
] as const;

export const covers: Cover[] = [
  {
    title: 'Nachtfunk',
    tag: 'Mystery',
    meta: 'FOLGE 47 · 41 MIN',
    grad: 'linear-gradient(150deg,#7a2f25,#2a0f0c)',
  },
  {
    title: 'Waldsignal',
    tag: 'Abenteuer',
    meta: 'FOLGE 11 · 36 MIN',
    grad: 'linear-gradient(150deg,#6b5a2f,#231b0d)',
  },
  {
    title: 'Gruft 13',
    tag: 'Horror',
    meta: 'FOLGE 03 · 52 MIN',
    grad: 'linear-gradient(150deg,#5a2233,#1c0a12)',
  },
  {
    title: 'Sturmkap',
    tag: 'Krimi',
    meta: 'FOLGE 21 · 44 MIN',
    grad: 'linear-gradient(150deg,#1f5550,#0c2422)',
  },
  {
    title: 'Silberband',
    tag: 'Sci-Fi',
    meta: 'FOLGE 09 · 50 MIN',
    grad: 'linear-gradient(150deg,#44506f,#111827)',
  },
  {
    title: 'Das Moorlicht',
    tag: 'Fantasy',
    meta: 'FOLGE 07 · 49 MIN',
    grad: 'linear-gradient(150deg,#3e5a2a,#14200d)',
  },
  {
    title: 'Rabenstein',
    tag: 'Thriller',
    meta: 'FOLGE 14 · 47 MIN',
    grad: 'linear-gradient(150deg,#4a2a5a,#170d1f)',
  },
  {
    title: 'Hafen der Stille',
    tag: 'Drama',
    meta: 'FOLGE 05 · 33 MIN',
    grad: 'linear-gradient(150deg,#2a5a64,#0c2226)',
  },
  {
    title: 'Der letzte Zug',
    tag: 'Krimi',
    meta: 'FOLGE 31 · 40 MIN',
    grad: 'linear-gradient(150deg,#9a4422,#331108)',
  },
];

export const heroCovers = [covers[0], covers[3], covers[6], covers[8]].map((cover) => ({
  ...cover,
  stars: 4,
}));

export const stats: Stat[] = [
  { num: '12.400', label: 'Serien im Katalog' },
  { num: '340k', label: 'Folgen getrackt' },
  { num: '½★', label: 'Genaue Wertungen' },
  { num: '100%', label: 'Werbefrei' },
];

export const features: Feature[] = [
  {
    title: 'Entdecke, worauf du heute Lust hast.',
    body:
      'Neue Folgen, beliebte Serien und Community-Favoriten helfen dir, schneller das nächste Hörspiel zu finden.',
    imageSrc: '/feature/entdecken.png',
    imageAlt: 'Tonspur Entdecken-Ansicht mit Suche, neuen Folgen und beliebten Serien.',
  },
  {
    title: 'Behalte deine Bibliothek im Blick.',
    body:
      'Markiere, was du hören willst, was du zuletzt gehört hast und wo du in deinen Serien gerade stehst.',
    imageSrc: '/feature/bibliothek.png',
    imageAlt: 'Tonspur Bibliothek mit Hörwunschliste, zuletzt gehörten Folgen und Serien.',
    flip: true,
  },
  {
    title: 'Sprich über Folgen, nicht nur über Serien.',
    body:
      'Starte Threads, lies Meinungen anderer Fans und halte fest, welche Szene wirklich hängen geblieben ist.',
    imageSrc: '/feature/community.png',
    imageAlt: 'Tonspur Community-Thread mit Diskussion zu einer Hörspielfolge.',
  },
  {
    title: 'Sieh, wie du hörst.',
    body:
      'Tonspur zeigt dir deine Hörzeiten, Muster und Statistiken, ohne dass dein Hörarchiv unübersichtlich wird.',
    imageSrc: '/feature/statistik.png',
    imageAlt: 'Tonspur Profil mit Hörstatistik, Wochenaktivität und Hörmustern.',
    flip: true,
  },
];

export const blogPosts = [
  {
    category: 'Hörgewohnheiten',
    title: 'Warum Folgen ein besseres Tagebuch ergeben als Serien',
    excerpt:
      'Ein Blick darauf, wie kleine Notizen und halbe Sterne aus flüchtigen Hörmomenten eine persönliche Sammlung machen.',
    meta: 'Entwurf · 6 Min Lesezeit',
    grad: covers[3].grad,
    featured: true,
  },
  {
    category: 'Community',
    title: 'Listen für lange Fahrten',
    excerpt: 'Fünf kuratierte Einstiege für Krimi, Grusel und leise Sonntage.',
    meta: 'Platzhalter · Redaktion',
    grad: covers[8].grad,
  },
  {
    category: 'Produkt',
    title: 'Wie halbe Sterne fairer bewerten',
    excerpt: 'Nicht jede starke Folge braucht die volle Wertung. Tonspur lässt Nuancen stehen.',
    meta: 'Platzhalter · Produkt',
    grad: covers[5].grad,
  },
];

export const faqItems = [
  {
    question: 'Was ist Tonspur?',
    answer:
      'Tonspur ist ein geplantes Hörspiel-Tagebuch für Fans. Du trackst Folgen, vergibst Sterne, schreibst kurze Notizen und findest neue Empfehlungen.',
  },
  {
    question: 'Ist Tonspur kostenlos?',
    answer:
      'Die Marketingseite kommuniziert eine kostenlose App. Preise, In-App-Käufe oder Abos müssen vor Launch noch final bestätigt werden.',
  },
  {
    question: 'Wann kommen App Store und Google Play Links?',
    answer:
      'Sobald die App-Einträge freigegeben sind. Bis dahin führen die Buttons zum Download-Bereich der Seite und sind in PLACEHOLDERS.md dokumentiert.',
  },
  {
    question: 'Kann ich echte Coverbilder verwenden?',
    answer:
      'Ja. Die aktuellen Cover sind bewusst abstrakte Gradient-Platzhalter und sollten durch lizenzierte oder eigene Bilder ersetzt werden.',
  },
];
