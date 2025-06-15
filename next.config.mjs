import withFlowbiteReact from "flowbite-react/plugin/nextjs";

const nextConfig = {
  images: {
    domains: ["festinekt.s3.amazonaws.com"],
  },
};

export default withFlowbiteReact(nextConfig);
