import { Component } from 'react';
import shortid from 'shortid';
import {authOperations} from '../../redux/auth';
import { connect } from 'react-redux';


class LoginForm extends Component {
    state = {
        email: '',
        password: ''
      }
    
  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  
  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value});
  }

  clearInput = () => {
    this.setState({ email: '', password: ''})
  }

  handlerSubmit = (e) => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.clearInput(); 
 }

    render() {
        const { email, password } = this.state;

        return (
        <form onSubmit={this.handlerSubmit}>
        <label htmlFor={this.nameInputId}>Email</label>          
        <input
          type="email"
          name="email"
          value={email}
          id={this.nameInputId}
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={this.handleChange}
        />

        <label htmlFor={this.numberInputId}>Password </label>          
        <input
          type="password"
          name="password"
          value={password}
          id={this.numberInputId}
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={this.handleChange}
        />

        <button type="submit">Enter</button>
      </form>
      )}

}

const mdtp = {
  onLogin: authOperations.logIn,
}

export default connect(null, mdtp)(LoginForm);
