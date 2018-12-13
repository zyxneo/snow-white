(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{211:function(e,t,a){"use strict";a.r(t);var n=a(34),l=a.n(n),r=a(1),s=a.n(r),o=a(218),i=a(292),m=a.n(i),k=a(229),u=a(219),g=function(e){var t=e.id;return s.a.createElement("li",null,s.a.createElement("a",{href:"#"+t},s.a.createElement(o.b,{id:t+".title"})))},y=["story.introduction","story.storyteller","story.storyteller.legacy","story.storyteller.commonLanguage","story.storyteller.philosophersStone","story.storyteller.historyOfStorytelling","story.storyteller.emptySymbols","story.storyteller.symbols"],c=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleScroll=function(e){return a.setState({activeSection:e&&e.id?e.id:"none"})},a.state={activeSection:"none"},a}return l()(t,e),t.prototype.render=function(){return console.log(this.state.activeSection),s.a.createElement(k.a,{bodyClass:this.state.activeSection},s.a.createElement("div",{className:"sidebar"},s.a.createElement(m.a,{items:y,currentClassName:"is-current",onUpdate:this.handleScroll},y.map(function(e){return s.a.createElement(g,{key:e,id:e})}))),s.a.createElement("div",{className:"content"},s.a.createElement("h2",null,s.a.createElement(o.b,{id:"site.subtitle"}))))},t}(s.a.Component);t.default=Object(u.b)(c)},216:function(e,t,a){var n=a(231).concat(a(230));e.exports={localeData:n,languages:[{value:"en",text:"English"},{value:"hu",text:"Magyar"}]}},219:function(e,t,a){"use strict";a(68);var n=a(235),l=a.n(n),r=a(1),s=a.n(r),o=a(19),i=a.n(o),m=a(226),k=a.n(m),u=function(e,t){var a=e.to,n=e.children,r=l()(e,["to","children"]),o=t.language,i=o.locale?"/"+o.locale+a:""+a;return s.a.createElement(k.a,Object.assign({to:i},r),n)};u.propTypes={to:i.a.string.isRequired,children:i.a.node.isRequired},u.contextTypes={language:i.a.object};var g=a(34),y=a.n(g),c=a(218),d=a(216);Object(c.d)(d.localeData);var z=function(e){var t=function(t){function n(e){var a;a=t.call(this)||this;var n=e.pageContext,l=n.locale,r=n.languages,s=n.originalPath;return a.state={language:{locale:l,languages:r,originalPath:s}},a}y()(n,t);var l=n.prototype;return l.getChildContext=function(){return{language:this.state.language}},l.render=function(){var t=this.state.language.locale||"en",n=a(222)("./"+t+".js");return s.a.createElement(c.c,{locale:t,messages:n},s.a.createElement(e,this.props))},n}(r.Component);return t.childContextTypes={language:i.a.object},t};a.d(t,!1,function(){}),a.d(t,"b",function(){return z}),a.d(t,"a",function(){return d.languages}),a.d(t,!1,function(){return d.localeData})},220:function(e,t){e.exports={"site.title":"Hófehérke és a hét törpe","site.subtitle":"Meseelemzés felnőtteknek","site.description":" ","site.keywords":" ","character.queen":"Királynő","character.snowwhite":"Hófehérke","character.stepmother":"Mostoha","character.king":"Király","character.prince":"Herceg","character.huntsman":"Vadász","story.introduction.title":"Tudtad?","story.introduction.desc":"Hogy a hófehérke mese valójában az egyik legősibb kuktúrális emlékünk, és amelynek fő témája a párkapcsolat, a szexualitás és az élet misztikus körforgása?","story.storyteller.title":"A mesemondás","story.storyteller.desc":"A mesét az idősebb generáció – szülők, nagyszülők – mondják el a legfiatalabb generációnak, a kisgyerekeknek. A gyermekek érdekes módon nagyon nyitottak ezekre a történetekre, saját maguk kérik, akár újra és újra ugyanazt a történetet, mint egyfajta szellemi táplálékot, a madárfiókához hasonlóan nyaggatva a szülőket. Élvezik a történeteket, legyenek azok bármennyire borzasztóan félelmetesek vagy bizarrak.","story.storyteller.legacy.title":"Hagyaték","story.storyteller.legacy.desc":"A felnőttek tapasztaltak, az idősek még inkább. Túl vannak szerelmen, háborún, életen és halálon, szinte már mindent megtapasztaltak, amit csak lehet… Felnőttként, ha visszagondolunk, pár dologtól szívesen megkíméltük volna magunkat, az elszalasztott lehetőségekkel pedig szívesen élnénk – utólag már könnyen okos az ember. Szívesen elmondanánk a kicsiknek, hogy ezt így, azt meg amúgy… De hogyan?","story.storyteller.commonLanguage.title":"A közös nyelv","story.storyteller.commonLanguage.desc":"Igen nehéz helyzet előtt áll az aki mindent el szeretne mondani, mert egy estébe nem fér bele 60 év. És hiába tanácsolná el az unokát a devizahitelektől, mert mire a kicsi felnő, újabb intézmények teszik majd próbára egy megváltozott világban “trükkök százaival”. A felmenői hibáját pedig egyébként is megtapasztalja, azt már nem fogja elkövetni, fog majd mást. Hogy adhatna az ember tanácsot valami olyanban, amivel maga sem boldogult, vagy nem is találkozott?","story.storyteller.philosophersStone.title":"A bölcsek köve","story.storyteller.philosophersStone.desc":"A mese évezredek tanulságait összegzi, képes átívelni korszakokat, képes konzerválni a veszendő információkat. Ráadásul a felnőttek világát egy olyan virágnyelven tárgyalja, amit egy gyermek kezébe is oda lehet adni. A gyermeknek ez a forma tetszik, és úy játszik vele, mint egy labdával, vagy babával, nem is sejtve a “veszélyes” összetevőket. Mert ebben a kis játékban bizony maró, irritatív anyagok vannak, a felnőtt világ kiszámíthatatlan vegyszerei. A mese különleges tulajdonsága a “gyerekzár”, a “védőkupak”, amit gyermek nem képes kinyitni, valljuk be, mi felnőttek pedig már nem is próbáljuk. Pedig most éppen erre fogunk kísérletet tenni. Kiszabadítjuk a szellemet a palackból.","story.storyteller.historyOfStorytelling.title":"A mesemondás történelme","story.storyteller.historyOfStorytelling.desc":"3 millió évvel ezelőttől az 1700-as évekig folyamatos, töretlen, élőszóval előadott mesemondás. Személyes emlékeken és megtapasztaláson alapuló történeteket adott elő az idősebb generáció az 1-2-vel fiatalabbnak. 1700 – 1900 Nyomtatásban megjelenet történetek több generációt is át tudtak ívelni. Hogy azért jelentek-e meg a nyomtatott mesék, hogy átmentsék a történeteket, mert az emberek leszoktak a mesemondásról, vagy az emberek azért szoktak le a mesemondásról, mert rendelkezésre állt a kényelmesebb, szórakoztatóbb módszer, nem tudni. De az biztos, hogy a személyre szabott, egyedi történetek elmaradtak, a folyamatosan alakuló, formálódó mesék sztenderdizálódtak, megmerevedtek, és lelkiségük illetve információtartalmuk egyre fogyatkozott, egyre nehezebben hozzáférhetővé vált. 1900 – 2000 Megjelenik a film, a mesék nem pusztán hallás, de szemléletes “mozi” formájában is elérhetőek, ami nagyon lenyűgöző, ám maximálisan konzum, és az eredeti mélyrétegtől mentes, vagy akár azzal ellentétes mondanivaló közlésére is alkalmas. 2000 – A digitáldiktatúra korában lehetővé vált, hogy nem csak elméleti, hanem gyakorlati értelemben is a világ teljes interneten megosztott információja egyidejűleg elérhetővé váljon minden korosztálynak. Ezzel párosul a választás látszólagos szabadsága, így kialakult egy, az elméért vívott információs-média háború. Ez a háború exponenciális ütemben gyűri maga alá globális szinten a teljesen védtelen tömegeket. A fogyasztói társadalom média-ipar-mágnásai szintetikus mesék tömegeit terhelik a felkészületlen emberekre, véglegesen kivégezve ezzel a mese ősi apját, gyökereit. Innentől a mesék pusztán eszközök, fegyverek azok kezében akiknek kellő anyaki forrás áll rendelkezésére, hogy egyfajta befektetésként, a szellemi és lelki szempontból lárvaállapotban lévő tömegek fejlődését olyan irányba alakítsák, hogy később befektetésük megtérüljön...","story.storyteller.emptySymbols.title":"Szimbólumok","story.storyteller.emptySymbols.desc":"Megváltozott világunkból eltűntek azok a használati tárgyak, melyek a régi mesékben szimbólummokként tűntek fel. Ha értelmezni kívánjuk őket, át kell helyeződnünk a középkor emberének világába, egy csendesebb, nyugodtabb, lassabb, természetközeli világba, amikor a léleknek sokkal több figyelem jutott.","story.storyteller.symbols.title":"A szimbólumok kiüresedése","story.storyteller.symbols.desc":"A mese egy érdekes műfaj… Véresen komoly és egyben lágy. Az élet összes színterének valamennyi küzdelmét sűríti egy pontba, egy kicsi, kedves játékba, ami átadható egy gyermeknek, a nélkül, hogy az kárt okozna a gyemeknek, és a nélkül, hogy a gyermek tönkre tehetné… Az egyetlen mód ami ezt lehetővé teszi, egy egyezményes kódnyelv, a szombólumok világa.","story.textil.historyOfIndustry.title":"A textilipar fejlődése","story.textil.historyOfIndustry.desc":"Szögezzük le, nem biztos, hogy mit is csinál a királynő az ablakban, varr, fon, (köt), de nyilván textilipari kézműves tevékenységet végez, miközben megszúrja az ujját. Ma azt is hihetnénk, varrógéppel dolgozott. Jelenleg műanyag ipari termékekben járunk, és nem ismerjük az eredetét az eleve rongyosra szaggatottan kapható göncöknek. Így nagy hátránnyal indulunk a megértéshez. Nem volt ez mindig így, az elmúlt 80 évben sorsdöntő fordulat zajlott le. A legidősebbek még emlékeznek a len, kender feldolgozására, fonásra, szövésre, hímzésre.","story.textil.clothing.title":"Ruházkodás","story.textil.clothing.desc":"A királynő nem luxust űz, hanem egy olyan tevékenységet, amely pár száz éve még hétköznapi női elfoglaltság volt. A nyáron megtermelt anyagokat ősszel betakarították és télen nekiláttak a feldolgozásnak. Hideg téli napokon a természeti munkák megfogyatkoznak, a királynő ekkor – véleményem szerint – fon. Feltételezésem okai: a következő szimbólumok: fonal, orsó.","story.textil.fates.title":"Párkák","story.textil.fates.desc":"A három ősi boszorka az élet fonalát sodorja. Az egyik a szöszt adja, a másik sodorja, a harmadik a fonalat elvgja Gubanc, tekervény, sodrat, fonal, szövet, textil...  Az ablaknál fonó királynő előrevetíti a jövő történéseit: hófehérke “gubancba” keveredik, az élet messzire “sodorja”. Ebben a kon”textus”ban a királynő egy párka, ábrándokat “sző”. A mostoha “fon”dorlatos, a történet “fonala” “tekervényes”.","story.textil.dna.title":"DNS","story.textil.dna.desc":"Kettős spirál ami az élet kialakításához szükséges információt hordozza. Egyetlen sejtben (megtermékenyült pete) a sejtmagon belül a teljes kifejlett szervezet felépítéséher szükséges teljes információmennyiség benne van. + képes a változó környezetre reagálni. Egy fonat, mely időről időre összehúzódik és kitárul. Összegubancolódik vagy “kiegyenesedik”. Olykor tárolási üzemmódban van, megmerevedik, védekezik, olykor olvasásiban, ilyenkor ellágyul, működésbe lép, kibontja szerkezetét.","story.textil.umbilicalCord.title":"Köldökzsinór","story.textil.umbilicalCord.desc":"A látható biológiai szál, mely fizikailag összeköti anyát gyermekével.  Az anyának is van köldöke, a lánygyermeknek méhe, mutatva a végtelen láncolatot – Matrjoska baba hasonlat. Ha szaporosásbiológiailag vizsgáljuk meg a mese mondanivalóját, ismét érdekes dolgot találunk: A királynő, aki egy nőstény, épp az ablaknál “hímez”. (A hímpor, hímzés díszítő jellege a hím állatok díszességére utal, igy jogos a feltételezés)","story.textil.lifeBlood.title":"A vércsepp, a vérvonal","story.textil.lifeBlood.desc":"Az orsó csak a mesekönyvekben néz ki úgy ahogy. Az ősi orsók, amely időből a történet is származik, nem rokkán voltak, hanem önmagukban használhatóak voltak. Ez egy hosszúkás szerszám, egy 15-20 cm-es “rudacska” egyik végén egy “bumszlival”, ami elhegyesedik. Megszúrni valakit viszont csak a másik végéről lehet… Phallikus szimbólumnak is nevezhetnénk. 1 csepp vér hull az orsó nyomán, és ez az alábbiakra enged következtetni: 1., Nem ért vénát, 2., röviddel az orsó behatolása után elmaradt a vérzése, 3., esetlegesen először szúrta meg orsó, és ez kevés vér elfolyásával járt.","character.queen.desc":"A nő ragyogó oldala. Az ablak szimbólum mutatja, hogy befogadó. Belső világa nyitott a külvilág felé. A fény beáramlása. Fényből sző. Illuzórikus. Az ábrándjai vezérlik, nem figyel oda mit tesz így megsebesíti magát. Önfeláldozó. Túlságosan is, belepusztul, helyét a sötét oldal veszi át.","character.snowwhite.desc":"Naív de tiszta Oktondi: újonc a világban, mit sem sejt a mostoha és a vadász ármánykodásáról. Világnézetileg felkészületlen, sok tanulás vár még rá. Gyönge: Az útjáról nem ő, hanem nagyobb erők és érdekek döntenek. Ő maga csak csapong. Létének beteljesedése a Királynő karakter, ennek eléréséhez meg kell találnia a herceget. De oda a sötét erdőn keresztül vezet az út. Ha elbukik, maga is mostohává válik.","character.stepmother.desc":"Női sötét oldal. Fő probléma, hogy gonosz, önző, magával törődő, minden mással “mostoha”. Szép, a legszebb. Ezt idővel elveszíti. Okos, tudományokban jártas (“boszorkányságban”). Ezt a tudását gonosz célokra használja. Tisztán látó, már nem naív, tisztában van az igazsággal (igazmondó tükre van). De ezzel nem néz szembe, (összetöri azt), illúziókba ringatja magát (a vadász átveri) vagy szembemegy a valósággal (hófehérkét mérgezi)  Hatalmi pozícióban van (királynő) Vannak boldog pillanatai, de összességében nem lehet boldognak nevezni.","character.king.desc":"Szeretetteljes. Az örök hó, a fény birodalmának királya. Megvilágosodottként tudhatja, mi történik hófehérkével (a világosság szimbólumával) Tudhatja, hogy a fényt épp készül elnyelni a sötétség, mégsem tesz semmit. Nem harcol, mégis győz.","character.prince.desc":"Férfi út lárvaállapota: A mese említést sem tesz róla, mintha nem is létezne. Az erdőben bukkan fel, abban az erdőben ahol a vadász hófehérkét helyben hagyta. Felmerülhet a gyanú, hogy mit keresett a herceg az erdőben. Nyilván egy hófehérkét, de akkor mi különbözteti meg a vadásztól?","character.huntsman.desc":"A férfi sötét oldala. Szintén “mostoha” Tapasztalt, úttalan utakon jár, eligazodik a sötét erdőben, az alvilágban. Mégis, egy nő zárja végül börtönbe. Ott is marad, a sötétség rabja lesz. Férfias: vadakkal kűzd meg, fegyvere van (phallikus szimbólumként) Sajnos ezúttal nem méltó ellenfelet választ, védtelen gyermeket is majdnem megsebesít, mert nem áll azonnal ellen a gonosz felkérésnek. Amor nyila: szerelemben járatos, mégis úgy tűnik, egyedül van senkinek sem hiányzik se felbukkanása előtt, se utána. Csak egy “disznó” szívét tudja megszerezni. Boldogtalan fantom, kósza kísértet","symbol.paths.title":"Utak","symbol.paths.desc":"Lárvaállapot: hófehérke, herceg. Női út, férfi út – egyedi út, de megfeleltethető. Felisút-leisút – minden állapotból el lehet mozdulni, mindegyiknek vannak jellemzői. A mese kisarkítja a karakterek megítélését, de egyben rávilágít, nincs abszolút jó és rossz, ez nézőpont, “viszony” kérdése. A viszonylatok határozzák meg a lehetleges elmozdulási irányokat. Horizontális, vertikális utak, személyiségfejlődés","symbol.forest.title":"Helyszín – Erdő","symbol.forest.desc":"...","symbol.home.title":"Helyszín - otthon","symbol.home.desc":"Fehérvár – Feketevár","symbol.mirror.title":"Tükör","symbol.mirror.desc":"…","symbol.jail.title":"A börtön","symbol.jail.desc":"A mostoha börtönbe veti a szolgálatot megtagadó vadászt. Mind a vadász, mind a királyné mellékvágányra van állítva… Véleményem szerint a vadász-királyné kapcsolat azonos a király-mostoha kapcsolattal, csak a nemek és reakciók különböznek. Nem a vadász van börtönben, pusztán a vadász-börtön szimbólum számít. Avagy, ha a “vadász” van a királynő szívébe börtönözve, abba belehal, vagy valami hasonló…","symbol.mine.title":"Bánya","symbol.mine.desc":"A sötét erdő mélyén egy sötét föld alatti üreg. Nem kerül bemutatásra. Feltehetően kincset rejt. Megéri kockáztatni, megéri mélyre ásni..."}},221:function(e,t){e.exports={"site.title":"Snow White","site.description":" ","site.keywords":" ","character.queen":"Queen","character.snowwhite":"Snow White","character.stepmother":"Stepmother","character.king":"King","character.prince":"Prince","character.huntsman":"Huntsman"}},222:function(e,t,a){var n={"./en.js":221,"./hu.js":220,"./index.js":216};function l(e){var t=r(e);return a(t)}function r(e){var t=n[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=222},228:function(e,t,a){},229:function(e,t,a){"use strict";var n=a(1),l=a.n(n),r=a(243),s=a.n(r),o=a(218);a(241),a(228),t.a=Object(o.e)(function(e){var t=e.children,a=(e.data,e.intl),n=e.bodyClass;return l.a.createElement("div",null,l.a.createElement(s.a,{title:a.formatMessage({id:"site.title"}),meta:[{name:"description",content:a.formatMessage({id:"site.description"})},{name:"keywords",content:a.formatMessage({id:"site.keywords"})}],bodyAttributes:{class:n}}),l.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&subset=latin-ext",rel:"stylesheet"}),l.a.createElement("div",{className:"layout"},t))})},232:function(e,t){},233:function(e,t){},234:function(e,t){},244:function(e,t,a){e.exports={default:a(122),__esModule:!0}},275:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=void 0,n=void 0;return function(){var l=+new Date;a&&l<a+t?(clearTimeout(n),n=setTimeout(function(){a=l,e()},t)):(a=l,e())}}},276:function(e,t,a){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var s=l.apply(null,n);s&&e.push(s)}else if("object"===r)for(var o in n)a.call(n,o)&&n[o]&&e.push(o)}}return e.join(" ")}void 0!==e&&e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},277:function(e,t,a){"use strict";t.__esModule=!0;var n,l=(n=a(244))&&n.__esModule?n:{default:n};t.default=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,l.default)(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()},278:function(e,t,a){var n=a(224),l=a(254);a(261)("getPrototypeOf",function(){return function(e){return l(n(e))}})},279:function(e,t,a){a(278),e.exports=a(25).Object.getPrototypeOf},280:function(e,t,a){e.exports={default:a(279),__esModule:!0}},281:function(e,t,a){var n=a(217)("iterator"),l=!1;try{var r=[7][n]();r.return=function(){l=!0},Array.from(r,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!l)return!1;var a=!1;try{var r=[7],s=r[n]();s.next=function(){return{done:a=!0}},r[n]=function(){return s},e(r)}catch(e){}return a}},282:function(e,t,a){var n=a(118),l=a(217)("toStringTag"),r="Arguments"==n(function(){return arguments}());e.exports=function(e){var t,a,s;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(a=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),l))?a:r?n(t):"Object"==(s=n(t))&&"function"==typeof t.callee?"Arguments":s}},283:function(e,t,a){var n=a(282),l=a(217)("iterator"),r=a(223);e.exports=a(25).getIteratorMethod=function(e){if(void 0!=e)return e[l]||e["@@iterator"]||r[n(e)]}},284:function(e,t,a){"use strict";var n=a(43),l=a(113);e.exports=function(e,t,a){t in e?n.f(e,t,l(0,a)):e[t]=a}},285:function(e,t,a){var n=a(223),l=a(217)("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(n.Array===e||r[l]===e)}},286:function(e,t,a){var n=a(45);e.exports=function(e,t,a,l){try{return l?t(n(a)[0],a[1]):t(a)}catch(t){var r=e.return;throw void 0!==r&&n(r.call(e)),t}}},287:function(e,t,a){"use strict";var n=a(121),l=a(64),r=a(224),s=a(286),o=a(285),i=a(123),m=a(284),k=a(283);l(l.S+l.F*!a(281)(function(e){Array.from(e)}),"Array",{from:function(e){var t,a,l,u,g=r(e),y="function"==typeof this?this:Array,c=arguments.length,d=c>1?arguments[1]:void 0,z=void 0!==d,v=0,f=k(g);if(z&&(d=n(d,c>2?arguments[2]:void 0,2)),void 0==f||y==Array&&o(f))for(a=new y(t=i(g.length));t>v;v++)m(a,v,z?d(g[v],v):g[v]);else for(u=f.call(g),a=new y;!(l=u.next()).done;v++)m(a,v,z?s(u,d,[l.value,v],!0):l.value);return a.length=v,a}})},288:function(e,t,a){a(257),a(287),e.exports=a(25).Array.from},289:function(e,t,a){e.exports={default:a(288),__esModule:!0}},290:function(e,t,a){"use strict";t.__esModule=!0;var n,l=(n=a(289))&&n.__esModule?n:{default:n};t.default=function(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return(0,l.default)(e)}},291:function(e,t,a){"use strict";t.__esModule=!0;var n,l=(n=a(244))&&n.__esModule?n:{default:n};t.default=function(e,t,a){return t in e?(0,l.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},292:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=d(a(263)),l=d(a(291)),r=d(a(290)),s=d(a(280)),o=d(a(260)),i=d(a(259)),m=d(a(277)),k=d(a(250)),u=d(a(19)),g=d(a(1)),y=d(a(276)),c=d(a(275));function d(e){return e&&e.__esModule?e:{default:e}}var z=function(e){function t(e){(0,o.default)(this,t);var a=(0,i.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e));return a.state={targetItems:[],inViewState:[],isScrolledPast:[]},a._handleSpy=a._handleSpy.bind(a),a}return(0,k.default)(t,e),(0,m.default)(t,null,[{key:"propTypes",get:function(){return{items:u.default.arrayOf(u.default.string).isRequired,currentClassName:u.default.string.isRequired,scrolledPastClassName:u.default.string,style:u.default.object,componentTag:u.default.string,offset:u.default.number,rootEl:u.default.string,onUpdate:u.default.func}}},{key:"defaultProps",get:function(){return{items:[],currentClassName:"",style:{},componentTag:"ul",offset:0,onUpdate:function(){}}}}]),(0,m.default)(t,[{key:"_initSpyTarget",value:function(e){return e.map(function(e){return document.getElementById(e)})}},{key:"_fillArray",value:function(e,t){for(var a=[],n=0,l=e.length;n<l;n++)a[n]=t;return a}},{key:"_isScrolled",value:function(){return this._getScrollDimension().scrollTop>0}},{key:"_getScrollDimension",value:function(){var e=document,t=this.props.rootEl;return{scrollTop:t?e.querySelector(t).scrollTop:e.documentElement.scrollTop||e.body.parentNode.scrollTop||e.body.scrollTop,scrollHeight:t?e.querySelector(t).scrollHeight:e.documentElement.scrollHeight||e.body.parentNode.scrollHeight||e.body.scrollHeight}}},{key:"_getElemsViewState",value:function(e){for(var t=[],a=[],n=[],l=e||this.state.targetItems,s=!1,o=0,i=l.length;o<i;o++){var m=l[o],k=!s&&this._isInView(m);k?(s=!0,t.push(m)):a.push(m);var u=o===i-1,g=this._isScrolled();this._isAtBottom()&&this._isInView(m)&&!k&&u&&g&&(a.pop(),a.push.apply(a,(0,r.default)(t)),t=[m],n=this._fillArray(n,!1),k=!0),n.push(k)}return{inView:t,outView:a,viewStatusList:n,scrolledPast:this.props.scrolledPastClassName&&this._getScrolledPast(n)}}},{key:"_isInView",value:function(e){if(!e)return!1;var t=this.props,a=t.rootEl,n=t.offset,l=void 0;a&&(l=document.querySelector(a).getBoundingClientRect());var r=e.getBoundingClientRect(),s=a?l.height:window.innerHeight,o=this._getScrollDimension().scrollTop,i=o+s,m=a?r.top+o-l.top+n:r.top+o+n,k=m+e.offsetHeight;return m<i&&k>o}},{key:"_isAtBottom",value:function(){var e=this.props.rootEl,t=this._getScrollDimension(),a=t.scrollTop,n=t.scrollHeight;return a+(e?document.querySelector(e).getBoundingClientRect().height:window.innerHeight)>=n}},{key:"_getScrolledPast",value:function(e){if(!e.some(function(e){return e}))return e;var t=!1;return e.map(function(e){return e&&!t?(t=!0,!1):!t})}},{key:"_spy",value:function(e){var t=this,a=this._getElemsViewState(e),n=this.state.inViewState;this.setState({inViewState:a.viewStatusList,isScrolledPast:a.scrolledPast},function(){t._update(n)})}},{key:"_update",value:function(e){var t,a;t=this.state.inViewState,a=e,t.length===a.length&&t.every(function(e,t){return e===a[t]})||this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(!0)])}},{key:"_handleSpy",value:function(){(0,c.default)(this._spy(),100)}},{key:"_initFromProps",value:function(){var e=this._initSpyTarget(this.props.items);this.setState({targetItems:e}),this._spy(e)}},{key:"offEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).removeEventListener("scroll",this._handleSpy)}},{key:"onEvent",value:function(){(this.props.rootEl?document.querySelector(this.props.rootEl):window).addEventListener("scroll",this._handleSpy)}},{key:"componentDidMount",value:function(){this._initFromProps(),this.onEvent()}},{key:"componentWillUnmount",value:function(){this.offEvent()}},{key:"componentWillReceiveProps",value:function(){this._initFromProps()}},{key:"render",value:function(){var e=this,t=this.props.componentTag,a=this.props,r=a.children,s=a.className,o=a.scrolledPastClassName,i=a.style,m=0,k=g.default.Children.map(r,function(t,a){var r;if(!t)return null;var s=t.type,i=o&&e.state.isScrolledPast[a],k=(0,y.default)((r={},(0,l.default)(r,""+t.props.className,t.props.className),(0,l.default)(r,""+e.props.currentClassName,e.state.inViewState[a]),(0,l.default)(r,""+e.props.scrolledPastClassName,i),r));return g.default.createElement(s,(0,n.default)({},t.props,{className:k,key:m++}),t.props.children)}),u=(0,y.default)((0,l.default)({},""+s,s));return g.default.createElement(t,{className:u,style:i},k)}}]),t}(g.default.Component);t.default=z}}]);
//# sourceMappingURL=component---src-pages-index-js-51ddfc61bebf27a1dab0.js.map