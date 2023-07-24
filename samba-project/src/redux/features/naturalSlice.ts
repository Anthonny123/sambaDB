import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { getNombresNaturales } from "../../api/api"

interface NaturalState{
    natural: [];
    loading_natural: boolean;
    error_natural: string | null;
}

const initialState: NaturalState = {
    natural:[],
    loading_natural: false,
    error_natural: null
}

export const fetchNaturales = createAsyncThunk('natural/fetch', async()=>{
    const response = await getNombresNaturales();
    return response.data
})

const naturalSlice = createSlice({
    name:"natural",
    initialState, 
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchNaturales.pending, (state)=>{
            state.loading_natural = true;
            state.error_natural = null;
        })
        .addCase(fetchNaturales.fulfilled, (state, action: PayloadAction<[]>)=>{
            state.loading_natural = false;
            state.natural = action.payload;
        })
        .addCase(fetchNaturales.rejected, (state, action: PayloadAction<any>) =>{
            state.loading_natural = false;
            state.error_natural = action.payload;
        })
    }
})

export default naturalSlice.reducer;