import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    cursor: default;
    font-family: 'Roboto', sans-serif;
    user-select: none;
  }

  .Modal {
    background-color: #fefefe;
    box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    outline: none;
    width: 90%;

    @media screen and (min-width: 26rem) {
      max-width: 40rem;
      width: 80%;
    }
  }

  .Overlay {
    align-items: center;
    background-color: rgba(255, 255, 255, .9)
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`
