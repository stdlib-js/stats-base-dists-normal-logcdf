// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-ln@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-log1p@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfc@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-erfcx@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-constant-function@esm/index.mjs";import{factory as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-degenerate-logcdf@esm/index.mjs";function l(s,a,o){var l;return d(s)||d(a)||d(o)||o<0?NaN:0===o?s<a?m:0:(l=(s-a)/o)<-1?t(r(.7071067811865475*-l)/2)-n(l)/2:e(-i(.7071067811865475*l)/2)}function j(s,m){return d(s)||d(m)||m<0?a(NaN):0===m?o(s):function(d){var a=(d-s)/m;if(a<-1)return t(r(.7071067811865475*-a)/2)-n(a)/2;return e(-i(.7071067811865475*a)/2)}}s(l,"factory",j);export{l as default,j as factory};
//# sourceMappingURL=index.mjs.map
