import { Box, Divider } from "@mui/material";
import Header from "../components/Shared/Header";
import Blocks from "../components/Subscription/Blocks";
import Invoices from "../components/Subscription/Invoices";

interface Props {}

const Subscription = (props: Props) => {
  return (
    <Box>
      <Header title="Subscription" subtitle="Manage your billing information and invoices." />
      <Blocks />
      <Divider />
      <Invoices />
    </Box>
  );
};

export default Subscription;
