import { RouteComponentProps } from "react-router-dom";

import Match from "types/Match";

interface MatchParams {
    projectId: string;
}

export interface Props extends RouteComponentProps {
    match: Match<MatchParams>;
}
