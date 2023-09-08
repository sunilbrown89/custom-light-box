import { GoToTop, Gallery, Sunil } from "components/home";
import Practice from "components/home/Practice";

import { PublicLayout } from "layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      <>
        <Gallery />
        {/* <Sunil /> */}
        {/* <Practice /> */}
        <GoToTop />
      </>
    </PublicLayout>
  );
};

export default Home;
