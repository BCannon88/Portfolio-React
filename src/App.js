import React, { useState } from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Projects from './components/Projects';
import ContactForm from './components/Contact';
import Resume from './components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  const [categories] = useState([
    {
      name: 'Rage Against The Recruiters',
      description: 'Tech recruiters overwhelmingly send out “shotgun” blasts of job opportunities to developers without actually confirming that the developer is qualified or even wants the position. Instead of wasting everyone’s time with pointless interviews and shuffling paperwork back and forth only to determine that it was not a good fit…. Why not use a Pre-Screening tool for the developer? ',
      appLink: 'https://ratr20.herokuapp.com/',
      repoLink: 'https://github.com/BCannon88/Rage-Against-The-Recruiters'
    },
    {
      name: 'Live Music Search',
      description: 'An app for searching Ticketmaster events for live music performances',
      appLink: 'https://bcannon88.github.io/Refactor-The-Soup/',
      repoLink: 'https://github.com/BCannon88/Refactor-The-Soup'
    },

    {
      name: 'Run Buddy',
      description: 'A website that offers fitness training services.',
      appLink: 'https://lernantino.github.io/run-buddy/',
      repoLink: 'https://github.com/BCannon88/run-buddy'
    },
    {
      name: 'Refactor The Soup',
      description: 'To clean up this DIV soup for other developers to work with ease.To also ensure site functions properly and HTML5 and CSS follow semantic order.',
      appLink: 'https://bcannon88.github.io/Refactor-The-Soup/',
      repoLink: 'https://github.com/BCannon88/Refactor-The-Soup'
    },
    {
      name: 'Budget Tracker',
      description: 'Better Finance Management.',
      appLink: 'https://github.com/BCannon88/Budget-Tracker',
      repoLink: 'https://github.com/BCannon88/Budget-Tracker'
    },
    {
      name: 'Note Taker',
      description: 'An application used to create and track notes using Express.',
      appLink: 'https://cryptic-sea-80259.herokuapp.com/',
      repoLink: 'https://github.com/BCannon88/Note-Taker'
    },
    {
      name: 'ChoreWallet',
      description: 'An application used to create and track chores and make payments for completed chores',
      appLink: 'https://chore-wallet924376.herokuapp.com/',
      repoLink: 'https://github.com/Trayehunter1/ChoreWallet'
    },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div style={{ backgroundColor: "#645e20", width: "100%", minHeight: "100%" }}>
      <Header>
        <Navigation
          contactSelected={contactSelected}
          setContactSelected={setContactSelected}
        ></Navigation>
      </Header>
      <About></About>
      <Projects categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}>
      </Projects>
      <ContactForm></ContactForm>
      <Resume></Resume>
      <Footer></Footer>
      <main>

      </main>
    </div>
  );
}

export default App;
