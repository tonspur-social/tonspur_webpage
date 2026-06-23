import { Headphones, ListMusic, Play, Smartphone, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Cover = {
  title: string;
  tag: string;
  meta: string;
  grad: string;
  stars?: number;
};

export type Review = {
  text: string;
  name: string;
  handle: string;
  grad: string;
};

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  grad: string;
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
    icon: Headphones,
    title: 'Tracke jede Folge, nicht nur die Serie.',
    body:
      'Markiere Gehörtes mit einem Tipp. Tonspur merkt sich, bei welcher Folge du stehst - über jede Serie hinweg, auf jedem Gerät.',
    grad: covers[2].grad,
  },
  {
    icon: Star,
    title: 'Bewerte und besprich, wie du wirklich redest.',
    body:
      'Halbe Sterne von ★ bis ★★★★★ und Kritiken in deinen eigenen Worten. Kurz und treffend oder ausführlich und verliebt.',
    grad: covers[5].grad,
    flip: true,
  },
  {
    icon: ListMusic,
    title: 'Kuratiere Listen, entdecke Neues.',
    body:
      '„Beste Gruselnächte“, „Für lange Autofahrten“ - bau Listen, teile sie und finde über die Community dein nächstes Lieblingshörspiel.',
    grad: covers[7].grad,
  },
];

export const reviews: Review[] = [
  {
    text: 'Endlich ein Ort, an dem ich festhalten kann, welche Folge mich mit zehn nachts wachgehalten hat.',
    name: 'Lena',
    handle: '@nachtfunkfan',
    grad: covers[0].grad,
  },
  {
    text: 'Mein komplettes Hörspiel-Archiv aus 20 Jahren - sortiert an einem einzigen Wochenende.',
    name: 'Tobias',
    handle: '@gruft13',
    grad: covers[2].grad,
  },
  {
    text: 'Die halben Sterne sind perfekt. Nicht jede Folge ist einen vollen Punkt wert.',
    name: 'Mira',
    handle: '@hoerschnipsel',
    grad: covers[7].grad,
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
