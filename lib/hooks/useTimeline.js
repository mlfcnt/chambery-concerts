import { CgMusic } from "react-icons/cg";
import styles from "../../styles/Timeline.module.css";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { DateTime, Settings } from "luxon";
Settings.defaultLocale = "fr";
export const useTimeline = (concerts, dateFormat) => {
  const maxDescSize = 300;
  const displayDescription = (description) => {
    if (!description) return;
    if (description.length <= maxDescSize) return <p>{description}</p>;
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
      urlDescription,
    } of concerts[date]) {
      concertsByDate.push(
        <VerticalTimelineElement
          key={_id}
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#ed5c4d", color: "#f4e9da" }}
          contentArrowStyle={{ borderRight: "10px solid  #273253" }}
          date={DateTime.fromISO(startDate).toFormat(dateFormat)}
          dateClassName={styles.hour}
          iconStyle={{ background: "#ed5c4d", color: "#273253" }}
          icon={<CgMusic />}
        >
          {largePicture || tumbnailPicture ? (
            <img
              src={largePicture || tumbnailPicture}
              className={styles.image}
            />
          ) : null}

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
            Lieu : {venue.name}
          </h4>
          <h4 className="vertical-timeline-element-subtitle">{style}</h4>
          {displayDescription(description)}
        </VerticalTimelineElement>
      );
    }
  }
  return concertsByDate;
};
