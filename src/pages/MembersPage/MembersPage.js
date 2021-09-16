import { React, useEffect, useState } from "react";
import { GetMembers, GetSports } from "../../Functions/Functions";
import MemberComponent from "../../components/MemberComponent/MemberComponent";
import InputComponent from "../../components/InputComponent/InputComponent";

import { useLocation } from "react-router";
export default function MemberPage() {
  const [members, setMembers] = useState("");
  const [sports, setSports] = useState("");
  const [buttonBoolean, setButtonBoolean] = useState(false);
  // let location = useLocation();
  useEffect(() => {
    GetMembers().then((fetchmembers) => setMembers(fetchmembers.data));
    GetSports().then((fetchsports) => setSports(fetchsports.data));
  }, []);
  console.log(sports);

  // const filtered = sports.filter((element) => element.id === 1);
  // console.log(filtered.map((fetch) => fetch.name));
  // displayMembers?.sports?.forEach(
  //   (element) => sports[element].name

  // sports
  // ? displayMembers?.sports?.forEach(
  //     (element) => sports[element].name
  //   )
  // : null
  return (
    <div>
      <h2>the Memberspage</h2>
      <InputComponent />

      <h3>Current members:</h3>
      {members
        ? members.map((displayMembers, index) => {
            return (
              <>
                <MemberComponent
                  key={index}
                  name={displayMembers.name}
                  src={displayMembers.image}
                  membersports={
                    displayMembers.sports

                    // sports
                    //   .filter((element) => element.id === 1)
                    //   .map((sport) => sport.name)
                  }
                  id={displayMembers.id}
                />
              </>
            );
          })
        : null}
    </div>
  );
}
