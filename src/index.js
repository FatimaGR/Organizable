import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/auth-context';
import styled from "@emotion/styled";
import App from './App';
import { colors } from './styles/colors';
import { fonts } from './styles/typography';

const Background = styled.body`
  background-color: ${colors.gray100};
  min-height: 100vh;
  padding: 0;
  margin: 0;
  font-family: ${fonts.primary};
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Background>
          <App />
        </Background>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
