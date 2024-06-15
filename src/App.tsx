import Header from "./assets/components/Header";
import Main from "./assets/components/Main";
import SideNav from "./assets/components/SideNav";

function App() {
  return (
    <>
      <div className="grid h-lvh grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
        <Header />
        <SideNav />
        <Main />
      </div>
    </>
  );
}

export default App;
