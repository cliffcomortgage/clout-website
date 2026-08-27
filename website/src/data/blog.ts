/**
 * Clout blog metadata — single source of truth for the /resources/blog/ index
 * and individual /resources/blog/{slug}/ post pages.
 *
 * Categories are scoped to Clout's actual products (wholesale Non-QM + DTI):
 *  - For Brokers — wholesale-channel-specific content (unique to Clout's voice)
 *  - Investors — DSCR, BRRRR, cash-flow underwriting
 *  - Self-Employed — Bank Statement, P&L Only
 *  - Freelancers — 1099 Only
 *  - Foreign Nationals — non-US-citizen DSCR
 */

import { SITE } from './site';

export type BlogCategory =
  | 'For Brokers'
  | 'Investors'
  | 'Self-Employed'
  | 'Freelancers'
  | 'Foreign Nationals';

export type BlogPostMeta = {
  slug: string;
  title: string;
  description: string;
  category: BlogCategory;
  datePublished: string; // ISO YYYY-MM-DD
  dateModified: string;  // ISO YYYY-MM-DD
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  'For Brokers',
  'Investors',
  'Self-Employed',
  'Freelancers',
  'Foreign Nationals',
];

export const BLOG_POSTS: BlogPostMeta[] = [
  // For Brokers — wholesale-channel
  {
    slug: 'place-first-non-qm-file-clout',
    title: 'How to Place Your First Non-QM File With Clout',
    description:
      'A practical field guide for mortgage brokers placing their first Non-QM file with Clout: scenario, submission, conditions, and clear-to-close. Six concrete steps and a checklist.',
    category: 'For Brokers',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  {
    slug: 'dscr-files-stuck-underwriting',
    title: 'DSCR Files Stuck in Underwriting: The Six Causes and How to Avoid Them',
    description:
      'DSCR submissions stall in underwriting for predictable reasons: lease comps, entity vesting, reserves, appraisal scope, condo questionnaires, and DSCR math. Here is the field-tested fix for each.',
    category: 'For Brokers',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  // Investors
  {
    slug: 'dscr-loans-real-estate-investors',
    title: 'DSCR Loans for Real Estate Investors: How the Property Qualifies, Not You',
    description:
      'DSCR loans qualify the property, not your tax return. Here is the underwriting logic, the DSCR math, the typical LTV and FICO ranges, and what to do before you apply.',
    category: 'Investors',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  {
    slug: 'conventional-vs-dscr-investment-property',
    title: 'Conventional Loan vs DSCR Loan for Investment Property: Which Actually Fits',
    description:
      'A side-by-side comparison of conventional and DSCR investment-property loans: income documentation, LTV caps, rates, property-count limits, and the cash-flow tradeoff that decides most files.',
    category: 'Investors',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  {
    slug: 'cash-reserves-dscr-loan',
    title: 'Cash Reserves for DSCR Investment Property Loans: What Lenders Actually Require',
    description:
      'Reserves are the requirement first-time investors miss most often. Here is how Clout calculates reserve months, what counts as eligible liquidity, and how to structure your reserves before submission.',
    category: 'Investors',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  {
    slug: 'brrrr-refinance-dscr',
    title: 'BRRRR Refinances With DSCR: How to Pull Equity Without W-2 Income',
    description:
      'The refi leg of the BRRRR cycle is where most investors choose DSCR. Rental cash flow qualifies, not your W-2. Here is the LTV ladder, seasoning rules, and how to size the cash-out before the rehab is done.',
    category: 'Investors',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  // Self-Employed
  {
    slug: 'bank-statement-loans-self-employed',
    title: 'Bank Statement Loans for Self-Employed Borrowers',
    description:
      'A Bank Statement loan qualifies self-employed borrowers using deposits, not Schedule C. Here is how Clout calculates qualifying income from 12 or 24 months of statements, and what disqualifies the file.',
    category: 'Self-Employed',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  {
    slug: 'pl-only-loans-business-owners',
    title: 'P&L Only Loans for Business Owners Who Write Off Heavily',
    description:
      'P&L Only loans use a CPA-prepared profit-and-loss statement instead of tax returns. The right fit for business owners whose Schedule C deductions tank their reported income but whose business actually cash-flows.',
    category: 'Self-Employed',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  // Freelancers
  {
    slug: '1099-only-mortgage-contractors',
    title: '1099 Only Mortgages: How Contractors Qualify Without Schedule C',
    description:
      'A 1099 Only mortgage qualifies on gross 1099 income, not net Schedule C after deductions. For high-earning contractors and gig workers, this is often a 2–3× larger qualifying number than a standard mortgage.',
    category: 'Freelancers',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
  // Foreign Nationals
  {
    slug: 'foreign-national-dscr-loans',
    title: 'Foreign National DSCR Loans: Buying US Rental Property Without a US SSN',
    description:
      'Non-US-citizen investors can buy US rental property through a Foreign National DSCR loan: no US Social Security Number, no US credit history required. Here is the document list, LTV bands, and seasoning rules.',
    category: 'Foreign Nationals',
    datePublished: '2026-05-27',
    dateModified: '2026-05-27',
  },
];

/** Relative path — use for href/anchor attributes (Astro rewrites for base path). */
export const BLOG_PATH = `/resources/blog/`;

/** Absolute URL — use for canonical, schema, og:url, sitemap, etc. */
export const BLOG_ROOT = `${SITE.url}${BLOG_PATH}`;

/** Relative path for a single post — use in `<a href>`. */
export function blogPostPath(slug: string): string {
  return `${BLOG_PATH}${slug}/`;
}

/** Absolute URL for a single post — use in schema, canonical, etc. */
export function blogPostUrl(slug: string): string {
  return `${BLOG_ROOT}${slug}/`;
}
