import axios from 'axios';
import * as actions from './actions';


const getContacts = () => dispatch => {

    dispatch(actions.getItemRequest());

    axios.get('/contacts')
    .then(({data}) => dispatch(actions.getItemSuccess(data)))
    .catch(error => dispatch(actions.getItemError(error.message)));
}

const addContact = ({name, number}) => dispatch => {
    const item = {
        name, 
        number
    };

    dispatch(actions.addItemRequest());

    axios.post('/contacts', item)
    .then(({data}) => dispatch(actions.addItemSuccess(data)))
    .catch(error => dispatch(actions.addItemError(error.message)));
}

const deleteContact = id => dispatch => {
    dispatch(actions.deleteItemRequest());

    axios.delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteItemSuccess(id)))
    .catch(error => dispatch(actions.deleteItemError(error.message)));
}


export default {
    getContacts,
    addContact,
    deleteContact
}