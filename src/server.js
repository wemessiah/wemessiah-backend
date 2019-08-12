require("dotenv").config();
import { GraphQLServer } from "graphql-yoga"; // GraphQLServer에는 express 서버가 내장되어있다
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({ schema });

server.express.use(logger("dev"));

server.start({ port: PORT }, () => console.log(`Server running on port ${PORT}`));
