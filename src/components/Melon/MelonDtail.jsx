import React from "react";
import { useParams } from "react-router-dom";

const MelonDtail = () => {
  const params = useParams();

  return <div class="content-wrapper">{params.title}</div>;
};

export default MelonDtail;
