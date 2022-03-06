import { NextSeo } from "next-seo";

const about = () => {
  const SEO = {
    title: "About page",
    description: "Just your normal about page",

    openGraph: {
      title: "About page",
      description: "Just your normal about page",
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      <h1>I&apos;m an about page</h1>
    </>
  );
};

export default about;
