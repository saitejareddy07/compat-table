var flag = "flagged";
/* jshint unused:false */
var strict = "strict";
var fallthrough = "needs-polyfill-or-native";

var babel = {
  regenerator: {
    val: true,
    note_id: "babel-regenerator",
    note_html: "This feature requires native generators or <code>regenerator-runtime</code>, it's a part of <code>babel-polyfill</code> or <code>babel-runtime</code>."
  }
};

var typescript = {
  corejs: {
    val: true,
    note_id: "typescript-core-js",
    note_html: "This feature is supported when using TypeScript with <a href='https://github.com/zloirock/core-js'>core-js</a>, or when a native ES6 host is used."
  },
  fallthrough: {
    val: fallthrough,
    note_id: "typescript-es6",
    note_html: "TypeScript's compiler will accept code using this feature if the <code>--target ES6</code> flag is set, but passes it through unmodified and does not supply a runtime polyfill."
  },
  asyncawait: {
    val: true,
    note_id: "typescript-async-await",
    note_html: "TypeScript <code>async</code> / <code>await</code> requires native generators support."
  },
};

var firefox = {
  developer: {
    val: false,
    note_id: "firefox-developer",
    note_html: "The feature is enabled by default only in Firefox Developer and Firefox Nightly."
  },
  nightly: {
    val: false,
    note_id: "firefox-nightly",
    note_html: "The feature is enabled by default only in Firefox Nightly."
  }
};

var sparseNote = {
  val: true,
  note_id: 'sparse_arrays',
  note_html: 'Internet Explorer 6 - 8 do not differentiate between a dense array with undefined values, and a sparse array. Specifically, `0 in [,]` and `0 in [undefined]` both yield false - whereas in a compliant browser, the former would give `false`, the latter `true`. As such, ES5 array iteration methods can only be shimmed reliably when dealing with dense arrays.'
};

module.exports = {
  flag: flag,
  strict: strict,
  fallthrough: fallthrough,
  babel: babel,
  typescript: typescript,
  firefox: firefox,
  sparseNote: sparseNote,
};
