import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_fcfbafbc.mjs';

const _page0  = () => import('./chunks/generic_c22e5474.mjs');
const _page1  = () => import('./chunks/index_07cc4802.mjs');
const _page2  = () => import('./chunks/aboutsbc_cafb642d.mjs');
const _page3  = () => import('./chunks/contact_a848384f.mjs');
const _page4  = () => import('./chunks/about_0b8beefa.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/index.astro", _page1],["src/pages/aboutsbc.astro", _page2],["src/pages/contact.astro", _page3],["src/pages/about.astro", _page4]]);
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
