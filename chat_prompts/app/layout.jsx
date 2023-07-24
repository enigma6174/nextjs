import NavComponent from "@components/nav.component";
import ProviderComponent from "@components/provider.component";

import "@styles/globals.css";

export const metadata = {
  title: "Chat Prompts",
  description: "Discover and share AI prompts",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ProviderComponent>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <NavComponent />
            {children}
          </main>
        </ProviderComponent>
      </body>
    </html>
  );
}

export default RootLayout;
