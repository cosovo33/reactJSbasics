import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  List,
  ListItem,
  ListItemText,
  AppBar,
  Toolbar,
  Typography,
  Container,
  InputBase,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Box,
} from "@mui/material";
import ArtworkTable from "../artwork";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StatTabArt from "../artwork/Table/statTab";
import { useAuth0 } from "@auth0/auth0-react";
import AboutUs from "./aboutus";
import ArtworkLineChart from "./chart";
import Footer from "../footer";

const Dashboard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [artworks, setArtworks] = useState([]);
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const [currentPath, setCurrentPath] = useState("/dashboard");

  /**
   * Closes the vertical navigation list and updates the current path.
   * @param {string} path - The new path to set as the current path.
   */
  const handleClose1 = (path) => {
    setCurrentPath(path);
    handleClose();
  };

  /**
   * Handles the click event for the account icon and opens the account menu.
   * @param {Object} event - The click event object.
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * Closes the account menu.
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  /**
   * Handles the login event and redirects the user to the login page.
   */
  const handleLogin = () => {
    loginWithRedirect();
  };

  /**
   * Handles the logout event and logs the user out.
   */
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    handleClose();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (searchQuery !== "") {
          const response = await fetch(
            `https://api.artic.edu/api/v1/artworks/search?q=${searchQuery}`
          );
          const data = await response.json();
          const artworkObjects = data.data || []; // Retrieve the artwork objects
          const artworkIds = artworkObjects.map((artwork) => artwork.id); // Extract the artwork IDs
          const idsString = artworkIds.join(","); // Create a comma-separated string of IDs

          // Fetch the artworks using the IDs
          const artworksResponse = await fetch(
            `https://api.artic.edu/api/v1/artworks?ids=${idsString}`
          );
          const artworksData = await artworksResponse.json();
          const fetchedArtworks = artworksData.data || []; // Retrieve the fetched artworks

          setArtworks(fetchedArtworks);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchQuery]);

  return (
    <Grid container>
      {/* Vertical Navigation List */}
      <Grid item xs={2}>
        <Paper sx={{ height: "100vh", position: "sticky", top: 0 }}>
          <List component="nav">
            <ListItem button onClick={() => handleClose1("/dashboard")}>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <ListItem button onClick={() => handleClose1("/charts")}>
              <ListItemText primary="Charts" />
            </ListItem>
            <ListItem button onClick={() => handleClose1("/aboutus")}>
              <ListItemText primary="About us" />
            </ListItem>
          </List>
        </Paper>
      </Grid>

      {/* Main Content */}
      <Grid item xs={10}>
        <Container>
          {/* Horizontal Navbar */}
          <AppBar position="sticky" sx={{ width: "100%" }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Navbar
              </Typography>

              {/* Search Input */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton color="inherit">
                  <SearchIcon />
                </IconButton>
                <InputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </Box>

              {/* Account Icon */}
              {isAuthenticated ? (
                <Box>
                  <IconButton
                    color="inherit"
                    onClick={handleClick}
                    aria-controls="account-menu"
                    aria-haspopup="true"
                    edge="end"
                  >
                    <AccountCircleIcon />
                  </IconButton>
                  <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                  </Menu>
                </Box>
              ) : (
                <Button variant="contained" onClick={handleLogin}>
                  Login
                </Button>
              )}
            </Toolbar>
          </AppBar>
        </Container>

        {currentPath === "/charts" ? (
          <ArtworkLineChart />
        ) : currentPath === "/aboutus" ? (
          <AboutUs />
        ) : (
          <Container style={{ paddingBottom: "3rem" }}>
            {/* Artwork Table */}
            {searchQuery === "" ? (
              isAuthenticated ? (
                <ArtworkTable />
              ) : (
                <Typography variant="caption" align="center">
                  Login First
                </Typography>
              )
            ) : (
              <div>
                {artworks.length > 0 ? (
                  <Typography variant="h5" align="center">
                    Search Results
                  </Typography>
                ) : (
                  <Typography variant="h5" align="center">
                    No Results Found
                  </Typography>
                )}
                {/* Render search results */}
                {/* Modify the code according to how you want to display the search results */}
                {isAuthenticated ? (
                  <StatTabArt artworks={artworks} />
                ) : (
                  <Typography variant="caption" align="center">
                    Login First
                  </Typography>
                )}
              </div>
            )}
          </Container>
        )}
        <Footer  style={{ flexShrink: 0 }}  />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
