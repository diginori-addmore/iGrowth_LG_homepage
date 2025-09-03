import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,  // App Router 사용
  },
  // src/app/ 사용 명시
  // src를 루트처럼 취급하도록 설정
  output: 'standalone',
};

export default nextConfig;