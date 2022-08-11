import { Payment } from "@mui/icons-material";
import { Card, Box, Typography, Button } from "@mui/material";
import useUiContext from "../../utils/hooks/useUiContext";

const PaymentCard = () => {
  const { mode } = useUiContext();

  return (
    <Card sx={{ padding: "2rem" }}>
      <Typography pb="1rem">Payment method</Typography>
      <Card
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.main,
        })}
      >
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            color: theme.palette.secondary.contrastText,
          })}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <Payment sx={{ fontSize: "3rem" }} />
            <Box>
              <Typography>Visa **** 6546</Typography>
              <Typography
                sx={(theme) => ({
                  color: theme.palette.primary.light,
                })}
              >
                Expiry 03/25
              </Typography>
            </Box>
          </Box>
          <Button
            sx={(theme) => ({
              backgroundColor: "transparent",
              color: theme.palette.secondary.contrastText,
              borderColor: mode === "light" ? theme.palette.secondary.contrastText : theme.palette.primary.light,

              "&:hover": {
                borderColor: mode === "light" ? theme.palette.secondary.contrastText : theme.palette.primary.light,
              },
            })}
            variant="outlined"
          >
            Edit
          </Button>
        </Box>
      </Card>
    </Card>
  );
};

export default PaymentCard;
