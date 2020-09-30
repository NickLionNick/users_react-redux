import React from 'react'
import {reduxForm, Field} from "redux-form"
import {connect} from "react-redux"
import { FormGroup,Col,Row,Label,Input,Button } from 'reactstrap';
import UserValidation from '../validation/UserValidation';

const renderField = ({
    input,
    type,
    placeholder,
    label,
    disabled,
    readOnly,
    meta: { touched, error, warning },
  }) => (
    <Row>
      <Col md="12">
        <Label htmlFor="{input}" className="col-form-label">
          {label}
        </Label>
      </Col>
      <Col md="12">
        <Input
          {...input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        ></Input>
        {touched &&
          ((error && <p style={{ color: "red" }}>{error}</p>) ||
            (warning && <p style={{ color: "brown" }}>{warning}</p>))}
      </Col>
    </Row>
  );
  const mapStateToProps =(state)=>{
    return{
      initialValues : {
        name: state.users.getUsersList.name,
        surname: state.users.getUsersList.name,
        desc: state.users.getUsersList.name,
        
      }
    }
  }
  
 class FormComponent extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <FormGroup row>
                    <Col md={6}>
                    <FormGroup>
              <Field
                type="text"
                name="name"
                component={renderField}
                label="Name:"
              />
            </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
              <Field
                type="text"
                name="surname"
                component={renderField}
                label="Surname:"
              />
            </FormGroup>
                    </Col>

                    <Col md={6}>
                    <FormGroup>
              <Field
                type="text"
                name="desc"
                component={renderField}
                label="Desc:"
              />
            </FormGroup>
                    </Col>

                </FormGroup>

                <FormGroup row>
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}>Submit</Button>
            </FormGroup>
          </Col>
        </FormGroup>
            </form>
        )
    }
}
FormComponent = reduxForm({
    form: "formCreateUser",
    validate: UserValidation,
    renableReinitialize: true,
})(FormComponent);


export default connect(mapStateToProps, null)(FormComponent)
