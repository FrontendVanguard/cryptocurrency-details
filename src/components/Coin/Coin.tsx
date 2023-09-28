import { useParams, useNavigate } from "react-router-dom";
import {
  AdditionalInformation,
  Back,
  CharacterContainer,
  Content,
  MajorText,
  StyledImage,
  SubText,
} from "./Coin.styles";

import { CoinDetailsType } from "../../types";
import { useState } from "react";
import { useQuery } from "react-query";
import { getCoin } from "../../api/coingecko";
import { CircularProgress, Snackbar } from "@mui/material";
import { red } from "@mui/material/colors";

export const Coin = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const [error, setError] = useState<false | string>(false);
  const [coinData, setCoinData] = useState<CoinDetailsType | null>(null);

  const coinQuery = useQuery(["coin", id], () => getCoin({ id }), {
    enabled: true,
    cacheTime: 10000,
    refetchInterval: 30000,
    onSuccess: (response: { data: CoinDetailsType }) => {
      console.log("response", response);
      setCoinData(response.data);
    },
    onError: (error: any) => {
      console.error("Error fetching data:", error);
      if (error.response.status === 404) {
        navigate("/");
        return;
      }
      if (error instanceof Error) {
        setError(error.message);
      }
    },
  });

  if (!id) navigate("/");

  if (coinQuery.isLoading) return <CircularProgress />;
  return (
    coinData && (
      <Content>
        <Back
          onClick={() => {
            navigate("/");
          }}
        >
          ← Back
        </Back>
        <CharacterContainer>
          <StyledImage src={coinData.image.thumb} alt={coinData.name} />
          <MajorText>{coinData.name}</MajorText>
          <AdditionalInformation>
            <SubText>Rank: {coinData.market_cap_rank}</SubText>
            <SubText>
              Description: {coinData.description.en.slice(0, 150)}...{" "}
            </SubText>
            <SubText>
              Watchlist portfolio users: {coinData.watchlist_portfolio_users}
            </SubText>
          </AdditionalInformation>
        </CharacterContainer>

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
      </Content>
    )
  );
};
