(self["webpackChunkFE_note"]=self["webpackChunkFE_note"]||[]).push([[266],{1422:e=>{"use strict";e.exports={}},3859:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>l});const l={}},3115:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>a});var l=t(7294),o=t(6584),r=t(2196);t(3859);const a=e=>(l.useEffect((()=>{null!==e&&void 0!==e&&e.location.hash&&o.AnchorLink.scrollToAnchor(decodeURIComponent(e.location.hash.slice(1)))}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"markdown"},l.createElement("h1",{id:"mongodb-vs-mysql"},l.createElement(o.AnchorLink,{to:"#mongodb-vs-mysql","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"MongoDB vs mysql"),l.createElement("table",null,l.createElement("thead",null,l.createElement("tr",null,l.createElement("th",null,"MongoDB"),l.createElement("th",null,"mysql"),l.createElement("th",null,"\u540d\u79f0"))),l.createElement("tbody",null,l.createElement("tr",null,l.createElement("td",null,"document"),l.createElement("td",null,"record"),l.createElement("td",null,"\u8bb0\u5f55")),l.createElement("tr",null,l.createElement("td",null,"collection"),l.createElement("td",null,"table"),l.createElement("td",null,"\u8868")),l.createElement("tr",null,l.createElement("td",null,"database"),l.createElement("td",null,"database"),l.createElement("td",null,"\u6570\u636e\u5e93")))),l.createElement("h2",{id:"mongoose-\u4ecb\u7ecd"},l.createElement(o.AnchorLink,{to:"#mongoose-\u4ecb\u7ecd","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"Mongoose \u4ecb\u7ecd"),l.createElement("p",null,"\u662f mongoose \u7684\u4e00\u4e2a\u5bf9\u8c61\u6a21\u578b\u5e93,\u5c01\u88c5\u4e86 mongoDB \u5bf9\u6587\u6863\u7684\u4e00\u4e9b\u589e\u5220\u6539\u67e5\u7b49\u5e38\u7528\u65b9\u6cd5,\u8ba9 nodejs \u64cd\u4f5c mongoDB \u6570\u636e\u5e93\u53d8\u5f97\u66f4\u5bb9\u6613 ",l.createElement("strong",null,"Schema")," \u662f\u4e00\u79cd\u6587\u4ef6\u5f62\u5f0f\u5b58\u50a8\u7684\u6570\u636e\u5e93\u6a21\u578b\u9aa8\u67b6,\u4e0d\u5177\u5907\u6570\u636e\u5e93\u7684\u64cd\u4f5c\u80fd\u529b,\u5373\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u4f8b\u5982:"),l.createElement(r.Z,{code:"var PersonSchema=new mongoose.Schema({\n  name:String;\n})",lang:"javascript"}),l.createElement("p",null,l.createElement("strong",null,"Model")," \u7531 Schema \u6784\u9020\u751f\u6210\u7684\u6a21\u578b,\u5177\u6709\u62bd\u8c61\u5c5e\u6027\u548c\u884c\u4e3a\u7684\u6570\u636e\u5e93\u64cd\u4f5c"),l.createElement(r.Z,{code:"var PersonModel = db.model('person', PersonSchema);",lang:"javascript"}),l.createElement("p",null,l.createElement("strong",null,"entity")," \u7531 Model \u521b\u9020\u7684\u5b9e\u4f53\uff0c\u4ed6\u7684\u64cd\u4f5c\u4e5f\u4f1a\u5f71\u54cd\u6570\u636e\u5e93,\u53ef\u4ee5\u64cd\u4f5c\u6570\u636e\u5e93 CRUD"),l.createElement(r.Z,{code:"var personEntity = new PersonModel({\n  name: 'kk',\n});",lang:"javascript"}),l.createElement("p",null,l.createElement(o.Link,{to:"https://cnodejs.org/topic/504b4924e2b84515770103dd"},"\u539f\u6587\u4f20\u9001\u95e8")),l.createElement("h3",{id:"node-\u8fde\u63a5-mongoose"},l.createElement(o.AnchorLink,{to:"#node-\u8fde\u63a5-mongoose","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"node \u8fde\u63a5 mongoose"),l.createElement(r.Z,{code:"const mongoose = require('mongoose');\n//1 \u8fde\u63a5\u6570\u636e\u5e93\nmongoose.connect('mongodb://localhost/cms');\nvar db = mongoose.connection;\n/**\n * \u6709\u5bc6\u7801\u7684\u8fde\u63a5\u65b9\u5f0f\n * \u6570\u636e\u5e93\u540d test\n * \u7528\u6237\u540d admin\n * \u5bc6\u7801  123456\n * */\n// mongoose.connect('mongodb://admin:123456@localhost:27017/test');\n\n//2. \u5b9a\u4e49\u6570\u636e\u7c7b\u578b\nvar userSchema = mongoose.Schema({\n  name: String,\n  age: Number,\n});\n//3. \u521b\u5efa\u6a21\u578b\nvar User = mongoose.model('User', userSchema);",lang:"javascript"}),l.createElement("h3",{id:"\u7b80\u5355-crud"},l.createElement(o.AnchorLink,{to:"#\u7b80\u5355-crud","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u7b80\u5355 crud"),l.createElement(r.Z,{code:"//4. \u67e5\u8be2user\u8868\u4e2d\u6240\u6709\u6570\u636e\nUser.find({}, (err, doc) => {\n  if (err) {\n    console.log(err);\n    return;\n  }\n  console.log(doc);\n});\n\n//5. \u6dfb\u52a0\u6570\u636e\nvar u = new User({\n  name: 'cc',\n  age: 20,\n});\nu.save((err) => {\n  if (err) {\n    console.log('\u6dfb\u52a0\u5931\u8d25');\n    return;\n  }\n  console.log('\u6dfb\u52a0\u6210\u529f');\n});\n\n//6. \u66f4\u65b0\u6570\u636e\nUser.updateOne(\n  { _id: '5c4e9fc8b60c4b4e543bd1bc' },\n  { name: 'wcc' },\n  (error, doc) => {\n    if (error) {\n      return console.log('update error');\n    }\n    console.log(doc);\n  },\n);\n//7. \u5220\u9664\u6570\u636e\nUser.deleteOne({ _id: '5c4ea2289012181bec2d71ac' }, (error, result) => {\n  if (error) {\n    console.log('delete error');\n    return;\n  }\n  console.log('\u5220\u9664\u6210\u529f', result);\n});",lang:"javascript"}),l.createElement("h3",{id:"\u8865\u5145"},l.createElement(o.AnchorLink,{to:"#\u8865\u5145","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u8865\u5145"),l.createElement(r.Z,{code:"var userSchema = mongoose.Schema({\n  name: {\n    type: String, //\u6307\u5b9a\u7c7b\u578b\n    trim: true, //\u53bb\u6389\u4e24\u8fb9\u7a7a\u683c\n  },\n  sn: {\n    type: String,\n    index: true, //\u521b\u5efa\u7d22\u5f15 \u6216\u8005\u4f7f\u7528 unique\n  },\n  age: Number,\n  redirect: {\n    type: String,\n    set(parmas) {\n      //\u81ea\u5b9a\u4e49\u4fee\u9970\u7b26,\u4e0b\u9762\u4ee3\u7801\u662f\u5bf9\u7528\u6237\u8f93\u5165\u7684\u7f51\u5740\u8fdb\u884c\u5224\u65ad\uff0c\u5982\u4f55\u6ca1\u6709\u8f93\u5165http \u6216\u8005 https \u5219\u8fdb\u884c\u8865\u5168\n      if (!parmas) return '';\n      if (parmas.indexOf('http://') || parmas.indexOf('https://')) {\n        //\u5982\u679c\u4e0d\u662fhttp\u6216\u8005https\u5f00\u5934\u5219\u8d70\u4e0b\u9762\u7684\u903b\u8f91\n        return 'http://' + parmas;\n      } else {\n        return parmas;\n      }\n    },\n  },\n});",lang:"javascript"}),l.createElement("h2",{id:"\u6570\u636e\u6821\u9a8c"},l.createElement(o.AnchorLink,{to:"#\u6570\u636e\u6821\u9a8c","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u6570\u636e\u6821\u9a8c"),l.createElement("p",null,l.createElement("strong",null,"\u5c0f\u7ed3:")),l.createElement("ul",null,l.createElement("li",null,"require \u8868\u793a\u8be5\u5fc5\u987b\u4f20\u5165"),l.createElement("li",null,"max \u4e0e min \u53ea\u80fd\u7528\u5728 number \u7c7b\u578b\u4e2d"),l.createElement("li",null,"\u679a\u4e3e\u7c7b\u578b\u53ea\u80fd\u7528\u5728 string \u7c7b\u578b\u4e2d")),l.createElement(r.Z,{code:"var userSchema = mongoose.Schema({\n  name: {\n    type: String, //\u6307\u5b9a\u7c7b\u578b\n    require: true,\n  },\n  sn: {\n    type: String,\n    index: true, //\u521b\u5efa\u7d22\u5f15 \u6216\u8005\u4f7f\u7528 unique\n    maxlength: 20, //\u53ea\u80fd\u7528\u4e8estring\u7c7b\u578b\n    minlength: 10,\n  },\n  age: {\n    type: Number, //min\u4e0emax\u5fc5\u987b\u5728Number\u4e2d\n    min: 0,\n    max: 130,\n  },\n  redirect: {\n    type: String,\n  },\n  status: {\n    type: String,\n    default: '1',\n    enum: ['0', '1'], //status \u503c\u5fc5\u987b\u5728\u679a\u4e3e\u503c\u4e2d\u5e76\u4e14\u679a\u4e3e\u7c7b\u578b\u4e2dtype\u5fc5\u987b\u662fString\n  },\n});",lang:"javascript"}),l.createElement("h2",{id:"\u6570\u636e\u5e93\u7684\u5bfc\u5165\u548c\u5bfc\u51fa"},l.createElement(o.AnchorLink,{to:"#\u6570\u636e\u5e93\u7684\u5bfc\u5165\u548c\u5bfc\u51fa","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"\u6570\u636e\u5e93\u7684\u5bfc\u5165\u548c\u5bfc\u51fa"),l.createElement(r.Z,{code:"//\u5bfc\u5165\n// -h \u4e3b\u673a(\u672c\u673a localhost)\n// -d \u8868\u793a\u6570\u636e\u5e93\u540d\n// -o \u8868\u793a\u76ee\u5f55\nmongodump -h dbhost -d dbname -o dbdirectory\n// mongodump -h localhost -d cms -o C:\\Users\\lanyee\\Desktop\n\n//\u5bfc\u51fa\nmongorestore -h dbhost -d dbname <path>",lang:"javascript"}),l.createElement("h1",{id:"mongodb-\u914d\u7f6e-server\uff08window\uff09"},l.createElement(o.AnchorLink,{to:"#mongodb-\u914d\u7f6e-server\uff08window\uff09","aria-hidden":"true",tabIndex:-1},l.createElement("span",{className:"icon icon-link"})),"mongoDB \u914d\u7f6e server\uff08window\uff09"),l.createElement("ul",null,l.createElement("li",null,"\u9009\u62e9\u4e00\u4e2a\u78c1\u76d8\u521b\u5efa\u6570\u636e\u5e93\u548c\u65e5\u5fd7\u7684\u5b58\u50a8\u4f8b\u5982:")),l.createElement(r.Z,{code:"E:\\mongodb\\data\\db\n E:\\mongodb\\data\\log",lang:"unknown"}),l.createElement("ul",null,l.createElement("li",null,"\u521b\u5efa\u914d\u7f6e\u6587\u4ef6 \u6bd4\u5982 c:\\Program Files\\MongoDB\\Server\\3.4\\mongod.cfg")),l.createElement(r.Z,{code:"systemLog:\n    destination: file\n    path: E:\\mongodb\\data\\log\\mongod.log\nstorage:\n    dbPath:  E:\\mongodb\\data\\db",lang:"unknown"}),l.createElement("ul",null,l.createElement("li",null,"\u542f\u52a8\u914d\u7f6e\u6587\u4ef6 (\u5fc5\u987b\u7ba1\u7406\u5458\u8eab\u4efd)")),l.createElement(r.Z,{code:'> mongod --config "C:\\Program Files\\MongoDB\\Server\\3.4\\mongod.cfg" --install',lang:"unknown"}),l.createElement("p",null,"\u6211\u5c06\u8be5\u76ee\u5f55\u5df2\u914d\u7f6e\u5230\u5168\u5c40\u53d8\u91cf\u4e2d\uff0c\u82e5\u6ca1\u6709\u914d\u7f6e\u5219\u8fdb\u5165 mongoDB \u5b89\u88c5\u76ee\u5f55\u7684 bin \u76ee\u5f55\u518d\u542f\u52a8"),l.createElement("ol",null,l.createElement("li",null,"\u542f\u52a8 MongoDB server",l.createElement("blockquote",null,l.createElement("p",null,"net start MongoDB"))),l.createElement("li",null,"\u505c\u6b62 MongoDB server",l.createElement("blockquote",null,l.createElement("p",null,"net stop MongoDB"))),l.createElement("li",null,"\u5220\u9664 MongoDB server")),l.createElement("blockquote",null,l.createElement("p",null,'"C:\\ProgramFiles\\MongoDB\\Server\\3.4\\bin\\mongod.exe" --remove')))))}}]);