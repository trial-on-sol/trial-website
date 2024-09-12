import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Menu */}
      <nav className="navbar">
        <ul>
          <li><a href="#how-to-buy">How to Buy</a></li>
          <li><a href="#roadmap">Roadmap</a></li>
        </ul>
      </nav>

      {/* Headline Section */}
      <header id="home" className="App-header">
        <h1 className="headline">Trial and Error</h1>

        {/* Socials - Placeholder for images */}
        <nav className="socials">
          <a href="http://t.me/trialanderrorPortal" target="_blank" rel="noopener noreferrer">
            <img src="/Drawing-9.sketchpad.png" alt="Telegram" />
          </a>
          <a href="https://x.com/trialcoin" target="_blank" rel="noopener noreferrer">
            <img src="X.png" alt="X" />
          </a>
          <a href="https://dexscreener.com/solana/8vrml7gnlckcdcdoxoygzfarw6tkfi5s73a8fxhmjphb" target="_blank" rel="noopener noreferrer">
            <img src="DEX.png" alt="DexScreener" />
          </a>
          <a href="https://www.youtube.com/@TriAL-p7t" target="_blank" rel="noopener noreferrer">
            <img src="Youtube.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/_trialanderror404/?utm_source=qr&igsh=MXd4OHY3bXhxNTAyZw%20%20" target="_blank" rel="noopener noreferrer">
            <img src="Insta.png" alt="Instagram" />
          </a>
          <a href="https://www.tiktok.com/@trial.and.error404" target="_blank" rel="noopener noreferrer">
            <img src="Tiktok.png" alt="TikTok" />
          </a>
        </nav>

        {/* Wallet Address */}
        <p className="wallet-address">
          Ca: 3CjEaMBnggfTyVMbjtFZhhj8FnzSV5cMo6WChJpjpump
        </p>
      </header>

      {/* How to Buy Section */}
      <section id="how-to-buy" className="section how-to-buy">
        <h2>How to Buy</h2>
        <ol>
          <li>Dowload a Wallet like Phantom.</li>
          <p></p>
          <li>Connect your wallet to an exchange.</li>
          <p></p>
          <li>Buy Trial and Error using SOL.</li>
          <p></p>
          <li>Do some trial and error. </li>
        </ol>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="section roadmap">
        <h2>Roadmap</h2>
        <div className="roadmap-container">
          <div className="roadmap-content">
            <div className="roadmap-item">Phase 1: Community Building</div>
            <div className="roadmap-item">Phase 2: Game release</div>
            <div className="roadmap-item">Phase 3: Explosive marketing</div>
            <div className="roadmap-item">Phase 4: Expansion / Partnerships</div>
            <div className='roadmap-item'>Phase 5: Trial Utility Launch</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
