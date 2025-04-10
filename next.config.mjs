/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    domains: ["dash.alphaacademy.org.in", "localhost"],
  },

  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|ogv)$/, // Add other video formats if needed
      use: {
        loader: "file-loader",
        options: {
          publicPath: `/_next/static/videos/`,
          outputPath: `${isServer ? "../" : ""}static/videos/`,
          name: "[name].[hash].[ext]",
          esModule: false,
        },
      },
    });
  

    return config;
  },
};

export default nextConfig;
