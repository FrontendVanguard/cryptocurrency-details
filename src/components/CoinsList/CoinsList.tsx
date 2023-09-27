import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { DataGrid } from "@mui/x-data-grid";

import { getCoins } from "../../api/coingecko";
import { Coin } from "../../types";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import { coinsColumns } from "./columns";
import { Container } from "./CoinsList.styles";
import { TextField } from "@mui/material";
import { useQuery } from "react-query";

export const CoinsList = () => {
  const [error, setError] = useState<false | string>(false);

  const [coinsData, setCoinsData] = useState<Coin[]>([]);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 5 });

  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigate = useNavigate();

  // const handleClick = () => {
  //   navigate(`/${id}`);
  // };

  const coinsListQuery = useQuery(["coin"], () => getCoins(), {
    enabled: true,
    onSuccess: (response: { data: Coin[] }) => {
      console.log("response", response);
      setCoinsData(response.data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);
      if (error instanceof Error) setError(error.message);
    },
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      coinsListQuery.refetch();
    }, 15000);

    return () => clearInterval(intervalId);
  }, [coinsListQuery]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Container>
      <TextField
        label="Search by name or symbol"
        variant="outlined"
        className="search_input"
        value={searchQuery}
        onChange={handleSearchChange}
      />

      <DataGrid
        rows={coinsData?.length > 0 ? coinsData : []}
        columns={coinsColumns}
        initialState={{
          pagination: {
            paginationModel: pagination,
          },
        }}
        onPaginationModelChange={(params) => {
          setPagination(params);
        }}
        pageSizeOptions={[5, 10, 25, 50, 100]}
      />

      <Snackbar
        open={!!error}
        autoHideDuration={3000}
        onClose={() => setError(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        message={`API error: ${error}`}
        ContentProps={{
          style: { backgroundColor: red[500] },
        }}
      />
    </Container>
  );
};
