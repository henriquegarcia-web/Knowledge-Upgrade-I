import React from 'react';
import "./App.css";

import StateHook from './Hooks/useState';
import ReducerHook from './Hooks/useReducer';
import EffectHook from './Hooks/useEffect';
import RefHook from './Hooks/useRef';
import LayoutEffectHook from './Hooks/useLayoutEffect';
import ImperativeHandleHook from './Hooks/useImperativeHandle';
import ContextHook from './Hooks/useContext';
import MemoHook from './Hooks/useMemo';
import CallBackHook from './Hooks/useCallback';

function App() {
  return (
    <div className="App">
      <StateHook />
      {/* <ReducerHook /> */}
      {/* <EffectHook /> */}
      {/* <RefHook /> */}
      {/* <LayoutEffectHook /> */}
      {/* <ImperativeHandleHook /> */}
      {/* <ContextHook /> */}
      {/* <MemoHook /> */}
      {/* <CallBackHook /> */}
    </div>
  );
}

export default App;
