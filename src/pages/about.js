import React from "react";
import Helmet from "react-helmet";
import Layout from "../components/layout";
import { graphql } from "gatsby";

const AboutPage = ({ data: { site } }) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta
          name="description"
          content={"About page of " + site.siteMetadata.description}
        />
      </Helmet>
    </Layout>
  );
};

export default AboutPage;
export const pageQuery = graphql`
  query AboutPage {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
