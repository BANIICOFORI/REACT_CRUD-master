import {createStore} from "redux"
import usersReducer from "../Reducers/usersReducer"

let Store = createStore(usersReducer);

export default Store;