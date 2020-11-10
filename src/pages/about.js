import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";

const AboutPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>About me — {site.siteMetadata.title}</title>
      </Helmet>
    </Layout>
  );
};

export default AboutPage;
