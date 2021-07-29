import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
    getItemRequest,
    getItemSuccess,
    getItemError,
    addItemRequest,
    addItemError,
    addItemSuccess,
    deleteItemRequest,
    deleteItemSuccess,
    deleteItemError,
    filterContacts    
} from "./actions";

const items = createReducer([], {
    [getItemSuccess]: (_, {payload}) => payload,
    [addItemSuccess]: (state, {payload}) => [...state, payload],
    [deleteItemSuccess]: (state, {payload}) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
    [addItemRequest]: () => true,
    [addItemSuccess]: () => false,
    [addItemError]: () => false,
    [deleteItemRequest]: () => true,
    [deleteItemSuccess]: () => false,
    [deleteItemError]: () => false,
    [getItemRequest]: () => true,
    [getItemSuccess]: () => false,
    [getItemError]: () => false,
})

const filter = createReducer('', {
    [filterContacts]: (_, {payload}) => payload
})


export default combineReducers({
    items,
    filter,
    loading
})