import fs from 'node:fs/promises';

import { createFakeProduct } from '../utils/createFakeProduct.js';
import { PATH_DB } from '../constants/products.js';

const generateProducts = async (amount) => {
  try {
    // const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const products = JSON.parse(data);
    for (let i = 1; i <= amount; i += 1) {
      products.push(createFakeProduct());
    }
    await fs.writeFile(PATH_DB, JSON.stringify(products, null, 2));
  } catch (error) {
    console.log(error.message);
  }
};

generateProducts(15);
