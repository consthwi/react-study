function getProducts(searchQuery) {
  // redux 미들웨어의 함수는 함수를 리턴하며,
  // dispatch와 getState 두 가지의 파라미터를 가진다
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/Hwiwon-source/react-project3/products?q=${searchQuery}`;
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.json();
      console.log(data);
      dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
    } else {
      console.error("Failed to fetch products");
    }
  };
}

export const productAction = { getProducts };
