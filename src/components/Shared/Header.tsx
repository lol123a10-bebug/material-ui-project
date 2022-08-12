import { Typography } from "@mui/material";
import useUiContext from "../../utils/hooks/useUiContext";

interface Props {
  title: string;
  subtitle: string;
}

const Header = (props: Props) => {
  const { title, subtitle } = props;
  const { mode } = useUiContext();

  return (
    <div>
      <Typography
        sx={(theme) => ({
          color: theme.colors.textFirst,
        })}
        variant="h5"
      >
        {title}
      </Typography>
      <Typography
        sx={(theme) => ({
          color: theme.colors.textSecond,
        })}
      >
        {subtitle}
      </Typography>
    </div>
  );
};

export default Header;
