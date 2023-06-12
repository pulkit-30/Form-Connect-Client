import LayoutProvider from "@/components/Layout";
import AlertMessagesProvider from "@/contexts/AlertMessagesProvider";
import AuthProvider from "@/contexts/AuthProvider";
import UserProvider from "@/contexts/UserProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => (
  <QueryClientProvider client={queryClient}>
    <AlertMessagesProvider>
      <AuthProvider>
        <UserProvider>
          <LayoutProvider>
            <Component {...pageProps} />
          </LayoutProvider>
        </UserProvider>
      </AuthProvider>
    </AlertMessagesProvider>
  </QueryClientProvider>
);

export default App;
