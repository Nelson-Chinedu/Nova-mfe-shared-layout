import { Bell, Command, Search, Share2 } from "lucide-react";

import { Input, Button } from "@NovaOrg/nova-mfe-shared-ui";

const Navbar = () => {
  return (
    <div className="bg-white border-b border-[#dadedf] py-4 px-8 fixed w-[82%] z-50">
      <div className="flex items-center justify-between">
        <div className="w-[40%]">
          <Input
            startIcon={<Search size={15} />}
            endIcon={
              <Button variant="outline" size="sm" className="bg-[#f2f5f8] border border-[#dadedf] text-[#8b8b99]">
                <Command size={15} color="#8b8b99" />
                +K
              </Button>
            }
            className="border border-[#dadedf] rounded-md w-full"
            placeholder="Search keyword..."
          />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="py-2.5 px-2.5" size="sm">
            <Bell size={15} />
          </Button>
          <Button variant="outline" className="py-2.5 px-2.5" size="sm">
            <Share2 size={15} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
