import { ComponentType } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronsUpDown } from "lucide-react";

import { Typography } from "~/components";

import { main_menus } from "../../constants/main_menus";

import { cn } from "../../utils/cn";

const Sidenav = () => {
  const location = useLocation();

  const isSelected = (path) =>
    location.pathname.startsWith(path)
      ? "bg-[#f0f0fd] text-[#3C41E9] border border-[#dadedf] rounded-md"
      : "text-[#6c6b75]";

  return (
    <aside className=" w-[18%] px-3 py-4 wrap-break-word border border-[#dadedf] bg-white fixed h-screen">
      <Typography className="font-bold py-2 px-2">Nova</Typography>
      <nav className="flex flex-col gap-2 mt-4 border-y border-[#dadedf] py-4">
        <div className="flex items-center gap-2 border border-[#dadedf] bg-[#f4f5f7] rounded-md p-2 my-2">
          <div className="flex gap-2 flex-1">
            <div className="bg-black w-10 h-10 rounded-md" />
            <div>
              <Typography variant="p" className="font-bold text-sm">
                Squish Company
              </Typography>
              <Typography variant="p" className="text-xs font-normal text-[#a4aaaf]">
                Team - 20 Members
              </Typography>
            </div>
          </div>
          <ChevronsUpDown size={15} color="#72767b" />
        </div>
        <Typography variant="p" className="text-sm text-[#9fa5a9] font-medium pl-2">
          MAIN MENU
        </Typography>
        {main_menus.map(
          (menu: {
            name: string;
            path: string;
            Icon: ComponentType<{ size?: string | number; className?: string }>;
          }) => (
            <Link
              key={menu.name}
              to={menu.path}
              className={cn(
                `flex items-center gap-2 font-medium text-sm px-2 py-2 cursor-pointer ${isSelected(menu.path)}`,
              )}
            >
              <menu.Icon size={15} />
              {menu.name}
            </Link>
          ),
        )}
      </nav>
    </aside>
  );
};

export default Sidenav;
