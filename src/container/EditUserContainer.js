import React, { Component } from "react";
import { Container } from "reactstrap";
import BackComponent from "../components/BackButtonComponents";
import { connect } from "react-redux";
import FormComponent from "../components/FormComponent";
import { postUserCreate,getUsersList } from "../actions/userActions";

import swal from "sweetalert";

const mapStateToProps = (state) => {
    return {
      getResponceDataUser: state.users.getResponceDataUser,
      errorResponceDataUsers: state.users.errorResponceDataUsers,
    };
  };
  

class EditUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersList(this.props.match.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data,this.props.match.params.id));
  }
  render() {
    if (this.props.getResponceDataUser || this.props.errorResponceDataUsers) {
      if (this.props.errorResponceDataUsers) {
        swal("Failed!", this.props.errorResponceDataUsers, "error");
      } else {
        swal(
          "User Updated!",
          "Name : " +
            this.props.getResponceDataUser.name +
            " , Surname : " +
            this.props.getResponceDataUser.surname,
          "success"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent  onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(EditUserContainer);