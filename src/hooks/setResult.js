import { useDispatch } from "react-redux";
import * as Action from "../redux/result_reducer";

export const pushResult = (result) => async (dispatch) => {
    try {
        dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
    
}