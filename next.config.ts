import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "kc-asesorias-servicios";
const githubBasePath = `/${repoName}`;

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: isGithubPages ? githubBasePath : "",
  },
  ...(isGithubPages && {
    basePath: githubBasePath,
    assetPrefix: `${githubBasePath}/`,
  }),
};

export default nextConfig;
