import React, { Component } from "react";

import { Container, Search, User } from "./styles";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <Search>
          <input type="text" placeholder="Search" />
        </Search>
        <User>
          <img
            src="https://avatars2.githubusercontent.com/u/26010080?v=4"
            alt="avatar"
          />
          Juliano Barbosa
        </User>
      </Container>
    );
  }
}
