/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: {
      displayName: true,
      ssr: true,
    },
  },

  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "aws4": false,
      "snappy": false,
      "@aws-sdk/credential-providers": false,
      "@mongodb-js/zstd": false,
      "kerberos": false
    };

    return config;
  }
}

module.exports = nextConfig
