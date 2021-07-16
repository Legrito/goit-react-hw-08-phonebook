import axios from 'axios';
import * as actions from './actions';

axios.defaults.baseURL = 'http://localhost:4040';

const getContacts = () => dispatch => {

    dispatch(actions.getItemRequest());

    axios.get('/contacts')
    .then(({data}) => dispatch(actions.getItemSuccess(data)))
    .catch(error => dispatch(actions.getItemError(error)));
}

const addContact = ({name, number}) => dispatch => {
    const item = {
        name, 
        number
    };

    dispatch(actions.addItemRequest());

    axios.post('/contacts', item)
    .then(({data}) => dispatch(actions.addItemSuccess(data)))
    .catch(error => dispatch(actions.addItemError(error)));
}

const deleteContact = id => dispatch => {
    dispatch(actions.deleteItemRequest());
    console.log(id, 'iiiiiiiits idddddddddd');

    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteItemSuccess(id)))
    .catch(error => dispatch(actions.deleteItemError(error)));
}


export default {
    getContacts,
    addContact,
    deleteContact
}