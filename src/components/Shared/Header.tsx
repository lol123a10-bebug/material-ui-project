import { Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
}

const Header = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <Typography variant="h5">{title}</Typography>
      <Typography
        sx={(theme) => ({
          color: theme.palette.secondary.light,
        })}
      >
        {subtitle}
      </Typography>
    </div>
  );
};

export default Header;
