/**
 * Airline support tiers.
 *
 * 19 airlines have a working parser, but only four have ever been verified against a
 * real roster. The other 15 are CAE "Crew Access" tenants inferred from a shared
 * portal. Listing all 19 flatly invites a one-star review from the first Jetstar FO
 * whose page differs — the split is honest and turns the failure case into a support
 * email instead.
 *
 * No airline logo appears anywhere on this site. Airline marks are trademarks of their
 * owners and the app's own licence note prohibits their use in marketing. Names only.
 */

export interface Airline {
  code: string;
  name: string;
}

export const verified: Airline[] = [
  { code: 'PC', name: 'Pegasus' },
  { code: 'VF', name: 'AJet' },
  { code: 'TK', name: 'Turkish Airlines' },
  { code: 'XQ', name: 'SunExpress' },
];

export const beta: Airline[] = [
  { code: 'AI', name: 'Air India' },
  { code: 'G4', name: 'Allegiant' },
  { code: 'AD', name: 'Azul' },
  { code: 'E9', name: 'Iberojet' },
  { code: 'ET', name: 'Ethiopian' },
  { code: 'GA', name: 'Garuda Indonesia' },
  { code: 'HX', name: 'Hong Kong Airlines' },
  { code: 'JL', name: 'Japan Airlines' },
  { code: 'JQ', name: 'Jetstar' },
  { code: 'LS', name: 'Jet2' },
  { code: 'PG', name: 'Bangkok Airways' },
  { code: 'QP', name: 'Akasa Air' },
  { code: 'UL', name: 'SriLankan' },
  { code: 'W6', name: 'Wizz Air' },
  { code: 'A5', name: 'HOP!' },
];

export const betaCaveat =
  "These airlines use the same CAE crew portal, so import should work — but we haven't verified every one yet. If it doesn't, tell us and we'll fix it.";

export const manualNote = 'about 75 more airlines selectable for manual duty entry';

export const requestMailto =
  'mailto:info@rosternado.com?subject=Add%20my%20airline%20to%20Rosternado&body=Airline%20name%3A%20%0ARoster%20website%20URL%3A%20%0A%0A(Please%20attach%20a%20screenshot%20or%20sample%20of%20your%20roster%20page.)%0A';
