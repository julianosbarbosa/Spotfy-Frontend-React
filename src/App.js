import React from "react";
import GlobalStyle from "./styles/Global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { Wrapper, Container } from "./styles/Components";

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
      </Container>

      <Player />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
