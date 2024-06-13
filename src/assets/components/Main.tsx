import Demographics from "./Main/Demographics";
import AccountSummary from "./Main/AccountSummary";
import Activity from "./Main/Activity";

const Main = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="grid min-h-full grid-rows-[auto_1fr] bg-stone-400">
        <div className="bg-slate-800 text-white">hi</div>
        <div className="overflow-y-auto p-6 [&>div]:mb-4">
          <Demographics />
          <AccountSummary />
          <Activity />
        </div>
      </div>
    </div>
  );
};

export default Main;
