import Loader from "@/components/common/Loader";
import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Dashboard from "./DashboardLayout";

const Layout = ({ children }) => {
  const router = useRouter();
  const session = useSession();

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    console.log("session :>> ", session);
    if (!session?.data && router.asPath !== "/") {
      router.replace("/");
    }
    if (session?.data && router.asPath === "/") {
      router.replace("/dashboard");
    }
    setTimeout(() => {
      setLoader(false);
    }, 500);
  }, [session, router]);

  const handleStart = () => {
    setLoader(true);
  };

  const handleComplete = () => {
    setTimeout(() => {
      setLoader(false);
    }, 300);
  };

  useEffect(() => {
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  const withoutLayoutArray = ["/"];
  const isWithoutLayout = withoutLayoutArray.includes(router.asPath);

  return (
    <div className="Layout__Component__Wrapper">
      <Head>
        <title>Business Dashboard</title>
      </Head>
      {loader ? <Loader /> : isWithoutLayout ? <div className="PAGE__CONTAINER">{children}</div> : <Dashboard>{children}</Dashboard>}
    </div>
  );
};

export default Layout;
