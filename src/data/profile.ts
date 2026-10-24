// All personal content for the site lives here, so it can be edited in one place.
import home from '../assets/tuck-and-tales/01-home.png';
import library from '../assets/tuck-and-tales/02-story-library.png';
import reading from '../assets/tuck-and-tales/03-read-story.png';
import bedtime from '../assets/tuck-and-tales/06-bedtime-reading.png';
import lkHome from '../assets/lifekeeper/01-home.png';
import lkNewTask from '../assets/lifekeeper/02-new-task.png';
import lkLists from '../assets/lifekeeper/03-shopping-lists.png';
import lkReceipts from '../assets/lifekeeper/04-receipts.png';

export const profile = {
  name: 'Wajeeha',
  title: 'Flutter & Frontend Developer',
  email: 'heyitswajeeha@gmail.com',

  // Shown as a pill in the hero. Set `available: false` when you are booked up.
  availability: {
    available: true,
    label: 'Available for freelance work',
  },

  // The first thing a client reads. Says what you build, for whom.
  headline: 'I build mobile apps that feel good to use.',
  intro:
    'I design and ship cross-platform apps with Flutter, and turn designs into responsive websites. I work with founders and small teams who want something finished, not something half-built.',

  about: [
    'I build mobile apps with Flutter and Dart, and responsive websites with HTML and CSS. Most of my work starts the same way: someone has an idea or a design, and needs it turned into something real that people can actually use.',
    'I care about the details that make an app feel finished — smooth loading, sensible empty states, a layout that holds up on a small phone, and a dark mode that is actually comfortable to read in.',
    'I am also studying for my BSCS degree, which keeps me close to the fundamentals while I build.',
  ],

  // Leave a URL empty ('') and its button/link is hidden automatically.
  socials: [
    { label: 'GitHub', url: '', icon: 'github' },
    { label: 'LinkedIn', url: '', icon: 'linkedin' },
    { label: 'WhatsApp', url: '', icon: 'whatsapp' },
  ],

  // Drop a PDF in public/ and set the path here, e.g. '/wajeeha-cv.pdf'
  resumeUrl: '',
};

// What clients can actually hire you for. Outcomes, not technologies.
export const services = [
  {
    title: 'A Flutter app, built from scratch',
    summary:
      'You have an idea or a design. I turn it into a working app for Android and iOS, ready to publish.',
    deliverables: [
      'One codebase for Android and iOS',
      'Screen-by-screen build from your design',
      'Local storage, search, offline-friendly data',
      'Store-ready build and release help',
    ],
    timeline: 'From 3 weeks',
  },
  {
    title: 'A design, turned into a website',
    summary:
      'Figma, XD or a rough sketch — I build it as a responsive site that looks right on every screen size.',
    deliverables: [
      'Pixel-accurate build from your design',
      'Works on mobile, tablet and desktop',
      'Light and dark mode',
      'Fast-loading, accessible markup',
    ],
    timeline: 'From 1 week',
  },
  {
    title: 'Fixing or finishing an app',
    summary:
      'You already have a Flutter project that is stuck, buggy, or needs one more feature before launch.',
    deliverables: [
      'Bug fixes and crash hunting',
      'New screens or features',
      'UI polish and responsive fixes',
      'A clear write-up of what changed',
    ],
    timeline: 'From a few days',
  },
];

