import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './src/routes';

YellowBox.ignoreWarnings([
  'Failed prop type'
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor='#003f5c'/>
      <Routes/>
    </>
  );
}