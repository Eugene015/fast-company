import React from "react";
import { useParams, Redirect } from "react-router-dom";
import EditUserPage from "../components/page/editUserPage";
import UserPage from "../components/page/userPage";
import UsersListPage from "../components/page/usersListPage";
import { useAuth } from "../hooks/useAuth";
import UserProvider from "../hooks/useUsers";

const Users = () => {
    const params = useParams();
    const { userId, edit } = params;
    const { currentUser } = useAuth();
    const toEditPage = () => {
        if (currentUser._id !== userId) {
            return <Redirect to={`/users/${currentUser._id}/edit`} />;
        }
        return <EditUserPage />;
    };
    return (
        <>
            <UserProvider>
                {userId ? (
                    edit ? (
                        toEditPage()
                    ) : (
                        <UserPage userId={userId} />
                    )
                ) : (
                    <UsersListPage />
                )}
            </UserProvider>
        </>
    );
};

export default Users;
