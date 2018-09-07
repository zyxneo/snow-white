import React from 'react'
import ScrollSection from '../components/ScrollSection'

const Section = props => (
  <React.Fragment>
    <ScrollSection {...props} id="story.terminal">
      <h2>Terminal</h2>
      <div>
        <p>Említettem, hogy a Hófehérke mese a “mesenaprendszer központi csillaga”. Ez enyhe túlzás, de egy adott nézőpontból bármely mese lehet az. Az általam éppen vizsgált téma szempontjából ez a mese egy olyan központi metrómegálló, amin az összes vonal keresztülmegy, s ezeken a vonalakon a többi mese egy-egy állomás. Azért van ez így, mert ebben a sorrendben jöttem rá. Amerika is megvolt már, mielőtt Kolumbusz felfedezte volna, csak erről a sok millió helyi őslakos nem tudott előtte. Kell valaki aki megmutatja. Kolumbusz megmutatta, azóta híres az ő tojása.</p>

        <p className="masonry">
          <img src="/images/cpu/44ddd83ba52d9ec99ce470e7f03f272b.jpg" />
          <img src="/images/cpu/c6eb264a9386228a470f7e67ce873a82.jpg" />
          <img src="/images/cpu/cc1c0869ec80fa17ab57410c763e8108.jpg" />
        </p>

        <p>A mesék világszerte megtalálhatóak. A Grimm mesék is változatai ugyanígy fellelhetőek. De van valami nagyon különleges a Grimm mesékben, az hogy egymáshoz tartoznak. Össze vannak csiszolódva, nem csak azért mert egy kötetbe írták őket ugyanazok a szerzők, de mert egy nagy kirakós játék darabjai ők. Nem mesesorozatról van szó, hanem egy mágikus szerkezet alkatrészeiről. Ha helyesen tudjuk összeilleszteni az egyébként is érdekes tüneteket mutató részeket, valami nagy egység kel életre általuk...</p>
      </div>
    </ScrollSection>

    <ScrollSection {...props} id=".story.terminal.spindle">
      <h3>Fonás</h3>
      <div>
        <p>Az orsó (die Spindel), mint a fonás szimbóluma, avagy a fonás maga (spinnen) számos Grimm mesében megjelenik. Ezek a mesék további értelmezést adhatnak, miért is fontos szimbólum pl. az ujj megszúrása. Hogy kitegyem az i-re a pontot, és visszahelyezzem a kidobott rokkákat és orsókat a helyükre, itt egy lista ugyanazon Grimm kötetből, melyben orsó és/vagy fonás szerepel:</p>
        <ul>
          <li><a href="https://www.grimmstories.com/hu/grimm_mesek/csipkerozsika" target="_blank" rel="noopener noreferrer">Csipkerózsikát</a> (Dornröschen) elátkozza a boszorkány, miszerint amikor ivaréretté válik, meg fogja szúrni egy orsó, és ettől kábultan fog feküdni. Az apja rögtön óvintézkedéseket tesz, eltünteti az összes orsót közel s távolról. Nem is tudnak bejutni a hercegek hozzá.</li>
          <li>Lumpenstikli (Rumpelstilzchen) a szalmából is aranyat tud fonni. A magyar megfelelője ennek a mesének a kaponyányi manó. A rumpelstilz - mángorrúd mintájaként eredeti neve a „kapanyélnyi monyú“ etikai okokból nem kerül be a gyermek-mesekönyvekbe.</li>
          <li>A <a href="https://www.grimmstories.com/hu/grimm_mesek/holle_anyo" target="_blank" rel="noopener noreferrer">Holle anyó</a>hoz vezető út a kútba ejtett orsó nyomán halad. Ebbe a szimbólumba már bele sem merek gondolni ezek után... Inkább kifejtem külön fejezetben.</li>
          <li><a href="https://www.grimmstories.com/hu/grimm_mesek/a_lusta_fonoasszony" target="_blank" rel="noopener noreferrer">A lusta fonóasszony</a> (Die faule Spinnerin) - az egész mese alaptémája</li>
          <li><a href="https://www.grimmstories.com/hu/grimm_mesek/a_harom_fonoasszony" target="_blank" rel="noopener noreferrer">A három fonóasszony</a> (Die drei Spinnerinnen) - az egész mese alaptémája</li>
          <li><a href="https://www.grimmstories.com/hu/grimm_mesek/az_orso_a_vetelo_meg_a_tu" target="_blank" rel="noopener noreferrer">Az orsó, a vetélő meg a tű</a> (Spindel, Weberschiffchen und Nadel) - az egész mese alaptémája</li>
          <li><a href="https://www.grimmstories.com/hu/grimm_mesek/a_libapasztorlany_a_kutnal" target="_blank" rel="noopener noreferrer">A libapásztorlány a kútnál</a> (Die Gänsehirtin am Brunnen)</li>
          <li>A vízitündér (<a href="https://www.grimmstories.com/de/grimm_maerchen/die_wassernixe" target="_blank" rel="noopener noreferrer">Die Wassernixe</a>)</li>
          <li>A csiszladékok (<a href="https://www.grimmstories.com/de/grimm_maerchen/die_schlickerlinge" target="_blank" rel="noopener noreferrer">Die Schlickerlinge</a>)</li>
          <li>A veréb és az ő négy fia (<a href="https://www.grimmstories.com/de/grimm_maerchen/der_sperling_und_seine_vier_kinder" target="_blank" rel="noopener noreferrer">Der Sperling und seine vier Kinder</a>)</li>
        </ul>

        <p className="masonry">
          <img src="/images/fairytales/9310794dda3cbe1fc101108c2b9d2040.jpg" />
          <img src="/images/fairytales/13f71b06d0e2bca27549ed6ed7892fab.jpg" />
          <img src="/images/fairytales/aab0667a3ef2d4b3cbdd7957b8759c7f.jpg" />
          <img src="/images/fairytales/2096352872310edbff0dc3fd7a0d86ea.jpg" />
          <img src="/images/fairytales/d40552a519574f7fbed1ea72d1d0e928.jpg" />
          <img src="/images/fairytales/e1fda19e8a537dff40a9d0d33322d8f8.jpg" />
        </p>
      </div>
    </ScrollSection>
  </React.Fragment>
)


export default Section
