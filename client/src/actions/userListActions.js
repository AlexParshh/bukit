import axios from "axios";
import { GET_USER_LIST, INSERT_LIST_ITEM, DELETE_LIST_ITEM,
    UPDATE_LIST_ITEM, COMPLETE_LIST_ITEM, GET_ERRORS} from "./types";


// export const insertItem = item => dispatch => {
//     axios.post("/api/userlist/insert",item).then()
// }

export const getItems = () => dispatch => {
    axios.get("/api/userList/getlist").then(res => {
        dispatch({
            type: GET_USER_LIST,
            payload: res.data
        });
    })
}