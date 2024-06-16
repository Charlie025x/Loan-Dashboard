import "../../index.css";
import "../../assets/fonts/SEGA.woff";
import spinDash from "../spindash.png";

const Header = () => {
  return (
    <header className="col-span-full flex items-center justify-between bg-slate-400 px-4">
      <div className="flex items-center">
        <p className="font-segaLogoFont text-3xl text-blue-700">Loan Dash</p>
        <img src={spinDash} alt="" className="mx-4 w-14" />
      </div>
      <div className="">
        <button className="text-3xl font-bold">Account Look up</button>
      </div>
    </header>
  );
};

export default Header;
