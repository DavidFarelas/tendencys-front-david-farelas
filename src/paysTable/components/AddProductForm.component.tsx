import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { Container, Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../validations/schemas/addProduct.validation";
import { useAppDispatch } from "../../redux/hooks";
import { updateOrder } from "../../redux/features/paysTable/tableSlice";
import { IOrder } from "../models/order.model";
import { IProduct } from "../models/products.model";

const AddProductForm = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const { id } = params;
  const [open, setOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isFirstOpen, setIsFirstOpen] = useState(true);

  const initialValues = {
    name: "",
    price: "",
    quantity: "",
    sku: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newOrder: IProduct = {
        name: values.name,
        price: parseInt(values.price),
        quantity: parseInt(values.quantity),
        sku: values.sku,
      };
      dispatch(updateOrder({ order: newOrder, id: id! }));
      handleClose();
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsFirstOpen(true);
    formik.resetForm();
  };

  useEffect(() => {
    const { errors } = formik;
    if (isFirstOpen) setIsFirstOpen(false);
    if (Object.keys(errors).length !== 0 || isFirstOpen)
      return setIsDisabled(true);
    else return setIsDisabled(false);
  }, [formik.errors]);

  const handleSubmit = () => {
    formik.handleSubmit();
  };

  return (
    <div>
      <Container sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClickOpen}
          fullWidth
        >
          Agregar producto
        </Button>
      </Container>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="lg"
        aria-labelledby="form-add-product-title"
        aria-describedby="form-add-product-description"
      >
        <DialogTitle id="form-add-product-title">
          {"Agregar producto a la orden"}
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="name"
                label="Nombre"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                sx={{ mt: 1 }}
                fullWidth
                required
                error={
                  formik.errors.name && formik.errors.name.length > 0
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="sku"
                label="SKU"
                variant="outlined"
                value={formik.values.sku}
                onChange={formik.handleChange}
                sx={{ mt: 1 }}
                fullWidth
                required
                error={
                  formik.errors.sku && formik.errors.sku.length > 0
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="price"
                label="Precio"
                variant="outlined"
                value={formik.values.price}
                onChange={formik.handleChange}
                sx={{ mt: 1 }}
                fullWidth
                required
                error={
                  formik.errors.price && formik.errors.price.length > 0
                    ? true
                    : false
                }
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="quantity"
                label="Cantidad"
                variant="outlined"
                value={formik.values.quantity}
                onChange={formik.handleChange}
                sx={{ mt: 1 }}
                fullWidth
                required
                error={
                  formik.errors.quantity && formik.errors.quantity.length > 0
                    ? true
                    : false
                }
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="success"
            disabled={isDisabled}
            onClick={handleSubmit}
          >
            Aceptar
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={handleClose}
            autoFocus
          >
            Cancelar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddProductForm;
