import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test4 = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then((response) => {
        setData(response.data);
        console.log(response.data)
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setData(null);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!data) {
    return <div>Loading...</div>;
  } else {
    const { bpi } = data;

    return (
      <div>
        <h2>Bitcoin Price Index</h2>
        <ul>
          {Object.keys(bpi).map((key) => (
            <li key={key}>
              {bpi[key].code}: {bpi[key].rate}
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Test4;
