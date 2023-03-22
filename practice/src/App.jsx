import React from 'react';

import ContextParent from 'components/react-render/Context/ContextParent';
import { ChildA } from 'components/react-render/Context/ContextChildren';

const App = () => {
  return (
    <>
      <ContextParent>
        <ChildA />
      </ContextParent>
    </>
  );
};

export default App;
