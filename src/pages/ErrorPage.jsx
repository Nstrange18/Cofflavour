import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';
import '../styles/ErrorPage.css';

const ErrorPage = () => {
    const error = useRouteError();
    const navigate = useNavigate();

    return (
        <div className="error-page-container fade-in">
            <div className="error-content">
                <div className="error-icon-wrapper">
                    <span>☕</span>
                </div>
                <h1 className="error-heading">Oops! Something spilled.</h1>
                <p className="error-subtext">
                    We're sorry, but we encountered an unexpected error while trying to fetch that for you.
                </p>
                
                <div className="error-details">
                    <p className="error-message">
                        <i>{error?.statusText || error?.message || "Unknown error occurred"}</i>
                    </p>
                </div>
                
                <div className="error-actions">
                    <button className="btn-primary" onClick={() => navigate('/')}>
                        Back to Home
                    </button>
                    <button className="btn-outline" onClick={() => navigate(-1)}>
                        Go Back
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
