export interface Props {
    children: React.ReactNode;
    className: string;
    onClose(): void;
    title: string;
}

export const defaultProps = {
    children: null,
    className: "",
    title: ""
} as Partial<Props>;
