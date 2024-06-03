import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";

const rootReducer=combineReducers({user:userReducer})
const persistConfig={
    key:'root',
    storage,
    version:1,
}
const persistedReducer= persistReducer(persistConfig, rootReducer)
export const store=configureStore({
    reducer:{user:userReducer},
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck:false,
        }),

});

export const persistor=persistStore(store);