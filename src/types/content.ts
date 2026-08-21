export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  icon: 'climate' | 'emotional' | 'research' | 'executive';
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

export interface AudienceItem {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export interface IncludedItem {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage: string;
  content: string;
}
