import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider, Stack } from "@mui/material";
import { IProduct } from "../models/products.model";
import { formatter } from "../../utils/formatter";

const ProductCard = (product: IProduct) => {
  const total: number = Number(product.price) * Number(product.quantity);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Divider />
        <Stack>
          <Typography>sku: {product.sku}</Typography>
          <Typography>
            Precio unitario: {formatter.format(product.price)}
          </Typography>
          <Typography>Cantidad: {product.quantity.toString()}</Typography>
          <Typography align="right">
            Total: {formatter.format(total)}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
