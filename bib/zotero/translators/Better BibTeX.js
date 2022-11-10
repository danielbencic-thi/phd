{
	"translatorID": "ca65189f-8815-4afe-8c8b-8c7c15f0edca",
	"label": "Better BibTeX",
	"description": "exports items in BibTeX format",
	"creator": "Simon Kornblith, Richard Karnesky and Emiliano heyns",
	"target": "bib",
	"minVersion": "4.0.27",
	"maxVersion": "",
	"configOptions": {
		"async": true,
		"getCollections": true,
		"hash": "a7f08bedd4e68bdcd16ece2bc2207aaa6f5afaa62b88bcf6b3120b0073eb3c89"
	},
	"displayOptions": {
		"exportNotes": false,
		"exportFileData": false,
		"useJournalAbbreviation": false,
		"keepUpdated": false,
		"worker": false
	},
	"translatorType": 3,
	"browserSupport": "gcsv",
	"priority": 199,
	"inRepository": false,
	"lastUpdated": "2022-10-29"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"ca65189f-8815-4afe-8c8b-8c7c15f0edca","label":"Better BibTeX","description":"exports items in BibTeX format","creator":"Simon Kornblith, Richard Karnesky and Emiliano heyns","target":"bib","minVersion":"4.0.27","maxVersion":"","configOptions":{"async":true,"getCollections":true},"displayOptions":{"exportNotes":false,"exportFileData":false,"useJournalAbbreviation":false,"keepUpdated":false,"worker":false},"translatorType":3,"browserSupport":"gcsv","priority":199,"inRepository":false}); // assign new data
      
