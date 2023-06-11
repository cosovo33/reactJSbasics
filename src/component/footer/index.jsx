import React from "react";
import { Box, Typography, List, ListItem, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenely",
          alignItems: "flex-start",
          flexDirection:"row",
          
        }}
      >
        <Box sx={{width:"50%"}}>
          <Typography variant="body2" color="textSecondary">
            Linkedin
          </Typography>
          <List sx={{ padding: 0, listStyle: "none" }}>
            <ListItem>
              <Link href="https://www.linkedin.com/in/iheb-yakoubi/">Iheb Yaakoubi</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/karray-ibrahim-07776721a/">Ibrahim Karray</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/amine-zaouga-575120177/">Amine Zaouga</Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/amine-zaouga-575120177/">Artwork Api</Link>
            </ListItem>
          </List>
        </Box>

        <Box>
          <Typography variant="body2" color="textSecondary">
            Useful Links
          </Typography>
          <List sx={{ padding: 0, listStyle: "none" }}>
            <ListItem>
              <Link href="https://github.com/public-apis/public-apis#vehicle" aria-disabled>Public-APIs</Link>{/*Public APIs to help you learn how to codee */}
            </ListItem>
            <ListItem>
              <Link href="https://documentation.image-charts.com/"aria-disabled>Image-Charts</Link> {/*Api we Used to Generate Charts */}
            </ListItem>
            <ListItem>
              <Link href="https://dashboard.ngrok.com/get-started/your-authtoken"aria-disabled>NGROK Doc</Link>
            </ListItem>
            <ListItem>
              <Link href="https://auth0.com/docs"aria-disabled>Auth0 Api</Link>
            </ListItem>
          </List>
        </Box>
      </Box>
      <Typography variant="body2" color="textSecondary">
          © {new Date().getFullYear()} Your Website. All rights reserved.
        </Typography>
    </Box>
  );
};

export default Footer;
