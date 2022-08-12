import { Payment } from "@mui/icons-material";
import { Card, Box, Typography, Button } from "@mui/material";
import useUiContext from "../../utils/hooks/useUiContext";

const PaymentCard = () => {
  const { mode } = useUiContext();

  return (
    <Card
      sx={{
        padding: "2rem",

        "& .MuiCard-root": { border: 0 },
      }}
    >
      <Typography pb="1rem">Payment method</Typography>
      <Card sx={{ boxShadow: "unset" }}>
        <Box
          sx={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem",
            color: theme.colors.textFirst,
            backgroundColor: theme.colors.first,
          })}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              backgroundColor: theme.colors.first,
            })}
          >
            <Payment sx={{ fontSize: "3rem" }} />
            <Box>
              <Typography>Visa **** 6546</Typography>
              <Typography
                sx={(theme) => ({
                  color: theme.colors.textSecond,
                })}
              >
                Expiry 03/25
              </Typography>
            </Box>
          </Box>
          <Button
            sx={(theme) => ({
              color: theme.colors.textFirst,
              backgroundColor: theme.colors.button,
              borderColor: theme.colors.border,
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
