import React from "react";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: "Welcome To MyRestaurant",
  description: "We sell the best food at cheap rate",
  keywords: "#foody#yummy#foodlover#tasty ",
};

export default Meta;
