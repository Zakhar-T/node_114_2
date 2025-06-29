import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

const modifyProducts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    const modifiedProducts = products.map((product) => {
      return {
        name: product.name,
        price: product.price,
        category: product.category,
      };
    });
    await fs.writeFile(PATH_DB, JSON.stringify(modifiedProducts, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

modifyProducts();
