{
	"translatorID": "a515a220-6fef-45ea-9842-8025dfebcc8f",
	"label": "Better BibTeX Citation Key Quick Copy",
	"description": "exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents",
	"creator": "Emiliano heyns",
	"target": "txt",
	"minVersion": "4.0.27",
	"translatorType": 2,
	"browserSupport": "gcsv",
	"priority": 100,
	"displayOptions": {
		"quickCopyMode": ""
	},
	"inRepository": false,
	"configOptions": {
		"hash": "a7b124ebafb8b441527dd64dc014074e956683b2547e64401380e170ffbc3ab0"
	},
	"lastUpdated": "2022-10-17"
}

ZOTERO_CONFIG = {"GUID":"zotero@chnm.gmu.edu","ID":"zotero","CLIENT_NAME":"Zotero","DOMAIN_NAME":"zotero.org","PRODUCER":"Digital Scholar","PRODUCER_URL":"https://digitalscholar.org","REPOSITORY_URL":"https://repo.zotero.org/repo/","BASE_URI":"http://zotero.org/","WWW_BASE_URL":"https://www.zotero.org/","PROXY_AUTH_URL":"https://zoteroproxycheck.s3.amazonaws.com/test","API_URL":"https://api.zotero.org/","STREAMING_URL":"wss://stream.zotero.org/","SERVICES_URL":"https://services.zotero.org/","API_VERSION":3,"CONNECTOR_MIN_VERSION":"5.0.39","PREF_BRANCH":"extensions.zotero.","BOOKMARKLET_ORIGIN":"https://www.zotero.org","BOOKMARKLET_URL":"https://www.zotero.org/bookmarklet/","START_URL":"https://www.zotero.org/start","QUICK_START_URL":"https://www.zotero.org/support/quick_start_guide","PDF_TOOLS_URL":"https://www.zotero.org/download/xpdf/","SUPPORT_URL":"https://www.zotero.org/support/","SYNC_INFO_URL":"https://www.zotero.org/support/sync","TROUBLESHOOTING_URL":"https://www.zotero.org/support/getting_help","FEEDBACK_URL":"https://forums.zotero.org/","CONNECTORS_URL":"https://www.zotero.org/download/connectors","CHANGELOG_URL":"https://www.zotero.org/support/changelog","CREDITS_URL":"https://www.zotero.org/support/credits_and_acknowledgments","LICENSING_URL":"https://www.zotero.org/support/licensing","GET_INVOLVED_URL":"https://www.zotero.org/getinvolved","DICTIONARIES_URL":"https://download.zotero.org/dictionaries/"}

        if (typeof ZOTERO_TRANSLATOR_INFO === 'undefined') var ZOTERO_TRANSLATOR_INFO = {}; // declare if not declared
        Object.assign(ZOTERO_TRANSLATOR_INFO, {"translatorID":"a515a220-6fef-45ea-9842-8025dfebcc8f","label":"Better BibTeX Citation Key Quick Copy","description":"exports citations to be copy-pasted into your LaTeX/Markdown /Org-mode/etc documents","creator":"Emiliano heyns","target":"txt","minVersion":"4.0.27","translatorType":2,"browserSupport":"gcsv","priority":100,"displayOptions":{"quickCopyMode":""},"inRepository":false}); // assign new data
      
