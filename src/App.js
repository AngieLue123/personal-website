import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1 className="name">Hi, I'm Angelina!</h1>
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
            I'm a product-obsessed builder based in SF.
            I recently graduated from UCLA with a double major in Computer Science and Economics 
            and concentration in Value Investing.
          </p>
          <p> 
            I most recently worked at Meta as an engineer building applied AI products. Before this, I shipped products with the incredible teams at <a href="https://mercury.com/" target="_blank" rel="noopener noreferrer">Mercury</a>, <a href="https://joincheckmate.com/" target="_blank" rel="noopener noreferrer">Checkmate</a>, <a href="https://papayapay.com/" target="_blank" rel="noopener noreferrer">Papaya</a>, and PayPal as a product and software engineer. 
          </p>
          <p>
            While at UCLA, I caught the venture bug and invested part-time at General Catalyst (leading their Venture Fellowship), Mantis VC (the Chainsmokers' venture fund), and NEA. 
            I also angel invest and have been very grateful to back <a href="https://aeolus.earth/" target="_blank" rel="noopener noreferrer">Aeolus</a>, <a href="https://basalt.space/" target="_blank" rel="noopener noreferrer">Basalt</a>, and <a href="https://www.tryminerva.ai/" target="_blank" rel="noopener noreferrer">Minerva AI</a>.
          </p>
          <p>
            For fun, I love snowboarding, hosting dinner parties and poker nights, coffee, running to house music (Fisher, Sammy Virji, Mau P), and updating my <a href="https://beliapp.co/app/alue" target="_blank" rel="noopener noreferrer">Beli</a>  :) 
          </p>
          <p>
            I love meeting new people, please introduce yourself! Reach me at alue8 [at] ucla [dot] edu
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
        <p>
          <a href="mailto:alue8@ucla.edu">Email</a>  •  <a href="https://www.linkedin.com/in/angelina-lue" target="_blank" rel="noopener noreferrer">LinkedIn</a>  •  <a href="https://x.com/angelina_lue?s=21" target="_blank" rel="noopener noreferrer">Twitter</a>  •   © 2025 Angelina Lue
        </p>
      </footer>
    </div>
  );
}

export default App;
