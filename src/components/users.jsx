import React from "react";
import { useParams } from "react-router-dom";
import AllUsers from "./allUsers";
import UserPage from "../components/userPage";

const Users = () => {
    const { userId } = useParams();
    return <>{userId ? <UserPage id={userId} /> : <AllUsers />}</>;
};

export default Users;
