import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --red: #C72828;
    --green: #39B100;
    --green-light: #41c900;
    --blue: #2196F3;
    --yellow: #FFB84D;
    --orange: #FF9000;
    --gray-light: #F0F0F5;
    --gray-medium: #E4E4EB;
    --gray-dark: #3D3D4D;
    --gray-shades: #B7B7CC;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  ::-webkit-scrollbar {
    width: .5rem;
    height: .5rem;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--red);
    -webkit-box-shadow: inset 1px 1px 2px rgb(155 155 155 / 40%);
    -moz-box-shadow: inset 1px 1px 2px rgba(155, 155, 155, 0.4);
    box-shadow: inset 1px 1px 2px rgb(155 155 155 / 40%);
    border-radius: .25rem;
    &:hover {
      background: var(--yellow);
    }
  }
  ::-webkit-scrollbar-track {
    background: #fff;
    -webkit-box-shadow: inset 1px 1px 2px #e0e0e0;
    -moz-box-shadow: inset 1px 1px 2px #e0e0e0;
    box-shadow: inset 1px 1px 2px #e0e0e0;
    border: 1px solid #d8d8d8;
  }
  ::selection {
    background: var(--red);
    color: #fff;
  }

  body {
    background: #fff;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;