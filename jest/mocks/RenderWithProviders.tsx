import React, { PropsWithChildren, ReactElement } from 'react';
// import { IntlProvider } from 'react-intl';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
//interfaces
import { ExtendedRenderOptions } from '@/jest/interfaces/JestInterfaces';

function renderWithProviders(
  ui: ReactElement,
  { locale = 'en', ...renderOptions }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      // <IntlProvider locale={locale}>
      <BrowserRouter>{children}</BrowserRouter>
      // </IntlProvider>
    );
  }

  // Return an object with the all of RTL's query functions
  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

export default renderWithProviders;
