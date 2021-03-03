import * as React from 'react';
import {stateType, actionType} from '../App';

const Context = React.createContext<{state: stateType, dispatch: React.Dispatch<actionType> }>({state:{sectionNum:0},dispatch:()=>{}});

export default Context;