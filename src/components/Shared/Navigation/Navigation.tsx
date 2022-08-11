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
      sx={{
        ".MuiDrawer-paper": {
          padding: ".5rem .5rem",
          width: "30%",
        },
      }}
      anchor="left"
      open={isOpen}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: ".75rem", padding: "1rem 0 1rem" }}>
        <Typography>
          <IconButton onClick={handleClose}>
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
