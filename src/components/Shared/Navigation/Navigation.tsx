import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from "@mui/material";
import { account, organization, user } from "../../../utils/constants/navigation";
import NavList from "./NavList";

const drawerWidth = "min(30%, 30rem)";

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
    <nav>
      <Drawer
        variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
          },
        }}
        anchor="left"
        open={isOpen}
        onClose={handleClose}
      >
        <div></div>
        <div>
          <NavList list={organization} title="Organization" />
          <NavList list={account} title="Account Settings" />
          <NavList list={user} title="User Settings" />
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
