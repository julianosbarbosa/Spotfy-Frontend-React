import React, { Component } from "react";

import { Container, Header, SongLists } from "./styles";
import ClockIcon from "../../assets/clock.svg";
import PlusIcon from "../../assets/plus.svg";
console.tron.log("teste");
export default class Playlist extends Component {
  render() {
    return (
      <Container>
        <Header>
          <img
            src="data:image/jpeg;base64,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"
            alt="Cover"
          />
          <div>
            <span>PLAYLIST</span>
            <h1>Rock Forever</h1>
            <p>13 musicas</p>
            <button type="button">PLAY</button>
          </div>
        </Header>
        <SongLists cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
            <tr>
              <td>
                <img src={PlusIcon} alt="Adicionar" />
              </td>
              <td>Papercut</td>
              <td>Linkin Park</td>
              <td>Hybrid Theory</td>
              <td>3:26</td>
            </tr>
          </tbody>
        </SongLists>
      </Container>
    );
  }
}
