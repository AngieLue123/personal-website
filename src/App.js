import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1 className="name">Angelina Lue</h1>
        <nav>
          {/* <a href="#writing">writing</a> */}
          {/* <a href="#experience">experience</a> */}
          {/* <a href="#projects">projects</a> */}
        </nav>
      </header>

      {/* Main Content */}
      <main className="App-content">
        {/* About Section */}
        <section id="about" className="section">
          <p>
            Hi! I'm Angelina! I am a product-obsessed builder based in the SF Bay Area. 
            I recently graduated from UCLA with a double major in Computer Science and Economics and concentration in Value Investing.
          </p>
          <p> 
            I most recently worked at Meta as an engineer building applied AI products. I have also been lucky to build with the incredible teams at Mercury, Checkmate, Papaya, and PayPal. 
          </p>
          <p>
            While at UCLA, I caught the venture bug and invested part-time at General Catalyst leading their Venute Fellowship, Mantis VC (the Chainsmokers' venture fund), and NEA. 
            I also angel invest and have been very grateful to back Aeolus, Basalt, and Minerva AI.
          </p>
          <p>
            For fun, I love to snowboard, host dinners and poker nights, and update my <a href="https://beliapp.co/app/alue">Beli</a>  :) 
          </p>
          <p>
            I love meeting new people, please introduce yourself! Reach me at alue8 [at] ucla [dot] edu or 
            message me on <a href="https://www.linkedin.com/in/angelina-lue/">LinkedIn</a>.
          </p>
        </section>

        {/* <section id="experience" className="section">
          <WorkSection />
        </section> */}
        
        {/* Projects Section */}
        {/* <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project Name</h3>
            <p>A brief description of this project. Something about its features, technology, or purpose.</p>
          </div>
          <div className="project">
            <h3>Another Project</h3>
            <p>A short summary of another project. Highlight what makes it special or interesting.</p>
          </div>
        </section> */}
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p><a href="https://www.linkedin.com/in/angelina-lue">LinkedIn</a>  •  <a href="https://x.com/angelina_lue?s=21">Twitter</a>  •   © 2025 Angelina Lue</p>
      </footer>
    </div>
  );
}

export default App;
