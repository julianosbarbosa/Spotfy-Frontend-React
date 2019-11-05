import React from "react";
import GlobalStyle from "./styles/Global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { Wrapper, Container, Content } from "./styles/Components";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <Container>
        <Sidebar />
        <Content>
          <Header />
        </Content>
      </Container>

      <Player />
      <GlobalStyle />
    </Wrapper>
  );
}

export default App;
