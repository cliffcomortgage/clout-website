/**
 * Single source of truth for site-wide constants:
 *  - Organization identity (used in JSON-LD schema)
 *  - Product catalog (10 Non-QM programs)
 *  - State catalog (16 licensed states + D.C. with metadata)
 *
 * Per:
 *  - ~/clout-website/seo-aeo-research/01-technical-seo.md (schema)
 *  - ~/clout-website/seo-aeo-research/04-local-seo-territories.md (state data)
 *  - ~/clout-website/seo-aeo-research/05-product-content-strategy.md (product data)
 */

export const SITE = {
  name: 'Clout',
  legalName: 'Clout Wholesale Mortgage Bankers',
  alternateName: ['Clout WMB', 'CloutWMB'],
  url: 'https://cloutwmb.com',
  description:
    'Clout is a wholesale Non-QM mortgage lender and direct-to-investor lender licensed in 16 states and D.C. NMLS #65328. A division of Cliffco Mortgage Bankers.',
  tagline: 'Non-QM lending for brokers and real estate investors.',
  phone: '+1-844-477-3111',
  phoneDisplay: '844-477-3111',
  email: 'PowerUp@CLOUTwmb.com',
  nmlsId: '65328',
  nmlsUrl:
    'https://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/65328',
  parentOrg: {
    name: 'Cliffco Mortgage Bankers',
    url: 'https://cliffcomortgage.com',
  },
  hq: {
    streetAddress: '70 Charles Lindbergh Blvd, Suite 200',
    addressLocality: 'Uniondale',
    addressRegion: 'NY',
    postalCode: '11553',
    addressCountry: 'US',
  },
  social: {
    linkedin: 'https://www.linkedin.com/company/clout',
    facebook: 'https://www.facebook.com/cloutwmb',
  },
} as const;

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  shortDescription: string;
  tier: 1 | 2 | 3 | 4;
  audience: ('investor' | 'broker' | 'self-employed' | 'foreign')[];
  status: 'pillar' | 'stub';
};

export const PRODUCTS: Product[] = [
  {
    slug: 'dscr',
    name: 'DSCR Loan',
    shortName: 'DSCR',
    shortDescription:
      'For real estate investors qualifying on rental cash flow instead of W-2s or tax returns.',
    tier: 1,
    audience: ['investor', 'broker'],
    status: 'pillar',
  },
  {
    slug: 'bank-statement',
    name: 'Bank Statement Loan',
    shortName: 'Bank Statement',
    shortDescription:
      'For self-employed borrowers qualifying on 12 or 24 months of business or personal bank statements.',
    tier: 1,
    audience: ['self-employed', 'broker'],
    status: 'stub',
  },
  {
    slug: '1099-only',
    name: '1099 Only Mortgage',
    shortName: '1099 Only',
    shortDescription:
      'For independent contractors and gig workers qualifying on gross 1099 income, not net Schedule C.',
    tier: 2,
    audience: ['self-employed', 'broker'],
    status: 'stub',
  },
  {
    slug: 'foreign-national',
    name: 'Foreign National Mortgage',
    shortName: 'Foreign National',
    shortDescription:
      'For non-US citizens investing in US real estate, qualifying without a US SSN or credit history.',
    tier: 2,
    audience: ['foreign', 'investor', 'broker'],
    status: 'stub',
  },
  {
    slug: 'asset-qualifier',
    name: 'Asset Qualifier Loan',
    shortName: 'Asset Qualifier',
    shortDescription:
      'For high-net-worth borrowers qualifying on liquid assets instead of W-2 income.',
    tier: 3,
    audience: ['investor', 'broker'],
    status: 'stub',
  },
  {
    slug: 'non-agency-second-home',
    name: 'Non-Agency Second Home',
    shortName: 'Second Home',
    shortDescription:
      'For vacation and second-home buyers needing flexible underwriting outside conforming guidelines.',
    tier: 3,
    audience: ['investor', 'broker'],
    status: 'stub',
  },
  {
    slug: 'pl-only',
    name: 'P&L Only Loan',
    shortName: 'P&L Only',
    shortDescription:
      'For business owners qualifying on a CPA-prepared profit and loss statement.',
    tier: 3,
    audience: ['self-employed', 'broker'],
    status: 'stub',
  },
  {
    slug: 'lite-doc',
    name: 'Lite Documentation Loan',
    shortName: 'Lite Doc',
    shortDescription:
      'For W-2 employees with limited documentation: 1 year W-2 + VOE + YTD paystub.',
    tier: 4,
    audience: ['broker'],
    status: 'stub',
  },
  {
    slug: 'wvoe',
    name: 'Written VOE Only',
    shortName: 'VOE Only',
    shortDescription:
      'Qualify with an employer-completed VOE form: no pay stubs, no tax returns.',
    tier: 4,
    audience: ['broker'],
    status: 'stub',
  },
  {
    slug: 'full-doc',
    name: 'Full Documentation Non-QM',
    shortName: 'Full Doc',
    shortDescription:
      'For borrowers with full documentation who need Non-QM for reasons other than income.',
    tier: 4,
    audience: ['broker'],
    status: 'stub',
  },
];

