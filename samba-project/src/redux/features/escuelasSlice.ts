import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getNombreEscuelas } from "../../api/api";

interface EscuelaState{
    nombres_escuelas: [];
    loading_escuelas: boolean;
    error_escuelas: string | null;
}

const initialState : EscuelaState ={
    nombres_escuelas : [],
    loading_escuelas: false,
    error_escuelas: null
}

export const fetchNombreEscuelas = createAsyncThunk ('nombres_escuelas/fetch',async () => {
    const response = await getNombreEscuelas();
    return response.data
})

const escuelaSlice = createSlice({
    name: "nombres_escuelas",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchNombreEscuelas.pending, (state)=>{
            state.loading_escuelas = true;
            state.error_escuelas = null
        })
        .addCase(fetchNombreEscuelas.fulfilled, (state, action: PayloadAction<[]>)=>{
            state.loading_escuelas = false;
            state.nombres_escuelas = action.payload;
        })
        .addCase(fetchNombreEscuelas.rejected, (state, action: PayloadAction<any>)=>{
            state.loading_escuelas = false;
            state.error_escuelas = action.payload;
        });
    }
})

export default escuelaSlice.reducer;