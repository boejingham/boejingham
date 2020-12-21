import React, { useRef, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Toolbar from '@material-ui/core/Toolbar'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Hidden from '@material-ui/core/Hidden'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import { Avatar, Drawer, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import Image from 'next/image'

import MenuIcon from '@material-ui/icons/Menu';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles(theme => ({
  backgroundImage: {
    zIndex: -1,
    opacity: .9,
  },
  main: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  iconButtonRoot: {
    borderRadius: 0,
    margin: 10,
    position: 'absolute'
  },
  drawerPaper: {
    width: '15vw',
  },
  avatar: {
    height: 150,
    width: 150,
  },
  nameListItem: {
    width: 'min-content'
  },
  gridRoot: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  }, 
  mainText: {
    color: '#84ffff',
    textAlign: 'center'
  },
  secondaryText: {
    color: '#FFF',
    textAlign: 'center'
  },
  socialRow: {
    position: 'absolute',
    right: 10,
  },
  whiteIcon: {
    color: 'white',
  }
}));

const Home = () => {
  const classes = useStyles()
  let [isDrawerOpen, updateDrawer] = useState(false);

  return (
    <>
      <CssBaseline />
      <Image src={'/backgrounds/3.jpg'} layout='fill' objectFit='cover' quality={100} className={classes.backgroundImage}/>
      {/* <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            classes={{root: classes.iconButtonRoot}}
            style={{backgroundColor: 'black'}} 
            onClick={() => updateDrawer((s) => !s)}
          >
            <MenuIcon className={classes.whiteIcon}/>
        </IconButton> */}
      <div className={classes.socialRow}>
        <IconButton>
          <a href='https://github.com/boejingham' target='blank' rel='noreferrer noopener'>
            <GitHubIcon className={classes.whiteIcon}/>
          </a>
        </IconButton>
        <IconButton>
          <a href='https://twitter.com/BoeJingham' target='blank' rel='noreferrer noopener'>
            <TwitterIcon className={classes.whiteIcon}/>
          </a>
        </IconButton>
        <IconButton>
          <a href='https://www.linkedin.com/in/joseph-bingham/' target='blank' rel='noreferrer noopener'>
            <LinkedInIcon className={classes.whiteIcon}/>
          </a>
        </IconButton>
      </div>
      <Container maxWidth="lg" className={classes.container}>
        <main className={classes.main}>
          <Grid container className={classes.gridRoot}>
            <Grid item justify='center'>
              <Typography variant="h2" className={classes.mainText}>
                Joe Bingham
              </Typography>
            </Grid>
            <Grid item justify='center'>
              <Typography variant="h5" className={classes.secondaryText}>
                  Always learning, always optimistic :) 
              </Typography>
            </Grid>
          </Grid>
        </main>
        <Drawer open={isDrawerOpen} anchor="left" onClose={() => updateDrawer(false)} classes={{paper: classes.drawerPaper}}>
            <List>
                <ListItem alignItems="center">
                  <ListItemAvatar>
                    <Avatar src='/avatar/main.jpg' className={classes.avatar}/>
                  </ListItemAvatar>
                </ListItem>
                <ListItem alignItems="center">
                  <ListItemText classes={{primary: classes.nameListItem}}>
                    Joe Bingham
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    One
                  </ListItemText>
                </ListItem>
                <ListItem button> 
                  <ListItemText>
                    Two
                  </ListItemText>
                </ListItem>
                <ListItem button>
                  <ListItemText>
                    Three
                  </ListItemText>
                </ListItem>
            </List>
          </Drawer>
        <style global jsx>{`
      html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }
    `}</style>
      </Container>
    </>
  )
}

export default Home;
