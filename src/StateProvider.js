// Setup data layer to track the basket

import React, { createContext, useContext, useReducer } from 'react';

// Data Layer
export const StateContext = createContext();

// Build Provider
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Inside of a component
export const useStateValue = () => useContext(StateContext);