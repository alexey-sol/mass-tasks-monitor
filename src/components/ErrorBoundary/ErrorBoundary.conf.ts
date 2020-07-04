export interface Props {
    children: React.ReactNode;
}

export interface State {
    error: Error | null;
}

export const defaultProps = {
    children: null
} as Partial<Props>;
