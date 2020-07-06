export interface Props {
    onClose(): void;
    text: string;
    theme: "error" | "success" | "warning";
}

export const defaultProps = {
    text: "",
    theme: "success"
} as Partial<Props>;
