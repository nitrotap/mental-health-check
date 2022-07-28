import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Container, Typography, CardActions, Box, CardContent, CardMedia, Grid, Button } from '@mui/material'

import jumbo from '../public/images/jumbo.jpg'
import jumbo2 from '../public/images/jumbo2.jpg'
import Link from 'next/link'
import Copyright from '../components/Copyright'

export default function Home() {

  const picRandomizer = () => {
    if (Math.random() > 0.5) {
      return jumbo;
    } else {
      return jumbo2;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Mental Health Check - Home</title>
        <meta name="description" content="Check In with your mental health." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.container}>
        <Typography className={styles.title}>
          Take the First Step to Better Mental Health
        </Typography>
        <Grid spacing={10} container sx={{ alignItems: 'center' }}>
          <Grid item xs={12} md={4}>
            <CardContent className={styles.card}>
              <Typography className={styles.text} variant='body1'>
                Use Mental Health Check to check-in with yourself and how you're feeling.
              </Typography>
              <Typography className={styles.text} variant='body1'>
                Mental Health Check uses questions from mental illness screenings, but with Yes/No questions.
              </Typography>
              <Typography className={styles.text} variant='body1'>
                Instead of screening for a diagnosis, Mental Health Check uses those questions to help the user identify their feelings.
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box >
              <CardMedia>
                <Image
                  src={jumbo}
                  alt="therapy session"
                />
              </CardMedia>
              <CardContent className={styles.card}>
                <Typography className={styles.cardTitle} gutterBottom variant="h5" component="div">
                  Take the Mental Health Check
                </Typography>
                <Typography className={styles.cardText}>
                  Select from our question categories and begin taking your customized mental health check quiz!
                </Typography>
              </CardContent>
              <CardActions className={styles.cardButtons}>
                <Button sx={{ backgroundColor: '#18344A', borderColor: 'white', border: 1, fontSize: 30 }}>
                  <Link href='/quizselect' style={{ textDecoration: 'none' }} >
                    <span className={styles.buttonTitle} >
                      Take the quiz
                    </span>
                  </Link>
                </Button>
                <Button sx={{ backgroundColor: '#18344A', borderColor: 'white', border: 1, fontSize: 30 }}>
                  <Link href='/signup' style={{ textDecoration: 'none' }}>
                    <span className={styles.buttonTitle}>
                      Create An Account
                    </span>
                  </Link>
                </Button>
              </CardActions>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <footer className={styles.footer}>
        <Copyright />
      </footer>
    </div>
  )
}
