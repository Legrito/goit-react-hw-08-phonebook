import { createSelector } from "reselect";

export const getFilter = state => state.contacts.filter;
export const getLoading = state => state.contacts.loading;
export const getItems = state => state.contacts.items;


export const getFilteredContacts = createSelector(
    [getItems, getFilter],
    (allContacts, filter) => {
        const normalizeFilterValue = filter.toLowerCase();
        return allContacts.filter( 
            contact => 
            contact.name.toLowerCase().includes(normalizeFilterValue) ||
            contact.number.includes(filter)
        );
    });


  