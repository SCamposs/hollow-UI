import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React$1 from 'react';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';
import * as LabelPrimitive from '@radix-ui/react-label';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { LucideIcon } from 'lucide-react';
import { ToasterProps } from 'sonner';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "clearFilter" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Button({ className, variant, size, asChild, ...props }: React$1.ComponentProps<"button"> & VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Badge({ className, variant, asChild, ...props }: React$1.ComponentProps<"span"> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): React$1.JSX.Element;

declare function Card({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardTitle({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardDescription({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardContent({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function CardFooter({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;

declare function Input({ className, type, ...props }: React$1.ComponentProps<"input">): React$1.JSX.Element;

declare const labelVariants: (props?: class_variance_authority_types.ClassProp | undefined) => string;
declare function Label({ className, ...props }: React$1.ComponentProps<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>): React$1.JSX.Element;

declare function Textarea({ className, ...props }: React$1.ComponentProps<"textarea">): React$1.JSX.Element;

declare function Checkbox({ className, ...props }: React$1.ComponentProps<typeof CheckboxPrimitive.Root>): React$1.JSX.Element;

declare function Switch({ className, ...props }: React$1.ComponentProps<typeof SwitchPrimitive.Root>): React$1.JSX.Element;

declare function Select({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Root>): React$1.JSX.Element;
declare function SelectValue({ ...props }: React$1.ComponentProps<typeof SelectPrimitive.Value>): React$1.JSX.Element;
declare function SelectTrigger({ className, size, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Trigger> & {
    size?: "sm" | "default";
}): React$1.JSX.Element;
declare function SelectContent({ className, children, position, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Content>): React$1.JSX.Element;
declare function SelectItem({ className, children, ...props }: React$1.ComponentProps<typeof SelectPrimitive.Item>): React$1.JSX.Element;

declare function Table({ className, ...props }: React$1.ComponentProps<"table">): React$1.JSX.Element;
declare function TableHeader({ className, ...props }: React$1.ComponentProps<"thead">): React$1.JSX.Element;
declare function TableBody({ className, ...props }: React$1.ComponentProps<"tbody">): React$1.JSX.Element;
declare function TableFooter({ className, ...props }: React$1.ComponentProps<"tfoot">): React$1.JSX.Element;
declare function TableRow({ className, ...props }: React$1.ComponentProps<"tr">): React$1.JSX.Element;
declare function TableHead({ className, ...props }: React$1.ComponentProps<"th">): React$1.JSX.Element;
declare function TableCell({ className, ...props }: React$1.ComponentProps<"td">): React$1.JSX.Element;
declare function TableCaption({ className, ...props }: React$1.ComponentProps<"caption">): React$1.JSX.Element;

declare function Dialog({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Root>): React$1.JSX.Element;
declare function DialogTrigger({ ...props }: React$1.ComponentProps<typeof DialogPrimitive.Trigger>): React$1.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): React$1.JSX.Element;
declare function DialogHeader({ className, ...props }: React$1.ComponentProps<"div">): React$1.JSX.Element;
declare function DialogTitle({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Title>): React$1.JSX.Element;
declare function DialogDescription({ className, ...props }: React$1.ComponentProps<typeof DialogPrimitive.Description>): React$1.JSX.Element;

declare function Popover({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Root>): React$1.JSX.Element;
declare function PopoverTrigger({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Trigger>): React$1.JSX.Element;
declare function PopoverContent({ className, align, sideOffset, ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Content>): React$1.JSX.Element;
declare function PopoverAnchor({ ...props }: React$1.ComponentProps<typeof PopoverPrimitive.Anchor>): React$1.JSX.Element;

declare function Accordion({ ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Root>): React$1.JSX.Element;
declare function AccordionItem({ className, ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Item>): React$1.JSX.Element;
declare function AccordionTrigger({ className, children, ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Trigger>): React$1.JSX.Element;
declare function AccordionContent({ className, children, ...props }: React$1.ComponentProps<typeof AccordionPrimitive.Content>): React$1.JSX.Element;

declare function DropdownMenu({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Root>): React$1.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Portal>): React$1.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): React$1.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Content>): React$1.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Group>): React$1.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): React$1.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): React$1.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): React$1.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): React$1.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Separator>): React$1.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React$1.ComponentProps<"span">): React$1.JSX.Element;
declare function DropdownMenuSub({ ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.Sub>): React$1.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): React$1.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React$1.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): React$1.JSX.Element;

declare const toggleVariants: (props?: ({
    variant?: "default" | "outline" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function Toggle({ className, variant, size, ...props }: React$1.ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function ToggleGroup({ className, variant, size, children, ...props }: React$1.ComponentProps<typeof ToggleGroupPrimitive.Root> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;
declare function ToggleGroupItem({ className, children, variant, size, ...props }: React$1.ComponentProps<typeof ToggleGroupPrimitive.Item> & VariantProps<typeof toggleVariants>): React$1.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React$1.ComponentProps<typeof SeparatorPrimitive.Root>): React$1.JSX.Element;

declare function Skeleton({ className, ...props }: React.ComponentProps<"div">): React$1.JSX.Element;

declare const ScrollArea: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;
declare const ScrollBar: React$1.ForwardRefExoticComponent<Omit<ScrollAreaPrimitive.ScrollAreaScrollbarProps & React$1.RefAttributes<HTMLDivElement>, "ref"> & React$1.RefAttributes<HTMLDivElement>>;

/**
 * Component: header-stats
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */
/**
 * hollow-UI - HeaderStats Components
 * Developed by Ítalo Soares Campos
 *
 * HeaderStats: Responsive grid (1 column mobile, 2 tablet, 4 desktop)
 * HeaderStatsGrid: Fixed 2x2 grid (always 2 columns)
 * HeaderStatCardMini: Smaller and more compact version
 */

interface HeaderStatCardMiniProps {
    title: string;
    icon: LucideIcon;
    borderColor: string;
    iconBgColor: string;
    iconColor: string;
    value?: string | number;
    description: string;
}
declare function HeaderStatCardMini({ title, icon: Icon, borderColor, iconBgColor, iconColor, value, description, }: HeaderStatCardMiniProps): React__default.JSX.Element;
interface HeaderStatCardCompactProps {
    title: string;
    value?: string | number;
    description?: string;
    icon: LucideIcon;
    borderColor: string;
    iconBgColor: string;
    iconColor: string;
    badgeValue?: string | number;
    progressValue?: number;
    hasShadow?: boolean;
    shadowColor?: string;
}
declare function HeaderStatCardCompact({ title, value, description, icon: Icon, borderColor, iconBgColor, iconColor, badgeValue, progressValue, hasShadow, shadowColor, }: HeaderStatCardCompactProps): React__default.JSX.Element;
interface HeaderStatsProps {
    stats: Array<{
        title: string;
        value: string | number;
        description: string;
        icon: LucideIcon;
        borderColor: string;
        iconBgColor: string;
        iconColor: string;
        onClick?: () => void;
    }>;
}
declare function HeaderStats({ stats }: HeaderStatsProps): React__default.JSX.Element;
interface HeaderStatsGridProps {
    stats: Array<{
        title: string;
        value: string | number;
        description: string;
        icon: LucideIcon;
        borderColor: string;
        iconBgColor: string;
        iconColor: string;
        onClick?: () => void;
    }>;
    columns?: number;
}
declare function HeaderStatsGrid({ stats, columns }: HeaderStatsGridProps): React__default.JSX.Element;

interface InfoCardProps {
    id: string;
    status: string;
    veiculo: string;
    solicitante: string;
    finalidade: string;
    periodo: string;
    descricao: string;
    modificacoes: string;
    onAprovar?: (id: string) => void;
    onReprovar?: (id: string) => void;
}
declare function InfoCard({ id, status, veiculo, solicitante, finalidade, periodo, descricao, modificacoes, onAprovar, onReprovar, }: InfoCardProps): React__default.JSX.Element;

interface BackToTopButtonProps {
    offsetRight?: string;
    offsetBottom?: string;
}
declare function BackToTopButton({ offsetRight, offsetBottom, }: BackToTopButtonProps): React__default.JSX.Element | null;

/**
 * Component: multi-select
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */

interface MultiSelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface MultiSelectProps {
    options: MultiSelectOption[];
    value?: string[];
    onValueChange?: (value: string[]) => void;
    placeholder?: string;
    searchable?: boolean;
    searchPlaceholder?: string;
    emptyMessage?: string;
    maxDisplay?: number;
    className?: string;
    disabled?: boolean;
    size?: "sm" | "default";
}
declare function MultiSelect({ options, value, onValueChange, placeholder, searchable, searchPlaceholder, emptyMessage, maxDisplay, className, disabled, size, ...props }: MultiSelectProps): React$1.JSX.Element;

/**
 * Component: calendar-input
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */
interface CalendarInputProps {
    id?: string;
    value: Date | undefined;
    onChange: (date: Date | undefined) => void;
    placeholder?: string;
    className?: string;
    onOpenChange?: (open: boolean) => void;
}
declare function CalendarInput({ id, value, onChange, placeholder, className, onOpenChange, }: CalendarInputProps): React$1.JSX.Element;

/**
 * Component: file-upload-area
 * Developed by: Ítalo Soares Campos
 * Library: @scmposs/hollow-ui
 * Homepage: https://github.com/SCamposs/hollow-ui
 */
interface FileUploadAreaProps {
    accept: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    dashed?: boolean;
    multiple?: boolean;
    onFileChange?: (files: File[]) => void;
}
declare function FileUploadArea({ accept, label, description, icon, dashed, multiple, onFileChange, }: FileUploadAreaProps): React$1.JSX.Element;

interface StatCardProps {
    /** Título da estatística */
    title: string;
    /** Valor principal a ser exibido */
    value: string | number;
    /** Descrição ou subtítulo opcional */
    description?: string;
    /** Ícone a ser exibido */
    icon?: LucideIcon;
    /** Variante de cor que define o gradiente */
    variant?: "red" | "yellow" | "green" | "blue" | "purple" | "orange" | "gray";
    /** Tamanho do componente */
    size?: "sm" | "md" | "lg";
    /** Classes CSS adicionais */
    className?: string;
    /** Se verdadeiro, exibe apenas o valor sem título */
    compact?: boolean;
}
declare function StatCard({ title, value, description, icon: Icon, variant, size, className, compact, }: StatCardProps): React__default.JSX.Element;
interface StatCardGridProps {
    /** Array de props para cada StatCard */
    cards: StatCardProps[];
    /** Número de colunas no grid */
    columns?: 1 | 2 | 3 | 4 | 6;
    /** Gap entre os cards */
    gap?: "sm" | "md" | "lg";
    /** Classes CSS adicionais */
    className?: string;
}
declare function StatCardGrid({ cards, columns, gap, className, }: StatCardGridProps): React__default.JSX.Element;

/**
 * hollow-UI - Header Component Standalone
 * Standalone version without Next.js dependency
 * Developed by Ítalo Soares Campos
 */

interface HeaderAction {
    /** Identificador único da ação */
    id: string;
    /** Ícone do Lucide React */
    icon?: LucideIcon;
    /** Conteúdo personalizado (para imagens, texto, etc.) */
    children?: React__default.ReactNode;
    /** Tooltip do botão */
    title?: string;
    /** Função executada ao clicar */
    onClick?: () => void;
    /** Mostrar badge de notificação */
    showBadge?: boolean;
    /** Número do badge */
    badgeCount?: number;
    /** Se verdadeiro, desabilita a ação */
    disabled?: boolean;
}
interface HeaderStandaloneProps {
    /** Logo da aplicação (caminho ou componente) */
    logo?: string | React__default.ReactNode;
    /** Título da aplicação */
    title?: string;
    /** Array de ações do header */
    actions?: HeaderAction[];
    /** Se verdadeiro, inclui o ThemeToggle automaticamente */
    showThemeToggle?: boolean;
    /** Se verdadeiro, mostra o botão de menu mobile */
    showMobileMenu?: boolean;
    /** Função do menu mobile */
    onMobileMenuClick?: () => void;
    /** Cor de fundo personalizada */
    backgroundColor?: string;
    /** Classes CSS adicionais */
    className?: string;
}
declare function HeaderStandalone({ logo, title, actions, showThemeToggle, showMobileMenu, onMobileMenuClick, backgroundColor, className, }: HeaderStandaloneProps): React__default.JSX.Element;

/**
 * hollow-UI - Footer Component Standalone
 * Standalone version without Next.js dependency
 * Developed by Ítalo Soares Campos
 */

interface FooterLink {
    /** Label do link */
    label: string;
    /** URL ou path do link */
    href: string;
    /** Ícone do Lucide React */
    icon?: LucideIcon;
    /** Se verdadeiro, abre em nova aba */
    external?: boolean;
    /** Título do link (tooltip) */
    title?: string;
}
interface FooterSection {
    /** Título da seção */
    title: string;
    /** Array de links da seção */
    links: FooterLink[];
}
interface FooterStandaloneProps {
    /** Logo do footer (path ou JSX) */
    logo?: string | React__default.ReactNode;
    /** Nome da empresa/aplicação */
    brandName?: string;
    /** Descrição da empresa/aplicação */
    description?: string;
    /** Array de seções do footer */
    sections?: FooterSection[];
    /** Texto de copyright personalizado */
    copyrightText?: string;
    /** Versão da aplicação */
    version?: string;
    /** Cor de fundo personalizada */
    backgroundColor?: string;
    /** Classes CSS adicionais */
    className?: string;
}
declare function FooterStandalone({ logo, brandName, description, sections, copyrightText, version, backgroundColor, className, }: FooterStandaloneProps): React__default.JSX.Element;

declare function ToasterStandalone({ theme, ...props }: ToasterProps & {
    theme?: "light" | "dark" | "contrast";
}): React__default.JSX.Element;
declare function useToastStandalone(): {
    toast: {
        success: (message: string, options?: {
            description?: string;
        }) => void;
        error: (message: string, options?: {
            description?: string;
        }) => void;
        info: (message: string, options?: {
            description?: string;
        }) => void;
        warning: (message: string, options?: {
            description?: string;
        }) => void;
        promise: <T>(promise: Promise<T>, options: {
            loading: string;
            success: string | ((data: T) => string);
            error: string | ((error: any) => string);
        }) => void;
        dismiss: (toastId?: string | number) => void;
    };
};

interface NavigationItem {
    id: string;
    label: string;
    icon: LucideIcon;
    description: string;
}
interface NavigationProps {
    activeSection: string;
    onSectionChange: (section: string) => void;
    items?: NavigationItem[];
    className?: string;
}
declare function Navigation({ activeSection, onSectionChange, items, className, }: NavigationProps): React$1.JSX.Element;

/**
 * hollow-UI - StatusBadge Component
 * Developed by Ítalo Soares Campos
 */

interface StatusBadgeProps {
    status: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare const StatusBadge: React__default.FC<StatusBadgeProps>;

/**
 * hollow-UI - HeaderButton Component
 * Developed by Ítalo Soares Campos
 */

interface HeaderButtonProps {
    /** Ícone do Lucide React */
    icon?: LucideIcon;
    /** Conteúdo personalizado do botão (para imagens ou outros elementos) */
    children?: React__default.ReactNode;
    /** Texto do tooltip que aparece ao fazer hover */
    title?: string;
    /** Função executada ao clicar no botão */
    onClick?: () => void;
    /** Variant do botton (padrão: ghost) */
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    /** Tamanho do botão (padrão: sm) */
    size?: "default" | "sm" | "lg" | "icon";
    /** Classes CSS adicionais */
    className?: string;
    /** Se verdadeiro, mostra um badge de notificação */
    showBadge?: boolean;
    /** Número para exibir no badge */
    badgeCount?: number;
    /** Se verdadeiro, desabilita o botão */
    disabled?: boolean;
}
declare function HeaderButton({ icon: Icon, children, title, onClick, variant, size, className, showBadge, badgeCount, disabled, }: HeaderButtonProps): React__default.JSX.Element;

declare function cn(...inputs: ClassValue[]): string;

/**
 * hollow-UI - Component Framework
 * Developed by Ítalo Soares Campos
 *
 * Exports all UI components available in the framework
 */

interface HollowUIProps {
    className?: string;
    children?: React.ReactNode;
}
declare const VERSION = "1.0.0";
declare const AUTHOR: {
    name: string;
    email: string;
    github: string;
};

export { AUTHOR, Accordion, AccordionContent, AccordionItem, AccordionTrigger, BackToTopButton, Badge, Button, CalendarInput, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, FileUploadArea, FooterStandalone, HeaderButton, HeaderStandalone, HeaderStatCardCompact, HeaderStatCardMini, HeaderStats, HeaderStatsGrid, type HollowUIProps, InfoCard, Input, Label, MultiSelect, type MultiSelectOption, Navigation, type NavigationItem, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ScrollArea, ScrollBar, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Skeleton, StatCard, StatCardGrid, StatusBadge, Switch, Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow, Textarea, ToasterStandalone, Toggle, ToggleGroup, ToggleGroupItem, VERSION, badgeVariants, buttonVariants, cn, toggleVariants, useToastStandalone };
