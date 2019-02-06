import ActionTypes from '../Constant';
import * as firebase from 'firebase';
import '../../config'






export function Login(detail) {
    return dispatch => {
        const object ={  
        displayName : detail.displayName,
        uid : detail.uid,
        photoURL : detail.photoURL,
        email : detail.email,
        phoneNumber : detail.phoneNumber,}
  
        
        dispatch({ type: ActionTypes.LoginSuccessFull, payload: object.uids ,more:object })

        }
    
}

export function isSignfalse() {
    return dispatch => {
        
        dispatch({ type: ActionTypes.isSignfalse, payload: false })

        }
    
}
export function isSignture() {
    return dispatch => {
        
        dispatch({ type: ActionTypes.isSignture, payload: true })

        }
    
}




export function forGroupList(Group,uid) {
if(Group!==''&&Group!==null&&Group!==undefined){
  
    return dispatch => {
        firebase.database().ref('/').child("/User/GroupsList/").on('value', snapshot => {
        const todosObj = snapshot.val()===null ? {} : snapshot.val();
        const Donarlist = {List:[],key:[]}        
        Group.map((index,value)=>{
        const Donar = todosObj[index]
        for (let key in Donar) {
        if(key!==uid){      
      Donarlist.List.push(Donar[key])
        Donarlist.key.push(key)
        }
}
  

        })

        dispatch({ type: ActionTypes.Group, payload: Donarlist})
         })
    }}
else{return dispatch => {
    dispatch({ type: ActionTypes.Message,payload:"error",more:"Please Select a Group"})
}}

}





export function Request(requset,user) {
    return dispatch => {

firebase.database().ref(`/User/request/${requset.uid}/${user.uid}/`).set(user);
firebase.database().ref(`/User/request/`).child(`${user.uid}/${requset.uid}/`).set(requset)
  console.table(  user  )
  console.table(  requset  )
  console.log(`${requset.uid}/${user.uid}/`)
        dispatch({ type: ActionTypes.Message,payload:'success',more:'Your Request is Sented Succesfull' })
    }

}









export function forBecomeDonar( Data , uid) {
    return dispatch => {
        firebase.database().ref('/user/GroupList').child(`${uid}`).set(Data);
        dispatch({ type: ActionTypes.AddUser, })
    }

}

export function messageShow(type,message) {
    return dispatch => {
        dispatch({ type: ActionTypes.Message,payload:type ,more:message  })
    }

}

export function edit(ind) {
    return dispatch => {
        firebase.database().ref('/').child("Admin/ToBecome/Donar").push(ind)
        dispatch({ type: ActionTypes.ToBecomeDonor, index: true  })
    }
}
export function ToBecomeAdmin(details) {
    return dispatch => {
      const uid = details.userDetail.uid 
            firebase.database().ref('/').child("Admin/ToBecome/Admin/").child(uid).set(details)  
            dispatch({ type: ActionTypes.AdminList, payload: true})
    
}}

export function ToBecomeList() {
    return dispatch => {
firebase.database().ref('/').child("Admin/ToBecome/").on('value', snapshot => {
const todosObj = snapshot.val()===null ? {} : snapshot.val();

const Donar = todosObj.Donar
const Admin = todosObj.Admin

const Donarlist = {List:[],key:[]}
const Adminlist = {List:[],key:[]}



for (let key in Donar) {
    Donarlist.List.push(Donar[key])
    Donarlist.key.push(key)

}

for (let key in Admin) {
    Adminlist.List.push(Admin[key])
    Adminlist.key.push(key)

}
dispatch({ type: ActionTypes.ToBecomeList, payload: Donarlist,more:Adminlist })

})}}
   


