const cloudActionDispatcher = dispatch => {
    return {

        onAddFuel: (cloud) => {
            console.log("cloudActionDispatcher");
            return dispatch({ type: 'ADD_FUEL', cloud });
        }
    }


}


export default cloudActionDispatcher;