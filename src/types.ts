/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type ActivePage =
  | 'home'
  | 'about'
  | 'products'
  | 'industries'
  | 'infrastructure'
  | 'safety'
  | 'gallery'
  | 'careers'
  | 'contact'
  | 'quote'
  | 'privacy'
  | 'terms';

export interface Product {
  id: string;
  name: string;
  category: 'industrial' | 'medical' | 'specialty' | 'lpg' | 'cryogenic' | 'cylinders';
  tagline: string;
  description: string;
  purity?: string;
  applications: string[];
  industries: string[];
  features: string[];
  safetyInfo: string;
  image: string;
}

export interface Industry {
  id: string;
  name: string;
  tagline: string;
  description: string;
  gasesUsed: string[];
  applications: { title: string; desc: string }[];
  image: string;
}

export interface InfrastructureItem {
  id: string;
  name: string;
  description: string;
  details: string[];
  image: string;
}

export interface CareerOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
