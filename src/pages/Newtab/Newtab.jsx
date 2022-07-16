import React, { useState, useEffect } from 'react';
import { fetchGoogleSheets } from '../../utils';
import { ProductCard } from '../../components';

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
          <ProductCard key={i} product={item} />
        ))}
      </header>
    </div>
  );
};

export default Newtab;
