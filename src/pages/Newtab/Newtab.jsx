import React, { useState, useEffect } from 'react';
import { fetchGoogleSheets } from '../../utils';
import { ProductCard } from '../../components';
import styles from './Newtab.module.scss';

const SHEET_ID = '19LQLuzFimi_S07c2IYEglQHyRk-nyTSyyBOpg2Ke4HY';
const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;
const cols = [
  'tweetDate',
  'actionDate',
  'displayName',
  'username',
  'tweetUrl',
  'mediaType',
  'mediaUrl',
  'savedFileName',
  'remarks',
  'tweetContent',
  'replies',
  'retweets',
  'likes',
];

const Newtab = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGoogleSheets(url)
      .then((rows) => {
        let r = rows.map((row) => {
          let obj = {};
          cols.forEach((col, i) => {
            obj[col] = row.c[i]?.v;
          });
          return obj;
        });

        return r;
      })
      .then((res) => {
        const randomIndex = Math.floor(Math.random() * (res.length - 1));
        setData(res.slice(1)[randomIndex]);
      });
  }, []);

  if (!data) {
    return 'loading';
  }

  return (
    <div
      className={styles.root}
      style={{ backgroundImage: `url("${data.mediaUrl}")` }}
    >
      <ProductCard product={data} />
    </div>
  );
};

export default Newtab;
