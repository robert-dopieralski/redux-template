import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, Grid, Segment } from "semantic-ui-react";
import { selectUser, loginAction } from "./ducks/login";

class LoginForm extends Component {
  state = {
    login: "",
    password: ""
  };

  handleKeyPress = event => {
    const fieldName = event.target.name;
    const newValue = event.target.value;
    this.setState({
      [fieldName]: newValue
    });
  };

  handleSubmit = () => {
    const { login, password } = this.state;
    const userObject = {
      login,
      password
    };
    console.warn(userObject);
    this.props.onLogin(userObject);
  };

  handleUserFromStoreRequest = () => {
    console.warn(this.props.user);
  };

  render() {
    const { login, password } = this.state;
    const { handleKeyPress, handleSubmit, handleUserFromStoreRequest } = this;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form size="large">
            <Segment stacked>
              <label>login</label>
              <input
                name="login"
                value={login}
                onChange={handleKeyPress}
                style={{ margin: 10 }}
              />
              <label>password</label>
              <input
                name="password"
                value={password}
                onChange={handleKeyPress}
                style={{ margin: 10 }}
              />
              <Button color="teal" fluid size="large" onClick={handleSubmit}>
                Login
              </Button>
              <Button
                color="red"
                fluid
                size="large"
                onClick={handleUserFromStoreRequest}
              >
                Console.warn user value in store
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  user: selectUser(store)
});

const mapDispatchToProps = dispatch => ({
  onLogin: userObject => dispatch(loginAction(userObject))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
