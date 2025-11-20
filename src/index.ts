/**
 * hollow-UI - Component Framework
 * Developed by Ítalo Soares Campos
 *
 * Exports all UI components available in the framework
 */

// UI Components
export { Button, buttonVariants } from "./registry/ui/button";
export { Badge, badgeVariants } from "./registry/ui/badge";
export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "./registry/ui/card";
export { Input } from "./registry/ui/input";
export { Label } from "./registry/ui/label";
export { Textarea } from "./registry/ui/textarea";
export { Checkbox } from "./registry/ui/checkbox";
export { Switch } from "./registry/ui/switch";
export {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./registry/ui/select";
export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "./registry/ui/table";
export {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./registry/ui/dialog";
export {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverAnchor,
} from "./registry/ui/popover";
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./registry/ui/accordion";
export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./registry/ui/dropdown-menu";
export { Toggle, toggleVariants } from "./registry/ui/toggle";
export { ToggleGroup, ToggleGroupItem } from "./registry/ui/toggle-group";
export { Separator } from "./registry/ui/separator";
export { Skeleton } from "./registry/ui/skeleton";
export { ScrollArea, ScrollBar } from "./registry/ui/scroll-area";
export {
  HeaderStats,
  HeaderStatsGrid,
  HeaderStatCardMini,
  HeaderStatCardCompact,
} from "./registry/ui/HeaderStats";
export { InfoCard } from "./registry/ui/InfoCard";
export { BackToTopButton } from "./registry/ui/BackToTopButton";
export {
  MultiSelect,
  type MultiSelectOption,
} from "./registry/ui/multi-select";
export { CalendarInput } from "./registry/ui/calendar-input";
export { FileUploadArea } from "./registry/ui/file-upload-area";

// Data Display Components
export { StatCard, StatCardGrid } from "./registry/ui/StatCard";

// Standalone Components (universal - without Next.js dependency)
export { HeaderStandalone } from "./registry/ui/HeaderStandalone";
export { FooterStandalone } from "./registry/ui/FooterStandalone";
export {
  ToasterStandalone,
  useToastStandalone,
} from "./registry/ui/ToasterStandalone";

// Component Exports
export { Navigation, type NavigationItem } from "./registry/ui/Navigation";
export { StatusBadge } from "./registry/ui/StatusBadge";
export { HeaderButton } from "./registry/ui/HeaderButton";

// Utility functions
export { cn } from "./lib/utils";

// Types
export interface HollowUIProps {
  className?: string;
  children?: React.ReactNode;
}

// Version
export const VERSION = "1.0.0";

// Author info
export const AUTHOR = {
  name: "Ítalo Soares Campos",
  email: "soarescmpos@gmail.com",
  github: "https://github.com/SCamposs",
};
