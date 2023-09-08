import AboutServices from "./components/abouse services/AboutServices";
import Header from "./components/header/Header";
import Customers from "./components/customers/Customers";
import AboutInvesting from "./components/about investing/AboutInvesting";
import MakeMoney from "./components/make money/MakeMoney";
import BusinessGrowth from "./components/business growth/BusinessGrowth";

function App() {
  return (
    <>
      <Header />
      <Customers />
      <AboutServices />
      <AboutInvesting />
      <MakeMoney/>
      <BusinessGrowth/>
    </>
  );
}

export default App;
