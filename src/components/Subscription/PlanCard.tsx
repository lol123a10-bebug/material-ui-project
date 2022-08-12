import { ArrowForward } from "@mui/icons-material";
import { Card, Box, Typography, Chip, Divider, Button } from "@mui/material";
import useUiContext from "../../utils/hooks/useUiContext";

const PlanCard = () => {
  const { mode } = useUiContext();
  return (
    <Card sx={(theme) => ({ padding: "2rem 2rem 1.5rem" })}>
      <Box display="flex" justifyContent="space-between" alignItems="center" pb="1rem">
        <Box>
          <Box sx={{ display: "flex", gap: ".75rem", alignItems: "center", paddingBottom: ".25rem" }}>
            <Typography sx={{ fontSize: "1.2rem" }}>Pro</Typography>
            <Chip
              variant="outlined"
              sx={(theme) => ({
                display: "inline",
                height: "unset",
                borderRadius: "0rem",
                color: theme.colors.featured.plan,
                borderColor: theme.colors.featured.plan,
                backgroundColor: theme.colors.featured.planLight,
              })}
              label="Current plan"
            />
          </Box>
          <Typography
            sx={(theme) => ({
              color: theme.colors.textSecond,
            })}
          >
            You're currently on the Pro plan.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h5">
            <strong>$25</strong>
            <Typography
              sx={(theme) => ({
                color: theme.colors.textSecond,
              })}
              display="inline"
            >
              /month
            </Typography>
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Box>
        <Button
          sx={(theme) => ({
            display: "flex",
            gap: "1rem",
            width: "100%",
            justifyContent: "flex-start",
            height: "100%",
            marginTop: "1rem",
            color: theme.colors.featured.upgrade,
          })}
        >
          <span>Upgrade plans</span>
          <ArrowForward />
        </Button>
      </Box>
    </Card>
  );
};

export default PlanCard;
