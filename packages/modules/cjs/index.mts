import path from 'node:path';
import { fileURLToPath } from 'url';
import * as moduleA from './moduleA.cjs';
import moduleB from './moduleB.js';

// used in es module
export const currentDir = path.basename(fileURLToPath(import.meta.url));

export const platform = moduleA.platform;

console.log(platform());

console.log(moduleB.arch);