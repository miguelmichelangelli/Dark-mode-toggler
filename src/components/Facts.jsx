import React from "react";

function Facts({ isDarkMode }) {

    return(
        <main className={ isDarkMode ? 'main--dark' : ''}>
            <h1>React Facts that you should know</h1>
            <ul>
                <li>
                    <strong>Components:</strong> React is based on reusable components to build interfaces.
                </li>
                <li>
                    <strong>JSX:</strong> Allows writing HTML in JavaScript, making UI creation easier.

                </li>
                <li>
                    <strong>Virtual DOM:</strong> Improves performance by updating only changed elements.

                </li>
                <li>
                    <strong>State and Props:</strong> State manages internal data; props pass data between components.
                </li>
                <li>
                <strong>Lifecycle:</strong> React has mounting, updating, and unmounting phases for its components.
                </li>
                <li>
                    <strong>Hooks:</strong> Allow using state and effects without classes (useState, useEffect).
                </li>
                <li>
                    <strong>Context API:</strong> Shares data globally without manually passing props.
                </li>
                <li>
                    <strong>React Router:</strong> Manages navigation in single-page applications (SPAs).
                </li>
            </ul>
        </main>
    )
}

export default Facts