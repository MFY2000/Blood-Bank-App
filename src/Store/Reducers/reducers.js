import ActionTypes from '../Constant';

const INITIAL_STATE = {
//    for login
    LoginSuccessFull:'',
    userDetail:{},
    spaining:true,
    isSignedIn:false,
    // blood bank
    GroupList: [],
    MoreGroup:"",
    RequestShown:'',
    AdminOrNot:"",
    ToBecomeAdminList:'',
    ToBecomeDonorList:'',
    AdminListShown:"",
    UesrExist:'',
    Lenght:"",
    // Message
    MessageType:'',
    Message:''
,f:''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        
        case ActionTypes.Group:
          
        return ({
                ...state,
                GroupList : action.payload,
            })


            case ActionTypes.Message:
            return ({
                ...state,
                MessageType: action.payload,
                Message: action.more,
            })

            case ActionTypes.Request:
            return ({
                ...state,
                RequestShown:action.payload,
                Lenght:action.more
            })

            case ActionTypes.Lenght:
            
            return({
                    ...state,
                    Lenght:(state.Lenght-action.payload)
            })

            case ActionTypes.UesrExist:
            
            return({
                    ...state,
                    UesrExist:action.payload
            })

          case ActionTypes.LoginSuccessFull:
            return ({
                ...state,
                 LoginSuccessFull : action.payload ,
                 userDetail:action.more
            })

            case ActionTypes.ToBecomeList:
            return ({
                ...state,
                 ToBecomeDonorList : action.payload ,
                 ToBecomeAdminList : action.more
            })


            case ActionTypes.isSignfalse:
            return ({
                ...state,
                 isSignedIn : action.payload 
            })


            case ActionTypes.isSignture:
            return ({
                ...state,
                 isSignedIn : action.payload 
            })



            case ActionTypes.TODO:
            return ({
                ...state,
                todo: state.todo.concat(action.payload),
                flag: state.flag
            })


            case ActionTypes.AdminOrNot:
            
            return ({
                ...state,
                AdminOrNot: action.payload,
            })



        case ActionTypes.DELETEALLTODO:
        return ({
                Message: action.payload,
                MessageType: action.more
            })


         case ActionTypes.ToBecomeDonor:
             return ({
                ...state,
                // spaining: action.index,
             })


        case ActionTypes.UPDATETODO:
            state.todo[action.index].todo = action.payload
            state.todo[action.index].flag = true
            return ({
                ...state,
                todo: state.todo.concat()
            })


            case ActionTypes.AdminListShown:
            return ({
                ...state,
                AdminListShown: action.payload
            })


            case ActionTypes.ForData:
            return ({
                ...state,
                spaining:false
            })


        default:
            return state;
    }
}