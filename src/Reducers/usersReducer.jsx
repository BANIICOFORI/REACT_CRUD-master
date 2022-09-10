import React from 'react'

let initialState={
    users:[
        {
          username: "Nicholas Ofori Boadi",
          email: "baniicofori@gmail.com",
          mobile: "0243889977",
          password:"baniico@1",
          id: "udiue9893e03-kked",
        },
        {
          username: "Herbert Ofori Boadi",
          email: "herberto@gmail.com",
          mobile: "0244009988",
          password:"baniico@1",
          id: "edjjdjdjdjdkskw",
        },
        {
          username: "Humphrey Dwamena Boadi",
          email: "humphrey@gmail.com",
          mobile: "0244404040",
          password:"baniico@1",
          id: "uuueiriedm003wwsw",
        },
      ]
};
const  usersReducer =(state=initialState,action)=>{
      switch (action.type) {
        case "ADD_USER":
          const newUser ={
            username:action.payload.username,
            email:action.payload.email,
            mobile:action.payload.mobile,
            password:action.payload.password,
          };
          return {...state,users:[...state.users, newUser]}
          default:
          return state;
      }
};
export default usersReducer;