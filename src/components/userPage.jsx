import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import api from "../api";
import { useHistory } from "react-router-dom";
import QualitiesList from "./qualitiesList";

const UserPage = ({ id }) => {
    const usersHistory = useHistory();
    const [user, setUser] = useState();
    useEffect(() => {
        api.users.getById(id).then((item) => setUser(item));
    }, []);
    const handleGoToAllUsers = () => {
        usersHistory.replace("/users");
    };
    if (user) {
        return (
            <>
                <h1>{user.name}</h1>
                <h4>Профессия: {user.profession.name}</h4>
                <h4>Встретился раз: {user.completedMeetings}</h4>
                <QualitiesList qualities={user.qualities} />
                <h4>Оценка: {user.rate}</h4>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => handleGoToAllUsers()}
                >
                    Все пользователи
                </button>
            </>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

export default UserPage;

UserPage.propTypes = {
    id: PropTypes.string.isRequired
};