export type State = {
  slug: string;
  name: string;
  abbr: string;
  hqState?: boolean;
  topMetros: string[];
  topProducts: string[]; // product slugs in priority order
  tier: 1 | 2 | 3;
  spanishPriority: 'critical' | 'high' | 'medium' | 'low';
};

// Confirmed with marketing (2026-08-26) as the complete, exclusive list of licensed
// jurisdictions — replaces the prior NY/NJ/PA/FL/CT/TX set, which was wrong.
// tier and spanishPriority below are first-pass placeholders (not currently rendered
// anywhere in the UI) and should be reviewed by the business before being relied on
// for content-investment decisions; topMetros and topProducts ARE rendered on
// /locations/ pages and were filled in with reasonable defaults pending local input.
export const STATES: State[] = [
  {
    slug: 'colorado',
    name: 'Colorado',
    abbr: 'CO',
    topMetros: ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 2,
    spanishPriority: 'medium',
  },
  {
    slug: 'district-of-columbia',
    name: 'District of Columbia',
    abbr: 'DC',
    topMetros: ['Washington'],
    topProducts: ['dscr', 'bank-statement', 'asset-qualifier', 'foreign-national', '1099-only'],
    tier: 3,
    spanishPriority: 'low',
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    abbr: 'IL',
    topMetros: ['Chicago', 'Naperville', 'Aurora', 'Rockford'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'high',
  },
  {
    slug: 'indiana',
    name: 'Indiana',
    abbr: 'IN',
    topMetros: ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'pl-only', 'asset-qualifier'],
    tier: 2,
    spanishPriority: 'low',
  },
  {
    slug: 'iowa',
    name: 'Iowa',
    abbr: 'IA',
    topMetros: ['Des Moines', 'Cedar Rapids', 'Davenport', 'Iowa City'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'pl-only', 'asset-qualifier'],
    tier: 3,
    spanishPriority: 'low',
  },
  {
    slug: 'kansas',
    name: 'Kansas',
    abbr: 'KS',
    topMetros: ['Wichita', 'Overland Park', 'Kansas City', 'Topeka'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'pl-only', 'asset-qualifier'],
    tier: 3,
    spanishPriority: 'low',
  },
  {
    slug: 'kentucky',
    name: 'Kentucky',
    abbr: 'KY',
    topMetros: ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'pl-only', 'asset-qualifier'],
    tier: 2,
    spanishPriority: 'low',
  },
  {
    slug: 'louisiana',
    name: 'Louisiana',
    abbr: 'LA',
    topMetros: ['New Orleans', 'Baton Rouge', 'Shreveport', 'Lafayette'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 2,
    spanishPriority: 'medium',
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    abbr: 'MI',
    topMetros: ['Detroit', 'Grand Rapids', 'Ann Arbor', 'Lansing'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'medium',
  },
  {
    slug: 'montana',
    name: 'Montana',
    abbr: 'MT',
    topMetros: ['Billings', 'Missoula', 'Bozeman', 'Great Falls'],
    topProducts: ['dscr', 'bank-statement', 'asset-qualifier', '1099-only', 'non-agency-second-home'],
    tier: 3,
    spanishPriority: 'low',
  },
  {
    slug: 'new-york',
    name: 'New York',
    abbr: 'NY',
    hqState: true,
    topMetros: ['New York City', 'Long Island', 'Brooklyn', 'Buffalo'],
    topProducts: ['dscr', 'bank-statement', 'foreign-national', '1099-only', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'high',
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    abbr: 'OH',
    topMetros: ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'low',
  },
  {
    slug: 'oregon',
    name: 'Oregon',
    abbr: 'OR',
    topMetros: ['Portland', 'Eugene', 'Salem', 'Bend'],
    topProducts: ['dscr', 'bank-statement', 'asset-qualifier', '1099-only', 'non-agency-second-home'],
    tier: 2,
    spanishPriority: 'medium',
  },
  {
    slug: 'tennessee',
    name: 'Tennessee',
    abbr: 'TN',
    topMetros: ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'medium',
  },
  {
    slug: 'texas',
    name: 'Texas',
    abbr: 'TX',
    topMetros: ['Houston', 'Dallas-Fort Worth', 'Austin', 'San Antonio', 'El Paso'],
    topProducts: ['dscr', 'bank-statement', '1099-only', 'foreign-national', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'critical',
  },
  {
    slug: 'washington',
    name: 'Washington',
    abbr: 'WA',
    topMetros: ['Seattle', 'Spokane', 'Tacoma', 'Vancouver'],
    topProducts: ['dscr', 'bank-statement', 'foreign-national', '1099-only', 'asset-qualifier'],
    tier: 1,
    spanishPriority: 'medium',
  },
];

export const STATE_ABBRS = STATES.map((s) => s.abbr);
