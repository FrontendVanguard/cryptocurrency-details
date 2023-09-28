import { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import { DataGrid } from "@mui/x-data-grid";

import { getCoins } from "../../api/coingecko";
import { CoinType } from "../../types";
import { useNavigate } from "react-router-dom";
import { red } from "@mui/material/colors";
import { coinsColumns } from "./columns";
import { Container } from "./CoinsList.styles";
import { TextField } from "@mui/material";
import { useQuery } from "react-query";
import { filterDataByName } from "../../utils/requests";

export const CoinsList = () => {
  const [error, setError] = useState<false | string>(false);

  const [coinsData, setCoinsData] = useState<CoinType[] | null>(null);
  const [filteredCoins, setFilteredCoins] = useState<CoinType[] | null>(null);
  const [pagination, setPagination] = useState({ page: 0, pageSize: 5 });

  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null
  );
  const [searchQuery, setSearchQuery] = useState<string>("");

  const navigate = useNavigate();

  const handleRowClick = (param: { row: CoinType }) => {
    navigate(`/coin/${param.row.id}`);
  };

  const coinsListQuery = useQuery(["coinsList"], () => getCoins(), {
    enabled: true,
    cacheTime: 10000,
    refetchInterval: 30000,
    onSuccess: (response: { data: CoinType[] }) => {
      console.log("response", response);
      setCoinsData(response.data);
      setFilteredCoins(response.data);
    },
    onError: (error) => {
      console.error("Error fetching data:", error);

      if (error instanceof Error) setError(error.message);
    },
  });

  useEffect(() => {
    if (!coinsData) return;

    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      // API don't have search filter by name, id, ect. I do it on my side
      filterDataByName(coinsData, searchQuery).then((result) => {
        setFilteredCoins(result);
      });
    }, 500);

    setDebounceTimer(timer);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery, coinsData]);

  return (
    <Container>
      <TextField
        data-testid="search-coin-input"
        label="Search by name"
        variant="outlined"
        className="search_input"
        value={searchQuery}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchQuery(e.target.value);
        }}
      />

      <DataGrid
        data-testid="coins-datagrid"
        rows={filteredCoins ? filteredCoins : []}
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
        onRowClick={handleRowClick}
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
