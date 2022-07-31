import {
  WelcomeTitle,
  HeaderWorldClock,
  ClockConfig,
  HomePageStarredEntities,
} from '@backstage/plugin-home';
import { Content, Header, Page } from '@backstage/core-components';
import { HomePageSearchBar, searchPlugin } from '@backstage/plugin-search';
import { SearchContextProvider } from '@backstage/plugin-search-react';
import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const clockConfigs: ClockConfig[] = [
  {
    label: 'NYC',
    timeZone: 'America/New_York',
  },
  {
    label: 'UTC',
    timeZone: 'UTC',
  },
  {
    label: 'STO',
    timeZone: 'Europe/Stockholm',
  },
  {
    label: 'TYO',
    timeZone: 'Asia/Tokyo',
  },
  {
    label: 'SGT',
    timeZone: 'Asia/Singapore',
  },
];

const timeFormat: Intl.DateTimeFormatOptions = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
};

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    maxWidth: '60vw',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[1],
    padding: '8px 0',
    borderRadius: '50px',
    margin: 'auto',
  },
  title: {
    margin: 'auto',
    maxWidth: '60vw',
    textAlign: 'center',
    padding: '8px 0',
    fontSize: '4.5rem',
    fontWeight: 700,
    marginTop: '2rem',
  },
  subtitle: {
    margin: 'auto',
    maxWidth: '60vw',
    textAlign: 'center',
    padding: '8px 0',
    fontSize: '1.25rem',
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <SearchContextProvider>
      <Page themeId="home">
        <Header title={<WelcomeTitle />} pageTitleOverride="Home">
          <HeaderWorldClock
            clockConfigs={clockConfigs}
            customTimeFormat={timeFormat}
          />
        </Header>
        <Content>
          {/* add margin top */}

          <Grid container justifyContent="center" spacing={6}>
            <Grid>
              <h1 className={classes.title}>Documentation</h1>
              <p className={classes.subtitle}>
                Explore technical documentation and developer guides, and learn
                how to integrate your digital products with government
                technologies
              </p>
            </Grid>
            <Grid container item xs={12} alignItems="center" direction="row">
              <HomePageSearchBar
                classes={{ root: classes.searchBar }}
                placeholder="Search"
              />
            </Grid>
            <Grid container item xs={12}>
              <Grid item xs={12} md={12}>
                <HomePageStarredEntities />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
