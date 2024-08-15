import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICounter } from "./types";

let initialState: ICounter = {
    counter: 0
}

export const Counter = createSlice({
    name: 'Counter',
    initialState,
    reducers: {
        increment: (state: ICounter, action: PayloadAction<number>) => {
            state.counter += action.payload
        },
        decrement: (state: ICounter, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        reset: () => initialState
    }
})

export const {increment, decrement, reset} = Counter.actions
export default Counter.reducer