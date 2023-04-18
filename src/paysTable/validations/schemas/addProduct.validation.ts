import * as Yup from 'yup';

export const validationSchema = Yup.object({
  name: Yup.string().required(),
  price: Yup.number().required().moreThan(1).positive(),
  quantity: Yup.number().required().moreThan(1).positive(),
  sku: Yup.string().required(),
})