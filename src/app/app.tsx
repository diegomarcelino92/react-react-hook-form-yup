import React from 'react';

import { Container } from './styles';

import { GlobalStyle } from '../configuration/global-styles';

import RegisterForm from '../components/register-form';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Container>
      <RegisterForm />
    </Container>
  </>
);

export default App;
