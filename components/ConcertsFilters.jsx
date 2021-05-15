import React, { useState, useEffect } from 'react';
import { Checkbox } from 'rsuite';

export const ConcertsFilters = ({ concerts, setConcerts }) => {
  const [showCancel, toggleCanceled] = useState(true);

  useEffect(() => {
    !showCancel && setConcerts(concerts.filter((c) => !c.isCanceled));
  }, [showCancel]);
  return (
    <Checkbox value={showCancel} onClick={toggleCanceled}>
      Afficher les concerts annulés
    </Checkbox>
  );
};
