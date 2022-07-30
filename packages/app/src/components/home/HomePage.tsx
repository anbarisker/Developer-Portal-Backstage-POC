/*
 * Copyright 2021 The Backstage Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  HomePageRandomJoke,
  ComponentAccordion,
  ComponentTabs,
  ComponentTab,
  WelcomeTitle,
  HeaderWorldClock,
  ClockConfig,
  HomePageToolkit,
  HomePageCompanyLogo,
  TemplateBackstageLogo,
  TemplateBackstageLogoIcon,
} from '@backstage/plugin-home';
import { Content, Header, Page } from '@backstage/core-components';
import { HomePageSearchBar, searchPlugin } from '@backstage/plugin-search';
import { HomePageCalendar } from '@backstage/plugin-gcalendar';
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
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <Page themeId="home">
      <Header title={<WelcomeTitle />} pageTitleOverride="Home">
        <HeaderWorldClock
          clockConfigs={clockConfigs}
          customTimeFormat={timeFormat}
        />
      </Header>

      <Content>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <HomePageSearchBar placeholder="Search" />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
