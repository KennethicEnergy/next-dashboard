import { debug } from "console";
import NextFireJSMiddleware from "nextfirejs/middleware/nextfirejs-middleware";

const nextFireJSMiddlewareOptions = {
	allowRule: "^/_next/.*",
};

const middleware = (req) => {
	return NextFireJSMiddleware({ req, nextFireJSMiddlewareOptions });
}

export default middleware;