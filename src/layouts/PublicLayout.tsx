import Navbar from "./Navbar";
import Footer from "./Footer";
import Head from "next/head";

interface Props {
  children?: JSX.Element;
}

const PublicLayout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Custom Light Box</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default PublicLayout;
