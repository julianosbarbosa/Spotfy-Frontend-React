import api from "../../services/api";
import { call, put } from "redux-saga/effects";
import { Creators as PlaylistDetailsActions } from "../ducks/playists";

export function* getPlaylists(action) {
  try {
    const response = yield call(api.get, "/playlists");
    yield put(PlaylistDetailsActions.getPlaylistsDetailsSuccess(response.data));
  } catch (error) {
    console.log(error);
  }
}
