import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    const initValue = 0;
    const totalPrice = products.reduce((acc, product) => {
      return acc + Number(product.price);
    }, initValue);
    console.log(totalPrice);
  } catch (error) {
    console.log(error.message);
  }
};

getTotalPrice();
