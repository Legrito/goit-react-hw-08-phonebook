const getIsAuth = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getErrorMessage = state => state.auth.error;

export default {
    getIsAuth,
    getUserName,
    getErrorMessage,
}