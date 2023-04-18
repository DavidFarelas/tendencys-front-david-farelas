import { Backdrop, CircularProgress } from "@mui/material";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";

const LoadingComponent = () => {
  const { isLoading } = useAppSelector((state) => state.paysTable);
  const [open, setOpen] = useState<boolean>(isLoading);
  useEffect(() => {
    setOpen(isLoading);
  }, [isLoading]);

  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
};

export default LoadingComponent;
