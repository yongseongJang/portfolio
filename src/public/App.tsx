import * as React from 'react';
import Head from './components/Head';
import Menu from './components/Menu';
import Section from './components/Section';
import Context from './utils/Context';
import './styles/App.scss'

export type stateType = {
    sectionNum: number;
}

export type actionType = {
    type: string;
    sectionNum: number;
}

const initialState = {sectionNum: 0};

const reducer = (state: stateType, action: actionType) => {
    switch(action.type) {
        case 'CHANGE_SECTION':
            return { sectionNum: action.sectionNum};
        default:
            throw new Error();
    }
}

const App: React.FC = () => {
    const [state, dispatch] = React.useReducer(reducer, initialState);

    return (
        <Context.Provider value={{state,dispatch}}>
            <Head/>
            <Menu/>
            <main>
                <Section/>
            </main>
        </Context.Provider>
    )
};

export default App;