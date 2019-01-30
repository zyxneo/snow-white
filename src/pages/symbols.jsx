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
            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbols">
              <h1>Szimbólumok</h1>
              <div>
                <img src={withPrefix('images/sybmol/Yin_yang.svg')} className="ui medium left floated image" />
                <p>Bármi lehet szimbólum, magyar kifejezéssel jelkép, amit jelképként értelmezünk. Vannak közismert szimbólumok, mint pl. a Jin-jang. Sokan ismerik, sokan használják. Nehéz lenne egy ilyen jelképet másra használni, mint jelképnek, így egyértelmű a szerepe, noha jelentése kinek-kinek más-más szempontrendszer szerint érvényesül. Ezek a jelképek népszerűségüket valószínűleg annak köszönhetik, hogy nagyon szemléletesen sűrítik egybe azokat a mondanivalókat amik az embereket mindig is érdekelték, a sötétség és fény körforgása, a harmónia, a belül rejtező ellentét, stb.</p>

                <div className="clearfix" />
                <img src={withPrefix('images/color/7a29711708570837273ccb1b41402bca.jpg')} className="ui medium right floated image" />
                <p>A jelképek ugyanakkor nem általános érvényűek, értelmezésük különböző kultúránként eltér. Például a gyász színe Európában a fekete, míg a távol kelet bizonyos kulturáiban a fehér. Magyarázatot erre is lehet keresni: a színek legmélyebb értelme egyetemes is lehet, azonban a különböző világképből adódó gondolatt-társítások eltérőek. A nyugati kulturában a halál a világ végét jelenti, a világosság végét, a test-központú gondolkodás így a föld alatt következő végtelen eltöntendő időt nyilván a fekete színnel kapcsolta. A reinkarnációban hívő vallások szerint a halált követően a lélek a fénybe kerül, így az öltözék is ennek megfelelő.</p>
                <div className="clearfix" />
                <img src={withPrefix('images/color/4711b031485b55dabcb859e80039fcc9.jpg')} className="ui medium left floated image" />
                <p>A mesében rejtező szimbólumok viszont nem egyértelműek. Az még talán, hogy a mese maga egy szimbólum, de hogy annak számtalan részlete, a szereplők, a helyszínek, a tárgyak... az kevésbé nyilvánvaló. A mese egy nagyon összetett jelkép. Ahogyan a sakk játékban adott a kiindulási helyzet, úgy a mese alapkészlete is adott. A játszmát azonban nagyon sokféleképpen lehet véghezvinni, és a mese értelmezése is számtalan egyedi módon történhet.</p>
                <div className="clearfix" />
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.paths">
              <h3>Utak</h3>
              <div>
                <p>Lárvaállapot: Hófehérke, herceg. Női út, férfi út – nemenként egyedi út, de egymásnak megfeleltethető. Felisút-leisút – minden állapotból el lehet mozdulni, mindegyiknek vannak jellemzői. A mese kisarkítja a karakterek megítélését, de egyben rávilágít, nincs abszolút jó és rossz, ez nézőpont, “viszony” kérdése. A viszonylatok határozzák meg a lehetséges elmozdulási irányokat. Horizontális, vertikális utak, személyiségfejlődés. Minden mesében vannak utak, melyeket a hősnek be kell járnia, és ezek az utak általáben a jellemfejlődés belső útjait szimbolizálják.</p>
                <p className="masonry">
                  <img src={withPrefix('images/path/2fb5970360fb6b43402180c4b13595d2.jpg')} />
                  <img src={withPrefix('images/path/3de36d298df9ce8e65ce86440ee9ab77.jpg')} />
                  <img src={withPrefix('images/path/625ccdafa7f6db278a58e09909e55449.jpg')} />
                  <img src={withPrefix('images/path/a60865110a57a0ad1dd73421e03cd5bf.jpg')} />
                  <img src={withPrefix('images/path/5bd7cadfbb2b35b8cdbc233c414b3421.jpg')} />
                  <img src={withPrefix('images/forest/trees/5f7e4c9c180f0d1c08d2e8daf33792b2.jpg')} />
                </p>
                <p>Hófehérke fizikai útja a szülői házból az erdőn át a szülői házba vezet. Szimbolikusan a fehér királyi kastélyból a vérvörös merényletkísérlet miatt a fekete sötétségbe jut, ott próbákat áll ki, avagy bukik el. Végső, legnagyobb tragédiája a piros alma, mely egyben lehetővé teszi számára, hogy a hős karakter kiemelje, s elvigye a fehér menyegzőre.</p>
                <p>A mesében fizikai útként megjelenő út a mese hallgatójának egy szimbolikus út, mely az ő jellemének fejlődését szimbolizálja. Nagyon érdekes, hogy ezen út mellett a mesén belül van egy rejtett út, Hófehérke jellemfejlődésének útja, mely kevésbé nyilvánvaló. A mese során megtett horizontális útjához képest ez egy vertikális út, melyre csak a hét törpénél eltelt időszak szimbólumai mutatnak rá.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.forest">
              <h3>Helyszín – Erdő</h3>
              <div>
                <h4>Mi jut eszünkbe róla? Ezt a kérdést sokszor fel fogom tenni, hogy lehetőséget adjak az elgondolkodásra, hogy saját magunkba mélyedve feltárjuk személyes érzelmeinket, előítéleteinket a témával kapcsolatban. Fontosnak tartom az egy perces néma csendet, gondolatindítónak, hangulatkeltés gyanánt pedig pár képet is mutatok, amivel egyet lehet érteni, vagy el lehet utasítani. Aztán mondok én is egy verziót.</h4>
                <p className="masonry">
                  <img src={withPrefix('images/forest/trees/abfa8c6e29178ada753070ee3785f5ae.jpg')} />
                  <img src={withPrefix('images/forest/trees/da5d82501b3e154f05108e29f6d9801c.jpg')} />
                  <img src={withPrefix('images/forest/trees/e2d23e73345ff90dc0000f29e63a3c60.jpg')} />
                  <img src={withPrefix('images/forest/trees/25fd158132fc2b9c5abd496d0330bbb2.jpg')} />
                  <img src={withPrefix('images/forest/trees/a58d0f76218fae99f94030b87b529f85.jpg')} />
                  <img src={withPrefix('images/forest/trees/2011e3c8abafdfbe6eabaa3f69afe78a.jpg')} />
                  <img src={withPrefix('images/forest/trees/1ca26fc4a0214adcbd8d44312377cc3e.jpg')} />
                  <img src={withPrefix('images/forest/trees/9337f9f2c780f37c1d159d5e90826b4f.jpg')} />
                  <img src={withPrefix('images/forest/dark-forest/d88bdfe55bb260160f16afb35d8f1b7d.jpg')} />
                </p>

                <p>Vizsgáljuk meg az erdőt alkotó egységet: a fát. A fa csodálatosan szép szimbólum: 3 alapvetően elkülönülő része van:</p>
                <ol>
                  <li>Koronája: akár csak a királyoknak. Szétterül az égben, a fénybe kívánkozik.</li>
                  <li>Törzse: tartást ad, összeköti a fentet a lenttel, az ágakat, a gyökereket. Egységesít és elválaszt.</li>
                  <li>Gyökerek: ez így kerek. Lenyúlnak a sötét mélységbe és felszívják az anyagait a fényre, ahol átalakítják őket.</li>
                </ol>
                <p>A folyamat, melyet fotoszintézis néven tanítanak nem más, mint ahogyan a növény az isteni fény energiáját elnyeli, megnemesíti az anyagot, hogy saját testébe tudja építeni. Folyamatosan cirkuláltatja a felső és alsó világ összetevőit, a fény energiájával tör a sötét földbe gyökereivel az anyagért, és a sötét anyagból építi koronáját, hogy fényhez jusson. (Shiva - Shakti, Kundalini)</p>

                <blockquote>
                  <p><b>A fa jelképezi a függőleges tagoltságú világot, összeköti annak három szintjét. Gyökereivel az alvilágba, koronájával az égbe nyúlik.</b> Gyökerei közt csúszómászók, férgek tanyáznak, koronájában madarak, égitestek ülnek. Középen, a két ellentétes pólus határán helyezkedik el az emberek világa. A sámánok és a népmesék hősei innen indulnak útnak az égig érő fán, hogy elérjék a kegyes vagy ártó szellemek jóindulatát, kiszabadítsák az elrabolt királylányt.</p>
                  <cite>Kámoni Arborétum információs táblája</cite>
                </blockquote>

                <p>Az erdő sokdimenziós. A fák törzsének évgyűrűi az idő múlását szemléltetik, körkörös diagramon.</p>

                <p className="masonry">
                  <img src={withPrefix('images/forest/0a0fd2679dca146b529f13db27adc77a.jpg')} />
                  <img src={withPrefix('images/forest/94315e83086d6123ff289d6431067b22.jpg')} />
                  <img src={withPrefix('images/forest/12d582b3d4cc28200190c1c9d438ea94.jpg')} />
                </p>

                <blockquote>
                  <h3>Életfa - időfa</h3>
                  <p><b>A fa évgyűrűi őrzik az elmúlt idők emlékét, sugallva ezzel annak visszafordíthatatlanságát. Ugyanakkor minden egyes új év a megújulás lehetőségét hozza el.</b> Megszelídíti az elmúlást, a pusztulásba beleviszi az újjászületés ígéretét. Kétféle időképzet találkozik: a természeti ritmus által meghatározott, állandó visszatérésen alapuló ciklikus és a valahonnan valahova tartó, véggel terhes lineáris.</p>
                  <h3>„Kerekerdő“</h3>
                  <p>Az erdő is a népi líra egyik erős szerelmi jelképe. Jelképiségének erotikus vonatkozása két forrásból is táplálkozik: egyfelől <b>zárt hely</b>, és mint ilyen, intimitás és <b>boldogságszimbólum</b>, másfelől, a fához hasonlóan, <b>élet- és termékenységjelkép</b>. Helyzettől függően hordozhat pozitív vagy negatív jelentéseket, például a magas erdő az akadályokat, <b>elérhetetlen szerelmet</b>.</p>
                  <p>Az erdő, mint az érintetlen természet szentélye, a megnyugvás, a béke, csönd szigete. Ide Isten jelenlétébe vonulnak a <b>kereszténység remetéi</b> a világ zaja elől. <b>Szent Gellért</b> a Bakonyban élt elvonulva, s az egyetlen magyar alapítású szerzetesrend, a <b>pálosok</b>é a pilisi erdők remetéiből szerveződött.</p>
                  <p>Az erdő megzabolázatlansága, ahol a természet törvényei uralkodnak a civilizációval szemben, a szabadság képzetét is magában hordozza. Ide menekül háborúban, veszedelemben a falu népe, itt keres <b>menedéket</b> a társadalmi szabályokkal összeütközésbe került zsivány, betyár, katonaszökevény, lázadó.</p>
                  <p>Az erdőbe mint zárt térbe való belépés egy határ átlépését is jelenti ember és állat, civilizáció és vadon, tudat és tudatalatti, a <b>lét különböző állapotai</b> között. A benne barangoló lélek, míg belemerítkezik, valójában egy belső utat jár be, az út során titkokat tár fel, próbákat áll ki, feladatokat hajt végre, s végül az akadályok elhárításával <b>önmagát is legyőzi</b>. A népmesék veszedelmek árán férfivé érő hőseinek is rendre át kell küzdeniük magukat a <b>réz-, ezüst-, aranyerdő</b>n ahhoz, hogy beavatást nyerjenek.</p>
                  <cite>Kámoni Arborétum információs táblája</cite>
                </blockquote>

                <p>Nos, ebben az erdőben téved el a Hófehérke. Az erdő nyilvánvalóan a tudatalatti rejtelmeinek szimbóluma. Valljuk be, mi is itt tévedünk el.</p>

                <blockquote><p>A lélek és a feminin princípium jelképe. A beavatásra és az ismeretlen veszélyre is utalhat. A sötét vagy elvarázsolt erdőbe való belépés határ-szimbólum: a lélek megmerítkezése az ismeretlenség veszélyeiben (számos mesében szerepel ebben az értelemben, pl.: Piroska és a farkas; Jancsi és Juliska). Az erdő a halál birodalma; a természet titkait rejti. Spirituális világ, amelyen áthatolva az ember megtalálja a jelentést.</p><cite>Szimbólumtár - Pál József, Újvári Edit</cite></blockquote>

                <p className="masonry">
                  <img src={withPrefix('images/forest/dark-forest/20d0283dabc1bcd86113b175fc0dbb7d.jpg')} />
                  <img src={withPrefix('images/forest/dark-forest/cece089832bcd344e8cc959a89dec629.jpg')} />
                  <img src={withPrefix('images/forest/dark-forest/d62eed3161a3da8dd737ecbe4819f4a4.jpg')} />
                </p>

                <p>Egyes források szerint az erdő mélyén a világ fája alatt fonják a párkák az élet fonalát. Társulhat ez az élet vizének forrásához is. A zsidó-keresztény teremtéstörténetben a paradicsomi erdő központi fája is az élet fája, de valahogy ugyanott van a tudásnak fája is az almával.</p>
                <p className="masonry">
                  <img src={withPrefix('images/fates/three-witches/f4166cf968ed65cb6666bb4b3c48d9c6.jpg')} />
                  <img src={withPrefix('images/fates/three-witches/12d435fcbd9da7a9017e04cd4d95a71b.jpg')} />
                  <img src={withPrefix('images/fates/thread-of-life/ef748773f44115484839f1d812f8f007.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.heart">
              <h3>A szív</h3>
              <div>
                <h4>Mi jut eszünkbe róla?</h4>
                <p>A mostoha ráveszi a vadászt, hogy ölje meg Hófehérkét, és hozza el a szívét bizonyítékul. A szívét, kétségtelenül, és nem más belső szervét, mint ahogyan az a Grimm első kiadásaiban szerepel, hisz annak semmi értelme nem lenne ebben a történetben. A szív kulcsfontosságú, az életfontosságú szerv, mellyet az érzelmeinkkel társítjuk. A szív a központja az érrendszernek, itt fut össze, ide csomósodik az élet sok kis fonala, a testünket behálózó érrendszer. Ugyanakkor érszékszervként is felfogható, itt érzékeljük lelkiismeretünkkel, hogy életünk rendben zajlik-e. Szívből áradó érzelmeink tiszták, így szívünk útmutatására számíthatunk.</p>

                <p className="masonry">
                  <img src={withPrefix('images/heart/160bd32667f39d95ccd0215919c5f1dc.jpg')} />
                  <img src={withPrefix('images/heart/6cabb66255f4efa03a622f86af6c6f32.jpg')} />
                  <img src={withPrefix('images/heart/26cf837f001ec2ceddfc323283d23506.jpg')} />
                  <img src={withPrefix('images/heart/6b5e64e20feeb2a1c48ab70b99c3d661.jpg')} />
                  <img src={withPrefix('images/heart/02e3dcb73d6c2a35813833f45266ac0d.jpg')} />
                </p>

                <h4>Az erdő, mint a szív útja</h4>
                <p>Az erdő, ez a mesebeli helyszín egy belső tájnak is megfeleltethető. Külső környezetünk egy tájkép, vannak rajta ismerős és ismeretlen helyszínek. Van ahol könnyen eligazodunk, van, ahol kevésbé, például egy sötét erdőben. Noha szemünkkel nem látjuk, de van egy belső környezetünk is, egy belső tájkép. Egy részét ennek is jól ismerjük, azt ami közvetlen kapcsolatban áll társadalmi életünkkel, bizonyos gondolati formákat, éhségérzetet, félelmet, megnyugvást. Mivel azonban minden érzékszervünk a külvilág ingereit figyeli, azzal a külső környezettel sokkal inkább tisztában vagyunk, ami valójában nem tartozik hozzánk, nem a miénk, hiszen mi vagyunk az ő része. Saját belső személyes univerzumunk java életmódunk miatt szinte teljesen rejtve marad előttünk, akár egy életen át. A mesék tanítása szerintem ezen út megismerésére is rávilágít, eligazodási pontokat ad, és bátorítást, hogy merjünk elindulni.</p>

                <p className="masonry">
                  <img src={withPrefix('images/forest/392ceb2c5e58df17ee44fcbab013ab87.jpg')} />
                  <img src={withPrefix('images/heart/0d02c867246a63d133f19fdd16b50c89.jpg')} />
                  <img src={withPrefix('images/heart/c46c4112ebe40f06b274d0f738e9eb41.jpg')} />
                  <img src={withPrefix('images/forest/65fbf80586b804d15ba0560ddddd9697.jpg')} />
                  <img src={withPrefix('images/heart/85d8ea231ac9371a595257e434893e8e.jpg')} />
                  <img src={withPrefix('images/heart/38690bb1d89f439db3e874be2f357322.jpg')} />
                  <img src={withPrefix('images/forest/4e7d0e2ad4e3856d8bd24f65830adc6f.jpg')} />
                  <img src={withPrefix('images/heart/f7259957d7f54c67604ca02f39ed3da3.jpg')} />
                  <img src={withPrefix('images/heart/cd0d628f7a480a9cf965ec887e4a350f.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.home">
              <h3>Helyszín - otthon</h3>
              <div>
                <p>A mesében néhány helyszín említésre kerül, néhányat pedig feltételezhetünk. Kiemelném a „várat“, az otthont, a helyszínt ahol a mese kezdődik, ahol a király és a királyné lakik. Mi az elképzelésünk erről a helyről? Az enyém egy fehér vár.</p>

                <p className="masonry">
                  <img src={withPrefix('images/queen/white-castle/2e6af0de2bf254ccc14be6c2243df23f.jpg')} />
                  <img src={withPrefix('images/queen/white-castle/49250c69bf000cad153a0fb497f997c9.jpg')} />
                  <img src={withPrefix('images/queen/white-castle/53ace165881033b3f36a317ee75d0cdb.jpg')} />
                  <img src={withPrefix('images/queen/white-castle/d96ce331d3fc7a8bb1a3176fb28caccc.jpg')} />
                  <img src={withPrefix('images/queen/white-castle/dd5ea86a4b1d8d8df84c73a750584c7f.jpg')} />
                  <img src={withPrefix('images/queen/white-castle/ce9e35c9ec69b74b3e574a02fe87f6b7.jpg')} />
                </p>

                <p>Ez a képzet keletkezik bennem, ez illik a télhez, az említett fehér színhez és a karakterekhez. Van egy hasonló helyszín, amiről egyik változat sem tesz említést. Nevezetesen az otthon ahonnan a mostoha származik. Neki is jönnie kellett valahonnan, egy megözvegyült férfihez megy hozzá, feltételezhető, hogy maga is özvegy. Mindenesetre kell, hogy legyen múltja, hiszen egyik meseváltozat sem tesz említést arról, hogy fiatal lenne, ellenben „járatosságát“ megemlítik, akár nevezetesen az okkult tudományok valamely ágát. A karaktert ismerve adódik, hogy a hely ahonnan jön egy fekete vár. Ha ez így elfogadható, van két helyszínünk: Fehérvár – Feketevár.</p>

                <p>Az biztos, hogy a színük ellentétes. De csak közös bennük a „vár“, az épület, mint helyszín. Ez a helyszín az otthon, ahol ezek a karakterek laknak, pontosabban, amelyet teremtenek maguknak. A nő hagyományosan az otthon megteremtője, az ő lelkisége alakítja ki az egyébként rideg épület hangulatát. Az ő állapotától függ tehát az otthon állapota. Gyermekrajzok elemzésekor a házikó tudtom szerint a gyermeket magát jelenti. A ház belső tere maga a nő, a befogadó, s hogy jobban érthető legyen, az egész házat, (kívülről is) szélsőségesen megfestettem fehérre és feketére, hogy lássuk az analógiát a karakterekkel. A épület ettől függetlenül továbbra is csak egy rideg tárgy, egy eszköz, egy szeparált, zárt környezet. A minőségét a jellem formálja, amint a belső világ megjelenik a külső világban. Ha a házba új lakók költöznek, elkezdődik egy átalakítási folyamat. Ha a lakók megváltoznak, átalakul a lakás. Ha megváltozunk, átalakul a környezetünk. A változás belül kezdődik. Hogy a várkastély fekete vagy fehér, az nem a köveken múlik amiből építették. (A kastély márványból van, ami egy „átalakult“ kőzet, van belőle fehér is, fekete is.) A vár ugyanaz, ahogy a mese karakterei is egyugyanazon személy különböző létállapotai. A zord fekete elhagyott özvegyi vár is életteli fehér kastély volt egykor, de lakóinak alakulása (torzulása) felismerhetetlenné tette. Hogy a vadásszá és mostohává lett karakterek melyike hagyta el először és milyen okokból, arra nem térnék ki, számtalan lehetséges változat van erre, de annyi biztos, denevéreket, varjakat, pókhálót és átkokat hagytak maguk után. A mese zárójelenete is a ragyogó királyi kastély, de ha felülvizsgáljuk a történetet, könnyen észrevehetjük, hogy a mostoha, majd a vadász feltűnésekor megfakul fénye, ha meg nem szürkül, vagy egyenesen megfeketedik ez a helyszín. Rajtunk, a mese ismerőin áll, hogy felismerjük, mik ezeknek a változásoknak a mozgatórugói, hogy észre vegyük a jeleket, és a megfelelő irányba változzunk, hogy a mese ismét a fényes palotába kerüljön. Nagy a felelősségünk, a fekete karakterek mutatnak rá a változás szükségességére, a hely ahonnan jönnek fekete, a fehéret is feketévé teszik, és a jutalmul is csak ezt kapják. Példák ők a hibás választásra.</p>
                <p className="masonry">
                  <img src={withPrefix('images/witch/black-hall/88be4e4a5a47fcb96aaef06c70c5ec2d.jpg')} />
                  <img src={withPrefix('images/witch/black-hall/73ce14a471bdac1836a0fcd3583fed68.jpg')} />
                  <img src={withPrefix('images/witch/black-hall/372a1c39cddf527dafed0e8fa1a6f900.jpg')} />
                  <img src={withPrefix('images/witch/black-hall/2408ced709f8818a7459eadce8956fc9.jpg')} />
                  <img src={withPrefix('images/witch/black-hall/4d990390fe03ba94cd09d28b867fe4c7.jpg')} />
                  <img src={withPrefix('images/witch/black-hall/dcf7550221a74215946ca9245e1dc9f4.jpg')} />
                </p>

              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.mirror">
              <h3>Tükör</h3>
              <div>
                <img src={withPrefix('images/mirror/57edc054c5ed28b0a7b1787ea8bdb779.jpg')} className="ui fluid image" /><blockquote><p>A tükör csak a képet adja vissza; de fogalmat nem ád. Rút csak az, a mi rossz.</p><cite>Jókai Mór - A Kráó</cite></blockquote><img src={withPrefix('images/mirror/1ebb156387fc41227d6dc8ca59f4afb4.jpg')} className="ui medium left floated image" /><p>A mesében a boszorkányságban jártas mostoha a tükrét kérdezi, hogy megbizonyosodjon a felől: szépsége felülmúlhatatlan. A tükör igaz válaszokat ad. Egy varázslatos, igazmondó tükörről van szó. Néhány feldolgozásban a mese végén, mikor a mostoha tehetetlenné válik hófehérkével szemben, bosszúsan töri össze tükrét.</p>
                <div className="clearfix" />
                <img src={withPrefix('images/mirror/06df78e5b544119aee1ff5932368eb03.jpg')} className="ui medium left floated image" />
                <p>A tükör, ahogyan most ismerjük, üvegből készül, bevonattal. Ez a mese korához képest egy igen új technológia. Korábban a tükröket készítették fémlapokból is, egy felpolírozott ezüstlap tökéletes erre a célra. (ezt azonban nem lehet összetörni) Természeti népeknél, technológia nélkül is elérhető a víztükör... De számomra a legérdekesebb változat az, amiben a mostoha éjjel a holdnak teszi fel kérdéseit, és az válaszol neki. Mindenek előtt ezt a változatot szeretném előnyben részesíteni, mert koroktól, kultúráktól és földrajzi elhelyezkedéstől függetlenül azonos a szimbólum.</p>
                <div className="clearfix" />

                <p className="masonry">
                  <img src={withPrefix('images/witch/moon/c34a7fe7c725a6c4fbe053812c2b792f.jpg')} />
                  <img src={withPrefix('images/witch/moon/6791cba2f21c08831a59e88908a5965f.jpg')} />
                  <img src={withPrefix('images/mirror/6c302f9e40d0cf66ecc714a98b4424e5.jpg')} />
                </p>

                <p>A hold nem rendelkezik saját fénnyel, a nap fényét tükrözi vissza. A nap és hold szimbolikája igen gazdag, így csak a „kibocsájt - befogad“, „megvilágít - visszatükröz“ értelmezésre szorítkoznék. A nap fényét „világosságnak“ mondjuk. Világ egyben jelenti az ismert, minket körülvevő univerzumot, és a fényt. A fény világítja meg a tárgyakat, ez segít hozzá a megismeréshez, e nélkül csak sötétben tapogatózunk. A világ világossága maga a megértés folyamata, ami világos, az érthető. Ami tehát érthető, az világos a magyar nyelvben. De hasonlóképp gyullad villanykörte a rajzocska felett, ha azt ábrázolják, hogy rájött valamire. A fény az elme világossága is. Sokszor volt már, hogy a sötét fejekben akartak világosságot gyújtani. Az elme azonban nem a szív, nem a lélek világa. A felvilágosodás kora mutatja be, mire képes a szívtelen, lélektelen elme. A magukat megvilágosodottnak tartó illuminatitagokat sem gyakran látni jézusi példabeszédeket prédikálva. És ha már Jézus, a lucifer szó jelentése: „fényhozó“ (a fény mértékegysége máig is lux). Maga a mese világa int óvva ettől az elmétől, szép példa erre a „csodalámpás“, melyből nem pislákoló lángocska, de egy hatalmas „szellem“ búvik elő. Ismét meg kell jegyezni a magyar nyelv szellem - értelem szavainak egyezését. A világító lámpást tehát csak kérni kell, és az előáll az ötletekkel, melyek valósággá válnak. (conception - definition - implementation sorrendben). A palackból kiszabadult szellem önjáróvá válása pedig rendszerint katasztrófába torkollik.</p><img src={withPrefix('images/mirror/3da93911869c280edbf029351063d1e9.jpg')} className="ui medium left floated image" /><p>Ezen kis kitekintő után talán jobban érthetővé válik, mi is az ami tükröződik. Nem hagyományos tükörről beszélünk, hanem egy varázslatos, igazmondó tükörről, amely a gondolatokat is képes visszatükrözni. A külvilág megítélésének, a környezet válaszainak tükrén túl ez a tükör egy sokkal kifinomultabb, nem optikán alapuló „elmetükör“, egy belső visszhang, egy tudatrétegi reflexió, a „hang a fejben“, a lelkiismeret suttogásához hasonló „elmeismeret“, a bizonyosság, a belső meghasadtság ikerpárjai között rebegő hártya, amely igazolja, hogy a belső kényszerképzet maga a valóság.</p>
                <div className="clearfix" />
                <img src={withPrefix('images/mirror/18874d28b67091e5b90857b99c10f4ba.jpg')} className="ui medium left floated image" /><p>Mi is tehát ez a tükör? Képes-e a hold a nap fényét tükrözni? Igen, <b>ezüstösen ragyog a hold az éjszaka fekete sötétjében, de a nap a fényben ragyog</b>. Az elme belső önmegigazolódása önmagával éppilyen ragyogó, gyönyörködtető a koponya sötétjében. A mostoha a holdra tekint, megkérdezi, s az igazat felel neki. A külső szemlélő pedig beleborzong a boszorkányság félelmetes szeánszába. A megigazult, tiszta, háborodott elme párbeszédje ez a monológ. Mire vezetik ezek a válaszok a mostohát? Öntelt, „beképzelt“ magatartáshoz, féltékenységhez, cselszövéshez. Igazat mond a tükör? Igen, ez mindig beigazolódik. Igazat adunk a mostohának? ... </p>
                <div className="clearfix" />

                <img src={withPrefix('images/witch/moon/7576abe8402859b9d43bbe8152efcea8.jpg')} className="ui medium left floated image" /><p>Egy további oka amiért nagyon megtetszett nekem a hold mint igazmondó tükör meseelem, mert így két szimbólumot kapunk egyben, hiszen a hold egy további női szimbólum. A holdnak is van ciklusa, ami majdnem egybeesik a női termékenységi ciklussal. Több természeti ciklus van, a Föld Nap körüli körzése az év, a saját tengelye körüli körzése, amit mi a nap körzésének látunk a nap. A hold ciklusa a hold-nap, vagyis hónap. Ennek során a hold mindig más arcát mutatja nekünk, pontosabban ugyanazt az arcát, de olykor fényesen, olykor sötéten.</p>
                <div className="clearfix" />

                <blockquote>
                  <p>Meduza szép volt. Azt merte mondani, hogy az ő arcza tökéletesebb, mint Minerváé. A boszúálló istennő azzal verte meg, hogy ijesztővé tegye az arczát a kérkedőnek. De Meduza arról nem tudott semmit, a míg az istennő egy tükröt nem küldött neki, hogy lássa meg benne, milyen rút az arcza: s ettől Meduza ijedtében kővé dermedt.</p>
                  <p>Ezt az egyet nem hiszem el a mythologiának.</p>
                  <p>Nincs olyan nő a világon, a ki magát rútnak lássa, ha a tükörbe néz. Az a csodálatos, isteni jótétemény, hogy senki sem hiszi magáról azt, hogy rút. Mindenki talál az arczán valami szépet, a mihez ragaszkodva, fenn tudja magában tartani az önszeretetet. S ez az érzés nem vénül meg, nem múlik el soha. És ha akkor, a mikor már halva vagyunk, még bele nézhetnénk a tükörbe, bizonyosan azt mondanók: «mégis csak szép halott vagyok én!»</p>
                  <cite>Jókai Mór - A Kráó</cite>
                </blockquote>

                <div className="ui embed" data-source="youtube" data-id="5RKUUis-R78">
                  <iframe title="Rammstein-Sonne" width="560" height="315" src="https://www.youtube.com/embed/5RKUUis-R78?start=3559&end=3867&rel=0" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </div>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.jail">
              <h3>A börtön</h3>
              <div>
                <p>Az “özvegyen maradt” király új kapcsolatát nehezen lehetne jó kapcsolatnak nevezni, de a történet határozott említést tesz a pár tagjainak összetartozásáról. Amint a mostoha megjelenik, beköszönt a konfliktusos rész, a sötét időszak semmilyen szempontból nem termékeny. A királyné halott. A király jelenléte irreleváns, „sakkba szorul“. Hófehérke száműzve, a herceg még sehol. A vadász pedig...</p>
                <p>A mostoha börtönbe veti a szolgálatot megtagadó vadászt. Mind a vadász, mind a királyné mellékvágányra van állítva… Véleményem szerint a vadász-királyné kapcsolat megfeleltethető a király-mostoha kapcsolattal, csak a nemek és reakciók különböznek. Nem a vadász van börtönben, pusztán a vadász-börtön szimbólum számít.</p>

                <p className="masonry">
                  <img src={withPrefix('images/jail/1febcc3d3e0aaefe5903f1262a749b04.jpg')} />
                  <img src={withPrefix('images/jail/2ed19591a0a3c2008399f81896223ac3.jpg')} />
                  <img src={withPrefix('images/jail/8e500e6a83ed541b9523d91b8855f71c.jpg')} />
                  <img src={withPrefix('images/jail/3acdc6046309e85ea2f10c0ddec66d0e.jpg')} />
                  <img src={withPrefix('images/jail/7b6b64de4a4d810f1a30f05a7dd06430.jpg')} />
                  <img src={withPrefix('images/jail/8fbe1b5887afe48c3e60e936d0993ddc.jpg')} />
                  <img src={withPrefix('images/jail/c51956cc68b70ec0721a828d09cbbdc0.jpg')} />
                  <img src={withPrefix('images/jail/9b3bb5e0f7c04ca1b2d4962cb1be42a9.jpg')} />
                  <img src={withPrefix('images/jail/b12bc8341a0eb73c2f1eebb4cccd986c.jpg')} />
                  <img src={withPrefix('images/jail/7af1fb574ad8c347ccd6d1f9b4980afd.jpg')} />
                </p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.apple">
              <h3>Alma</h3>
              <div>
                <p>Az alma egy termés, szigorú értelmezésben az alma nevű növény termése, tágabban az almafélék termése. Még tágabb értelemben a rózsafélék termése is hasonlít az almára, például gránátalma. De ha a csipkerózsa termésére gondolunk, egy másik mese is ide köthető, amiben az orsó is nagy szerepet kap. Népművészeti ábrázolások közt gyakori szimbólum, női jelkép. A kerekre, vérpirosra érett alma a méh (uterus) szimbóluma is lehet.</p>

                <p className="masonry">
                  <img src={withPrefix('images/snowwhite/apple/135659bce47f4fe335816315bd361b09.jpg')} />
                  <img src={withPrefix('images/snowwhite/apple/b9c3ab6d432344a08fe8fb0090f759ab.jpg')} />
                  <img src={withPrefix('images/snowwhite/apple/37bc2b7c29cccba339c25037a05728aa.jpg')} />
                  <img src={withPrefix('images/snowwhite/apple/272669_BSjOrMYXqNuXsJ0svRGCA83ed.jpg')} />
                  <img src={withPrefix('images/snowwhite/apple/54a253f04f1017d4d9d7938011cc855c.jpg')} />
                  <img src={withPrefix('images/snowwhite/37b68330d7499d53f1f6c4a62d8032b3.jpg')} />
                </p>

                <p>Véleményem szerint a közismert mesében jelentéktelen és alig értelmezhető szerepet kap ez a szimbólum. Nagyon érdekes másfelől az a búvópatakként előtörő szimbólum amikor a felnyíló alma magja kihajt.</p>

                <p><img src={withPrefix('images/snowwhite/biancaneve/Biancaneve-281629.jpg')} className="ui fluid image" /></p>

                <p>Hát nem sokkal szebb lenne ha a földre eső alma magja kihajtana? Ráadásul úgy, hogy a két fél közösen növesztene hajtást? Mindenképp elgondolkodtatóbb... „Az ember lényegi sajátosságait fölösleges, sőt káros egymást kizáró tényezőkként feltüntetni.“</p>
                <p>Az alma preparálása nem tiszta számomra. Én még egy olyan mesére emlékszem amelyben a „boszorka“ ketté vágott egy almát, a szép, egészséges, piros felét megmérgezte, majd visszahelyezte azt a zöld, kukacos félre. Amikor azt bizonyította, hogy az alma ehető, akkor emezt a kevésbé étvágygerjesztő részt választotta. (Itt rögtön megjegyezném, hogy a modern nyugatias társadalomban valamennyi választásunk alternatíváit ilyennek látom, legyen az oktatás, egészségügy, vagy akár maga az alma.)</p>

                <p className="ui embed" data-source="youtube" data-id="5RKUUis-R78">
                  <iframe title="?" width="560" height="315" src="https://www.youtube.com/embed/6n_xCI-peq0?start=73&end=98" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
                </p>
                <p>Mint kiderült, az egyes mesék eltérnek az alma leírását illetően. Mivel az „I Pet Goat II“ animációt többségében francia nevű alkotók készítették, megkérdeztem a kollégámat, ismer-e valamit a maggal kapcsolatban. Azt ugyan nem, de elmondása szerint náluk az alma egyik fele piros, a másik fehér volt. Megjegyezte, ennek nem sok értelmét látja. Nekem viszont ez olaj volt a tűzre, hiszen az olasz Biancaneve illusztrációiban is pont ezt látni. (A magyar változat fakó felet említ)</p><img src={withPrefix('images/snowwhite/biancaneve/Biancaneve-28329.jpg')} className="ui fluid image" />
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.mine">
              <h3>A hét</h3>
              <div>
                <p>Szándékosan nem törpe.</p>
                <p>Hogyan hívták a hét törpét? </p>
                <img src={withPrefix('images/7/6136290580b43221a4d2066e04fd36bd.jpg')} className="ui medium right floated image" />
                <ol>
                  <li>Dó</li>
                  <li>Ré</li>
                  <li>Mi</li>
                  <li>Fá</li>
                  <li>Szó</li>
                  <li>Lá</li>
                  <li>Ti?</li>
                </ol>
                <div className="clearfix" />
                vagy
                <img src={withPrefix('images/7/8d2ff95e58f0e33f6c0e870f4ec47a3e.jpg')} className="ui medium right floated image" />
                <ol>
                  <li>Vörös</li>
                  <li>Narancs</li>
                  <li>Sárga</li>
                  <li>Zöld</li>
                  <li>Kék</li>
                  <li>Indigó</li>
                  <li>Ibolya?</li>
                </ol>
                <div className="clearfix" />
                vagy netán
                <img src={withPrefix('images/7/e267397e1f04035edfa97f980874d2be.jpg')} className="ui medium right floated image" />
                <ol>
                  <li>Muladhara (Gyökér-)</li>
                  <li>Svadisthana (Szakrális-)</li>
                  <li>Manipura (Napfonat-)</li>
                  <li>Anahata (Torok-)</li>
                  <li>Visuddha (Szív-)</li>
                  <li>Ajna (Homlok-)</li>
                  <li>Sahasrara (Koronacsakra)?</li>
                </ol>
                vagy esetleg
                <ol>
                  <li>Kevélység</li>
                  <li>Fösvénység</li>
                  <li>Bujaság</li>
                  <li>Irigység</li>
                  <li>Torkosság</li>
                  <li>Harag</li>
                  <li>Jóra való restség?</li>
                </ol>
                <div className="clearfix" />
                <p>Nem. Úgy hívták őket, hogy Csipa, Harák, Mitesszer... A hétszentségit neki! Miért pont törpe? Egyről a kettőre jutunk, majd ötről a hatra. Akinek pedig van hat-alma az tud hatni, előre-hátra, jobbra-balra és fel-le, a mi három dimenziós világunk hat irányába. Ennek a meghaladásáról lenne szó? Hét lépcsőfokról, ami egy másik világba vezet? Egy másik planétára, a Hetedhét országba? A magyar eredetmonda 7 vezérrel számol. Lehetséges, hogy Álmos, Előd, Ond és a többiek számossága csak egy véletlen egybeesés azzal a hét dologgal, ami a magyarokat már annak előtte is vezérelte? A juhász furulyáján is 7 lyuk van, a zene, ami előadható rajta, 1 oktávot ölel fel. Egy oktávval távolabb egy újabb oktáv kezdődik, mely ugyanolyan elvek szerint rendeződik, mint az előző, csak egy szinttel alacsonyabban ill. magasabban van. (latin octava = nyolcadik, vagyis a 7-es egység újabb ismétlődésének első eleme)</p>
                <p>Hófehérke a mesén belül megtett horizontális útja során eljut a 7-hez, és itt megkezdi vertikális fejlődési útját a 7 segítségével. Nehéz ezt bizonyítanom, főleg hogy minden gyerek tudja, hogy a banya egyfolytában szivatja a Hófehérkét, míg az a törpéknél van, de mégis, van egy ilyen érzésem. Meg kell mondjam, ismét csodálatos megerősítés volt az alábbi illusztráció:</p>

                <p><img src={withPrefix('images/snowwhite/biancaneve/23755330_869583669874190_1326789909525721786_n.jpg')} className="ui fluid image" /></p>

                <p>Sehol máshol nem láttam, és nem is tudtam volna elképzelni ezt az erdei házat így, a az erdő fölé magasodva. Zseniális, ahogy lépcső vezet hozzá, avagy létra, a „lét rá“-ja. Hozzátenném, nyilván 7 lépcsőfokról van szó.</p>
              </div>
            </ScrollSection>

            <ScrollSection onEnter={this.onEnterViewport} id="symbol.symbol.mine">
              <h3>Bánya</h3>
              <div>
                <p>A bánya feltételezi, hogy elfogadjuk a törpés részt olyannak, amilyen. Más változatokban nem biztos hogy van bánya, pl. a hét huszár nem valószínű, hogy a bányában dolgozik. Mégis, szerintem ide illik a szimbólum: a sötét erdő mélyén egy sötét föld alatti üreg. Nem kerül bemutatásra. Feltehetően kincset rejt. De úgy tűnik, megéri kockáztatni, megéri mélyre ásni, mert a kincsek ott rejtőznek...</p>

                <p>Ezen a videón a fiúk a bányában dolgoznak:</p>
                <p className="ui embed" data-source="youtube" data-id="StZcUAPRRac">
                  <iframe title="Rammstein - Sonne" width="560" height="315" src="https://www.youtube.com/embed/StZcUAPRRac" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullscreen />
                </p>
              </div>

            </ScrollSection>

            <Footer>
              <PreviousButton
                to="/textil/"
                content="Textil"
              />
              <NextButton
                to="/colors/"
                content="Szín-szimbolika"
              />
            </Footer>
          </div>
        </div>

      </Layout>
    )
  }
}

export default IndexPage
