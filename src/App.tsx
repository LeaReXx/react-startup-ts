import AboutServices from "./components/abouse services/AboutServices";
import Header from "./components/header/Header";
import Customers from "./components/customers/Customers";
import AboutInvesting from "./components/about investing/AboutInvesting";
import MakeMoney from "./components/make money/MakeMoney";
import BusinessGrowth from "./components/business growth/BusinessGrowth";
import TeamTogether from "./components/team toghether/TeamToghether";
import QuestionAnswer from "./components/question answer/QuestionAnswer";
import Subscribe from "./components/subscribe/Subscribe";

function App() {
  return (
    <>
      <Header />
      <Customers />
      <AboutServices />
      <AboutInvesting />
      <MakeMoney />
      <BusinessGrowth />
      <TeamTogether />
      <QuestionAnswer />
      <Subscribe />
    </>
  );
}

export default App;
