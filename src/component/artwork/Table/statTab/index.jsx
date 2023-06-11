import React from "react";
import PropTypes from "prop-types";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

/**
 * StatTabArt Component
 * Renders a table displaying artwork statistics.
 *
 * @param {Object} props - Component props
 * @param {Array} props.artworks - Array of artworks to display
 */
const StatTabArt = ({ artworks }) => {
  return (
    <TableContainer
      component={Paper}
      style={{
        maxHeight: "100%",
        overflow: "auto",
      }}
    >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell>Replications</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Artist's ID</TableCell>
            <TableCell>Artist</TableCell>
            <TableCell>Department ID</TableCell>
            <TableCell>Department</TableCell>
            <TableCell>Medium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {artworks.map((artwork) => (
            <TableRow key={artwork.id}>
              <TableCell>{artwork.title}</TableCell>
              <TableCell>{artwork.material_ids.join(", ")}</TableCell>
              <TableCell>
                {artwork.date_start}-{artwork.date_end}
              </TableCell>
              <TableCell>{artwork.artist_id}</TableCell>
              <TableCell>{artwork.artist_display}</TableCell>
              <TableCell>{artwork.department_id}</TableCell>
              <TableCell>{artwork.department_title}</TableCell>
              <TableCell>{artwork.medium_display}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

StatTabArt.propTypes = {
  artworks: PropTypes.array.isRequired,
};

export default StatTabArt;
