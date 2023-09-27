import ReactDOM from "react-dom/client";
import { StyledEngineProvider } from "@mui/material/styles";

import App from "./App";
import GlobalStyle from "./globalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <StyledEngineProvider injectFirst>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <App />
    </QueryClientProvider>
  </StyledEngineProvider>
);
