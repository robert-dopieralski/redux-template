import React, { Component } from "react";

import { Button, Form, Grid, Segment } from "semantic-ui-react";

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

  render() {
    const { login, password } = this.state;
    const { handleKeyPress } = this;
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
              <Button color="teal" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default LoginForm;
