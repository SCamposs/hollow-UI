// hollow-UI v1.0.0 - Developed by Ítalo Soares Campos
"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AUTHOR: () => AUTHOR,
  Accordion: () => Accordion,
  AccordionContent: () => AccordionContent,
  AccordionItem: () => AccordionItem,
  AccordionTrigger: () => AccordionTrigger,
  BackToTopButton: () => BackToTopButton,
  Badge: () => Badge,
  Button: () => Button,
  CalendarInput: () => CalendarInput,
  Card: () => Card,
  CardContent: () => CardContent,
  CardDescription: () => CardDescription,
  CardFooter: () => CardFooter,
  CardHeader: () => CardHeader,
  CardTitle: () => CardTitle,
  Checkbox: () => Checkbox,
  Dialog: () => Dialog,
  DialogContent: () => DialogContent,
  DialogDescription: () => DialogDescription,
  DialogHeader: () => DialogHeader,
  DialogTitle: () => DialogTitle,
  DialogTrigger: () => DialogTrigger,
  DropdownMenu: () => DropdownMenu,
  DropdownMenuCheckboxItem: () => DropdownMenuCheckboxItem,
  DropdownMenuContent: () => DropdownMenuContent,
  DropdownMenuGroup: () => DropdownMenuGroup,
  DropdownMenuItem: () => DropdownMenuItem,
  DropdownMenuLabel: () => DropdownMenuLabel,
  DropdownMenuPortal: () => DropdownMenuPortal,
  DropdownMenuRadioGroup: () => DropdownMenuRadioGroup,
  DropdownMenuRadioItem: () => DropdownMenuRadioItem,
  DropdownMenuSeparator: () => DropdownMenuSeparator,
  DropdownMenuShortcut: () => DropdownMenuShortcut,
  DropdownMenuSub: () => DropdownMenuSub,
  DropdownMenuSubContent: () => DropdownMenuSubContent,
  DropdownMenuSubTrigger: () => DropdownMenuSubTrigger,
  DropdownMenuTrigger: () => DropdownMenuTrigger,
  FileUploadArea: () => FileUploadArea,
  FooterStandalone: () => FooterStandalone,
  HeaderButton: () => HeaderButton,
  HeaderStandalone: () => HeaderStandalone,
  HeaderStatCardCompact: () => HeaderStatCardCompact,
  HeaderStatCardMini: () => HeaderStatCardMini,
  HeaderStats: () => HeaderStats,
  HeaderStatsGrid: () => HeaderStatsGrid,
  InfoCard: () => InfoCard,
  Input: () => Input,
  Label: () => Label,
  MultiSelect: () => MultiSelect,
  Navigation: () => Navigation,
  Popover: () => Popover,
  PopoverAnchor: () => PopoverAnchor,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  ScrollArea: () => ScrollArea,
  ScrollBar: () => ScrollBar,
  Select: () => Select,
  SelectContent: () => SelectContent,
  SelectItem: () => SelectItem,
  SelectTrigger: () => SelectTrigger,
  SelectValue: () => SelectValue,
  Separator: () => Separator3,
  Skeleton: () => Skeleton,
  StatCard: () => StatCard,
  StatCardGrid: () => StatCardGrid,
  StatusBadge: () => StatusBadge,
  Switch: () => Switch,
  Table: () => Table,
  TableBody: () => TableBody,
  TableCaption: () => TableCaption,
  TableCell: () => TableCell,
  TableFooter: () => TableFooter,
  TableHead: () => TableHead,
  TableHeader: () => TableHeader,
  TableRow: () => TableRow,
  Textarea: () => Textarea,
  ToasterStandalone: () => ToasterStandalone,
  Toggle: () => Toggle,
  ToggleGroup: () => ToggleGroup,
  ToggleGroupItem: () => ToggleGroupItem,
  VERSION: () => VERSION,
  badgeVariants: () => badgeVariants,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  toggleVariants: () => toggleVariants,
  useToastStandalone: () => useToastStandalone
});
module.exports = __toCommonJS(index_exports);

// src/registry/ui/button.tsx
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/registry/ui/button.tsx
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary: "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        clearFilter: "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 text-primary border-primary dark:text-primary-foreground dark:hover:text-red-600 hover:bg-primary hover:text-primary-foreground w-full sm:w-auto flex items-center gap-1 relative overflow-hidden group"
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Button(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "asChild"
  ]);
  const Comp = asChild ? import_react_slot.Slot : "button";
  return /* @__PURE__ */ React2.createElement(
    Comp,
    __spreadValues({
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className }))
    }, props)
  );
}

// src/registry/ui/badge.tsx
var React3 = __toESM(require("react"));
var import_react_slot2 = require("@radix-ui/react-slot");
var import_class_variance_authority2 = require("class-variance-authority");
var badgeVariants = (0, import_class_variance_authority2.cva)(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Badge(_a) {
  var _b = _a, {
    className,
    variant,
    asChild = false
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "asChild"
  ]);
  const Comp = asChild ? import_react_slot2.Slot : "span";
  return /* @__PURE__ */ React3.createElement(
    Comp,
    __spreadValues({
      "data-slot": "badge",
      className: cn(badgeVariants({ variant }), className)
    }, props)
  );
}

// src/registry/ui/card.tsx
var React4 = __toESM(require("react"));
function Card(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      "data-slot": "card",
      className: cn(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        className
      )
    }, props)
  );
}
function CardHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-header",
      className: cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )
    }, props)
  );
}
function CardTitle(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-title",
      className: cn("leading-none font-semibold", className)
    }, props)
  );
}
function CardDescription(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}
function CardContent(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-content",
      className: cn("px-6", className)
    }, props)
  );
}
function CardFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React4.createElement(
    "div",
    __spreadValues({
      "data-slot": "card-footer",
      className: cn("flex items-center px-6 [.border-t]:pt-6", className)
    }, props)
  );
}

// src/registry/ui/input.tsx
var React5 = __toESM(require("react"));
function Input(_a) {
  var _b = _a, { className, type } = _b, props = __objRest(_b, ["className", "type"]);
  return /* @__PURE__ */ React5.createElement(
    "input",
    __spreadValues({
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )
    }, props)
  );
}

// src/registry/ui/label.tsx
var React6 = __toESM(require("react"));
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_class_variance_authority3 = require("class-variance-authority");
var labelVariants = (0, import_class_variance_authority3.cva)(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
function Label(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React6.createElement(
    LabelPrimitive.Root,
    __spreadValues({
      "data-slot": "label",
      className: cn(labelVariants(), className)
    }, props)
  );
}

// src/registry/ui/textarea.tsx
var React7 = __toESM(require("react"));
function Textarea(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React7.createElement(
    "textarea",
    __spreadValues({
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )
    }, props)
  );
}

// src/registry/ui/checkbox.tsx
var React8 = __toESM(require("react"));
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));
var import_lucide_react = require("lucide-react");
function Checkbox(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React8.createElement(
    CheckboxPrimitive.Root,
    __spreadValues({
      "data-slot": "checkbox",
      className: cn(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React8.createElement(
      CheckboxPrimitive.Indicator,
      {
        "data-slot": "checkbox-indicator",
        className: "flex items-center justify-center text-current transition-none"
      },
      /* @__PURE__ */ React8.createElement(import_lucide_react.CheckIcon, { className: "size-3.5" })
    )
  );
}

// src/registry/ui/switch.tsx
var React9 = __toESM(require("react"));
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"));
function Switch(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React9.createElement(
    SwitchPrimitive.Root,
    __spreadValues({
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      )
    }, props),
    /* @__PURE__ */ React9.createElement(
      SwitchPrimitive.Thumb,
      {
        "data-slot": "switch-thumb",
        className: cn(
          "bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0"
        )
      }
    )
  );
}

// src/registry/ui/select.tsx
var React10 = __toESM(require("react"));
var SelectPrimitive = __toESM(require("@radix-ui/react-select"));
var import_lucide_react2 = require("lucide-react");
function Select(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React10.createElement(SelectPrimitive.Root, __spreadValues({ "data-slot": "select" }, props));
}
function SelectValue(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React10.createElement(SelectPrimitive.Value, __spreadValues({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
  var _b = _a, {
    className,
    size = "default",
    children
  } = _b, props = __objRest(_b, [
    "className",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ React10.createElement(
    SelectPrimitive.Trigger,
    __spreadValues({
      "data-slot": "select-trigger",
      "data-size": size,
      className: cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React10.createElement(SelectPrimitive.Icon, { asChild: true }, /* @__PURE__ */ React10.createElement(import_lucide_react2.ChevronDownIcon, { className: "size-4 opacity-50" }))
  );
}
function SelectContent(_a) {
  var _b = _a, {
    className,
    children,
    position = "popper"
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "position"
  ]);
  return /* @__PURE__ */ React10.createElement(SelectPrimitive.Portal, null, /* @__PURE__ */ React10.createElement(
    SelectPrimitive.Content,
    __spreadValues({
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className
      ),
      position
    }, props),
    /* @__PURE__ */ React10.createElement(SelectScrollUpButton, null),
    /* @__PURE__ */ React10.createElement(
      SelectPrimitive.Viewport,
      {
        className: cn(
          "p-1",
          position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
        )
      },
      children
    ),
    /* @__PURE__ */ React10.createElement(SelectScrollDownButton, null)
  ));
}
function SelectItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React10.createElement(
    SelectPrimitive.Item,
    __spreadValues({
      "data-slot": "select-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )
    }, props),
    /* @__PURE__ */ React10.createElement("span", { className: "absolute right-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React10.createElement(SelectPrimitive.ItemIndicator, null, /* @__PURE__ */ React10.createElement(import_lucide_react2.CheckIcon, { className: "size-4" }))),
    /* @__PURE__ */ React10.createElement(SelectPrimitive.ItemText, null, children)
  );
}
function SelectScrollUpButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React10.createElement(
    SelectPrimitive.ScrollUpButton,
    __spreadValues({
      "data-slot": "select-scroll-up-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React10.createElement(import_lucide_react2.ChevronUpIcon, { className: "size-4" })
  );
}
function SelectScrollDownButton(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React10.createElement(
    SelectPrimitive.ScrollDownButton,
    __spreadValues({
      "data-slot": "select-scroll-down-button",
      className: cn(
        "flex cursor-default items-center justify-center py-1",
        className
      )
    }, props),
    /* @__PURE__ */ React10.createElement(import_lucide_react2.ChevronDownIcon, { className: "size-4" })
  );
}

// src/registry/ui/table.tsx
var React11 = __toESM(require("react"));
function Table(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "div",
    {
      "data-slot": "table-container",
      className: "relative w-full overflow-x-auto"
    },
    /* @__PURE__ */ React11.createElement(
      "table",
      __spreadValues({
        "data-slot": "table",
        className: cn("w-full caption-bottom text-sm", className)
      }, props)
    )
  );
}
function TableHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "thead",
    __spreadValues({
      "data-slot": "table-header",
      className: cn("[&_tr]:border-b", className)
    }, props)
  );
}
function TableBody(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "tbody",
    __spreadValues({
      "data-slot": "table-body",
      className: cn("[&_tr:last-child]:border-0", className)
    }, props)
  );
}
function TableFooter(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "tfoot",
    __spreadValues({
      "data-slot": "table-footer",
      className: cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )
    }, props)
  );
}
function TableRow(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "tr",
    __spreadValues({
      "data-slot": "table-row",
      className: cn(
        "hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors",
        className
      )
    }, props)
  );
}
function TableHead(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "th",
    __spreadValues({
      "data-slot": "table-head",
      className: cn(
        "text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCell(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React11.createElement(
    "td",
    __spreadValues({
      "data-slot": "table-cell",
      className: cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )
    }, props)
  );
}
function TableCaption(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React11.createElement(
    "caption",
    __spreadValues({
      "data-slot": "table-caption",
      className: cn("text-muted-foreground mt-4 text-sm", className)
    }, props)
  );
}

// src/registry/ui/dialog.tsx
var React12 = __toESM(require("react"));
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react3 = require("lucide-react");
function Dialog(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React12.createElement(DialogPrimitive.Root, __spreadValues({ "data-slot": "dialog" }, props));
}
function DialogTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React12.createElement(DialogPrimitive.Trigger, __spreadValues({ "data-slot": "dialog-trigger" }, props));
}
function DialogPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React12.createElement(DialogPrimitive.Portal, __spreadValues({ "data-slot": "dialog-portal" }, props));
}
function DialogOverlay(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React12.createElement(
    DialogPrimitive.Overlay,
    __spreadValues({
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50 backdrop-blur-xs",
        className
      )
    }, props)
  );
}
function DialogContent(_a) {
  var _b = _a, {
    className,
    children,
    showCloseButton = true
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "showCloseButton"
  ]);
  return /* @__PURE__ */ React12.createElement(DialogPortal, { "data-slot": "dialog-portal" }, /* @__PURE__ */ React12.createElement(DialogOverlay, null), /* @__PURE__ */ React12.createElement(
    DialogPrimitive.Content,
    __spreadValues({
      "data-slot": "dialog-content",
      className: cn(
        "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
        className
      )
    }, props),
    children,
    showCloseButton && /* @__PURE__ */ React12.createElement(
      DialogPrimitive.Close,
      {
        "data-slot": "dialog-close",
        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
      },
      /* @__PURE__ */ React12.createElement(import_lucide_react3.XIcon, null),
      /* @__PURE__ */ React12.createElement("span", { className: "sr-only" }, "Close")
    )
  ));
}
function DialogHeader(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React12.createElement(
    "div",
    __spreadValues({
      "data-slot": "dialog-header",
      className: cn("flex flex-col gap-2 text-center sm:text-left", className)
    }, props)
  );
}
function DialogTitle(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React12.createElement(
    DialogPrimitive.Title,
    __spreadValues({
      "data-slot": "dialog-title",
      className: cn("text-lg leading-none font-semibold", className)
    }, props)
  );
}
function DialogDescription(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React12.createElement(
    DialogPrimitive.Description,
    __spreadValues({
      "data-slot": "dialog-description",
      className: cn("text-muted-foreground text-sm", className)
    }, props)
  );
}

