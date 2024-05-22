import React, { useEffect, useState } from 'react';

const Revistas = () => {
  const [revistas, setRevistas] = useState([]);

  useEffect(() => {
    const fetchRevistas = async () => {
      try {
        const response = await fetch('https://api.redalyc.org/your-endpoint', {
          headers: {
            'Authorization': 'Bearer YOUR_API_KEY'
          }
        });
        const data = await response.json();
        setRevistas(data.results);
      } catch (error) {
        console.error('Error fetching revistas:', error);
      }
    };

    fetchRevistas();
  }, []);

  return (
    <section className="section" style={{ backgroundColor: '#F5F5F5', padding: '50px 0' }}>
      <div className="container">
        <h1 className="title has-text-centered">Revistas Científicas de Diseño e Implementación de yare</h1>
        <div className="columns is-multiline">
          {revistas.map(revista => (
            <div className="column is-one-third" key={revista.id}>
              <div className="card">
                <div className="card-content">
                  <p className="title">{revista.title}</p>
                  <p className="subtitle">{revista.publisher}</p>
                  <div className="content">
                    {revista.description}
                    <br />
                    {revista.link && (
                      <a href={revista.link} target="_blank" rel="noopener noreferrer">Leer más</a>
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
