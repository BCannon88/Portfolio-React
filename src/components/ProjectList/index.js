import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row'
// import Modal from '../Modal';

const ProjectList = ({ category }) => {

    const [projects] = useState([
        {
            project: 'Rage Against The Recruiters',
            category: 'Rage Against The Recruiters',
            name: 'Rage Against The Recruiters',
            description: 'Tech recruiters overwhelmingly send out “shotgun” blasts of job opportunities to developers without actually confirming that the developer is qualified or even wants the position. Instead of wasting everyone’s time with pointless interviews and shuffling paperwork back and forth only to determine that it was not a good fit…. Why not use a Pre-Screening tool for the developer?',
            appLink: 'https://ratr20.herokuapp.com/',
            repoLink: 'https://github.com/BCannon88/Rage-Against-The-Recruiters'
        },
        {
            project: 'Refactor The Soup',
            name: 'Refactor The Soup',
            category: 'Refactor The Soup',
            description: 'To clean up this DIV soup for other developers to work with ease.To also ensure site functions properly and HTML5 and CSS follow semantic order.',
            appLink: 'https://bcannon88.github.io/Refactor-The-Soup/',
            repoLink: 'https://github.com/BCannon88/Refactor-The-Soup'
        },
        {
            project: 'Live Music Search',
            category: 'Live Music Search',
            name: 'Live Music Search',
            description: 'An app for searching Ticketmaster events for live music performances.',
            appLink: 'https://twyllblackleaf.github.io/live-music-search/',
            repoLink: 'https://github.com/BCannon88/live-music-search'
        },
        {
            project: 'Run Buddy',
            category: 'Run Buddy',
            name: 'Run Buddy',
            description: 'A website that offers fitness training services.',
            appLink: 'https://lernantino.github.io/run-buddy/',
            repoLink: 'https://github.com/BCannon88/run-buddy'
        },
        {
            project: 'Budget Tracker',
            category: 'Budget Tracker',
            name: 'Budget Tracker',
            description: 'Better Finance Management.',
            appLink: 'BCannon88 https://github.com/BCannon88',
            repoLink: 'BCannon88 https://github.com/BCannon88'
        },
        {
            project: 'Note Taker',
            category: 'Note Taker',
            name: 'Note Taker',
            description: 'An application used to create and track notes using Express.',
            appLink: 'https://cryptic-sea-80259.herokuapp.com/',
            repoLink: 'https://github.com/BCannon88/Note-Taker'
        },
        {
            project: 'ChoreWallet',
            category: 'ChoreWallet',
            name: 'ChoreWallet',
            description: 'An application used to create and track chores and make payments for completed chores.',
            appLink: 'https://chore-wallet924376.herokuapp.com/',
            repoLink: 'https://github.com/Trayehunter1/ChoreWallet'
        },
    ]);

    const currentProjects = projects.filter((project) => project.category === category);

    return (
        <Container>
            <Row className="flex-row">
                {currentProjects.map((image, i) => (
                    <img
                        src={require(`../../assets/projects-images/${category}/${i}.png`).default}
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
                    />
                ))}
            </Row>
        </Container>
    );
}

export default ProjectList;