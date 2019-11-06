import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./config/reactotron";
import GlobalStyle from "./styles/Global";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import { Wrapper, Container, Content } from "./styles/Components";
import Header from "./components/Header";
import Routes from "./Routes";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
        <GlobalStyle />
      </Wrapper>
    </BrowserRouter>
  );
}

export default App;
