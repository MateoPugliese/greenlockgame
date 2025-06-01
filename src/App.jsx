import { useState } from 'react';
import './App.css';
import logo from './assets/logo.png';
import { motion } from 'framer-motion';
import aboutHeader from './assets/about-header.jpg';
import teamHeader from './assets/team-header.png';

function App() {
  const [selected, setSelected] = useState('About');

  const renderContent = () => {
    const variants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    };

    return (
      <motion.div
        key={selected}
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 0.5 }}
      >
        {selected === 'About' && (
          <div className="about-section">
            <div
              className="about-header"
              style={{
                backgroundImage: `url(${aboutHeader})`
              }}
            ></div>
            <div className="about-content">
              <p>
                Greenlock is a PvE (Player versus Environment) video game set in a post-apocalyptic world where humanity has devastated the planet, leaving only one tree alive.<br /><br />
                The player takes on the role of an ecological guardian whose mission is to protect the last remnant of nature against hordes of environmental enemies such as polluting drones, deforestation machines, and creatures mutated by pollution.<br /><br />
                Through strategic defense mechanics, progressive upgrades, and a pixel art visual style, Greenlock aims not only to provide a challenging and entertaining experience but also to raise awareness about the importance of preserving natural resources in the face of climate change.
              </p>
            </div>
          </div>
        )}

        {selected === 'Team' && (
          <div className="team-section">
            <div
              className="team-header"
              style={{
                backgroundImage: `url(${teamHeader})`
              }}
            ></div>
            <div className="team-content">
              <p>
                Meet the crew!<br /><br />
                We are a group of passionate game developers who love to create unique and engaging experiences.
              </p>
              <div className="team-members">
                <div className="team-member">
                  <strong>Ismael Viloria</strong>
                  <p>Documentation Director & Project Manager</p>
                </div>
                <div className="team-member">
                  <strong>Deiber Hernández</strong>
                  <p>Design Director</p>
                </div>
                <div className="team-member">
                  <strong>Mateo Pugliese</strong>
                  <p>Testing Director</p>
                </div>
                <div className="team-member">
                  <strong>José Villa</strong>
                  <p>Developer</p>
                </div>
                <div className="team-member">
                  <strong>Ricardo Valencia</strong>
                  <p>Developer</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="app">
      <div
        className="sidebar"
        style={{
          width: selected === 'About' ? '320px' : '280px',
          padding: selected === 'About' ? '40px 25px' : '30px 20px'
        }}
      >
        <img src={logo} className="logo" alt="Logo" />
        <div className="menu">
          <button onClick={() => setSelected('About')}>› About</button>
          <button onClick={() => setSelected('Team')}>› Team</button>
        </div>
      </div>
      <div className="main-content">
        <h2>{selected}</h2>
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
