export interface Props {
    className: string;
    disabled: boolean;
    onClick(event: React.FormEvent): void;
    text: string;
}

export const defaultProps = {
    className: "",
    disabled: false
} as Partial<Props>;
