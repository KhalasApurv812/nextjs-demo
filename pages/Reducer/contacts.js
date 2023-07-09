import { actionTypes } from "../action/contact";


const initialState = {
    list: [{ name: "Apurv khalas", phone: "1234567895" }]
};

export default function contacts(state = initialState, action) {
    switch (action.type) {
        case actionTypes.CREATE_CONTACT:
            return {
                ...state,
                list: [...state.list, { ...action.contact }]
            };

        case actionTypes.UPDATE_CONTACT:
            return {
                ...state,
                list: state.list.map((contact, index) =>
                    index === action.index ? { ...action.contact } : contact
                )
            };

        case actionTypes.DELETE_CONTACT:
            return {
                ...state,
                list: state.list.filter(
                    (contact, index) => index !== action.index
                )
            };

        default:
            return { ...state };
    }
}
