
const initialState = 0;

const reducer = (state, action) =>{
    switch (action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        case "Reset":
            return initialState
        default:
            return state
    }
}



function App() {

    const [count, dispatch] = useReducer(reducer, initialState)
  
    return (
      <CounterContext.Provider value ={{countState:count, countDispatch:dispatch}}>
        <div className="App">
        Count - {count}
  
        <ComponentL />
        <ComponentM />
        <ComponentN />
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
      </CounterContext.Provider >
    );
  }