import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import foodImg from "../../assets/images/food1.png";

const getUser = () => {
  let userToken = localStorage.getItem("user");
  return (userToken = userToken ? JSON.parse(userToken) : {});
};

const data = [
  {id:0,
    name: "Quality Jean",
    price: 10000.0,
    category: "Jeans",
    isavailable: true,
    image: foodImg,
  },
  {
    id:1,
    name: "Delicious Food",
    price: 10000.0,
    category: "Food",
    isavailable: true,
    image: foodImg,
  },
  {
    id:2,
    name: "Spicy Food",
    price: 10000.0,
    category: "Food",
    isavailable: true,
    image: foodImg,
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    pending: false,
    error: false,
    user: getUser(),
    done: false,
    loginSucess: false,
    message: "",
    userInfo: {},
    openSnap: false,
    products: data,
    deleteItemId: undefined,
    newProductToBeAdded:{},
    imageAdded:false
  },
  reducers: {
    registerUser: (state, action) => {
      let { email, password, fullname, phone } = action.payload;
      state.user = { email, password, fullname, phone };
      localStorage.setItem("user", JSON.stringify(state.user));
      console.log(state.user);
    },
    loginUser: (state, action) => {
      let { email, password } = action.payload;
    },

    deleteUser: (state) => {
      localStorage.removeItem("user");
      state.user = {};
      state.done = false;
    },
    deleteProduct: (state, action) => {

      state.products = state.products.filter((product)=>product.id!== state.deleteItemId)

    },
    selectProductToDelete: (state,action)=>{
        state.deleteItemId = action.payload
       
    },
    addNewProductImg:(state,action)=>{
        state.newProductToBeAdded.image= action.payload.productImg;
        state.imageAdded=true
    },
    addNewProduct:(state,action)=>{
      console.log(action.payload);
      const {productDecs,productName,productPrice,productCategory} = action.payload;
      state.newProductToBeAdded={...state.newProductToBeAdded, name:productName, price:productPrice, category:productCategory, id: state.products.length+1}
      console.log(state.newProductToBeAdded);
      state.products.push(state.newProductToBeAdded);
      console.log(state.products);
      
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  registerUser,
  deleteProduct,
  selectProductToDelete,
  addNewProductImg,
  addNewProduct,
} = userSlice.actions;

export default userSlice.reducer;
