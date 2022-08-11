import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavItem } from "../../../utils/models/navigation";

interface Props {
  list: NavItem[];
  title: string;
}

const NavList = (props: Props) => {
  const { title, list } = props;

  return (
    <List subheader={<ListSubheader sx={{ textTransform: "uppercase" }}>{title}</ListSubheader>}>
      {list.map((item, index) => (
        <ListItemButton key={index}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
