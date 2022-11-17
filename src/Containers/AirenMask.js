import React from 'react';
import { useNavigate } from 'react-router-dom';

const AirenMask = () => {
    const Navigate = useNavigate();
    return (
        <div style={{ minHeight: "100vh", padding: "5rem 10rem" }}>
            <h1 style={{ color: "#978f8f" }}>Error (404)</h1>
            <h3 style={{ color: "#978f8f" }}>Page you are requesting does not exist.</h3>

            <div
                style={{ color: "#fff" }}
                className="c-pointer"
                onClick={() => Navigate("/")}
            >
                Go to Home
            </div>
        </div>
    )
}

export default AirenMask;