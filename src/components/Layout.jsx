import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Team from "../Pages/Team";
import WhoWeAre from "../Pages/WhoWeAre";
import PreRegister from "../Pages/PreRegister";

const Layout = ({ page }) => {
  const renderPage = () => {
    switch (page) {
      case "team":
        return <Team />;
      case "who-we-are":
        return <WhoWeAre />;
      case "pre-register":
        return <PreRegister />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      {renderPage()}
      <Footer />
    </div>
  );
};

export default Layout;
