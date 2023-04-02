import { Button } from "components/button";
import { DashboardFundrise, DashboardSearch } from "modules/dashboard";

export function DashboardTopBar(props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center flex-1 gap-x-10">
        <img src="/img/logo.png" alt="crowfunding-app" />
        <div className="w-full max-w-[458px]">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center gap-x-10 flex-1 justify-end">
        <DashboardFundrise />
        <Button className="bg-secondary px-7">Start a campaign</Button>
        <img
          src="/img/logo.png"
          alt="crowfunding-app "
          className="rounded-full object-cover "
        />
      </div>
    </div>
  );
}

DashboardTopBar.propTypes = {};
