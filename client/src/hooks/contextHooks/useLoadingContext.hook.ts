import React from "react";
import isLoadingContext from "../../contexts/is-loading.context";

export const useLoadingContext = () => {
    return React.useContext(isLoadingContext);
}