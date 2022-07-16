import React, { FC } from 'react';
import { Product } from '../types';
import { formatCurrency } from '../utils';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleClick = () => {
    window.location.href = product.link;
  };

  return (
    <div className={styles.root} onClick={handleClick}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url("${product.image}")` }}
      />
      <p className={styles.name}>{product.name}</p>
      <div className={styles.priceContainer}>
        <p className={styles.listPrice}>{formatCurrency(product.listPrice)}</p>
        <p className={styles.withDeal}>{formatCurrency(product.withDeal)}</p>
      </div>
    </div>
  );
};
