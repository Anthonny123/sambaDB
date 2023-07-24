import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { getNombreApellidoEstudiantes } from "../../api/api";

interface IntegrantesState{
    integrantes: [];
    loading: boolean;
    error: string | null;
}

const initialState: IntegrantesState = {
    integrantes: [],
    loading: false,
    error: null
}

const integrantesSlice = createSlice({
    name: "integrantes",
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
        .addCase(fetchIntegrantes.pending, (state)=>{
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchIntegrantes.fulfilled, (state, action: PayloadAction<[]>) =>{
            state.loading = false;
            state.integrantes = action.payload;
        })
        .addCase(fetchIntegrantes.rejected, (state, action: PayloadAction<any>)=>{
            state.loading = false;
            state.error = action.payload;
        })
    },
})

export const fetchIntegrantes = createAsyncThunk('integrantes/fetch', async () => {
    const response = await getNombreApellidoEstudiantes();
    return response.data
});

export default integrantesSlice.reducer;