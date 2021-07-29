import { Component } from 'react';
import { connect } from 'react-redux';
import shortid from 'shortid';
import {authOperations} from '../../redux/auth';
import { Form, Button } from 'react-bootstrap';
import { authSelectors } from '../../redux/auth';


class RegisterForm extends Component {
    state = {
        name: '',
        email: '',
        password: ''
      }
    
  nameInputId = shortid.generate();
  emailInputId = shortid.generate();
  numberInputId = shortid.generate();

  
  handleChange = (e) => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value});
  }

  clearInput = () => {
    this.setState({ name: '', email: '', password: ''})
  }

  handlerSubmit = (e) => {
    e.preventDefault();
    this.props.onRgister(this.state);
    this.clearInput(); 
 }

    render() {
        const { name, email, password } = this.state;
        console.log(this.props.isError, 'sdjghfjsdgfhd--------------------------------------');
        return (
          <div className="container">
            {!!this.props.isError && <p>{this.props.isError}</p>}
          <Form onSubmit={this.handlerSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"
                  type="text"
                  name="name"
                  value={name}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={this.handleChange}
                  placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
                  name="email"
                  value={email}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={this.handleChange}
                  placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                  name="password"
                  value={password}
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  onChange={this.handleChange}
                  placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit">
          Register
          </Button>
        </Form>
        </div>
      //   <form onSubmit={this.handlerSubmit}>
      //   <label htmlFor={this.nameInputId}>Name</label>          
      //   <input
      //     type="text"
      //     name="name"
      //     value={name}
      //     id={this.nameInputId}
      //     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      //     required
      //     onChange={this.handleChange}
      //   />
      //   <label htmlFor={this.nameInputId}>Email</label>          
      //   <input
      //     type="email"
      //     name="email"
      //     value={email}
      //     id={this.emailInputId}
      //     title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
      //     required
      //     onChange={this.handleChange}
      //   />

      //   <label htmlFor={this.numberInputId}>Password </label>          
      //   <input
      //     type="password"
      //     name="password"
      //     value={password}
      //     id={this.numberInputId}
      //     title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
      //     required
      //     onChange={this.handleChange}
      //   />

      //   <button type="submit">Register</button>
      // </form>
      )}
}

// const mdtp = dispatch => ({
//   onRgister: (data) => dispatch(authOperations.register(data))
// })

const mstp = state => ({
  isError: authSelectors.getErrorMessage(state),
})

const mdtp = {
  onRgister: authOperations.register,
}

export default connect(mstp, mdtp)(RegisterForm);