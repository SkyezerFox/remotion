(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9427],{3905:function(e,a,t){"use strict";t.r(a),t.d(a,{MDXContext:function(){return p},MDXProvider:function(){return c},mdx:function(){return x},useMDXComponents:function(){return m},withMDXComponents:function(){return d}});var n=t(2784);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=n.createContext({}),d=function(e){return function(a){var t=m(a.components);return n.createElement(e,o({},a,{components:t}))}},m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},c=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},N={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=m(t),c=r,u=d["".concat(s,".").concat(c)]||d[c]||N[c]||o;return t?n.createElement(u,l(l({ref:a},p),{},{components:t})):n.createElement(u,l({ref:a},p))}));function x(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},64980:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var n=t(22122),r=t(19756),o=(t(2784),t(3905)),s=["components"],l={slug:"2-3",title:"Remotion 2.3",author:"Jonny Burger",author_title:"Remotion Creator",author_url:"https://github.com/JonnyBurger",author_image_url:"https://avatars2.githubusercontent.com/u/1629785?s=460&u=12eb94da6070d00fc924761ce06e3a428d01b7e9&v=4",image:"https://remotion-still.herokuapp.com/PreviewCard.jpeg?title=Remotion%202.3&description=%3CStill%20/%3E%20component,%20renderStill()%20API,%20optimized%20editor%20and%20CLI,%20Server%20rendering%20template"},i={permalink:"/blog/2-3",editUrl:"https://github.com/remotion-dev/remotion/edit/main/packages/docs/blog/blog/2021-08-11-remotion-2-3.md",source:"@site/blog/2021-08-11-remotion-2-3.md",title:"Remotion 2.3",description:"Remotion 2.3 is out and features first-class support for still images!",date:"2021-08-11T00:00:00.000Z",formattedDate:"August 11, 2021",tags:[],readingTime:3.185,truncated:!1,nextItem:{title:"Remotion 2.2",permalink:"/blog/2-2"}},p=[{value:"New <code>&lt;Still /&gt;</code> component",id:"new-still--component",children:[]},{value:"Optimized editor for stills",id:"optimized-editor-for-stills",children:[]},{value:"New <code>remotion still</code> command",id:"new-remotion-still-command",children:[]},{value:"New <code>renderStill()</code> API",id:"new-renderstill-api",children:[]},{value:"New Stills template with server rendering",id:"new-stills-template-with-server-rendering",children:[]},{value:"\ud83d\udd1c Serverless in the works",id:"-serverless-in-the-works",children:[]},{value:"<code>yarn create video</code> now has multiple templates",id:"yarn-create-video-now-has-multiple-templates",children:[]},{value:"Player now supports space key to play/pause",id:"player-now-supports-space-key-to-playpause",children:[]}],d={toc:p};function m(e){var a=e.components,t=(0,r.default)(e,s);return(0,o.mdx)("wrapper",(0,n.default)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"Remotion 2.3 is out and features ",(0,o.mdx)("a",{parentName:"p",href:"/docs/stills"},"first-class support for still images"),"!"),(0,o.mdx)("p",null,"So far we focused on streamlining the workflow for making videos. While it was always possible to render out a single image instead of an encoded video, we have optimized this use-case in this release."),(0,o.mdx)("h2",{id:"new-still--component"},"New ",(0,o.mdx)("inlineCode",{parentName:"h2"},"<Still />")," component"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"/docs/still"},"This new component")," is the same as ",(0,o.mdx)("a",{parentName:"p",href:"/docs/composition"},(0,o.mdx)("inlineCode",{parentName:"a"},"<Composition />"))," but is meant for defining a compositions that output a still image. Since it's already implied, you don't have to define the ",(0,o.mdx)("inlineCode",{parentName:"p"},"fps")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"durationInFrames")," properties."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Still: <T>(props: StillProps<T>) => JSX.Element\nimport Still"},"Still"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},'"Thumbnail"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<{}>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const Thumbnail: React.FC<{}>"},"Thumbnail"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"1200"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#1976D2"}},"627"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) defaultProps: {\n    title: string;\n    description: string;\n    slogan: string;\n}"},"defaultProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"{{")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'Welcome to Remotion'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) description: string"},"description")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'Edit Video.tsx to change template'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) slogan: string"},"slogan")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'Write videos\\nin React'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"/>"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"tsx"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"<"),(0,o.mdx)("span",{parentName:"div",style:{color:"#79B8FF"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(alias) const Still: <T>(props: StillProps<T>) => JSX.Element\nimport Still"},"Still"))),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) id: string"},"id")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},'"Thumbnail"')),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) component: AnyComponent<{}>"},"component")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const Thumbnail: React.FC<{}>"},"Thumbnail"),"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) width: number"},"width")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"1200"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) height: number"},"height")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{"),(0,o.mdx)("span",{parentName:"div",style:{color:"#F8F8F8"}},"627"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(JSX attribute) defaultProps: {\n    title: string;\n    description: string;\n    slogan: string;\n}"},"defaultProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"="),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"{{")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) title: string"},"title")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'Welcome to Remotion'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) description: string"},"description")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'Edit Video.tsx to change template'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) slogan: string"},"slogan")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'Write videos\\nin React'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  }}")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"/>")))))),(0,o.mdx)("h2",{id:"optimized-editor-for-stills"},"Optimized editor for stills"),(0,o.mdx)("p",null,"There are now icons in the sidebar for compositions, and those who are stills have an image icon."),(0,o.mdx)("p",{align:"center"},(0,o.mdx)("img",{style:{maxWidth:300},src:"/img/still-thumbnail.png"})," ",(0,o.mdx)("br",null),(0,o.mdx)("em",null,(0,o.mdx)("sub",null,"Now still images (compositions with a duration of 1 frame) are marked with a special icon."))),(0,o.mdx)("p",null,"For still images, you don't need the timeline, so it will hide itself and give you a bigger canvas."),(0,o.mdx)("p",{align:"center"},(0,o.mdx)("img",{style:{maxWidth:600},src:"/img/notimeline.png"})," ",(0,o.mdx)("br",null)),(0,o.mdx)("h2",{id:"new-remotion-still-command"},"New ",(0,o.mdx)("inlineCode",{parentName:"h2"},"remotion still")," command"),(0,o.mdx)("p",null,"Rendering stills has become easier as well. The new ",(0,o.mdx)("inlineCode",{parentName:"p"},"remotion still")," command allows you to quickly generate a PNG or JPEG on the command line."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},'npx remotion still --props=\'{"custom": "data"}\' src/index.tsx my-comp out.png'))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},'npx remotion still --props=\'{"custom": "data"}\' src/index.tsx my-comp out.png')))),(0,o.mdx)("h2",{id:"new-renderstill-api"},"New ",(0,o.mdx)("inlineCode",{parentName:"h2"},"renderStill()")," API"),(0,o.mdx)("p",null,"If you render using the Node.JS APIs, we have a new equivalent API for rendering stills as well."),(0,o.mdx)("div",{className:"shiki-twoslash-fragment"},(0,o.mdx)("pre",{parentName:"div",className:"shiki min-light twoslash lsp",style:{backgroundColor:"#ffffff",color:"#24292eff"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#6F42C1"}},(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) renderStill({ composition, quality, imageFormat, webpackBundle, browser, puppeteerInstance, dumpBrowserLogs, onError, inputProps, envVariables, output, frame, overwrite, }: {\n    composition: TCompMetadata;\n    output: string;\n    webpackBundle: string;\n    frame?: number | undefined;\n    inputProps?: unknown;\n    imageFormat?: "png" | "jpeg" | undefined;\n    quality?: number | undefined;\n    ... 5 more ...;\n    overwrite?: boolean | undefined;\n}): Promise<...>\nimport renderStill'},"renderStill")),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) composition: TCompMetadata"},"composition"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) webpackBundle: string"},"webpackBundle")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const bundleLocation: string"},"bundleLocation"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) output: string"},"output")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'/tmp/still.png'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) inputProps?: unknown"},"inputProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) custom: string"},"custom")),(0,o.mdx)("span",{parentName:"div",style:{color:"#D32F2F"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#22863A"}},"'data'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"  }")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#24292EFF"}},"})"))))),(0,o.mdx)("pre",{parentName:"div",className:"shiki min-dark twoslash lsp",style:{backgroundColor:"#1f1f1f",color:"#b392f0"}},(0,o.mdx)("div",{parentName:"pre",className:"language-id"},"ts"),(0,o.mdx)("div",{parentName:"pre",className:"code-container"},(0,o.mdx)("code",{parentName:"div"},(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},"await"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:'(alias) renderStill({ composition, quality, imageFormat, webpackBundle, browser, puppeteerInstance, dumpBrowserLogs, onError, inputProps, envVariables, output, frame, overwrite, }: {\n    composition: TCompMetadata;\n    output: string;\n    webpackBundle: string;\n    frame?: number | undefined;\n    inputProps?: unknown;\n    imageFormat?: "png" | "jpeg" | undefined;\n    quality?: number | undefined;\n    ... 5 more ...;\n    overwrite?: boolean | undefined;\n}): Promise<...>\nimport renderStill'},"renderStill"),"({")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) composition: TCompMetadata"},"composition"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) webpackBundle: string"},"webpackBundle")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"const bundleLocation: string"},"bundleLocation"),",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) output: string"},"output")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'/tmp/still.png'"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},",")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) inputProps?: unknown"},"inputProps")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," {")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"    ",(0,o.mdx)("data-lsp",{parentName:"span",lsp:"(property) custom: string"},"custom")),(0,o.mdx)("span",{parentName:"div",style:{color:"#F97583"}},":"),(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}}," "),(0,o.mdx)("span",{parentName:"div",style:{color:"#FFAB70"}},"'data'")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"  }")),(0,o.mdx)("div",{parentName:"code",className:"line"},(0,o.mdx)("span",{parentName:"div",style:{color:"#B392F0"}},"})")))))),(0,o.mdx)("h2",{id:"new-stills-template-with-server-rendering"},"New Stills template with server rendering"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://github.com/remotion-dev/template-still"},"We have made a new template")," that includes a social media preview card and a server that you can customize and easily deploy to the cloud. We have tested it on DigitalOcean and Heroku and have added instructions on how to deploy it."),(0,o.mdx)("p",null,"We use this service to generate the social preview card for the blog post you are reading right now. Feel free to go to this URL and play around with the parameters:"),(0,o.mdx)("p",null,(0,o.mdx)("a",{parentName:"p",href:"https://remotion-still.herokuapp.com/PreviewCard.jpeg?title=Remotion%202.3&description=%3CStill%20/%3E%20component,%20renderStill()%20API,%20optimized%20editor%20and%20CLI,%20Server%20rendering%20template"},"https://remotion-still.herokuapp.com/PreviewCard.jpeg?title=Remotion%202.3&description=%3CStill%20/%3E%20component,%20renderStill()%20API,%20optimized%20editor%20and%20CLI,%20Server%20rendering%20template")),(0,o.mdx)("p",null,"The server includes different caching options, rate limiting and limits to 1 render at a time, so hopefully it's ready for production. We put the URL out there for you play around with it, should there be any unexpected problems, we'll fix the template."),(0,o.mdx)("h2",{id:"-serverless-in-the-works"},"\ud83d\udd1c Serverless in the works"),(0,o.mdx)("p",null,"We are also working on getting still image rendering working in a serverless environment and providing a framework for it. We aim to launch it this fall - if you are interested in testing an early version, ",(0,o.mdx)("a",{parentName:"p",href:"https://discord.gg/6VzzNDwUwV"},"write us a message in our Discord"),"."),(0,o.mdx)("h2",{id:"yarn-create-video-now-has-multiple-templates"},(0,o.mdx)("inlineCode",{parentName:"h2"},"yarn create video")," now has multiple templates"),(0,o.mdx)("p",null,"When creating a new video, you now get to choose between different templates, that give you a great starting point for your usecase."),(0,o.mdx)("p",{align:"center"},(0,o.mdx)("img",{style:{maxWidth:600},src:"/img/yarncreatetemplate.png"})," ",(0,o.mdx)("br",null)),(0,o.mdx)("p",null,"In addition to the default template and the previously announced Three.JS template, there now is also a plain-JS template, a text-to-speech template and the above mentioned Stills template."),(0,o.mdx)("h2",{id:"player-now-supports-space-key-to-playpause"},"Player now supports space key to play/pause"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"<Player />")," component now supports the new ",(0,o.mdx)("a",{parentName:"p",href:"https://www.remotion.dev/docs/player/#spacekeytoplayorpause"},(0,o.mdx)("inlineCode",{parentName:"a"},"spaceKeyToPlayOrPause"))," prop to toggle the video playback. We designed it with focus management in mind so it behaves well when multiple players are on the same page. This prop is by default ",(0,o.mdx)("inlineCode",{parentName:"p"},"true"),"."))}m.isMDXComponent=!0}}]);