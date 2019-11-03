import React, { Component } from "react";
import AddPlaylistIcon from "../../assets/add_playlist.svg";
import { Container, NewPlaylist, Nav } from "./styles";

export default class Sidebar extends Component {
  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <a href="http://">Navegar</a>
            </li>
            <li>
              <a href="http://">Radio</a>
            </li>
          </Nav>
          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="http://">Seu Daily Mix</a>
            </li>
            <li>
              <a href="http://">Tocados recentemente</a>
            </li>
            <li>
              <a href="http://">Musicas</a>
            </li>
            <li>
              <a href="http://">Albums</a>
            </li>
            <li>
              <a href="http://">Artistas</a>
            </li>
            <li>
              <a href="http://">Estações</a>
            </li>
            <li>
              <a href="http://">Arquivos locais</a>
            </li>
            <li>
              <a href="http://">Videos</a>
            </li>
            <li>
              <a href="http://">Podcasts</a>
            </li>
          </Nav>
          <Nav main>
            <li>
              <span>PLAYLISTS</span>
            </li>
            <li>
              <a href="http://">Melhores do Rock</a>
            </li>
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="Adcionar nova playlist" />
          Nova playlist
        </NewPlaylist>
      </Container>
    );
  }
}
