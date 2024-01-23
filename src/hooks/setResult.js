import * as Action from "../redux/result_reducer";

export const pushAnswer = (result) => async (dispatch) => {
    try {
        await dispatch(Action.pushResultAction(result))
    } catch (error) {
        console.log(error)
    }
};

export const updateResult = (index) => async(dispatch) => {
    try {
        await dispatch(Action.updateResultAction(index))
    } catch (error) {
        
    }
}