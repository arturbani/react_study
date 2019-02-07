import React, { Component } from "react";

import { Card, CardSection, Button, Input } from "./Common";

class LoginForm extends Component {
  state = { text: "" };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Login"
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
          />
        </CardSection>

        <CardSection />

        <CardSection>
          <Button>Log in</Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
