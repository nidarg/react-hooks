import React from 'react';
import { sleep } from './utils';

const SlowProduct = ({ product }) => {
  sleep(1);
  return <li>Product {product.name}</li>;
};

export default SlowProduct;
