/**
 * noUncheckedIndexedAccess 默认为false
 * 建议设置为true
 */


interface EnvironmentVars {
  NAME: string;
  OS: string;

  [propName: string]: string;
}

declare const env: EnvironmentVars;

const sysName = env.NAME;
const os = env.OS;

// 当noUncheckedIndexedAccess=true时，nodeEnv为string或是undefined
const nodeEnv = env.NODE_ENV;