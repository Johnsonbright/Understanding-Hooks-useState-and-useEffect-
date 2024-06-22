import React from 'react'
import DataFetching from "./components/DataFetching"
import HookCounter from "./components/HookCounter"
import HookCounter2 from "./components/HookCounter2"
import HookCounter3 from "./components/HookCounter3"
import HookCounterFour from "./components/HookCounterFour"
import HookCounterOne from "./components/HookCounterOne"
import HookMouse from "./components/HookMouse"
import IntervalHookCounter from "./components/IntervalHookCounter"
import MouseContainer from "./components/MouseContainer"
import ComponentC from "./components/ComponentC"


export const UserContext = React.createContext()
export const Channel = React.createContext()
function App() {
 
  return (
    <div className="App">


     <DataFetching />
      <UserContext.Provider value ={'Vishwas'}>
        <Channel.Provider value ={`Code Evolution`}>
        <ComponentC />
        </Channel.Provider>
      </UserContext.Provider>
      



      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounter3 /> */}
      {/* <br/> */}
      {/* <HookCounter2 /> */}
  {/* <HookCounter /> */}
    </div>
  )
}

export default App
