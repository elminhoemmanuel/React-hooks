import React, {useReducer} from 'react'
import './App.css';
import ComponentA from './components/ComponentA';
import Counter from "./components/Counter"
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo';
import CounterThree from './components/CounterThree';
import DataFetching from './components/DataFetching';
import HookUseEffect from './components/HookUseEffect';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';
import MouseHook from './components/MouseHook';
import NameDisplay from "./components/NameDisplay"
import UseStateArray from './components/UseStateArray';
import ComponentL from './components/ComponentL';
import ComponentM from './components/ComponentM';
import ComponentN from './components/ComponentN';
import DataFetchingOne from './components/DataFetchingOne';
import DataFetchingTwo from './components/DataFetchingTwo';
import ParentComponent from './components/ParentComponent';
import CounterMemo from './components/CounterMemo';
import FocusInput from './components/FocusInput';
import HookTimer from './components/HookTimer';
import DocTitleOne from './components/DocTitleOne';
import DocTitleTwo from './components/DocTitleTwo';
import CustomCounter from './components/CustomCounter';
import CustomCounterTwo from './components/CustomCounterTwo';
import UserForm from './components/UserForm';

export const UserContext = React.createContext()
export const WorkContext = React.createContext()
export const CounterContext= React.createContext()



function App() {

  
  return (
    <div className="App">
      
      <UserForm />
      {/* <CustomCounter /> */}
      {/* <CustomCounterTwo /> */}
      {/* <DocTitleTwo /> */}
      {/* <DocTitleOne /> */}
      {/* <HookTimer /> */}
      {/* <FocusInput /> */}
      {/* <CounterMemo /> */}
      {/* <ParentComponent /> */}
      {/* <DataFetchingTwo /> */}
      {/* <DataFetchingOne /> */}
      {/* <ComponentL />
      <ComponentM />
      <ComponentN /> */}
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}

      {/* <UserContext.Provider value={"Omale"}>
        <WorkContext.Provider value={"Coder"}>
          <ComponentA />
        </WorkContext.Provider>
      </UserContext.Provider> */}

      {/* <HookUseEffect /> */}
      {/* <UseStateArray /> */}
      {/* <NameDisplay /> */}
      {/* s */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <MouseHook /> */}
      {/* <Counter /> */}
    </div>
  );
}

export default App;
