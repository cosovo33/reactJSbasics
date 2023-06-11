import React from "react";
import { Typography, Link } from "@mui/material";

/**
 * Component for displaying information about the artwork app.
 */
const AboutUs = () => {
  return (
    <div>
      <Typography variant="h2" component="h2">About Us</Typography>
      <Typography variant="body1" component="p">
        Welcome to the Artwork App! This app allows you to explore a vast collection of artworks from various artists and departments. With the help of the Artic API, we fetch and display artworks in a paginated table format.
      </Typography>
      <Typography variant="body1" component="p">
        Our goal is to provide art enthusiasts and researchers with an easy-to-use platform to discover and learn about different artworks. Whether you're interested in paintings, sculptures, or any other form of art, our app offers a diverse range of pieces to explore.
      </Typography>
      <Typography variant="body1" component="p">
        Feel free to navigate through the artwork table, adjust the pagination settings, and dive into the rich world of art. We hope this app enhances your art exploration experience and sparks your creativity!
      </Typography>
      <Typography variant="body1" component="p">Happy exploring!</Typography>
      <Typography variant="body1" component="p">
        For more information about the API used in this app, please refer to the{" "}
        <Link
          href="https://api.artic.edu/docs/#quick-start"
          target="_blank"
          rel="noopener noreferrer"
        >
          Art Institute of Chicago API documentation
        </Link>
        .
      </Typography>
    </div>
  );
};

export default AboutUs;
