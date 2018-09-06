/*
This file, from a module perspective, behaves as the duck file from the original proposal.

It exports, as default, the reducer function of the duck.
It exports, as named export, the selectors and the operations.
Optionally, it exports the types if they are needed in other ducks.

Note that we do not export our action creators themselves, since we pass them through our operations.
*/

export { default as shop } from './reducers';
export { default as Operations } from './operations';
export { default as Selectors } from './selectors';