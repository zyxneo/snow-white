import React from 'react'
import ScrollSection from '../components/ScrollSection'

const Section = props => (
  <React.Fragment>
    <ScrollSection {...props} id="story.terminal">
      <h2>Terminal</h2>
      <div>
        <p>Említettem, hogy a Hófehérke mese a “mesenaprendszer központi csillaga”. Ez enyhe túlzás, de egy adott nézőpontból bármely mese lehet az. Az általam éppen vizsgált téma szempontjából ez a mese egy olyan központi metrómegálló, amin az össszes vonal keresztülmegy, s ezeken a vonalakon a többi mese egy-egy állomás. Azért van ez így, mert ebben a sorrendben jöttem rá. Amerika is megvolt már, mielőtt Kolombusz felfedezte volna, csak erről a sok millió helyi őslakos nem tudott előtte. Kell valaki aki megmutatja. Kolombusz megmutatta, azóta híres az ő tojása.</p>
        <p>A mesék vilászerte megtalálhatóak. A Grimm mesék is változatai ugyanígy fellelhetőek. De van valami nagyon különleges a Grimm mesesorozatban, az hogy egymáshoz tartoznak. Össze vannak csiszolódva, nem csak azért mert egy kötetbe írták őket ugyanazok a szerzők, de mert egy nagy kirakósjáték darabjai ők. Nem mesesorozatról van szó, hanem egy mágikus szerkezet alkatrészeiről. Ha helyesen tudjuk ősszeilleszteni az egyébként is érdekes tüneteket mutató részeket, valami nagy egység kel életre általuk...</p>
      </div>
    </ScrollSection>

    <ScrollSection {...props} id=".story.terminal.spindle">
      <h3>Fonás</h3>
      <div>
        <p>Az orsó (die Spindel), mint a fonás szimbóluma, avagy a fonás maga (spinnen) számtalan Grimm mesében megjelenik. Ezek a mesék további értelmezést adhatnak, miért is fontos szimbólum pl. az ujj megszúrása. Hogy kitegyem az i-re a pontot, és visszhelyezzem a kidobott rokkákat és orsókat a helyükre, itt egy lista ugyanazon Grimm kötetből, melyben orsó és/vagy fonás szerepel:</p>
        <ul>
          <li>Csipkerózsikát elátkozza a boszorkány, miszerint amikor ivaréretté válik, meg fogja szúrni egy orsó, és ettől kábultan fog feküdni. Az apja rögtön óvintézkedéseket tesz, eltünteti az összes orsót közel s távolról. Nem is tudnak bejutni a hercegek hozzá.</li>
          <li>Lumpenstikli (Rumpelstilzchen) a szalmából is aranyat tud fonni. A magyar megfelelője ennek a mesének a kaponyányi manó. A rumpelstilz - mángorrúd mintájakét eredeti neve a „kapanyélnyi monyú“ etikai okokból nem kerül be a gyermek-mesekönyvekbe.</li>
          <li>A Holle anyóhoz vezető út a kútba ejtett orsó nyomán halad. Ebbe a szimbólumba már bele sem merek gondolni ezek után... Inkább kifejtem külön fejezetben. Holle anyó amúgy a királynőhöz hasonlóan a hó birodalmáben él.</li>
          <li>A lusta fonó (Die faule Spinnerin) - az egész mese alaptémája</li>
          <li>A három fonó (Die drei Spinnerinnen) - az egész mese alaptémája</li>
          <li>Spindel, Weberschiffchen und Nadel - az egész mese alaptémája</li>
          <li>Csipkerózsika (Dornröschen)</li>
          <li>Die Wassernixe</li>
          <li>Die Schlickerlinge</li>
          <li>Der Sperling und seine vier Kinder</li>
          <li>Die Gänsehirtin am Brunnen</li>
        </ul>

        <div className="masonry">
          <img src="/images/fairytales/9310794dda3cbe1fc101108c2b9d2040.jpg" />
          <img src="/images/fairytales/13f71b06d0e2bca27549ed6ed7892fab.jpg" />
          <img src="/images/fairytales/aab0667a3ef2d4b3cbdd7957b8759c7f.jpg" />
          <img src="/images/fairytales/2096352872310edbff0dc3fd7a0d86ea.jpg" />
          <img src="/images/fairytales/d40552a519574f7fbed1ea72d1d0e928.jpg" />
          <img src="/images/fairytales/e1fda19e8a537dff40a9d0d33322d8f8.jpg" />
        </div>
      </div>
    </ScrollSection>
  </React.Fragment>
)


export default Section
