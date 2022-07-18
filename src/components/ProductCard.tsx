import React, { FC } from 'react';
import { Product } from '../types';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleClick = () => {
    window.location.href = product.tweetUrl;
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <p className={styles.name}>{product.tweetContent}</p>
      <div className={styles.priceContainer}>
        <p className={styles.withDeal}>{product.displayName}</p>
        <p className={styles.listPrice}>{product.username}</p>
      </div>
    </div>
  );
};
