import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { formatter } from "../../utils/formatter";

const TableOfPays = () => {
  const navigate = useNavigate();
  const { orders } = useAppSelector((state) => state.paysTable);

  const [rows, setRows] = useState(orders);

  useEffect(() => {
    setRows(orders);
  }, [orders]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Número de orden</TableCell>
            <TableCell align="center">Productos</TableCell>
            <TableCell align="center">Total</TableCell>
            <TableCell align="right">Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="center">{row.items.length}</TableCell>
              <TableCell align="center">
                {formatter.format(row.totals.total)} {row.currency}
              </TableCell>
              <TableCell align="right">
                <Button onClick={() => navigate(`/${row.id}`)}>Ver más</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableOfPays;
