import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

import { 
  Yogyakarta, 
  Jawatengah, 
  Bali, 
  Aceh, 
  Sumatrabarat, 
  Jakarta, 
  Bengkulu, 
  Bangkabelitung, 
  Banten, 
  Gorontalo, 
  Jambi,
 } from './pages/Export';

import{
  Gudeg,
  Bakmijawa,
  Ayamkalasan,
} from '../src/pages/DaerahPage/Yogyakartafile/ExportYogya';

import{
  Mieaceh,
  Nasigurih,
  Kuahplieku,
  Ayamtangkap,
  Satematang,
  Roticane,
  Gulaikeueng,
  Timphan,
  Sotoaceh,
  Keumamah,
} from '../src/pages/DaerahPage/Acehfile/Exportaceh';

import{
Ayambetutu,
Bebekbetutu,
Sambalmatah,
Satekakul,
Satelilit,
Jakuturap,
Satepelecing,
Lempetikan,
Serapahdaging,
Babiguling,
} from '../src/pages/DaerahPage/Balifile/Exportbali';

import{
Kuerintak,
Laksobangka,
Lempahdarat,
Lepetbangka,
Lokan,
Martabakbangka,
Miekoba,
Otakotakbangka,
Sambelikung,
Sotobangka,
} from '../src/pages/DaerahPage/Bangkabelitungfile/Exportbangkabelitung';

import{
Angeunlada,
Ketanbintul,
Kuejojorong,
Laksa,
Leumeung,
Nasibakarsumsum,
Pecakbandeng,
Sambalburoq,
Satebandeng,
Sayurbesan,
} from '../src/pages/DaerahPage/Bantenfile/Exportbanten';

import{
Bagarhiu,
Bolukoja,
Bubursekoi,
Gulaikembaang,
Gulaipisang,
Kuebaytat,
Kuelepekbiniti,
Manisanterong,
Pendap,
Rebungasamundakliling,
} from '../src/pages/DaerahPage/Bengkulufile/Exportbengkulu';

import{
Ayamiloni,
Bilenthango,
Bintebiluhuta,
Esbrenebon,
Ilabulo,
Kuekarawo,
Kuesabongi,
Perkedelnike,
Sayurputungo,
Tiliaya,
} from '../src/pages/DaerahPage/Gorontalofile/Exportgorontalo';

import{
Asinanbetwi,
Dodolbetawi,
Keraktelor,
Ketoprak,
Laksabetawi,
Rotibuaya,
Sayurbabanci,
Semurjengkol,
Sotobetawi,
Sototangkar,
} from '../src/pages/DaerahPage/Jakartafile/Exportjakarta';

