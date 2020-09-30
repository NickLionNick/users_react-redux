import React, { Component } from 'react'
import TableComponent from '../components/TableComponent'
import { Link } from "react-router-dom"
import { Button, Row, Col, Container } from 'reactstrap'
import {connect} from 'react-redux';
import { getUsersList,deleteDataUser } from "../actions/userActions";



 class HomeContainer extends Component {
  componentDidMount(){
      this.props.dispatch(getUsersList());
      this.props.dispatch(deleteDataUser());
  };
    
    render() {
        return (
         
            <Container>
            
            <Row>
            <Col>
            <Link to={'/create'}>
            <Button  color="dark" className="mr-2">Create User</Button>
            </Link>
            </Col>
          </Row>
        
            <TableComponent  /> 
        </Container>
            
        ) 
    }
}
export default connect()(HomeContainer);