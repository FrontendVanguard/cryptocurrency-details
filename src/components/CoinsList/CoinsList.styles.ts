import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-top: 94px;

  position: relative;

  .search_input {
    position: absolute;
    top: -64px;
  }

  @media (max-width: 1280px) {
    width: calc(100% - 32px);
    margin-left: 16px;
    margin-right: 16px;
    margin-bottom: 40px;
    .MuiDataGrid-root {
      width: 100%;
    }
  }
`;
