import { Search } from "lucide-react";

import { Button } from "@/components/atoms";
import { Input } from "@/components/atoms";

export const SearchBar = () => {
  return (
    <div className="flex gap-2">
      <Input placeholder="Search..." className="w-full" />
      <Button variant="outline" size="icon">
        <Search className="size-4" />
      </Button>
    </div>
  );
};
