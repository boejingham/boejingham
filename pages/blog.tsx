import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

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
  contentContainer: {
    backgroundColor: '#F5F5F6',
    flex: 2,
    padding: '30px 0px 10px 0px',
  },
  subtext: {
    color: '#F5F5F6',
    textAlign: 'center',
  },
  contentMeDivider: {
    width: '15%',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px 0',
  },
  contentMeText: {
    padding: '0 15%',
  },
  contentPageContainer: {
    backgroundColor: '#F5F5F6',
  },
});

const Blog = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
        <DrawerController invert/>
        <main className={classes.main}>
          <Grid container direction='column'>
            <Grid container className={classes.headerContainer} direction='column' justify='center' alignItems='center' alignContent='space-around'>
              <Typography className={classes.headerText} variant='h2'>Blog</Typography>
            </Grid>
            <Grid container className={classes.contentContainer} direction='column' alignItems='center'>
                <Typography variant='h5'>Welcome to my Blog!</Typography>
                <div className={classes.contentMeDivider} />
                <Grid container className={classes.contentMeText} justify='center'>
                  <Typography align='center'>
                    This is where you can find my blog content. I write about programming, productivity, board games, and life!
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

export default Blog;
