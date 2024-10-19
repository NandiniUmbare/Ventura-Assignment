import { createSlice } from "@reduxjs/toolkit";

const IpoDataSlice = createSlice({
    name: 'ipoDataSlice',
    initialState: {
        ipoData: []
    },
    reducers: {
        setIpoData: (state, action) => {
            state.ipoData = action.payload
        }
    }
});

export default IpoDataSlice