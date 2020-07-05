export interface Props extends React.HTMLProps<HTMLInputElement> {
    className: string;
    name: string;
    rootClassName: string;
    value: string;
}

export const defaultProps = {
    className: "",
    rootClassName: "",
    value: ""
} as Partial<Props>;
