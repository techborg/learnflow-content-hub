
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchBoxProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export const SearchBox = ({
  placeholder = "Search...",
  onSearch,
}: SearchBoxProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("search") as string;
    if (onSearch) onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="relative flex w-full max-w-lg">
      <Input
        type="search"
        name="search"
        placeholder={placeholder}
        className="pr-10 rounded-r-none border-r-0"
      />
      <Button type="submit" className="rounded-l-none bg-purple-400 hover:bg-purple-500">
        <Search className="h-4 w-4" />
        <span className="sr-only">Search</span>
      </Button>
    </form>
  );
};
