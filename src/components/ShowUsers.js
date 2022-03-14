import React from "react";
import "../App.css";

function ShowUsers(props) {
  return (
    <div>
      {props.users.map((user, index) => {
        return (
          <ul>
            <li key={user.id}>
              <strong>ID: </strong> {user.id}, <strong>Ime: </strong>{" "}
              {user.name}, <strong>Godine:</strong> {user.years}{" "}
              <button onClick={() => props.onUserDelete(index)}>
                <strong>X</strong>
              </button>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default ShowUsers;
