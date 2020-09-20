import React from "react";
import styles from "../../styles/SpotifyWidget.module.css";

export default function SpotifyWidget({ spotifyTopTrackUri }) {
  if (!spotifyTopTrackUri || spotifyTopTrackUri === "error") return null;
  const type = spotifyTopTrackUri.split(":")[1];
  const actualUri = spotifyTopTrackUri.split(":")[2];
  return (
    <iframe
      src={`https://open.spotify.com/embed/${type}/${actualUri}`}
      width="300"
      height="80"
      frameBorder="0"
      allowtransparency="true"
      allow="encrypted-media"
      style={{ marginTop: "2rem" }}
      title="Spotify widget"
      className={styles.widget}
    ></iframe>
  );
}
