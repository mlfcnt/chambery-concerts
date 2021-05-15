import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useToggle } from 'react-use';
import { Checkbox } from 'rsuite';
import { Select } from 'antd';
const { Option } = Select;

export const ConcertsFilters = ({ concerts, setConcerts }) => {
  // console.log(
  //   '👽CLG - concerts',
  //   concerts.filter((x) => x.venue.name.toLowerCase().includes('jazz')),
  // );
  const [showCanceled, toggleCanceled] = useToggle(false);
  const [selectedVenue, setSelectedVenue] = useState(null);

  const applyFilters = useCallback(() => {
    let filters = [];
    if (!showCanceled) filters.push('!x.isCanceled');
    if (selectedVenue) filters.push('x.venue.name.toLowerCase() === selectedVanue.toLowerCase()');
    const joined = () => filters.join(' && ');
    console.log('👽CLG - filters', filters);
    return setConcerts(concerts.filter((x) => joined(x)));
  }, [showCanceled, selectedVenue, concerts, setConcerts]);

  useEffect(() => {
    applyFilters();
  }, [showCanceled, selectedVenue]);

  const venuesOptions = concerts.reduce((venues, { venue: { name: venue } }) => {
    if (venues.find((x) => x.label.toLowerCase() === venue.toLowerCase())) return venues;
    return [
      ...venues,
      {
        label: venue,
        value: venue,
      },
    ];
  }, []);
  return (
    <>
      <Checkbox checked={showCanceled} onChange={toggleCanceled} style={{ marginBottom: '3vh' }}>
        Afficher les concerts annulés ou reportés
      </Checkbox>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="Filtrer par salle"
        onChange={setSelectedVenue}
      >
        {venuesOptions.map(({ label, value }) => (
          <Option key={value} value={value}>
            {label}
          </Option>
        ))}
      </Select>
    </>
  );
};
