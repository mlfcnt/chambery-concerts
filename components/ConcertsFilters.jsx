import React, { useEffect } from 'react';
import { useToggle } from 'react-use';
import { Checkbox } from 'rsuite';

export const ConcertsFilters = ({ concerts, setFilteredConcerts }) => {
  const [showCanceled, toggleCanceled] = useToggle(false);
  // const [selectedVenue, setSelectedVenue] = useState(null);
  // const filters = ['showCanceled'];

  useEffect(() => {
    if (showCanceled) return setFilteredConcerts(concerts);
    return setFilteredConcerts(concerts.filter((x) => !x.isCanceled));
  }, [showCanceled, concerts, setFilteredConcerts]);

  // useEffect(() => {
  //   if (!selectedVenue) return setFilteredConcerts(concerts);
  //   const filtered = concerts.filter(
  //     (x) => x.venue.name.toLowerCase() === selectedVenue.toLowerCase(),
  //   );
  //   return setFilteredConcerts(filtered);
  // }, [selectedVenue, concerts, setFilteredConcerts]);

  // const venuesOptions = (concerts || []).reduce(
  //   (venues, { venue: { name: venue } }) => {
  //     if (venues.find((x) => x.label.toLowerCase() === venue.toLowerCase())) return venues;
  //     return [
  //       ...venues,
  //       {
  //         label: venue,
  //         value: venue,
  //       },
  //     ];
  //   },
  //   [
  //     {
  //       label: 'Toutes les salles',
  //       value: 'Toutes',
  //     },
  //   ],
  // );

  // const handleVenueFilter = ({ target: { value: venue } }) => {
  //   if (venue === 'Toutes') setSelectedVenue(null);
  //   setSelectedVenue(venue);
  // };

  return (
    <div style={{ marginBottom: '3vh' }}>
      <Checkbox checked={showCanceled} onChange={toggleCanceled} style={{ marginBottom: '3vh' }}>
        Afficher les concerts annulés
      </Checkbox>
      {/* <select style={{ width: 200 }} placeholder="Filtrer par salle" onChange={handleVenueFilter}>
        {venuesOptions
          .sort((a, b) => {
            if (b.value || a.value === 'Toutes') return 1;
            return a.label.localeCompare(b.label);
          })
          .map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
      </select> */}
    </div>
  );
};
