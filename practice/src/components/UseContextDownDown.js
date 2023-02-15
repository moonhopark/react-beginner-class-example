import React, { useContext } from 'react';

import { UserContext, ChannelContext } from './UseContext';

const UseContextDownDown = () => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);

  return (
    <div>
      {user} - {channel}
    </div>
  );
};

export default UseContextDownDown;
