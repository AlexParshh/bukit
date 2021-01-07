import { GET_USER_LIST, INSERT_LIST_ITEM, DELETE_LIST_ITEM, 
    UPDATE_LIST_ITEM, COMPLETE_LIST_ITEM} from "../actions/types";

const initialState = []

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LIST:
            return {
                ...state,
                userList: action.payload
            };
        // case INSERT_LIST_ITEM:
        //     return {};
        // case DELETE_LIST_ITEM:
        //     return {};
        // case UPDATE_LIST_ITEM:
        //     return {};
        // case COMPLETE_LIST_ITEM:
        //     return {};
        default:
            return state;
    }
}