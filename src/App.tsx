import GlobalStyle from "./shared/GlobalStyle";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";
import { RecoilRoot } from "recoil";

// react query 설정
const queryClient = new QueryClient();

function App() {
  return (
    <>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Router />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  );
}

export default App;