// src/registry/ui/popover.tsx
var React13 = __toESM(require("react"));
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
function Popover(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React13.createElement(PopoverPrimitive.Root, __spreadValues({ "data-slot": "popover" }, props));
}
function PopoverTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React13.createElement(PopoverPrimitive.Trigger, __spreadValues({ "data-slot": "popover-trigger" }, props));
}
function PopoverContent(_a) {
  var _b = _a, {
    className,
    align = "center",
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "align",
    "sideOffset"
  ]);
  return /* @__PURE__ */ React13.createElement(PopoverPrimitive.Portal, null, /* @__PURE__ */ React13.createElement(
    PopoverPrimitive.Content,
    __spreadValues({
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      )
    }, props)
  ));
}
function PopoverAnchor(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React13.createElement(PopoverPrimitive.Anchor, __spreadValues({ "data-slot": "popover-anchor" }, props));
}

// src/registry/ui/accordion.tsx
var React14 = __toESM(require("react"));
var AccordionPrimitive = __toESM(require("@radix-ui/react-accordion"));
var import_lucide_react4 = require("lucide-react");
function Accordion(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React14.createElement(AccordionPrimitive.Root, __spreadValues({ "data-slot": "accordion" }, props));
}
function AccordionItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React14.createElement(
    AccordionPrimitive.Item,
    __spreadValues({
      "data-slot": "accordion-item",
      className: cn("border-b last:border-b-0", className)
    }, props)
  );
}
function AccordionTrigger(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React14.createElement(AccordionPrimitive.Header, { className: "flex" }, /* @__PURE__ */ React14.createElement(
    AccordionPrimitive.Trigger,
    __spreadValues({
      "data-slot": "accordion-trigger",
      className: cn(
        "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React14.createElement(import_lucide_react4.ChevronDownIcon, { className: "text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" })
  ));
}
function AccordionContent(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React14.createElement(
    AccordionPrimitive.Content,
    __spreadValues({
      "data-slot": "accordion-content",
      className: "data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
    }, props),
    /* @__PURE__ */ React14.createElement("div", { className: cn("pt-0 pb-4", className) }, children)
  );
}

// src/registry/ui/dropdown-menu.tsx
var React15 = __toESM(require("react"));
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react5 = require("lucide-react");
function DropdownMenu(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.Root, __spreadValues({ "data-slot": "dropdown-menu" }, props));
}
function DropdownMenuPortal(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.Portal, __spreadValues({ "data-slot": "dropdown-menu-portal" }, props));
}
function DropdownMenuTrigger(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.Trigger,
    __spreadValues({
      "data-slot": "dropdown-menu-trigger"
    }, props)
  );
}
function DropdownMenuContent(_a) {
  var _b = _a, {
    className,
    sideOffset = 4
  } = _b, props = __objRest(_b, [
    "className",
    "sideOffset"
  ]);
  return /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.Portal, null, /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.Content,
    __spreadValues({
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      )
    }, props)
  ));
}
function DropdownMenuGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.Group, __spreadValues({ "data-slot": "dropdown-menu-group" }, props));
}
function DropdownMenuItem(_a) {
  var _b = _a, {
    className,
    inset,
    variant = "default"
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "variant"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.Item,
    __spreadValues({
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}
function DropdownMenuCheckboxItem(_a) {
  var _b = _a, {
    className,
    children,
    checked
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "checked"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.CheckboxItem,
    __spreadValues({
      "data-slot": "dropdown-menu-checkbox-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      checked
    }, props),
    /* @__PURE__ */ React15.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React15.createElement(import_lucide_react5.CheckIcon, { className: "size-4" }))),
    children
  );
}
function DropdownMenuRadioGroup(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.RadioGroup,
    __spreadValues({
      "data-slot": "dropdown-menu-radio-group"
    }, props)
  );
}
function DropdownMenuRadioItem(_a) {
  var _b = _a, {
    className,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "children"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.RadioItem,
    __spreadValues({
      "data-slot": "dropdown-menu-radio-item",
      className: cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props),
    /* @__PURE__ */ React15.createElement("span", { className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center" }, /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.ItemIndicator, null, /* @__PURE__ */ React15.createElement(import_lucide_react5.CircleIcon, { className: "size-2 fill-current" }))),
    children
  );
}
function DropdownMenuLabel(_a) {
  var _b = _a, {
    className,
    inset
  } = _b, props = __objRest(_b, [
    "className",
    "inset"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.Label,
    __spreadValues({
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-sm font-medium data-[inset]:pl-8",
        className
      )
    }, props)
  );
}
function DropdownMenuSeparator(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.Separator,
    __spreadValues({
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className)
    }, props)
  );
}
function DropdownMenuShortcut(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React15.createElement(
    "span",
    __spreadValues({
      "data-slot": "dropdown-menu-shortcut",
      className: cn(
        "text-muted-foreground ml-auto text-xs tracking-widest",
        className
      )
    }, props)
  );
}
function DropdownMenuSub(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React15.createElement(DropdownMenuPrimitive.Sub, __spreadValues({ "data-slot": "dropdown-menu-sub" }, props));
}
function DropdownMenuSubTrigger(_a) {
  var _b = _a, {
    className,
    inset,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "inset",
    "children"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.SubTrigger,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-trigger",
      "data-inset": inset,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8",
        className
      )
    }, props),
    children,
    /* @__PURE__ */ React15.createElement(import_lucide_react5.ChevronRightIcon, { className: "ml-auto size-4" })
  );
}
function DropdownMenuSubContent(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React15.createElement(
    DropdownMenuPrimitive.SubContent,
    __spreadValues({
      "data-slot": "dropdown-menu-sub-content",
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg",
        className
      )
    }, props)
  );
}

// src/registry/ui/toggle.tsx
var React16 = __toESM(require("react"));
var TogglePrimitive = __toESM(require("@radix-ui/react-toggle"));
var import_class_variance_authority4 = require("class-variance-authority");
var toggleVariants = (0, import_class_variance_authority4.cva)(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground"
      },
      size: {
        default: "h-9 px-2 min-w-9",
        sm: "h-8 px-1.5 min-w-8",
        lg: "h-10 px-2.5 min-w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Toggle(_a) {
  var _b = _a, {
    className,
    variant,
    size
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size"
  ]);
  return /* @__PURE__ */ React16.createElement(
    TogglePrimitive.Root,
    __spreadValues({
      "data-slot": "toggle",
      className: cn(toggleVariants({ variant, size, className }))
    }, props)
  );
}

// src/registry/ui/toggle-group.tsx
var React17 = __toESM(require("react"));
var ToggleGroupPrimitive = __toESM(require("@radix-ui/react-toggle-group"));
var ToggleGroupContext = React17.createContext({
  size: "default",
  variant: "default"
});
function ToggleGroup(_a) {
  var _b = _a, {
    className,
    variant,
    size,
    children
  } = _b, props = __objRest(_b, [
    "className",
    "variant",
    "size",
    "children"
  ]);
  return /* @__PURE__ */ React17.createElement(
    ToggleGroupPrimitive.Root,
    __spreadValues({
      "data-slot": "toggle-group",
      "data-variant": variant,
      "data-size": size,
      className: cn(
        "group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs",
        className
      )
    }, props),
    /* @__PURE__ */ React17.createElement(ToggleGroupContext.Provider, { value: { variant, size } }, children)
  );
}
function ToggleGroupItem(_a) {
  var _b = _a, {
    className,
    children,
    variant,
    size
  } = _b, props = __objRest(_b, [
    "className",
    "children",
    "variant",
    "size"
  ]);
  const context = React17.useContext(ToggleGroupContext);
  return /* @__PURE__ */ React17.createElement(
    ToggleGroupPrimitive.Item,
    __spreadValues({
      "data-slot": "toggle-group-item",
      "data-variant": context.variant || variant,
      "data-size": context.size || size,
      className: cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size
        }),
        "min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l",
        className
      )
    }, props),
    children
  );
}