var { detectImport, doExport, doImport } = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/process/browser.js
  var require_browser = __commonJS({
    "node_modules/process/browser.js"(exports, module) {
      init_globals();
      var process2 = module.exports = {};
      var cachedSetTimeout;
      var cachedClearTimeout;
      function defaultSetTimout() {
        throw new Error("setTimeout has not been defined");
      }
      function defaultClearTimeout() {
        throw new Error("clearTimeout has not been defined");
      }
      (function() {
        try {
          if (typeof setTimeout === "function") {
            cachedSetTimeout = setTimeout;
          } else {
            cachedSetTimeout = defaultSetTimout;
          }
        } catch (e) {
          cachedSetTimeout = defaultSetTimout;
        }
        try {
          if (typeof clearTimeout === "function") {
            cachedClearTimeout = clearTimeout;
          } else {
            cachedClearTimeout = defaultClearTimeout;
          }
        } catch (e) {
          cachedClearTimeout = defaultClearTimeout;
        }
      })();
      function runTimeout(fun) {
        if (cachedSetTimeout === setTimeout) {
          return setTimeout(fun, 0);
        }
        if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
          cachedSetTimeout = setTimeout;
          return setTimeout(fun, 0);
        }
        try {
          return cachedSetTimeout(fun, 0);
        } catch (e) {
          try {
            return cachedSetTimeout.call(null, fun, 0);
          } catch (e2) {
            return cachedSetTimeout.call(this, fun, 0);
          }
        }
      }
      function runClearTimeout(marker) {
        if (cachedClearTimeout === clearTimeout) {
          return clearTimeout(marker);
        }
        if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
          cachedClearTimeout = clearTimeout;
          return clearTimeout(marker);
        }
        try {
          return cachedClearTimeout(marker);
        } catch (e) {
          try {
            return cachedClearTimeout.call(null, marker);
          } catch (e2) {
            return cachedClearTimeout.call(this, marker);
          }
        }
      }
      var queue = [];
      var draining = false;
      var currentQueue;
      var queueIndex = -1;
      function cleanUpNextTick() {
        if (!draining || !currentQueue) {
          return;
        }
        draining = false;
        if (currentQueue.length) {
          queue = currentQueue.concat(queue);
        } else {
          queueIndex = -1;
        }
        if (queue.length) {
          drainQueue();
        }
      }
      function drainQueue() {
        if (draining) {
          return;
        }
        var timeout = runTimeout(cleanUpNextTick);
        draining = true;
        var len = queue.length;
        while (len) {
          currentQueue = queue;
          queue = [];
          while (++queueIndex < len) {
            if (currentQueue) {
              currentQueue[queueIndex].run();
            }
          }
          queueIndex = -1;
          len = queue.length;
        }
        currentQueue = null;
        draining = false;
        runClearTimeout(timeout);
      }
      process2.nextTick = function(fun) {
        var args = new Array(arguments.length - 1);
        if (arguments.length > 1) {
          for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
          }
        }
        queue.push(new Item(fun, args));
        if (queue.length === 1 && !draining) {
          runTimeout(drainQueue);
        }
      };
      function Item(fun, array) {
        this.fun = fun;
        this.array = array;
      }
      Item.prototype.run = function() {
        this.fun.apply(null, this.array);
      };
      process2.title = "browser";
      process2.browser = true;
      process2.env = {};
      process2.argv = [];
      process2.version = "";
      process2.versions = {};
      function noop() {
      }
      process2.on = noop;
      process2.addListener = noop;
      process2.once = noop;
      process2.off = noop;
      process2.removeListener = noop;
      process2.removeAllListeners = noop;
      process2.emit = noop;
      process2.prependListener = noop;
      process2.prependOnceListener = noop;
      process2.listeners = function(name) {
        return [];
      };
      process2.binding = function(name) {
        throw new Error("process.binding is not supported");
      };
      process2.cwd = function() {
        return "/";
      };
      process2.chdir = function(dir) {
        throw new Error("process.chdir is not supported");
      };
      process2.umask = function() {
        return 0;
      };
    }
  });

  // setup/loaders/globals.js
  var process, global;
  var init_globals = __esm({
    "setup/loaders/globals.js"() {
      process = require_browser();
      global = Function("return this")();
    }
  });

  // translators/Better BibTeX.ts
  var Better_BibTeX_exports = {};
  __export(Better_BibTeX_exports, {
    detectImport: () => detectImport,
    doExport: () => doExport,
    doImport: () => doImport
  });
  init_globals();

  // translators/lib/translator.ts
  init_globals();

  // gen/preferences/meta.ts
  init_globals();
  var names = [
    "ascii",
    "asciiBibLaTeX",
    "asciiBibTeX",
    "autoAbbrev",
    "autoAbbrevStyle",
    "autoExport",
    "autoExportDelay",
    "autoExportIdleWait",
    "autoExportPathReplaceDiacritics",
    "autoExportPathReplaceDirSep",
    "autoExportPathReplaceSpace",
    "automaticTags",
    "autoPinDelay",
    "auxImport",
    "baseAttachmentPath",
    "biblatexExtendedDateFormat",
    "biblatexExtendedNameFormat",
    "biblatexExtractEprint",
    "bibtexParticleNoOp",
    "bibtexURL",
    "cache",
    "cacheFlushInterval",
    "charmap",
    "citeCommand",
    "citekeyFold",
    "citekeyFormat",
    "citekeyFormatBackup",
    "citekeySearch",
    "csquotes",
    "DOIandURL",
    "exportBibTeXStrings",
    "exportBraceProtection",
    "exportTitleCase",
    "extraMergeCitekeys",
    "extraMergeCSL",
    "extraMergeTeX",
    "git",
    "import",
    "importBibTeXStrings",
    "importCaseProtection",
    "importCitationKey",
    "importExtra",
    "importJabRefAbbreviations",
    "importJabRefStrings",
    "importNoteToExtra",
    "importSentenceCase",
    "importUnknownTexCommand",
    "itemObserverDelay",
    "jabrefFormat",
    "jieba",
    "keyConflictPolicy",
    "keyScope",
    "kuroshiro",
    "language",
    "mapMath",
    "mapText",
    "mapUnicode",
    "parseParticles",
    "patchDates",
    "platform",
    "postscript",
    "postscriptOverride",
    "preferencesOverride",
    "qualityReport",
    "quickCopyEta",
    "quickCopyMode",
    "quickCopyOrgMode",
    "quickCopyPandocBrackets",
    "quickCopySelectLink",
    "rawImports",
    "rawLaTag",
    "relativeFilePaths",
    "retainCache",
    "scrubDatabase",
    "separatorList",
    "separatorNames",
    "skipFields",
    "skipWords",
    "startupProgress",
    "strings",
    "stringsOverride",
    "testing",
    "verbatimFields",
    "warnBulkModify",
    "warnTitleCased"
  ];
  var affects = {
    ascii: ["Better BibLaTeX", "Better BibTeX"],
    asciiBibLaTeX: ["Better BibLaTeX"],
    asciiBibTeX: ["Better BibTeX"],
    autoAbbrev: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    autoAbbrevStyle: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    automaticTags: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    baseAttachmentPath: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    biblatexExtendedDateFormat: ["Better BibLaTeX"],
    biblatexExtendedNameFormat: ["Better BibLaTeX"],
    biblatexExtractEprint: ["Better BibLaTeX", "Better BibTeX"],
    bibtexParticleNoOp: ["Better BibTeX"],
    bibtexURL: ["Better BibTeX"],
    cache: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    charmap: ["Better BibLaTeX", "Better BibTeX"],
    csquotes: ["Better BibLaTeX", "Better BibTeX"],
    DOIandURL: ["Better BibLaTeX", "Better BibTeX"],
    exportBibTeXStrings: ["Better BibLaTeX", "Better BibTeX"],
    exportBraceProtection: ["Better BibLaTeX", "Better BibTeX"],
    exportTitleCase: ["Better BibLaTeX", "Better BibTeX"],
    jabrefFormat: ["Better BibLaTeX", "Better BibTeX"],
    language: ["Better BibLaTeX", "Better BibTeX"],
    mapMath: ["Better BibLaTeX", "Better BibTeX"],
    mapText: ["Better BibLaTeX", "Better BibTeX"],
    mapUnicode: ["Better BibLaTeX", "Better BibTeX"],
    parseParticles: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    postscript: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    qualityReport: ["Better BibLaTeX", "Better BibTeX"],
    rawLaTag: ["Better BibLaTeX", "Better BibTeX"],
    relativeFilePaths: ["Better BibLaTeX", "Better BibTeX"],
    separatorList: ["Better BibLaTeX", "Better BibTeX"],
    separatorNames: ["Better BibLaTeX", "Better BibTeX"],
    skipFields: ["Better BibLaTeX", "Better BibTeX", "Better CSL JSON", "Better CSL YAML"],
    skipWords: ["Better BibLaTeX", "Better BibTeX"],
    strings: ["Better BibLaTeX", "Better BibTeX"]
  };
  var defaults = {
    ascii: "",
    asciiBibLaTeX: false,
    asciiBibTeX: true,
    autoAbbrev: false,
    autoAbbrevStyle: "",
    autoExport: "immediate",
    autoExportDelay: 5,
    autoExportIdleWait: 10,
    autoExportPathReplaceDiacritics: false,
    autoExportPathReplaceDirSep: "-",
    autoExportPathReplaceSpace: " ",
    automaticTags: true,
    autoPinDelay: 0,
    auxImport: false,
    baseAttachmentPath: "",
    biblatexExtendedDateFormat: true,
    biblatexExtendedNameFormat: false,
    biblatexExtractEprint: true,
    bibtexParticleNoOp: false,
    bibtexURL: "off",
    cache: true,
    cacheFlushInterval: 5,
    charmap: "",
    citeCommand: "cite",
    citekeyFold: true,
    citekeyFormat: "auth.lower + shorttitle(3,3) + year",
    citekeyFormatBackup: "",
    citekeySearch: true,
    csquotes: "",
    DOIandURL: "both",
    exportBibTeXStrings: "off",
    exportBraceProtection: true,
    exportTitleCase: true,
    extraMergeCitekeys: false,
    extraMergeCSL: false,
    extraMergeTeX: false,
    git: "config",
    import: true,
    importBibTeXStrings: true,
    importCaseProtection: "as-needed",
    importCitationKey: true,
    importExtra: true,
    importJabRefAbbreviations: true,
    importJabRefStrings: true,
    importNoteToExtra: "",
    importSentenceCase: "on+guess",
    importUnknownTexCommand: "ignore",
    itemObserverDelay: 5,
    jabrefFormat: 0,
    jieba: false,
    keyConflictPolicy: "keep",
    keyScope: "library",
    kuroshiro: false,
    language: "langid",
    mapMath: "",
    mapText: "",
    mapUnicode: "conservative",
    parseParticles: true,
    patchDates: "dateadded=dateAdded, date-added=dateAdded, datemodified=dateModified, date-modified=dateModified",
    platform: "",
    postscript: "",
    postscriptOverride: "",
    preferencesOverride: "",
    qualityReport: false,
    quickCopyEta: "",
    quickCopyMode: "latex",
    quickCopyOrgMode: "zotero",
    quickCopyPandocBrackets: false,
    quickCopySelectLink: "zotero",
    rawImports: false,
    rawLaTag: "#LaTeX",
    relativeFilePaths: false,
    retainCache: false,
    scrubDatabase: false,
    separatorList: "and",
    separatorNames: "and",
    skipFields: "",
    skipWords: "a,ab,aboard,about,above,across,after,against,al,along,amid,among,an,and,anti,around,as,at,before,behind,below,beneath,beside,besides,between,beyond,but,by,d,da,das,de,del,dell,dello,dei,degli,della,dell,delle,dem,den,der,des,despite,die,do,down,du,during,ein,eine,einem,einen,einer,eines,el,en,et,except,for,from,gli,i,il,in,inside,into,is,l,la,las,le,les,like,lo,los,near,nor,of,off,on,onto,or,over,past,per,plus,round,save,since,so,some,sur,than,the,through,to,toward,towards,un,una,unas,under,underneath,une,unlike,uno,unos,until,up,upon,versus,via,von,while,with,within,without,yet,zu,zum",
    startupProgress: "popup",
    strings: "",
    stringsOverride: "",
    testing: false,
    verbatimFields: "url,doi,file,ids,eprint,/^verb[a-z]$/,groups,/^citeulike-linkout-[0-9]+$/, /^bdsk-url-[0-9]+$/",
    warnBulkModify: 10,
    warnTitleCased: false
  };
  var schema = {
    autoExport: {
      preferences: ["asciiBibLaTeX", "asciiBibTeX", "biblatexExtendedNameFormat", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
      displayOptions: ["useJournalAbbreviation", "exportNotes"]
    },
    translator: {
      "BetterBibTeX JSON": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "36a3b0b5-bad0-4a04-b79b-441c7cef77db"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes"
          ]
        },
        cache: false,
        preferences: [],
        displayOptions: ["exportNotes"]
      },
      "Better BibTeX": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "ca65189f-8815-4afe-8c8b-8c7c15f0edca"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibTeX": {
              "type": "boolean"
            },
            "bibtexParticleNoOp": {
              "type": "boolean"
            },
            "bibtexURL": {
              "enum": [
                "off",
                "note",
                "note-url-ish",
                "url",
                "url-ish"
              ]
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibTeX",
            "bibtexParticleNoOp",
            "bibtexURL",
            "DOIandURL",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: ["asciiBibTeX", "bibtexParticleNoOp", "bibtexURL", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"]
      },
      "Better CSL YAML": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "0f238e69-043e-4882-93bf-342de007de19"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: [],
        displayOptions: []
      },
      "Better CSL JSON": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f4b52ab0-f878-4556-85a0-c7aeedd09dfc"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: [],
        displayOptions: []
      },
      "Better BibLaTeX": {
        autoexport: {
          "type": "object",
          "additionalProperties": false,
          "properties": {
            "type": {
              "enum": [
                "collection",
                "library"
              ]
            },
            "id": {
              "type": "integer"
            },
            "path": {
              "type": "string",
              "minLength": 1
            },
            "status": {
              "enum": [
                "scheduled",
                "running",
                "done",
                "error"
              ]
            },
            "translatorID": {
              "const": "f895aa0d-f28e-47fe-b247-2ea77c6ed583"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "error": {
              "type": "string"
            },
            "recursive": {
              "type": "boolean"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "type",
            "id",
            "path",
            "status",
            "translatorID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL"
          ]
        },
        cache: {
          "type": "object",
          "properties": {
            "itemID": {
              "type": "integer"
            },
            "entry": {
              "type": "string"
            },
            "exportNotes": {
              "type": "boolean"
            },
            "useJournalAbbreviation": {
              "type": "boolean"
            },
            "asciiBibLaTeX": {
              "type": "boolean"
            },
            "biblatexExtendedNameFormat": {
              "type": "boolean"
            },
            "DOIandURL": {
              "enum": [
                "both",
                "doi",
                "url"
              ]
            },
            "metadata": {
              "type": "object"
            },
            "meta": {
              "type": "object"
            },
            "$loki": {
              "type": "integer"
            }
          },
          "required": [
            "itemID",
            "exportNotes",
            "useJournalAbbreviation",
            "asciiBibLaTeX",
            "biblatexExtendedNameFormat",
            "DOIandURL",
            "entry"
          ],
          "additionalProperties": false
        },
        preferences: ["asciiBibLaTeX", "biblatexExtendedNameFormat", "DOIandURL"],
        displayOptions: ["exportNotes", "useJournalAbbreviation"]
      }
    }
  };

  // content/client.ts
  init_globals();
  var ctx = typeof self === "undefined" ? void 0 : self;
  var _a;
  var worker = !!((_a = ctx == null ? void 0 : ctx.location) == null ? void 0 : _a.search);
  function clientname() {
    var _a2;
    if (worker)
      return new URLSearchParams(ctx.location.search).get("clientName");
    if (Zotero.clientName)
      return Zotero.clientName;
    if ((_a2 = Zotero.BetterBibTeX) == null ? void 0 : _a2.clientName)
      return Zotero.BetterBibTeX.clientName;
    throw new Error("Unable to detect clientName");
  }
  var clientName = clientname();
  var client = clientName.toLowerCase().replace("-", "");

  // translators/lib/translator.ts
  var cacheDisabler = new class {
    get(target, property) {
      if (property === "collections") {
        target.$cacheable = false;
      }
      return target[property];
    }
  }();
  var Items = class {
    constructor(items) {
      this.items = [];
      this.map = {};
      if (items) {
        this.items = items.map((item) => this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
      } else {
        let item;
        while (item = Zotero.nextItem()) {
          this.items.push(this.map[item.itemID] = this.map[item.itemKey] = new Proxy(item, cacheDisabler));
        }
      }
      this.items.sort((a, b) => {
        const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
        const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
        return ka.localeCompare(kb, void 0, { sensitivity: "base" });
      });
    }
    erase() {
      this.items = [];
      this.map = {};
      this.current = null;
    }
    cacheable(cacheable) {
      for (const item of this.items) {
        item.$cacheable = cacheable;
      }
    }
    *[Symbol.iterator]() {
      for (const item of this.items) {
        yield item;
      }
    }
    get regular() {
      return this._regular();
    }
    *_regular() {
      for (const item of this.items) {
        switch (item.itemType) {
          case "annotation":
          case "note":
          case "attachment":
            break;
          default:
            yield this.current = item;
        }
      }
    }
  };
  var Collections = class {
    constructor(items, collections) {
      this.items = items;
      this.byKey = {};
      if (collections) {
        this.byKey = collections;
      } else if (Zotero.nextCollection) {
        let collection;
        while (collection = Zotero.nextCollection()) {
          this.registerCollection(collection, "");
        }
      }
    }
    erase() {
      this.byKey = {};
    }
    registerCollection(collection, parent) {
      const key = (collection.primary ? collection.primary : collection).key;
      if (this.byKey[key])
        return;
      this.byKey[key] = {
        key,
        parent,
        name: collection.name,
        collections: [],
        items: []
      };
      for (const child of collection.descendents || collection.children) {
        switch (child.type) {
          case "collection":
            this.byKey[key].collections.push(child.key);
            this.registerCollection(child, key);
            break;
          case "item":
            this.byKey[key].items.push(child.id);
            break;
        }
      }
    }
    get collectionTree() {
      return Object.values(this.byKey).filter((coll) => !coll.parent).map((coll) => this.nestedCollection(coll));
    }
    nestedCollection(collection) {
      const nested = {
        key: collection.key,
        name: collection.name,
        items: collection.items.map((itemID) => this.items.map[itemID]).filter((item) => item),
        collections: collection.collections.map((key) => this.nestedCollection(this.byKey[key])).filter((coll) => coll)
      };
      for (const coll of nested.collections) {
        coll.parent = nested;
      }
      return nested;
    }
  };
  function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }
  function collect() {
    const items = new Items();
    return { items, collections: new Collections(items) };
  }
  var Translation = class {
    constructor(translator) {
      this.translator = translator;
      this.export = {
        dir: void 0,
        path: void 0
      };
      this.collections = {};
      this.output = {
        body: "",
        attachments: []
      };
      this.cacheable = true;
      this[translator.label.replace(/[^a-z]/ig, "")] = true;
      this.BetterTeX = this.BetterBibTeX || this.BetterBibLaTeX;
      this.BetterCSL = this.BetterCSLJSON || this.BetterCSLYAML;
      this.options = translator.displayOptions || {};
      this.platform = Zotero.getHiddenPref("better-bibtex.platform");
      this.isJurisM = client === "jurism";
      this.isZotero = !this.isJurisM;
      this.paths = {
        caseSensitive: this.platform !== "mac" && this.platform !== "win",
        sep: this.platform === "win" ? "\\" : "/"
      };
      try {
        if (Zotero.getOption("cache") === false)
          this.cacheable = false;
      } catch (err) {
      }
      for (const key in this.options) {
        if (typeof this.options[key] === "boolean") {
          this.options[key] = Zotero.getOption(key);
        } else {
          this.options[key] = !!Zotero.getOption(key);
        }
      }
      this.preferences = Object.entries(defaults).reduce((acc, [pref, dflt]) => {
        var _a2, _b;
        acc[pref] = (_b = (_a2 = this.getPreferenceOverride(pref)) != null ? _a2 : Zotero.getHiddenPref(`better-bibtex.${pref}`)) != null ? _b : dflt;
        return acc;
      }, {});
      try {
        this.preferences.texmap = JSON.parse(this.preferences.charmap);
      } catch (err) {
        this.preferences.texmap = {};
      }
      this.importToExtra = {};
      this.preferences.importNoteToExtra.toLowerCase().split(/\s*,\s*/).filter((field) => field).forEach((field) => {
        this.importToExtra[field.replace(/\s*=.*/, "")] = field.match(/\s*=\s*force$/) ? "force" : "plain";
      });
      this.skipFields = this.preferences.skipFields.toLowerCase().split(",").map((field) => this.typefield(field)).filter((s) => s);
      this.skipField = this.skipFields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, {});
      let m;
      this.verbatimFields = this.preferences.verbatimFields.toLowerCase().split(",").map((field) => (m = field.trim().match(/^[/](.+)[/]$/)) ? new RegExp(m[1], "i") : this.typefield(field)).filter((s) => s);
      if (!this.verbatimFields.length)
        this.verbatimFields = null;
      this.csquotes = this.preferences.csquotes ? { open: this.preferences.csquotes[0], close: this.preferences.csquotes[1] } : null;
      this.preferences.testing = Zotero.getHiddenPref("better-bibtex.testing");
    }
    get exportDir() {
      this.input.items.current.$cacheable = false;
      return this.export.dir;
    }
    get exportPath() {
      this.input.items.current.$cacheable = false;
      return this.export.path;
    }
    typefield(field) {
      field = field.trim();
      if (field.startsWith("bibtex."))
        return this.BetterBibTeX ? field.replace(/^bibtex\./, "") : "";
      if (field.startsWith("biblatex."))
        return this.BetterBibLaTeX ? field.replace(/^biblatex\./, "") : "";
      return field;
    }
    static Import(translator) {
      return new this(translator);
    }
    static Export(translator, input) {
      var _a2, _b, _c, _d;
      const translation = new this(translator);
      translation.input = input;
      translation.export = {
        dir: Zotero.getOption("exportDir"),
        path: Zotero.getOption("exportPath")
      };
      if ((_a2 = translation.export.dir) == null ? void 0 : _a2.endsWith(translation.paths.sep))
        translation.export.dir = translation.export.dir.slice(0, -1);
      translation.unicode = !translation.preferences[`ascii${translator.label.replace(/Better /, "")}`] || false;
      if (translation.preferences.baseAttachmentPath && (translation.export.dir === translation.preferences.baseAttachmentPath || ((_b = translation.export.dir) == null ? void 0 : _b.startsWith(translation.preferences.baseAttachmentPath + translation.paths.sep)))) {
        translation.preferences.relativeFilePaths = true;
      }
      translation.cacheable = translation.cacheable && translation.preferences.cache && !(translation.options.exportFileData || translation.preferences.relativeFilePaths || translation.preferences.baseAttachmentPath && ((_c = translation.export.dir) == null ? void 0 : _c.startsWith(translation.preferences.baseAttachmentPath)));
      if (translation.BetterTeX) {
        translation.preferences.separatorList = translation.preferences.separatorList.trim();
        translation.preferences.separatorNames = translation.preferences.separatorNames.trim();
        translation.and = {
          list: {
            re: new RegExp(escapeRegExp(translation.preferences.separatorList), "g"),
            repl: ` {${translation.preferences.separatorList}} `
          },
          names: {
            re: new RegExp(` ${escapeRegExp(translation.preferences.separatorNames)} `, "g"),
            repl: ` {${translation.preferences.separatorNames}} `
          }
        };
        translation.preferences.separatorList = ` ${translation.preferences.separatorList} `;
        translation.preferences.separatorNames = ` ${translation.preferences.separatorNames} `;
      }
      if (translation.preferences.testing && typeof __estrace === "undefined" && ((_d = schema.translator[translator.label]) == null ? void 0 : _d.cache)) {
        const ignored = {
          testing: true,
          texmap: true
        };
        translation.preferences = new Proxy(translation.preferences, {
          set: (object, property, _value) => {
            throw new TypeError(`Unexpected set of preference ${String(property)}`);
          },
          get: (object, property) => {
            var _a3;
            if (property === "toJSON")
              return object[property];
            if (!ignored[property]) {
              if (!names.includes(property))
                throw new TypeError(`Unsupported preference ${property}`);
              if (!((_a3 = affects[property]) == null ? void 0 : _a3.includes(translator.label)))
                throw new TypeError(`Preference ${property} claims not to affect ${translator.label}`);
            }
            return object[property];
          }
        });
      }
      translation.input.items.cacheable(translation.cacheable);
      translation.collections = translation.input.collections.byKey;
      return translation;
    }
    erase() {
      this.input.items.erase();
      this.input.collections.erase();
      this.output.body = "";
      this.output.attachments = [];
    }
    saveAttachments() {
      var _a2;
      if (!((_a2 = this.output) == null ? void 0 : _a2.attachments.length))
        return;
      for (const attachment of this.output.attachments) {
        attachment.saveFile(attachment.defaultPath, true);
      }
    }
    getPreferenceOverride(pref) {
      try {
        const override = Zotero.getOption(`preference_${pref}`);
        if (typeof override !== "undefined")
          this.cacheable = false;
        return override;
      } catch (err) {
        return void 0;
      }
    }
  };

  // content/escape.ts
  init_globals();
  function html(str) {
    const entity = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;"
    };
    return str.replace(/[<>&"']/g, (c) => entity[c] || `&#${c.charCodeAt(0)};`);
  }

  // translators/Better BibTeX.ts
  function doExport() {
    const translation = Translation.Export(ZOTERO_TRANSLATOR_INFO, collect());
    Zotero.BetterBibTeX.generateBibTeX(translation);
    translation.saveAttachments();
    Zotero.write(translation.output.body);
    translation.erase();
  }
  function detectImport() {
    const maxChars = 1048576;
    const chunk = 4096;
    let inComment = false;
    let block = "";
    let buffer = "";
    let chr = "";
    let charsRead = 0;
    const re = /^\s*@[a-zA-Z]+[({]/;
    while ((buffer = Zotero.read(chunk)) && charsRead < maxChars) {
      Zotero.debug(`Scanning ${buffer.length} characters for BibTeX`);
      charsRead += buffer.length;
      for (let i = 0; i < buffer.length; i++) {
        chr = buffer[i];
        if (inComment && chr !== "\r" && chr !== "\n")
          continue;
        inComment = false;
        if (chr === "%") {
          block = "";
          inComment = true;
        } else if ((chr === "\n" || chr === "\r" || i === buffer.length - 1) && block) {
          if (re.test(block))
            return true;
          block = "";
        } else if (!" \n\r	".includes(chr)) {
          block += chr;
        }
      }
    }
  }
  function importGroup(group, itemIDs, root = null) {
    const collection = new Zotero.Collection();
    collection.type = "collection";
    collection.name = group.name;
    collection.children = group.entries.filter((citekey) => itemIDs[citekey]).map((citekey) => ({ type: "item", id: itemIDs[citekey] }));
    for (const subgroup of group.groups || []) {
      collection.children.push(importGroup(subgroup, itemIDs));
    }
    if (root)
      collection.complete();
    return collection;
  }
  async function doImport() {
    const translation = Translation.Import(ZOTERO_TRANSLATOR_INFO);
    let read;
    let input = "";
    while ((read = Zotero.read(1048576)) !== false) {
      input += read;
    }
    if (translation.preferences.strings && translation.preferences.importBibTeXStrings)
      input = `${translation.preferences.strings}
${input}`;
    const bib = await Zotero.BetterBibTeX.parseBibTeX(input, translation);
    const errors = bib.errors;
    const whitelist = bib.comments.filter((comment) => comment.startsWith("zotero-better-bibtex:whitelist:")).map((comment) => comment.toLowerCase().replace(/\s/g, "").split(":").pop().split(",").filter((key) => key))[0];
    const itemIDS = {};
    let imported = 0;
    let id = 0;
    for (const bibtex of bib.entries) {
      if (bibtex.key && whitelist && !whitelist.includes(bibtex.key.toLowerCase()))
        continue;
      id++;
      if (bibtex.key)
        itemIDS[bibtex.key] = id;
      try {
        const builder = new translation.ZoteroItem(translation, id, bibtex, bib.jabref, errors);
        const item = builder.import(new Zotero.Item(builder.type));
        if (item)
          await item.complete();
      } catch (err) {
        Zotero.debug("bbt import error:", err);
        errors.push({ message: err.message });
      }
      imported += 1;
      Zotero.setProgress(imported / bib.entries.length * 100);
    }
    for (const group of bib.jabref.root || []) {
      importGroup(group, itemIDS, true);
    }
    if (errors.length) {
      const item = new Zotero.Item("note");
      item.note = "Import errors found: <ul>";
      for (const err of errors) {
        item.note += "<li>";
        if (err.line) {
          item.note += `line ${err.line}`;
          if (err.column)
            item.note += `, column ${err.column}`;
          item.note += ": ";
        }
        item.note += html(err.message);
        if (err.source)
          item.note += `<pre>${html(err.source)}</pre>`;
        item.note += "</li>";
      }
      item.note += "</ul>";
      item.tags = [{ tag: "#Better BibTeX import error", type: 1 }];
      await item.complete();
    }
    Zotero.setProgress(100);
  }
  return __toCommonJS(Better_BibTeX_exports);
})();
