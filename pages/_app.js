import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import Footer from '../components/footer/footer';
import Nav from '../components/nav/Nav';
import '../styles/globals.css';
import lightTheme from '../styles/theme/lightTheme';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

// var client = contentful.createClient({
//   space: process.env.CONTENTFUL_SPACE_ID,
//   accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// });

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Nav />
        <div className='content-container'>
          <Component {...pageProps} />
        </div>
        <Footer />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
