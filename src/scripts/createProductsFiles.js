import path from 'node:path';
import fs from 'node:fs/promises';

import { PATH_DB, PATH_DB_FILES } from '../constants/products.js';

const createProductsFiles = async () => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: 'utf-8' });
    const products = JSON.parse(data);
    products.forEach((product) => {
      const fileName = product.name.toLowerCase().split(' ').join('-');
      const newPath = path.resolve(PATH_DB_FILES, `${fileName}.json`);
      fs.writeFile(newPath, JSON.stringify(product, null, 2));
    });
  } catch (error) {
    console.log(error.message);
  }
};

createProductsFiles();
