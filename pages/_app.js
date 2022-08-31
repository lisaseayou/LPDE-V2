import { createGlobalStyle, ThemeProvider } from "styled-components";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Verdana', 
  }
`;

// const theme = {
//   colors: {
//     primary: "",
//   },
// };
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      {/* <ThemeProvider theme={theme}> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
      {/* </ThemeProvider> */}
    </>
  );
}

export default MyApp;
