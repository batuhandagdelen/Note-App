import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from "react-redux";
import store from "../redux/store";

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
