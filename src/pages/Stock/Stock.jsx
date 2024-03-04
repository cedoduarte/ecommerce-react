import TextField from "@mui/material/TextField";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { URL_PRODUCT_GET_LIST, AUTHORIZATION_TOKEN } from "../../shared/constants";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./Stock.css";

export const Stock = () => {
    const [productList, setProductList] = useState([]);

    const handleKeywordInput = (event) => {
        fetchList(event.target.value);
    }

    const fetchList = async (keyword) => {
        await fetch(`${URL_PRODUCT_GET_LIST}?GetAll=false&keyword=${keyword}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": AUTHORIZATION_TOKEN
            }
        }).then(response => {
            if (!response.ok) {
                return response.text().then(errorText => {
                    throw new Error(errorText);
                });
            }
            return response.json();
        }).then(data => {
            setProductList(data);
        }).catch(errorObject => {
            toast.error(errorObject.message.substring(18, errorObject.message.indexOf("!") + 1));
        });
    }

    return (
        <>
            <h2>Stock</h2>
            <TextField 
                className="stock-keyword-input" 
                onInput={handleKeywordInput} /><br /><br />
            <div className="stock-card-grid">
                {productList.map((item) => (
                    <ProductCard 
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                        imagehref={item.imagehref}
                        lastModified={item.lastModified}
                        createdDate={item.createdDate}
                        isDeleted={item.isDeleted} />
                ))}
            </div>
            <Toaster />
        </>
    );
}