import { Payment } from "@mui/icons-material";
import { Box, Button, Card, Grid, Typography } from "@mui/material";
import Header from "../components/Shared/Header";
import PaymentCard from "../components/Subscription/PaymentCard";
import PlanCard from "../components/Subscription/PlanCard";

interface Props {}

const Subscription = (props: Props) => {
  return (
    <Box>
      <Header title="Subscription" subtitle="Manage your billing information and invoices." />
      <Box>
        <PlanCard />

        <PaymentCard />
      </Box>
    </Box>
  );
};

export default Subscription;
