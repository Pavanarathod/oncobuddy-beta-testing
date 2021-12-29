import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "core/store";

const useStateDispatch = () => useDispatch<AppDispatch>();
const useStateSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useStateDispatch, useStateSelector };
