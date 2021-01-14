import React from 'react';

import { Container } from './styles';

import { GlobalStyle } from '../configuration/global-styles';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>App</Container>
  </>
);

export default App;
