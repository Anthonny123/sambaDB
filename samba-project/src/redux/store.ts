import { configureStore } from '@reduxjs/toolkit'
import integrantesReducer from './features/integrantesSlice'
import escuelasReducer from './features/escuelasSlice'
import juridicoReducer from './features/juridicoSlice'
import naturalReducer from './features/naturalSlice'
import {patrocinadorReducer, histPatrocinadorReducer} from './features/histPatrocinadorSlice'

export const store = configureStore({
    reducer:{ 
        integrantes: integrantesReducer,
        nombres_escuelas: escuelasReducer,
        empresas: juridicoReducer,
        natural: naturalReducer,
        patrocinadores: patrocinadorReducer,
        nameAndCodePartners: histPatrocinadorReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;