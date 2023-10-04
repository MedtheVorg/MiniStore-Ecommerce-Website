// ------------Deprecated , I opted for react-redux instead as I was making this project--------

/*
import { createContext, useContext, useState } from 'react';
import { ContextType, StoreContextProps, User } from '../lib/types';
import phones from '../data/phones';
import Product from '../components/Product';

const myContext = createContext<ContextType | null>(null);

export function useStore() {
  const contextValues = useContext(myContext);
  return contextValues;
}

const StoreContext = ({ children }: StoreContextProps) => {
  const [user, setUser] = useState<User>();

  return (
    <myContext.Provider value={{ user, phones }}>{children}</myContext.Provider>
  );
};
export default StoreContext;
*/
