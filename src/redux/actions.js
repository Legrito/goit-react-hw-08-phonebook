import { createAction } from '@reduxjs/toolkit';

export const getItemRequest = createAction('contacts/getItemRequest');
export const getItemSuccess = createAction('contacts/getItemSuccess');
export const getItemError = createAction('contacts/getItemError');

export const addItemRequest = createAction('contacts/addItemRequest');
export const addItemSuccess = createAction('contacts/addItemSuccess');
export const addItemError = createAction('contacts/addItemError');

export const deleteItemRequest = createAction('contacts/deleteItemRequest');
export const deleteItemSuccess = createAction('contacts/deleteItemSuccess');
export const deleteItemError = createAction('contacts/deleteItemError');


export const filterContacts = createAction('contacts/filter');

