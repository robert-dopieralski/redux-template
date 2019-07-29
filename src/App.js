import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";
import { loginAction } from "./ducks/login";
import {
  selectUser,
  selectArePadsLoading,
  selectPadsLoadingError,
  selectPads
} from "./store";
import { fetchPads } from "./ducks/pads";

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

  handleAsyncRequest = () => {
    this.props.fetchPads();
  };

  render() {
    const { login, password } = this.state;
    const { pads } = this.props;
    const {
      handleKeyPress,
      handleSubmit,
      handleUserFromStoreRequest,
      handleAsyncRequest
    } = this;
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
              <Message>{`Pads Length is: ${pads.length}`}</Message>
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
              <Button
                fluid
                onClick={handleAsyncRequest}
                color={
                  this.props.isFetchingPads
                    ? "yellow"
                    : this.props.padsError
                    ? "red"
                    : "green"
                }
              >
                dispatch async action with redux-thunk middleware
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = store => ({
  user: selectUser(store),
  pads: selectPads(store),
  isFetchingPads: selectArePadsLoading(store),
  padsError: selectPadsLoadingError(store)
});

const mapDispatchToProps = dispatch => ({
  onLogin: userObject => dispatch(loginAction(userObject)),
  fetchPads: () => dispatch(fetchPads())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
