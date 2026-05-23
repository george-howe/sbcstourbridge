import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_ad1ce3b8.mjs';

const _page0  = () => import('./chunks/generic_c22e5474.mjs');
const _page1  = () => import('./chunks/index_c9468938.mjs');
const _page2  = () => import('./chunks/giveawaytsandcs_10dd768e.mjs');
const _page3  = () => import('./chunks/sbcfavebooks_ab723e65.mjs');
const _page4  = () => import('./chunks/aboutsbc_941f7372.mjs');
const _page5  = () => import('./chunks/contact_66dfa639.mjs');
const _page6  = () => import('./chunks/about_60e0dfbf.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/giveawaytsandcs.astro", _page2],["src/pages/sbcfavebooks.astro", _page3],["src/pages/aboutsbc.astro", _page4],["src/pages/contact.astro", _page5],["src/pages/about.astro", _page6]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
