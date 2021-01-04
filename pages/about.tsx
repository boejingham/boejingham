import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import { Avatar } from '@material-ui/core'

import DrawerController from '../src/components/drawer_controller';

const useStyles = makeStyles({
  backgroundImage: {
    zIndex: -1,
    opacity: .9,
  },
  avatar: {
    border: '4px solid #F5F5F6',
    marginBottom: 10,
    height: 150,
    width: 150,
  },
  main: {
    display: 'flex',
    flex: 1,
    height: '100%',
  },
  contentContainer: {
    flex: 1,
  },
  divider: {
    width: '20%',
    border: '1px solid #F5F5F6',
    borderRadius: '5px',
    margin: '10px 0',
  },
  headerContainer: {
    flex: 1,
    padding: 10,
    backgroundImage: `url(${"/backgrounds/3.jpg"})`,
    backgroundSize: 'cover',
    backgroundPosition: 'bottom'
  },
  headerText: {
    color: '#FFF'
  },
  aboutContainer: {
    backgroundColor: '#F5F5F6',
    flex: 2,
    padding: '30px 0px 10px 0px',
  },
  subtext: {
    color: '#F5F5F6',
    textAlign: 'center',
  },
  aboutMeDivider: {
    width: '15%',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px 0',
  },
  aboutMeText: {
    padding: '0 15%',
  },
  aboutPageContainer: {
    backgroundColor: '#F5F5F6',
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
        <DrawerController invert/>
        <main className={classes.main}>
          <Grid container direction='column'>
            <Grid container className={classes.headerContainer} direction='column' justify='center' alignItems='center' alignContent='space-around'>
              <Avatar src='/avatar/main.jpg' className={classes.avatar}/>
              <Typography className={classes.headerText} variant='h5'>Joe Bingham</Typography>
              <div className={classes.divider} />
              <Typography className={classes.subtext} variant='body1'>
                Software Engineer <br/>
                Always learning, always optimistic :) 
              </Typography>
            </Grid>
            <Grid container className={classes.aboutContainer} direction='column' alignItems='center'>
                <Typography variant='h5'>About Me</Typography>
                <div className={classes.aboutMeDivider} />
                <Grid container className={classes.aboutMeText}>
                  <Typography>
                    Hi! My name is Joe. I'm a software engineer in Phoenix, Arizona, writing code for <a href='https://www.workiva.com/' target='blank' rel='noreferrer noopener'>Workiva</a>. 
                    I'm on the Client Platform team, primarily focused on platform wide UI concerns, such as core dependencies (React, state management) and core components (design system). <br/><br/>
                  </Typography>
                </Grid>
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
    </>
  )
}

export default About;
