import React from "react";
import { useFetchArtworkData } from "./api"; // Custom API fetch hook
import { useNavigate } from "react-router-dom";
import { Button, Container, Grid } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ArtworkLineChart = () => {
  const navigate = useNavigate();

  // Custom hook to fetch artwork data from API
  const { data, isLoading, error } = useFetchArtworkData();

  const handleGoBack = () => {
    navigate(-1);
  };

  // If data is still loading, display a loading message
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If there's an error, display the error message
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Extracting data from the API response
  const seriesData = data.map((artwork) => artwork.colorfulness);
  const seriesData1 = data.map((artwork) => artwork.color.population);

  // Generating the chart parameters
  const chartData = `chd=t:${seriesData.join(",")}`;
  const chartData1 = `chd=t:${seriesData1.join(",")}`;
  const chartColors = "chco=FF0000,00FF00,0000FF"; // Customize the colors as needed
  const chartLegend = "chdl=Colorfulness"; // Customize the legend labels
  const chartLegend1 = "chdl=Color Population"; // Customize the legend labels
  const chartLegendPosition = "chdlp=bv";
  const chartSize = "chs=600x300"; // The size of the chart
  const chartType = "cht=lc"; // Specify the chart type as a line chart

  // Generate the chart URLs
  const chartUrl = `https://image-charts.com/chart?${chartData}&${chartColors}&${chartLegend}&${chartLegendPosition}&${chartSize}&${chartType}`;
  const chartUrl1 = `https://image-charts.com/chart?${chartData1}&${chartColors}&${chartLegend1}&${chartLegendPosition}&${chartSize}&${chartType}`;

  return (
    <Container>
      <Grid container spacing={2} sx={{justifyContent:"space-between"}}>
        <Grid item xs={6}>
          {/* Display the first chart */}
          <img src={chartUrl} alt="Artwork's colorfulness Line Chart" />
        </Grid>
        <Grid item xs={6}>
          {/* Display the second chart */}
          <img src={chartUrl1} alt="Artwork's color population Line Chart" />
        </Grid>
      </Grid>

      {/* Button for navigating back */}
      <Button
        variant="contained"
        onClick={handleGoBack}
        sx={{
          position: "sticky",
          bottom: "20px",
          right: "20px",
          float: "right",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          opacity: 0.5,
          transition: "opacity 0.3s",
          "&:hover": {
            opacity: 1,
          },
        }}
      >
        <ArrowBackIcon />
      </Button>
    </Container>
  );
};

export default ArtworkLineChart;
