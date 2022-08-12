import { Box, Card, Typography } from "@mui/material";
import LogText from "./LogText";
import PaymentCard from "./PaymentCard";
import PlanCard from "./PlanCard";

const Blocks = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "grid",
        gap: "1rem",

        padding: "2rem 0 2rem",

        [theme.breakpoints.up("md")]: {
          gridTemplateColumns: "1fr 1fr",
        },

        "& .MuiCard-root": {
          backgroundColor: theme.colors.third,
          border: `1px solid ${theme.colors.border}`,
        },
      })}
    >
      <PlanCard />

      <PaymentCard />

      <Card
        sx={(theme) => ({
          padding: "2rem",
          display: "grid",
          gap: ".25rem",
          [theme.breakpoints.up("md")]: { gridColumn: "1 / 3" },
        })}
      >
        <Typography>Subscription usage</Typography>
        <LogText label="Total logs ingested" info="32817.63MB" />
        <LogText label="Total Lambda executions" info="1.3mil" />
      </Card>
    </Box>
  );
};

export default Blocks;
