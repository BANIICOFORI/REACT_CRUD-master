import {legacy_createStore as createStore} from "redux"
import usersReducer from "../Reducers/usersReducer"

let Store = createStore(usersReducer);

export default Store;