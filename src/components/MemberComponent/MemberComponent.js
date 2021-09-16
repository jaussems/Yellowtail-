import React from "react";
import { Link } from "react-router-dom";
export default function MemberComponent(props) {
  return (
    <div>
      <img alt={`Picture of ${props.name}`} src={props.src} />
      <h1>FirstName: {props.name} </h1>
      {/* <h2>LastName: {} </h2> */}
      <h3>Sports they play: {props.membersports} </h3>
      <Link to={`user/${props.id}`}>
        <button>View member</button>
      </Link>
    </div>
  );
}
