import React from 'react';
import logo from './logo.svg';
import './App.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer'
import Sidebar from './Components/Sidebar/Sidebar';
import MainFeaturedPost from './Components/MainFeaturedPost/MainFeaturedPost';

function App() {

  const sections = [
    { title: 'ENTRADAS', url: '#' },
    { title: 'BAILES', url: '#' },
    { title: 'RIO CARNAVAL', url: '#' },
    { title: 'DESFILES DE SAMBA', url: '#' },
    { title: 'AYUDA/SOPORTE', url: '#' },
  ];

  const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };

  const mainFeaturedPost = {
    title: 'Title of a longer featured blog post',
    description:
      "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    linkText: 'Continue reading…',
  };
  

  return (
    <div className="App">
      <Header sections={sections} title="Rio Carnaval"/>
      <Container  maxWidth="lg">
      <MainFeaturedPost post={mainFeaturedPost}/>
      <Grid container spacing={5} sx={{ mt: 3 }}>
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
      </Grid>
      </Container>
      <Footer title='Rio Canaval' description='Proyecto de Base de Datos I'/>
    </div>
  );
}

export default App;
