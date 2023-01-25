import React from "react";
import styled from "@emotion/styled";
import Container from "@mui/material/Container";
import GameScore from "components/GameScore";
import Cards from "components/Cards";
import SelectGameType from "components/Misc/SelectGameType";
import PlayButton from "components/Misc/PlayButton";
import ErrorText from "components/Misc/ErrorText";

const AppContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  padding-top: 16px;
`;

const App: React.FC = () => (
  <AppContainer maxWidth="sm">
    <GameScore />
    <Cards />
    <ErrorText />
    <SelectGameType />
    <PlayButton />
  </AppContainer>
);

export default App;
