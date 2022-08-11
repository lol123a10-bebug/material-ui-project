import { Typography } from "@mui/material";
import useUiContext from "../../utils/hooks/useUiContext";

interface Props {
  label: string;
  info: string;
}

const LogText = (props: Props) => {
  const { label, info } = props;
  const { mode } = useUiContext();

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
          color: mode === "light" ? theme.palette.secondary.contrastText : theme.palette.primary.contrastText,
        })}
      >
        {info}
      </Typography>
    </Typography>
  );
};

export default LogText;
