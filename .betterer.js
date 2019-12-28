import { tsqueryBetterer } from "@betterer/tsquery";
import { typescriptBetterer } from "@betterer/typescript";
import { eslintBetterer } from "@betterer/eslint";

const tsConfigPath = "./tsconfig.json";
const eslintPaths = ["./**/*.ts", "./**/*.tsx", "./**/*.js", "./**/*.jsx"];

export default {
  // 'no console.log': eslintBetterer(eslintPaths, ['no-console', 'error']),
  // 'no more debuggers': eslintBetterer(eslintPaths, ['no-debugger', 'error']),
  // 'no react classes': eslintBetterer(eslintPaths, [
  //   'react/prefer-stateless-function',
  //   'error',
  // ]),
  "no i18n.t": tsqueryBetterer(
    tsConfigPath,
    'CallExpression > PropertyAccessExpression[expression.name="i18n"][name.name="t"]'
  )
  // 'no implicit any': typescriptBetterer(tsConfigPath, {
  //   noImplicitAny: true,
  // }),
};