export function AdminOrNot(uid) {
    return dispatch => {
        firebase.database().ref('Admin/AdminList/').child(uid).on('value', snapshot => {
            const todosObj = snapshot.val();
            const obj = todosObj !== null ? true : false;
               dispatch({ type: ActionTypes.AdminOrNot, payload: obj })
            })
        }
    }
    export function RequestShow(uid) {
        return dispatch => {
            firebase.database().ref('/User/').child(`request/${uid}/`).on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj !== null ? todosObj : {};
                const ShowList = {List:[],key:[]}
                var lenght = 0
    
    for (let key in obj) {
        ShowList.List.push(obj[key])
        ShowList.key.push(key)
        if(obj[key].seen !== true){
         lenght = (lenght+1)
        }
    
    }
                   dispatch({ type: ActionTypes.Request, payload: ShowList,more:lenght })
                })
            }
        }
        
    
        export function AccpetAdmin(ui) {
            return dispatch => {
            const uid = ui.uid
                firebase.database().ref('/').child("Admin/ToBecome/Admin/").child(uid).remove()  
                firebase.database().ref('Admin/AdminList/').child(uid).set(ui)
                    
                    
                       dispatch({ type: ActionTypes.NONE, payload: "obj" })  
                }
            }


            export function PresonCancelRequest(preson) {
                return dispatch => {
                    const UserUid = preson.PresonWhichRequiredBlood 
                    const PresonUid = preson.uid
                    console.log(preson,PresonUid,UserUid)
                    firebase.database().ref('/').child(`/User/request/${PresonUid}`).child(UserUid).remove()  
                    firebase.database().ref('/').child(`/User/request/${UserUid}`).child(PresonUid).remove()  
                        
                        
                           dispatch({ type: ActionTypes.NONE, payload: "obj" })  
                    }
                } 
    
                export function AccpetRequestPreson(preson) {
                    return dispatch => {
                        const UserUid = preson.PresonWhichRequiredBlood 
                        const PresonUid = preson.uid

    firebase.database().ref('/').child(`/User/request/${PresonUid}`).child(UserUid).child("type").set("Accpet")  
    firebase.database().ref('/').child(`/User/request/${UserUid}`).child(PresonUid).remove()  
                            
                            
                               dispatch({ type: ActionTypes.NONE, payload: "obj" })  
                        }
                    } 
                               
    
    export function AccpetDonar(uid,details) {
            return dispatch => {
             const id = details.userDetail.uid
             const Group = details.MoreAboutUser.Group
             firebase.database().ref('User/GroupsList/').child(Group).child(id).set(details)
             firebase.database().ref('/').child("Admin/ToBecome/Donar").child(uid).remove()  
             dispatch({ type: ActionTypes.NONE, payload: 'obj' })
                 
             }
         }

         export function cancel(details) {
            return dispatch => {
             const Type = details.Type == 'To Become Donar List' ? `/Admin/ToBecome/Donar/${details.value}`  :`/Admin/ToBecome/Admin/${details.props.userDetail.uid}`
            firebase.database().ref(Type).remove()  
             dispatch({ type: ActionTypes.NONE, payload: 'obj' })
                 
             }
         }

         export function SeenRequest(user,preson) {
            return dispatch => {
            firebase.database().ref(`User/request/${user}/${preson}/seen/`).set(true)  
             dispatch({ type: ActionTypes.Lenght, payload: 1 })
                 
             }
         }


         export function UserExist(user) {
            return dispatch => {
            firebase.database().ref(`User/GroupsList/${user}`).on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj === null ? true : false ;
                dispatch({ type: ActionTypes.UesrExist, payload: obj })
            })     
             }
         }

         export function AdminListShown() {
            return dispatch => {
            firebase.database().ref('Admin/AdminList/').on('value', snapshot => {
                const todosObj = snapshot.val();
                const obj = todosObj !== null ? todosObj : {};
                const ShowList = []
    
    
    
    for (let key in obj) {
        ShowList.push(obj[key])
    
    }
                   dispatch({ type: ActionTypes.AdminListShown, payload: ShowList })
                })
            }
        }