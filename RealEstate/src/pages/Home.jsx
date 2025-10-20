import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      {/* 🧠 SEO META TAGS */}
      <Helmet>
        <title>Nestoria Real Estate | Buy, Rent, and Explore Properties</title>
        <meta
          name="description"
          content="Discover exceptional homes, apartments, and villas in stunning locations. Nestoria helps you find your dream property with ease."
        />
        <meta
          name="keywords"
          content="real estate, buy house, rent apartment, villas, property, Nestoria"
        />
        <meta name="author" content="Nestoria Real Estate" />
        <link rel="canonical" href="https://nestoria.netlify.app/" />

        {/* 🟩 Open Graph (Facebook, LinkedIn, WhatsApp) */}
        <meta property="og:title" content="Nestoria Real Estate" />
        <meta
          property="og:description"
          content="Explore premium properties and beautiful homes for sale and rent."
        />
        <meta property="og:image" content="https://nestoria.netlify.app/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nestoria.netlify.app/" />

        {/* 🐦 Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Nestoria Real Estate" />
        <meta
          name="twitter:description"
          content="Find and explore your next dream home with Nestoria Real Estate."
        />
        <meta
          name="twitter:image"
          content="https://nestoria.netlify.app/og-image.jpg"
        />
      </Helmet>

      {/* 🏠 Page Content */}
      <div className="bg-gradient-to-t from-[#fffbee] to-white">
        <Hero />
      </div>
    </>
  );
};

export default Home;
