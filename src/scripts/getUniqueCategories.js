import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/products.js';

const getUniqueCategories = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    const categories = products.map((product) => product.category);
    console.log(categories);
  } catch (error) {
    console.log(error.message);
  }
};

getUniqueCategories();
