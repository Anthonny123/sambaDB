import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit"
import { getNombreDeEmpresas } from "../../api/api"

interface JuridicoState{
    empresas: [];
    loading_empresas: boolean;
    error_empresas: string | null;
}

const initialState: JuridicoState = {
    empresas:[],
    loading_empresas: false,
    error_empresas: null
}

export const fetchJuridico = createAsyncThunk('empresas/fetch', async()=>{
    const response = await getNombreDeEmpresas();
    return response.data
})

const juridicoSlice = createSlice({
    name:"empresas",
    initialState, 
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchJuridico.pending, (state)=>{
            state.loading_empresas = true;
            state.error_empresas = null;
        })
        .addCase(fetchJuridico.fulfilled, (state, action: PayloadAction<[]>)=>{
            state.loading_empresas = false;
            state.empresas = action.payload;
        })
        .addCase(fetchJuridico.rejected, (state, action: PayloadAction<any>) =>{
            state.loading_empresas = false;
            state.error_empresas = action.payload;
        })
    }
})

export default juridicoSlice.reducer;