import{
Dagingmasakitam,
Gulaitepekikan,
Kerutupikan,
Kuepadamaran,
Laksojambi,
Nasiminyak,
Sambalkweni,
Sateikankhasjambi,
Satetempe,
Tempoyakikan,
} from '../src/pages/DaerahPage/Jambifile/Exportjambi';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />\

          <Route path="/daerah/yogyakarta" element={<Yogyakarta/>} />
            <Route path="/Gudeg" element={<Gudeg/>} />
            <Route path="/Bakmijawa" element={<Bakmijawa/>} />
            <Route path="/Ayamkalasan" element={<Ayamkalasan/>}/>

          <Route path="/daerah/jawa tengah" element={<Jawatengah/>} />

          <Route path="/daerah/bali" element={<Bali/>} />
            <Route path="/Ayambetutu" element={<Ayambetutu/>} />
            <Route path="/Bebekbetutu" element={<Bebekbetutu/>} />
            <Route path="/Sambalmatah" element={<Sambalmatah/>} />
            <Route path="/Satekakul" element={<Satekakul/>} />
            <Route path="/Satelilit" element={<Satelilit/>} />
            <Route path="/Jakuturap" element={<Jakuturap/>} />
            <Route path="/Satepelecing" element={<Satepelecing/>} />
            <Route path="/Lempetikan" element={<Lempetikan/>} />
            <Route path="/Serapahdaging" element={<Serapahdaging/>} />
            <Route path="/Babiguling" element={<Babiguling/>} />

          <Route path="/daerah/aceh" element={<Aceh/>} />
            <Route path="/Mieaceh" element={<Mieaceh/>} />
            <Route path="/Nasigurih" element={<Nasigurih/>} />
            <Route path="/Kuahplieku" element={<Kuahplieku/>} />
            <Route path="/Ayamtangkap" element={<Ayamtangkap/>} />
            <Route path="/Satematang" element={<Satematang/>} />
            <Route path="/Roticane" element={<Roticane/>} />
            <Route path="/Gulaikeueng" element={<Gulaikeueng/>} />
            <Route path="/Timphan" element={<Timphan/>} />
            <Route path="/Sotoaceh" element={<Sotoaceh/>} />
            <Route path="/Keumamah" element={<Keumamah/>} />

          <Route path="/daerah/sumatra barat" element={<Sumatrabarat/>} />

          <Route path="/daerah/jakarta" element={<Jakarta/>} />
            <Route path="/Asinanbetawi" element={<Asinanbetwi/>} />
            <Route path="/Dodolbetawi" element={<Dodolbetawi/>} />
            <Route path="/Keraktelor" element={<Keraktelor/>} />
            <Route path="/Laksabetawi" element={<Laksabetawi/>} />
            <Route path="/Rotibuaya" element={<Rotibuaya/>} />
            <Route path="/Sayurbabanci" element={<Sayurbabanci/>} />
            <Route path="/Semurjengkol" element={<Semurjengkol/>} />
            <Route path="/Sotobetawi" element={<Sotobetawi/>} />
            <Route path="/Sototangkar" element={<Sototangkar/>} />
            <Route path="/Ketoprak" element={<Ketoprak/>} />

          <Route path="/daerah/bengkulu" element={<Bengkulu/>} />
            <Route path="/Bagarhiu" element={<Bagarhiu/>} />
            <Route path="/Bolukoja" element={<Bolukoja/>} />
            <Route path="/Bubursekoi" element={<Bubursekoi/>} />
            <Route path="/Gulaikembaang" element={<Gulaikembaang/>} />
            <Route path="/Gulaipisang" element={<Gulaipisang/>} />
            <Route path="/Kuebaytat" element={<Kuebaytat/>} />
            <Route path="/Kuelepekbiniti" element={<Kuelepekbiniti/>} />\
            <Route path="/Manisanterong" element={<Manisanterong/>} />
            <Route path="/Pendap" element={<Pendap/>} />
            <Route path="/Rebungasamundakliling" element={<Rebungasamundakliling/>} />

          <Route path="/daerah/bangka belitung" element={<Bangkabelitung/>} />
            <Route path="/Kuerintak" element={<Kuerintak/>} />
            <Route path="/Laksobangka" element={<Laksobangka/>} />
            <Route path="/Lempahdarat" element={<Lempahdarat/>} />
            <Route path="/Lepetbangka" element={<Lepetbangka/>} />
            <Route path="/Lokan" element={<Lokan/>} />
            <Route path="/Martabakbangka" element={<Martabakbangka/>} />
            <Route path="/Miekoba" element={<Miekoba/>} />
            <Route path="/Otakotakbangka" element={<Otakotakbangka/>} />
            <Route path="/Sambelikung" element={<Sambelikung/>} />
            <Route path="/Sotobangka" element={<Sotobangka/>} />

          <Route path="/daerah/banten" element={<Banten/>} />
            <Route path="/Angeunlada" element={<Angeunlada/>} />
            <Route path="/Ketanbintul" element={<Ketanbintul/>} />
            <Route path="/Kuejojorong" element={<Kuejojorong/>} />
            <Route path="/Laksa" element={<Laksa/>} />
            <Route path="/Leumeung" element={<Leumeung/>} />
            <Route path="/Nasibakarsumsum" element={<Nasibakarsumsum/>} />
            <Route path="/Pecakbandeng" element={<Pecakbandeng/>} />
            <Route path="/Sambalburoq" element={<Sambalburoq/>} />
            <Route path="/Satebandeng" element={<Satebandeng/>} />
            <Route path="/Sayurbesan" element={<Sayurbesan/>} />

          <Route path="/daerah/gorontalo" element={<Gorontalo/>} />
            <Route path="/Ayamiloni" element={<Ayamiloni/>} />
            <Route path="/Bilenthango" element={<Bilenthango/>} />
            <Route path="/Esbrenebon" element={<Esbrenebon/>} />
            <Route path="/Ilabulo" element={<Ilabulo/>} />
            <Route path="/Kuekarawo" element={<Kuekarawo/>} />
            <Route path="/Kuesabongi" element={<Kuesabongi/>} />
            <Route path="/Perkedelnike" element={<Perkedelnike/>} />
            <Route path="/Sayurputungo" element={<Sayurputungo/>} />
            <Route path="/Tiliaya" element={<Tiliaya/>} />
            <Route path="/Bintebiluhuta" element={<Bintebiluhuta/>} />

          <Route path="/daerah/jambi" element={<Jambi/>} />
            <Route path="/Dagingmasakitam" element={<Dagingmasakitam/>} />
            <Route path="/Gulaitepekikan" element={<Gulaitepekikan/>} />
            <Route path="/Kerutupikan" element={<Kerutupikan/>} />
            <Route path="/Kuepadamaran" element={<Kuepadamaran/>} />
            <Route path="/Laksojambi" element={<Laksojambi/>} />
            <Route path="/Nasiminyak" element={<Nasiminyak/>} />
            <Route path="/Sambalkweni" element={<Sambalkweni/>} />
            <Route path="/Sateikankhasjambi" element={<Sateikankhasjambi/>} />
            <Route path="/Satetempe" element={<Satetempe/>} />
            <Route path="/Tempoyakikan" element={<Tempoyakikan/>} />


        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
