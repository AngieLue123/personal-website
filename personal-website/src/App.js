import React from 'react';
import './App.css';
import WorkSection from './WorkSection.js';


function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1 className="name">Angelina Lue</h1>
        {/* <p className="title">Software Engineer | Problem Solver | Innovator</p> */}
      </header>

      {/* Main Content */}
      <main className="App-content">
        {/* About Section */}
        <section id="about" className="section">
          <h2>About</h2>
          <p>
            Hi, I'm Angelina! I specialize in creating impactful solutions at the intersection of
            technology and user experience. I'm passionate about building elegant, efficient systems that
            solve real-world problems.
          </p>
        </section>
        <WorkSection />
        {/* Projects Section */}
        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project Name</h3>
            <p>A brief description of this project. Something about its features, technology, or purpose.</p>
          </div>
          <div className="project">
            <h3>Another Project</h3>
            <p>A short summary of another project. Highlight what makes it special or interesting.</p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <h2>Contact</h2>
          <p>
            I love meeting new people! Reach me at <a href="mailto:alue@gc-fellows.com">alue@gc-fellows.com</a>.
          </p>
          <p>
            Connect on <a href="https://www.linkedin.com/in/angelina-lue/">LinkedIn</a>.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>© 2024 Angelina. Built with ❤️ and React.</p>
      </footer>
    </div>
  );
}

export default App;
