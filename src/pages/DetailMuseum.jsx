import Navbar from "../components/Navbar";
import Content from "./detailmuseum/Content";
import SubCotent from "./detailmuseum/SubCotent";
import GridImage from "./detailmuseum/GridImage";
import Maps from "./detailmuseum/Maps";
import Footer from "../components/Footer";

const DetailMuseum = () => {
  return (
    <>
      <Navbar />
      <Content />
      <SubCotent />
      <GridImage />
      <Maps />
      <Footer />
    </>
  );
};

export default DetailMuseum;
