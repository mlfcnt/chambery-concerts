import { CgMusic } from "react-icons/cg";
import styles from "../../styles/Timeline.module.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { DateTime, Settings } from "luxon";
import SpotifyWidget from "../../components/Timeline/SpotifyWidget";
import randomColor from "randomcolor";
import styled from "styled-components";
Settings.defaultLocale = "fr";

const SuperCoolButton = styled.a`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  padding: 12px;
  border: 4px solid #273253;
  background-color: #f4e9da;
  /* color: ${(props) => props.color}; */
  color: #273253;
  display: block;
  margin-top: 3vh;
  margin-left: auto;
  margin-right: auto;
  padding: 1vh;
  width: max-content;
  font-weight: bold;

  &:hover {
    color: #ed5c4d;
    border: 4px solid #ed5c4d;
    cursor: pointer;
  }
`;

export const useTimeline = (concerts, dateFormat) => {
  const maxDescSize = 250;
  const displayDescription = (description) => {
    if (!description) return;
    if (description.length <= maxDescSize)
      return <p>{`${description} [...]`}</p>;
    return <p>{description.slice(0, maxDescSize)} [...]</p>;
  };

  const concertsByDate = [];
  for (const date in concerts) {
    for (const {
      _id,
      startDate,
      artist,
      venue,
      style,
      description,
      largePicture,
      tumbnailPicture,
      defaultPicture,
      urlDescription,
      price,
      isCanceled,
    } of concerts[date]) {
      const backgroundColor = randomColor({
        luminosity: "dark",
        format: "rgba",
        alpha: 0.2,
      });
      concertsByDate.push(
        <VerticalTimelineElement
          key={_id}
          className="vertical-timeline-element--work"
          contentStyle={{
            background: backgroundColor,
            color: "#273253",
          }}
          contentArrowStyle={{ borderRight: "10px solid  #273253" }}
          date={DateTime.fromISO(startDate).toFormat(dateFormat)}
          dateClassName={styles.hour}
          iconStyle={{ background: "#ed5c4d", color: "#273253" }}
          icon={<CgMusic />}
        >
          <img
            src={largePicture || tumbnailPicture || defaultPicture}
            className={styles.image}
          />
          <h3
            className="vertical-timeline-element-title"
            className={styles.artist}
          >
            {artist.name}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            className={styles.venue}
          >
            Lieu : {venue.name} <span>{price && `- ${price}`}</span>
          </h4>
          <h4 className="vertical-timeline-element-subtitle">{style}</h4>
          {displayDescription(description)}
          <SpotifyWidget spotifyTopTrackUri={artist.spotifyTopTrackUri} />
          <SuperCoolButton
            href={urlDescription}
            // className={styles.url_description}
            target="_blank"
            color={backgroundColor}
          >
            Réservations / Plus d'informations
          </SuperCoolButton>
        </VerticalTimelineElement>
      );
    }
  }
  return concertsByDate;
};
