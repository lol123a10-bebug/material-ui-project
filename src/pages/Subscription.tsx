import { Box } from "@mui/material";
import Header from "../components/Shared/Header";

interface Props {}

const Subscription = (props: Props) => {
  return (
    <Box>
      <Header title="Subscription" subtitle="Manage your billing information and invoices." />
      <Box></Box>
    </Box>
  );
};

export default Subscription;
