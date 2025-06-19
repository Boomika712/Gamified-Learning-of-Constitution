import React from 'react';
import './LandingPage.css';
import { BubbleChat } from 'flowise-embed-react';

function LandingPage() {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Word Games!</h1>
        <p>Challenge your mind and have fun with our interactive word games.</p>
      </header>

      <section className="games-overview">
        <h2>Choose Your Game</h2>
        <div className="game-cards">
          {/* Word Guessing Game */}
          <div className="game-card">
            <h3>Word Guessing Game</h3>
            <a href="/WordGuessingGame/index.html">
              <button>Play Now</button>
              </a>
          </div>

          {/* Word Scramble Game */}
          <div className="game-card">
            <h3>Word Scramble Game</h3>
            {/* Link directly to the index.html in public/WordScrambleGame */}
            <a href="/WordScrambleGame/index.html">
              <button>Play Now</button>
            </a>
          </div>

          {/* Word Search Game */}
          <div className="game-card">
            <h3>Word Searching Game</h3>
            <a href="/WordSearchGame/index.html">
              <button>Play Now</button>
            </a>

          </div>
        </div>
      </section>

      <footer className="landing-footer">
        <p>&copy; 2024 Word Games. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;
