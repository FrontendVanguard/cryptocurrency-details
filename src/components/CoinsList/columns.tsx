import { GridCellParams } from "@mui/x-data-grid";

export const coinsColumns = [
  {
    field: "image",
    headerName: "image",
    width: 50,
    renderCell: (params: GridCellParams) => (
      <img
        src={params.value as string}
        style={{ width: "24px", height: "24px" }}
        alt="coin icon"
      />
    ),
  },
  { field: "symbol", headerName: "Symbol", width: 100 },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "current_price",
    headerName: "Price (USD)",
    width: 200,
    type: "number",
    valueFormatter: ({ value }: { value: number }) => `$${value}`,
  },
  {
    field: "market_cap",
    headerName: "Market Cap",
    width: 200,
    type: "number",
    valueFormatter: ({ value }: { value: number }) =>
      `$${value.toLocaleString()}`,
  },
  {
    field: "market_cap_rank",
    headerName: "Rank",
    width: 100,
    type: "number",
  },
];
