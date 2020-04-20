import React, { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import JPtheme from '../public/JPtheme';
import Header from './Header';
import Navigation from './Navigation';
import BackgroundLines from "../components/BackgroundLines";
import { initGA, logPageView } from '../utils/analytics'

export default ({ children, pageMetaData }) => {

    useEffect(() => {
        if (!window.GA_INITIALIZED) {
            initGA();
            window.GA_INITIALIZED = true
          }
          logPageView();
    }, []);

    return (
        <ThemeProvider theme={JPtheme}>
            <div className="mi-wrapper">
                <BackgroundLines />
                <Header pageMetaData={pageMetaData}></Header>
                <Navigation></Navigation>
                {children}
            </div>
        </ThemeProvider>
    );
};