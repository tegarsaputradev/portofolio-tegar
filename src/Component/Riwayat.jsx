import imgAbout from "../../src/asset/riwayat.svg";
function Riwayat() {
  return (
    <div className="riwayat mt-5">
      <div className="row">
        <div className="ido col-9 m-auto d-flex flex-column text-center w-100">
          <h1>Sedikit Cerita Tentang Saya</h1>

          <p>
            Halo semua, perkenalkan nama saya Tegar Saputra biasa di panggil
            Tegar. Saya umur 25 tahun lulusan Teknik Informatika di Institut
            Teknologi dan Bisnis Asia Malang. Saya mulai menyukai website sejak
            menduduki bangku SMK, pada saat itu saya mengenal yang namanya
            Blogspot dan mencoba mendesign tampilan Blog saya sedemikian rupa.
            Semakin hari penasaran saya tentang Website semakin membara yang
            membuat saya kuliah mengambil jurusan Teknik Informatika. Dari
            portofolio ini lah saya memulai awal career saya.
            <br />
            Enjoy to my Portofolio 🤗️
          </p>
        </div>
      </div>

      <div className="row d-flex justify-content-center gap-4 mt-5">
        <div className="right col-md-5 d-flex justify-content-center align-items-center">
          <img className="gambar" src={imgAbout} />
        </div>
        <div className="left col-md-6">
          <div className="left-section position-relative">
            <h1>Tentang Saya</h1>
            <h2>FreeLancing Website Programer</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>Nama</td>
                  <td>:</td>
                  <td className="text-start">Tegar Adi Cahya Saputra S.Kom</td>
                </tr>
                <tr>
                  <td>Kelahiran</td>
                  <td>:</td>
                  <td className="text-start">Jombang, 17 juni 1997</td>
                </tr>
                <tr>
                  <td>Agama</td>
                  <td>:</td>
                  <td className="text-start">Islam</td>
                </tr>
                <tr>
                  <td>Lulusan</td>
                  <td>:</td>
                  <td className="text-start">
                    Institute Teknologi dan Bisnis Asia Malang
                  </td>
                </tr>
              </tbody>
            </table>
            <input type="button" className="button mt-4" value="Hubungi Saya" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Riwayat;
