import { ThemeProvider, SelectDialog, StandardListItem } from '@ui5/webcomponents-react';
import '@ui5/webcomponents-react/dist/Assets.js';
import '@ui5/webcomponents/dist/features/InputElementsFormSupport.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import './util/i18n';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    <>
      <SelectDialog growing="Scroll" headerText="Select Product" onLoadMore={() => console.log('Growing!')} open={true}>
        {new Array(100).fill('a', 0, 100).map((s, index) => (
          <StandardListItem key={index}>{index}</StandardListItem>
        ))}
      </SelectDialog>
    </>
  </ThemeProvider>
);
