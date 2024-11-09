import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 style={{ fontSize: "40px", fontWeight: "bold" }}>
        Customers Shared Layout
      </h1>
      <div>{children}</div>
    </div>
  );
}
