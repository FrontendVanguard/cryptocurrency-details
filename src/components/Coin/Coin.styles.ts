import { grey } from "@mui/material/colors";
import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 0px;
`;

export const CharacterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
  max-width: 350px;
`;

export const MajorText = styled.span`
  color: ${grey[700]};
  font-size: 32px;
  line-height: 1.25;
  margin-top: 24px;
`;

export const SubText = styled.span`
  color: ${grey[700]};
  font-size: 22px;
  line-height: 2;
`;

export const AdditionalInformation = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Episodes = styled.div`
  font-size: 22px;
`;

export const Episode = styled.div`
  cursor: pointer;
  font-size: 22px;
  line-height: 2;
  font-weight: 600;
  :hover {
    text-decoration: underline;
    color: ${grey[700]};
  }
`;

export const Back = styled.div`
  position: fixed;
  top: 5%;
  left: 5%;
  color: ${grey[700]};
  cursor: pointer;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid ${grey[700]};
`;

export const StyledImage = styled.img`
  border-radius: 50%;
  box-shadow: 0 0 0 2px rgba(240, 246, 252, 0.1);
  cursor: pointer;
  width: 50px;
  height: 50px;
`;
