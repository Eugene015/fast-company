import React from "react";
import Quality from "./quality";
import Bookmark from "./bookmark";

const User = (props) => {
  return (
    <>
      {props.usersData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Избранное</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {props.usersData.map((user) => (
              <tr key={user._id}>
                <td>{user.name}</td>
                <td>
                  <Quality {...user} />
                </td>
                <td>{user.profession.name}</td>
                <td>{user.completedMeetings}</td>
                <td>{user.rate} /5</td>
                <td>
                  <Bookmark onToggle={props.onToggle} {...user} />
                </td>
                <td>
                  <button
                    onClick={() => props.onDelete(user._id)}
                    className="btn btn-danger"
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default User;
