import { ReactNode } from "react";
import { ClientProvider } from "./Clients";
import { AuthProvider } from "./Auth";
import { FeedbackProvider } from "./Feedbacks";
import { ServiceProvider } from "./Services";
import { ThemeProvider } from "./Theme";
import { PartnersProvider } from "./Partners";
interface ProvidersProps {
  children: ReactNode;
}
const Providers = ({ children }: ProvidersProps) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ClientProvider>
          <FeedbackProvider>
            <ServiceProvider>
              <PartnersProvider>{children}</PartnersProvider>
            </ServiceProvider>
          </FeedbackProvider>
        </ClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default Providers;
