import { createGlobalStyle } from "styled-components";

interface GlobalProps {
  backgroundGray: boolean;
}

export default createGlobalStyle`

:root{
  --black: #0C090B;
  --dark-green: #313630;
  --green: #546652;
  --red: #A62E2E;
  --gray: #CFCFCF;
  --white: #FFFFFF;
  --light-gray: #E7E7E7;
  --dark-gray: #676767;
  --shadow:  0px 0px 8px -1px rgba(0, 0, 0, 0.25);
  --font-standard: "Lato", sans-serif;
  --font-secondary: 'Oswald', sans-serif;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, main, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
   }
  
   body {
      background: ${(props: GlobalProps) =>
        props.backgroundGray ? "var(--light-gray)" : "var(--white)"};
      font-family: var(--font-standard);
      padding-top: 77px;
    }    
  
    h1, h2, h3, h4, h5, h6, strong {
      font-weight: 600;
    }
  
    button {
      cursor: pointer;
    }
    
    a, li {
      list-style: none;
      text-decoration: none;
    }
  `;
