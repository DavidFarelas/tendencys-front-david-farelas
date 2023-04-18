import { useNavigate, useParams } from "react-router-dom";
import LayoutPage from "../../pages/Layout.page";
import { useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import ProductCard from "../components/ProductCard.components";
import { Button, Grid, IconButton } from "@mui/material";
import AddProductForm from "../components/AddProductForm.component";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  finishLoading,
  startLoading,
} from "../../redux/features/paysTable/tableSlice";

const DetailsPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  const { orders } = useAppSelector((state) => state.paysTable);
  const orderDetail = orders.find((order) => order.id === id);

  useEffect(() => {
    if (id === undefined || orderDetail === undefined) return navigate("../");
  }, [id, orderDetail]);

  const handlePay = () => {
    dispatch(startLoading());
    setTimeout(() => {
      dispatch(finishLoading());
      Swal.fire({
        icon: "success",
        title: "Correcto",
        text: "Pago procesado exitosamente",
        confirmButtonText: "Aceptar",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) return navigate(-1);
      });
    }, 500);
  };
  return (
    <LayoutPage
      startIcon={
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => navigate(-1)}
          sx={{ mr: 2 }}
        >
          <ArrowBackIcon />
        </IconButton>
      }
      children={
        <>
          <AddProductForm />
          <Grid container spacing={2} justifyContent="center">
            {orderDetail?.items.map((item, i) => (
              <Grid item key={`${i}-${item.name}`} sm={6} md={4}>
                <ProductCard
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  sku={item.sku}
                />
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} sx={{ my: 2 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handlePay}
              startIcon={<ShoppingCartIcon />}
            >
              Pagar
            </Button>
          </Grid>
        </>
      }
      title={`Detalles de la orden: ${id}`}
    />
  );
};

export default DetailsPage;
