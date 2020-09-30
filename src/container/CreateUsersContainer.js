import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackButtonComponents";
import FormComponent from "../components/FormComponent";
import { connect } from "react-redux";
import  {postUserCreate}  from "../actions/userActions";
import swal from "sweetalert";

const mapStateToProps = (state) => {
  return {
    getResponceDataUser: state.users.getResponceDataUser,
    errorResponceDataUsers: state.users.errorResponceDataUsers,
  };
};

class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }

  render() {
    if (this.props.getResponceDataUser || this.props.errorResponceDataUsersers) {
      if(this.props.errorResponceDataUsersers)
      {
        swal(
            "Failed!",
            this.props.errorResponceDataUsersers,
            "error"
          );
      }else {
        swal(
            "User Created!",
            "Name : " +
              this.props.getResponceDataUser.name +
              " , surname : " +
              this.props.getResponceDataUser.surname,
            "success"
          );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Create User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);