// src/registry/ui/separator.tsx
var React18 = __toESM(require("react"));
var SeparatorPrimitive = __toESM(require("@radix-ui/react-separator"));
function Separator3(_a) {
  var _b = _a, {
    className,
    orientation = "horizontal",
    decorative = true
  } = _b, props = __objRest(_b, [
    "className",
    "orientation",
    "decorative"
  ]);
  return /* @__PURE__ */ React18.createElement(
    SeparatorPrimitive.Root,
    __spreadValues({
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        className
      )
    }, props)
  );
}

// src/registry/ui/skeleton.tsx
function Skeleton(_a) {
  var _b = _a, { className } = _b, props = __objRest(_b, ["className"]);
  return /* @__PURE__ */ React.createElement(
    "div",
    __spreadValues({
      "data-slot": "skeleton",
      className: cn(
        "bg-gray-200 dark:bg-gray-700 animate-pulse rounded-md",
        className
      )
    }, props)
  );
}

// src/registry/ui/scroll-area.tsx
var React19 = __toESM(require("react"));
var ScrollAreaPrimitive = __toESM(require("@radix-ui/react-scroll-area"));
var ScrollArea = React19.forwardRef((_a, ref) => {
  var _b = _a, { className, children } = _b, props = __objRest(_b, ["className", "children"]);
  return /* @__PURE__ */ React19.createElement(
    ScrollAreaPrimitive.Root,
    __spreadValues({
      ref,
      className: cn("relative overflow-hidden", className)
    }, props),
    /* @__PURE__ */ React19.createElement(ScrollAreaPrimitive.Viewport, { className: "h-full w-full rounded-[inherit]" }, children),
    /* @__PURE__ */ React19.createElement(ScrollBar, null),
    /* @__PURE__ */ React19.createElement(ScrollAreaPrimitive.Corner, null)
  );
});
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName;
var ScrollBar = React19.forwardRef((_a, ref) => {
  var _b = _a, { className, orientation = "vertical" } = _b, props = __objRest(_b, ["className", "orientation"]);
  return /* @__PURE__ */ React19.createElement(
    ScrollAreaPrimitive.ScrollAreaScrollbar,
    __spreadValues({
      ref,
      orientation,
      className: cn(
        "flex touch-none select-none transition-colors",
        orientation === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
        orientation === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
        className
      )
    }, props),
    /* @__PURE__ */ React19.createElement(ScrollAreaPrimitive.ScrollAreaThumb, { className: "relative flex-1 rounded-full bg-border" })
  );
});
ScrollBar.displayName = ScrollAreaPrimitive.ScrollAreaScrollbar.displayName;

// src/registry/ui/HeaderStats.tsx
var import_react = __toESM(require("react"));
function HeaderStatCard({
  title,
  value,
  description,
  icon: Icon2,
  borderColor,
  iconBgColor,
  iconColor,
  onClick
}) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "card-3d-effect" }, /* @__PURE__ */ import_react.default.createElement(
    Card,
    {
      className: `${borderColor} shadow-sm hover:shadow-md cursor-pointer gap-2`,
      onClick
    },
    /* @__PURE__ */ import_react.default.createElement(CardHeader, { className: "flex flex-row items-center justify-between space-y-0 pb-2" }, /* @__PURE__ */ import_react.default.createElement(CardTitle, { className: "text-sm font-medium text-muted-foreground" }, title), /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: `h-8 w-8 ${iconBgColor} rounded-lg flex items-center justify-center`
      },
      /* @__PURE__ */ import_react.default.createElement(Icon2, { className: `w-4 h-4 ${iconColor}` })
    )),
    /* @__PURE__ */ import_react.default.createElement(CardContent, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "text-2xl font-bold text-black/80 dark:text-white contrast:text-white" }, value), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-muted-foreground" }, description))
  ));
}
function HeaderStatCardMini({
  title,
  icon: Icon2,
  borderColor,
  iconBgColor,
  iconColor,
  value,
  description
}) {
  return /* @__PURE__ */ import_react.default.createElement(Card, { className: `${borderColor} shadow-sm gap-0 py-3` }, /* @__PURE__ */ import_react.default.createElement(CardHeader, { className: "flex flex-row items-center justify-between space-y-0" }, /* @__PURE__ */ import_react.default.createElement(CardTitle, { className: "text-sm font-medium text-muted-foreground" }, title), /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `h-10 w-10 ${iconBgColor} rounded-lg flex items-center justify-center`
    },
    /* @__PURE__ */ import_react.default.createElement(Icon2, { className: `w-6 h-6 ${iconColor}` })
  )), /* @__PURE__ */ import_react.default.createElement(CardContent, null, /* @__PURE__ */ import_react.default.createElement("div", { className: "text-2xl font-bold text-black/80 dark:text-white contrast:text-white" }, value !== void 0 ? value : "-"), /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-muted-foreground" }, description)));
}
function HeaderStatCardCompact({
  title,
  value,
  description,
  icon: Icon2,
  borderColor,
  iconBgColor,
  iconColor,
  badgeValue,
  progressValue,
  hasShadow = false,
  shadowColor = "slate"
}) {
  const shadowColorMap = {
    slate: "shadow-md hover:shadow-lg dark:shadow-slate-900/30 dark:hover:shadow-slate-900/50",
    purple: "shadow-md hover:shadow-lg dark:shadow-purple-900/30 dark:hover:shadow-purple-900/50",
    green: "shadow-md hover:shadow-lg dark:shadow-green-900/30 dark:hover:shadow-green-900/50",
    blue: "shadow-md hover:shadow-lg dark:shadow-blue-900/30 dark:hover:shadow-blue-900/50",
    red: "shadow-md hover:shadow-lg dark:shadow-red-900/30 dark:hover:shadow-red-900/50",
    yellow: "shadow-md hover:shadow-lg dark:shadow-yellow-900/30 dark:hover:shadow-yellow-900/50",
    orange: "shadow-md hover:shadow-lg dark:shadow-orange-900/30 dark:hover:shadow-orange-900/50",
    indigo: "shadow-md hover:shadow-lg dark:shadow-indigo-900/30 dark:hover:shadow-indigo-900/50",
    pink: "shadow-md hover:shadow-lg dark:shadow-pink-900/30 dark:hover:shadow-pink-900/50",
    teal: "shadow-md hover:shadow-lg dark:shadow-teal-900/30 dark:hover:shadow-teal-900/50"
  };
  const shadowClass = hasShadow ? shadowColorMap[shadowColor] || shadowColorMap.slate : "";
  const getProgressColor = (value2) => {
    if (value2 <= 33) return "bg-red-500";
    if (value2 <= 66) return "bg-yellow-500";
    return "bg-green-500";
  };
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `flex group items-center gap-3 p-3 bg-muted/30 dark:bg-muted/10 rounded-lg ${borderColor} ${shadowClass} transition-shadow duration-200`
    },
    /* @__PURE__ */ import_react.default.createElement("div", { className: `p-2 ${iconBgColor} rounded-lg` }, /* @__PURE__ */ import_react.default.createElement(Icon2, { className: `h-5 w-5 ${iconColor}` })),
    /* @__PURE__ */ import_react.default.createElement("div", { className: "flex-1" }, badgeValue !== void 0 ? /* @__PURE__ */ import_react.default.createElement("div", { className: "flex items-center justify-between mb-2" }, /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-medium text-muted-foreground" }, title), /* @__PURE__ */ import_react.default.createElement("span", { className: "text-xs font-semibold px-2 py-0.5 rounded bg-muted" }, badgeValue)) : /* @__PURE__ */ import_react.default.createElement("p", { className: "text-sm font-medium text-muted-foreground" }, title), value !== void 0 && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-lg font-bold text-foreground" }, value), description && /* @__PURE__ */ import_react.default.createElement("p", { className: "text-xs text-muted-foreground" }, description), progressValue !== void 0 && /* @__PURE__ */ import_react.default.createElement("div", { className: "relative h-2 w-full overflow-hidden rounded-full bg-muted mt-2" }, /* @__PURE__ */ import_react.default.createElement(
      "div",
      {
        className: `h-full ${getProgressColor(
          progressValue
        )} transition-all duration-200 opacity-80 group-hover:opacity-100`,
        style: { width: `${progressValue}%` }
      }
    )))
  );
}
function HeaderStats({ stats }) {
  return /* @__PURE__ */ import_react.default.createElement("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-0" }, stats.map((stat, index) => /* @__PURE__ */ import_react.default.createElement(HeaderStatCard, __spreadValues({ key: index }, stat))));
}
function HeaderStatsGrid({ stats, columns = 2 }) {
  return /* @__PURE__ */ import_react.default.createElement(
    "div",
    {
      className: `grid gap-4 mb-5`,
      style: { gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }
    },
    stats.map((stat, index) => /* @__PURE__ */ import_react.default.createElement(HeaderStatCard, __spreadValues({ key: index }, stat)))
  );
}

