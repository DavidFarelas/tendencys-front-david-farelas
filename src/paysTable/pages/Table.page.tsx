import LayoutPage from "../../pages/Layout.page";
import TableOfPays from "../components/Table.components";

const TablePage = () => {
  return <LayoutPage children={<TableOfPays />} title="Tabla de pagos" />;
};

export default TablePage;
