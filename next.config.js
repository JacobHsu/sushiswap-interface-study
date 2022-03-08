const defaultTheme = require('tailwindcss/defaultTheme')
const { screens } = defaultTheme

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/sushi-cdn/image/fetch/',
  },
  publicRuntimeConfig: {
    breakpoints: screens,
  },
}

module.exports = nextConfig
