import React, { Component } from "react";
import HeaderSignUp from "../../components/HeaderSignUp";
import Form from "../../components/Form";
import Footer from "../../components/Footer";

class SignUp extends Component {
  render() {
    return (
      <>
        <HeaderSignUp />
        <Form />
        <Footer />
      </>
    );
  }
}

export default SignUp;
