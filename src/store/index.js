import {configureStore} from "@reduxjs/toolkit"
import {setupListeners} from "@reduxjs/toolkit/query"
import { emailApi } from "../services/email.services"
import emailSlice from "./slices/email.slice"
export const store = configureStore({
    reducer: {
        [emailApi.reducerPath]:emailApi.reducer,
        emailSlice:emailSlice.reducer
    },
    middleware: (middlewares)=> middlewares().concat(emailApi.middleware)
})

setupListeners(store.dispatch)