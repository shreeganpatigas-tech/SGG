import industrialOxygenImage from "./assets/images/hero/industrial-oxygen.png";
import industrialNitrogenImage from "./assets/images/hero/industrial-nitrogen.png";
import industrialArgonImage from "./assets/images/hero/industrial-argon.png";
import co2Image from "./assets/images/hero/co2.png";
import medicalOxygenImage from "./assets/images/hero/medical-oxygen.png";
import industrialBulkLpgImage from "./assets/images/hero/industrial-bulk-lpg.png";

import hospitalImage from "./assets/images/hero/hospital.png";
import steelImage from "./assets/images/hero/steel.png";
import cementImage from "./assets/images/hero/cement.png";
import metalImage from "./assets/images/hero/metal.png";
import chemicalImage from "./assets/images/hero/chemical.png";
import foodImage from "./assets/images/hero/food.png";

export const PRODUCTS = [
  {
    id: 'oxygen-ind',
    name: 'Industrial Oxygen',
    tagline: 'High purity oxygen for manufacturing and combustion.',
    category: 'Industrial Gas',
    image: industrialOxygenImage,
    purity: '99.5%',
    applications: ['Steel Smelting', 'Metal Fabrication', 'Glass Blowing']
  },
  {
    id: 'nitrogen-ind',
    name: 'Industrial Nitrogen',
    tagline: 'Inert nitrogen for blanketing, purging, and cooling.',
    category: 'Industrial Gas',
    image: industrialNitrogenImage,
    purity: '99.99%',
    applications: ['Chemical Purging', 'Food Packaging', 'Laser Cutting']
  },
  {
    id: 'argon-ind',
    name: 'Industrial Argon',
    tagline: 'Premium shielding gas for arc welding.',
    category: 'Industrial Gas',
    image: industrialArgonImage,
    purity: '99.999%',
    applications: ['TIG/MIG Welding', '3D Printing', 'Metal Fabrication']
  },
  {
    id: 'co2-ind',
    name: 'CO₂',
    tagline: 'Carbon dioxide for industrial cooling and carbonation.',
    category: 'Industrial Gas',
    image: co2Image,
    purity: '99.9%',
    applications: ['Beverage Carbonation', 'Water Treatment', 'Welding']
  },
  {
    id: 'med-oxygen',
    name: 'Medical Oxygen',
    tagline: 'Life-saving oxygen for respiratory therapies.',
    category: 'Medical Gas',
    image: medicalOxygenImage,
    purity: '99.5% IP',
    applications: ['Hospitals', 'Clinics', 'Emergency Response']
  },
  {
    id: 'lpg-bulk',
    name: 'Bulk Commercial LPG',
    tagline: 'High-calorific fuel for industrial heating.',
    category: 'Bulk Fuel',
    image: industrialBulkLpgImage,
    applications: ['Furnace Heating', 'Kiln Operations', 'Boilers']
  }
];

export const INDUSTRIES = [
  {
    id: 'hospitals',
    name: 'Hospitals',
    description: 'Reliable supply of medical-grade gases for critical care, anesthetics, and respiratory therapies.',
    image: hospitalImage,
    gasesUsed: ['Medical Oxygen', 'Nitrous Oxide', 'Medical Air']
  },
  {
    id: 'steel',
    name: 'Steel',
    description: 'High-volume industrial gases for blast furnaces, metal cutting, and smelting operations.',
    image: steelImage,
    gasesUsed: ['Industrial Oxygen', 'Argon', 'Nitrogen']
  },
  {
    id: 'cement',
    name: 'Cement',
    description: 'Stable bulk fuel solutions for high-temperature rotary kilns and continuous production.',
    image: cementImage,
    gasesUsed: ['Bulk LPG', 'Industrial Oxygen']
  },
  {
    id: 'fabrication',
    name: 'Metal Fabrication',
    description: 'Precision shielding gases for advanced welding and structural manufacturing.',
    image: metalImage,
    gasesUsed: ['Argon', 'CO2', 'Oxygen']
  },
  {
    id: 'chemical',
    name: 'Chemical',
    description: 'Inerting and blanketing gases to maintain safe and stable chemical reactions.',
    image: chemicalImage,
    gasesUsed: ['Nitrogen', 'Argon', 'CO2']
  },
  {
    id: 'food',
    name: 'Food',
    description: 'Food-grade gases for packaging, carbonation, and rapid freezing applications.',
    image: foodImage,
    gasesUsed: ['CO2', 'Nitrogen']
  }
];