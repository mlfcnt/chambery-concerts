import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { GrUserWorker } from "react-icons/gr";
import { DateTime, Settings } from "luxon";
import { RiVolumeUpLine } from "react-icons/ri";
Settings.defaultLocale = "fr";

export default function Timeline({ concerts }) {
  const displayConcerts = () => {
    const concertsByDate = [];
    for (const date in concerts) {
      for (const { startDate, artist, venue, style, description } of concerts[
        date
      ]) {
        concertsByDate.push(
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#273253", color: "#eaeaea" }}
            contentArrowStyle={{ borderRight: "50px solid  #273253" }}
            date={DateTime.fromISO(startDate).toFormat("ccc dd LLLL yyyy")}
            iconStyle={{ background: "#273253", color: "#eaeaea" }}
            icon={<GrUserWorker />}
          >
            <h3 className="vertical-timeline-element-title">
              Artist : {artist.name}
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Salle : {venue.name}
            </h4>
            <h4 className="vertical-timeline-element-subtitle">{style}</h4>
            <p>{description && description.slice(0, 150) + " [...]"}</p>
          </VerticalTimelineElement>
        );
      }
    }
    return concertsByDate;
  };
  return <VerticalTimeline>{displayConcerts()}</VerticalTimeline>;
}
