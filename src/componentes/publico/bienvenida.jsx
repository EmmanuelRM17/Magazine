import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import 'bulma/css/bulma.min.css';
import '../css/style.css';

// URL de la imagen predeterminada en caso de que el artículo no tenga una imagen
const defaultImage = 'https://via.placeholder.com/150';

const Welcome = () => {
  const [news, setNews] = useState([]);
  const [selectedNews, setSelectedNews] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const apiKey = 'pub_463320398ef2aa383c2f85e5a91f08128cad0';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&country=us`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setNews(data.results);
      })
      .catch(error => {
        console.error('Error al obtener las noticias:', error);
      });
  }, []);

  const openModal = (article) => {
    setSelectedNews(article);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setModalOpen(false);
  };

  const cardStyle = {
    backgroundColor: 'white', // Fondo blanco
    color: 'black', // Letras negras
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '300px', // Mínima altura para todas las cards
    overflow: 'hidden'
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    maxHeight: '150px',
    objectFit: 'cover',
    borderRadius: '10px'
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
              Bienvenido Yare
            </h1>
            <h2 className="subtitle has-text-white" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
              Las mejores revistas interactivas en un solo lugar.
            </h2>
            <div className="columns is-multiline is-centered">
              {news && news.map((article, index) => (
                <div key={index} className="column is-one-third">
                  <div className="card" style={cardStyle} onClick={() => openModal(article)}>
                    <img
                      src={article.image_url || defaultImage}
                      alt={article.title}
                      style={imageStyle}
                    />
                    <h3 style={{ marginTop: '15px', fontSize: '1.2rem' }}>{article.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      {modalOpen && selectedNews && (
        <div className="modal is-active">
          <div className="modal-background" onClick={closeModal}></div>
          <div className="modal-content" style={{ padding: '20px', maxWidth: '800px', margin: 'auto', backgroundColor: 'white', color: 'black', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="title is-3" style={{color: 'black'}}>{selectedNews.title}</h3>
            <div className="content">
              {selectedNews.pubDate && <p><strong style={{color: 'black'}}>Fecha de publicación:</strong> {new Date(selectedNews.pubDate).toLocaleDateString()}</p>}
              {selectedNews.creator && <p><strong style={{color: 'black'}}>Autor:</strong> {selectedNews.creator}</p>}
              <p>{selectedNews.description}</p>
              {selectedNews.content && <p><strong style={{color: 'black'}}>Contenido:</strong> {selectedNews.content}</p>}
              {selectedNews.image_url && (
                <img src={selectedNews.image_url} alt={selectedNews.title} style={{ maxWidth: '100%', height: 'auto', marginTop: '20px', borderRadius: '10px' }} />
              )}
              <p><strong style={{color: 'black'}}>Fuente:</strong> {selectedNews.source_id}</p>
              <p><strong style={{color: 'black'}}>URL:</strong> <a href={selectedNews.link} target="_blank" rel="noopener noreferrer">{selectedNews.link}</a></p>
            </div>
          </div>
          <button className="modal-close is-large" aria-label="close" onClick={closeModal}></button>
        </div>
      )}
    </section>
  );
};

export default Welcome;
//yareee 