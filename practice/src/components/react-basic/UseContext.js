import React, { createContext } from 'react';

import UseContextDown from './UseContextDown';

export const UserContext = createContext();
export const ChannelContext = createContext();

const UseContext = () => {
  return (
    <div>
      <UserContext.Provider value="moonho">
        <ChannelContext.Provider value="jscode">
          <UseContextDown />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContext;
