import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import StyledButtonInline from './components/StyledButtonInline';
import StyledButtonInternal from './components/StyledButtonInternal';
import StyledButtonExternal from './components/StyledButtonExternal';
import LifecycleDemo from './components/LifecycleDemo';
import Counter from './components/Counter';
import CounterReducer from './components/CounterReducer';
import JokeFetcher from './components/JokeFetcher';
import FocusInput from './components/FocusInput';
import { ThemeProvider } from './components/ThemeContext';
import Parent from './components/Parent';

function App() {
  return (
    <div className="App">
      <Header title="Welcome to My React App" />
      <Content />
      <Footer />
      <StyledButtonInline />
      <StyledButtonInternal />
      <StyledButtonExternal />
      <LifecycleDemo />
      <Counter />
      <CounterReducer />
      <JokeFetcher />
      <FocusInput />
      <ThemeProvider>
        <Parent />
      </ThemeProvider>
    </div>
  );
}

export default App;
