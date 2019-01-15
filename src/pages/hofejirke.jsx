import React from 'react'
import { withPrefix } from 'gatsby-link'
import Layout from '../components/layout'
import ScrollSection from '../components/ScrollSection'
import Footer from '../components/Footer'
import PreviousButton from '../components/PreviousButton'
import NextButton from '../components/NextButton'

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inViewport: '',
    }
  }

  onEnterViewport = (id) => {
    history.replaceState(undefined, undefined, `#${id}`)
    this.setState({
      inViewport: id,
    })
  }

  render() {
    const {
      inViewport,
    } = this.state

    return (
      <Layout bodyClass={inViewport}>
        <div className="content">
          <div className="ui text container list">
            <ScrollSection onEnter={this.onEnterViewport} id="story.fairytales.holle">
              <p>Az alábbi mese Boldizsár Ildikó - Mesék anyákról című könyvéből származik, fordította Adamik Lajos.</p>
              <h1>HÓFEJÍRKE</h1>
              <div>
                <p>Történt egyszer, a tél derekára járt, a hópelyhek, akárha tollak, úgy hulltak | alá az égből, mikor egy királyné fekete ébenfa keretű ablakánál ült, és varrt. Amint így varrt-varrogatott, s a hulló pelyhekre vetette pillantását, megszúrta ujját a tűvel, és három csepp vére ráhullott a hóra. És mert igen szépnek találta piros színüket a fehér havon, azt gondolta magában: „Volna bár egy gyerekem, olyan fehér, akár a hó, olyan piros, mint a vér, és olyan fekete, akár az ablakom kerete!” Nem sokkal ezután leánykája született, ki oly fehér volt, akár a hó, olyan piros, mint a vér, haja pedig olyan fekete, akár az ébenfa, elnevezték hát Hófejírkének. Midőn pedig a gyermek megszületett, a királyné meghalt.</p>
                <p>Esztendő múltán a király másik feleséget választott magának. Szép volt az új királyné, de büszke és gőgös, nem szenvedhette, hogy szépségben bárki is felülmúlja. Volt néki egy bűvös tükre, ha elébe állt és nézte magát benne, így szólt:</p>
                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?</blockquote>
                <p>Mire a tükör azt felelte:</p>
                <blockquote>Királyné, te vagy itt a legszebb.</blockquote>
                <p>Akkor megnyugodott a királyné, mert tudta, hogy tükre igazat mond.</p>


                <p>De Hófejírke lassan fölcseperedett, mind szebb és szebb lett, hetedik évét betöltve pedig olyan szép volt, akár a tündöklő nap, szebb még a királynénál is. Mikor a királyné egy ízben újra megkérdezte tükrét:</p>
                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?,</blockquote>
                <p>a tükör azt felelte:</p>
                <blockquote>Igaz, királyné, te vagy itt a legszebb, De Hófejírke nálad még százszor szebb</blockquote>

                <p>Elszörnyedt erre a királyné, sárgult, zöldült az irigységtől. Ama perctől fogva elég volt megpillantania Hófejírkét, szíve máris görcsbe szorult, annyira gyűlölte a leánykát. Az irigység s a dölyf mérges gyom módjára elburjánzott szívében, nem volt többé se éjjele, se nappala. Hívatta egyik vadászát, és így szólott: „Vidd kia gyereket az erdőbe, látni sem akarom itt többé. Öld meg, és bizonyságul hozd el nekem tüdejét és máját.“ Engedelmeskedett a vadász, kivitte Hófejírkét, de midőn elovette szarvas-ölőjét, hogy Hófejírke szívét átalszurja, a leányka sírva fakadt: „Jaj, kedves vadász, hagyd meg életemet; ígérem, elbujdosok a vadon legmélyére, és soha többé nem jövök vissza.“ Amiért pedig ilyen szépen szólott megszánta őt a vadász, és azt felelte: „Hát nem bánon fuss csak, te szegény gyermek.” „A vadak úgyis egykettőre felfalnak“, gondolta magában, de azért úgy érezte, nagy kő esett le szívéről, hogy nem kellett megölnie Hófejírkét. Éppen arra szökellt egy szarvasborjú; azt leszúrta, tüdejét-máját kivette és hazavitte bizonyítékul a királynénak. A szakácsnak meg kellett főznie sós vízben, a gonosz mostoha pedig megette abban a hitben, hogy Hófejírke tüdejét és máját eszi.</p>
                <p>A szegény leányka pedig árván kesergett a sűrű rengetegben, és annyira elfogta a félelem, hogy csak nézte, nézte a fák miriád levelét, de nem tudta, mitévő legyen. Futásnak eredt, szaladt, szaladt, szökellt éles köveken meg szúrós tövisek között, vadak iramlottak el mellette, de nem bántották. Hófejírke futott, míg csak lába bírta, és már-már bealkonyult, mikor kicsiny házikót pillantott meg, bement hát, hogy kipihenje magát. A házacskában minden kicsi volt, de annyira takaros és tiszta, hogy azt nem lehet elmondani. Kicsiny asztalka állott benne fehér terítővel, rajta hét kicsi tányér, minden tányérhoz egy-egy pici kanál, egy-egy piciny kés meg villa, valamint hét pici pohár. A falnál hét ágyacska sorakozott, hófehér takaróval bevetve. Hófejírke, mivel igen éhes és szomjas volt, mindegyik tányérról evett kevéske főzeléket meg egy kis kenyeret, és mindegyik pohárkából ivott egy csepp bort; mert sehonnan sem akarta az egészet elvenni. Aztán, mert olyannyira kimerült, befeküdt az egyik ágyacskába, de egy sem illett hozzá igazán; az egyik túl hosszú volt, a másik túl rövid, míg végre a hetedik éppen megfelelt; abból már nem is szállt ki, az angyalok oltalmába ajánlotta magát, és elszenderült.</p>
                <p>Midőn egészen besötétedett, megjöttek a házacska gazdái, a hét törpe, akik érc után ástak-vágtak a hegyekben. Meggyújtották hét kicsiny lámpásukat, és amint világos lett a házacskában, látják ám, hogy valaki ott járt, mert semmi sem abban a rendben volt, ahogy ők hagyták. „Ki ült az én székecskémen?“ - kérdezte az első törpe. „Ki evett a tányérkámból?“ - így a második. „Ki tört a kenyérkémből?“ – így a harmadik. „Ki evett a répácskámból:“ - így a negyedik. „Ki használta a villácskámat:“ - így az ötödik. „Kiszelt az én késecskémmel?” - így a hatodik. „Ki ivott a bögrécskémből?“ – így a hetedik. Akkor az első törpe körülnézett, és látta, hogy ágyán apró gödröcske támadt. „Ki mászott be ágyacskámba:“ - kérdezte. Odafutottak a többiek is, felkiáltottak: „Az én ágyamban is feküdt valaki!“ A hetedik viszont ágyába pillantván meglátta benne az alvó Hófejírkét. Hívta a többieket; odasereglettek, rikoltoztak ámulatukban, hozták hét kicsi lámpásukat, és Hófejírkére világítottak. „Ej, az áldóját - kiáltották -, milyen gyönyörű gyermek!“ – és annyira megörültek, hogy nem is ébresztették fel, hanem hagyták, hadd aludjék tovább az ágyacskában. A hetedik törpe pedig társai mellett aludt, mindegyiknél egy-egy órát, akkorra le is telt az éjszaka.</p>
                <p>Megvirradván, Hófejírke fölébredt, és igen megijedt, mikor meglátta a hét törpét. De azok kedvesen kérdezték: „Hogy hívnak:“„Hófejírkének” – felelte. „Hogyan kerültél a házunkba?” – folytatták a törpék. Hófejírke erre elmondta, hogy mostohája meg akarta öletni, de a vadász meghagyta életét, akkor ő futott, futott egész álló nap, míglen végül a törpék házacskájára bukkant. „Ha ellátod a házunkat – mondták a törpék -, főzöl, ágyat vetsz, mosol, varrsz és kötsz reánk, és mindent rendben és tisztán tartasz, akkor itt maradhatsz nálunk, és mindened meglesz.” „Szíves örömest” – felelte Hófejírke, és a törpéknél maradt. Rendben tartotta házukat; reggelente a törpék elmentek a hegyekbe, érc és arany után kutattak, este pedig hazatértek, akkorra készen kellett lennie a vacsorának. Napközben a leányka egyedül volt, a derék törpék figyelmeztették, és azt mondták: „Óvakodj a mostohádtól, hamarosan meg fogja tudni, hogy itt vagy; be ne engedj senkit!“</p>

                <p>A királyné viszont, azt hívén, hogy Hófejírke tüdejét-máját ette meg, biztosra vette: megint ő a legelső és a legszebb. Odaállt hát tükre elé, és szólott:</p>
                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?</blockquote>
                <p>A tükör pedig felelt neki:</p>
                <blockquote>Igaz, királyné, te vagy itt a legszebb, De hét törpénél, hegyek között, Hófejírke elrejtőzött, Ő még nálad is százszor szebb.</blockquote>
                <p>Elszörnyedt a királyné, mert tudta, hogy a tükör nem hazudik, rájött, hogy a vadász becsapta, és Hófejírke még mindig életben van. Töprengeni kezdett, miként végezhetne vele; mert nem lehetett nyugvása az irigységtől, amíg nem ő volt a legszebb az egész országban. Végre aztán kiötölt valamit, befestette arcát, vén házalónak öltözött, nem lehetett ráismerni. Ily ábrázattal átkelt a hét hegyen a hét törpéhez, bekopogott, és azt kiabálta: „Szép portékát tessék! Olcsó portékát tessék!“ Kitekintett az ablakon Hófejírke, és visszakiáltott: „Jó napot, kedves néne, mije van eladó?“ „Szép árum van, finom árum – felelte a mostoha -, öveim vannak mindenféle színben“, azzal elő is vett egy tarka selyemből szőttet. „A derék asszonyt csak beengedhetem - gondolta Hófejírke, kinyitotta az ajtót, és megvette a szép övet. „Milyen csinos vagy, gyermekem - hízelgett a vénaszszony -, jer csak, hadd kötlek szép feszesre!“ Hófejírke nem gondolt semmi rosszra, odaállt és engedte megkötni az új övet; de a gonosz némber egy szempillantás alatt elkötötte, és olyan szorosra húzta, hogy Hófejírke nem kapott levegőt, és holtra váltan esett össze. „Most már csak voltál a legszebb“ - kárörvendezett a mostoha, azzal gyorsan kereket oldott.</p>
                <p>Kisvártatva, mikor eljött az este, hazaért a hét törpe. De mekkora volt a rémületük, mikor látták, hogy kedves Hófejírkéjük a földön fekszik. Nem mozdult, szeme sem rezdült, mint aki meghalt. Fölemelték, s látták hogy túl szorosra van kötve az öve, elvágták gyorsan. Hófejírke pihegni kezdett, és lassacskán visszatért belé az élet. Hallván, hogy mi történt, a törpék így szóltak: „A vén házaló nem volt más, mint az istentelen királyné; légy óvatos, és senkit se engedj be, ha nem vagyunk itthon.“</p>
                <p>A gonosz némber viszont, hazaérvén, ismét odaállt tükre elé, és faggatni kezdte:</p>
                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?</blockquote>
                <p>Mire a tükör csak úgy, mint annakelőtte:</p>
                <blockquote>Királyné, igaz, te vagy itt a legszebb, De hét hegyen túl, hét törpénél, Hófejírke most is ott él, Ő még nálad is sokkal szebb.</blockquote>
                <p>Meghűlt a vér a gonosz királyné ereiben, mikor ezt meghallotta, mert látta, hogy Hófejírke ismét életre kelt. „Ne félj – sziszegte –, most majd kieszelek valamit, amitől biztosan elpusztulsz”, és mert értett a boszorkánysághoz, készített egy mérges fésűt. Álruhát öltött, és öregasszony alakját vette magára. Így ment el a hét hegyen át a hét törpéhez, bekopogott és azt kiabálta: „Szép portékát tessék, olcsó portékát tessék!” Kitekintett Hófejírke az ablakon, és kiszolt: „Továbbmehet, néne, nem szabad beengednem senkit.” „Megnézned azért csak szabad, amit hoztam” – felelte a vénség, elővette mérges fésűjét, és odamutatta. A fésű annyira megtetszett a gyermeknek, hogy engedett a csábításnak, és kinyitotta az ajtót. Mikor megegyeztek a vásárban, a vénség így szólt: „Hadd fésüllek meg egyszer végre rendesen." Szegény Hófejírke nem fogott gyanút, hagyta a vénasszonyt, de az alig vonta hajába a fésűt, a méreg nyomban hatott, és Hófejírke aléltan rogyott össze. „Nesze neked, te szépek szépe - lelkendezett a gonosz némber -, most aztán igazán véged” – azzal elszelelt. De szerencsére közeledett már az este, s a hét törpe hazatért. Meglátván, hogy Hófejírke mint a holt hever a földön, mindjárt a mostohára gyanakodtak, keresni kezdtek, megtalálták a mérgezett fésűt, és amint kivették hajából, Hófejírke újra magához tért, és elmondta nekik, mi történt. Akkor a törpék még egyszer intették, hogy legyen elővigyázatos, és senkinek se nyisson ajtót.</p>
                <p>Hazaérve a királyné odaállt a tükör elé, és vallatni kezdte:</p>

                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?</blockquote>
                <p>A tükör pedig felelt, mint előbb:</p>
                <blockquote>Igaz, királyné, te vagy itt a legszebb, De hét hegyen túl, hét törpénél, Hófejírke még mindig él, Ő nálad is százszor szebb.</blockquote>

                <p>Reszketni, remegni kezdett a királyné haragjában, tükör ilyen szavainak hallatán. „Hófejírke meghaljon - kiáltotta-, ha addig élek is!“ Azzal bezárkózott egy titkos szobába, ahová rajta kívül senki sem juthatott be, Es készített egy rettentő mérges almát. Szemre szépet, aki csak fehér héját, piros orcáit meglátta, annak nyála csurrant, de ha csak egy falatot is harapott belőle, menten meghalt. Mikor az alma elkészült, a mostoha elszínezte arcát, pórasszonynak öltözött, és így kelt át a hét hegyen a hét törpéhez. Bekopogott, Hófejírke kidugta fejét az ablakon, és így szólt: „Senkit sem szabad beengednem, a hét törpe megtiltotta!“ „Nekem úgy is jó - felelte a parasztasszony -, túladok én az almámon. Ezt az egyet azért neked adom ajándékba.” „Köszönöm – felelte Hófejírke -, de semmit sem szabad elfogadnom.” „Attól félsz tán, hogy mérges? – ravaszkodott a vénség. - Nézz csak ide, félbevágom az almát; a piros felét edd meg te, a fehéret pedig majd megeszem én.“ De olyan fortélyosan volt elkészítve az alma, hogy csak a piros fele volt mérgezett. Hófejírke megkívánta a szép almát, és mikor látta, hogy a kofa eszik belőle, ő sem tudott tovább ellenállni, kinyúlt érte az ablakon és elvette a mérges felét. De alig harapott belőle egy falatot, máris holtan rogyott a földre. Végigmérte ekkor a királyné gonosz szemmel, harsányan felkacagott, és így kárörvendett: „Fehér, akár a hó! Piros, mint a vér! Fekete, akár az ében! Ez egyszer a törpék sem tudnak feléleszteni téged!“ Mikor pedig hazaérvén vallatóra fogta tükrét:</p>
                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?</blockquote>
                <p>A tükör végre így válaszolt:</p>
                <blockquote>Királyné, úgy igaz, te vagy itt a legszebb.</blockquote>
                <p>Irigy szíve ekkor megnyugodott, már amennyire egy irigy szív nyugalmat lelhet.</p>
                <p>A törpék, mikor este hazatértek, Hófejírkét a földön fekve találták, de immár egy sóhaj sem hagyta el ajkát, halott volt! Fölemelték, kutattak, találnak-é valamit, ami mérgezett, kioldozták, kifésülték haját, megmosták vízzel, borral is, de minden hiába, a kedves leányka halott volt, és halott is maradt. Akkor ravatalra tették, köréje ültek mind a heten, és siratni kezdték; siratták három nap, három éjjel. Akkor el akarták temetni, de még mindig olyan hamvas volt, mintha élne, még mindig olyan szép pirospozsgás. „Így nem süllyeszthetjük el a fekete földbe” – mondták, készítettek üvegből egy átlátszó koporsót, hogy minden oldalról látni lehetett benne Hófejírkét, belehelyezték, és arany betűkkel ráírták a nevét, meg hogy királynak a leánya. Azzal felvitték a koporsót a hegyre, egyikük mindig mellette maradt és őrizte. Jottek az állatok, és ők is megsiratták Hófejírkét - előszor egy bagoly, aztán egy holló, végül pedig egy gerle.</p>
                <p>Hosszú, hosszú ideig feküdt igy Hófejírke a koporsóban, de nem enyészett el, úgy festett, mintha álmodna, mert még mindig olyan fehér volt, akár a hó, és még mindig olyan piros, akár a vér, a haja pedig még mindig Juan fekete, akár az ébenfa. Történt azonban, hogy av királyfi az erdőbe tévedt, ráakadt a törpék házára, ha megszállt náluk éjszakára. Megtekintette a koporsót is a hegyen, látta benne a szépséges Hófejírkét, és elolvasta az üvegen, amit arany betűkkel róttak rá. „Adjátok nekem a koporsót - kérlelte a törpéket -, megadom érte, amit csak akartok.“ De a törpék azt felelték: „Nem adjuk oda a világ minden aranyáért sem.” „Akkor adjátok nekem ajándékba – mondta a királyfi -, nem élhetek, ha nem láthatom Hófejírkét, ígérem, hogy legdrágább kincsemként fogom tisztelni és becsülni.” Ilyen szavaira megszánták őt a jóságos törpék, és neki ajándékozták a koporsót. A királyfi pedig elvitette apródjai vállán. Történt akkor, hogy útközben egy bokorban megbotlottak, és a zökkenésre kiugrott Hófejírke torkából a falat, amit a mérges almából leharapott. Kisvártatva kinyitotta szemét, felhajtotta a koporsó tetejét, felült, és újra élt. „Jaj, Istenem, hol vagyok” – kiáltott. „Jó helyen, mellettem – felelte boldogan a királyfi, és elmesélte, mi tortént, majd azt mondta: - Mindennél kedvesebb vagy nekem a világon, gyere vélem apám palotájába, és légy a hitvestársam.“ Tetszett ő is Hófejírkének, a királyfival tartott, és meghirdették a menyegzőt nagy pompával, diszesen. Meghívták az ünnepre Hófejírke gonosz mostoháját is. Magára öltvén szép ruháit, odaállt a tükör elé, és szólt:</p>
                <blockquote>Tükröm, tükröm, kérdezlek: Országomban ki a legszebb?</blockquote>
                <p>Mire a tükör azt válaszolta:</p>
                <blockquote>Igaz, királyné, te vagy a legszebb, De az ifjú királyné még nálad is százszor szebb.</blockquote>
                <p>Iszonyú átok tört fel erre a gonosz némberből, és olyan félelem fogta el, hogy nyugalmát többé nem lelte. Először el sem akart menni az esküvőre; de nem volt maradása, látnia kellett az ifjú királynét. Mikor aztán belépett, ráismert Hófejírkére, és a félelemtől meg a rémülettől földbe gyökerezett a lába, moccanni se bírt. De már oda is készítették a vascipőt a parázs fölé, fogókkal behozták, és letették a királyné elé. Bele kellett bújnia a tüzesen izzó cipőbe, és addig kellett táncolnia, míg holtan rogyott össze.</p>

                <hr />

                <p>
                  <img src={withPrefix('images/mirror/96e8aa7dec8edfded50f45128bd2ee77.jpg')} className="ui fluid image" />
                </p>
                <p>
                  <img src={withPrefix('images/mirror/88be65958e87d491d72e2e12c3b56b9c.jpg')} className="ui fluid image" />
                </p>

                <p>
                  <img src={withPrefix('images/huntsman/huntsman-and-snowwhite/story/2cfbbf00f69ef961e50246d3e8c1cebd.jpg')} className="ui fluid image" />
                </p>

                <p style={{ columnCount: 2, columnGap: '10px' }}>
                  <img src={withPrefix('images/huntsman/huntsman-and-snowwhite/story/f64ef1dcf18c23a4de85208967acdf5f.jpg')} className="ui fluid image" />
                  <img src={withPrefix('images/huntsman/huntsman-and-snowwhite/story/78e82bc9a8fc27d90f30005208da07c5.jpg')} className="ui fluid image" />
                </p>
                <p>
                  <img src={withPrefix('images/huntsman/huntsman-and-snowwhite/story/75c89831e3d51c5fffd9f780d5e946f5.jpg')} className="ui fluid image" />
                </p>
                <p>
                  <img src={withPrefix('images/fairytales/d9d1324cbeee4cb98d791a22d5ef8b3a.jpg')} className="ui fluid image" />
                </p>

                <p className="masonry">
                  <img src={withPrefix('images/snowwhite/coffin/1e18245c7ca9bdfda6e82f0dc9e51205.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/3a8180bc62b79e66fd26da3c6098daf5.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/7e93202bbe5ecf06e0f9a43f0094d179.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/34aaaa7a79b64eb1165b680327ba4046.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/34d481176a8d58b7469d0dab03110813.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/151d50b1edaba3734e00ef169f99c211.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/3414ff5883c382ec31cbd31cdf8ad866.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/42444df93dbe0c8efb3368dda512b31d.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/bcb715b04ecd196ed49e27bf2422e354.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/c80f7ef3684b60aca04c9a416ee31bfc.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/dabd58b91674d1d734d8dc95fc8e5977.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/f99e81039f1a33d114298f238c7b8e65.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/f206ab2123d25ea4708c580a6359a049.jpg')} />
                  <img src={withPrefix('images/snowwhite/coffin/fd51b6977e461a495d78c14db641ee70.jpg')} />
                </p>
                <p>
                  <img src={withPrefix('images/dwarfs/6231767741_0da9ee4b43_o.jpg')} className="ui fluid image" />
                </p>
              </div>
            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/storytelling/"
                content="Egyszer volt, hol nem volt..."
              />
              <NextButton
                to="/graph/"
                content="Grafikon"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
