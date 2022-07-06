import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PsychologyIcon from '@mui/icons-material/Psychology';

import LightbulbIcon from '@mui/icons-material/Lightbulb';
import GitHubIcon from '@mui/icons-material/GitHub';

import CreateIcon from '@mui/icons-material/Create';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import NotesIcon from '@mui/icons-material/Notes';

//apollo
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

//CSS
import './components/CSS/App.css';

//routes
//import AudioRecorder from './components/AudioRecorder';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Quiz from './pages/Quiz';
import Dashboard from './pages/Dashboard';
import SingleQuiz from './pages/Result';
import Legal from './pages/Legal';
import HelpLineCard from './components/Elements/HelpLineCard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/Homepage';
import QuizSelectForm from './components/QuizSelectForm';
import Therapy from './pages/Therapy';
import Auth from './utils/auth';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const listOne = [
    {
      text: 'Home',
      icon: <HomeIcon />,
      link: '/',
    },
    {
      text: 'Dashboard',
      icon: <DashboardIcon />,
      link: '/dashboard',
    },
    {
      text: 'Quiz',
      icon: <PsychologyIcon />,
      link: '/quizselect',
    },
    {
      text: 'Therapy',
      icon: <NotesIcon />,
      link: '/therapy',
    },
    {
      text: 'Legal',
      icon: <LightbulbIcon />,
      link: '/legal',
    },
  ];

  const listTwo = [

    {
      text: 'Github',
      icon: <GitHubIcon />,
      link: 'https://github.com/nitrotap/mental-health-check',
    }
  ];

  const listThree = [
    {
      text: 'Signup',
      icon: <CreateIcon />,
      link: '/signup',
    },
    {
      text: 'Login',
      icon: <LoginIcon />,
      link: '/login',
    }
  ];

  return (
    <ApolloProvider client={client}>
      <Box sx={{ marginTop: '30px', marginBottom: '60px' }}>
        <Router>
          <Box sx={{ display: 'flex', }}>
            <CssBaseline />
            <AppBar position="fixed" z-index='1400' open={open} sx={{ backgroundColor: '#326B96' }}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{ mr: 2, ...(open && { display: 'none' }) }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Mental Health Check
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: drawerWidth,
                  boxSizing: 'border-box',
                },
              }}
              variant="persistent"
              anchor="left"
              open={open}
            >
              <Box sx={{ backgroundColor: '#326B96', height: '100%', color: 'white', border: 'none', }}>
                <DrawerHeader>
                  <IconButton onClick={handleDrawerClose} sx={{ color: 'white' }}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                  </IconButton>
                </DrawerHeader>
                <Divider variant='middle' color='white' />
                <List>
                  {listOne.map((item) => {
                    const { text, icon, link } = item;
                    return (
                      <Link to={link} key={text} style={{ textDecoration: 'none' }}>
                        <ListItem disablePadding>
                          <ListItemButton>
                            {icon && <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>}
                            <ListItemText sx={{ color: 'white' }} primary={text} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    )
                  })}
                </List>
                <Divider variant='middle' color='white' />
                <List>
                  {listTwo.map((item, index) => {
                    const { text, icon, link } = item;
                    return (
                      <a href={link} key={index} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                        <ListItem key={text} disablePadding>
                          <ListItemButton >
                            {icon && <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>}
                            <ListItemText sx={{ color: 'white' }} primary={text} />
                          </ListItemButton>
                        </ListItem>
                      </a>
                    )
                  })}
                </List>
                <Divider variant='middle' color='white' />
                <List>
                  {listThree.map((item, index) => {
                    const { text, icon, link } = item;
                    return (
                      <Link to={link} key={index} style={{ textDecoration: 'none' }}>
                        <ListItem key={text} disablePadding>
                          <ListItemButton>
                            {icon && <ListItemIcon sx={{ color: 'white' }}>{icon}</ListItemIcon>}
                            <ListItemText sx={{ color: 'white' }} primary={text} />
                          </ListItemButton>
                        </ListItem>
                      </Link>
                    )
                  })}
                  <Link to={'/'} onClick={() => Auth.logout()} style={{ textDecoration: 'none' }}>
                    <ListItem key='logout' disablePadding>
                      <ListItemButton>
                        {<LogoutIcon /> && <ListItemIcon sx={{ color: 'white' }}>{<LogoutIcon />}</ListItemIcon>}
                        <ListItemText sx={{ color: 'white' }} primary={'Logout'} />
                      </ListItemButton>
                    </ListItem>
                  </Link>
                </List>
              </Box>
            </Drawer>
            <Main open={open} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              backgroundColor: '#18344A'
            }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />
                <Route path="quiz/:id" element={<Quiz />} />
                <Route path="singlequiz/:id" element={<SingleQuiz />} />
                <Route path="quizselect" element={<QuizSelectForm />} />
                <Route path="legal" element={<Legal />} />
                <Route path='helpCard' element={<HelpLineCard />} />
                <Route path='therapy' element={<Therapy />} />
              </Routes>
            </Main>
          </Box>
        </Router >
      </Box>
    </ApolloProvider >
  );
};