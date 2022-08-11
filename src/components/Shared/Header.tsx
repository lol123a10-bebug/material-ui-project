import { Typography } from "@mui/material";

interface Props {
  title: string;
  subtitle: string;
}

const Header = (props: Props) => {
  const { title, subtitle } = props;

  return (
    <div>
      <Typography variant="h3"></Typography>
    </div>
  );
};

export default Header;
