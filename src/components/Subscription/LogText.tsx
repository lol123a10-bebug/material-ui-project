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
        color: theme.colors.textSecond,
      })}
    >
      {label}:{" "}
      <Typography
        component="span"
        sx={(theme) => ({
          color: theme.colors.textFirst,
        })}
      >
        {info}
      </Typography>
    </Typography>
  );
};

export default LogText;
