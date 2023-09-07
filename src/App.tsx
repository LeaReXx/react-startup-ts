import AboutServices from "./components/abouse services/AboutServices";
import Header from "./components/header/Header";
import Customers from "./components/customers/Customers";
import AboutInvesting from "./components/about investing/AboutInvesting";
import MakeMoney from "./components/make money/MakeMoney";

function App() {
  return (
    <>
      <Header />
      <Customers />
      <AboutServices />
      <AboutInvesting />
      <MakeMoney/>
    </>
  );
}

export default App;
