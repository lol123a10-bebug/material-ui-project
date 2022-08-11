import { ArrowForward } from "@mui/icons-material";
import { Card, Box, Typography, Chip, Divider, Button } from "@mui/material";

const PlanCard = () => {
  return (
    <Card sx={{ padding: "2rem 2rem 1.5rem" }}>
      <Box display="flex" justifyContent="space-between" alignItems="center" pb="1rem">
        <Box>
          <Box sx={{ display: "flex", gap: ".75rem", alignItems: "center", paddingBottom: ".25rem" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Pro</Typography>
            <Chip
              variant="outlined"
              sx={{ display: "inline", height: "unset", borderRadius: "0rem" }}
              label="Current plan"
            />
          </Box>
          <Typography
            sx={(theme) => ({
              color: theme.palette.primary.light,
            })}
          >
            You're currently on the Pro plan.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">
            $25
            <Typography
              sx={(theme) => ({
                color: theme.palette.primary.light,
              })}
              display="inline"
            >
              /month
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Button
        sx={(theme) => ({
          display: "flex",
          gap: "1rem",
          width: "100%",
          justifyContent: "flex-start",
          height: "100%",
          marginTop: "1rem",
          color: theme.palette.primary.contrastText,
        })}
      >
        <span>Upgrade plans</span>
        <ArrowForward />
      </Button>
    </Card>
  );
};

export default PlanCard;
