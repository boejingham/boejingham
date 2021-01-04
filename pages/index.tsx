import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import { IconButton } from '@material-ui/core'
import Image from 'next/image'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import DrawerController from '../src/components/drawer_controller'

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

  return (
    <>
      <CssBaseline />
      <Image src={'/backgrounds/4.jpg'} layout='fill' objectFit='cover' quality={100} className={classes.backgroundImage}/>
      <DrawerController />
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
            <Grid item>
              <Typography variant="h2" className={classes.mainText}>
                Joe Bingham
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h5" className={classes.secondaryText}>
                  Always learning, always optimistic :) 
              </Typography>
            </Grid>
          </Grid>
        </main>
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
