import React, { useEffect, useState } from 'react';

const Revistas = () => {
  const [revistas, setRevistas] = useState([]);
  const API_KEY = '9a8036c32941f40db751183bfbebee21';

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        console.log('Iniciando la solicitud a la API de Springer Nature...');
        const response = await fetch(`https://api.springernature.com/meta/v2/json?q=journal&api_key=${API_KEY}`, {
          headers: {
            'Authorization': `Bearer ${API_KEY}`
          }
        });
        console.log('Respuesta de la API recibida.');
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        const data = await response.json();
        console.log('Datos recibidos de la API:', data);
        setRevistas(data.records);  // Ajusta esto según la estructura de la respuesta de la API
      } catch (error) {
        console.error('Error fetching revistas:', error);
      }
    };

    fetchRevistas();
  }, [API_KEY]);

  return (
    <section className="section" style={{ backgroundColor: '#212121', padding: '50px 0' }}>
      <div className="container">
        <h1 className="title has-text-centered">Revistas Científicas</h1>
        <div className="columns is-multiline">
          {revistas.map(revista => (
            <div className="column is-one-third" key={revista.identifier}>
              <div className="card">
                <div className="card-content">
                  <p className="title">{revista.title}</p>
                  <p className="subtitle">{revista.publicationName}</p>
                  <div className="content">
                    {revista.abstract}
                    <br />
                    {revista.url && (
                      <a href={revista.url} target="_blank" rel="noopener noreferrer">Leer más</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Revistas;
