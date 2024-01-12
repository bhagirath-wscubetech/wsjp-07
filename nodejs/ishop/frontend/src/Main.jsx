import React, { createContext } from 'react';
const MainContext = createContext();
const Main = (props) => {
    return (
        <MainContext.Provider>
            {props.children}
        </MainContext.Provider>
    );
}

export default Main;
