import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import StyledButton from './StyledButton';
import LifecycleDemo from './LifecycleDemo';
import Counter from './Counter';
import JokeFetcher from './JokeFetcher';
import FocusInput from './FocusInput';
import { ThemeProvider } from './ThemeContext';
import ThemedButton from './ThemedButton';
import ParentComponent from './ParentComponent';
import FormWithState from './FormWithState';
import FormWithRef from './FormWithRef';

const App = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '1000px', margin: '0 auto' }}>
      <Header title="React Components Demo" />
      
      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Content Component</h2>
        <Content />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Styled Buttons</h2>
        <StyledButton />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Lifecycle Demo</h2>
        <LifecycleDemo />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Counter</h2>
        <Counter />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Joke Fetcher</h2>
        <JokeFetcher />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Focus Input</h2>
        <FocusInput />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Theme Context</h2>
        <ThemeProvider>
          <ThemedButton />
        </ThemeProvider>
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Props Example</h2>
        <ParentComponent />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Form with useState</h2>
        <FormWithState />
      </section>

      <section style={{ margin: '20px 0', padding: '20px', border: '1px solid #eee', borderRadius: '5px' }}>
        <h2>Form with useRef</h2>
        <FormWithRef />
      </section>

      <Footer />
    </div>
  );
};

export default App;