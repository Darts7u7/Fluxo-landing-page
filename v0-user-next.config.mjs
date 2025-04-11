/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'v0.blob.com',
      },
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Desactivar la optimización de CSS para evitar problemas con critters
  experimental: {
    optimizeCss: false,
  },
  webpack: (config, { isServer }) => {
    // Evitar problemas con WasmHash usando hashes alternativos
    config.optimization.moduleIds = 'named';
    
    // Solucionar problema con Sanity schemas
    if (isServer) {
      config.externals.push({
        'utf-8-validate': 'commonjs utf-8-validate',
        'bufferutil': 'commonjs bufferutil',
      });
    }
    
    // Sobreescribir la configuración de hashing para evitar errores con WasmHash
    config.output.hashFunction = 'xxhash64';
    
    return config;
  },
};

export default nextConfig;
