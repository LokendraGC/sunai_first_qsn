import { createContext } from "react";
import List from "./components/List";
import Order from "./components/Order";


export const AppContext  = createContext();

function App() {
  const [order,setOrder] = [0];
  return (
    <div className="App">
      <AppContext.Provider value={{order,setOrder}}>
     <List/>
     <Order/>
      </AppContext.Provider>
    </div>
  );
}

export default App;
