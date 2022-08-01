import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../network/api";
import jwtDecode from "jwt-decode";

const initialState = {
    user: {},
    isLoggedIn: false,
  };
  

export const logInUser = createAsyncThunk("user/login", async (userData) => {
    try {
        const response = await API.post("/auth/signin", userData);
        // console.log(response)
        const data = {
            status: response.status,
            bearerToken: response.data.bearerToken,
            accessToken: response.data.accessToken
        }
        return data;
      
    } catch (error) {
      const data = {
        status: error.response.status,
        message: error.response.data.message
       };
      return data;
    }
});

export const signupUser = createAsyncThunk("user/signup", async(userData) => {
    try {
        console.log(userData)
        const response =  await API.post("/auth/signup", userData);
        console.log(response)
        const data = {
            status: response.status,
            bearerToken: response.data.bearerToken,
            accessToken: response.data.accessToken
        }
        return data;
        
    } catch (error) {
        const data = {
            status: error.response.status,
            message: error.response.data.message
           };
          return data;
    }
})

export const addMyInterest = createAsyncThunk("/user/addInterest", async(intsData)=>{
    try {
        console.log(intsData)
        const response = await API.post('/users/me/interest', intsData);
        console.log(response)
        const data = {
            status: response.status,  //201
            message : response.data.message
        }
        return data;

        
    } catch (error) {
        console.log(error.response)
        const data = {
            status: error.response.status,
            message: error.response.data.message
           };
          return data;
    }
})

export const getMe = createAsyncThunk("/user/me", async()=>{
    try{
        const response = await API.get("/users/me");
        // console.log(response.data.user[0]);
        const data = {
            status: response.status,
            user: response.data.user[0]
        }
        return data

    }catch(error){
        const data = {
            status: error.response.status,
            message: error.response.data.message
        };
        return data;
    }
})




const userSlice = createSlice({
name: 'user',
initialState,

reducers: {
    setCurrentUser: (state, action) => {
        // console.log(action.payload)
        state.user = jwtDecode(action.payload);
        state.isLoggedIn = true;
    },
    logOutCurrentUser: (state) => {
        state.user = {};
        state.isLoggedIn = false;
        localStorage.clear();
        window.location.href='/'
        },
    
    },
    extraReducers: (builder)=> {
        builder.addCase(logInUser.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                const user = jwtDecode(action.payload.bearerToken)
                console.log(user)
                state.user = user
                localStorage.setItem("userToken", action.payload.bearerToken);
              }
        
        });
        builder.addCase(signupUser.fulfilled, (state, action) => {
            if (action.payload.status === 200) {
                const user = jwtDecode(action.payload.bearerToken)
                console.log(user)
                state.user = user
                localStorage.setItem("userToken", action.payload.bearerToken);
              }
        })
    }
})

export const { setCurrentUser, logOutCurrentUser} = userSlice.actions;


export default userSlice.reducer;