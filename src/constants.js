import mathAndBusiness from 'src/assets/png/categories/math-and-business.png';
import sciences from 'src/assets/png/categories/sciences.png';
import technicalSkills from 'src/assets/png/categories/technical-skills.png';
import cultureAndHistory from 'src/assets/png/categories/culture-and-history.png';
import arts from 'src/assets/png/categories/arts.png';

export const structuredCategoriesAndSubjects = [
  {
    name: 'Math & Business',
    slug: 'math-and-business',
    image: mathAndBusiness,
    subjects: [
      {
        name: 'Business & Accounting',
        slug: 'math-and-business/business-and-accounting',
      },
      {
        name: 'Computer Sciences',
        slug: 'math-and-business/computer-sciences',
      },
      { name: 'Math', slug: 'math-and-business/math' },
    ],
  },
  {
    name: 'Sciences',
    slug: 'sciences',
    image: sciences,
    subjects: [
      { name: 'Biology & Health', slug: 'sciences/biology-and-health' },
      { name: 'Chemistry', slug: 'sciences/chemistry' },
      { name: 'General Science', slug: 'sciences/general-science' },
      { name: 'Physics', slug: 'sciences/physics' },
    ],
  },
  {
    name: 'Culture & History',
    slug: 'culture-and-history',
    image: cultureAndHistory,
    subjects: [
      {
        name: 'Film & Photography',
        slug: 'culture-and-history/film-and-photography',
      },
      {
        name: 'Language  Arts & Literature',
        slug: 'culture-and-history/language-arts-and-literature',
      },
      {
        name: 'History & Social Studies',
        slug: 'culture-and-history/history-and-social-studies',
      },
    ],
  },
  {
    name: 'Arts',
    slug: 'arts',
    image: arts,
    subjects: [
      { name: 'Performing Arts', slug: 'arts/performing-arts' },
      { name: 'Music & Choir', slug: 'arts/music-and-choir' },
      {
        name: 'Speech Therapy & New Languages',
        slug: 'arts/speech-therapy-and-new-languages',
      },
      { name: 'Occupational Therapy', slug: 'arts/occupational-therapy' },
    ],
  },
  {
    name: 'Technical Skills',
    slug: 'technical-skills',
    image: technicalSkills,
    subjects: [
      { name: 'Life Skills', slug: 'technical-skills/life-skills' },
      {
        name: 'Shop & Construction',
        slug: 'technical-skills/shop-and-construction',
      },
      {
        name: 'Physical Education & Kinesiology',
        slug: 'technical-skills/physical-education-and-kinesiology',
      },
      {
        name: 'Drafting & Design',
        slug: 'technical-skills/drafting-and-design',
      },
    ],
  },
  {
    name: 'Other',
    slug: 'other',
    subjects: [],
  },
];

export const flattenedCategoriesAndSubjects =
  structuredCategoriesAndSubjects.reduce(
    (acc, { name, slug, subjects }) => [
      ...acc,
      { name, slug },
      ...(subjects || []),
    ],
    []
  );

export const categories = structuredCategoriesAndSubjects.map(
  (category) => category.name
);

export const subjects = structuredCategoriesAndSubjects.reduce(
  (acc, category) => [
    ...acc,
    ...category.subjects.map((subject) => subject.name),
  ],
  []
);

export const educations = [
  'Elementary School',
  'Middle School',
  'High School',
  'Undergraduate',
  'Masters',
  'Doctorate',
];

export const levels = [
  'Elementary School',
  'Middle School',
  'High School',
  'College',
  'University',
  'Beginner',
  'Intermediate',
  'Advanced',
];

export const experiences = [
  '0-6 months',
  '6-12 months',
  '1-2 years',
  '3-5 years',
  '6-10 years',
  '10+ years',
];

export const languages = [
  'Afrikaans',
  'Albanian',
  'Arabic',
  'Armenian',
  'Basque',
  'Bengali',
  'Bulgarian',
  'Catalan',
  'Cambodian',
  'Mandarin',
  'Croatian',
  'Czech',
  'Danish',
  'Dutch',
  'English',
  'Estonian',
  'Fiji',
  'Finnish',
  'French',
  'Georgian',
  'German',
  'Greek',
  'Gujarati',
  'Hebrew',
  'Hindi',
  'Hungarian',
  'Icelandic',
  'Indonesian',
  'Irish',
  'Italian',
  'Japanese',
  'Javanese',
  'Korean',
  'Latin',
  'Latvian',
  'Lithuanian',
  'Macedonian',
  'Malay',
  'Malayalam',
  'Maltese',
  'Maori',
  'Marathi',
  'Mongolian',
  'Nepali',
  'Norwegian',
  'Persian',
  'Polish',
  'Portuguese',
  'Punjabi',
  'Quechua',
  'Romanian',
  'Russian',
  'Samoan',
  'Serbian',
  'Slovak',
  'Slovenian',
  'Spanish',
  'Swahili',
  'Swedish',
  'Tamil',
  'Tatar',
  'Telugu',
  'Thai',
  'Tibetan',
  'Tonga',
  'Turkish',
  'Ukrainian',
  'Urdu',
  'Uzbek',
  'Vietnamese',
  'Welsh',
  'Xhosa',
];
