import path from 'node:path';
import moduleA = require('./moduleA.cjs');
import moduleB = require('./moduleB.js');

export const currentDir = path.basename(__dirname);
// used in es module
// export const currentDir = path.basename(fileURLToPath(import.meta.url));

export const platform = moduleA.platform;

console.log(platform());

console.log(moduleB.arch);