import React from "react";

const Duration = ({ duration }) => {
  const hours = Math.floor(duration / 1000 / 60 / 60);
  const minutes = Math.floor((duration / 1000 / 60 / 60 - hours) * 60);

  const m = `${minutes < 5 ? "" : minutes}`;

  return <em>updated {`${-hours}:${m}`} ago</em>;
};

export default Duration;
