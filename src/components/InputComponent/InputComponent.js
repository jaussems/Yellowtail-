import { React, useState } from "react";
import { CreateUser } from "../../Functions/Functions";
export default function InputComponent() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [sports, setSports] = useState("");
  function submitForm(event) {
    event.preventDefault();
    //console.log(name, image, sports);
    CreateUser(name, image, sports);
    setName("");
    setImage("");
    setSports("");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          width: "60%",
          margin: "0 auto",
        }}
      >
        <label>Name</label>
        <input
          placeholder="enter name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <label>Image Url</label>
        <input
          placeholder="enter image url"
          onChange={(e) => {
            setImage(e.target.value);
          }}
        ></input>
        <label>Sports</label>
        <select
          onChange={(e) => {
            setSports(e.target.value);
          }}
        >
          <option name="all" value={0}>
            ---
          </option>
          <option name="name" value={1}>
            Tennis
          </option>
          <option name="lowest-price" value={2}>
            Squash
          </option>
          <option name="highest-price" value={3}>
            Badminton
          </option>
          <option name="highest-price" value={4}>
            Pingpong
          </option>
        </select>
        <button onClick={submitForm}>Create new User</button>
      </form>
    </div>
  );
}
