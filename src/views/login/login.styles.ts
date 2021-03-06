import { createUseStyles } from "react-jss";

import { Theme } from "src/styles/theme";

const useLoginStyles = createUseStyles((theme: Theme) => ({
  logo: {
    margin: [theme.spacing(8), "auto", 0, "auto"],
  },
  appName: {
    marginTop: theme.spacing(3),
    margin: "auto",
    padding: [theme.spacing(1.25), theme.spacing(4)],
    background: theme.palette.grey.main,
    borderRadius: theme.spacing(7),
  },
  cardWrap: {
    margin: [theme.spacing(3), 0],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    margin: [theme.spacing(3), 0],
  },
  cardHeader: {
    padding: [theme.spacing(3), theme.spacing(4), theme.spacing(2)],
  },
  cardHeaderCentered: {
    textAlign: "center",
  },
}));

export default useLoginStyles;
