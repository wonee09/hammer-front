import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";

// react query 설정
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  );
}

export default App;
