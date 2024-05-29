import React from 'react';
import { motion } from 'framer-motion';
import Revista from "../Imagenes/Revista1.png"
import Revista2 from "../Imagenes/Revista2.png"
import Revista3 from "../Imagenes/Revista3.png"
import Revista4 from "../Imagenes/Revista4.png"
import Revista5 from "../Imagenes/Revista5.png"
import Revista6 from "../Imagenes/Revista6.jpg"

const Welcome = () => {

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '30px',
    justifyContent: 'center',
    alignItems: 'center',
  };
  const imageStyle = {
    width: '250px', // Ajusta el ancho al 100% de su contenedor
    height: 'auto', // Mantén la proporción original
    maxWidth: '500px', // Ajusta este valor para aumentar el tamaño máximo de las imágenes
    borderRadius: '10px', // Radio de borde de 10px
    
  };

  return (
    <section className="hero" style={{ backgroundColor: '#6a6f77', padding: '10px 0', minHeight: '70vh' }}>
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
          <div className="columns is-centered is-vcentered">
            <div className="column is-three-quarters" style={gridStyle}>
              <img src={Revista} alt="Revista1" style={imageStyle} />
              <img src={Revista2} alt="Revista2" style={imageStyle} />
              <img src={Revista3} alt="Revista3" style={imageStyle} />
              <img src={Revista4} alt="Revista4" style={imageStyle} />
              <img src={Revista5} alt="Revista5" style={imageStyle} />
              <img src={Revista6} alt="Revista6" style={imageStyle} />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default Welcome;



