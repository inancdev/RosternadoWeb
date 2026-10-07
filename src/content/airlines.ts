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

/**
 * Airline landing pages: /airlines/<slug>.html and, where `tr` exists, /tr/airlines/<slug>.html.
 *
 * A page exists only when it has airline-specific copy here. Pages that differ only by
 * the airline's name are doorway pages to Google and can drag down the whole site, so
 * the 15 beta airlines stay on the list page until there is something specific to say.
 *
 * Every claim must be true in the shipped app. Names only — no airline logos (see top).
 */
export interface AirlinePageCopy {
  name: string;
  intro: string;
  points: string[];
}

export interface AirlinePage {
  slug: string;
  code: string;
  tier: 'verified' | 'beta';
  en: AirlinePageCopy;
  /** Only for airlines with a Turkish-speaking crew base. */
  tr?: AirlinePageCopy;
}

export const airlinePages: AirlinePage[] = [
  {
    slug: 'pegasus',
    code: 'PC',
    tier: 'verified',
    en: {
      name: 'Pegasus Airlines',
      intro:
        'Pegasus pilots and cabin crew can import their roster into Rosternado in one tap: open the Pegasus roster website inside the app, sign in and save. Every flight, standby, training day and day off lands in one colour-coded list.',
      points: [
        'Multi-sector days out of Sabiha Gökçen read as one duty card, not three or four separate lines.',
        'Plan a Meetup finds the windows when you and your crew friends are off at the same time, in the same city.',
        "Family at home can follow your roster for free and see when you're flying, landing or home.",
      ],
    },
    tr: {
      name: 'Pegasus Hava Yolları',
      intro:
        "Pegasus pilotları ve kabin ekibi rosterlarını Rosternado'ya tek dokunuşla aktarabilir: Pegasus roster sitesini uygulama içinde açın, giriş yapın ve kaydedin. Tüm uçuşlar, standby'lar, eğitimler ve izin günleri tek, renk kodlu bir listede.",
      points: [
        'Sabiha Gökçen çıkışlı çok sektörlü günler, ayrı ayrı satırlar yerine tek bir görev kartında görünür.',
        'Buluşma planlayıcı, sizin ve ekip arkadaşlarınızın aynı anda, aynı şehirde boş olduğu zamanları bulur.',
        'Evdeki aileniz rosterınızı ücretsiz takip edebilir; ne zaman uçtuğunuzu, indiğinizi ya da evde olduğunuzu görür.',
      ],
    },
  },
  {
    slug: 'turkish-airlines',
    code: 'TK',
    tier: 'verified',
    en: {
      name: 'Turkish Airlines',
      intro:
        'Turkish Airlines pilots and cabin crew can import their roster into Rosternado from the crew roster website, inside the app. Sign in, save, and your month is laid out duty by duty.',
      points: [
        "Friend Radar puts crew friends on a map with their flight and an estimated arrival — handy on a network as wide as Turkish Airlines'.",
        'Your roster is cached on your phone, so it opens with no signal: on a layover, or mid-flight.',
        "Only friends you've accepted can see your schedule. No ads, no analytics, no tracking.",
      ],
    },
    tr: {
      name: 'THY',
      intro:
        "THY pilotları ve kabin ekibi rosterlarını ekip roster sitesinden, uygulama içinde Rosternado'ya aktarabilir. Giriş yapın, kaydedin; ayınız görev görev önünüzde.",
      points: [
        "Friend Radar, ekip arkadaşlarınızı uçuşları ve tahmini varış saatleriyle haritada gösterir — THY'nin geniş ağında çok işe yarar.",
        'Rosterınız telefonunuzda saklanır; sinyal yokken, konaklamada ya da uçuş sırasında bile açılır.',
        'Programınızı yalnızca kabul ettiğiniz arkadaşlar görebilir. Reklam yok, analitik yok, takip yok.',
      ],
    },
  },
  {
    slug: 'ajet',
    code: 'VF',
    tier: 'verified',
    en: {
      name: 'AJet',
      intro:
        'AJet crew can import their roster into Rosternado straight from the crew roster website, inside the app. Sign in, save, and every duty appears in one clean list.',
      points: [
        'Flights, standby, training, days off and leave each get their own colour, so a busy month reads at a glance.',
        "Friend alerts tell you the moment a friend's new roster lands — off by default, switched on per friend.",
        'Re-import whenever your roster changes. The free crew tier includes one import; Pro makes imports unlimited.',
      ],
    },
    tr: {
      name: 'AJet',
      intro:
        "AJet ekipleri rosterlarını ekip roster sitesinden, uygulama içinde doğrudan Rosternado'ya aktarabilir. Giriş yapın, kaydedin; tüm görevler tek, sade bir listede.",
      points: [
        'Uçuş, standby, eğitim, izin günü ve yıllık izin ayrı renklerle gösterilir; yoğun bir ay bile bir bakışta okunur.',
        'Arkadaş bildirimleri, bir arkadaşınızın yeni rosterı yüklendiği anda haber verir — varsayılan olarak kapalıdır, arkadaş bazında açılır.',
        'Rosterınız değiştiğinde yeniden aktarın. Ücretsiz ekip sürümünde bir aktarım var; Pro ile aktarımlar sınırsız.',
      ],
    },
  },
  {
    slug: 'sunexpress',
    code: 'XQ',
    tier: 'verified',
    en: {
      name: 'SunExpress',
      intro:
        'SunExpress pilots and cabin crew can import their roster into Rosternado from the crew roster website, inside the app. Sign in, save, and your duties are parsed and laid out for you.',
      points: [
        'Based in Antalya or Izmir? Plan a Meetup finds the gaps when you and crew friends are off at the same time, in the same place — across bases.',
        'Your roster is cached on the device and opens offline.',
        "Family can follow your roster for free and always know when you're flying, landing, or finally home.",
      ],
    },
    tr: {
      name: 'SunExpress',
      intro:
        "SunExpress pilotları ve kabin ekibi rosterlarını ekip roster sitesinden, uygulama içinde Rosternado'ya aktarabilir. Giriş yapın, kaydedin; görevleriniz ayrıştırılıp sizin için düzenlenir.",
      points: [
        "Antalya ya da İzmir base'li misiniz? Buluşma planlayıcı, sizin ve ekip arkadaşlarınızın aynı anda, aynı yerde boş olduğu aralıkları bulur — farklı base'ler arasında bile.",
        'Rosterınız cihazda saklanır ve çevrimdışı açılır.',
        'Aileniz rosterınızı ücretsiz takip edebilir; ne zaman uçtuğunuzu, indiğinizi ya da sonunda evde olduğunuzu her zaman bilir.',
      ],
    },
  },
  {
    slug: 'air-india',
    code: 'AI',
    tier: 'beta',
    en: {
      name: 'Air India',
      intro:
        "Air India pilots and cabin crew can import their roster into Rosternado from the crew roster website, inside the app. Air India import is in beta: it uses the same CAE crew portal as other airlines Rosternado supports, and we're still confirming it against real Air India rosters.",
      points: [
        'If an import looks wrong, email us — a real example is the fastest way to get a beta airline fixed.',
        'Your roster is cached on the device and opens offline.',
        "Family at home can follow your roster for free and see when you're flying, landing or home.",
      ],
    },
  },
];

export const pageFor = (code: string) => airlinePages.find((p) => p.code === code);
