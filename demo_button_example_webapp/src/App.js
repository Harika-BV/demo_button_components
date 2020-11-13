import './App.css';
import {BasicButton, OutlineButton} from 'demo_button_component';

function App() {
  return (
    <div>
      <h1>Demo Button Components</h1>

      <h2>Basic Buttons</h2>
      <BasicButton buttonSize="btn--wide" buttonColor="red">Basic Button</BasicButton>&nbsp;
      <BasicButton buttonSize="btn--large" buttonColor="black">Basic Button</BasicButton>&nbsp;
      <BasicButton buttonSize="btn--medium" buttonColor="primary">Basic Button</BasicButton>&nbsp;
      <BasicButton buttonSize="btn--small" buttonColor="red">Basic Button</BasicButton>&nbsp;

      <h2>Outline Buttons</h2>    
      <OutlineButton buttonSize="btn--wide" buttonBorderColor="red-border">Outline Button</OutlineButton>&nbsp;
      <OutlineButton buttonSize="btn--large" buttonBorderColor="black-border">Outline Button</OutlineButton>&nbsp;
      <OutlineButton buttonSize="btn--medium" buttonBorderColor="primary-border">Outline Button</OutlineButton>&nbsp;
      <OutlineButton buttonSize="btn--small" buttonBorderColor="red-border">Outline Button</OutlineButton>&nbsp;
    </div>
  );
}

export default App;
