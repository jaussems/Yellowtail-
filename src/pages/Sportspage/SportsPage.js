import { React, useEffect, useState } from "react";
import { GetSports } from "../../Functions/Functions";
import SportsComponent from "../../components/SportsComponent/SportsComponent";
function SportsPage() {
  const [sports, setSports] = useState("");

  useEffect(() => {
    GetSports().then((fetchsports) => setSports(fetchsports.data));
  }, []);

  return (
    <div>
      <h1>Sports Page</h1>
      {sports
        ? sports.map((extractSports) => {
            return <SportsComponent name={extractSports.name} />;
          })
        : null}
    </div>
  );
}

export default SportsPage;
