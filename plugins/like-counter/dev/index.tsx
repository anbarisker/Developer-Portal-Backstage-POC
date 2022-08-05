import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { likeCounterPlugin, LikeCounterPage } from '../src/plugin';

createDevApp()
  .registerPlugin(likeCounterPlugin)
  .addPage({
    element: <LikeCounterPage />,
    title: 'Root Page',
    path: '/like-counter'
  })
  .render();
