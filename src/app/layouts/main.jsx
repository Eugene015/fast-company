import React from "react";

const Main = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    <h1 className="fw-bold pb-4">Fast Company</h1>
                    <p>
                        Educational project in React JS technology with
                        functional components and hooks: useState, useEffect,
                        useHistory, useParams.
                    </p>
                    <p>
                        Implemented Fake REST API data fetching is to pull data.
                        Used an array of objects and object of objects to
                        display content in the components.
                    </p>
                    <p>
                        Please, use the navigation menu above to study all the
                        project features.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
