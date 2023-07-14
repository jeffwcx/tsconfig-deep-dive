import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { platform } from './moduleA.mjs';
import { arch } from './moduleB.js';

// used in es module
export const currentDir = path.basename(fileURLToPath(import.meta.url));

console.log(platform());

console.log(arch);