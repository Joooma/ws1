const initialState = [];

export default function clouds(
    state = initialState, action
) {
    console.log(action.type);
    switch (action.type) {
        case 'ADD_FUEL':

            return [...state, action.cloud];

        default:
            return state;
    }
}