// src/registry/ui/InfoCard.tsx
var import_lucide_react6 = require("lucide-react");
var import_react2 = __toESM(require("react"));
function InfoCard({
  id,
  status,
  veiculo,
  solicitante,
  finalidade,
  periodo,
  descricao,
  modificacoes,
  onAprovar,
  onReprovar
}) {
  const [hoveredCard, setHoveredCard] = (0, import_react2.useState)(null);
  const handleAprovar = () => {
    if (onAprovar) {
      onAprovar(id);
    }
  };
  const handleReprovar = () => {
    if (onReprovar) {
      onReprovar(id);
    }
  };
  return /* @__PURE__ */ import_react2.default.createElement(
    "div",
    {
      className: "relative group bg-white dark:bg-gray-800 contrast:bg-black rounded-xl shadow-lg dark:shadow-gray-900/20 contrast:shadow-yellow-400/20 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.01] max-w-100 will-change-transform",
      onMouseEnter: () => setHoveredCard(id),
      onMouseLeave: () => setHoveredCard(null)
    },
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "will-change-transform bg-yellow-600/80 dark:bg-yellow-600/90 p-5 py-4 text-white dark:text-white contrast:text-black relative" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "will-change-transform flex items-center justify-between" }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("h2", { className: "text-xl font-bold mb-1" }, status), /* @__PURE__ */ import_react2.default.createElement("div", { className: "will-change-transform flex gap-4 text-[16px] opacity-90 font-semibold antialiased" }, /* @__PURE__ */ import_react2.default.createElement("span", null, "Ve\xEDculo: ", veiculo))), /* @__PURE__ */ import_react2.default.createElement(import_lucide_react6.Clock2, { className: "w-7 h-7 text-white dark:text-white contrast:text-black opacity-90" }))),
    /* @__PURE__ */ import_react2.default.createElement("div", { className: "will-change-transform p-5 space-y-2" }, /* @__PURE__ */ import_react2.default.createElement("div", { className: "will-change-transform grid grid-cols-2 gap-4 text-sm" }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium" }, "Solicitante:"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "will-change-transform text-gray-800 dark:text-gray-200 contrast:text-white font-semibold" }, solicitante)), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium" }, "Finalidade:"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "will-change-transform text-gray-800 dark:text-gray-200 contrast:text-white font-semibold" }, finalidade))), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium text-sm" }, "Per\xEDodo:"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "will-change-transform text-gray-800 dark:text-gray-200 contrast:text-white font-semibold text-md" }, periodo)), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium text-sm" }, "Descri\xE7\xE3o:"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "will-change-transform text-gray-700 dark:text-gray-300 contrast:text-gray-100 text-sm" }, descricao)), /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("span", { className: "text-gray-500 dark:text-gray-400 contrast:text-gray-300 font-medium text-sm" }, "Modifica\xE7\xF5es:"), /* @__PURE__ */ import_react2.default.createElement("p", { className: "will-change-transform text-gray-700 dark:text-gray-300 contrast:text-gray-100 text-sm" }, modificacoes))),
    /* @__PURE__ */ import_react2.default.createElement(
      "div",
      {
        className: `absolute inset-0 flex items-end justify-end gap-3 p-5 transition-all duration-300 ${hoveredCard === id ? "opacity-100" : "opacity-0 pointer-events-none"}`
      },
      onAprovar && /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          onClick: handleAprovar,
          className: "bg-white dark:bg-gray-800 contrast:bg-black hover:bg-green-600 dark:hover:bg-green-600 contrast:hover:bg-green-400 text-green-600 dark:text-green-400 contrast:text-green-300 hover:text-white dark:hover:text-white border-2 border-green-600 dark:border-green-400 contrast:border-green-300 text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
        },
        "APROVAR"
      ),
      onReprovar && /* @__PURE__ */ import_react2.default.createElement(
        "button",
        {
          onClick: handleReprovar,
          className: "bg-white dark:bg-gray-800 contrast:bg-black hover:bg-red-700 dark:hover:bg-red-600 contrast:hover:bg-red-400 text-red-700 dark:text-red-400 contrast:text-red-300 hover:text-white dark:hover:text-white border-2 border-red-700 dark:border-red-400 contrast:border-red-300 text-xs px-3 py-2 rounded-lg font-semibold transition-all duration-300 shadow-lg"
        },
        "REPROVAR"
      )
    )
  );
}

// src/registry/ui/BackToTopButton.tsx
var import_react3 = __toESM(require("react"));
var import_lucide_react7 = require("lucide-react");
function BackToTopButton({
  offsetRight = "right-4",
  offsetBottom = "bottom-22"
}) {
  const [isVisible, setIsVisible] = (0, import_react3.useState)(false);
  (0, import_react3.useEffect)(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  if (!isVisible) {
    return null;
  }
  return /* @__PURE__ */ import_react3.default.createElement(
    "button",
    {
      onClick: scrollToTop,
      className: `fixed ${offsetBottom} ${offsetRight} z-50 bg-white dark:bg-gray-900 rounded-full shadow-lg w-12 h-12 flex items-center justify-center border border-gray-200 dark:border-gray-700 hover:scale-105 transition hover:bg-gray-50 dark:hover:bg-gray-800`,
      "aria-label": "Back to top",
      title: "Back to top"
    },
    /* @__PURE__ */ import_react3.default.createElement(import_lucide_react7.ChevronUp, { className: "w-6 h-6 text-gray-700 dark:text-gray-300" })
  );
}

// src/registry/ui/multi-select.tsx
var React24 = __toESM(require("react"));
var import_lucide_react9 = require("lucide-react");

// src/registry/ui/command.tsx
var React23 = __toESM(require("react"));
var import_cmdk = require("cmdk");
var import_lucide_react8 = require("lucide-react");
function Command(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React23.createElement(
    import_cmdk.Command,
    __spreadValues({
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      )
    }, props)
  );
}
function CommandInput(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React23.createElement(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3"
    },
    /* @__PURE__ */ React23.createElement(import_lucide_react8.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
    /* @__PURE__ */ React23.createElement(
      import_cmdk.Command.Input,
      __spreadValues({
        "data-slot": "command-input",
        className: cn(
          "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
          className
        )
      }, props)
    )
  );
}
function CommandList(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React23.createElement(
    import_cmdk.Command.List,
    __spreadValues({
      "data-slot": "command-list",
      className: cn(
        "max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      )
    }, props)
  );
}
function CommandEmpty(_a) {
  var props = __objRest(_a, []);
  return /* @__PURE__ */ React23.createElement(
    import_cmdk.Command.Empty,
    __spreadValues({
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm"
    }, props)
  );
}
function CommandGroup(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React23.createElement(
    import_cmdk.Command.Group,
    __spreadValues({
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      )
    }, props)
  );
}
function CommandItem(_a) {
  var _b = _a, {
    className
  } = _b, props = __objRest(_b, [
    "className"
  ]);
  return /* @__PURE__ */ React23.createElement(
    import_cmdk.Command.Item,
    __spreadValues({
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )
    }, props)
  );
}

// src/registry/ui/multi-select.tsx
function MultiSelect(_a) {
  var _b = _a, {
    options,
    value = [],
    onValueChange,
    placeholder = "Selecione...",
    searchable = true,
    searchPlaceholder = "Buscar...",
    emptyMessage = "Nenhum resultado encontrado.",
    maxDisplay = 3,
    className,
    disabled = false,
    size = "default"
  } = _b, props = __objRest(_b, [
    "options",
    "value",
    "onValueChange",
    "placeholder",
    "searchable",
    "searchPlaceholder",
    "emptyMessage",
    "maxDisplay",
    "className",
    "disabled",
    "size"
  ]);
  const [open, setOpen] = React24.useState(false);
  const [searchValue, setSearchValue] = React24.useState("");
  const selectedOptions = options.filter(
    (option) => value.includes(option.value)
  );
  const filteredOptions = options.filter(
    (option) => searchValue === "" || option.label.toLowerCase().includes(searchValue.toLowerCase())
  );
  const handleSelect = (optionValue) => {
    const newValue = value.includes(optionValue) ? value.filter((v) => v !== optionValue) : [...value, optionValue];
    onValueChange == null ? void 0 : onValueChange(newValue);
  };
  const handleRemove = (optionValue) => {
    const newValue = value.filter((v) => v !== optionValue);
    onValueChange == null ? void 0 : onValueChange(newValue);
  };
  return /* @__PURE__ */ React24.createElement(Popover, { open, onOpenChange: setOpen, modal: true }, /* @__PURE__ */ React24.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React24.createElement(
    Button,
    __spreadValues({
      variant: "outline",
      role: "combobox",
      "aria-expanded": open,
      className: cn(
        "w-full justify-between min-h-9 h-auto py-2 px-3 hover:bg-muted group",
        selectedOptions.length > 0 && "text-left",
        size === "sm" && "min-h-8",
        className
      ),
      disabled
    }, props),
    /* @__PURE__ */ React24.createElement("div", { className: "flex flex-wrap gap-1.5 flex-1 min-w-0" }, selectedOptions.length > 0 ? /* @__PURE__ */ React24.createElement(React24.Fragment, null, selectedOptions.slice(0, maxDisplay).map((option) => /* @__PURE__ */ React24.createElement(
      Badge,
      {
        key: option.value,
        variant: "secondary",
        className: "text-xs px-2 py-0.5 gap-1.5 h-6 font-normal"
      },
      /* @__PURE__ */ React24.createElement("span", { className: "truncate max-w-[150px]" }, option.label),
      /* @__PURE__ */ React24.createElement(
        "span",
        {
          role: "button",
          tabIndex: 0,
          className: "ml-0.5 hover:bg-muted-foreground/20 rounded-sm p-0.5 transition-colors cursor-pointer inline-flex",
          onClick: (e) => {
            e.stopPropagation();
            handleRemove(option.value);
          },
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.stopPropagation();
              handleRemove(option.value);
            }
          }
        },
        /* @__PURE__ */ React24.createElement(import_lucide_react9.XIcon, { className: "h-3 w-3" })
      )
    )), selectedOptions.length > maxDisplay && /* @__PURE__ */ React24.createElement(
      Badge,
      {
        variant: "secondary",
        className: "text-xs px-2 py-0.5 h-6 font-normal"
      },
      "+",
      selectedOptions.length - maxDisplay
    )) : /* @__PURE__ */ React24.createElement("span", { className: "text-muted-foreground text-sm" }, placeholder))
  )), /* @__PURE__ */ React24.createElement(PopoverContent, { className: "w-full p-0", align: "start", sideOffset: 4 }, /* @__PURE__ */ React24.createElement(Command, null, searchable && /* @__PURE__ */ React24.createElement(
    CommandInput,
    {
      placeholder: searchPlaceholder,
      value: searchValue,
      onValueChange: setSearchValue
    }
  ), /* @__PURE__ */ React24.createElement(CommandList, null, /* @__PURE__ */ React24.createElement(CommandEmpty, null, emptyMessage), /* @__PURE__ */ React24.createElement(CommandGroup, null, filteredOptions.map((option) => {
    const isSelected = value.includes(option.value);
    return /* @__PURE__ */ React24.createElement(
      CommandItem,
      {
        key: option.value,
        value: option.value,
        onSelect: () => handleSelect(option.value),
        disabled: option.disabled,
        className: "flex items-center gap-2 px-2 py-2 cursor-pointer hover:bg-primary"
      },
      /* @__PURE__ */ React24.createElement(
        Checkbox,
        {
          checked: isSelected,
          onCheckedChange: () => handleSelect(option.value),
          disabled: option.disabled,
          className: "pointer-events-none data-[state=checked]:bg-muted data-[state=checked]:border-muted-foreground/30 "
        }
      ),
      /* @__PURE__ */ React24.createElement("span", { className: "flex-1 text-sm" }, option.label)
    );
  }))))));
}

