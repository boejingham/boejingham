import React, { useState } from 'react';

import { Avatar, IconButton, makeStyles, Drawer, List, ListItem, ListItemAvatar, ListItemText, Link, Icon, ListItemIcon } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import HomeIcon from '@material-ui/icons/Home';
import BookOutlinedIcon from '@material-ui/icons/BookOutlined';

const useStyles = makeStyles({
  drawerList: {
    '& a:hover': {
      textDecoration: 'none',
    },
  },
  drawerPaper: {
    width: '20vw',
  },
  avatar: {
    height: '10vw',
    width: '10vw',
  },
  centerListItem: {
    justifyContent: 'center',
  },
  iconButtonRoot: {
    borderRadius: 0,
    margin: 10,
    position: 'absolute'
  },
  nameListItem: {
    textAlign: 'center',
  },
  whiteIcon: ({invert} : DrawerControllerProps)  => ({
    color: invert ? 'black' : '#F5F5F6',
  })
});


interface DrawerControllerProps {
  invert?: boolean;
}

const DrawerController = ({invert = false} : DrawerControllerProps) => {
  const classes = useStyles({invert});
  let [isDrawerOpen, updateDrawer] = useState(false);

  return (
    <>
      <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            classes={{root: classes.iconButtonRoot}}
            style={{backgroundColor: invert ? '#F5F5F6' : 'black'}} 
            onClick={() => updateDrawer((s) => !s)}
          >
            <MenuIcon className={classes.whiteIcon}/>
        </IconButton>
        <Drawer open={isDrawerOpen} anchor="left" onClose={() => updateDrawer(false)} classes={{paper: classes.drawerPaper}}>
            <List className={classes.drawerList}>
                <ListItem classes={{root: classes.centerListItem}}>
                  <ListItemAvatar>
                    <Avatar src='/avatar/main.jpg' className={classes.avatar}/>
                  </ListItemAvatar>
                </ListItem>
                <ListItem classes={{root: classes.centerListItem}}>
                  <ListItemText classes={{primary: classes.nameListItem}}>
                    Joe Bingham
                  </ListItemText>
                </ListItem>
                <Link href='/'>
                  <ListItem button>
                      <ListItemIcon>
                        <HomeIcon />
                      </ListItemIcon>
                      <ListItemText>
                        Home
                      </ListItemText>
                  </ListItem>
                </Link>
                <Link href='/about'>
                  <ListItem button> 
                      <ListItemIcon>
                        <EmojiPeopleIcon />
                      </ListItemIcon>
                      <ListItemText>
                        About
                      </ListItemText>
                  </ListItem>
                </Link>
                <Link href='/blog'>
                  <ListItem button>
                      <ListItemIcon>
                        <BookOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText>
                      Blog
                    </ListItemText>
                  </ListItem>
                </Link>
            </List>
          </Drawer>
    </>
  )
}

export default DrawerController;
