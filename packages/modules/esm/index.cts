import path from 'node:path';
import * as moduleA from './moduleA.mjs';
import { arch } from './moduleB.js';

// used in es module
export const currentDir = path.basename(__dirname);

export const platform = moduleA.platform;

console.log(platform());

console.log(arch);