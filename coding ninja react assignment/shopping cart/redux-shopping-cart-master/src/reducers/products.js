import axios from "axios";



const fetchProduct = async () => {
  const response = await axios
    .get(`https://my-json-server.typicode.com/Chitransh-Agrawal/My-git-repository/db`)
    .catch((err) => {
      console.log(err);
    });

   // let select = response.data.products.filter((payload)=>{ if(id==payload.id){return payload;}});

    

  dispatch(selectedProduct(response.data.products));
};



const defaultProducts = fetchProduct();

// const defaultProducts = [
  
// ];


const products = (state = defaultProducts, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
     
   
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          cost: action.cost,
          description: action.description
        }
      ];
    default:
      result();
      return state;
  }
};

export default products;
