(function(e){function n(n){for(var i,o,r=n[0],s=n[1],l=n[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(t,o)&&t[o]&&d.push(t[o][0]),t[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);m&&m(n);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,n=0;n<c.length;n++){for(var a=c[n],i=!0,o=1;o<a.length;o++){var r=a[o];0!==t[r]&&(i=!1)}i&&(c.splice(n--,1),e=s(s.s=a[0]))}return e}var i={},o={app:0},t={app:0},c=[];function r(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-01486571":"2f714246","chunk-065f1514":"b8eaac35","chunk-132feb18":"11d09a06","chunk-1c3a7ae6":"02c5cead","chunk-1fd0d98a":"693e1aa9","chunk-2d0c031e":"32b44feb","chunk-2d0c1cc1":"0aaf412e","chunk-2d20edf4":"67b95bca","chunk-2d20efc9":"21f60c10","chunk-2d2297e9":"b1a0eeb3","chunk-32f2441c":"bf750d03","chunk-4754745c":"6cf98bb7","chunk-4a378c9e":"60d19fc5","chunk-4e410830":"68a346f3","chunk-679a7bd8":"4759fd6d",actividad:"42b579e9","chunk-6ae87db0":"3368785c","chunk-70cf02ae":"17ec95ee","chunk-732fe513":"6111f373","chunk-73811e5c":"ca8c6e15","chunk-756614a8":"a35fa76b","chunk-759933fd":"f3a363ec","chunk-760ecdc0":"32dec015","chunk-7c6586f1":"99a7db50","chunk-9b1c4f28":"9695bc8f","chunk-aeba2614":"fc211fa6","chunk-b5768118":"9768d4dc","chunk-be077ba8":"0708e312","chunk-cb526bc0":"91a3732f","chunk-d4847814":"5dbfadb7","chunk-dfda403c":"2e5a9c98","chunk-e99213f6":"cd57054f","chunk-ec42f290":"c294b61c","chunk-f3c27cb0":"ba5ecd51","chunk-f6b4836c":"ea5f69d7",comple:"2770da03",glosario:"a85af386",intro:"8146f30b",referencias:"9f600a02",sintesis:"39e41d39",tema1:"1394f709",tema2:"105efba0"}[e]+".js"}function s(n){if(i[n])return i[n].exports;var a=i[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.e=function(e){var n=[],a={"chunk-01486571":1,"chunk-065f1514":1,"chunk-1c3a7ae6":1,"chunk-4e410830":1,"chunk-679a7bd8":1,"chunk-70cf02ae":1,"chunk-732fe513":1,"chunk-73811e5c":1,"chunk-759933fd":1,"chunk-7c6586f1":1,"chunk-9b1c4f28":1,"chunk-b5768118":1,"chunk-e99213f6":1,"chunk-ec42f290":1,"chunk-f6b4836c":1,comple:1,glosario:1,intro:1,referencias:1,sintesis:1,tema1:1,tema2:1};o[e]?n.push(o[e]):0!==o[e]&&a[e]&&n.push(o[e]=new Promise((function(n,a){for(var i="css/"+({actividad:"actividad",comple:"comple",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2"}[e]||e)+"."+{"chunk-01486571":"97da5f0c","chunk-065f1514":"d2af8540","chunk-132feb18":"31d6cfe0","chunk-1c3a7ae6":"a67093c7","chunk-1fd0d98a":"31d6cfe0","chunk-2d0c031e":"31d6cfe0","chunk-2d0c1cc1":"31d6cfe0","chunk-2d20edf4":"31d6cfe0","chunk-2d20efc9":"31d6cfe0","chunk-2d2297e9":"31d6cfe0","chunk-32f2441c":"31d6cfe0","chunk-4754745c":"31d6cfe0","chunk-4a378c9e":"31d6cfe0","chunk-4e410830":"979d1175","chunk-679a7bd8":"e36e7f95",actividad:"31d6cfe0","chunk-6ae87db0":"31d6cfe0","chunk-70cf02ae":"a67093c7","chunk-732fe513":"364d6b49","chunk-73811e5c":"a67093c7","chunk-756614a8":"31d6cfe0","chunk-759933fd":"d56d3cef","chunk-760ecdc0":"31d6cfe0","chunk-7c6586f1":"3fb936bb","chunk-9b1c4f28":"a67093c7","chunk-aeba2614":"31d6cfe0","chunk-b5768118":"a67093c7","chunk-be077ba8":"31d6cfe0","chunk-cb526bc0":"31d6cfe0","chunk-d4847814":"31d6cfe0","chunk-dfda403c":"31d6cfe0","chunk-e99213f6":"31931555","chunk-ec42f290":"a67093c7","chunk-f3c27cb0":"31d6cfe0","chunk-f6b4836c":"a67093c7",comple:"88624709",glosario:"643a5192",intro:"979d1175",referencias:"3a94fd70",sintesis:"3cfb951d",tema1:"e6c25b22",tema2:"979d1175"}[e]+".css",t=s.p+i,c=document.getElementsByTagName("link"),r=0;r<c.length;r++){var l=c[r],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===i||u===t))return n()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){l=d[r],u=l.getAttribute("data-href");if(u===i||u===t)return n()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=n,m.onerror=function(n){var i=n&&n.target&&n.target.src||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=i,delete o[e],m.parentNode.removeChild(m),a(c)},m.href=t;var f=document.getElementsByTagName("head")[0];f.appendChild(m)})).then((function(){o[e]=0})));var i=t[e];if(0!==i)if(i)n.push(i[2]);else{var c=new Promise((function(n,a){i=t[e]=[n,a]}));n.push(i[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=r(e);var d=new Error;l=function(n){u.onerror=u.onload=null,clearTimeout(m);var a=t[e];if(0!==a){if(a){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,a[1](d)}t[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(n)},s.m=e,s.c=i,s.d=function(e,n,a){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)s.d(a,i,function(n){return e[n]}.bind(null,i));return a},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=n,l=l.slice();for(var d=0;d<l.length;d++)n(l[d]);var m=u;c.push([0,"chunk-vendors"]),a()})({0:function(e,n,a){e.exports=a("56d7")},"0462":function(e,n,a){"use strict";var i=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("footer",{staticClass:"container footer tarjeta p-3 px-sm-5 py-sm-4",class:[e.allRound&&"footer__all-round"]},[a("div",{staticClass:"row align-items-center justify-content-center"},[e._m(0),a("div",{staticClass:"col-12 col-sm"},[a("p",{staticClass:"mb-2 text-small"},[e._v("Este material puede ser distribuido, copiado y exhibido por terceros si se muestra en los créditos. No se puede obtener ningún beneficio comercial y las obras derivadas tienen que estar bajo los mismos términos de la licencia que el trabajo original.")]),a("p",{staticClass:"mb-0 text-small"},[e._v(" Base v"+e._s(e.versiones.base)+" - Paquete v"+e._s(e.versiones.pkg))])])])])},o=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"col-auto mb-2 mb-sm-0"},[i("img",{attrs:{src:a("52e5")}})])}],t={name:"Footer",props:{allRound:{type:Boolean,default:!1}},computed:{versiones:function(){return{base:this.$package.version,pkg:this.$package.dependencies["ecored-base-pkg"]}}}},c=t,r=(a("13f0"),a("2877")),s=Object(r["a"])(c,i,o,!1,null,null,null);n["a"]=s.exports},"10dd":function(e,n,a){e.exports=a.p+"img/logo-footer.69605647.png"},"13f0":function(e,n,a){"use strict";a("450b")},3654:function(e,n,a){"use strict";a("caba")},4269:function(e,n,a){e.exports=a.p+"img/logo.b705f640.svg"},"450b":function(e,n,a){},"52e5":function(e,n,a){e.exports=a.p+"img/cc.58a75e32.svg"},"56d7":function(e,n,a){"use strict";a.r(n);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),o=a("f5af"),t=a.n(o);a("becf"),a("7b17"),a("ab8b"),a("d3b7"),a("3ca3"),a("ddb0");i["a"].component("AsideMenu",(function(){return a.e("chunk-732fe513").then(a.bind(null,"955f"))})),i["a"].component("Header",(function(){return a.e("chunk-7c6586f1").then(a.bind(null,"d6e4"))})),i["a"].component("BarraAvance",(function(){return a.e("chunk-759933fd").then(a.bind(null,"caa6"))})),i["a"].component("BannerInterno",(function(){return a.e("chunk-4e410830").then(a.bind(null,"3cd8"))})),i["a"].component("Accesibilidad",(function(){return a.e("chunk-01486571").then(a.bind(null,"adae"))})),i["a"].component("AcordionA",(function(){return a.e("chunk-4754745c").then(a.bind(null,"3997"))})),i["a"].component("TabsA",(function(){return a.e("chunk-d4847814").then(a.bind(null,"67eb"))})),i["a"].component("TabsB",(function(){return a.e("chunk-1fd0d98a").then(a.bind(null,"fd2f"))})),i["a"].component("TabsC",(function(){return a.e("chunk-be077ba8").then(a.bind(null,"58a2"))})),i["a"].component("LineaTiempoA",(function(){return a.e("chunk-2d0c031e").then(a.bind(null,"416a"))})),i["a"].component("LineaTiempoB",(function(){return a.e("chunk-2d20efc9").then(a.bind(null,"b269"))})),i["a"].component("LineaTiempoC",(function(){return a.e("chunk-73811e5c").then(a.bind(null,"0433"))})),i["a"].component("LineaTiempoD",(function(){return a.e("chunk-760ecdc0").then(a.bind(null,"eb7b"))})),i["a"].component("LineaTiempoE",(function(){return a.e("chunk-cb526bc0").then(a.bind(null,"18cd"))})),i["a"].component("PasosA",(function(){return a.e("chunk-32f2441c").then(a.bind(null,"926a"))})),i["a"].component("PasosB",(function(){return a.e("chunk-f6b4836c").then(a.bind(null,"d963"))})),i["a"].component("SlyderA",(function(){return a.e("chunk-1c3a7ae6").then(a.bind(null,"b198"))})),i["a"].component("SlyderB",(function(){return a.e("chunk-ec42f290").then(a.bind(null,"aae4"))})),i["a"].component("SlyderC",(function(){return a.e("chunk-9b1c4f28").then(a.bind(null,"5dc7"))})),i["a"].component("SlyderD",(function(){return a.e("chunk-70cf02ae").then(a.bind(null,"bedf"))})),i["a"].component("SlyderE",(function(){return a.e("chunk-b5768118").then(a.bind(null,"a37a"))})),i["a"].component("SlyderF",(function(){return a.e("chunk-065f1514").then(a.bind(null,"7195"))})),i["a"].component("ModalA",(function(){return a.e("chunk-2d0c1cc1").then(a.bind(null,"4829"))})),i["a"].component("ImagenInfografica",(function(){return a.e("chunk-aeba2614").then(a.bind(null,"61ad"))})),i["a"].component("ImagenInfograficaB",(function(){return a.e("chunk-dfda403c").then(a.bind(null,"84b0"))})),i["a"].component("Separador",(function(){return a.e("chunk-2d2297e9").then(a.bind(null,"de4f"))})),i["a"].component("Zoom",(function(){return a.e("chunk-756614a8").then(a.bind(null,"301f"))})),i["a"].component("Audio",(function(){return a.e("chunk-4a378c9e").then(a.bind(null,"af8b"))})),i["a"].component("TarjetaAudio",(function(){return a.e("chunk-132feb18").then(a.bind(null,"b052"))})),i["a"].component("Dialogo",(function(){return a.e("chunk-6ae87db0").then(a.bind(null,"e15e"))})),i["a"].component("DialogoBurbuja",(function(){return a.e("chunk-2d20edf4").then(a.bind(null,"b0e5"))})),i["a"].component("DialogoActividad",(function(){return a.e("chunk-f3c27cb0").then(a.bind(null,"0ac6"))})),i["a"].component("Actividad",(function(){return a.e("chunk-679a7bd8").then(a.bind(null,"f31f"))})),i["a"].component("DownloadCard",(function(){return a.e("chunk-e99213f6").then(a.bind(null,"a16c"))}));a("caad"),a("2532"),a("ac1f"),a("1276"),a("2ca0");i["a"].mixin({methods:{obtenerLink:function(e){var n=window.location.href,a=n.includes("/index.html#")?"index.html#":"#/",i=n.split(a)[0],o=e.startsWith("/")?e.substring(1):e;return i+o}}}),i["a"].prototype.$aos=t.a,i["a"].prototype.$aosRefresh=function(){for(var e=0;e<=3;e++)setTimeout((function(){t.a.refresh()}),1e3*e)},i["a"].config.productionTip=!1,i["a"].directive("child",{bind:function(e,n){e.appendChild(n.value)}});var c=i["a"],r=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"app",attrs:{id:"app"}},[e.isHome?e._e():a("Header"),a("div",{staticClass:"contenedor-principal"},[a("AsideMenu"),a("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[a("router-view")],1)],1),a("BarraAvance")],1)},s=[],l=(a("b0c0"),{name:"App",computed:{menuState:function(){return this.$store.getters.isMenuOpen},isHome:function(){return"home"===this.$route.name}},mounted:function(){this.$aos.init({offset:100})}}),u=l,d=(a("cf25"),a("2877")),m=Object(d["a"])(u,r,s,!1,null,null,null),f=m.exports,p=a("8c4f"),b=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("section",{staticClass:"inicio"},[i("BannerPrincipal",{staticClass:"mb-5"}),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro px-3 py-4 px-sm-5 pb-sm-5 mb-5",attrs:{id:"contenidos"}},[e._m(0),i("div",{staticClass:"tarjeta--blanca p-3 p-sm-4"},[i("div",{staticClass:"desarrollo-contenidos"},e._l(e.desarrolloContenidosData,(function(n){return i("router-link",{key:"desarrollo-"+n.nombreRuta,staticClass:"desarrollo-contenidos__item",attrs:{to:{name:n.nombreRuta}}},[i("div",{staticClass:"desarrollo-contenidos__item__texto"},[n.hasOwnProperty("numero")?i("span",{staticClass:"desarrollo-contenidos__item__icono"},[e._v(e._s(n.numero))]):i("i",{staticClass:"desarrollo-contenidos__item__icono",class:n.icono}),i("span",{domProps:{innerHTML:e._s(n.titulo)}})]),i("a",{staticClass:"boton--sm"},[i("span",{staticClass:"d-none d-md-block"},[e._v("Ver contenido")]),i("span",{staticClass:"d-md-none"},[e._v("Ver")])])])})),1)])]),i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro creditos-inicio px-3 py-4 px-sm-5"},[e.creditosInicio?i("div",{staticClass:"creditos-inicio__container"},e._l(e.creditosInicio,(function(n,a){return i("div",{staticClass:"creditos-inicio__item"},[i("div",{staticClass:"row"},[i("div",{staticClass:"creditos-inicio__titulo col-md-3 col-lg-2 mb-3 mb-md-0"},[i("h5",{staticClass:"mb-0",domProps:{innerHTML:e._s(n.titulo)}})]),i("div",{staticClass:"creditos-inicio__imagenes col"},e._l(n.contenido,(function(e){return i("img",{attrs:{src:e}})})),0)]),a!=e.creditosInicio.length-1?i("hr"):e._e()])})),0):i("div",{staticClass:"text-center"},[i("img",{staticClass:"d-inline-block mb-2",staticStyle:{width:"100px"},attrs:{src:a("4269")}}),i("h5",{staticClass:"mb-0"},[e._v("Ecosistema de Recursos Educativos Digitales")])])]),i("Footer")],1)},h=[function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"titulo__template--a mb-4"},[a("h3",[e._v("Desarrollo"),a("br"),e._v("de contenidos")])])}],g=a("2909"),v=(a("99af"),a("4de4"),function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"banner-principal"},[a("div",{staticClass:"container tarjeta",style:{"background-image":e.globalData.fondoBannerPrincipal?"url("+e.globalData.fondoBannerPrincipal+")":"none"}},[a("div",{staticClass:"row banner-principal__row"},[a("div",{staticClass:"col-lg-7 col-xxl-5 ps-4 ps-sm-5 py-4 py-sm-5 banner-principal__info"},[a("div",{staticClass:"banner-principal__componente"},[a("h1",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.componenteFormativo)}})]),a("div",{staticClass:"banner-principal__descripcion"},[a("p",{staticClass:"mb-0",domProps:{innerHTML:e._s(e.globalData.descripcionCurso)}})]),a("div",{staticClass:"banner-principal__accion"},[a("router-link",{staticClass:"boton",attrs:{to:{name:e.iniciarLnk.nombreRuta}}},[a("span",{staticClass:"me-1"},[e._v("Ver más")]),a("i",{staticClass:"fas fa-angle-right"})])],1)]),a("div",{staticClass:"d-none d-lg-block col-lg-5 px-0 banner-principal__img"},[a("img",{attrs:{src:e.globalData.imagenBannerPrincipal}}),e._l(e.extraImgs,(function(e){return a("div",{class:e.clases},[a("img",{attrs:{src:e.imagen}})])}))],2)])])])}),k=[],y=a("ff6a"),C={name:"BannerPrincipal",mixins:[y["a"]],computed:{globalData:function(){return this.$config.global},extraImgs:function(){return this.$config.global.imagenesDecorativasBanner}}},_=C,x=(a("f178"),Object(d["a"])(_,v,k,!1,null,null,null)),w=x.exports,E=a("0462"),S={name:"Inicio",components:{BannerPrincipal:w,Footer:E["a"]},computed:{menuPrincipalData:function(){return this.$config.menuPrincipal},creditosInicio:function(){return this.$config.creditosInicio},desarrolloContenidosData:function(){var e=[].concat(Object(g["a"])(this.menuPrincipalData.menu),Object(g["a"])(this.menuPrincipalData.subMenu));return e.filter((function(e){return e.desarrolloContenidos}))}}},D=S,O=(a("6e1b"),Object(d["a"])(D,b,h,!1,null,null,null)),A=(O.exports,function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"curso",attrs:{id:"curso"}},[a("router-view")],1)}),T=[],R={name:"Curso"},P=R,j=Object(d["a"])(P,A,T,!1,null,null,null),I=j.exports,q=function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("div",{staticClass:"curso-container d-flex flex-column min-vh-100"},[a("div",{staticClass:"container d-flex flex-column justify-content-center flex-grow-1 px-0 px-md-2"},[a("div",{staticClass:"home-content d-flex flex-column-reverse flex-lg-column p-4 p-lg-0"},[a("div",{staticClass:"bg-white"},[a("div",{staticClass:"row g-0"},[e._m(0),e._m(1),a("div",{staticClass:"col-xl-7 info-section"},[a("div",{staticClass:"content-wrapper px-lg-4 pt-lg-4 px-xxl-5 py-xxl-5 text-start"},[a("p",{staticClass:"home-main-title text-uppercase"},[e._v("Unidad 2")]),a("h1",{staticClass:"home-title mb-4"},[e._v("Desarrollo físico, cognitivo y emocional en las etapas de la infancia y adolescencia")]),a("p",{staticClass:"descripcion mb-3"},[e._v("Desde el desarrollo embrionario y a lo largo de toda la vida, los seres humanos experimentan cambios físicos, cognitivos y emocionales que reflejan su crecimiento y adaptación al entorno. En esta unidad, exploraremos las características clave de estas etapas, comprendiendo los hitos que definen el desarrollo en la infancia y adolescencia. Además, se analizarán estrategias de intervención educativa y psicológica que promuevan un crecimiento saludable en estas etapas.")]),a("p",{staticClass:"descripcion mb-4 text-bold"},[e._v("¡Prepárate para profundizar en el fascinante proceso del desarrollo humano y en cómo apoyar su evolución de manera efectiva!")]),a("div",{staticClass:"button-container mt-auto"},[a("router-link",{staticClass:"btn-iniciar w-100 w-md-auto",attrs:{to:{name:"introduccion"}}},[a("div",{staticClass:"iniciar-btn-container w-100 w-md-auto"},[a("span",{staticClass:"iniciar-btn-text"},[e._v("INICIAR")]),a("div",{staticClass:"icon"},[a("i",{staticClass:"fas fa-chevron-right"})])])])],1)])])])]),e._m(2)])])])},M=[function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"d-none d-xl-block d-xl-flex mb-4 mb-md-0 col-md-4 col-xl-5 imagen-section"},[i("img",{staticClass:"img-fluid h-full",staticStyle:{"max-width":"672px"},attrs:{src:a("733a"),alt:"Estudiante virtual"}})])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"d-block d-lg-none mx-auto mb-4 mb-lg-0 col-md-8 col-lg-6 imagen-section"},[i("img",{staticClass:"img-fluid h-full",staticStyle:{"max-width":"672px"},attrs:{src:a("9539"),alt:"Estudiante virtual"}})])},function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("footer",{staticClass:"footer bg-white"},[i("div",{staticClass:"container px-4 py-3"},[i("div",{staticClass:"row justify-content-start align-items-center"},[i("div",{staticClass:"col-lg-auto"},[i("img",{staticClass:"logo-footer",attrs:{src:a("10dd"),alt:"Logo Tecnológica del Oriente"}})]),i("div",{staticClass:"col-lg px-0 d-none d-lg-block"},[i("p",{staticClass:"footer-text mb-0"},[e._v("Todo el contenido de este curso es propiedad intelectual de Corporación Tecnológica del Oriente y está protegido por derechos de autor. No puede ser reproducido, distribuido, modificado ni compartido sin su autorización por escrito.")])])])])])}],L={name:"Home"},N=L,z=(a("3654"),Object(d["a"])(N,q,M,!1,null,null,null)),B=z.exports;i["a"].use(p["a"]);var $=new p["a"]({routes:[{path:"/",name:"inicio",component:B},{path:"/introduccion",name:"introduccion",component:function(){return a.e("intro").then(a.bind(null,"5167"))}},{path:"/curso",name:"curso",component:I,redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return a.e("tema1").then(a.bind(null,"b14e"))}},{path:"tema2",name:"tema2",component:function(){return a.e("tema2").then(a.bind(null,"5b0d"))}}]},{path:"/actividad/:index?",name:"actividad"},{path:"/actividad-didactica",name:"actividadDidactica",component:function(){return Promise.all([a.e("chunk-679a7bd8"),a.e("actividad")]).then(a.bind(null,"7ac8"))}},{path:"/glosario",name:"glosario",component:function(){return a.e("glosario").then(a.bind(null,"c92c"))}},{path:"/complementario",name:"complementario",component:function(){return a.e("comple").then(a.bind(null,"dbb5"))}},{path:"/referencias",name:"referencias",component:function(){return a.e("referencias").then(a.bind(null,"7c1e"))}},{path:"/sintesis",name:"sintesis",component:function(){return a.e("sintesis").then(a.bind(null,"79ad"))}}],scrollBehavior:function(e,n){if(e.hash){var a={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===n.name?a:new Promise((function(e){setTimeout((function(){e(a)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),F=$,V=a("2f62");i["a"].use(V["a"]);var U=new V["a"].Store({state:{loading:0,menuOpen:!1},getters:{isLoading:function(e){return!!e.loading},isMenuOpen:function(e){return e.menuOpen}},mutations:{toggleMenu:function(e,n){e.menuOpen=n},increment:function(e){e.loading++},decrease:function(e){e.loading--}},actions:{toggleMenu:function(e,n){var a=e.commit;a("toggleMenu",n)},increment:function(e){var n=e.commit;n("increment")},decrease:function(e){var n=e.commit;n("decrease")}}}),H=(a("a3a0"),{global:{componenteFormativo:"Componente Formativo con un nombre extremadamente largo y extenso",descripcionCurso:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.",imagenBannerPrincipal:a("ae0a"),fondoBannerPrincipal:a("e6b0"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:a("e3ba")},{clases:["banner-principal-decorativo-2"],imagen:a("900c")}]},menuPrincipal:{menu:[{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Desarrollo físico, cognitivo y emocional en las etapas de la infancia y adolescencia",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Etapas del desarrollo infantil: motor, cognitivo, social y emocional",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Crecimiento y desarrollo en la niñez",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Desarrollo del cerebro y plasticidad neuronal. Cambios físicos y emocionales en la adolescencia",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"La intercomunicación de las neuronas: sinapsis ",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Definición y etapas de la adolescencia",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Trastornos del desarrollo: factores de riesgo y estrategias de intervención",hash:"t_2_3"},{icono:"far fa-file-alt",numero:"2.4",titulo:"¿Es clave la estimulación temprana?",hash:"t_2_4"}]},{nombreRuta:"sintesis",titulo:"Síntesis",unidad:"",desarrolloContenidos:!0}],subMenu:[{nombreRuta:"actividadDidactica",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"}]},referencias:[{referencia:"Apaza, E. A., Huamán, J. V., Ramírez, G. M., Segovia, D. S. y Suarez, M. A. (2017). Estudio de casos de niños con Trastornos del Neurodesarrollo: Trastorno del espectro autista, discapacidad intelectual y retraso global del desarrollo",link:"https://www.researchgate.net/profile/Aime-Quispe/publication/341498580_ESTUDIO_DE_CASOS_DE_NINOS_CON_TRASTORNOS_DEL_NEURODESARROLLO_Trastorno_del_Espectro_Autista_Discapacidad_Intelectual_y_Retraso_Global_del_Desarrollo/links/5ec485f592851c11a87781eb/ESTUDIO-DE-CASOS-DE-NINOS-CON-TRASTORNOS-DEL-NEURODESARROLLO-Trastorno-del-Espectro-Autista-Discapacidad-Intelectual-y-Retraso-Global-del-Desarrollo.pdf"},{referencia:"MEECE, J. (2000). Desarrollo del niño y del adolescente. Capítulo Teoría del desarrollo cognoscitivo de Piaget. Compendio para educadores",link:"https://www.guao.org/sites/default/files/portafolio%20docente/Teor%C3%ADa%20del%20desarrollo%20de%20Piaget.pdf"},{referencia:"ORTEGA, C. FRANCO, J. (2010). Neurofisiología del aprendizaje y la memoria. Plasticidad Neuronal. Archivos de Medicina Vol. 6 No. 1:2",link:"https://www.archivosdemedicina.com/medicina-de-familia/neurofisiologa-del-aprendizaje-y-la-memoria-plasticidad-neuronal.pdf"},{referencia:"Sierra, B. LEÓN, P. (2019). Plasticidad cerebral, una realidad neuronal. Rev Ciencias Médicas. 2019;23(4):599-609",link:"https://www.medigraphic.com/pdfs/pinar/rcm-2019/rcm194o.pdf"}],glosario:[{termino:"Acomodación",significado:"Concepto fundamental en la teoría del desarrollo cognitivo de Jean Piaget, que se refiere al proceso mediante el cual un individuo ajusta sus esquemas mentales para integrar nueva información o experiencias."},{termino:"Adolescencia",significado:"Periodo del desarrollo humano que se sitúa entre la niñez y la adultez, caracterizado por intensos cambios biológicos, psicológicos y sociales. Inicia con la pubertad, que generalmente comienza entre los 10 y 13 años, y se extiende hasta los 19 o 21 años, dependiendo de diversas fuentes y contextos culturales."},{termino:"Asimilación",significado:"Se refiere al proceso mediante el cual un organismo o individuo integra nueva información o elementos en estructuras preexistentes. En el ámbito psicológico, la asimilación fue introducida por Jean Piaget como parte de su teoría del desarrollo cognitivo. Este proceso implica la incorporación de nueva información a esquemas mentales ya existentes sin modificar estos esquemas."},{termino:"Desarrollo Cognitivo",significado:"Se refiere a la progresión de las capacidades intelectuales, que incluyen la percepción, el razonamiento, la memoria, el lenguaje y la resolución de problemas. Este proceso es esencial para el aprendizaje y se basa en la interacción entre el individuo y su entorno. A medida que los niños crecen, desarrollan habilidades tanto motoras como cognitivas que les permiten interactuar con su mundo de manera más efectiva."},{termino:"Desarrollo Emocional",significado:"Asociado con la capacidad de un niño para reconocer y manejar sus emociones y responder adecuadamente a las emociones de los demás. Es un proceso gradual e integrativo, comenzando desde el nacimiento y continuando a lo largo de la infancia y la adolescencia. A través de interacciones significativas con sus cuidadores y pares, los niños aprenden a identificar sus sentimientos y a desarrollar habilidades como la empatía y la regulación emocional."},{termino:"Desarrollo Físico",significado:"Se manifiesta a través de cambios significativos en las habilidades motoras, la fuerza, la resistencia y la salud general. Este desarrollo se puede dividir en diferentes etapas, según la edad y las necesidades específicas."},{termino:"Determinismo biológico",significado:"Pensamiento que sostiene que el comportamiento humano y los fenómenos sociales son el resultado directo de factores biológicos, principalmente genéticos. Esta perspectiva se ha utilizado para explicar diversas desigualdades sociales, como la pobreza, la violencia y las diferencias de género, atribuyendo estas condiciones a características innatas de los individuos o grupos."},{termino:"Estadios",significado:"Etapas son universales y se caracterizan por cambios cualitativos en la forma de pensar y entender el mundo."},{termino:"Infancia",significado:"Abarca desde el nacimiento hasta el inicio de la pubertad, generalmente considerado alrededor de los 11 a 14 años."},{termino:"Inteligencia",significado:"Capacidad de comprender, razonar, resolver problemas y adaptarse a nuevas situaciones. Se ha definido de diversas maneras a lo largo de la historia, abarcando desde habilidades cognitivas hasta aspectos emocionales y creativos."},{termino:"Intervención Educativa",significado:"Conjunto de acciones planificadas y específicas diseñadas para abordar las necesidades educativas de los estudiantes. Su objetivo es facilitar el aprendizaje y el desarrollo integral del alumnado, especialmente en situaciones donde se identifican dificultades académicas, emocionales o conductuales."},{termino:"Intervención Psicológica",significado:"Aplicación de principios y técnicas psicológicas por parte de profesionales acreditados, con el objetivo de ayudar a individuos o grupos a comprender y superar problemas emocionales, conductuales o psicosociales. Esta práctica se basa en una evaluación exhaustiva de las dificultades del paciente y busca mejorar su bienestar general y sus relaciones interpersonales."},{termino:"Neurogénesis",significado:"Proceso mediante el cual se generan nuevas neuronas a partir de células madre y progenitoras. Este fenómeno es crucial durante el desarrollo embrionario, pero investigaciones recientes han demostrado que también ocurre en el cerebro adulto, aunque en menor medida."},{termino:"Neuronas",significado:"Células altamente especializadas que constituyen la unidad funcional del sistema nervioso. Su principal función es recibir, procesar y transmitir información mediante señales eléctricas y químicas."},{termino:"Plasticidad Neuronal",significado:"También conocida como neuroplasticidad, se refiere a la capacidad del sistema nervioso para cambiar su estructura y funcionamiento a lo largo de la vida. Este fenómeno es fundamental para el aprendizaje, la memoria y la recuperación de lesiones, permitiendo que las neuronas forman nuevas conexiones y se adapten a nuevas experiencias."},{termino:"Poda Sináptica",significado:"Es un proceso biológico que ocurre en el cerebro, durante las etapas de desarrollo infantil y adolescente. Implica la eliminación de conexiones sinápticas que se consideran innecesarias o débiles, permitiendo así que las conexiones más fuertes se fortalezcan y optimicen la comunicación neuronal."},{termino:"Psicología evolutiva",significado:"Rama de la psicología que estudia el desarrollo humano, desde el nacimiento hasta la vejez. Su objetivo es comprender cómo los cambios psicológicos afectan a las personas en diferentes etapas de su vida y cómo estos cambios son influenciados por factores biológicos y ambientales."},{termino:"Sinapsis",significado:"Proceso en la comunicación neuronal, que permite la transmisión de impulsos nerviosos entre neuronas o entre una neurona y otra célula, como una célula muscular o glandular."},{termino:"Teoría cognitiva constructivista",significado:"Enfoque psicológico y educativo que enfatiza cómo los individuos construyen su conocimiento a través de la interacción con su entorno y la integración de nuevas experiencias con conocimientos previos. Esta teoría se basa en la premisa de que el aprendizaje es un proceso activo y no pasivo."}],complementario:[{tema:"Estrategias para la segmentación de mercados",referencia:"Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas",tipo:"Video",link:"https://www.google.com/"},{tema:"Estrategias para la segmentación de mercados",referencia:"Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas",tipo:"Video",link:"https://www.google.com/"},{tema:"Estrategias para la segmentación de mercados",referencia:"Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas",tipo:"Video",link:"https://www.google.com/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios Regional Tolima"},{nombre:["Nombre 1","Nombre 2"],cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Nombre",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}]},{titulo:"GESTORES DE REPOSITORIO",autores:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});c.prototype.$config=H;var G=a("9224");c.prototype.$package=G,new c({router:F,store:U,render:function(e){return e(f)}}).$mount("#app")},"6e1b":function(e,n,a){"use strict";a("703c")},"703c":function(e,n,a){},"733a":function(e,n,a){e.exports=a.p+"img/banner.40779ff5.png"},"900c":function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-2.bfee2ec4.svg"},9224:function(e){e.exports=JSON.parse('{"name":"escala-pkg","version":"1.0.0","description":"paquete para la base de desarrollo de los cursos de la institucion Tecnológica del Oriente","main":"src/main.js","keywords":["Contenidos Interactivos","Base","2024"],"author":"Francisco Lizcano","license":"ISC","scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint","test":"echo \\"Error: no test specified\\" && exit 1"},"dependencies":{"@fortawesome/fontawesome-free":"^5.15.3","@popperjs/core":"^2.9.1","aos":"^3.0.0-beta.6","bootstrap":"5.0.1","core-js":"^3.6.5","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},9539:function(e,n,a){e.exports=a.p+"img/banner-mobile.f4c07f8b.png"},a3a0:function(e,n,a){},ae0a:function(e,n,a){e.exports=a.p+"img/banner-princiapal.eb54df05.svg"},caba:function(e,n,a){},cd7f:function(e,n,a){},cf25:function(e,n,a){"use strict";a("fea6")},e3ba:function(e,n,a){e.exports=a.p+"img/banner-principal-decorativo-1.6e8e9bf7.svg"},e6b0:function(e,n,a){e.exports=a.p+"img/fondo-banner-principal.2beabdce.png"},f178:function(e,n,a){"use strict";a("cd7f")},fea6:function(e,n,a){},ff6a:function(e,n,a){"use strict";a("7db0"),a("d3b7"),a("ac1f"),a("5319"),a("25f0"),a("a15b"),a("d81d");n["a"]={computed:{menuData:function(){return this.$config.menuPrincipal.menu},iniciarLnk:function(){var e=this.menuData.find((function(e){return"introduccion"===e.nombreRuta})),n=this.menuData.find((function(e){return"tema1"===e.nombreRuta}));return e||n}},methods:{quitarAcentos:function(e){var n=e.replace(/<\/?[^>]+(>|$)/g,""),a={"á":"a","é":"e","í":"i","ó":"o","ú":"u","Á":"A","É":"E","Í":"I","Ó":"O","Ú":"U"};return n.split("").map((function(e){return a[e]||e})).join("").toString()}}}}});
//# sourceMappingURL=app.0332b489.js.map