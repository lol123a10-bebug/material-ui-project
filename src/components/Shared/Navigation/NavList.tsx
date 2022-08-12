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
            backgroundColor: theme.colors.first,
            color: theme.colors.textThird,
          })}
        >
          {title}
        </ListSubheader>
      }
    >
      {list.map((item, index) => (
        <ListItemButton
          sx={(theme) => ({
            color: theme.colors.textFirst,
            borderRadius: "5px",

            "&:hover": {
              backgroundColor: theme.colors.second,

              "& svg": {
                color: theme.colors.textFirst,
              },
            },
          })}
          key={index}
        >
          <ListItemIcon sx={(theme) => ({ color: theme.colors.textSecond })}>{item.icon}</ListItemIcon>
          <ListItemText>{item.text}</ListItemText>
        </ListItemButton>
      ))}
    </List>
  );
};

export default NavList;
