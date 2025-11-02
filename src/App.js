import React, { useState, useEffect } from 'react';
import './App.css';

const TypewriterText = ({ text, speed = 100, delay = 500 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (started && index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayText((prevText) => prevText + text.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, speed);

      return () => clearTimeout(timeoutId);
    }
  }, [started, index, text, speed]);

  const isTypingComplete = index >= text.length;

  return (
    <span>
      {displayText}
      <span className={`cursor ${isTypingComplete ? 'cursor-static' : ''}`}>_</span>
    </span>
  );
};

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1 className="name">
          <TypewriterText text="Hi, I'm Angelina!" speed={100} delay={600} />
        </h1>
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
            I'm a product-obsessed builder based in SF, currently tinkering at Meta Superintelligence Labs. 
            
          </p>
          {/* <p> 
            In June, I graduated from UCLA with a double major in Computer Science and Economics 
            and concentration in Value Investing.
            Before Meta, I shipped products as a software engineer at <a href="https://mercury.com/" target="_blank" rel="noopener noreferrer">Mercury</a>, 
            <a href="https://joincheckmate.com/" target="_blank" rel="noopener noreferrer">Checkmate</a>, and PayPal. 
            I also explored product and revenue cycle management at <a href="https://papayapay.com/" target="_blank" rel="noopener noreferrer">Papaya</a> as a Bessemer Fellow.
          </p> */}
          <p>
            I love building and backing early ideas. I previously dove deep into fintech with the incredible teams at <a href="https://mercury.com/" target="_blank" rel="noopener noreferrer">Mercury</a>,  <a href="https://joincheckmate.com/" target="_blank" rel="noopener noreferrer">Checkmate</a>, <a href="https://papayapay.com/" target="_blank" rel="noopener noreferrer">Papaya</a>, and PayPal.
            Simultaneously, I caught the venture bug investing part-time at General Catalyst leading their Venture Fellowship (fka Rough Draft Ventures). 

          </p>

          <p>
            I also angel invest and have been very grateful to back: <a href="https://osmosis.ai/" target="_blank" rel="noopener noreferrer">Osmosis</a> (YC W25),  <a href="https://aeolus.earth/" target="_blank" rel="noopener noreferrer">Aeolus</a>  (Thiel Fellow 2025), <a href="https://basalt.space/" target="_blank" rel="noopener noreferrer">Basalt</a> (YC W24), and <a href="https://www.tryminerva.ai/" target="_blank" rel="noopener noreferrer">Minerva AI</a> (YC S25).
          </p>
          <p>
            For fun, I love snowboarding, hosting dinner parties and poker nights, coffee, running to house music (Sammy Virji, Mau P), and updating my <a href="https://beliapp.co/app/alue" target="_blank" rel="noopener noreferrer">Beli</a>  :) 
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
        <div className="footer-icons">
          <a href="mailto:alue8@ucla.edu" aria-label="Email"><i className="fas fa-envelope"></i></a>
          <a href="https://www.linkedin.com/in/angelina-lue" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
          <a href="https://x.com/angelina_lue?s=21" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
        </div>
        <div className="footer-copyright">
          © 2025 Angelina Lue
        </div>
      </footer>
    </div>
  );
}

export default App;