// src/registry/ui/calendar-input.tsx
var import_react4 = require("react");
var import_lucide_react11 = require("lucide-react");

// src/registry/ui/calendar.tsx
var React25 = __toESM(require("react"));
var import_lucide_react10 = require("lucide-react");
var import_react_day_picker = require("react-day-picker");
function Calendar(_a) {
  var _b = _a, {
    className,
    classNames,
    showOutsideDays = true,
    captionLayout = "label",
    buttonVariant = "ghost",
    formatters,
    components
  } = _b, props = __objRest(_b, [
    "className",
    "classNames",
    "showOutsideDays",
    "captionLayout",
    "buttonVariant",
    "formatters",
    "components"
  ]);
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  return /* @__PURE__ */ React25.createElement(
    import_react_day_picker.DayPicker,
    __spreadValues({
      showOutsideDays,
      className: cn(
        "bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent",
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className
      ),
      captionLayout,
      formatters: __spreadValues({
        formatMonthDropdown: (date) => date.toLocaleString("default", { month: "short" })
      }, formatters),
      classNames: __spreadValues({
        root: cn("w-fit", defaultClassNames.root),
        months: cn(
          "flex gap-4 flex-col md:flex-row relative",
          defaultClassNames.months
        ),
        month: cn("flex flex-col w-full gap-4", defaultClassNames.month),
        nav: cn(
          "flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between",
          defaultClassNames.nav
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_previous
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          "size-(--cell-size) aria-disabled:opacity-50 p-0 select-none",
          defaultClassNames.button_next
        ),
        month_caption: cn(
          "flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)",
          defaultClassNames.month_caption
        ),
        dropdowns: cn(
          "w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5",
          defaultClassNames.dropdowns
        ),
        dropdown_root: cn(
          "relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md",
          defaultClassNames.dropdown_root
        ),
        dropdown: cn(
          "absolute bg-popover inset-0 opacity-0",
          defaultClassNames.dropdown
        ),
        caption_label: cn(
          "select-none font-medium",
          captionLayout === "label" ? "text-sm" : "rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5",
          defaultClassNames.caption_label
        ),
        table: "w-full border-collapse",
        weekdays: cn("flex", defaultClassNames.weekdays),
        weekday: cn(
          "text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none",
          defaultClassNames.weekday
        ),
        week: cn("flex w-full mt-2", defaultClassNames.week),
        week_number_header: cn(
          "select-none w-(--cell-size)",
          defaultClassNames.week_number_header
        ),
        week_number: cn(
          "text-[0.8rem] select-none text-muted-foreground",
          defaultClassNames.week_number
        ),
        day: cn(
          "relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none",
          defaultClassNames.day
        ),
        range_start: cn(
          "rounded-l-md bg-accent",
          defaultClassNames.range_start
        ),
        range_middle: cn("rounded-none", defaultClassNames.range_middle),
        range_end: cn("rounded-r-md bg-accent", defaultClassNames.range_end),
        today: cn(
          "bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none",
          defaultClassNames.today
        ),
        outside: cn(
          "text-muted-foreground aria-selected:text-muted-foreground",
          defaultClassNames.outside
        ),
        disabled: cn(
          "text-muted-foreground opacity-50",
          defaultClassNames.disabled
        ),
        hidden: cn("invisible", defaultClassNames.hidden)
      }, classNames),
      components: __spreadValues({
        Root: (_a2) => {
          var _b2 = _a2, { className: className2, rootRef } = _b2, props2 = __objRest(_b2, ["className", "rootRef"]);
          return /* @__PURE__ */ React25.createElement(
            "div",
            __spreadValues({
              "data-slot": "calendar",
              ref: rootRef,
              className: cn(className2)
            }, props2)
          );
        },
        Chevron: (_c) => {
          var _d = _c, { className: className2, orientation } = _d, props2 = __objRest(_d, ["className", "orientation"]);
          if (orientation === "left") {
            return /* @__PURE__ */ React25.createElement(import_lucide_react10.ChevronLeftIcon, __spreadValues({ className: cn("size-4", className2) }, props2));
          }
          if (orientation === "right") {
            return /* @__PURE__ */ React25.createElement(
              import_lucide_react10.ChevronRightIcon,
              __spreadValues({
                className: cn("size-4", className2)
              }, props2)
            );
          }
          return /* @__PURE__ */ React25.createElement(import_lucide_react10.ChevronDownIcon, __spreadValues({ className: cn("size-4", className2) }, props2));
        },
        DayButton: CalendarDayButton,
        WeekNumber: (_e) => {
          var _f = _e, { children } = _f, props2 = __objRest(_f, ["children"]);
          return /* @__PURE__ */ React25.createElement("td", __spreadValues({}, props2), /* @__PURE__ */ React25.createElement("div", { className: "flex size-(--cell-size) items-center justify-center text-center" }, children));
        }
      }, components)
    }, props)
  );
}
function CalendarDayButton(_a) {
  var _b = _a, {
    className,
    day,
    modifiers
  } = _b, props = __objRest(_b, [
    "className",
    "day",
    "modifiers"
  ]);
  const defaultClassNames = (0, import_react_day_picker.getDefaultClassNames)();
  const ref = React25.useRef(null);
  React25.useEffect(() => {
    var _a2;
    if (modifiers.focused) (_a2 = ref.current) == null ? void 0 : _a2.focus();
  }, [modifiers.focused]);
  return /* @__PURE__ */ React25.createElement(
    Button,
    __spreadValues({
      ref,
      variant: "ghost",
      size: "icon",
      "data-day": day.date.toLocaleDateString(),
      "data-selected-single": modifiers.selected && !modifiers.range_start && !modifiers.range_end && !modifiers.range_middle,
      "data-range-start": modifiers.range_start,
      "data-range-end": modifiers.range_end,
      "data-range-middle": modifiers.range_middle,
      className: cn(
        "data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70",
        defaultClassNames.day,
        className
      )
    }, props)
  );
}

// src/registry/ui/calendar-input.tsx
var import_date_fns = require("date-fns");
function CalendarInput({
  id,
  value,
  onChange,
  placeholder = "dd/mm/aaaa",
  className,
  onOpenChange
}) {
  const [dateInput, setDateInput] = (0, import_react4.useState)("");
  const [open, setOpen] = (0, import_react4.useState)(false);
  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
    onOpenChange == null ? void 0 : onOpenChange(newOpen);
  };
  (0, import_react4.useEffect)(() => {
    if (value) {
      setDateInput((0, import_date_fns.format)(value, "dd/MM/yyyy"));
    } else {
      setDateInput("");
    }
  }, [value]);
  (0, import_react4.useEffect)(() => {
    return () => {
      if (open) {
        setOpen(false);
      }
    };
  }, [open]);
  const formatarData = (inputValue) => {
    const numbers = inputValue.replace(/\D/g, "");
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 4)
      return `${numbers.slice(0, 2)}/${numbers.slice(2)}`;
    return `${numbers.slice(0, 2)}/${numbers.slice(2, 4)}/${numbers.slice(
      4,
      8
    )}`;
  };
  const parseData = (dateString) => {
    if (dateString.length !== 10) return null;
    const [day, month, year] = dateString.split("/").map(Number);
    const date = new Date(year, month - 1, day);
    if (date.getDate() === day && date.getMonth() === month - 1 && date.getFullYear() === year) {
      return date;
    }
    return null;
  };
  const isDataInvalida = (dateString) => {
    if (dateString.length === 0) return false;
    if (dateString.length < 10) return false;
    return parseData(dateString) === null;
  };
  return /* @__PURE__ */ React.createElement("div", { className: "space-y-1" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
    Input,
    {
      id,
      type: "text",
      placeholder,
      className: cn(
        "pr-10 transition-all duration-200 focus:ring-2 focus:ring-ring/20",
        isDataInvalida(dateInput) ? "border-destructive focus:border-destructive focus:ring-destructive/20" : value ? "border-primary bg-primary/5" : "",
        className
      ),
      value: dateInput,
      onChange: (e) => {
        const formatted = formatarData(e.target.value);
        setDateInput(formatted);
        if (formatted.length === 10) {
          const parsedDate = parseData(formatted);
          onChange(parsedDate || void 0);
        } else if (formatted.length === 0) {
          onChange(void 0);
        }
      },
      onBlur: () => {
        if (value) {
          setDateInput((0, import_date_fns.format)(value, "dd/MM/yyyy"));
        }
      }
    }
  ), /* @__PURE__ */ React.createElement(Popover, { open, onOpenChange: handleOpenChange, modal: true }, /* @__PURE__ */ React.createElement(PopoverTrigger, { asChild: true }, /* @__PURE__ */ React.createElement(
    Button,
    {
      variant: "ghost",
      size: "icon",
      className: "absolute text-muted-foreground right-1 top-1/2 -translate-y-1/2 h-8 w-8 hover:bg-muted hover:text-foreground",
      tabIndex: -1
    },
    /* @__PURE__ */ React.createElement(import_lucide_react11.Calendar, { className: "h-4 w-4" })
  )), /* @__PURE__ */ React.createElement(
    PopoverContent,
    {
      className: "w-auto p-0 z-[60]",
      align: "start",
      onInteractOutside: (e) => {
        const target = e.target;
        if (target.getAttribute("data-slot") === "dialog-overlay") {
          e.preventDefault();
          return;
        }
        handleOpenChange(false);
      },
      onEscapeKeyDown: () => handleOpenChange(false)
    },
    /* @__PURE__ */ React.createElement(
      Calendar,
      {
        mode: "single",
        selected: value,
        onSelect: (date) => {
          onChange(date);
          setDateInput(date ? (0, import_date_fns.format)(date, "dd/MM/yyyy") : "");
          handleOpenChange(false);
        },
        className: "rounded-md border shadow-xs",
        captionLayout: "dropdown",
        autoFocus: true
      }
    )
  ))), isDataInvalida(dateInput) && /* @__PURE__ */ React.createElement("p", { className: "text-xs text-destructive" }, "Data inv\xE1lida"));
}

