import { combineReducers } from "redux";
import playlists from "./playists";
import playlistDetails from "./playlistDetails";

export default combineReducers({
  playlists,
  playlistDetails
});
