import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

const getProductsByMinPrice = async (price) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    const sortedProducts = products.filter((product) => product.price >= price);
    console.log(sortedProducts);
  } catch (error) {
    console.log(error.message);
  }
};

getProductsByMinPrice(500);
