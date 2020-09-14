import React from "react";

export default function context({ concerts }) {
  console.log("dans page", concerts);
  return (
    <div>
      <p>Coucou</p>
    </div>
  );
}
