/*
 * Copyright 2020 The Backstage Authors
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

import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#ffffff',
  },
});

const LogoIcon = () => {
  const classes = useStyles();

  return (
    <svg
      viewBox="0 0 241 41"
      fill="none"
      className={classes.svg}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6315 41H9.04015C5.61591 41 3.90403 38.6362 3.90403 33.9088V26.1015C3.90403 23.7609 3.05884 22.4529 1.36846 21.9139C0.612728 21.9139 0 21.281 0 20.5001C0 19.7195 0.6125 19.0863 1.36823 19.0863C3.05884 18.5625 3.90403 17.2008 3.90403 14.8293V7.04519C3.90403 2.34832 5.61591 0 9.04015 0H11.6315C12.3873 0 13 0.63288 13 1.41378C13 2.19467 12.3873 2.82755 11.6315 2.82755H10.9474C8.21051 2.82755 6.84206 2.82755 6.84206 6.36211L6.93792 14.9911C6.93792 17.7167 6.01334 19.5414 4.16394 20.4654C6.01334 21.4049 6.93792 23.2374 6.93792 25.9629L6.84206 34.6379C6.84206 38.3214 8.07484 38.2728 10.0174 38.1964H10.0187C10.099 38.1931 11.6315 38.1724 11.6315 38.1724C12.3873 38.1724 13 38.8053 13 39.5862C13 40.3671 12.3873 41 11.6315 41Z"
        className={classes.path}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M33.3685 41H35.9599C39.3841 41 41.0962 38.6362 41.0962 33.9088V26.1015C41.0962 23.7609 41.9412 22.4529 43.6315 21.9139C44.3873 21.9139 45 21.281 45 20.5001C45 19.7195 44.3873 19.0863 43.6318 19.0863C41.9412 18.5625 41.0962 17.2008 41.0962 14.8293V7.04519C41.0962 2.34832 39.3841 0 35.9599 0H33.3685C32.6127 0 32 0.63288 32 1.41378C32 2.19467 32.6127 2.82755 33.3685 2.82755H34.0528C36.7895 2.82755 38.1579 2.82755 38.1579 6.36211L38.0621 14.9911C38.0621 17.7167 38.9867 19.5414 40.8361 20.4654C38.9867 21.4049 38.0621 23.2374 38.0621 25.9629L38.1579 34.6379C38.1579 38.3214 36.9252 38.2728 34.9826 38.1964H34.9813C34.901 38.1931 33.3685 38.1724 33.3685 38.1724C32.6127 38.1724 32 38.8053 32 39.5862C32 40.3671 32.6127 41 33.3685 41Z"
        className={classes.path}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24 9.95485C24 8.87609 23.1825 8 22.1754 8H11.8244C10.8175 8 10 8.87609 10 9.95485V10.0452C10 11.1241 10.8175 12 11.8244 12H22.1754C23.1825 12 24 11.1241 24 10.0452V9.95485Z"
        fill="#61B6FA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 9.95485C35 8.87609 34.2037 8 33.223 8H26.777C25.7963 8 25 8.87609 25 9.95485V10.0452C25 11.1241 25.7963 12 26.777 12H33.223C34.2037 12 35 11.1241 35 10.0452V9.95485Z"
        fill="#53BFC0"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 16.9547C19 15.8759 18.2117 15 17.2407 15H11.7593C10.7883 15 10 15.8759 10 16.9547V17.0453C10 18.1241 10.7883 19 11.7593 19H17.2407C18.2117 19 19 18.1241 19 17.0453V16.9547Z"
        fill="#6EC3EC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 30.9547C19 29.8759 18.2117 29 17.2407 29H11.7593C10.7883 29 10 29.8759 10 30.9547V31.0453C10 32.1241 10.7883 33 11.7593 33H17.2407C18.2117 33 19 32.1241 19 31.0453V30.9547Z"
        fill="#E25352"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 31C35 29.8962 34.1599 29 33.1249 29H21.8749C20.8401 29 20 29.8962 20 31C20 32.1038 20.8401 33 21.8749 33H33.1249C34.1599 33 35 32.1038 35 31Z"
        fill="#39A4FA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 16.9547C35 15.8759 34.1788 15 33.1674 15H21.8326C20.8212 15 20 15.8759 20 16.9547V17.0453C20 18.1241 20.8212 19 21.8326 19H33.1674C34.1788 19 35 18.1241 35 17.0453V16.9547Z"
        fill="#D883DA"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M35 23.9548C35 22.8759 34.189 22 33.1901 22H11.8099C10.811 22 10 22.8759 10 23.9548V24.0452C10 25.1241 10.811 26 11.8099 26H33.1901C34.189 26 35 25.1241 35 24.0452V23.9548Z"
        fill="#FFBC37"
      />
    </svg>
  );
};

export default LogoIcon;
