# Frontend realizado por [@DavidFarelas](https://github.com/DavidFarelas) para la prueba técnica de tendencys

## Tecnologías utilizadas

- [React.js]
- [MUI]
- [ReactRouter]
- [ReduxToolkit]
- [SweetAlert]
- [Axios]
- [Formik]
- [Yup]

## Explicación

- La aplicación cuenta con 2 páginas:
  1. La página principal muestra una tabla con el número de orden, total de productos solicitados, precio total del pedido y un botón para ver todos los detalles de la solicitud.
  2. Por otro lado está la página donde se pueden ver los detalles de cada solicitud, en esta página se muestran en tarjetas la información de cada producto solicitado; desde esta página se pueden agregar productos a la solicitud y realizar el pago.
- Se utilizó Redux Toolkit como manejador de estados para hacer persistir la información.
- Para hacer la solicitud al servidor se hizo uso de Axios.
- El formulario para agregar un producto a la orden se encuentra validado con Formik y Yup.
- Para el diseño de la aplicación se utilizó MUI (anteriormente MaterialUI).

## Instalación

Instalar las dependencias necesarias.

```sh
npm install
npm run dev
```

La aplicación se ejecuta en el puerto 5173

```sh
localhost:5173
```

## Pruebas

Para poder realizar las pruebas, es necesario crear el archivo `.env` basandonse en el archivo `.template.env` incluido en los archivo y colocar la URL en `VITE_API_PATH`y el token en `VITE_API_TOKEN`

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[react.js]: https://es.reactjs.org/
[mui]: https://mui.com/
[reactrouter]: https://reactrouter.com/en/main
[reduxtoolkit]: https://redux-toolkit.js.org/
[sweetalert]: https://sweetalert2.github.io/
[axios]: https://axios-http.com/es/docs/intro
[formik]: https://formik.org/
[yup]: https://www.npmjs.com/package/yup
