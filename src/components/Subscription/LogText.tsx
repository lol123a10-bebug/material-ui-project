import { Typography } from "@mui/material";

interface Props {
  label: string;
  info: string;
}

const LogText = (props: Props) => {
  const { label, info } = props;

  return (
    <Typography
      sx={(theme) => ({
        color: theme.palette.primary.light,
      })}
    >
      {label}:{" "}
      <Typography
        component="span"
        sx={(theme) => ({
          color: theme.palette.primary.contrastText,
        })}
      >
        {info}
      </Typography>
    </Typography>
  );
};

export default LogText;
