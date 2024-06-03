import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0,
    price: 0
}

const counterSlice = createSlice(
    {
        name: "counter",
        initialState,
        // actions
        reducers: {
            inc: (currentState) => {
                currentState.value = currentState.value + 1;
                currentState.price = currentState.value * 500;
            },
            desc: (currentState) => {
                currentState.value = currentState.value - 1;
                currentState.price = currentState.value * 500;
            }
        }
    }
)


export const { inc, desc } = counterSlice.actions;
export default counterSlice.reducer;
