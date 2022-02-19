import React from 'react';
import "./App.css";

import StateHook from './Hooks/useState';
import StateHookObjects from './Hooks/useState_Objects';
import StateHookArrays from './Hooks/useState_Arrays';

import EffectHook from './Hooks/useEffect';
import EffectHookCleanUp from './Hooks/useEffect_CleanUp';

import CallBackHook from './Hooks/useCallback';

import MemoHook from './Hooks/useMemo';

function App() {
  return (
    <div className="App">
      {/* <StateHook /> */}
      {/* <StateHookObjects /> */}
      {/* <StateHookArrays /> */}

      {/* <EffectHook /> */}
      {/* <EffectHookCleanUp /> */}

      {/* <CallBackHook /> */}

      <MemoHook />
    </div>
  );
}

export default App;
