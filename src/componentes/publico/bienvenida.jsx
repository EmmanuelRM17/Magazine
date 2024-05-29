import React from 'react';
import { motion } from 'framer-motion';


const Welcome = () => {
  return (
    <section className="hero" style={{ backgroundColor: '#6a6f77', padding: '50px 0', minHeight: '70vh' }}>
      <div className="hero-body">
        <div className="container has-text-centered">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="title has-text-white" style={{ fontSize: '3rem', fontWeight: 'bold' }}>
              Bienvenido
            </h1>
            <h2 className="subtitle has-text-white" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              Las mejores revistas interactivas en un solo lugar.
            </h2>
            <div className="columns is-vcentered is-centered">
              <div className="column is-half">
              </div>
              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;



