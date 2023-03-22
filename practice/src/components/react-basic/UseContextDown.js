import React, { useContext } from 'react';

import { UserContext, ChannelContext } from './UseContext';
import UseContextDownDown from './UseContextDownDown';

const UseContextDown = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
      <UseContextDownDown />
    </div>
  );
};

export default UseContextDown;
