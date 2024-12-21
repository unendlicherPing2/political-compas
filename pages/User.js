import van from "../lib/vanjs-core.js";

const { div, p } = van.tags;

export default (params) => div('User Page', p('userId: ' + params.userId))