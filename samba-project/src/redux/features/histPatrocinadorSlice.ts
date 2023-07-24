import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getAllPartners, getCodeAndNameInAllPartners} from "../../api/api"

interface HistoricoPatrocinadorState{
    patrocinadores: [];
    loading_patrocinadores: boolean;
    error_patrocinadores: string | null;
    nameAndCodePartners: [];
    loading_nameAndCodePartners: boolean;
    error_nameAndCodePartners: string | null;
}

const initialState: HistoricoPatrocinadorState = {
    patrocinadores: [],
    loading_patrocinadores: false,
    error_patrocinadores: null,
    nameAndCodePartners: [],
    loading_nameAndCodePartners: false,
    error_nameAndCodePartners: null
}

export const fetchPatrocinadores = createAsyncThunk('patrocinadores/fetch', async()=>{
    const response = await getAllPartners();
    return response.data
})

export const fetchGetCodeAndNameInAllPartners = createAsyncThunk('nameAndCodePartners/fetch', async()=>{
    const response = await getCodeAndNameInAllPartners();
    return response.data
})

const patrocinadorSlice = createSlice({
    name:"patrocinadores",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchPatrocinadores.pending, (state)=>{
            state.loading_patrocinadores = true;
            state.error_patrocinadores = null;
        })
        .addCase(fetchPatrocinadores.fulfilled, (state, action: PayloadAction<[]>)=>{
            state.loading_patrocinadores = false;
            state.patrocinadores = action.payload;
        })
        .addCase(fetchPatrocinadores.rejected, (state, action: PayloadAction<any>)=>{
            state.loading_patrocinadores = false;
            state.error_patrocinadores = action.payload;
        })
    },
})

const histPatrocinadorSlice = createSlice({
    name:"nameAndCodePartners",
    initialState,
    reducers:{},
    extraReducers(builder) {
        builder
        .addCase(fetchGetCodeAndNameInAllPartners.pending, (state)=>{
            state.loading_nameAndCodePartners = true;
            state.error_nameAndCodePartners = null;
        })
        .addCase(fetchGetCodeAndNameInAllPartners.fulfilled, (state, action: PayloadAction<[]>)=>{
            state.loading_nameAndCodePartners = false;
            state.nameAndCodePartners = action.payload;
        })
        .addCase(fetchGetCodeAndNameInAllPartners.rejected, (state, action: PayloadAction<any>)=>{
            state.loading_nameAndCodePartners = false;
            state.error_nameAndCodePartners = action.payload;
        })
    },
})

export const patrocinadorReducer = patrocinadorSlice.reducer
export const histPatrocinadorReducer =  histPatrocinadorSlice.reducer