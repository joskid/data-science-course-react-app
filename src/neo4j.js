import neo4j from "neo4j-driver";

export const driver = neo4j.driver(
    process.env.REACT_APP_NEO4J_URI,
    neo4j.auth.basic(
        process.env.REACT_APP_NEO4J_USER,
        process.env.REACT_APP_NEO4J_PASSWORD
    )
)