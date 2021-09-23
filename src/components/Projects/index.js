import React from 'react';
import ProjectList from '../ProjectList';
import { capitalizeFirstLetter } from '../../utils/helpers';
import Nav from 'react-bootstrap/Nav'

function Projects(props) {


    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;


    return (
        <Nav defaultActiveKey="/" className="flex-column" style={{ backgroundColor: "#723d05", width: "100%", minHeight: "100%" }}>

            <ul className="flex-row" id="projects">
                <br></br>
                <br></br>
                <br></br>
                <h2>Portfolio: A collection of works</h2>

                {categories.map((category) => (
                    <li
                        className={`mx-1 ${currentCategory.name === category.name
                            }`}
                        key={category.name}
                    >
                        <span
                            onClick={() => {
                                setCurrentCategory(category)
                            }}
                        >
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))}
            </ul>
            <p>{currentCategory.name}</p>
            <p>{currentCategory.description}</p>
            <p>{currentCategory.appLink}</p>
            <p>{currentCategory.repoLink}</p>

            <ProjectList category={currentCategory.name}
            />

        </Nav>
    );
}

export default Projects;