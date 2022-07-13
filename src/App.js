import React, { useState } from "react";
import User from "./components/user";
import SearchStatus from "./components/searchStatus";
import api from "./api";

const App = () => {
  let [users, setUsers] = useState(api.users.fetchAll());

  const handleDelete = (userId) =>
    setUsers(users.filter((user) => user._id !== userId));

  const handleToggleBookmark = (id) => {
    const usersBookmarked = users.map((item) => {
      item._id === id && item.bookmark === false
        ? (item.bookmark = true)
        : (item.bookmark = false);
      return item;
    });
    return setUsers(usersBookmarked);
  };

  return (
    <>
      <SearchStatus usersData={users} />
      <User
        onDelete={handleDelete}
        onToggle={handleToggleBookmark}
        usersData={users}
      />
    </>
  );
};

export default App;
