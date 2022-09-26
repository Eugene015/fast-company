import React from "react";
import { useQualities } from "../../../hooks/useQualities";
import PropTypes from "prop-types";

const Quality = ({ id }) => {
    const { isLoading, getQualities } = useQualities();

    const quality = getQualities(id);
    if (!isLoading) {
        return (
            <span className={"badge m-1 bg-" + quality.color}>
                {quality.name}
            </span>
        );
    } else return "Loading...";
};
Quality.propTypes = {
    id: PropTypes.string.isRequired
};

export default Quality;
