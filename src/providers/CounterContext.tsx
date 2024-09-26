import { createContext, Dispatch, SetStateAction, useState } from "react";

interface CounterContextType {
    counter: number;
    setCounter?: Dispatch<SetStateAction<number>> | null;
}

export const CounterContext = createContext<CounterContextType>({} as CounterContextType);

const CounterProvider = ({ children } : { children: React.ReactNode }) => {

    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
    };

export default CounterProvider;
