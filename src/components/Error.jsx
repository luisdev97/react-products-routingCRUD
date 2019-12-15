import React from 'react';

const Error = ({ messagge }) => {
    return (
        <p className="alert alert-danger p3 my-5 text-center text-uppercase font-weight-bold">
            { messagge }
        </p>
    );
};

export default Error;