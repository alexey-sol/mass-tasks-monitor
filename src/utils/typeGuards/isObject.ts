import Indexer from "types/Indexer";

function isObject (
    objectToCheck: unknown
): objectToCheck is Indexer {
    return (
        typeof objectToCheck === "object" &&
        (objectToCheck as object).constructor.name === "Object"
    );
}

export default isObject;
