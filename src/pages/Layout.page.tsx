import { ReactNode } from "react";
import NavBarComponent from "../components/Navbar.component";
import { Container } from "@mui/material";
import LoadingComponent from "../components/Loading.component";

interface ILayout {
  children: ReactNode;
  title: string;
  startIcon?: ReactNode;
}

const LayoutPage = ({ children, title, startIcon }: ILayout) => {
  return (
    <>
      <NavBarComponent title={title} startIcon={startIcon} />

      <Container sx={{ my: 8 }}>
        <LoadingComponent />
        {children}
      </Container>
    </>
  );
};

export default LayoutPage;
