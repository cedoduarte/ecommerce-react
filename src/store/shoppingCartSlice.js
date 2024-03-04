import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productList: [],
    total: 0.0
};

export const shoppingCartSlice = createSlice({
    name: "shoppingCart",
    initialState,
    reducers: {
        changeShoppingCart: (state, action) => {
            const { productList, total } = action.payload;
            state.productList = productList;
            state.total = total;
            localStorage.setItem("productList", JSON.stringify(state.productList));
            localStorage.setItem("total", JSON.stringify(state.total));
        },
        appendProduct: (state, action) => {
            const { product } = action.payload;
            let productMatched = false;
            state.productList.forEach(iProduct => {
                if (iProduct.product.id === product.id) {
                    iProduct.count++;
                    iProduct.total += product.price;
                    productMatched = true;
                }
            });
            if (!productMatched) {
                state.productList = [...state.productList, {
                    product,
                    count: 1,
                    total: product.price
                }];
            }
            state.total = 0.0;
            state.productList.forEach(iProduct => {
                state.total += iProduct.total;
            });
            localStorage.setItem("productList", JSON.stringify(state.productList));
            localStorage.setItem("total", JSON.stringify(state.total));
        },
        removeProduct: (state, action) => {
            const { productId } = action.payload;
            state.productList = state.productList.filter(iProduct => iProduct.product.id !== productId);
            state.total = 0.0;
            state.productList.forEach(iProduct => {
                state.total += iProduct.total;
            });
            localStorage.setItem("productList", JSON.stringify(state.productList));
            localStorage.setItem("total", JSON.stringify(state.total));
        }
    }
});

export const { changeShoppingCart, appendProduct, removeProduct } = shoppingCartSlice.actions;
export default shoppingCartSlice.reducer;