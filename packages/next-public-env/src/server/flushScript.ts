const setupFunctionString =
  'function i(n){window.__NEXT_PUBLIC_ENV||Object.defineProperty(window,"__NEXT_PUBLIC_ENV",{value:Object.freeze(n),enumerable:!0})}';

export function createScriptContent(config: string) {
  return `(${setupFunctionString})(${config});`;
}
