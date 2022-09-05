import React, { useEffect, useState } from "react";
import TextField from "../../common/form/textField";
import RadioField from "../../common/form/radioField";
import MultiSelectField from "../../common/form/multiSelectField";
import SelectField from "../../common/form/selectField";
import api from "../../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

const EditUserPage = ({ userId }) => {
    const history = useHistory();
    const [user, setUser] = useState();
    const [qualities, setQualities] = useState([]);
    const [professions, setProfession] = useState([]);

    useEffect(() => {
        api.users.getById(userId).then((user) => setUser(user));
    }, []);

    useEffect(() => {
        api.professions.fetchAll().then((data) => {
            const professionsList = Object.keys(data).map((professionName) => ({
                label: data[professionName].name,
                value: data[professionName]._id,
                key: professionName
            }));
            setProfession(professionsList);
        });
        api.qualities.fetchAll().then((data) => {
            const qualitiesList = Object.keys(data).map((optionName) => ({
                value: data[optionName]._id,
                label: data[optionName].name,
                color: data[optionName].color,
                key: optionName
            }));
            setQualities(qualitiesList);
        });
    }, []);

    const handleChange = (target) => {
        if (target.name === "profession") {
            const profession = professions.find(
                (profession) => profession.value === target.value
            );
            target.value = {
                _id: profession.value,
                name: profession.label
            };
        }
        if (target.name === "qualities") {
            const qualities = target.value.map((quality) => ({
                _id: quality.value,
                name: quality.label,
                color: quality.color
            }));
            target.value = [...qualities];
        }
        setUser((prev) => ({
            ...prev,
            [target.name]: target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        api.users.update(userId, user);
        history.replace(`/users/${userId}`);
    };

    if (user && professions) {
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6 offset-md-3 shadow p-4">
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                            />
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                            />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                options={professions}
                                name="profession"
                                onChange={handleChange}
                                value={user.profession._id}
                            />
                            <RadioField
                                options={[
                                    { name: "Male", value: "male" },
                                    { name: "Female", value: "female" },
                                    { name: "Other", value: "other" }
                                ]}
                                value={user.sex}
                                name="sex"
                                onChange={handleChange}
                                label="Выберите ваш пол"
                            />
                            <MultiSelectField
                                options={qualities}
                                onChange={handleChange}
                                defaultValue={user.qualities.map((item) =>
                                    qualities.find((quality) =>
                                        quality.value === item._id
                                            ? quality
                                            : ""
                                    )
                                )}
                                name="qualities"
                                label="Выберите ваши качества"
                            />
                            <button
                                className="btn btn-primary w-100 mx-auto"
                                type="submit"
                            >
                                Обновить
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    } else {
        return <h1>Loading...</h1>;
    }
};

EditUserPage.propTypes = {
    userId: PropTypes.string.isRequired
};

export default EditUserPage;
