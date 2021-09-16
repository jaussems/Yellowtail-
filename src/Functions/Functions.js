const axios = require("axios");

export async function GetMembers() {
  try {
    const response = await axios.get(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/members"
    );
    //console.log("MEMBERS RESPONSE:", response);
    return response;
  } catch (e) {
    console.log("ERROR message", e.message);
    alert("ERROR MESSAGE:", e.message);
  }
}

export async function GetSports() {
  try {
    const response = await axios.get(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/sports"
    );
    //console.log("SPORTS RESPONSE:", response);
    return response;
  } catch (e) {
    console.log("ERROR message", e.message);
    alert("ERROR MESSAGE:", e.message);
  }
}

export async function DeleteUser(id) {
  try {
    const response = await axios.delete(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/members"
    );
    //console.log("SPORTS RESPONSE:", response);
    alert("USER DELETED");
    return response;
  } catch (e) {
    console.log("ERROR message", e.message);
    alert("ERROR MESSAGE:", e.message);
  }
}

export async function CreateUser(name, image, sports) {
  try {
    const response = await axios.post(
      "https://404404fb-e9a1-458e-bc65-95b20051eec1.mock.pstmn.io/members",
      {
        name,
        image,
        sports,
      }
    );
    console.log("USER CREATED RESPONSE:", response);
    alert("USER CREATED");
    return response;
  } catch (e) {
    console.log("ERROR message", e.message);
    alert("ERROR MESSAGE:", e.message);
  }
}

// export { GetMembers, GetSports };
