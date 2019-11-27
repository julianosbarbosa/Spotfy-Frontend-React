import React from "react";
import LoadingIcon from "../../assets/loading.svg";
import { Spinner } from "./styles";

export default function Loading() {
  return <Spinner src={LoadingIcon} alt="Carregando..." />;
}
