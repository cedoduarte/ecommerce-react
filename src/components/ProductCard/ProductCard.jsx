import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { formatAsCurrency } from "../../shared/utils";
import { useDispatch } from "react-redux";
import { appendProduct } from "../../store/shoppingCartSlice";
import toast, { Toaster } from "react-hot-toast";

export const ProductCard = ({ 
    id,
    name,
    description,
    price,
    stock,
    imagehref,
    lastModified,
    createdDate,
    isDeleted
}) => {
    const dispatch = useDispatch();

    const handleAddToShoppingCart = () => {
        dispatch(appendProduct({
            product: {
                id,
                name,
                description,
                price,
                stock,
                imagehref,
                lastModified,
                createdDate,
                isDeleted
            }
        }));
        toast.success("Product added to 'Shopping Cart'");
    }

    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        image={imagehref}
                        alt="image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {formatAsCurrency(price)}<br />
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary" onClick={handleAddToShoppingCart}>
                        <i className="material-symbols-outlined">shopping_cart</i>
                    </Button>
                </CardActions>
            </Card>
            <Toaster />
        </>
    );
}