export const projects = [
  {
    slug: 'tuck-and-tales',
    name: 'Tuck & Tales',
    tagline: 'A cosy storybook app for kids',
    // Set to '' to hide the badge.
    status: 'Live on Google Play',
    summary:
      'A Flutter app where children browse, search and read illustrated short stories — with a calm dark mode made for bedtime.',

    // The case study. Problem, what I did, what came out of it.
    problem:
      'Most story apps for young children are busy and loud. They ask for an account before a child can read anything, interrupt stories with ads, and stop working the moment the wifi drops — which is exactly when a bedtime story is needed. I wanted to build the opposite: something quiet that opens straight into a story.',
    approach: [
      'Built one Flutter codebase covering Android and iOS, using Material 3 so the app follows system conventions without looking generic.',
      'Organised 21 illustrated stories into 5 categories, with search and category filters so a child or parent can find something in a few taps.',
      'Saved favourites on the device with shared_preferences, so no account or sign-up is ever needed.',
      'Cached story images with cached_network_image, so a story that has been opened once will open again instantly and without a connection.',
      'Designed a dedicated dark bedtime reading mode with warm, low-contrast colours, rather than just inverting the normal theme.',
    ],
    result:
      'The app is live on Google Play. It opens to a readable story in two taps, works offline once stories are cached, and needs no account at any point.',

    features: [
      '21 illustrated stories across 5 categories',
      'Search and category filters',
      'Favourites saved on the device — no account needed',
      'Dark bedtime reading mode',
      'Cached images for instant, offline re-reads',
    ],
    tech: ['Flutter', 'Dart', 'Material 3', 'shared_preferences', 'cached_network_image'],

    // Empty links stay hidden.
    links: {
      playStore: 'https://play.google.com/store/apps/details?id=com.tuckandtales.app',
      github: '',
      demo: '',
    },

    screenshots: [
      { src: home, alt: 'Tuck & Tales home screen with a featured story' },
      { src: library, alt: 'Story library with search and category filters' },
      { src: reading, alt: 'Story reading screen' },
      { src: bedtime, alt: 'Dark bedtime reading mode' },
    ],
  },
  {
    slug: 'lifekeeper',
    name: 'LifeKeeper',
    tagline: 'A calm, private life organiser',
    // Set to '' to hide the badge.
    status: 'In closed testing on Google Play',
    summary:
      'A Flutter app that keeps tasks, reminders, shopping lists, receipts and important documents in one place — entirely on the device, with no account, ads or tracking.',

    problem:
      'Everyday life admin ends up spread across a to-do app, a notes app, a photo gallery full of receipts and a drawer of documents with expiry dates nobody remembers. Most organiser apps that try to fix this want an account, a subscription and your data on their server, and they are built for power users rather than students, busy households or older relatives. I wanted one calm app that anyone could pick up, that keeps everything private on the phone.',
    approach: [
      'Built one Flutter codebase with five areas — tasks, shopping lists, receipts, documents and settings — and stored everything as local JSON files, so the app works fully offline with no login or server.',
      'Added three modes chosen at first launch: Student (homework, exam countdowns, spending), Everyday (receipts, documents, bills), and Simple, with only three tabs, larger 64 px touch targets, high contrast and a one-tap emergency call.',
      'Scheduled reminders with flutter_local_notifications, including daily, weekly, monthly and yearly repeats, Snooze and Done buttons, expiry reminders for documents, and rescheduling after a reboot or restore.',
      'Localised the app into 7 languages with dates and amounts that follow each locale, and supported about 150 currencies, storing money as whole minor units so different currencies are never added together.',
      'Designed a soft pastel theme with a matching dark mode and a separate high-contrast mode, kept animations small and skipped them when the phone asks for reduced motion, and added one-file .zip backup and restore.',
    ],
    result:
      'The app is complete and in closed testing on Google Play, with production access requested for its public release. It covers a whole household’s everyday admin without ever asking for an account, and is backed by unit and widget tests.',

    features: [
      'Tasks with categories, reminders and repeats',
      'Shopping lists you can share as text',
      'Receipts with photos and monthly spending totals',
      'Document expiry reminders',
      'Student, Everyday and Simple modes',
      '7 languages, ~150 currencies, fully offline',
    ],
    tech: ['Flutter', 'Dart', 'Provider', 'flutter_local_notifications', 'intl / l10n'],

    // Add URLs here when the app leaves closed testing. Empty links stay hidden.
    links: {
      playStore: '',
      github: '',
      demo: '',
    },

    screenshots: [
      { src: lkHome, alt: 'LifeKeeper home screen with upcoming tasks' },
      { src: lkNewTask, alt: 'Creating a task with a category, time and reminder' },
      { src: lkLists, alt: 'Shopping lists with progress bars' },
      { src: lkReceipts, alt: 'Receipts with a monthly spending total' },
    ],
  },
];

// Add entries here and the section appears by itself. One real quote beats none.
// { quote: '...', name: 'Full Name', role: 'Founder, Company' }
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const skills = [
  {
    group: 'Mobile',
    items: ['Flutter', 'Dart', 'Material 3', 'Provider', 'Local notifications', 'Offline-first storage'],
  },
  {
    group: 'App quality',
    items: ['Localisation (7 languages)', 'Accessibility', 'Dark & high-contrast themes', 'Unit & widget tests'],
  },
  {
    group: 'Shipping',
    items: ['Google Play Console', 'App signing', 'Closed testing', 'Production releases'],
  },
  { group: 'Frontend', items: ['HTML', 'CSS', 'Responsive design'] },
  { group: 'Other tools', items: ['Python', 'Unity', 'n8n', 'Git'] },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science (BSCS)',
    status: 'In progress',
  },
];
