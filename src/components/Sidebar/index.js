import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playists";
import { Link } from "react-router-dom";
import AddPlaylistIcon from "../../assets/add_playlist.svg";
import { Container, NewPlaylist, Nav } from "./styles";

class Sidebar extends Component {
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

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
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
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

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
