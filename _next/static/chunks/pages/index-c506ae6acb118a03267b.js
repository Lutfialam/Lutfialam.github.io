(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4373:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var s=a(5893),i=a(7294),n=a(9008),l=function(e){var t=e.children,a=e.modalId,n=e.isVisible,l=e.header,r=e.footer,c=e.footerLeft,o=e.onModalClose,d=function(e){o(!1);var t=document.getElementById(e);t.children[0].classList.remove("opacity-100"),t.children[0].classList.add("opacity-0"),setTimeout((function(){document.body.classList.remove("overflow-hidden"),document.body.classList.remove("fixed"),t.close()}),100)};return(0,i.useEffect)((function(){n&&function(e){var t=document.getElementById(e),s=document.querySelector("#".concat(a,"_body"));t.open||(null===t||void 0===t||t.showModal(),document.body.classList.add("overflow-hidden"),null===s||void 0===s||s.scrollTo({top:0}),null===t||void 0===t||t.children[0].classList.remove("opacity-0"),null===t||void 0===t||t.children[0].classList.add("opacity-100"),document.body.classList.add("fixed"))}(a)}),[n]),(0,s.jsx)("dialog",{id:a,className:"flex-1 bg-transparent z-0 absolute md:w-screen md:h-screen overflow-hidden",children:(0,s.jsx)("div",{className:"p-7 flex justify-center items-center fixed left-0 top-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-0",children:(0,s.jsx)("div",{className:"bg-white flex rounded-lg w-full h-full mx-auto",children:(0,s.jsxs)("div",{className:"flex flex-col items-center h-full w-full content-between",children:[(0,s.jsxs)("div",{className:"py-4 px-7 flex items-center w-full",children:[(0,s.jsx)("div",{className:"text-gray-900 font-semi-bold text-lg",children:l}),(0,s.jsx)("svg",{onClick:function(){d(a)},className:"ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 18 18",children:(0,s.jsx)("path",{d:"M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"})})]}),(0,s.jsx)("div",{className:"overflow-x-hidden overflow-y-auto w-full h-full flex justify-center",id:"".concat(a,"_body"),children:t}),(0,s.jsxs)("div",{className:"py-4 px-7 flex ".concat(c?"justify-between":"justify-end"," items-center w-full"),children:[(0,s.jsx)("div",{className:"flex space-x-3",children:c}),(0,s.jsxs)("div",{className:"flex space-x-3",children:[r,(0,s.jsx)("button",{type:"button",onClick:function(){d(a)},className:"bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded hidden md:flex",children:"Close"})]})]})]})})})})},r=function(e){var t=e.top,a=e.icon,i=e.headerText,n=e.paragraph,l=e.to;return(0,s.jsxs)("div",{className:"dropdown",children:[(0,s.jsx)("a",{href:l,target:"_blank",rel:"noreferrer",className:"flex content-center  hover:rounded-lg hover:shadow-lg",children:(0,s.jsx)("i",{className:"text-indigo-500","data-feather":a})}),(0,s.jsx)("div",{className:"dropdown-content ".concat(null!==t&&void 0!==t?t:"-mt-10"," w-96 rounded-lg ml-10 z-50 bg-white dark:bg-gray-800"),children:(0,s.jsxs)("div",{className:"px-6 text-sm py-3",children:[(0,s.jsx)("h1",{className:"mb-2 text-lg font-bold text-gray-700 dark:text-gray-500",children:i}),n]})})]})},c=a(8508),o=a.n(c),d=function(e){var t=e.projectName,a=e.projectDescription,n=e.imagePath,l=e.cardWidth;return(0,i.useEffect)((function(){o().replace()}),[]),(0,s.jsxs)("div",{className:"flex flex-col rounded-lg shadow-xl overflow-hidden bg-white dark:bg-gray-800 w-full md:".concat(null!==l&&void 0!==l?l:"w-2/5"," p-1 m-2"),children:[(0,s.jsx)("img",{src:n,alt:a,className:"rounded-t-lg object-cover object-left-top w-full h-56"}),(0,s.jsx)("div",{className:"flex justify-between",children:(0,s.jsx)("h1",{className:"p-3 text-lg text-gray-800 dark:text-gray-500",children:t})})]})},m=a(2335),x=a(4930),f=a(2809),h=a(771);function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){(0,f.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var j=function(e){var t=e.text,a=e.action,i=e.disable,n=e.SetScale,l=e.SetCVPage,r=e.Scale,c=e.CVPage,o=(0,h.Z)(e,["text","action","disable","SetScale","SetCVPage","Scale","CVPage"]);return(0,s.jsx)("button",p(p({className:"bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded \n          ".concat(i?"opacity-40":"hover:bg-gray-500 hover:border-transparent hover:text-white","\n        "),type:"button",disabled:null!==i&&void 0!==i&&i,onClick:function(){switch(a){case"plus_scale":window.innerWidth>768?n(r+.1):n(r+.01);break;case"minus_scale":window.innerWidth>768?n(r-.1):n(r-.01);break;case"prev_page":l(c-1);break;case"next_page":l(c+1)}}},o),{},{children:t}))};m.v0.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(m.v0.version,"/pdf.worker.min.js");var g=function(){var e=(0,i.useState)("CV-Lutfi-alamsyah.pdf"),t=e[0],a=e[1],c=(0,i.useState)(1),o=c[0],f=c[1],h=(0,i.useState)(.6),u=h[0],p=h[1],g=(0,i.useState)(1),y=g[0],w=g[1],b=(0,i.useState)(1),v=b[0],N=b[1],k=(0,i.useState)(!0),S=k[0],P=k[1],C=(0,i.useState)(!1),L=C[0],_=C[1],V=(0,i.useState)(!1),O=V[0],E=V[1],z=function(e){f(1),N(e),window.innerWidth>768?p(1===e?.5:1.5):p(1===e?.15:.6),a(1===e?"CV-Lutfi-alamsyah.pdf":"Resume-Lutfi-Alamsyah.pdf")};return(0,i.useEffect)((function(){window.innerWidth>768?p(1===v?.5:1.5):p(1===v?.15:.6),P(!1)}),[]),(0,s.jsxs)("div",{className:"dark:bg-gray-900",children:[(0,s.jsxs)(n.default,{children:[(0,s.jsx)("title",{children:"Lutfi Alamsyah - Software engineer"}),(0,s.jsx)("meta",{name:"description",content:"Lutfi Alamsyah's portfolio"}),(0,s.jsx)("meta",{name:"keywords",content:"Lutfi Alamsyah portfolio"}),(0,s.jsx)("meta",{name:"author",content:"Lutfi Alamsyah"})]}),S?(0,s.jsx)("div",{className:"flex justify-center items-center h-screen",children:(0,s.jsx)("div",{className:"spin"})}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{className:"fixed h-screen hidden sm:flex flex-col space-y-6 justify-end px-6 py-10 z-30",children:[(0,s.jsx)(r,{to:"https://github.com/lutfialam",icon:"github",headerText:"My github repo",paragraph:(0,s.jsxs)("p",{className:"text-gray-700 dark:text-gray-500",children:["If you want look my repository on github. You can meet me with username ",(0,s.jsx)("span",{className:"text-indigo-500",children:"Lutfialam"})]})}),(0,s.jsx)(r,{to:"https://telegram.me/lutfialamsyah",icon:"send",headerText:"My Telegram",paragraph:(0,s.jsxs)("p",{className:"text-gray-700 dark:text-gray-500",children:["If you want contact me. You can meet me on telegram with username"," ",(0,s.jsx)("span",{className:"text-indigo-500",children:"@Lutfialamsyah"})]})}),(0,s.jsx)(r,{to:"https://www.linkedin.com/in/lutfi-alamsyah/",icon:"linkedin",headerText:"My Linkedin",paragraph:(0,s.jsxs)("p",{className:"text-gray-700 dark:text-gray-500",children:["If you want contact me. You can meet me on linkedin with username"," ",(0,s.jsx)("span",{className:"text-indigo-500",children:"Lutfialamsyah"})]})}),(0,s.jsx)(r,{top:"-mt-24",to:"https://mail.google.com/mail/?view=cm&fs=1&to=lutfialamsyah1003@gmail.com",icon:"mail",headerText:"My Email",paragraph:(0,s.jsxs)("p",{className:"text-gray-700 dark:text-gray-500",children:["If you want contact me. You can meet me on email with username"," ",(0,s.jsx)("span",{className:"text-indigo-500",children:"lutfialamsyah1003@gmail.com"})]})})]}),(0,s.jsx)("div",{className:"z-40 fixed right-0 bottom-0 rounded-full md:hidden bg-indigo-500 m-4 p-4",onClick:function(){E(!0)},children:(0,s.jsx)("i",{className:"text-white","data-feather":"menu"})}),(0,s.jsxs)("aside",{className:"md:hidden",children:[(0,s.jsx)("div",{className:"transform transition-all ease-in-out duration-500 bg-black opacity-50 fixed h-full z-50 w-full ".concat(O?"translate-x-0":"-translate-x-full"),onClick:function(){E(!1)}}),(0,s.jsxs)("div",{className:"flex flex-col p-4 justify-end inset-y-0 rounded-xl w-3/4 fixed right-0 bg-indigo-500 z-50 m-2 transform transition-all ease-in-out duration-700 ".concat(O?"translate-x-0 opacity-100":"translate-x-full opacity-0"),children:[(0,s.jsxs)("h1",{className:"font-semibold text-2xl text-gray-200",children:["Find me at:"," "]}),(0,s.jsx)("hr",{className:"my-3 text-gray-200"}),(0,s.jsxs)("div",{className:"list-none space-y-3",children:[(0,s.jsxs)("a",{rel:"noreferrer",href:"https://github.com/lutfialam",className:"flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between",target:"_blank",children:[(0,s.jsx)("h1",{children:"Github"}),(0,s.jsx)("i",{"data-feather":"github"})]}),(0,s.jsxs)("a",{rel:"noreferrer",href:"https://telegram.me/lutfialamsyah",className:"flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between",target:"_blank",children:[(0,s.jsx)("h1",{children:"Telegram"}),(0,s.jsx)("i",{"data-feather":"send"})]}),(0,s.jsxs)("a",{rel:"noreferrer",href:"https://www.linkedin.com/in/lutfi-alamsyah/",className:"flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between",target:"_blank",children:[(0,s.jsx)("h1",{children:"Linkedin"}),(0,s.jsx)("i",{"data-feather":"linkedin"})]}),(0,s.jsxs)("a",{rel:"noreferrer",href:"https://mail.google.com/mail/?view=cm&fs=1&to=lutfialamsyah1003@gmail.com",className:"flex items-center font-semibold text-2xl text-gray-200 space-x-4 justify-between",target:"_blank",children:[(0,s.jsx)("h1",{children:"E-Mail"}),(0,s.jsx)("i",{"data-feather":"mail"})]})]}),(0,s.jsx)("h1",{className:"font-light text-gray-200 flex self-center mt-24",children:"Lutfialamsyah"})]})]}),(0,s.jsxs)("div",{className:"container sm:pt-0 flex flex-col justify-center mx-20 overflow-hidden",children:[(0,s.jsx)("div",{className:"retangle z-0 hidden md:flex"}),(0,s.jsx)("div",{className:"container h-screen w-screen z-10",children:(0,s.jsx)("div",{className:"justify-center h-full flex flex-col w-full",children:(0,s.jsxs)("div",{className:"flex justify-center w-full",children:[(0,s.jsxs)("div",{className:"flex-col justify-center w-full md:w-2/4 self-center",children:[(0,s.jsxs)("h1",{className:"text-3xl md:text-6xl font-bold text-gray-600 dark:text-gray-500",children:[(0,s.jsx)("span",{className:"text-indigo-500",children:"Hello"}),", Im Lutfi Alamsyah"]}),(0,s.jsxs)("p",{className:"text-gray-500 mt-4 py-4",children:["I am a"," ",(0,s.jsx)("span",{className:"text-indigo-500",children:"Software engineer"})," ","have experienced in build and developing website and android application. For more than two years I have created several website projects, some of which are for other people's needs or for my experiments."]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("button",{className:"bg-indigo-500 text-xs md:text-base py-2 px-4 md:py-3 md:px-9 text-white my-5 focus:outline-none focus:ring rounded-full focus:bg-transparent focus:text-indigo-600 mr-2 md:mr-5",onClick:function(){!function(){var e=document.createElement("a"),a=1==v?"CV-Lutfi-alamsyah.pdf":t;e.href=a,e.setAttribute("download",a),document.body.appendChild(e),e.click(),document.body.removeChild(e)}()},children:"Download CV"}),(0,s.jsx)("button",{className:"bg-transparent text-xs md:text-base py-2 px-4 md:py-3 md:px-9 text-indigo-600 my-5 focus:outline-none rounded-full border-indigo-500 border-2 focus:ring",onClick:function(){_(!0)},children:"View CV"})]})]}),(0,s.jsx)("div",{className:"w-0 md:w-2/4",children:(0,s.jsx)("img",{src:"images/undraw_hello.svg",className:"header_image hidden md:flex w-11/12"})})]})})}),(0,s.jsxs)(x.Iv,{children:[(0,s.jsxs)("div",{className:"container flex md:mb-24 justify-center md:justify-start flex-wrap content-center",id:"portfolio",children:[(0,s.jsxs)("div",{className:"w-full md:w-1/2 flex justify-center md:justify-start flex-wrap content-center",children:[(0,s.jsxs)("h1",{className:"text-2xl md:text-5xl font-bold text-gray-500 my-3",children:["Latest ",(0,s.jsx)("span",{className:"text-indigo-600",children:"project"})]}),(0,s.jsxs)("p",{className:"text-gray-500 self-center text-center md:text-left",children:["My latest project is"," ",(0,s.jsx)("span",{className:"text-indigo-500",children:"Quiz app"}),". is a Educational web to create a game in the form of an interactice quiz that can be used in online learning and can be used as learning evaluation material."]}),(0,s.jsx)("button",{className:"bg-indigo-500 py-3 px-9 text-white my-5 focus:outline-none rounded-full  focus:bg-transparent focus:text-indigo-600 focus:ring mr-5 hidden md:flex",onClick:function(){window.open("https://github.com/Lutfialam/quiz-nextjs")},children:"View repository"})]}),(0,s.jsx)("div",{className:"flex md:w-1/2 w-full mt-8 md:mt-0 content-center justify-center",children:(0,s.jsx)("img",{src:"images/quiz.png",className:"w-full",alt:"Quiz app is build with nextjs"})})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center my-24",children:[(0,s.jsx)("div",{className:"flex justify-center w-full my-3",children:(0,s.jsx)("h1",{className:"text-2xl md:text-5xl font-bold text-gray-500",children:"Web based project"})}),(0,s.jsxs)("div",{className:"flex w-full justify-center flex-wrap",children:[(0,s.jsx)(d,{projectDescription:"Lumah shop is a shoe store website in which there are sales of various shoes, ranging from sports, daily, school and others. This website is made using Java web with hibernate and JSF with bootstrap for the frontend. This website was created only for the purposes of my monthly college project",projectName:"Lumah shop",projectUrl:"",imagePath:"images/new_project.png"}),(0,s.jsx)(d,{projectDescription:"Web enjoy travel contain information about destination in indonesia. Build with java servlet and tailwindcss",projectName:"Enjoy travel",projectUrl:"",imagePath:"images/enjoy_travel-min.png"}),(0,s.jsx)(d,{projectDescription:"Yayasan indonesia berbagi(fiktif) app is web application for collection of donation. Build with laravel",projectName:"Yayasan indagi",projectUrl:"",imagePath:"images/indagi.png"}),(0,s.jsx)(d,{projectDescription:"Web for seacrh text from youtube video (API from other people). Build with vuejs and vuetify",projectName:"TextFromVid",projectUrl:"",imagePath:"images/search_text.png"}),(0,s.jsx)(d,{projectDescription:"Is web for collecting report from public. Build with laravel",projectName:"Pengaduan masyarakat",projectUrl:"",imagePath:"images/pengaduan_masyarakat.jpg"})]})]}),(0,s.jsxs)("div",{className:"flex flex-col justify-center my-24",children:[(0,s.jsx)("div",{className:"flex justify-center w-full my-3",children:(0,s.jsx)("h1",{className:"text-2xl md:text-5xl font-bold text-gray-500",children:"Mobile based project"})}),(0,s.jsxs)("div",{className:"flex w-full justify-center flex-wrap",children:[(0,s.jsx)(d,{projectDescription:"Smartopname is app for entry data presensi and more (Private app)",projectName:"Smartopname",projectUrl:"",imagePath:"images/smartopname.png"}),(0,s.jsx)(d,{projectDescription:"Harsa is app for checking price on building (Private app)",projectName:"Harsa",projectUrl:"",imagePath:"images/harsa.png"})]})]}),(0,s.jsxs)("div",{className:"hidden  flex-col justify-center my-24",children:[(0,s.jsx)("div",{className:"flex justify-center w-full my-3",children:(0,s.jsx)("h1",{className:"text-5xl",children:"Interface design project"})}),(0,s.jsx)("div",{className:"flex w-full justify-center flex-wrap",children:(0,s.jsx)(d,{projectDescription:"Design page for web searching text from video",projectName:"search page design",projectUrl:"",imagePath:"images/ui.png"})})]})]}),(0,s.jsx)("div",{className:"bg-white hidden mx-10 justify-center  flex-wrap flex-col p-5 rounded-xl shadow-2xl mb-5",children:(0,s.jsxs)("div",{className:"w-full flex",children:[(0,s.jsxs)("div",{className:"flex flex-col w-2/5",children:[(0,s.jsx)("h1",{className:"text-5xl mb-5",children:"Contact me"}),(0,s.jsx)("p",{className:"text-gray-500",children:"If you want talk or meet with me. you can contact me in several social media in right side of this paragraph"})]}),(0,s.jsx)("div",{className:"w-3/5"})]})}),(0,s.jsxs)("div",{className:"flex w-full justify-center my-8",children:[(0,s.jsx)("div",{className:"h-1 bg-indigo-500 w-24 flex self-center"}),(0,s.jsxs)("h1",{className:"text-gray-500 mx-4 text-center",children:["Lutfi Alamsyah ",(new Date).getFullYear()]}),(0,s.jsx)("div",{className:"h-1 bg-indigo-500 w-24 flex self-center"})]})]})]}),(0,s.jsx)(l,{modalId:"CV_modal",isVisible:L,onModalClose:_,header:(0,s.jsxs)("div",{className:"dropdown flex justify-center",children:[(0,s.jsxs)("a",{className:"dropbtn no-underline text__navigation flex content-center",children:[(0,s.jsx)("span",{className:"mr-1 hidden md:flex",children:1==v?"Primary CV":"Resume from linkedin"}),(0,s.jsxs)("svg",{className:"fill-current h-4 w-4 flex self-center",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:[(0,s.jsx)("path",{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"})," "]})]}),(0,s.jsxs)("div",{className:"ml-36 mt-6 dropdown-content bg-white w-2/6 md:w-1/6 rounded-lg mr-12",children:[(0,s.jsx)("div",{onClick:function(){z(1)},className:"hover:bg-indigo-500 hover:text-white pl-6 font-light text-xs",children:(0,s.jsxs)("div",{className:"flex flex-row content-center w-full h-full text-gray-500 hover:text-white py-3",children:[(0,s.jsx)("i",{className:"hover:text-white","data-feather":"clipboard"}),(0,s.jsx)("h1",{className:"flex self-center ml-4",children:"Primary CV"})]})}),(0,s.jsx)("div",{onClick:function(){z(2)},className:"hover:bg-indigo-500 hover:text-white pl-6 font-light text-xs",children:(0,s.jsxs)("div",{className:"flex flex-row content-center w-full h-full text-gray-500 hover:text-white py-3",children:[(0,s.jsx)("i",{className:"hover:text-white","data-feather":"linkedin"}),(0,s.jsx)("h1",{className:"flex self-center ml-4",children:"Resume from linkedin"})]})})]})]}),footerLeft:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{CVPage:o,SetCVPage:f,Scale:u,SetScale:p,text:"Prev",action:"prev_page",disable:1==o}),(0,s.jsx)(j,{CVPage:o,SetCVPage:f,Scale:u,SetScale:p,text:"Next",action:"next_page",disable:y==o})]}),footer:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(j,{CVPage:o,SetCVPage:f,Scale:u,SetScale:p,text:"-",action:"minus_scale"}),(0,s.jsx)(j,{CVPage:o,SetCVPage:f,Scale:u,SetScale:p,text:"+",action:"plus_scale"})]}),children:(0,s.jsx)(m.BB,{file:t,loading:(0,s.jsx)("div",{className:"spin"}),onLoadSuccess:function(e){!function(e){var t=e.numPages;w(t)}(e)},children:(0,s.jsx)(m.T3,{pageNumber:o,scale:u,className:"mt-0"})})})]})}},5301:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(4373)}])},3414:function(){},172:function(){},2001:function(){},3779:function(){},2258:function(){}},function(e){e.O(0,[774,577,333,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);