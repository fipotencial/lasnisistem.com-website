/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'lasnisistem.com' },
      { protocol: 'https', hostname: 'www.lasnisistem.com' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/sl',
        permanent: true,
      },
      {
        source: '/naaf-national-alopecia-areata-foundation',
        destination: '/sl/blog/naaf-national-alopecia-areata-foundation',
        permanent: true,
      },
      {
        source: '/ru/blog/skupina-za-samopomoc',
        destination: '/ru/blog/support-group',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
