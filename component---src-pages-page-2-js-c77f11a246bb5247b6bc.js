(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(e,t,a){"use strict";a.r(t);var l=a(1),n=a.n(l),s=a(218),r=a(219),i=a(229),o=(a(267),a(266),function(e){var t,a=e.character,l=a.id,s=a.gender,r=a.name,i=a.imageX,o=void 0===i?0:i,m=a.imageY,k=void 0===m?0:m,g=a.imageWidth,z=void 0===g?100:g,c=a.imageHeight,d=void 0===c?100:c,y=a.cx,h=a.cy,b=a.scale;switch(s){case"female":t="pink";break;case"male":t="skyblue";break;default:t="gray"}return n.a.createElement("g",{id:l,transform:"scale("+b+" "+b+") "+function(e,t,a){return"translate("+(e/a-50)+" "+(t/a-50)+")"}(y,h,b)},n.a.createElement("circle",{id:"avatarCircle",cx:"50",cy:"50",r:"32",fill:"none"}),n.a.createElement("circle",{cx:"50",cy:"50",r:"30",fill:t}),n.a.createElement("circle",{cx:"50",cy:"50",r:"25",fill:"none",stroke:"black",strokeWidth:".5"}),n.a.createElement("g",{clipPath:"url(#circleMask)"},n.a.createElement("image",{x:o,y:k,href:"/avatars/"+l+".jpg",width:z,height:d})),n.a.createElement("text",{textAnchor:"middle",className:"avatar-title"},n.a.createElement("textPath",{href:"#avatarCircle",startOffset:"75%"},r)))}),m=function(e){var t,a,l,s,r,i=e.graphData;return n.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg","xmlns-xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 120 120",width:"800",height:"800"},n.a.createElement("defs",null,n.a.createElement("clipPath",{id:"circleMask"},n.a.createElement("circle",{cx:"50",cy:"50",r:"25"}))),n.a.createElement("rect",{x:"0",y:"0",width:"120",height:"120",fill:"none",stroke:"black",strokeWidth:"1"}),n.a.createElement("symbol",{id:"scene"},i.characters.map(function(e){return n.a.createElement(o,{key:e.id,character:e})}),n.a.createElement("path",{d:"M 30,37.5 a 25,25,0,0,1,22.5,22.5",stroke:"red",strokeWidth:"1",fill:"none"}),n.a.createElement("path",{id:"huntsman-snowwhite",d:"M 90,82.5 c -10,0, -20,-15, -30,-15",stroke:"red",strokeWidth:"1",fill:"none"}),n.a.createElement("path",{id:"witch-snowwhite",d:"M 75,97.5 c -10,0, -5,-30, -15,-30",stroke:"red",strokeWidth:"1",fill:"none"})),n.a.createElement("use",{href:"#scene",x:"0",y:"0"}),n.a.createElement("path",{d:(t=i.characters[0].cx,a=i.characters[0].cy,l=i.characters[1].cx,s=i.characters[1].cy,!0,void 0===r&&(r=.5),"M "+t+","+a+" C "+t+","+(a+(s-a)*r)+", "+l+","+(s-(s-a)*r)+", "+l+","+s),stroke:"red",strokeWidth:"1",fill:"none"}))},k={characters:[{id:"queen",name:n.a.createElement(s.b,{id:"character.queen.title",defaultMessage:"Queen",tagName:"tspan"}),gender:"female",imageX:0,imageY:0,imageWidth:100,imageHeight:100,cx:22.5,cy:37.5,scale:.25},{id:"snowwhite",name:n.a.createElement(s.b,{id:"character.snowwhite.title",defaultMessage:"Snow White",tagName:"tspan"}),gender:"female",imageX:0,imageY:0,imageWidth:100,imageHeight:100,cx:52.5,cy:67.5,scale:.25},{id:"witch",name:n.a.createElement(s.b,{id:"character.stepmother.title",defaultMessage:"Stepmother",tagName:"tspan"}),gender:"female",imageX:-4,imageY:20,imageWidth:120,imageHeight:120,cx:82.5,cy:97.5,scale:.25},{id:"king",name:n.a.createElement(s.b,{id:"character.king.title",defaultMessage:"King",tagName:"tspan"}),gender:"male",imageX:0,imageY:0,imageWidth:100,imageHeight:100,cx:37.5,cy:22.5,scale:.25},{id:"prince",name:n.a.createElement(s.b,{id:"character.prince.title",defaultMessage:"Prince",tagName:"tspan"}),gender:"male",imageX:25,imageY:10,imageWidth:50,imageHeight:100,cx:67.5,cy:52.5,scale:.25},{id:"huntsman",name:n.a.createElement(s.b,{id:"character.huntsman.title",defaultMessage:"Huntsman",tagName:"tspan"}),gender:"male",imageX:25,imageY:10,imageWidth:50,imageHeight:100,cx:97.5,cy:82.5,scale:.25}]};t.default=Object(r.b)(function(){return n.a.createElement(i.a,null,n.a.createElement(m,{graphData:k}))})},216:function(e,t,a){var l=a(231).concat(a(230));e.exports={localeData:l,languages:[{value:"en",text:"English"},{value:"hu",text:"Magyar"}]}},219:function(e,t,a){"use strict";a(70);var l=a(235),n=a.n(l),s=a(1),r=a.n(s),i=a(19),o=a.n(i),m=a(226),k=a.n(m),g=function(e,t){var a=e.to,l=e.children,s=n()(e,["to","children"]),i=t.language,o=i.locale?"/"+i.locale+a:""+a;return r.a.createElement(k.a,Object.assign({to:o},s),l)};g.propTypes={to:o.a.string.isRequired,children:o.a.node.isRequired},g.contextTypes={language:o.a.object};var z=a(34),c=a.n(z),d=a(218),y=a(216);Object(d.d)(y.localeData);var h=function(e){var t=function(t){function l(e){var a;a=t.call(this)||this;var l=e.pageContext,n=l.locale,s=l.languages,r=l.originalPath;return a.state={language:{locale:n,languages:s,originalPath:r}},a}c()(l,t);var n=l.prototype;return n.getChildContext=function(){return{language:this.state.language}},n.render=function(){var t=this.state.language.locale||"en",l=a(222)("./"+t+".js");return r.a.createElement(d.c,{locale:t,messages:l},r.a.createElement(e,this.props))},l}(s.Component);return t.childContextTypes={language:o.a.object},t};a.d(t,!1,function(){}),a.d(t,"b",function(){return h}),a.d(t,"a",function(){return y.languages}),a.d(t,!1,function(){return y.localeData})},220:function(e,t){e.exports={"site.title":"Hófehérke és a hét törpe","site.subtitle":"Meseelemzés felnőtteknek","site.description":" ","site.keywords":" ","character.queen.title":"Királynő","character.snowwhite.title":"Hófehérke","character.stepmother.title":"Mostoha","character.king.title":"Király","character.prince.title":"Herceg","character.huntsman.title":"Vadász","story.introduction.title":"Tudtad?","story.introduction.desc":"Hogy a hófehérke mese valójában az egyik legősibb kukturális emlékünk, és amelynek fő témája a párkapcsolat, a szexualitás és az élet misztikus körforgása?","story.storyteller.title":"A mesemondás","story.storyteller.desc":'<img src="/images/story/storytelling3.jpg" class="ui medium left floated image" /><p>A mesét az idősebb generáció – szülők, nagyszülők – mondják el a legfiatalabb generációnak, a kisgyerekeknek. A gyermekek érdekes módon nagyon nyitottak ezekre a történetekre, saját maguk kérik, akár újra és újra ugyanazt a történetet, mint egyfajta szellemi táplálékot, a madárfiókához hasonlóan nyaggatva a szülőket. Élvezik a történeteket, legyenek azok bármennyire borzasztóan félelmetesek vagy bizarrak.</p>',"story.storyteller.legacy.title":"Hagyaték","story.storyteller.legacy.desc":'<img src="/images/story/storytelling.jpg" class="ui medium left floated image" /><p>A felnőttek tapasztaltak, az idősek még inkább. Túl vannak szerelmen, háborún, életen és halálon, szinte már mindent megtapasztaltak, amit csak lehet… Felnőttként, ha visszagondolunk, pár dologtól szívesen megkíméltük volna magunkat, az elszalasztott lehetőségekkel pedig szívesen élnénk – utólag már könnyen okos az ember. Szívesen elmondanánk a kicsiknek, hogy ezt így, azt meg amúgy… De hogyan?</p>',"story.storyteller.commonLanguage.title":"A közös nyelv","story.storyteller.commonLanguage.desc":"Igen nehéz helyzet előtt áll az aki mindent el szeretne mondani, mert egy estébe nem fér bele 60 év. És hiába tanácsolná el az unokát a devizahitelektől, mert mire a kicsi felnő, újabb intézmények teszik majd próbára egy megváltozott világban “trükkök százaival”. A felmenői hibáját pedig egyébként is megtapasztalja, azt már nem fogja elkövetni, fog majd mást. Hogy adhatna az ember tanácsot valami olyanban, amivel maga sem boldogult, vagy nem is találkozott?","story.storyteller.philosophersStone.title":"A bölcsek köve","story.storyteller.philosophersStone.desc":"A mese évezredek tanulságait összegzi, képes átívelni korszakokat, képes konzerválni a veszendő információkat. Ráadásul a felnőttek világát egy olyan virágnyelven tárgyalja, amit egy gyermek kezébe is oda lehet adni. A gyermeknek ez a forma tetszik, és úgy játszik vele, mint egy labdával, vagy babával, nem is sejtve a “veszélyes” összetevőket. Mert ebben a kis játékban bizony maró, irritáló anyagok vannak, a felnőtt világ kiszámíthatatlan vegyszerei. A mese különleges tulajdonsága a “gyerekzár”, a “védőkupak”, amit gyermek nem képes kinyitni, valljuk be, mi felnőttek pedig már nem is próbáljuk. Pedig most éppen erre fogunk kísérletet tenni. Kiszabadítjuk a szellemet a palackból.","story.storyteller.historyOfStorytelling.title":"A mesemondás történelme","story.storyteller.historyOfStorytelling.desc":"3 millió évvel ezelőttől az 1700-as évekig folyamatos, töretlen, élőszóval előadott mesemondás. Személyes emlékeken és megtapasztaláson alapuló történeteket adott elő az idősebb generáció az 1-2-vel fiatalabbnak. 1700 – 1900 Nyomtatásban megjelent történetek több generációt is át tudtak ívelni. Hogy azért jelentek-e meg a nyomtatott mesék, hogy átmentsék a történeteket, mert az emberek leszoktak a mesemondásról, vagy az emberek azért szoktak le a mesemondásról, mert rendelkezésre állt a kényelmesebb, szórakoztatóbb módszer, nem tudni. De az biztos, hogy a személyre szabott, egyedi történetek elmaradtak, a folyamatosan alakuló, formálódó mesék sztenderdizálódtak, megmerevedtek, és lelkiségük illetve információtartalmuk egyre fogyatkozott, egyre nehezebben hozzáférhetővé vált. 1900 – 2000 Megjelenik a film, a mesék nem pusztán hallás, de szemléletes “mozi” formájában is elérhetőek, ami nagyon lenyűgöző, ám maximálisan konzum, és az eredeti mélyrétegtől mentes, vagy akár azzal ellentétes mondanivaló közlésére is alkalmas. 2000 – A digitáldiktatúra korában lehetővé vált, hogy nem csak elméleti, hanem gyakorlati értelemben is a világ teljes interneten megosztott információja egyidejűleg elérhetővé váljon minden korosztálynak. Ezzel párosul a választás látszólagos szabadsága, így kialakult egy, az elméért vívott információs-média háború. Ez a háború exponenciális ütemben gyűri maga alá globális szinten a teljesen védtelen tömegeket. A fogyasztói társadalom média-ipar-mágnásai szintetikus mesék tömegeit terhelik a felkészületlen emberekre, véglegesen kivégezve ezzel a mese ősi apját, gyökereit. Innentől a mesék pusztán eszközök, fegyverek azok kezében akiknek kellő anyagi forrás áll rendelkezésére, hogy egyfajta befektetésként, a szellemi és lelki szempontból lárvaállapotban lévő tömegek fejlődését olyan irányba alakítsák, hogy később befektetésük megtérüljön...","story.storyteller.emptySymbols.title":"Szimbólumok","story.storyteller.emptySymbols.desc":"Megváltozott világunkból eltűntek azok a használati tárgyak, melyek a régi mesékben szimbólumokként tűntek fel. Ha értelmezni kívánjuk őket, át kell helyeződnünk a középkor emberének világába, egy csendesebb, nyugodtabb, lassabb, természetközeli világba, amikor a léleknek sokkal több figyelem jutott.","story.storyteller.symbols.title":"A szimbólumok kiüresedése","story.storyteller.symbols.desc":"A mese egy érdekes műfaj… Véresen komoly és egyben lágy. Az élet összes színterének valamennyi küzdelmét sűríti egy pontba, egy kicsi, kedves játékba, ami átadható egy gyermeknek, a nélkül, hogy az kárt okozna a gyermeknek, és a nélkül, hogy a gyermek tönkre tehetné… Az egyetlen mód ami ezt lehetővé teszi, egy egyezményes kódnyelv, a szimbólumok világa.","story.textil.historyOfIndustry.title":"A textilipar fejlődése","story.textil.historyOfIndustry.desc":"Szögezzük le, nem biztos, hogy mit is csinál a királynő az ablakban, varr, fon, (köt), de nyilván textilipari kézműves tevékenységet végez, miközben megszúrja az ujját. Ma azt is hihetnénk, varrógéppel dolgozott. Jelenleg műanyag ipari termékekben járunk, és nem ismerjük az eredetét az eleve rongyosra szaggatottan kapható göncöknek. Így nagy hátránnyal indulunk a megértéshez. Nem volt ez mindig így, az elmúlt 80 évben sorsdöntő fordulat zajlott le. A legidősebbek még emlékeznek a len, kender feldolgozására, fonásra, szövésre, hímzésre.","story.textil.clothing.title":"Ruházkodás","story.textil.clothing.desc":"A királynő nem luxust űz, hanem egy olyan tevékenységet, amely pár száz éve még hétköznapi női elfoglaltság volt. A nyáron megtermelt anyagokat ősszel betakarították és télen nekiláttak a feldolgozásnak. Hideg téli napokon a természeti munkák megfogyatkoznak, a királynő ekkor – véleményem szerint – fon. Feltételezésem okai: a következő szimbólumok: fonal, orsó.","story.textil.fates.title":"Párkák","story.textil.fates.desc":"A három ősi boszorka az élet fonalát sodorja. Az egyik a szöszt adja, a másik sodorja, a harmadik a fonalat elvgja Gubanc, tekervény, sodrat, fonal, szövet, textil...  Az ablaknál fonó királynő előrevetíti a jövő történéseit: hófehérke “gubancba” keveredik, az élet messzire “sodorja”. Ebben a kon”textus”ban a királynő egy párka, ábrándokat “sző”. A mostoha “fon”dorlatos, a történet “fonala” “tekervényes”.","story.textil.dna.title":"DNS","story.textil.dna.desc":"Kettős spirál ami az élet kialakításához szükséges információt hordozza. Egyetlen sejtben (megtermékenyült pete) a sejtmagon belül a teljes kifejlett szervezet felépítéséher szükséges teljes információmennyiség benne van. + képes a változó környezetre reagálni. Egy fonat, mely időről időre összehúzódik és kitárul. Összegubancolódik vagy “kiegyenesedik”. Olykor tárolási üzemmódban van, megmerevedik, védekezik, olykor olvasásiban, ilyenkor ellágyul, működésbe lép, kibontja szerkezetét.","story.textil.umbilicalCord.title":"Köldökzsinór","story.textil.umbilicalCord.desc":"A látható biológiai szál, mely fizikailag összeköti anyát gyermekével.  Az anyának is van köldöke, a lánygyermeknek méhe, mutatva a végtelen láncolatot – Matrjoska baba hasonlat. Ha szaporosásbiológiailag vizsgáljuk meg a mese mondanivalóját, ismét érdekes dolgot találunk: A királynő, aki egy nőstény, épp az ablaknál “hímez”. (A hímpor, hímzés díszítő jellege a hím állatok díszességére utal, igy jogos a feltételezés)","story.textil.lifeBlood.title":"A vércsepp, a vérvonal","story.textil.lifeBlood.desc":"Az orsó csak a mesekönyvekben néz ki úgy ahogy. Az ősi orsók, amely időből a történet is származik, nem rokkán voltak, hanem önmagukban használhatóak voltak. Ez egy hosszúkás szerszám, egy 15-20 cm-es “rudacska” egyik végén egy “bumszlival”, ami elhegyesedik. Megszúrni valakit viszont csak a másik végéről lehet… Phallikus szimbólumnak is nevezhetnénk. 1 csepp vér hull az orsó nyomán, és ez az alábbiakra enged következtetni: 1., Nem ért vénát, 2., röviddel az orsó behatolása után elmaradt a vérzése, 3., esetlegesen először szúrta meg orsó, és ez kevés vér elfolyásával járt.","character.queen.desc":"<p>A nő ragyogó oldala.</p><p>Az ablak szimbólum mutatja, hogy befogadó. Belső világa nyitott a külvilág felé. A fény beáramlása. Fényből sző.</p><p>Illuzórikus. Az ábrándjai vezérlik, nem figyel oda mit tesz így megsebesíti magát. Önfeláldozó. Túlságosan is, belepusztul, helyét a sötét oldal veszi át.</p>","character.snowwhite.desc":"Naív de tiszta Oktondi: újonc a világban, mit sem sejt a mostoha és a vadász ármánykodásáról. Világnézetileg felkészületlen, sok tanulás vár még rá. Gyönge: Az útjáról nem ő, hanem nagyobb erők és érdekek döntenek. Ő maga csak csapong. Létének beteljesedése a Királynő karakter, ennek eléréséhez meg kell találnia a herceget. De oda a sötét erdőn keresztül vezet az út. Ha elbukik, maga is mostohává válik.","character.stepmother.desc":"Női sötét oldal. Fő probléma, hogy gonosz, önző, magával törődő, minden mással “mostoha”. Szép, a legszebb. Ezt idővel elveszíti. Okos, tudományokban jártas (“boszorkányságban”). Ezt a tudását gonosz célokra használja. Tisztán látó, már nem naív, tisztában van az igazsággal (igazmondó tükre van). De ezzel nem néz szembe, (összetöri azt), illúziókba ringatja magát (a vadász átveri) vagy szembemegy a valósággal (hófehérkét mérgezi)  Hatalmi pozícióban van (királynő) Vannak boldog pillanatai, de összességében nem lehet boldognak nevezni.","character.king.desc":"Szeretetteljes. Az örök hó, a fény birodalmának királya. Megvilágosodottként tudhatja, mi történik hófehérkével (a világosság szimbólumával) Tudhatja, hogy a fényt épp készül elnyelni a sötétség, mégsem tesz semmit. Nem harcol, mégis győz.","character.prince.desc":"Férfi út lárvaállapota: A mese említést sem tesz róla, mintha nem is létezne. Az erdőben bukkan fel, abban az erdőben ahol a vadász hófehérkét helyben hagyta. Felmerülhet a gyanú, hogy mit keresett a herceg az erdőben. Nyilván egy hófehérkét, de akkor mi különbözteti meg a vadásztól?","character.huntsman.desc":"A férfi sötét oldala. Szintén “mostoha” Tapasztalt, úttalan utakon jár, eligazodik a sötét erdőben, az alvilágban. Mégis, egy nő zárja végül börtönbe. Ott is marad, a sötétség rabja lesz. Férfias: vadakkal kűzd meg, fegyvere van (phallikus szimbólumként) Sajnos ezúttal nem méltó ellenfelet választ, védtelen gyermeket is majdnem megsebesít, mert nem áll azonnal ellen a gonosz felkérésnek. Amor nyila: szerelemben járatos, mégis úgy tűnik, egyedül van senkinek sem hiányzik se felbukkanása előtt, se utána. Csak egy “disznó” szívét tudja megszerezni. Boldogtalan fantom, kósza kísértet","symbol.paths.title":"Utak","symbol.paths.desc":"Lárvaállapot: hófehérke, herceg. Női út, férfi út – egyedi út, de megfeleltethető. Felisút-leisút – minden állapotból el lehet mozdulni, mindegyiknek vannak jellemzői. A mese kisarkítja a karakterek megítélését, de egyben rávilágít, nincs abszolút jó és rossz, ez nézőpont, “viszony” kérdése. A viszonylatok határozzák meg a lehetleges elmozdulási irányokat. Horizontális, vertikális utak, személyiségfejlődés","symbol.forest.title":"Helyszín – Erdő","symbol.forest.desc":"...","symbol.home.title":"Helyszín - otthon","symbol.home.desc":"Fehérvár – Feketevár","symbol.mirror.title":"Tükör","symbol.mirror.desc":"…","symbol.jail.title":"A börtön","symbol.jail.desc":"A mostoha börtönbe veti a szolgálatot megtagadó vadászt. Mind a vadász, mind a királyné mellékvágányra van állítva… Véleményem szerint a vadász-királyné kapcsolat azonos a király-mostoha kapcsolattal, csak a nemek és reakciók különböznek. Nem a vadász van börtönben, pusztán a vadász-börtön szimbólum számít. Avagy, ha a “vadász” van a királynő szívébe börtönözve, abba belehal, vagy valami hasonló…","symbol.mine.title":"Bánya","symbol.mine.desc":"A sötét erdő mélyén egy sötét föld alatti üreg. Nem kerül bemutatásra. Feltehetően kincset rejt. Megéri kockáztatni, megéri mélyre ásni..."}},221:function(e,t){e.exports={"site.title":"Snow White","site.description":" ","site.keywords":" ","character.queen":"Queen","character.snowwhite":"Snow White","character.stepmother":"Stepmother","character.king":"King","character.prince":"Prince","character.huntsman":"Huntsman"}},222:function(e,t,a){var l={"./en.js":221,"./hu.js":220,"./index.js":216};function n(e){var t=s(e);return a(t)}function s(e){var t=l[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}n.keys=function(){return Object.keys(l)},n.resolve=s,e.exports=n,n.id=222},228:function(e,t,a){},229:function(e,t,a){"use strict";var l=a(1),n=a.n(l),s=a(244),r=a.n(s),i=a(218);a(242),a(241),a(228),t.a=Object(i.e)(function(e){var t=e.children,a=(e.data,e.intl),l=e.bodyClass;return n.a.createElement("div",null,n.a.createElement(r.a,{title:a.formatMessage({id:"site.title"}),meta:[{name:"description",content:a.formatMessage({id:"site.description"})},{name:"keywords",content:a.formatMessage({id:"site.keywords"})}],bodyAttributes:{class:l}}),n.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Cinzel+Decorative|Fondamento|Pirata+One|Snowburst+One&subset=latin-ext",rel:"stylesheet"}),n.a.createElement("div",{className:"layout"},t))})},232:function(e,t){},233:function(e,t){},234:function(e,t){},266:function(e,t,a){},267:function(e,t,a){var l=a(17).f,n=Function.prototype,s=/^\s*function ([^ (]*)/;"name"in n||a(16)&&l(n,"name",{configurable:!0,get:function(){try{return(""+this).match(s)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-page-2-js-c77f11a246bb5247b6bc.js.map