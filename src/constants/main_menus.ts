import { ComponentType } from "react";
import { CalendarCheck, FileUser, LayoutDashboard, UserRoundPlus, Users } from "lucide-react";

interface MenuProps {
  name: string;
  path: string;
  Icon: ComponentType<{ size?: string | number; className?: string }>;
}

export const main_menus: MenuProps[] = [
  {
    Icon: LayoutDashboard,
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    Icon: Users,
    name: "Employee",
    path: "/employee",
  },
  {
    Icon: UserRoundPlus,
    name: "Recruitment",
    path: "/recruitment",
  },
  {
    Icon: FileUser,
    name: "Payroll",
    path: "/payroll",
  },
  {
    Icon: CalendarCheck,
    name: "Schedule",
    path: "/schedule",
  },
];
