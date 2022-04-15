import { createStore } from 'redux';

const initialState = {
    x2: 0,
    x4:0,
    x5:0,
    voronka:0,
    pesh:0,
    saronit:0,
    table:false,
    position:0,
}

export const store = createStore((state = initialState, action) => {

    switch (action.type) {

        case "position": 
            return { ...state, position: action.payload };
            break;

        case "table": 
            return { ...state, table: action.payload };
            break;

        case "x2": 
            return { ...state, x2: action.payload };
            break;

        case "x4":
            return {...state, x4: action.payload};
            break;
        case "x5":
            return {...state, x5: action.payload};
            break;
        case "voronka":
            return {...state, voronka: action.payload};
            break;
        case "pesh":
            return {...state, pesh: action.payload};
            break;
        case "saronit":
            return {...state, saronit: action.payload};
            break;
        default:
            return state;
            break;

    }
    
})