// src/registry/ui/file-upload-area.tsx
var import_react5 = require("react");
var import_lucide_react12 = require("lucide-react");
function FileUploadArea({
  accept,
  label,
  description,
  icon,
  dashed,
  multiple = false,
  onFileChange
}) {
  const [isDragOver, setIsDragOver] = (0, import_react5.useState)(false);
  const [selectedFiles, setSelectedFiles] = (0, import_react5.useState)([]);
  const fileInputRef = (0, import_react5.useRef)(null);
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = Array.from(e.dataTransfer.files);
    if (files.length > 0) {
      const validFiles = files.filter((file) => {
        if (accept === "image/*") return file.type.startsWith("image/");
        if (accept === "application/pdf")
          return file.type === "application/pdf";
        if (accept === "application/pdf,image/*") {
          return file.type === "application/pdf" || file.type.startsWith("image/");
        }
        return true;
      });
      if (validFiles.length > 0) {
        const newFiles = multiple ? [...selectedFiles, ...validFiles] : validFiles.slice(0, 1);
        setSelectedFiles(newFiles);
        onFileChange == null ? void 0 : onFileChange(newFiles);
      }
    }
  };
  const handleFileSelect = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const fileArray = Array.from(files);
      const validFiles = fileArray.filter((file) => {
        if (accept === "image/*") return file.type.startsWith("image/");
        if (accept === "application/pdf")
          return file.type === "application/pdf";
        if (accept === "application/pdf,image/*") {
          return file.type === "application/pdf" || file.type.startsWith("image/");
        }
        return true;
      });
      if (validFiles.length > 0) {
        const newFiles = multiple ? [...selectedFiles, ...validFiles] : validFiles.slice(0, 1);
        setSelectedFiles(newFiles);
        onFileChange == null ? void 0 : onFileChange(newFiles);
      }
    }
  };
  const handleClick = () => {
    var _a;
    (_a = fileInputRef.current) == null ? void 0 : _a.click();
  };
  const removeFile = (indexToRemove) => {
    const newFiles = selectedFiles.filter(
      (_, index) => index !== indexToRemove
    );
    setSelectedFiles(newFiles);
    onFileChange == null ? void 0 : onFileChange(newFiles);
    if (newFiles.length === 0 && fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  const removeAllFiles = () => {
    setSelectedFiles([]);
    onFileChange == null ? void 0 : onFileChange([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Label, { className: "text-sm font-medium" }, label), /* @__PURE__ */ React.createElement(
    "div",
    {
      onClick: handleClick,
      onDragOver: handleDragOver,
      onDragLeave: handleDragLeave,
      onDrop: handleDrop,
      className: `
          relative mt-1 border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors
          ${dashed ? "border-blue-900 hover:border-blue-700" : "border-gray-300 hover:border-gray-400"}
          ${isDragOver ? "border-blue-500 bg-blue-50 dark:bg-blue-950/20" : ""}
          ${selectedFiles.length > 0 ? "bg-green-50 dark:bg-green-950/20 border-green-300" : ""}
        `
    },
    /* @__PURE__ */ React.createElement(
      "input",
      {
        ref: fileInputRef,
        type: "file",
        accept,
        multiple,
        onChange: handleFileSelect,
        className: "hidden"
      }
    ),
    selectedFiles.length > 0 ? /* @__PURE__ */ React.createElement("div", { className: "space-y-2" }, selectedFiles.length > 1 && /* @__PURE__ */ React.createElement("div", { className: "flex justify-end" }, /* @__PURE__ */ React.createElement(
      Button,
      {
        type: "button",
        variant: "outline",
        size: "sm",
        onClick: (e) => {
          e.stopPropagation();
          removeAllFiles();
        },
        className: "text-xs h-7 hover:bg-muted hover:text-foreground/90"
      },
      "Remover todos"
    )), selectedFiles.map((file, index) => /* @__PURE__ */ React.createElement(
      "div",
      {
        key: index,
        className: "flex items-center justify-between bg-background/50 rounded-md p-2"
      },
      /* @__PURE__ */ React.createElement("div", { className: "flex items-center gap-3 flex-1 min-w-0" }, icon, /* @__PURE__ */ React.createElement("div", { className: "text-left min-w-0 flex-1" }, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium text-green-700 dark:text-green-300 truncate" }, file.name), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted-foreground" }, (file.size / 1024 / 1024).toFixed(2), " MB"))),
      /* @__PURE__ */ React.createElement(
        Button,
        {
          type: "button",
          variant: "ghost",
          size: "sm",
          onClick: (e) => {
            e.stopPropagation();
            removeFile(index);
          },
          className: "h-7 w-7 p-0 border-transparent text-red-500 hover:text-muted hover:bg-accent/70 rounded-full border hover:border-foreground/30 dark:hover:text-foreground  transition-colors flex-shrink-0"
        },
        /* @__PURE__ */ React.createElement(import_lucide_react12.XCircle, { className: "h-5 w-5" })
      )
    )), multiple && /* @__PURE__ */ React.createElement("div", { className: "text-center pt-2 border-t" }, /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted-foreground" }, "Clique para adicionar mais arquivos"))) : /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center gap-3" }, icon, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("p", { className: "text-sm font-medium" }, isDragOver ? "Solte os arquivos aqui" : multiple ? "Clique para selecionar ou arraste os arquivos" : "Clique para selecionar ou arraste o arquivo"), /* @__PURE__ */ React.createElement("p", { className: "text-xs text-muted-foreground mt-1" }, description)), /* @__PURE__ */ React.createElement(import_lucide_react12.Upload, { className: "h-5 w-5 text-muted-foreground" }))
  ));
}

// src/registry/ui/StatCard.tsx
var import_react6 = __toESM(require("react"));
var gradientVariants = {
  red: "bg-gradient-to-br from-red-200/10 via-red-300/10 to-red-400/10 dark:bg-gradient-to-br dark:from-red-600/10 dark:via-red-700/20 dark:to-red-800/30 contrast:bg-red-900",
  yellow: "bg-gradient-to-br from-yellow-200/10 via-yellow-300/10 to-yellow-400/10 dark:bg-gradient-to-br dark:from-yellow-600/10 dark:via-yellow-700/20 dark:to-yellow-800/30 contrast:bg-yellow-900",
  green: "bg-gradient-to-br from-green-200/10 via-green-300/10 to-green-400/10 dark:bg-gradient-to-br dark:from-green-600/10 dark:via-green-700/20 dark:to-green-800/30 contrast:bg-green-900",
  blue: "bg-gradient-to-br from-blue-200/10 via-blue-300/10 to-blue-400/10 dark:bg-gradient-to-br dark:from-blue-600/10 dark:via-blue-700/20 dark:to-blue-800/30 contrast:bg-blue-900",
  purple: "bg-gradient-to-br from-purple-200/10 via-purple-300/10 to-purple-400/10 dark:bg-gradient-to-br dark:from-purple-600/10 dark:via-purple-700/20 dark:to-purple-800/30 contrast:bg-purple-900",
  orange: "bg-gradient-to-br from-orange-200/10 via-orange-300/10 to-orange-400/10 dark:bg-gradient-to-br dark:from-orange-600/10 dark:via-orange-700/20 dark:to-orange-800/30 contrast:bg-orange-900",
  gray: "bg-gradient-to-br from-gray-200/10 via-gray-300/10 to-gray-400/10 dark:bg-gradient-to-br dark:from-gray-600/10 dark:via-gray-700/20 dark:to-gray-800/30 contrast:bg-gray-900"
};
var sizeVariants = {
  sm: {
    container: "p-2",
    value: "text-lg",
    title: "text-xs",
    icon: "w-3 h-3"
  },
  md: {
    container: "p-3",
    value: "text-2xl",
    title: "text-xs",
    icon: "w-4 h-4"
  },
  lg: {
    container: "p-4",
    value: "text-3xl",
    title: "text-sm",
    icon: "w-5 h-5"
  }
};
function StatCard({
  title,
  value,
  description,
  icon: Icon2,
  variant = "blue",
  size = "md",
  className,
  compact = false
}) {
  const sizeClasses = sizeVariants[size];
  const gradientClass = gradientVariants[variant];
  return /* @__PURE__ */ import_react6.default.createElement(
    "div",
    {
      className: cn(
        "text-center rounded-lg border-none",
        gradientClass,
        sizeClasses.container,
        className
      )
    },
    Icon2 && !compact && /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex justify-center mb-2" }, /* @__PURE__ */ import_react6.default.createElement(
      Icon2,
      {
        className: cn(
          sizeClasses.icon,
          "text-muted-foreground dark:text-foreground"
        )
      }
    )),
    /* @__PURE__ */ import_react6.default.createElement("div", { className: cn("font-bold text-foreground", sizeClasses.value) }, value),
    !compact && /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        className: cn(
          "text-muted-foreground dark:text-foreground mt-1",
          sizeClasses.title
        )
      },
      title
    ),
    description && !compact && /* @__PURE__ */ import_react6.default.createElement(
      "div",
      {
        className: cn(
          "text-muted-foreground/80 dark:text-foreground/80 mt-1",
          "text-xs"
        )
      },
      description
    ),
    compact && /* @__PURE__ */ import_react6.default.createElement("div", { className: "flex items-center justify-center gap-2 mt-1" }, Icon2 && /* @__PURE__ */ import_react6.default.createElement(
      Icon2,
      {
        className: cn(
          sizeClasses.icon,
          "text-muted-foreground dark:text-foreground"
        )
      }
    ), /* @__PURE__ */ import_react6.default.createElement(
      "span",
      {
        className: cn(
          "text-muted-foreground dark:text-foreground",
          sizeClasses.title
        )
      },
      title
    ))
  );
}
var gridColumns = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-2 lg:grid-cols-4",
  6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
};
var gridGaps = {
  sm: "gap-2",
  md: "gap-4",
  lg: "gap-6"
};
function StatCardGrid({
  cards,
  columns = 2,
  gap = "md",
  className
}) {
  return /* @__PURE__ */ import_react6.default.createElement("div", { className: cn("grid", gridColumns[columns], gridGaps[gap], className) }, cards.map((cardProps, index) => /* @__PURE__ */ import_react6.default.createElement(StatCard, __spreadValues({ key: index }, cardProps))));
}

// src/registry/ui/HeaderStandalone.tsx
var import_react8 = __toESM(require("react"));

// src/registry/ui/HeaderButton.tsx
var import_react7 = __toESM(require("react"));
function HeaderButton({
  icon: Icon2,
  children,
  title,
  onClick,
  variant = "ghost",
  size = "sm",
  className = "",
  showBadge = false,
  badgeCount = 0,
  disabled = false
}) {
  const baseClasses = "text-white hover:bg-white/20 hover:scale-110 transition-transform duration-200 p-2 dark:text-foreground dark:hover:bg-muted contrast:text-foreground relative group";
  const combinedClasses = `${baseClasses} ${className}`;
  return /* @__PURE__ */ import_react7.default.createElement(
    Button,
    {
      variant,
      size,
      onClick,
      className: combinedClasses,
      title,
      disabled
    },
    Icon2 && /* @__PURE__ */ import_react7.default.createElement(Icon2, { className: "w-4 h-4" }),
    children,
    showBadge && badgeCount > 0 && /* @__PURE__ */ import_react7.default.createElement("span", { className: "absolute -top-1 -right-1 w-4 h-4 text-xs flex items-center justify-center p-0 min-w-4 bg-red-500 text-white rounded-full font-medium group-hover:scale-110 transition-transform will-change-transform z-10" }, badgeCount > 99 ? "99+" : badgeCount)
  );
}