var { doExport } = (() => {
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

  // translators/Better BibTeX Citation Key Quick Copy.ts
  var Better_BibTeX_Citation_Key_Quick_Copy_exports = {};
  __export(Better_BibTeX_Citation_Key_Quick_Copy_exports, {
    doExport: () => doExport
  });
  init_globals();

  // gen/items/simplify.ts
  init_globals();

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

  // gen/items/simplify.ts
  var zotero = client === "zotero";
  var jurism = !zotero;
  function unalias(item, { scrub = true } = {}) {
    delete item.inPublications;
    let v;
    if (v = item.dateDecided || item.issueDate || item.dateEnacted)
      item.date = v;
    if (scrub) {
      delete item.dateDecided;
      delete item.issueDate;
      delete item.dateEnacted;
    }
    if (v = item.artworkMedium || item.audioRecordingFormat || item.videoRecordingFormat || item.interviewMedium || item.audioFileType)
      item.medium = v;
    if (scrub) {
      delete item.artworkMedium;
      delete item.audioRecordingFormat;
      delete item.videoRecordingFormat;
      delete item.interviewMedium;
      delete item.audioFileType;
    }
    if (v = item.billNumber || item.docketNumber || item.patentNumber || item.episodeNumber || item.reportNumber || item.publicLawNumber)
      item.number = v;
    if (scrub) {
      delete item.billNumber;
      delete item.docketNumber;
      delete item.patentNumber;
      delete item.episodeNumber;
      delete item.reportNumber;
      delete item.publicLawNumber;
    }
    if (v = item.codePages || item.firstPage)
      item.pages = v;
    if (scrub) {
      delete item.codePages;
      delete item.firstPage;
    }
    if (v = item.blogTitle || item.bookTitle || item.proceedingsTitle || item.dictionaryTitle || item.encyclopediaTitle || item.forumTitle || item.programTitle || item.websiteTitle)
      item.publicationTitle = v;
    if (scrub) {
      delete item.blogTitle;
      delete item.bookTitle;
      delete item.proceedingsTitle;
      delete item.dictionaryTitle;
      delete item.encyclopediaTitle;
      delete item.forumTitle;
      delete item.programTitle;
      delete item.websiteTitle;
    }
    if (v = item.label || item.company || item.distributor || item.network || item.university || item.studio)
      item.publisher = v;
    if (scrub) {
      delete item.label;
      delete item.company;
      delete item.distributor;
      delete item.network;
      delete item.university;
      delete item.studio;
    }
    if (v = item.caseName || item.subject || item.nameOfAct)
      item.title = v;
    if (scrub) {
      delete item.caseName;
      delete item.subject;
      delete item.nameOfAct;
    }
    if (v = item.websiteType || item.genre || item.postType || item.letterType || item.manuscriptType || item.mapType || item.presentationType || item.reportType || item.thesisType)
      item.type = v;
    if (scrub) {
      delete item.websiteType;
      delete item.genre;
      delete item.postType;
      delete item.letterType;
      delete item.manuscriptType;
      delete item.mapType;
      delete item.presentationType;
      delete item.reportType;
      delete item.thesisType;
    }
    if (v = item.codeVolume || item.reporterVolume)
      item.volume = v;
    if (scrub) {
      delete item.codeVolume;
      delete item.reporterVolume;
    }
    if (zotero) {
      if (v = item.documentNumber || item.archiveID)
        item.number = v;
      if (scrub) {
        delete item.documentNumber;
        delete item.archiveID;
      }
      if (v = item.repository || item.institution)
        item.publisher = v;
      if (scrub) {
        delete item.repository;
        delete item.institution;
      }
    }
    if (jurism) {
      if (item.release)
        item.edition = item.release;
      if (scrub) {
        delete item.release;
      }
      if (item.bookAbbreviation)
        item.journalAbbreviation = item.bookAbbreviation;
      if (scrub) {
        delete item.bookAbbreviation;
      }
      if (item.regulatoryBody)
        item.legislativeBody = item.regulatoryBody;
      if (scrub) {
        delete item.regulatoryBody;
      }
      if (item.treatyNumber)
        item.number = item.treatyNumber;
      if (scrub) {
        delete item.treatyNumber;
      }
      if (v = item.album || item.reporter)
        item.publicationTitle = v;
      if (scrub) {
        delete item.album;
        delete item.reporter;
      }
      if (item.assemblyNumber)
        item.seriesNumber = item.assemblyNumber;
      if (scrub) {
        delete item.assemblyNumber;
      }
      if (v = item.sessionType || item.regulationType)
        item.type = v;
      if (scrub) {
        delete item.sessionType;
        delete item.regulationType;
      }
    }
  }
  function simplifyForExport(item, { dropAttachments = false, scrub = true } = {}) {
    unalias(item, { scrub });
    if (item.filingDate)
      item.filingDate = item.filingDate.replace(/^0000-00-00 /, "");
    if (item.creators) {
      for (const creator of item.creators) {
        if (creator.fieldMode) {
          creator.name = creator.name || creator.lastName;
          delete creator.lastName;
          delete creator.firstName;
          delete creator.fieldMode;
        }
      }
    }
    if (item.itemType === "attachment" || item.itemType === "note") {
      delete item.attachments;
      delete item.notes;
    } else {
      item.attachments = !dropAttachments && item.attachments || [];
    }
    return item;
  }

  // node_modules/eta/dist/eta.es.js
  init_globals();

  // setup/shims/fs.js
  init_globals();
  function readFileSync(filename) {
    if (filename.startsWith("resource:"))
      return Zotero.File.getContentsFromURL(filename);
    throw new Exception(`could not read ${JSON.stringify(filename)}`);
  }
  function existsSync(filename) {
    throw new Exception("not implemented");
  }

  // setup/shims/path.js
  init_globals();
  function dirname(filename) {
    return OS.Path.dirname(filename);
  }
  function resolve(path) {
    throw "not implemented";
  }
  function extname(filename) {
    return filename.includes(".") ? "." + filename.split(".").pop() : "";
  }

  // node_modules/eta/dist/eta.es.js
  function setPrototypeOf(obj, proto) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(obj, proto);
    } else {
      obj.__proto__ = proto;
    }
  }
  function EtaErr(message) {
    var err = new Error(message);
    setPrototypeOf(err, EtaErr.prototype);
    return err;
  }
  EtaErr.prototype = Object.create(Error.prototype, {
    name: { value: "Eta Error", enumerable: false }
  });
  function ParseErr(message, str, indx) {
    var whitespace = str.slice(0, indx).split(/\n/);
    var lineNo = whitespace.length;
    var colNo = whitespace[lineNo - 1].length + 1;
    message += " at line " + lineNo + " col " + colNo + ":\n\n  " + str.split(/\n/)[lineNo - 1] + "\n  " + Array(colNo).join(" ") + "^";
    throw EtaErr(message);
  }
  var promiseImpl = new Function("return this")().Promise;
  function getAsyncFunctionConstructor() {
    try {
      return new Function("return (async function(){}).constructor")();
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw EtaErr("This environment doesn't support async/await");
      } else {
        throw e;
      }
    }
  }
  function trimLeft(str) {
    if (!!String.prototype.trimLeft) {
      return str.trimLeft();
    } else {
      return str.replace(/^\s+/, "");
    }
  }
  function trimRight(str) {
    if (!!String.prototype.trimRight) {
      return str.trimRight();
    } else {
      return str.replace(/\s+$/, "");
    }
  }
  function hasOwnProp(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }
  function copyProps(toObj, fromObj) {
    for (var key in fromObj) {
      if (hasOwnProp(fromObj, key)) {
        toObj[key] = fromObj[key];
      }
    }
    return toObj;
  }
  function trimWS(str, config2, wsLeft, wsRight) {
    var leftTrim;
    var rightTrim;
    if (Array.isArray(config2.autoTrim)) {
      leftTrim = config2.autoTrim[1];
      rightTrim = config2.autoTrim[0];
    } else {
      leftTrim = rightTrim = config2.autoTrim;
    }
    if (wsLeft || wsLeft === false) {
      leftTrim = wsLeft;
    }
    if (wsRight || wsRight === false) {
      rightTrim = wsRight;
    }
    if (!rightTrim && !leftTrim) {
      return str;
    }
    if (leftTrim === "slurp" && rightTrim === "slurp") {
      return str.trim();
    }
    if (leftTrim === "_" || leftTrim === "slurp") {
      str = trimLeft(str);
    } else if (leftTrim === "-" || leftTrim === "nl") {
      str = str.replace(/^(?:\r\n|\n|\r)/, "");
    }
    if (rightTrim === "_" || rightTrim === "slurp") {
      str = trimRight(str);
    } else if (rightTrim === "-" || rightTrim === "nl") {
      str = str.replace(/(?:\r\n|\n|\r)$/, "");
    }
    return str;
  }
  var escMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  };
  function replaceChar(s) {
    return escMap[s];
  }
  function XMLEscape(str) {
    var newStr = String(str);
    if (/[&<>"']/.test(newStr)) {
      return newStr.replace(/[&<>"']/g, replaceChar);
    } else {
      return newStr;
    }
  }
  var templateLitReg = /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g;
  var singleQuoteReg = /'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g;
  var doubleQuoteReg = /"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g;
  function escapeRegExp(string) {
    return string.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&");
  }
  function parse(str, config2) {
    var buffer = [];
    var trimLeftOfNextStr = false;
    var lastIndex = 0;
    var parseOptions = config2.parse;
    if (config2.plugins) {
      for (var i = 0; i < config2.plugins.length; i++) {
        var plugin = config2.plugins[i];
        if (plugin.processTemplate) {
          str = plugin.processTemplate(str, config2);
        }
      }
    }
    if (config2.rmWhitespace) {
      str = str.replace(/[\r\n]+/g, "\n").replace(/^\s+|\s+$/gm, "");
    }
    templateLitReg.lastIndex = 0;
    singleQuoteReg.lastIndex = 0;
    doubleQuoteReg.lastIndex = 0;
    function pushString(strng, shouldTrimRightOfString) {
      if (strng) {
        strng = trimWS(
          strng,
          config2,
          trimLeftOfNextStr,
          shouldTrimRightOfString
        );
        if (strng) {
          strng = strng.replace(/\\|'/g, "\\$&").replace(/\r\n|\n|\r/g, "\\n");
          buffer.push(strng);
        }
      }
    }
    var prefixes = [parseOptions.exec, parseOptions.interpolate, parseOptions.raw].reduce(function(accumulator, prefix2) {
      if (accumulator && prefix2) {
        return accumulator + "|" + escapeRegExp(prefix2);
      } else if (prefix2) {
        return escapeRegExp(prefix2);
      } else {
        return accumulator;
      }
    }, "");
    var parseOpenReg = new RegExp("([^]*?)" + escapeRegExp(config2.tags[0]) + "(-|_)?\\s*(" + prefixes + ")?\\s*", "g");
    var parseCloseReg = new RegExp("'|\"|`|\\/\\*|(\\s*(-|_)?" + escapeRegExp(config2.tags[1]) + ")", "g");
    var m;
    while (m = parseOpenReg.exec(str)) {
      lastIndex = m[0].length + m.index;
      var precedingString = m[1];
      var wsLeft = m[2];
      var prefix = m[3] || "";
      pushString(precedingString, wsLeft);
      parseCloseReg.lastIndex = lastIndex;
      var closeTag = void 0;
      var currentObj = false;
      while (closeTag = parseCloseReg.exec(str)) {
        if (closeTag[1]) {
          var content = str.slice(lastIndex, closeTag.index);
          parseOpenReg.lastIndex = lastIndex = parseCloseReg.lastIndex;
          trimLeftOfNextStr = closeTag[2];
          var currentType = prefix === parseOptions.exec ? "e" : prefix === parseOptions.raw ? "r" : prefix === parseOptions.interpolate ? "i" : "";
          currentObj = { t: currentType, val: content };
          break;
        } else {
          var char = closeTag[0];
          if (char === "/*") {
            var commentCloseInd = str.indexOf("*/", parseCloseReg.lastIndex);
            if (commentCloseInd === -1) {
              ParseErr("unclosed comment", str, closeTag.index);
            }
            parseCloseReg.lastIndex = commentCloseInd;
          } else if (char === "'") {
            singleQuoteReg.lastIndex = closeTag.index;
            var singleQuoteMatch = singleQuoteReg.exec(str);
            if (singleQuoteMatch) {
              parseCloseReg.lastIndex = singleQuoteReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          } else if (char === '"') {
            doubleQuoteReg.lastIndex = closeTag.index;
            var doubleQuoteMatch = doubleQuoteReg.exec(str);
            if (doubleQuoteMatch) {
              parseCloseReg.lastIndex = doubleQuoteReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          } else if (char === "`") {
            templateLitReg.lastIndex = closeTag.index;
            var templateLitMatch = templateLitReg.exec(str);
            if (templateLitMatch) {
              parseCloseReg.lastIndex = templateLitReg.lastIndex;
            } else {
              ParseErr("unclosed string", str, closeTag.index);
            }
          }
        }
      }
      if (currentObj) {
        buffer.push(currentObj);
      } else {
        ParseErr("unclosed tag", str, m.index + precedingString.length);
      }
    }
    pushString(str.slice(lastIndex, str.length), false);
    if (config2.plugins) {
      for (var i = 0; i < config2.plugins.length; i++) {
        var plugin = config2.plugins[i];
        if (plugin.processAST) {
          buffer = plugin.processAST(buffer, config2);
        }
      }
    }
    return buffer;
  }
  function compileToString(str, config2) {
    var buffer = parse(str, config2);
    var res = "var tR='',__l,__lP" + (config2.include ? ",include=E.include.bind(E)" : "") + (config2.includeFile ? ",includeFile=E.includeFile.bind(E)" : "") + "\nfunction layout(p,d){__l=p;__lP=d}\n" + (config2.useWith ? "with(" + config2.varName + "||{}){" : "") + compileScope(buffer, config2) + (config2.includeFile ? "if(__l)tR=" + (config2.async ? "await " : "") + ("includeFile(__l,Object.assign(" + config2.varName + ",{body:tR},__lP))\n") : config2.include ? "if(__l)tR=" + (config2.async ? "await " : "") + ("include(__l,Object.assign(" + config2.varName + ",{body:tR},__lP))\n") : "") + "if(cb){cb(null,tR)} return tR" + (config2.useWith ? "}" : "");
    if (config2.plugins) {
      for (var i = 0; i < config2.plugins.length; i++) {
        var plugin = config2.plugins[i];
        if (plugin.processFnString) {
          res = plugin.processFnString(res, config2);
        }
      }
    }
    return res;
  }
  function compileScope(buff, config2) {
    var i = 0;
    var buffLength = buff.length;
    var returnStr = "";
    for (i; i < buffLength; i++) {
      var currentBlock = buff[i];
      if (typeof currentBlock === "string") {
        var str = currentBlock;
        returnStr += "tR+='" + str + "'\n";
      } else {
        var type = currentBlock.t;
        var content = currentBlock.val || "";
        if (type === "r") {
          if (config2.filter) {
            content = "E.filter(" + content + ")";
          }
          returnStr += "tR+=" + content + "\n";
        } else if (type === "i") {
          if (config2.filter) {
            content = "E.filter(" + content + ")";
          }
          if (config2.autoEscape) {
            content = "E.e(" + content + ")";
          }
          returnStr += "tR+=" + content + "\n";
        } else if (type === "e") {
          returnStr += content + "\n";
        }
      }
    }
    return returnStr;
  }
  var Cacher = function() {
    function Cacher2(cache) {
      this.cache = cache;
    }
    Cacher2.prototype.define = function(key, val) {
      this.cache[key] = val;
    };
    Cacher2.prototype.get = function(key) {
      return this.cache[key];
    };
    Cacher2.prototype.remove = function(key) {
      delete this.cache[key];
    };
    Cacher2.prototype.reset = function() {
      this.cache = {};
    };
    Cacher2.prototype.load = function(cacheObj) {
      copyProps(this.cache, cacheObj);
    };
    return Cacher2;
  }();
  var templates = new Cacher({});
  function includeHelper(templateNameOrPath, data) {
    var template = this.templates.get(templateNameOrPath);
    if (!template) {
      throw EtaErr('Could not fetch template "' + templateNameOrPath + '"');
    }
    return template(data, this);
  }
  var config = {
    async: false,
    autoEscape: true,
    autoTrim: [false, "nl"],
    cache: false,
    e: XMLEscape,
    include: includeHelper,
    parse: {
      exec: "",
      interpolate: "=",
      raw: "~"
    },
    plugins: [],
    rmWhitespace: false,
    tags: ["<%", "%>"],
    templates,
    useWith: false,
    varName: "it"
  };
  function getConfig(override, baseConfig) {
    var res = {};
    copyProps(res, config);
    if (baseConfig) {
      copyProps(res, baseConfig);
    }
    if (override) {
      copyProps(res, override);
    }
    return res;
  }
  function compile(str, config2) {
    var options = getConfig(config2 || {});
    var ctor = options.async ? getAsyncFunctionConstructor() : Function;
    try {
      return new ctor(
        options.varName,
        "E",
        "cb",
        compileToString(str, options)
      );
    } catch (e) {
      if (e instanceof SyntaxError) {
        throw EtaErr(
          "Bad template syntax\n\n" + e.message + "\n" + Array(e.message.length + 1).join("=") + "\n" + compileToString(str, options) + "\n"
        );
      } else {
        throw e;
      }
    }
  }
  var _BOM = /^\uFEFF/;
  function getWholeFilePath(name, parentfile, isDirectory) {
    var includePath = resolve(
      isDirectory ? parentfile : dirname(parentfile),
      name
    ) + (extname(name) ? "" : ".eta");
    return includePath;
  }
  function getPath(path, options) {
    var includePath = false;
    var views = options.views;
    var searchedPaths = [];
    var pathOptions = JSON.stringify({
      filename: options.filename,
      path,
      root: options.root,
      views: options.views
    });
    if (options.cache && options.filepathCache && options.filepathCache[pathOptions]) {
      return options.filepathCache[pathOptions];
    }
    function addPathToSearched(pathSearched) {
      if (!searchedPaths.includes(pathSearched)) {
        searchedPaths.push(pathSearched);
      }
    }
    function searchViews(views2, path2) {
      var filePath2;
      if (Array.isArray(views2) && views2.some(function(v) {
        filePath2 = getWholeFilePath(path2, v, true);
        addPathToSearched(filePath2);
        return existsSync(filePath2);
      })) {
        return filePath2;
      } else if (typeof views2 === "string") {
        filePath2 = getWholeFilePath(path2, views2, true);
        addPathToSearched(filePath2);
        if (existsSync(filePath2)) {
          return filePath2;
        }
      }
      return false;
    }
    var match = /^[A-Za-z]+:\\|^\//.exec(path);
    if (match && match.length) {
      var formattedPath = path.replace(/^\/*/, "");
      includePath = searchViews(views, formattedPath);
      if (!includePath) {
        var pathFromRoot = getWholeFilePath(formattedPath, options.root || "/", true);
        addPathToSearched(pathFromRoot);
        includePath = pathFromRoot;
      }
    } else {
      if (options.filename) {
        var filePath = getWholeFilePath(path, options.filename);
        addPathToSearched(filePath);
        if (existsSync(filePath)) {
          includePath = filePath;
        }
      }
      if (!includePath) {
        includePath = searchViews(views, path);
      }
      if (!includePath) {
        throw EtaErr('Could not find the template "' + path + '". Paths tried: ' + searchedPaths);
      }
    }
    if (options.cache && options.filepathCache) {
      options.filepathCache[pathOptions] = includePath;
    }
    return includePath;
  }
  function readFile(filePath) {
    try {
      return readFileSync(filePath).toString().replace(_BOM, "");
    } catch (_a2) {
      throw EtaErr("Failed to read template at '" + filePath + "'");
    }
  }
  function loadFile(filePath, options, noCache) {
    var config2 = getConfig(options);
    var template = readFile(filePath);
    try {
      var compiledTemplate = compile(template, config2);
      if (!noCache) {
        config2.templates.define(config2.filename, compiledTemplate);
      }
      return compiledTemplate;
    } catch (e) {
      throw EtaErr("Loading file: " + filePath + " failed:\n\n" + e.message);
    }
  }
  function handleCache(options) {
    var filename = options.filename;
    if (options.cache) {
      var func = options.templates.get(filename);
      if (func) {
        return func;
      }
      return loadFile(filename, options);
    }
    return loadFile(filename, options, true);
  }
  function includeFile(path, options) {
    var newFileOptions = getConfig({ filename: getPath(path, options) }, options);
    return [handleCache(newFileOptions), newFileOptions];
  }
  function includeFileHelper(path, data) {
    var templateAndConfig = includeFile(path, this);
    return templateAndConfig[0](data, templateAndConfig[1]);
  }
  function handleCache$1(template, options) {
    if (options.cache && options.name && options.templates.get(options.name)) {
      return options.templates.get(options.name);
    }
    var templateFunc = typeof template === "function" ? template : compile(template, options);
    if (options.cache && options.name) {
      options.templates.define(options.name, templateFunc);
    }
    return templateFunc;
  }
  function render(template, data, config2, cb) {
    var options = getConfig(config2 || {});
    if (options.async) {
      if (cb) {
        try {
          var templateFn = handleCache$1(template, options);
          templateFn(data, options, cb);
        } catch (err) {
          return cb(err);
        }
      } else {
        if (typeof promiseImpl === "function") {
          return new promiseImpl(function(resolve2, reject) {
            try {
              resolve2(handleCache$1(template, options)(data, options));
            } catch (err) {
              reject(err);
            }
          });
        } else {
          throw EtaErr("Please provide a callback function, this env doesn't support Promises");
        }
      }
    } else {
      return handleCache$1(template, options)(data, options);
    }
  }
  config.includeFile = includeFileHelper;
  config.filepathCache = {};

  // translators/Better BibTeX Citation Key Quick Copy.ts
  config.autoEscape = false;
  function select_by_key(item) {
    const [, kind, lib, key] = item.uri.match(/^https?:\/\/zotero\.org\/(users|groups)\/((?:local\/)?[^/]+)\/items\/(.+)/);
    return kind === "users" ? `zotero://select/library/items/${key}` : `zotero://select/groups/${lib}/items/${key}`;
  }
  function select_by_citekey(item) {
    return `zotero://select/items/@${encodeURIComponent(item.citationKey)}`;
  }
  var Mode = {
    gitbook(items) {
      const citations = items.map((item) => `{{ "${item.citationKey}" | cite }}`);
      Zotero.write(citations.join(""));
    },
    atom(items) {
      const keys = items.map((item) => item.citationKey);
      if (keys.length === 1) {
        Zotero.write(`[](#@${keys[0]})`);
      } else {
        Zotero.write(`[](?@${keys.join(", ")})`);
      }
    },
    latex(items) {
      const keys = items.map((item) => item.citationKey);
      const cmd = `${Zotero.getHiddenPref("better-bibtex.citeCommand")}`.trim();
      if (cmd === "") {
        Zotero.write(keys.join(","));
      } else {
        Zotero.write(`\\${cmd}{${keys.join(", ")}}`);
      }
    },
    citekeys(items) {
      const keys = items.map((item) => item.citationKey);
      Zotero.write(keys.join(", "));
    },
    pandoc(items) {
      let keys = items.map((item) => `@${item.citationKey}`);
      keys = keys.join("; ");
      if (Zotero.getHiddenPref("better-bibtex.quickCopyPandocBrackets"))
        keys = `[${keys}]`;
      Zotero.write(keys);
    },
    roamCiteKey(items) {
      let keys = items.map((item) => `[[@${item.citationKey}]]`);
      keys = keys.join(" ");
      Zotero.write(keys);
    },
    orgRef(items) {
      if (!items.length)
        return "";
      Zotero.write(`cite:${items.map((item) => item.citationKey).join(", ")}`);
    },
    orgRef3(items) {
      if (!items.length)
        return "";
      Zotero.write(`cite:&${items.map((item) => item.citationKey).join(";&")}`);
    },
    orgmode(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopyOrgMode")) {
        case "zotero":
          for (const item of items) {
            Zotero.write(`[[${select_by_key(item)}][@${item.citationKey}]]`);
          }
          break;
        case "citationkey":
          for (const item of items) {
            Zotero.write(`[[${select_by_citekey(item)}][@${item.citationKey}]]`);
          }
          break;
      }
    },
    selectlink(items) {
      switch (Zotero.getHiddenPref("better-bibtex.quickCopySelectLink")) {
        case "zotero":
          Zotero.write(items.map(select_by_key).join("\n"));
          break;
        case "citationkey":
          Zotero.write(items.map(select_by_citekey).join("\n"));
          break;
      }
    },
    rtfScan(items) {
      const reference = items.map((item) => {
        const ref = [];
        const creators = item.creators || [];
        const creator = creators[0] || {};
        let name = creator.name || creator.lastName || "no author";
        if (creators.length > 1)
          name += " et al.";
        ref.push(name);
        if (item.title)
          ref.push(JSON.stringify(item.title));
        if (item.date) {
          let date = Zotero.BetterBibTeX.parseDate(item.date);
          if (date.type === "interval")
            date = date.from;
          if (date.type === "verbatim" || !date.year) {
            ref.push(item.date);
          } else {
            ref.push(date.year);
          }
        } else {
          ref.push("no date");
        }
        return ref.join(", ");
      });
      Zotero.write(`{${reference.join("; ")}}`);
    },
    eta(items) {
      try {
        Zotero.write(render(Zotero.getHiddenPref("better-bibtex.quickCopyEta"), { items: items.map(simplifyForExport) }));
      } catch (err) {
        Zotero.write(`${err}`);
      }
    }
  };
  function doExport() {
    const items = [];
    let item;
    while (item = Zotero.nextItem()) {
      if (item.citationKey)
        items.push(item);
    }
    items.sort((a, b) => {
      const ka = [a.citationKey || a.itemType, a.dateModified || a.dateAdded, a.itemID].join("	");
      const kb = [b.citationKey || b.itemType, b.dateModified || b.dateAdded, b.itemID].join("	");
      return ka.localeCompare(kb, void 0, { sensitivity: "base" });
    });
    const mode = Mode[Zotero.getOption("quickCopyMode")] || Mode[Zotero.getHiddenPref("better-bibtex.quickCopyMode")];
    if (mode) {
      mode.call(null, items);
    } else {
      throw new Error(`Unsupported Quick Copy format '${Zotero.getOption("quickCopyMode") || Zotero.getHiddenPref("better-bibtex.quickCopyMode")}', I only know about: ${Object.keys(Mode).join(", ")}`);
    }
  }
  return __toCommonJS(Better_BibTeX_Citation_Key_Quick_Copy_exports);
})();
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
