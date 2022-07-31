import {
  WelcomeTitle,
  HeaderWorldClock,
  ClockConfig,
  HomePageStarredEntities,
} from '@backstage/plugin-home';
import { wrapInTestApp, TestApiProvider } from '@backstage/test-utils';
import { Content, Header, Page } from '@backstage/core-components';
import {
  starredEntitiesApiRef,
  MockStarredEntitiesApi,
  catalogApiRef,
} from '@backstage/plugin-catalog-react';
import { configApiRef } from '@backstage/core-plugin-api';
import { ConfigReader } from '@backstage/config';
import { HomePageSearchBar, searchPlugin } from '@backstage/plugin-search';
import {
  searchApiRef,
  SearchContextProvider,
} from '@backstage/plugin-search-react';
import { HomePageStackOverflowQuestions } from '@backstage/plugin-stack-overflow';
import { Grid, makeStyles } from '@material-ui/core';
import React, { ComponentType } from 'react';

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

const entities = [
  {
    apiVersion: '1',
    kind: 'Component',
    metadata: {
      name: 'mock-starred-entity',
      title: 'Mock Starred Entity!',
    },
  },
  {
    apiVersion: '1',
    kind: 'Component',
    metadata: {
      name: 'mock-starred-entity-2',
      title: 'Mock Starred Entity 2!',
    },
  },
  {
    apiVersion: '1',
    kind: 'Component',
    metadata: {
      name: 'mock-starred-entity-3',
      title: 'Mock Starred Entity 3!',
    },
  },
  {
    apiVersion: '1',
    kind: 'Component',
    metadata: {
      name: 'mock-starred-entity-4',
      title: 'Mock Starred Entity 4!',
    },
  },
];

const mockCatalogApi = {
  getEntities: async () => ({ items: entities }),
};

const starredEntitiesApi = new MockStarredEntitiesApi();

export default {
  title: 'Plugins/Home/Templates',
  decorators: [
    (Story: ComponentType<{}>) =>
      wrapInTestApp(
        <>
          <TestApiProvider
            apis={[
              [catalogApiRef, mockCatalogApi],
              [starredEntitiesApiRef, starredEntitiesApi],
              [searchApiRef, { query: () => Promise.resolve({ results: [] }) }],
              [
                configApiRef,
                new ConfigReader({
                  stackoverflow: {
                    baseUrl: 'https://api.stackexchange.com/2.2',
                  },
                }),
              ],
            ]}
          >
            <Story />
          </TestApiProvider>
        </>,
      ),
  ],
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
    fontSize: '4.5rem',
    fontWeight: 700,
    marginTop: '2rem',
  },
  subtitle: {
    margin: 'auto',
    fontSize: '1.25rem',
    textAlign: 'center',
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
          <Grid container justifyContent="center" spacing={6}>
            <Grid container item xs={12} alignItems="center" direction="row">
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
              <Grid item xs={12} md={6}>
                <HomePageStarredEntities />
              </Grid>
              <Grid item xs={12} md={6}>
                <HomePageStackOverflowQuestions
                  requestParams={{
                    tagged: 'formik',
                    site: 'stackoverflow',
                    pagesize: 5,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Content>
      </Page>
    </SearchContextProvider>
  );
};
