import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import foodImg from "../../assets/images/food1.png";

const getUser = () => {
  let userToken = localStorage.getItem("user");
  return (userToken = userToken ? JSON.parse(userToken) : {});
};

const data = [
  {
    id: 0,
    name: "Quality Jean",
    price: 10000.00,
    category: "Jeans",
    isavailable: true,
    image: foodImg,
    desc: "Nice one",
  },
  {
    id: 1,
    name: "Delicious Food",
    price: 10000.00,
    category: "Food",
    isavailable: true,
    image: foodImg,
    desc: "Nice one",
  },
  {
    id: 2,
    name: "Spicy Food",
    price: 10000.00,
    category: "Food",
    isavailable: true,
    image: foodImg,
    desc: "Nice one",
  },
];

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: getUser(),
    products: data,
    deleteItemId: undefined,
    newProductToBeAdded:{},
    imageAdded:false,
    editProductId: undefined,
    productToBeUpdated:{},
    productToBeUpdatedImg:undefined,
    isLoggedIn:false,
  },
  reducers: {
    registerUser: (state, action) => {
      let { email, password, fullname, phone } = action.payload;
      state.user = { email, password, fullname, phone };
      localStorage.setItem("user", JSON.stringify(state.user));
      console.log(state.user);
    },
    loginUser: (state, action) => {
      // let { email, password } = action.payload;
      state.isLoggedIn=true
    },
    logoutUser:(state)=>{
      state.isLoggedIn=false;
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
      state.newProductToBeAdded={...state.newProductToBeAdded, name:productName, price:productPrice, category:productCategory, id: state.products.length+1,isavailable:true,desc:productDecs}
      console.log(state.newProductToBeAdded);
      state.products.push(state.newProductToBeAdded);
    },
    searchedProduct:(state,action)=>{
        const term =action.payload
    state.products =   state.products.filter((product) => product.name.includes(term))
    }
    ,
    editProduct:(state,action)=>{
      state.editProductId= action.payload
        state.productToBeUpdated = state.products.filter(product => product.id === action.payload)[0]
    },
    updateProduct:(state,action)=>{
      const { productDesc, productName, productPrice, productCategory,id } =
        action.payload;
        let newItem = {
          name: productName,
          price: productPrice,
          category: productCategory,
          desc: productDesc,
          id,
          image:state.productToBeUpdatedImg
        };
        

        console.log(newItem);
state.products=state.products.map(product=>{
  if(product.id === id){
    product = {
      ...product,
      name: productName,
      price: productPrice,
      category: productCategory,
      desc: productDesc,
    
    };
    console.log(product);
    }
    return product
  }
)

    },
    updateProductImg:(state,action)=>{
        const {productImg,id}= action.payload;
        console.log(productImg);
        state.productToBeUpdatedImg= productImg;
       state.products= state.products.map(item=>{
          if(item.id ===id){
              item = { ...item, image:productImg };
            
          }
          return item
        })

    },
    changUserDetails:(state,action)=>{
const {phone,name,email}= action.payload
if (phone !== "") state.user.phone = phone;
if(name!== "")state.user.name=name;
if(email !=="")state.user.email = email;
console.log(state.user);
localStorage.setItem("user", JSON.stringify(state.user))

    },
    changeUserPassword: (state,action)=>{
const {newPassword}= action.payload
if(newPassword)state.user.password=newPassword;
localStorage.setItem("user", JSON.stringify(state.user));

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
  searchedProduct,
  editProduct,
  updateProduct,
  updateProductImg,
  loginUser,
  logoutUser,
  changUserDetails,
  changeUserPassword
} = userSlice.actions;

export default userSlice.reducer;
