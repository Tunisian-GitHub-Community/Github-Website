"use strict";(self.webpackChunkgithub_tunisia=self.webpackChunkgithub_tunisia||[]).push([[553],{26553:function(e,r,t){t.r(r),t.d(r,{ProjectsPage:function(){return f},default:function(){return b}});var n,s=t(72791),a=t(49734),i=t(80184),o=function(e){var r=e.repos,t=e.isLoading;e.error;return t?(0,i.jsx)("div",{className:"h-screen",children:(0,i.jsx)(a.Z,{})}):(0,i.jsx)("div",{"data-test":"Projects",children:(0,i.jsx)("section",{className:"text-gray-200 body-font",children:(0,i.jsxs)("div",{className:"container px-5 py-24 mx-auto",children:[(0,i.jsxs)("div",{className:"flex flex-col text-center w-full mb-20",children:[(0,i.jsx)("h1",{className:"sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-200",children:"Our Projects"}),(0,i.jsx)("p",{className:"lg:w-2/3 mx-auto leading-relaxed text-base pt-6",children:"Contributed by community members.."})]}),(0,i.jsx)("div",{className:"lg:w-2/3 w-full mx-auto overflow-auto",children:(0,i.jsxs)("table",{className:"table-auto border-collapse border border-gray-800 w-full text-left whitespace-no-wrap",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"border border-gray-800",children:[(0,i.jsx)("th",{className:"px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800 rounded-tl rounded-bl",children:"Name"}),(0,i.jsx)("th",{className:"px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm  bg-gray-800",children:"Description"}),(0,i.jsx)("th",{className:"px-4 py-3 title-font tracking-wider font-medium text-gray-200 text-sm bg-gray-800"})]})}),(0,i.jsx)("tbody",{children:r.map((function(e,r){return(0,i.jsxs)("tr",{"data-test":"repo",className:" border border-gray-800",children:[(0,i.jsx)("td",{className:"px-4 py-3",children:e.node.name}),(0,i.jsx)("td",{className:"px-4 py-3",children:e.node.description}),(0,i.jsx)("td",{className:"w-10 text-center",children:(0,i.jsx)("a",{href:e.node.url,target:"_blank",rel:"noreferrer",className:"flex text-green-500  border border-green-500 mx-2 py-1 my-1 px-3  hover:bg-green-500 hover:text-white  rounded",children:"Github"})})]},r)}))})]})}),(0,i.jsx)("div",{className:"flex pl-4 mt-4 lg:w-2/3 w-full mx-auto",children:(0,i.jsxs)("a",{className:"text-indigo-500 inline-flex items-center hover:text-green-500 md:mb-2 lg:mb-0",href:"https://github.com/Tunisian-GitHub-Community",target:"_blank",rel:"noreferrer",children:["View more",(0,i.jsx)("svg",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,className:"w-4 h-4 ml-2",viewBox:"0 0 24 24",children:(0,i.jsx)("path",{d:"M5 12h14M12 5l7 7-7 7"})})]})})]})})})},l=s.memo(o),c=t(30168),d=t(15861),u=t(87757),x=t.n(u),m=t(91933),h=t(85702),g=function(){var e=(0,d.Z)(x().mark((function e(){var r,t,s;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.github.com/graphql",r=new h.GraphQLClient("https://api.github.com/graphql",{headers:{Authorization:"bearer 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"}}),t=(0,h.gql)(n||(n=(0,c.Z)(['\n    {\n      organization(login: "Tunisian-GitHub-Community") {\n        repositories(isFork: true, first: 10) {\n          edges {\n            node {\n              name\n              description\n              url\n            }\n          }\n        }\n      }\n    }\n  ']))),e.next=5,r.request(t);case 5:return s=e.sent,console.log(s.organization.repositories.edges),e.abrupt("return",s.organization.repositories.edges);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){return(0,m.useQuery)("fetchRepos",g,{staleTime:3e5})},f=function(){var e=p(),r=e.isLoading,t=e.error,n=e.data;return(0,i.jsx)("div",{"data-test":"ProjectsPage",children:(0,i.jsx)(l,{repos:n,isLoading:r,error:t})})},b=f}}]);
//# sourceMappingURL=553.36e9880e.chunk.js.map