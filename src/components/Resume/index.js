import React from "react";

function Resume() {
    return (
        <section className="container">
            <h1 className="title" id="resume">Resume</h1>
            <hr></hr>
            <div> <a href="https://www.linkedin.com/in/baron-cannon-331140105/">linkedin</a>
            </div>
            <div>
                <div className="mt-5">
                    <h2 className="top-title">Baron Cannon</h2>
                    <ul className="list-unstyled">
                        <li>
                            A Junior Web Developer Looking for the opportunity to express my love for web development that can change peoples lives.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="justify-content-center mt-5">
                <div>
                    <h2 className="top-title">Front-end talents</h2>
                    <ul>
                        <li>
                            HTML
                        </li>
                        <li>
                            CSS
                        </li>
                        <li>
                            Git
                        </li>
                        <li>
                            JavaScript
                        </li>
                        <li>
                            Mobile First Design
                        </li>
                    </ul>
                </div>
            </div>

            <div className="justify-content-center mt-5">
                <div>
                    <h2 className="top-title">Back-end Talents: Follow the MERN Stack</h2>
                    <ul>
                        <li>
                            Web APIs
                        </li>
                        <li>
                            Server APIs
                        </li>
                        <li>
                            Node
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            MySQL
                        </li>
                        <li>
                            NoSQL
                        </li>
                        <li>
                            PWA's
                        </li>
                        <li>
                            MongoDB
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;