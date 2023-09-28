import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { CoinsList } from "./components/CoinsList/CoinsList";
import { Coin } from "./components/Coin/Coin";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<CoinsList />} />
      <Route path="/coin/:id" element={<Coin />} />
    </>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
