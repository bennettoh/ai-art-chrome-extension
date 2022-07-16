import React, { useState, useEffect } from 'react';
import { fetchGoogleSheets } from '../../utils';

const url = `https://docs.google.com/spreadsheets/d/1t6ntSRGvFm22WLxwq2xgsOmnWlQEO148j13LX9-XQT0/gviz/tq?tqx=out:csv`;

const Newtab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGoogleSheets(url).then((res) => setData(res));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data.map((item, i) => (
          <a href={item.link} key={i}>
            <h1>{item.name}</h1>
            <p>{item.listPrice}</p>
            <p>{item.withDeal}</p>
            <img src={item.image} style={{ width: 100 }} />
          </a>
        ))}
      </header>
    </div>
  );
};

export default Newtab;
