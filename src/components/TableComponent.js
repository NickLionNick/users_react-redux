import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import  {Button}  from 'reactstrap'
import { Link } from "react-router-dom"
import {connect} from 'react-redux'
import swal from "sweetalert";
import {deleteUser} from "../actions/userActions"

const handleClick = (dispatch, id) => {
  
  swal({
    title: "DELETE?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      dispatch(deleteUser(id))
      swal("Delete USer?", {
        icon: "success",
      });
    } else {
      swal("Delete user");
    }
  });
}




const options = {
  paginationSize: 5,
  pageStartIndex: 1,
  
  firstPageText: 'First',
  prePageText: 'Back',
  nextPageText: 'Next',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,

 
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }] 
};

const mapStateProps = (state) => {
  return{
    getUsersList: state.users.getUsersList,
    errorUsersList :state.users.errorUsersList
  }
    
  
};

const TableComponent = (props) => {
  const columns = [{
    dataField: 'id',
    text: 'ID',
    sort: true,
    headerStyle: () => {
      return {width:"5%"};
    },
  }, {
    dataField: 'name',
    text: 'NAME',
    sort: true,
  }, {
    dataField: 'surname',
    text: 'SURNAME',
    sort: true,
  }, {
      dataField: 'desc',
      text: 'DESC'
    },
    {
      dataField:"link",
      text:"ACTION",
      
    headerStyle: () => {
      return {width:"16%"};
    },
      formatter:(rowContent, row) => {
        return (
          <div>
         
            <Link to={'/edit/' + row.id}>
            <Button color="dark" className="mr-2">Edit</Button>
            </Link>
            <Button color="dark" className="mr-2" onClick={() => handleClick(props.dispatch, row.id)}>Delete</Button>
          </div>
        );
      },
    },
  ];
    return (
        
        <BootstrapTable keyField='id' data={ props.getUsersList } columns={ columns } pagination={ paginationFactory(options) }   />
    )
}

export default connect(mapStateProps)(TableComponent)
