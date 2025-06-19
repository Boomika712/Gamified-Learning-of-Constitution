// src/components/FlipCard.jsx
import React, { useRef, useState, useEffect } from "react";
import "./FlipCard.css"; // Import the CSS file


const FlipCard = ({ imgSrc, simplifiedContent, fullContent, id }) => {
  const [flipped, setFlipped] = useState(false);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(300, 400);
    cardRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(2, 3, 0.1);
    const material = new THREE.MeshBasicMaterial({
      map: new THREE.TextureLoader().load(imgSrc),
      side: THREE.DoubleSide,
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      if (flipped) {
        cube.rotation.y += 0.05;
      }
      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }, [flipped, imgSrc]);

  return (
    <>
      {/* Flip Card */}
      <div className="flip-card-container">
        <div className="flip-card">
          {/* Front Side */}
          <div className="front">
            <img src={imgSrc} alt="Article" />
          </div>

          {/* Back Side */}
          <div
            className="back"
            onClick={() => setIsModalOpen(true)} // Open modal on click
          >
            <p>{simplifiedContent}</p>
          </div>
        </div>
      </div>

      {/* Modal for Full Content */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <p>{fullContent}</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
};


export default FlipCard;