// src/registry/ui/ThemeToggleStandalone.tsx
var React28 = __toESM(require("react"));
var import_lucide_react13 = require("lucide-react");
var StandaloneThemeContext = React28.createContext(void 0);
function useStandaloneTheme() {
  const context = React28.useContext(StandaloneThemeContext);
  if (context === void 0) {
    throw new Error(
      "useStandaloneTheme must be used within a StandaloneThemeProvider"
    );
  }
  return context;
}
function ThemeToggleStandalone() {
  const { theme, setTheme } = useStandaloneTheme();
  return /* @__PURE__ */ React28.createElement(DropdownMenu, null, /* @__PURE__ */ React28.createElement(DropdownMenuTrigger, { asChild: true }, /* @__PURE__ */ React28.createElement(Button, { variant: "outline", size: "icon" }, theme === "light" && /* @__PURE__ */ React28.createElement(import_lucide_react13.Sun, { className: "h-[1.2rem] w-[1.2rem]" }), theme === "dark" && /* @__PURE__ */ React28.createElement(import_lucide_react13.Moon, { className: "h-[1.2rem] w-[1.2rem]" }), theme === "contrast" && /* @__PURE__ */ React28.createElement(import_lucide_react13.Palette, { className: "h-[1.2rem] w-[1.2rem]" }), /* @__PURE__ */ React28.createElement("span", { className: "sr-only" }, "Toggle theme"))), /* @__PURE__ */ React28.createElement(DropdownMenuContent, { align: "end" }, /* @__PURE__ */ React28.createElement(DropdownMenuItem, { onClick: () => setTheme("light") }, /* @__PURE__ */ React28.createElement(import_lucide_react13.Sun, { className: "mr-2 h-4 w-4" }), "Light"), /* @__PURE__ */ React28.createElement(DropdownMenuItem, { onClick: () => setTheme("dark") }, /* @__PURE__ */ React28.createElement(import_lucide_react13.Moon, { className: "mr-2 h-4 w-4" }), "Dark"), /* @__PURE__ */ React28.createElement(DropdownMenuItem, { onClick: () => setTheme("contrast") }, /* @__PURE__ */ React28.createElement(import_lucide_react13.Palette, { className: "mr-2 h-4 w-4" }), "High Contrast")));
}

// src/registry/ui/HeaderStandalone.tsx
var import_lucide_react14 = require("lucide-react");
var defaultActions = [
  {
    id: "notifications",
    icon: import_lucide_react14.Bell,
    title: "Notifica\xE7\xF5es",
    showBadge: true,
    badgeCount: 0
  },
  {
    id: "settings",
    icon: import_lucide_react14.Settings,
    title: "Configura\xE7\xF5es"
  },
  {
    id: "profile",
    icon: import_lucide_react14.User,
    title: "Perfil do usu\xE1rio"
  }
];
function HeaderStandalone({
  logo = "/hollow-logo.png",
  title,
  actions = defaultActions,
  showThemeToggle = true,
  showMobileMenu = true,
  onMobileMenuClick,
  backgroundColor = "bg-primary",
  className = ""
}) {
  return /* @__PURE__ */ import_react8.default.createElement(
    "div",
    {
      className: `${backgroundColor} border-b-2 border-primary text-white shadow-lg dark:bg-card dark:text-foreground dark:border-b-2 dark:border-[#9a1c1f] contrast:bg-card contrast:text-foreground contrast:border-b-2 contrast:border-[#9a1c1f] ${className}`
    },
    /* @__PURE__ */ import_react8.default.createElement("div", { className: "max-w-[1920px] w-full mx-auto px-4 sm:px-6 lg:px-8" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center justify-between h-16" }, /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center gap-3" }, showMobileMenu && /* @__PURE__ */ import_react8.default.createElement("div", { className: "md:hidden" }, /* @__PURE__ */ import_react8.default.createElement(
      HeaderButton,
      {
        icon: import_lucide_react14.Menu,
        title: "Menu",
        onClick: onMobileMenuClick
      }
    )), /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center" }, typeof logo === "string" ? /* @__PURE__ */ import_react8.default.createElement(
      "img",
      {
        src: logo,
        alt: "Logo",
        width: 1280,
        height: 276,
        className: "h-9 w-max"
      }
    ) : logo), title && /* @__PURE__ */ import_react8.default.createElement("h1", { className: "text-lg font-semibold text-white dark:text-foreground contrast:text-foreground hidden sm:block" }, title)), /* @__PURE__ */ import_react8.default.createElement("div", { className: "flex items-center space-x-1" }, actions.map((action) => /* @__PURE__ */ import_react8.default.createElement(
      HeaderButton,
      {
        key: action.id,
        icon: action.icon,
        title: action.title,
        onClick: action.onClick,
        showBadge: action.showBadge,
        badgeCount: action.badgeCount,
        disabled: action.disabled
      },
      action.children
    )), showThemeToggle && /* @__PURE__ */ import_react8.default.createElement(ThemeToggleStandalone, null))))
  );
}

// src/registry/ui/FooterStandalone.tsx
var import_react9 = __toESM(require("react"));
function FooterStandalone({
  logo = "/just_logo.png",
  brandName = "hollow-UI",
  description = "Biblioteca de componentes React para aplica\xE7\xF5es modernas e acess\xEDveis.",
  sections = [],
  copyrightText,
  version,
  backgroundColor = "bg-primary",
  className = ""
}) {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  const defaultCopyright = copyrightText || `\xA9 ${currentYear} ${brandName}. Todos os direitos reservados.`;
  return /* @__PURE__ */ import_react9.default.createElement(
    "footer",
    {
      className: `${backgroundColor} border-t border-primary mt-auto dark:bg-card dark:text-foreground dark:border-t-2 dark:border-[#9a1c1f] contrast:bg-card contrast:text-foreground contrast:border-t-2 contrast:border-[#9a1c1f] ${className}`
    },
    /* @__PURE__ */ import_react9.default.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8" }, /* @__PURE__ */ import_react9.default.createElement(
      "div",
      {
        className: `grid grid-cols-1 md:grid-cols-${Math.min(
          sections.length + 1,
          4
        )} gap-8`
      },
      /* @__PURE__ */ import_react9.default.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex items-center space-x-2" }, typeof logo === "string" ? /* @__PURE__ */ import_react9.default.createElement(
        "img",
        {
          src: logo,
          width: 32,
          height: 32,
          alt: `${brandName} Logo`,
          className: "h-8 w-8"
        }
      ) : logo, /* @__PURE__ */ import_react9.default.createElement("span", { className: "text-lg font-semibold text-white dark:text-foreground contrast:text-foreground" }, brandName)), description && /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-sm text-white/80 max-w-xs dark:text-muted-foreground contrast:text-muted-foreground" }, description)),
      sections.map((section, index) => /* @__PURE__ */ import_react9.default.createElement("div", { key: index, className: "space-y-4" }, /* @__PURE__ */ import_react9.default.createElement("h3", { className: "text-sm font-semibold text-white uppercase tracking-wide dark:text-foreground contrast:text-foreground" }, section.title), /* @__PURE__ */ import_react9.default.createElement("div", { className: "space-y-3" }, section.links.map((link, linkIndex) => {
        const IconComponent = link.icon;
        const linkProps = __spreadValues({
          className: "flex items-center text-sm text-white/80 hover:text-white transition-colors dark:text-muted-foreground dark:hover:text-foreground contrast:text-muted-foreground contrast:hover:text-foreground",
          title: link.title
        }, link.external && {
          target: "_blank",
          rel: "noopener noreferrer"
        });
        return /* @__PURE__ */ import_react9.default.createElement("a", __spreadValues({ key: linkIndex, href: link.href }, linkProps), IconComponent && /* @__PURE__ */ import_react9.default.createElement(IconComponent, { className: "w-4 h-4 mr-2" }), link.label);
      }))))
    ), /* @__PURE__ */ import_react9.default.createElement("div", { className: "mt-8 pt-8 border-t border-primary/30 dark:border-t dark:border-primary/30 contrast:border-t contrast:border-primary/30" }, /* @__PURE__ */ import_react9.default.createElement("div", { className: "flex flex-col md:flex-row justify-between items-center" }, /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-sm text-white/70 dark:text-muted-foreground contrast:text-muted-foreground" }, defaultCopyright), version && /* @__PURE__ */ import_react9.default.createElement("p", { className: "text-sm text-white/70 mt-2 md:mt-0 dark:text-muted-foreground contrast:text-muted-foreground" }, "Vers\xE3o ", version))))
  );
}

// src/registry/ui/ToasterStandalone.tsx
var import_sonner = require("sonner");
var import_react10 = __toESM(require("react"));
function ToasterStandalone(_a) {
  var _b = _a, {
    theme = "light"
  } = _b, props = __objRest(_b, [
    "theme"
  ]);
  return /* @__PURE__ */ import_react10.default.createElement(
    import_sonner.Toaster,
    __spreadValues({
      theme,
      className: "toaster group custom-toast-position",
      position: "top-right",
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--success-bg": "#dcfce7",
        "--success-text": "#15803d",
        "--success-border": "#16a34a",
        "--error-bg": "#fef2f2",
        "--error-text": "#dc2626",
        "--error-border": "#ef4444",
        "--warning-bg": "#fefce8",
        "--warning-text": "#ca8a04",
        "--warning-border": "#eab308",
        "--info-bg": "#eff6ff",
        "--info-text": "#2563eb",
        "--info-border": "#3b82f6"
      },
      toastOptions: {
        style: {
          border: "1px solid var(--normal-border)"
        },
        classNames: {
          success: "toast-success",
          error: "toast-error",
          warning: "toast-warning",
          info: "toast-info"
        }
      }
    }, props)
  );
}
function useToastStandalone() {
  const showToast = {
    success: (message, options) => {
      import_sonner.toast.success(message, options);
    },
    error: (message, options) => {
      import_sonner.toast.error(message, options);
    },
    info: (message, options) => {
      import_sonner.toast.info(message, options);
    },
    warning: (message, options) => {
      import_sonner.toast.warning(message, options);
    },
    promise: (promise, options) => {
      import_sonner.toast.promise(promise, options);
    },
    dismiss: (toastId) => {
      import_sonner.toast.dismiss(toastId);
    }
  };
  return { toast: showToast };
}

