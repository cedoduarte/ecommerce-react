import { useSelector } from "react-redux";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./ShoppingCart.css";
import { formatAsCurrency } from "../../shared/utils";
import { useDispatch } from "react-redux";
import { removeProduct } from "../../store/shoppingCartSlice";

export const ShoppingCart = () => {
    const dispatch = useDispatch();
    const shoppingCart = useSelector((state) => state.shoppingCart);

    const handleRemoveClicked = (productId) => {
        dispatch(removeProduct({productId}));
    }

    return (
        <>
            <h2>Shopping Cart</h2>
            {shoppingCart.productList.map(item => (
                <Card key={item.product.id} className="shopping-cart-product-card" sx={{ minWidth: 275 }}>
                    <CardContent>
                        <img className="shopping-cart-product-image" src={item.product.imagehref} alt="product" /><br />
                        <Typography variant="body2">
                            Name: {item.product.name}<br />
                            Description: {item.product.description}<br />
                            Price: {formatAsCurrency(item.product.price)}<br />
                            Count: {item.count}<br />
                            Subtotal: {item.total}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={() => handleRemoveClicked(item.product.id)}>❌</Button>
                    </CardActions>
                </Card>
            ))}
            <div className="shopping-cart-total">
                <strong>Total:</strong> {formatAsCurrency(shoppingCart.total)}
            </div>
        </>);
}