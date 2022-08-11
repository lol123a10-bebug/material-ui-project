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
      <Typography>{subtitle}</Typography>
    </div>
  );
};

export default Header;
