import {GET_USERS_LIST, POST_USER_CREATE,PUT_USER_EDIT} from "../actions/userActions"

let initialState = {
    getUsersList: false,
    errorUsersList: false,
    getResponceDataUser: false,
    errorResponceDataUser: false
        };


const users = (state = initialState,action ) => {
   switch (action.type) {
       case GET_USERS_LIST:
        return{
            ...state,
            getUsersList:action.payload.data,
            errorUsersList: action.payload.errorMassage

        }   

        case  POST_USER_CREATE:
            return{
                ...state,
                getResponceDataUser:action.payload.data,
                errorResponceDataUsers: action.payload.errorMassage
    
            }   

            case  PUT_USER_EDIT:
            return{
                ...state,
                getResponceDataUser:action.payload.data,
                errorResponceDataUsers: action.payload.errorMassage
    
            }   
          
       default:
        return state
   }
   
}

export default users
