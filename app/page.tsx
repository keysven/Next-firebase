import { AuthProvider } from "@/context/auth";
import { AppProps } from "next/app";
import Image from "next/image";
import { Component } from "react";
import Layout from "./layout";

export default function Home({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
