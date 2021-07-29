import { Component } from 'react';
import shortid from 'shortid';
import {authOperations} from '../../redux/auth';
import { connect } from 'react-redux';
import { Form, Button, FloatingLabel } from 'react-bootstrap';


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
          <div className="container">
          <Form onSubmit={this.handlerSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
            <Form.Control type="email"
                  name="email"
                  value={email}
                  id={this.nameInputId}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={this.handleChange}
                  placeholder="Enter email" />
                  </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
            >
            <Form.Control type="password"
                  name="password"
                  value={password}
                  id={this.numberInputId}
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  onChange={this.handleChange}
                  placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        </div>
      )}

}

const mdtp = {
  onLogin: authOperations.logIn,
}

export default connect(null, mdtp)(LoginForm);
