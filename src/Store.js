import { createStore } from "redux";
import counterReducer from "./components/Services/reducer/counterReducer";

const store=createStore(counterReducer)
export default store