/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lasnisistem.com' },
      { protocol: 'https', hostname: 'www.lasnisistem.com' },
      { protocol: 'http', hostname: 'localhost' }
    ],
  },
  async redirects() {
    return [
      // ─── LASNI SISTEM® IN IZPADANJE LAS (iIdMeni=111) ───────────────
      // Glavna stran o lasnem sistemu → domača stran
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '111' }],
        destination: '/sl',
        permanent: true,
      },

      // ─── RAZLIKA MED LASNIM SISTEMOM®, LASULJAMI IN TUPEJI (iIdMeni=117) ──
      // Primerjalna stran → blog članek z enako vsebino
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '117' }],
        destination: '/sl/blog/hollywood-lasni-sistem-lasulje-in-tupeji',
        permanent: true,
      },

      // ─── NAKUP IN FINANCIRANJE (iIdMeni=80) ─────────────────────────
      // Nakupne informacije → svetovalni studio (kjer se konzultacija in nakup izvede)
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '80' }],
        destination: '/sl/svetovalni-studio',
        permanent: true,
      },

      // ─── MNENJA STRANK (iIdMeni=82) ─────────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '82' }],
        destination: '/sl/mnenja-strank',
        permanent: true,
      },

      // ─── POGOSTA VPRAŠANJA IN ODGOVORI (iIdMeni=122) ────────────────
      // FAQ stran → blog članek z FAQ vsebino
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '122' }],
        destination: '/sl/blog/pogosta-vprasanja-in-odgovori',
        permanent: true,
      },

      // ─── NEGA IN VZDRŽEVANJE (iIdMeni=162) ──────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '162' }],
        destination: '/sl/blog/nega-in-vzdrzevanje-lasnega-sistema',
        permanent: true,
      },

      // ─── PRAVNO ZAŠČITENO IME LASNI SISTEM (iIdMeni=128) ────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '128' }],
        destination: '/sl/pravno-obvestilo',
        permanent: true,
      },

      // ─── ČLANKI O IZPADANJU LAS IN LASNEM SISTEMU (iIdMeni=136) ─────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '136' }],
        destination: '/sl/blog',
        permanent: true,
      },

      // ─── IZPADANJE LAS – IZGUBA LAS – PLEŠAVOST (iIdMeni=83) ────────
      // Ključna pillar stran za SEO → blog članek z enako vsebino
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '83' }],
        destination: '/sl/blog/izpadanje-las-izguba-las-plesavost',
        permanent: true,
      },

      // ─── ALOPECIA AREATA (iIdMeni=84) ────────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '84' }],
        destination: '/sl/blog/alopecia-areata',
        permanent: true,
      },

      // ─── NAAF (iIdMeni=85) ───────────────────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '85' }],
        destination: '/sl/blog/naaf-national-alopecia-areata-foundation',
        permanent: true,
      },

      // ─── HOLLYWOOD LASNI HYBRID (iIdMeni=193) ────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '193' }],
        destination: '/sl/hibridni-sistemi',
        permanent: true,
      },

      // ─── MOŠKI LASNI HIBRID (iIdMeni=168) ────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '168' }],
        destination: '/sl/hibridni-sistemi',
        permanent: true,
      },

      // ─── ŽENSKI LASNI HIBRID (iIdMeni=170) ───────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '170' }],
        destination: '/sl/hibridni-sistemi',
        permanent: true,
      },

      // ─── ITECH SPREJ (iIdMeni=133) ───────────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '133' }],
        destination: '/sl/blog/itech-sprej-za-svez-videz-in-sijoce-lase',
        permanent: true,
      },

      // ─── POSLANSTVO / KDO SMO (iIdMeni=87) ──────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '87' }],
        destination: '/sl/poslanstvo',
        permanent: true,
      },

      // ─── SKUPINA ZA SAMOPOMOČ (iIdMeni=86) ───────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '86' }],
        destination: '/sl/blog/skupina-za-samopomoc',
        permanent: true,
      },

      // ─── KJE SMO (iIdMeni=88) ────────────────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '88' }],
        destination: '/sl/svetovalni-studio',
        permanent: true,
      },

      // ─── KONTAKT (iIdMeni=89) ─────────────────────────────────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '89' }],
        destination: '/sl/kontakt',
        permanent: true,
      },

      // ─── O IZPADANJU LAS NA RTV SLOVENIJA (iIdMeni=119) ──────────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '119' }],
        destination: '/sl/mediji',
        permanent: true,
      },

      // ─── PRAVNO OBVESTILO – NAKUP ALI VRAČILO (iIdMeni=147) ──────────
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '147' }],
        destination: '/sl/pravno-obvestilo',
        permanent: true,
      },

      // ─── PRAVNO OBVESTILO – STRIŽENJE IN OBLIKOVANJE (iIdMeni=207) ───
      {
        source: '/index.php',
        has: [{ type: 'query', key: 'iIdMeni', value: '207' }],
        destination: '/sl/pravno-obvestilo',
        permanent: true,
      },

      // ─── CATCH-ALL: vse preostale /index.php zahteve → domača stran ──
      // (mora biti ZADNJE pravilo)
      {
        source: '/index.php',
        destination: '/sl',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
