import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  SettingsOutlined,
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
  ExpandLess,
  ExpandMore,
} from "@mui/icons-material";
import React, { useEffect, useState, useRef } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import profileImage from "assets/profile.jpeg";
import { Collapse } from "@mui/material";
import { menu } from "./menu";
import { hasChildren } from "./Utils";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Finance",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Retur",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

const Sidebar = ({
  user,
  drawerWidth,
  isSidebarOpen,
  setIsSidebarOpen,
  isNonMobile,
}) => {
  const theme = useTheme();

  const MenuItem = ({ item }) => {
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const handleClick = () => {
      setOpen(!open);
    };
    const active = item.path === location.pathname;

    return (
      <>
        <ListItemButton
          component={RouterLink}
          to={item.path}
          selected={active}
          onClick={handleClick}
        >
          <ListItemText primary={item.title}></ListItemText>
          {item.submenu && (open ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
        {item.submenu && (
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.submenu.map((subitem) => (
                <MenuItem key={subitem.path} item={subitem} />
              ))}
            </List>
          </Collapse>
        )}
      </>
    );
  };

  // const MenuItem = ({ item }) => {
  //   const Component = hasChildren(item) ? Multilevel : SingleLevel;
  //   return <Component item={item} />;
  // };

  // const SingleLevel = ({ item }) => {
  //   return (
  //     <ListItemButton
  //       component={RouterLink}
  //       to={item.to}
  //       style={{ color: "inherit", textDecoration: "none" }}
  //     >
  //       <ListItemIcon>{item.icon}</ListItemIcon>
  //       <ListItemText primary={item.title} />
  //     </ListItemButton>
  //   );
  // };

  // const Multilevel = ({ item }) => {
  //   const { items: children } = item;
  //   const [open, setOpen] = useState(false);
  //   let menuRef = useRef();
  //   // const handleOpen = () => {
  //   //   setOpen((prevState) => !prevState);
  //   // };

  //   // const handleClose = () => {
  //   //   setOpen(false);
  //   // };

  //   // useEffect(() => {
  //   //   let handler = (e) => {
  //   //     if (menuRef.current.contains(e.target.value)) {
  //   //       setOpen(false);
  //   //     }
  //   //   };
  //   // });

  //   return (
  //     <React.Fragment>
  //       <ListItemButton onClick={() => setOpen(!open)}>
  //         <ListItemIcon>{item.icon}</ListItemIcon>
  //         <ListItemText primary={item.title} />
  //         {open ? <ExpandLess /> : <ExpandMore />}
  //       </ListItemButton>
  //       <Collapse in={open}>
  //         <List component="div" disablePadding>
  //           {children.map((child, key) => (
  //             <MenuItem key={key} item={child}></MenuItem>
  //           ))}
  //         </List>
  //       </Collapse>
  //     </React.Fragment>
  //   );
  // };

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSixing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
              width: drawerWidth,
            },
          }}
        >
          {/* <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    ECOMVISION
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                      {text}
                    </Typography>
                  );
                }
                const lcText = text.toLowerCase();

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        navigate(`/${lcText}`);
                        setActive(lcText);
                      }}
                      sx={{
                        backgroundColor:
                          active === lcText
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lcText
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lcText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box> */}

          {/* <Box position="absolute" bottom="2rem">
            <Divider />
            <FlexBetween textTransform="none" gap="1rem" m="1.5rem 2rem 0 3rem">
              <Box
                component="img"
                alt="profile"
                src={profileImage}
                height="40px"
                width="40px"
                borderRadius="50%"
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign="left">
                <Typography
                  fontWeight="bold"
                  fontSize="0.9rem"
                  sx={{ color: theme.palette.secondary[100] }}
                >
                  {user.name}
                </Typography>
                <Typography
                  fontSize="0.8rem"
                  sx={{ color: theme.palette.secondary[200] }}
                >
                  {user.occupation}
                </Typography>
              </Box>
              <SettingsOutlined
                sx={{
                  color: theme.palette.secondary[300],
                  fontSize: "25px ",
                }}
              />
            </FlexBetween>
          </Box> */}
          <Box width="100%">
            <Box m="1.5rem 2rem 2rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <Box display="flex" alignItems="center" gap="0.5rem">
                  <Typography variant="h4" fontWeight="bold">
                    KERAMAT
                  </Typography>
                </Box>
                {!isNonMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List component="nav" disablePadding>
              {/* <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/products"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Products" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/customers"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Customers" />
                </Link>
              </ListItem>

              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/finance"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Finance" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/geography"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Geopgraphy" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/overview"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Overview" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/daily"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Daily" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/monthly"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Monthly" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/breakdown"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Breakdown" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/admin"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Admin" />
                </Link>
              </ListItem>
              <ListItem button>
                <ListItemIcon></ListItemIcon>
                <Link
                  to={"/performance"}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <ListItemText primary="Performance" />
                </Link>
              </ListItem> */}
              {/* {menu.map((item) => (
                <div key={item.title}>
                  <ListItem
                    component={RouterLink}
                    to={item.to}
                    style={{ color: "inherit", textDecoration: "none" }}
                    onClick={() => setOpen(!open)}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary={item.title} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </ListItem>
                  <Collapse in={open} timeout="auto" unmountOnExit>
                    <Divider />
                    <List component="div" disablePadding>
                      {item.subMenu.map((item1) => (
                        <ListItem button>
                          <ListItemText inset primary={item1.title} />
                          {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItem>
                      ))}
                    </List>
                  </Collapse>
                </div>
              ))} */}
              {menu.map((item, key) => (
                <MenuItem key={key} item={item} />
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};

export default Sidebar;
