import React, { useEffect, useState } from "react";
import TableArt from "./Table";

/**
 * Component for displaying an artwork table with pagination.
 */
const ArtworkTable = () => {
  // State variables
  const [artworks, setArtworks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(100);
  const [totalPages, setTotalPages] = useState(0);

  // Fetch data when page or limit changes
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://api.artic.edu/api/v1/artworks?page=${page}&limit=${limit}`
        );
        const data = await response.json();

        setArtworks(data.data);
        setTotalPages(data.pagination.total_pages);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchData();
  }, [page, limit]);

  // Event handler for changing the page
  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  // Event handler for changing the number of rows per page
  const handleChangeRowsPerPage = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  return (
    <TableArt
      artworks={artworks}
      totalPages={totalPages}
      page={page}
      limit={limit}
      onPageChange={handleChangePage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      setPage={setPage}
      setLimit={setLimit}
    />
  );
};

export default ArtworkTable;
