import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MonitoringCen = () => {
  const [tokenPrices, setTokenPrices] = useState([]);

  useEffect(() => {
    const fetchTokenPrices = async () => {
      try {
        const response = await axios.get('https://testnet.explorer.taraxa.io/');
        console.log(response.data); // Wyświetlenie pobranych danych w konsoli
        setTokenPrices(response.data);
      } catch (error) {
        console.error('Błąd podczas pobierania danych o cenach tokenów:', error);
      }
    };

    fetchTokenPrices();
  }, []);

  return (
    <div>
      <h2>Monitoring cen tokenów</h2>
      <table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          {tokenPrices.map((token, index) => (
            <tr key={index}>
              <td>{token.name}</td>
              <td>{token.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MonitoringCen;
