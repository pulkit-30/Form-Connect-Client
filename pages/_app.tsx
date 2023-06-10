import LayoutProvider from "@/components/Layout";
import AlertMessagesProvider from "@/contexts/AlertMessagesProvider";
import AuthProvider from "@/contexts/AuthProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => (
  <AlertMessagesProvider>
    <AuthProvider>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </AuthProvider>
  </AlertMessagesProvider>
);

export default App;
