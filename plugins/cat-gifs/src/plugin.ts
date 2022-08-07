import {
  createTechDocsAddonExtension,
  TechDocsAddonLocations,
} from '@backstage/plugin-techdocs-react/alpha';
import { createPlugin } from '@backstage/core-plugin-api';
import { ExampleComponent } from './components/ExampleComponent';

export const catGifsPlugin = createPlugin({
  id: 'cat-gifs',
});

// You must "provide" your Addon, just like any extension, via your plugin.
export const CatGifsPage = catGifsPlugin.provide(
  // This function "creates" the Addon given a component and location. If your
  // component can be configured via props, pass the prop type here too.
  createTechDocsAddonExtension({
    name: 'CatGifsPage',
    location: TechDocsAddonLocations.SecondarySidebar,
    component: ExampleComponent,
  }),
);
