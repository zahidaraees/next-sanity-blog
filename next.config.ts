import { Domain } from "domain";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    // Matches the behavior of `sanity dev` which sets styled-components to use the fastest way of inserting CSS rules in both dev and production. It's default behavior is to disable it in dev mode.
    SC_DISABLE_SPEEDY: "false",
    
  },
};
module.exports = {
  images: {
    domains: ['personal-portfolio-react-nextjs-css.vercel.app'],
  },
};
export default nextConfig;
