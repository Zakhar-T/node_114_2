import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

const groupProductsByCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    const groupedProducts = products.reduce((acc, product) => {
      if (acc[product.category]) {
        acc[product.category] = [...acc[product.category], product.name];
      } else {
        acc[product.category] = [product.name];
      }
      return acc;
    }, {});
    console.log(groupedProducts);
  } catch (error) {
    console.log(error.message);
  }
};

groupProductsByCategories();
