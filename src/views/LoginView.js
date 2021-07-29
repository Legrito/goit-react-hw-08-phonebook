import { LoginForm } from '../components/LoginForm';

const LoginView = () => {
    return (
        <div className="view__container">
        <h1 className="view__title" > Please login </h1>
        <LoginForm />
        </div>
    )
}

export default LoginView;