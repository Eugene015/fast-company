import React, { useState } from "react";
import api from "../api";
import "bootstrap/dist/css/bootstrap.css";

const Users = () => {
  const [users, setUsers] = useState(api.users.fetchAll());
  let tableHead = (
    <thead>
      <tr>
        <th scope="col">Имя</th>
        <th scope="col">Качества</th>
        <th scope="col">Профессия</th>
        <th scope="col">Встретился, раз</th>
        <th scope="col">Оценка</th>
        <th scope="col"></th>
      </tr>
    </thead>
  );

  const handleDelete = (userId) => {
    const buttonId = userId.target.getAttribute("id");
    return setUsers(users.filter((user) => user._id !== buttonId));
  };

  const renderPhrase = (number) => {
    const phraseBadgeBlue1AndMoreThen4 = (
      <span className="badge bg-primary m-2 p-3">
        {number} человек тусанет с тобой сегодня
      </span>
    );
    const phraseBadgeBlueFrom2To4 = (
      <span className="badge bg-primary m-2 p-3">
        {number} человека тусанут с тобой сегодня
      </span>
    );
    const phraseBadgeRed = () => {
      tableHead = !tableHead;
      return (
        <span className="badge bg-danger m-2 p-3">
          Никто с тобой не тусанет
        </span>
      );
    };
    return number >= 2 && number <= 4
      ? phraseBadgeBlueFrom2To4
      : number === 1 || number > 4
      ? phraseBadgeBlue1AndMoreThen4
      : phraseBadgeRed();
  };

  const usersTable = users.map((users) => {
    const rate = `${users.rate}/5 `;
    const usersQualities = users.qualities.map((quality) => {
      const badgeColor = `badge bg-${quality.color} m-1`;

      return (
        <span className={badgeColor} key={quality._id}>
          {quality.name}
        </span>
      );
    });

    return (
      <tr key={users._id}>
        <td>{users.name}</td>
        <td>{usersQualities}</td>
        <td>{users.profession.name}</td>
        <td>{users.completedMeetings}</td>
        <td>{rate}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={handleDelete}
            id={users._id}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h4>{renderPhrase(users.length)}</h4>
      <table className="table">
        {tableHead}
        <tbody>{usersTable}</tbody>
      </table>
    </div>
  );
};

export default Users;
