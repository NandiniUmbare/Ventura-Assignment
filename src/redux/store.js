import {configureStore} from '@reduxjs/toolkit';
import IpoDataSlice from './IpoDataSlice';

const store = configureStore({
    reducer: {
        ipoData: IpoDataSlice.reducer
    }
});

export default store;