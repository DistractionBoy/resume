import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import JPtheme from '../public/JPtheme';
import Header from './Header';
import Navigation from './Navigation';
import BackgroundLines from "../components/BackgroundLines";

export default ({ children, pageMetaData }) => (
    <ThemeProvider theme={JPtheme}>
        <div className="mi-wrapper">
            <BackgroundLines />
            <Header pageMetaData={pageMetaData}></Header>
            <Navigation></Navigation>
            {children}
        </div>
    </ThemeProvider>
);