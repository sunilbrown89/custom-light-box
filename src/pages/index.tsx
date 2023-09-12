import { GoToTop, Gallery } from "components/home";

import { PublicLayout } from "layouts";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <PublicLayout>
      <>
        <Gallery />
        <GoToTop />
      </>
    </PublicLayout>
  );
};

export default Home;
