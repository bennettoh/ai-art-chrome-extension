import React, { FC } from 'react';
import { Product } from '../types';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <a href={product.link} className={styles.root}>
      <h6>{product.name}</h6>
      <p>{product.listPrice}</p>
      <p>{product.withDeal}</p>
      <img src={product.image} style={{ width: 100 }} />
    </a>
  );
};