// src/registry/ui/Navigation.tsx
var import_lucide_react15 = require("lucide-react");
var defaultItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: import_lucide_react15.LayoutDashboard,
    description: "Vis\xE3o geral e estat\xEDsticas"
  },
  {
    id: "reports",
    label: "Relat\xF3rios",
    icon: import_lucide_react15.FileChartColumnIncreasing,
    description: "Gerador de relat\xF3rios"
  },
  {
    id: "data",
    label: "Dados",
    icon: import_lucide_react15.FileSpreadsheet,
    description: "Gerenciamento de dados"
  },
  {
    id: "tracking",
    label: "Acompanhamento",
    icon: import_lucide_react15.ClipboardList,
    description: "Acompanhamento detalhado"
  },
  {
    id: "resources",
    label: "Recursos",
    icon: import_lucide_react15.Car,
    description: "Gerenciamento de recursos"
  }
];
function Navigation({
  activeSection,
  onSectionChange,
  items = defaultItems,
  className = ""
}) {
  return /* @__PURE__ */ React.createElement("div", { className: `bg-card border-b border-border shadow-sm ${className}` }, /* @__PURE__ */ React.createElement("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-9" }, /* @__PURE__ */ React.createElement("div", { className: "flex flex-col sm:flex-col md:flex-col lg:flex-row gap-3.5 py-4 sm:py-6" }, items.map((item) => {
    const IconComponent = item.icon;
    return /* @__PURE__ */ React.createElement(
      Button,
      {
        key: item.id,
        variant: activeSection === item.id ? "default" : "ghost",
        onClick: () => onSectionChange(item.id),
        className: `flex items-center justify-start space-x-1 px-4 sm:px-8 py-3 sm:py-6 rounded-lg transition-all duration-200 min-w-57 w-full sm:w-auto ${activeSection === item.id ? "bg-primary text-primary-foreground shadow-md transform scale-[1.02] contrast:bg-secondary/50 contrast:border-2" : "text-muted-foreground shadow-sm hover:text-foreground hover:bg-secondary/50 hover:shadow-md"}`
      },
      /* @__PURE__ */ React.createElement(IconComponent, { className: "w-5 h-5" }),
      /* @__PURE__ */ React.createElement("div", { className: "text-left" }, /* @__PURE__ */ React.createElement("div", { className: "font-semibold text-sm" }, item.label), /* @__PURE__ */ React.createElement("div", { className: "text-xs opacity-75 max-w-48 hidden sm:block" }, item.description))
    );
  }))));
}

// src/registry/ui/StatusBadge.tsx
var import_react11 = __toESM(require("react"));
var import_lucide_react16 = require("lucide-react");
var StatusBadge = ({
  status,
  size = "md",
  className = ""
}) => {
  const icons = {
    // Status de tarefas/itens
    ENVIADO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Enviado" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.Send, { size: 14 })),
    "EM AN\xC1LISE": /* @__PURE__ */ import_react11.default.createElement("span", { title: "Em an\xE1lise" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.Clock, { size: 16 })),
    CONCLU\u00CDDO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Conclu\xEDdo" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.Check, { size: 16 })),
    // Status de processos
    "EM ANDAMENTO": /* @__PURE__ */ import_react11.default.createElement("span", { title: "Em andamento" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.ClockAlert, { size: 16 })),
    FINALIZADO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Finalizado" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.CircleCheck, { size: 16 })),
    // Status geral
    CANCELADO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Cancelado" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.X, { size: 16, strokeWidth: 2.5 })),
    // Status de veículos
    PARADO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Parado" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.OctagonPause, { size: 16 })),
    RODANDO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Rodando" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.Truck, { size: 16 })),
    // Status gerais para outras aplicações
    ATIVO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Ativo" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.Check, { size: 16 })),
    INATIVO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Inativo" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.X, { size: 16, strokeWidth: 2.5 })),
    PENDENTE: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Pendente" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.Clock, { size: 16 })),
    APROVADO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Aprovado" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.CircleCheck, { size: 16 })),
    REJEITADO: /* @__PURE__ */ import_react11.default.createElement("span", { title: "Rejeitado" }, /* @__PURE__ */ import_react11.default.createElement(import_lucide_react16.X, { size: 16, strokeWidth: 2.5 }))
  };
  const colors = {
    // Status de tarefas/itens - tons azuis/roxos
    ENVIADO: "bg-purple-100 text-purple-800 border border-purple-300 dark:bg-purple-900/30 dark:text-purple-200 dark:border-purple-700 contrast:bg-purple-200 contrast:text-purple-900 contrast:border-purple-600",
    "EM AN\xC1LISE": "bg-blue-100 text-blue-800 border border-blue-300 dark:bg-blue-900/30 dark:text-blue-200 dark:border-blue-700 contrast:bg-blue-200 contrast:text-blue-900 contrast:border-blue-600",
    CONCLU\u00CDDO: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700 contrast:bg-emerald-200 contrast:text-emerald-900 contrast:border-emerald-600",
    // Status de processos - tons laranja/verdes mais saturados
    "EM ANDAMENTO": "bg-orange-100 text-orange-800 border border-orange-300 dark:bg-orange-900/30 dark:text-orange-200 dark:border-orange-700 contrast:bg-orange-200 contrast:text-orange-900 contrast:border-orange-600",
    FINALIZADO: "bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700 contrast:bg-green-200 contrast:text-green-900 contrast:border-green-600",
    // Status geral - tons neutros
    CANCELADO: "bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600 contrast:bg-gray-200 contrast:text-gray-900 contrast:border-gray-600",
    // Status de veículos - tons específicos
    PARADO: "bg-red-100 text-red-800 border border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700 contrast:bg-red-200 contrast:text-red-900 contrast:border-red-600",
    RODANDO: "bg-teal-100 text-teal-800 border border-teal-300 dark:bg-teal-900/30 dark:text-teal-200 dark:border-teal-700 contrast:bg-teal-200 contrast:text-teal-900 contrast:border-teal-600",
    // Status gerais para outras aplicações
    ATIVO: "bg-green-100 text-green-800 border border-green-300 dark:bg-green-900/30 dark:text-green-200 dark:border-green-700 contrast:bg-green-200 contrast:text-green-900 contrast:border-green-600",
    INATIVO: "bg-gray-100 text-gray-700 border border-gray-300 dark:bg-gray-800/50 dark:text-gray-300 dark:border-gray-600 contrast:bg-gray-200 contrast:text-gray-900 contrast:border-gray-600",
    PENDENTE: "bg-yellow-100 text-yellow-800 border border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-200 dark:border-yellow-700 contrast:bg-yellow-200 contrast:text-yellow-900 contrast:border-yellow-600",
    APROVADO: "bg-emerald-100 text-emerald-800 border border-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-200 dark:border-emerald-700 contrast:bg-emerald-200 contrast:text-emerald-900 contrast:border-emerald-600",
    REJEITADO: "bg-red-100 text-red-800 border border-red-300 dark:bg-red-900/30 dark:text-red-200 dark:border-red-700 contrast:bg-red-200 contrast:text-red-900 contrast:border-red-600"
  };
  const texts = {
    ENVIADO: "Enviado",
    "EM AN\xC1LISE": "Em an\xE1lise",
    CONCLU\u00CDDO: "Conclu\xEDdo",
    "EM ANDAMENTO": "Em andamento",
    FINALIZADO: "Finalizado",
    CANCELADO: "Cancelado",
    PARADO: "Parado",
    RODANDO: "Rodando",
    ATIVO: "Ativo",
    INATIVO: "Inativo",
    PENDENTE: "Pendente",
    APROVADO: "Aprovado",
    REJEITADO: "Rejeitado"
  };
  const tooltips = {
    ENVIADO: "Item enviado, aguardando an\xE1lise.",
    "EM AN\xC1LISE": "Item est\xE1 sendo analisado.",
    CONCLU\u00CDDO: "Item foi conclu\xEDdo com sucesso.",
    "EM ANDAMENTO": "Processo em andamento.",
    FINALIZADO: "Processo finalizado com sucesso.",
    CANCELADO: "Item foi cancelado.",
    PARADO: "Item est\xE1 parado.",
    RODANDO: "Item est\xE1 em opera\xE7\xE3o.",
    ATIVO: "Item est\xE1 ativo no sistema.",
    INATIVO: "Item est\xE1 inativo no sistema.",
    PENDENTE: "Item est\xE1 aguardando aprova\xE7\xE3o.",
    APROVADO: "Item foi aprovado.",
    REJEITADO: "Item foi rejeitado."
  };
  const sizes = {
    sm: "px-2 py-0.5 text-xs min-w-[80px]",
    md: "px-2.5 py-1 text-xs min-w-[90px] max-w-[170px]",
    lg: "px-3 py-1.5 text-sm min-w-[100px] max-w-[180px]"
  };
  const color = colors[status] || "bg-slate-200 text-slate-800 border border-slate-400 dark:bg-slate-700 dark:text-slate-200 dark:border-slate-500 contrast:bg-slate-300 contrast:text-slate-900 contrast:border-slate-600";
  const icon = icons[status] || null;
  const text = texts[status] || status.charAt(0).toUpperCase() + status.slice(1).toLowerCase();
  const tooltip = tooltips[status] || "Status n\xE3o reconhecido.";
  const sizeClasses = sizes[size];
  return /* @__PURE__ */ import_react11.default.createElement(
    "span",
    {
      className: `inline-flex whitespace-nowrap items-center gap-1.5 rounded-full font-medium transition-all duration-200 cursor-default justify-center ${sizeClasses} ${color} ${className}`,
      title: tooltip,
      style: { letterSpacing: "0.02em" }
    },
    icon,
    /* @__PURE__ */ import_react11.default.createElement("span", null, text)
  );
};

// src/index.ts
var VERSION = "1.0.0";
var AUTHOR = {
  name: "\xCDtalo Soares Campos",
  email: "soarescmpos@gmail.com",
  github: "https://github.com/SCamposs"
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AUTHOR,
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  BackToTopButton,
  Badge,
  Button,
  CalendarInput,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  FileUploadArea,
  FooterStandalone,
  HeaderButton,
  HeaderStandalone,
  HeaderStatCardCompact,
  HeaderStatCardMini,
  HeaderStats,
  HeaderStatsGrid,
  InfoCard,
  Input,
  Label,
  MultiSelect,
  Navigation,
  Popover,
  PopoverAnchor,
  PopoverContent,
  PopoverTrigger,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Skeleton,
  StatCard,
  StatCardGrid,
  StatusBadge,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  ToasterStandalone,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  VERSION,
  badgeVariants,
  buttonVariants,
  cn,
  toggleVariants,
  useToastStandalone
});
//# sourceMappingURL=index.js.map