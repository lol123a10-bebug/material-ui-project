import { useContext } from "react";
import uiContext from "../../store/context/uiContext";

const useUiContext = () => useContext(uiContext);

export default useUiContext;
