import { List, ListSubheader, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavItem } from "../../../utils/models/navigation";

interface Props {
  list: NavItem[];
  title: string;
}

const NavList = (props: Props) => {
  const { title, list } = props;

  return (
    <List
      subheader={
        <ListSubheader
          sx={(theme) => ({
            textTransform: "uppercase",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          })}
        >
          {title}
        </ListSubheader>
      }
    >
      {list.map((item, index) => (
        <ListItemButton
          sx={(theme) => ({
            color: theme.palette.primary.contrastText,
          })}
          key={index}
        >
          <ListItemIcon sx={{ color: "inherit" }}>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
