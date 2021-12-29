import ApplicationRoute from "./routes/router";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theam from "./theam/theam";
import { Provider } from "react-redux";
import store from "core/store";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theam}>
        <CssBaseline />
        <ApplicationRoute />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
