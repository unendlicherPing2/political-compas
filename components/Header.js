import van from "../lib/vanjs-core.js";

const { hr, nav, ul, li } = van.tags;

const Header = (link) => nav(
    ul(
        li(link({ name: 'home' }, 'Home')),
        li(link({ name: 'user', params: { userId: 123 } }, 'User')),
    ),
    hr()
);

export default Header