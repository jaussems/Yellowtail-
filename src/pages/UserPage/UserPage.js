import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetMembers } from "../../Functions/Functions";
import MemberComponent from "../../components/MemberComponent/MemberComponent";
function UserPage() {
  const [members, setMembers] = useState("");
  const [singleMember, setSingleMember] = useState("");
  const [boolean, setBoolean] = useState(false);
  let { userid } = useParams();

  useEffect(() => {
    GetMembers().then((fetchmembers) => setMembers(fetchmembers.data));
  }, []);

  if (members && boolean === false) {
    const singleMember = members.filter(
      (element) => element.id === userid.toString()
    );
    setSingleMember(singleMember);
    setBoolean(true);
    console.log("testing single member:", singleMember);
  }

  return (
    <div>
      <h1>Welcome member {userid}</h1>
      {singleMember
        ? singleMember.map((fetchmember, index) => {
            return (
              <>
                <MemberComponent
                  key={index}
                  name={fetchmember.name}
                  src={fetchmember.image}
                  sports={null}
                  alt={fetchmember.name}
                />
              </>
            );
          })
        : null}
    </div>
  );
}

export default UserPage;
