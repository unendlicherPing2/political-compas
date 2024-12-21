import createCone from "./lib/van-cone.js";
import van from "./lib/vanjs-core.js";
import Header from "./components/Header.js";
import Home from "./pages/Home.js";
import User from "./pages/User.js";

const { div } = van.tags;

const routerElement = div({ id: "layout" });
const { link, route } = createCone({ routerElement: routerElement });

route("home", "/", Home);
route("user", "/user/:userId", User);

const App = () =>
    div(
        Header(link),
        routerElement
    );

document.body.replaceChildren(App());