"use client";

import { SessionProvider } from "next-auth/react";

function ProviderComponent({ children, session }) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default ProviderComponent;
