import React, { useEffect } from "react";

import Divider from "@material-ui/core/Divider";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";


// Icones da navegação

import Geral from "@material-ui/icons/Dashboard";
import Evento from "@material-ui/icons/LocalActivity";
import KitchenIcon from '@material-ui/icons/Kitchen';
import { FaSyringe } from "react-icons/fa";
import PersonIcon from '@material-ui/icons/Person';


import { Container, Logo, Image, StyledLink, useStyles } from "./styles";

import logo from "../../assets/logo-vacinas_reduzido.png";

// import { NavLink } from "react-router-dom";

const list = [
  {
    name: "dados gerais",
    route: "/dashboard",
    icon: <Geral style={{width: 25, height: 25}}/>,
  },
  {
    name: "vacinas",
    route: "/vaccines",
    icon: <FaSyringe style={{width: 25, height: 25}}/>,
  },
  {
    name: "freezers",
    route: "/freezers",
    icon: <KitchenIcon style={{width: 25, height: 25}}/>,
  },
  {
    name: "gestores",
    route: "/managers",
    icon: <PersonIcon style={{width: 25, height: 25}}/>,
  },
];

const MenuBar = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(-1);

  const handleClick = (index) => {
    if (open === index) setOpen(-1);
    else setOpen(index);
  };

  return (
    <Container>
      <Logo className={classes.toolbar}>
        <Image src={logo} alt="provem-logo" />
      </Logo>

      <Divider />

      <List style={{ padding: 0 }} aria-labelledby="nested-list-subheader">
        {list.map((item, index) => (
          <div key={index}>
            {/* <ListItem
              selected={open === index}
              key={index}
              button
              onClick={() => handleClick(index)}
            >
              <ListItemIcon>
                {item.icon}{" "}
                
              </ListItemIcon>
              <ListItemText primary={item.name} />
              {open === index ? <ExpandLess /> : <ExpandMore />}
            </ListItem> */}
            <StyledLink key={index} onClick={() => {}} to={item.route}>
              <i>{item.icon} </i>
              <ListItemText primary={item.name} />
            </StyledLink>

            {/* <Collapse in={open === index} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {item.sub.map((subItem, index) => (
                  <StyledLink
                    key={index}
                    onClick={() => update(true)}
                    to={{
                      pathname: mappingRoute(item.name, subItem),
                      state: { withTabs: mappingTabsOrNot(item.name, subItem) },
                    }}
                  >
                    <i>
                      <StarBorder />
                    </i>
                    <ListItemText primary={subItem} />
                  </StyledLink>
                ))}
              </List>
            </Collapse> */}
          </div>
        ))}
      </List>
    </Container>
  );
};

export default MenuBar;
