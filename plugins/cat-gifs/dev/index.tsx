import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { catGifsPlugin, CatGifsPage } from '../src/plugin';

createDevApp()
  .registerPlugin(catGifsPlugin)
  .addPage({
    element: <CatGifsPage />,
    title: 'Root Page',
    path: '/cat-gifs'
  })
  .render();
