import { SimpleCrypto } from 'simple-crypto-js';
const simpleCrypto = new SimpleCrypto('');

import fs from 'fs';

const products = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

products.forEach((product) => {
  product.thumbnail = simpleCrypto.encrypt(product.thumbnail);
});

fs.writeFileSync('./products.json', JSON.stringify(products, null, 2));
