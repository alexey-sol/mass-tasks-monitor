export interface Props {
    children: React.ReactNode;
    onClose(): void;
    rootClassName: string;
}

export const defaultProps = {
    children: null,
    rootClassName: ""
} as Partial<Props>;
