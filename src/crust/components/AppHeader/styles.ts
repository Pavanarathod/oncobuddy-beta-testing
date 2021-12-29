import { Theme } from "@mui/material/styles/";

const styles = (theme: Theme) => ({
  appLogo: {
    width: 80,
    height: 80,
    [theme.breakpoints.down("sm")]: {
      width: 65,
      height: 65,
    },
    [theme.breakpoints.down("xs")]: {
      width: 50,
      height: "auto",
    },
  },
  appBarRoot: {
    flexGrow: 1,
  },
  toolBarRoot: {
    height: 74,
    [theme.breakpoints.down("sm")]: {
      height: 70,
    },
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    background: "#F4F4F4",
    // border: "1px solid #D9D9D8",
    boxSizing: "border-box",
    borderRadius: 4,
    position: "relative",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: 274.35,
    height: 48,
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
    [theme.breakpoints.down("xs")]: {
      width: "auto",
      maxWidth: 171,
      height: 41,
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    "& > .MuiSvgIcon-root": {
      fill: "#B3B3B3",
    },
  },
  inputRoot: {
    color: "inherit",
    width: 274,
    height: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    alignItems: "center",
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: 26,
    justifyContent: "space-evenly",
  },
  badgeRoot: {
    height: 16,
  },
  spacer: {
    width: 12,
  },
  spacerOne: {
    width: 16,
  },
  spacerTwo: {
    width: 28,
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  cardRoot: {
    width: 250,
    height: "auto",
    minHeight: 242,
    // marginLeft: 20,
    // marginRight: 20,
    paddingLeft: 20,
    paddingRight: 20,
    // paddingTop: 0,
    display: "flex",
    flexDirection: "column",
  },
  cardHeaderRoot: {
    display: "flex",
    marginTop: 0,
    paddingBottom: 0,
    paddingTop: 20,
    paddingLeft: 10.8,
  },
  avatar: {
    width: 24,
    height: 24,
  },
  header: {
    marginLeft: 13.62,
    // display: 'flex',
    // flexDirection: 'column',
    // gap: 8,
    // marginTop: 10,
  },
  cardHeaderText: {
    fontFamily: "Metropolis",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "22px",
  },
  cardHeaderActionText: {
    fontFamily: "Metropolis",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "22px",
    cursor: "pointer",
    // backgroundColor: '#00636B',
  },
  viewProfile: {
    paddingLeft: 50,
    // marginTop: 8,
    marginBottom: "20px",
  },
  divider: {
    marginLeft: 10,
  },
  contentRoot: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingLeft: 0,
    paddingRight: 0,
  },
  contentText: {
    width: "auto",
    fontFamily: "Metropolis",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "22px",
    paddingLeft: 8,
    cursor: "pointer",
  },
  badge: {
    transform: "scale(1) translate(50%, -50%)",
    height: 16,
    minWidth: 21,
    fontFamily: "Metropolis",
    fontSize: 10,
  },
});

export default styles;
