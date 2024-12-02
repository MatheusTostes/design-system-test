import { SearchBar } from "@/components/molecules";
import { Button } from "@/components/atoms";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-bold">Logo</h1>
        <SearchBar />
      </div>
      <nav className="flex gap-2">
        <Button variant="ghost">Home</Button>
        <Button variant="ghost">About</Button>
        <Button>Login</Button>
      </nav>
    </header>
  );
};
