/*
 *
 * Application reducer
 *
 */

import { DEFAULT_ACTION } from './constants';

const initialState = {};

const applicationReducer = (state = initialState, action: any) => {
  let newState;
  switch (action.type) {
    case DEFAULT_ACTION:
      return newState;
    default:
      return state;
  }
};

export default applicationReducer;