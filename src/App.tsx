import Header from "./assets/components/Header";
import SideNav from "./assets/components/SideNav";

function App() {
  return (
    <>
      <div className="grid h-lvh grid-cols-[310px_1fr] grid-rows-[auto_1fr]">
        <Header />
        <SideNav />
      </div>
    </>
  );
}

export default App;
