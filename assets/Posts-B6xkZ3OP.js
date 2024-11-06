import{_ as u,o,c as l,a as t,n as P,F as c,f as h,t as d,w as p,m as b,g as C,h as k,p as _}from"./index-CPX7HkVN.js";const y={props:{maxVisibleButtons:{type:Number,required:!1,default:3},totalPages:{type:Number,required:!0},perPage:{type:Number,required:!0},currentPage:{type:Number,required:!0}},computed:{isInFirstPage(){return this.currentPage===1},isInLastPage(){return this.currentPage===this.totalPages},startPage(){return this.currentPage===1?1:this.currentPage===this.totalPages?this.totalPages-this.maxVisibleButtons+1:this.currentPage-1},pages(){const s=[];for(let e=this.startPage;e<=Math.min(this.startPage+this.maxVisibleButtons-1,this.totalPages);e++)s.push({name:e,isDisabled:e===this.currentPage});return s}},methods:{onClickFirstPage(){this.$emit("pagechanged",1)},onClickPreviousPage(){this.$emit("pagechanged",this.currentPage-1)},onClickPage(s){this.$emit("pagechanged",s)},onClickNextPage(){this.$emit("pagechanged",this.currentPage+1)},onClickLastPage(){this.$emit("pagechanged",this.totalPages)},isPageActive(s){return this.currentPage===s}}},v={class:"pagination"},f={class:"pagination-item"},x=["disabled"],I={class:"pagination-item"},N=["disabled"],F={class:"pagination-item"},B=["onClick","disabled"],L={class:"pagination-item"},V=["disabled"],D={class:"pagination-item"},H=["disabled"];function q(s,e,g,m,r,a){return o(),l("ul",v,[t("li",f,[t("button",{class:P(["btn btn-primary",{disable:g.currentPage==1}]),type:"button",onClick:e[0]||(e[0]=(...n)=>a.onClickFirstPage&&a.onClickFirstPage(...n)),disabled:a.isInFirstPage}," |< ",10,x)]),t("li",I,[t("button",{class:"btn btn-primary",type:"button",onClick:e[1]||(e[1]=(...n)=>a.onClickPreviousPage&&a.onClickPreviousPage(...n)),disabled:a.isInFirstPage}," << ",8,N)]),(o(!0),l(c,null,h(a.pages,n=>(o(),l("li",F,[t("button",{class:P(["btn btn-primary",{active:a.isPageActive(n.name)}]),type:"button",onClick:i=>a.onClickPage(n.name),disabled:n.isDisabled},d(n.name),11,B)]))),256)),t("li",L,[t("button",{class:"btn btn-primary",type:"button",onClick:e[2]||(e[2]=(...n)=>a.onClickNextPage&&a.onClickNextPage(...n)),disabled:a.isInLastPage}," >> ",8,V)]),t("li",D,[t("button",{class:"btn btn-primary",type:"button",onClick:e[3]||(e[3]=(...n)=>a.onClickLastPage&&a.onClickLastPage(...n)),disabled:a.isInLastPage}," >| ",8,H)])])}const S=u(y,[["render",q]]),T={name:"PostExample",components:{Pagination:S},data(){return{posts:[],currentPage:1,postsPages:[],itemsPerPage:10,totalPages:0}},created(){fetch("https://jsonplaceholder.typicode.com/posts",{method:"GET",headers:{}}).then(s=>{s.json().then(e=>{this.posts=e,this.selectHandleChange()})}).catch(s=>{console.error(s)})},computed:{paginatedItems(){const s=(this.currentPage-1)*Number(this.itemsPerPage);return this.posts.slice(s,s+Number(this.itemsPerPage))}},methods:{onPageChange(s){console.log("Current page: "+s),console.log("Current itemsPerPage: "+this.itemsPerPage),this.currentPage=s;const e=(this.currentPage-1)*this.itemsPerPage,g=e+Number(this.itemsPerPage);console.log("Current page startIndex and endIndex: "+e+" - "+g),this.postsPages=this.posts.slice(e,g)},setTotalPagesPosts(){this.totalPages=Math.ceil(this.posts.length/this.itemsPerPage);const s=(this.currentPage-1)*this.itemsPerPage,e=s+this.itemsPerPage;this.postsPages=this.posts.slice(s,e)},selectHandleChange(){this.setTotalPagesPosts()}}},E={class:"float-end"},M={class:"table table-bordered table-striped mt4"},j={class:"table-group-divider"};function w(s,e,g,m,r,a){const n=_("pagination");return o(),l(c,null,[e[5]||(e[5]=t("div",null,"Hello",-1)),e[6]||(e[6]=t("button",{type:"button",class:"btn btn-primary mb-4"},"Submit",-1)),t("div",E,[e[3]||(e[3]=t("label",{for:"select"},"Posts per page:",-1)),p(t("select",{id:"select",class:"select","onUpdate:modelValue":e[0]||(e[0]=i=>r.itemsPerPage=i),onChange:e[1]||(e[1]=(...i)=>a.selectHandleChange&&a.selectHandleChange(...i))},e[2]||(e[2]=[C('<option disabled value="">Please select one</option><option value="1">1</option><option value="3">3</option><option value="5">5</option><option value="10">10</option><option value="20">20</option>',6)]),544),[[b,r.itemsPerPage]])]),t("table",M,[e[4]||(e[4]=t("thead",null,[t("tr",null,[t("th",{scope:"col"},"UserID"),t("th",{scope:"col"},"ID"),t("th",{scope:"col"},"Title"),t("th",{scope:"col"},"Body")])],-1)),t("tbody",j,[(o(!0),l(c,null,h(a.paginatedItems,i=>(o(),l("tr",{key:i.id},[t("td",null,d(i.userId),1),t("td",null,d(i.id),1),t("td",null,d(i.title),1),t("td",null,d(i.body),1)]))),128))])]),k(n,{totalPages:r.totalPages,perPage:Number(r.itemsPerPage),currentPage:r.currentPage,onPagechanged:a.onPageChange},null,8,["totalPages","perPage","currentPage","onPagechanged"])],64)}const U=u(T,[["render",w]]);export{U as default};