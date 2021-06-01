(self["webpackChunkFE_note"]=self["webpackChunkFE_note"]||[]).push([[9355],{1422:e=>{"use strict";e.exports={}},3859:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});const l={}},4696:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var l=t(7294),o=t(6584),r=t(2196);t(3859);const a=e=>(l.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"node-\u6a21\u5757\u52a0\u8f7d\u6d45\u6790"},l.createElement(o.AnchorLink,{to:"#node-\u6a21\u5757\u52a0\u8f7d\u6d45\u6790","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"node \u6a21\u5757\u52a0\u8f7d\u6d45\u6790"),l.createElement("blockquote",null,l.createElement("p",null,"\u901a\u8fc7\u5206\u6790 require \u52a0\u8f7d\u6a21\u5757\u6d41\u7a0b,\u5b9e\u73b0\u7b80\u6613\u7248\u672c,\u672c\u6587\u73af\u5883 node v15.4.0")),l.createElement("p",null,l.createElement("strong",null,"\u8c03\u8bd5\u6570\u636e")),l.createElement(r.Z,{code:"// main.js\n\nrequire('./test');\n\n// test.js\nlet a = 1;\nconsole.log(this === module.exports, 'this');\nmodule.exports = a;",lang:"js"}),l.createElement("p",null,"** \u63d0\u793a: vscode \u65ad\u70b9\u8c03\u8bd5\u8981\u8fdb\u5165\u6e90\u7801\u6587\u4ef6\u9700\u8981\u5c06 launch.json \u4e2d ",l.createElement("code",null,"skipFiles"),"\u6587\u4ef6\u6ce8\u91ca\u3002"),l.createElement(r.Z,{code:'// "skipFiles": [\n //   "<node_internals>/**"\n // ],',lang:"unknown"}),l.createElement("p",null,"\u901a\u8fc7\u5728",l.createElement("code",null,"main.js"),"\u4e2d\u6253\u65ad\u70b9\uff0c\u8fdb\u5165",l.createElement("code",null,"require"),"\u51fd\u6570\u3002"),l.createElement("ol",null,l.createElement("li",null,"\u9996\u5148\u4f1a\u8c03\u7528",l.createElement("code",null,"makeRequireFunction"),"\u51fd\u6570\u4e2d require \u65b9\u6cd5\uff0c\u4f20\u9012\u5f53\u524d\u8def\u5f84",l.createElement("code",null,"./test"))),l.createElement(r.Z,{code:"// https://github.com/nodejs/node/blob/v15.4.0/lib/internal/modules/cjs/helpers.js#L48\n\n(function (exports, require, module, process, internalBinding) {\n  'use strict';\n\n  function makeRequireFunction(mod) {\n    const Module = mod.constructor;\n    function require(path) {\n      return mod.require(path);\n    }\n  }\n});",lang:"js"}),l.createElement("ol",null,l.createElement("li",null,"\u7136\u540e\u6211\u4eec\u8fdb\u5165 ",l.createElement("code",null,"Module"),"\u6784\u9020\u51fd\u6570\u539f\u578b\u65b9\u6cd5 require \u65b9\u6cd5\u4e2d")),l.createElement(r.Z,{code:"// https://github.com/nodejs/node/blob/v15.4.0/lib/internal/modules/cjs/loader.js#L989\n\nModule.prototype.require = function (id) {\n  // \u5ffd\u7565\u5176\u5b83\u6821\u9a8c\u6761\u4ef6\n  return Module._load(id, this, /* isMain */ false);\n};",lang:"js"}),l.createElement("p",null,"\u6b64\u65f6\u6211\u4eec\u5148\u6682\u505c\u63a2\u7a76",l.createElement("code",null,"_load"),"\u65b9\u6cd5\u5b9e\u73b0\u7ec6\u8282\uff0c\u6765\u53bb\u770b\u770b",l.createElement("code",null,"Module"),"\u6784\u9020\u51fd\u6570\u7ed3\u6784\u53ef\u80fd\u5bf9\u540e\u9762\u4f1a\u6709\u4e00\u4e2a\u5b8f\u89c2\u7684\u7406\u89e3\u3002 ",l.createElement(o.Link,{to:"https://github.com/nodejs/node/blob/v15.4.0/lib/internal/modules/cjs/loader.js#L163"},"Module \u6e90\u7801\u6233\u8fd9\u91cc")),l.createElement(r.Z,{code:"function Module(id = '', parent) {\n  this.id = id;\n  this.path = path.dirname(id);\n  this.exports = {};\n}\nModule._cache = ObjectCreate(null); // ObjectCreate --\x3e Object.create\nModule._pathCache = ObjectCreate(null);\nModule._extensions = ObjectCreate(null);\n\nModule._load = function (request, parent, isMain) {};\nModule._resolveFilename = function (request, parent, isMain) {};\nModule.prototype.load = function (filename) {};\nModule.prototype._compile = function (content, filename) {};\nModule._extensions['.json'] = function (module, filename) {};\nModule._extensions['.js'] = function (module, filename) {};",lang:"js"}),l.createElement("ol",null,l.createElement("li",null,"\u52a0\u8f7d",l.createElement("code",null,"Module.load"),"\u65b9\u6cd5")),l.createElement("p",null,"\u9996\u5148\u4f1a\u68c0\u67e5\u7f13\u5b58\uff0c\u662f\u5426\u5b58\u5728\u8bf7\u6c42\u65b9\u6cd5\uff0c\u5982\u679c\u5b58\u5728\u5219\u7acb\u5373\u8fd4\u56de\uff0c\u5426\u5219\u83b7\u53d6 filename \u5e76\u7f13\u5b58\u3002\u8be5\u65b9\u6cd5\u8fd4\u56de ",l.createElement("code",null,"module.exports"),"\u5373",l.createElement("code",null,"Module"),"\u5b9e\u4f8b\u7684 exports \u5c5e\u6027\u3002"),l.createElement(r.Z,{code:"Module._load = function (request, parent, isMain) {\n  const filename = Module._resolveFilename(request, parent, isMain);\n  const cachedModule = Module._cache[filename];\n  if (cachedModule) {\n    return cachedModule.exports;\n  }\n  var module = new Module(filename, parent);\n  Module._cache[filename] = module;\n  tryModuleLoad(module, filename);\n  return module.exports;\n};",lang:"js"}),l.createElement("ol",{start:4},l.createElement("li",null,"\u89e3\u6790\u6587\u4ef6\u540d\u53d8\u6210\u7edd\u5bf9\u8def\u5f84\u4e14\u5c1d\u8bd5\u52a0\u540e\u7f00 ",l.createElement("code",null,"resolveFilename"))),l.createElement("p",null,l.createElement(o.Link,{to:"https://github.com/nodejs/node/blob/v15.4.0/lib/internal/modules/cjs/loader.js#L769"},"\u6233\u8fd9\u91cc\u6267\u884c\u7814\u7a76")),l.createElement("ol",null,l.createElement("li",null,"\u52a0\u8f7d\u6a21\u5757 ",l.createElement("code",null,"tryModuleLoad"))),l.createElement(r.Z,{code:"function tryModuleLoad(module, filename) {\n  var threw = true;\n  try {\n    module.load(filename);\n    threw = false;\n  } finally {\n    if (threw) {\n      delete Module._cache[filename];\n    }\n  }\n}",lang:"ts"}),l.createElement(r.Z,{code:"Module.prototype.load = function (filename) {\n  //\n  var extension = findLongestRegisteredExtension(filename);\n  Module._extensions[extension](this, filename);\n  //...\n};",lang:"ts"}),l.createElement("ol",{start:6},l.createElement("li",null,"\u6839\u636e\u6269\u5c55\u540d\u52a0\u8f7d\u5bf9\u5e94\u6a21\u5757 ",l.createElement("code",null,"Module._extensions[extension](this,filename)"))),l.createElement("p",null,"\u4eca\u5929\u4e3b\u8981\u5173\u6ce8",l.createElement("code",null,".js"),"\u6587\u4ef6\u52a0\u8f7d\u6d41\u7a0b\uff0c\u56e0\u6b64\u5176\u5b83\u540e\u7f00\u6267\u884c\u7814\u7a76\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b:"),l.createElement(r.Z,{code:"Module._extensions['.js'] = function (module, filename) {\n  var content = fs.readFileSync(filename, 'utf8');\n  module._compile(stripBOM(content), filename);\n};\n\nModule._extensions['.json'] = function (module, filename) {\n  var content = fs.readFileSync(filename, 'utf8');\n  try {\n    module.exports = JSON.parse(stripBOM(content));\n  } catch (err) {\n    err.message = filename + ': ' + err.message;\n    throw err;\n  }\n};\n\nModule._extensions['.node'] = function (module, filename) {\n  return process.dlopen(module, path.toNamespacedPath(filename));\n};",lang:"ts"}),l.createElement("ol",{start:7},l.createElement("li",null,l.createElement("p",null,"\u6c99\u7bb1\u73af\u5883\u8fd0\u884c\u6587\u4ef6\u5185\u5bb9",l.createElement("code",null,"compile")),l.createElement("blockquote",null,l.createElement("p",null,"\u5bf9\u8be5\u5185\u5bb9\u6709\u5174\u8da3\u7684\u53ef\u4ee5 \u4e86\u89e3\u672c\u6587\u8be5\u95ee\u9898\u4ea7\u751f\u539f\u56e0\u4e0e\u89e3\u51b3\u65b9\u6848",l.createElement(o.Link,{to:"https://cnodejs.org/topic/5a138c5d9cae544d6e3838a6"},"stripBOM")))),l.createElement("li",null,l.createElement("p",null,"\u901a\u8fc7 ",l.createElement("code",null,"(function (exports, require, module, __filename, __dirname) ","{","}",")"),"\u5305\u88f9\u6587\u4ef6\u5185\u5bb9")),l.createElement("li",null,l.createElement("p",null,"vm.runInThisContext \u521b\u5efa\u6c99\u7bb1\u73af\u5883")),l.createElement("li",null,l.createElement("p",null,"\u6267\u884c\u8be5\u73af\u5883\uff0c\u53c2\u6570\u542b\u4e49\u5982\u4e0b\uff1a"),l.createElement("ol",null,l.createElement("li",null,"thisValue ==> exports"),l.createElement("li",null,"exports ==> this.exports"),l.createElement("li",null,"module ==> this"),l.createElement("li",null,"filename ==> filename"),l.createElement("li",null,"dirname ==> path.dirname(filename)")))),l.createElement(r.Z,{code:"Module.prototype._compile = function(content, filename) {\n  // ...\n   const compiledWrapper = wrapSafe(filename, content, this);\n  let result;\n  const dirname = path.dirname(filename);\n  const require = makeRequireFunction(this, redirects);\n  const exports = this.exports;\n  const thisValue = exports;\n  const module = this;\n  if (inspectorWrapper) {\n    result = inspectorWrapper(compiledWrapper, thisValue, exports,\n                              require, module, filename, dirname);\n  } else {\n    result = ReflectApply(compiledWrapper, thisValue,\n                          [exports, require, module, filename, dirname]);\n  }\n   return result;\n}\n\nfunction wrapSafe(filename, content, cjsModuleInstance) {\n   if (patched) {\n    const wrapper = Module.wrap(content);\n    return vm.runInThisContext(wrapper, {\n      filename,\n      lineOffset: 0,\n      displayErrors: true,\n      importModuleDynamically: async (specifier) => {\n        const loader = asyncESM.ESMLoader;\n        return loader.import(specifier, normalizeReferrerURL(filename));\n      },\n    });\n  }\n}\nModule.wrap=function (content)=>  `(function (exports, require, module, __filename, __dirname) {\n  ${content}\n  \\n})`;",lang:"ts"}),l.createElement("p",null,"\ud83c\udf30: \u7406\u89e3\u6c99\u7bb1\u73af\u5883"),l.createElement(r.Z,{code:"let a = 1;\n\nvm.runInThisContext('a'); // a is not defined",lang:"ts"}),l.createElement("h2",{id:"\u5b9e\u8df5\u7b80\u6613-require"},l.createElement(o.AnchorLink,{to:"#\u5b9e\u8df5\u7b80\u6613-require","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u5b9e\u8df5\u7b80\u6613 require"),l.createElement(r.Z,{code:"import { extname, resolve, dirname } from 'path';\nimport { existsSync, readFileSync } from 'fs';\nimport { runInThisContext } from 'vm';\n\nclass Module {\n  protected id: string;\n  protected fileName: string;\n  protected exports: {};\n\n  constructor(id) {\n    this.id = id;\n    this.fileName = `${id}.js`;\n    this.exports = {};\n  }\n  static extensions = {\n    '.json': (mod) => {\n      const content = readFileSync(mod.id, 'utf8');\n      mod.exports = content;\n    },\n    '.js': (mod) => {\n      const content = readFileSync(mod.id, 'utf8');\n      const fnStr = Module.wrap(content);\n      const fn = runInThisContext(fnStr);\n      const exports = mod.exports;\n      const require = myRequire;\n      const __filename = mod.id;\n      const __dirname = dirname(mod.id);\n      fn.call(exports, exports, require, mod, __filename, __dirname);\n    },\n  };\n\n  load(filename) {\n    let extName = extname(filename);\n    Module.extensions[extName](this);\n  }\n  static wrap(script) {\n    const wrapper = [\n      '(function (exports, require, module, __filename, __dirname) { ',\n      script,\n      '\\n});',\n    ];\n    return wrapper.join('');\n  }\n  static cache = {};\n\n  static load(filePath) {\n    const fileName = Module.resolveFileName(filePath);\n    if (!fileName) return;\n\n    if (Module.cache[fileName]) {\n      return Module.cache[fileName].exports;\n    }\n\n    const mod = new Module(fileName);\n    Module.cache[fileName] = mod;\n    mod.load(fileName);\n    return mod.exports;\n  }\n\n  static resolveFileName(filePath) {\n    // \u8fd4\u56de\u8be5\u8def\u5f84\u7edd\u5bf9\u8def\u5f84\n    const resFilePath = resolve(__dirname, filePath);\n    // \u5224\u65ad\u8def\u5f84\u662f\u5426\u5b58\u5728\n    const existPath = existsSync(resFilePath);\n    if (existPath) {\n      return resFilePath;\n    }\n    // \u5c1d\u8bd5\u6dfb\u52a0\u540e\u7f00\n    for (const key of Object.keys(Module.extensions)) {\n      const finalFilePath = `${resFilePath}${key}`;\n      if (existsSync(finalFilePath)) {\n        return finalFilePath;\n      }\n    }\n  }\n}\n\nfunction myRequire(path) {\n  return Module.load(path);\n}\n\n// \u7528\u4e8e\u6d4b\u8bd5\n\nconst content = myRequire('./test.js');\nconsole.log(content);",lang:"ts"}))))}}]);