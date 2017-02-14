import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    cursor: default;
    font-family: 'Roboto', sans-serif;
    user-select: none;
  }

  .Modal {
    background-color: #fefefe;
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
    background-color: rgba(0, 0, 0, .75);
    bottom: 0;
    display: flex;
    justify-content: center;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
  }
`
