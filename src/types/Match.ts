interface Match<Params> {
    isExact: boolean;
    params: Params;
    path: string;
    url: string;
}

export default Match;
