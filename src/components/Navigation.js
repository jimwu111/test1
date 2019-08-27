import React from 'react';
import {Link} from 'react-router-dom';

export default () => (
    <div>
        <Link className="btn btn-primary" to="/">
            List ToDo
        </Link>
        <Link className="btn btn-secondary" to="/new-item">
            + Add New
        </Link>
    </div>
);