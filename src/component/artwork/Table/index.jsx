import React from "react";
import PropTypes from "prop-types";
import {
  TablePagination,
} from "@mui/material";
import StatTabArt from "./statTab";

/**
 * TableArt Component
 * Renders a table of artworks and a pagination component.
 *
 * @param {Object} props - Component props
 * @param {Array} props.artworks - Array of artworks to display
 * @param {number} props.totalPages - Total number of pages
 * @param {number} props.page - Current page
 * @param {number} props.limit - Number of rows per page
 * @param {Function} props.onPageChange - Callback function for page change
 * @param {Function} props.onRowsPerPageChange - Callback function for rows per page change
 * @param {Function} props.setPage - Function to update the page state in the parent component
 * @param {Function} props.setLimit - Function to update the limit state in the parent component
 */
const TableArt = ({
  artworks,
  totalPages,
  page,
  limit,
  onPageChange,
  onRowsPerPageChange,
  setPage,
  setLimit
}) => {
  // Event handler for changing the page
  const handleChangePage = (event, newPage) => {
    setPage(newPage + 1); // Update parent component state
    onPageChange(newPage + 1); // Trigger the onPageChange callback
  };

  // Event handler for changing the number of rows per page
  const handleChangeRowsPerPage = (event) => {
    const newLimit = parseInt(event.target.value, 10);
    setLimit(newLimit); // Update parent component state
    onRowsPerPageChange(newLimit); // Trigger the onRowsPerPageChange callback
  };
  
  return (
    <>
      {/* Table for displaying artworks */}
      <StatTabArt artworks={artworks} />

      {/* Pagination component */}
      <TablePagination
        rowsPerPageOptions={[5,15, 30, 50, 100]}
        component="div"
        count={totalPages * limit}
        rowsPerPage={limit}
        page={page - 1}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
{/*not a necessary block , it helps to detect bugs and provides clear contract about variables used in the component */}
TableArt.propTypes = {
  artworks: PropTypes.array.isRequired,
  totalPages: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setLimit: PropTypes.func.isRequired
};

export default TableArt;
