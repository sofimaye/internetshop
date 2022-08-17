import {createContext, useState, useContext} from "react";


export const QuantityContext = createContext();

export function NavNumber({children}){
    const [cartQuantity, setCartQuantity] = useState(0);

    function updated() {
        setCartQuantity((prev) => prev + 1)
    }

    return(
        <QuantityContext.Provider value={{cartQuantity, updated}}>
            {children}
        </QuantityContext.Provider>
    )
}

export const useNavbarNum = () => useContext(QuantityContext);