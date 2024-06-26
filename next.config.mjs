import createNextIntlPlugin from 'next-intl/plugin'
const withNextIntl = createNextIntlPlugin()
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.shutterstock.com' },
      { protocol: 'https', hostname: 'photo.znews.vn' },
      { protocol: 'https', hostname: 'cdn.dribbble.com' },
      { protocol: 'http', hostname: 'res.cloudinary.com' },
      { protocol: 'https', hostname: 'cloudflare-ipfs.com' },
      { protocol: 'http', hostname: 'www.insidewiltshire.co.uk' },
    ],
  },
}
export default withNextIntl(nextConfig)
