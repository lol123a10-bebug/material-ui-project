import { ArrowBack } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import { account, organization, user } from "../../../utils/constants/navigation";
import NavList from "./NavList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Navigation = (props: Props) => {
  const { isOpen, onClose } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Drawer
      variant="persistent"
      sx={(theme) => ({
        ".MuiDrawer-paper": {
          padding: ".5rem .5rem",
          width: "100%",

          [theme.breakpoints.up("sm")]: {
            width: "30%",
          },

          backgroundColor: theme.colors.first,
        },
      })}
      anchor="left"
      open={isOpen}
    >
      <Box
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          gap: ".75rem",
          padding: "1rem 0 1rem",
          color: theme.colors.textFirst,
        })}
      >
        <Typography>
          <IconButton
            sx={(theme) => ({
              color: theme.colors.textFirst,
            })}
            onClick={handleClose}
          >
            <ArrowBack />
          </IconButton>
        </Typography>
        <Typography sx={{ fontSize: "1.3rem" }}>Settings</Typography>
      </Box>
      <div>
        <NavList list={organization} title="Organization" />
        <NavList list={account} title="Account Settings" />
        <NavList list={user} title="User Settings" />
      </div>
    </Drawer>
  );
};

export default Navigation;
