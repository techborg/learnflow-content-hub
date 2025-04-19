
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface FilterOption {
  id: string;
  label: string;
}

interface FilterOptionsProps {
  title: string;
  options: FilterOption[];
  selectedOptions: string[];
  onChange: (selectedIds: string[]) => void;
}

export const FilterOptions = ({
  title,
  options,
  selectedOptions,
  onChange,
}: FilterOptionsProps) => {
  const toggleOption = (id: string) => {
    const isSelected = selectedOptions.includes(id);
    if (isSelected) {
      onChange(selectedOptions.filter((item) => item !== id));
    } else {
      onChange([...selectedOptions, id]);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {title}
          <ChevronDownIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="w-56">
        <DropdownMenuLabel>{title}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.id}
            checked={selectedOptions.includes(option.id)}
            onCheckedChange={() => toggleOption(option.id)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
