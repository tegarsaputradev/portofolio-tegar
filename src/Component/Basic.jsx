function Basic() {
  return (
    <div className="basic">
      <div className="basic-language mb-4">
        <h2>Bahasa Favorit</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-md-4 bas">
            <div className="row">
              <div className="col-4">
                <i class="fa-brands fa-php"></i>
              </div>
              <div className="col-8">
                <span className="text-brands">Php</span>
                Bahasa skrip dengan fungsi umum yang terutama digunakan untuk
                pengembangan web.
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-4 bas">
            <div className="row">
              <div className="col-4">
                <i class="fa-brands fa-js-square"></i>
              </div>
              <div className="col-8">
                <span className="text-brands">Javascript</span>
                Bahasa pemrograman tingkat tinggi dan dinamis. JavaScript dapat
                bekerja di sebagian besar penjelajah web populer
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-4 bas">
            <div className="row">
              <div className="col-4">
                <i class="fa-brands fa-html5"></i>
              </div>
              <div className="col-8">
                <span className="text-brands">HTML / CSS</span>
                Bahasa markah standar untuk dokumen yang dirancang untuk
                ditampilkan di peramban internet.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="basic-framework">
        <h2>Framework Favorite</h2>
        <hr />
        <div className="row">
          <div className="col-lg-4 col-md-6 mt-md-4 bas">
            <div className="row">
              <div className="col-4">
                <i class="fa-brands fa-react"></i>
              </div>
              <div className="col-8">
                <span className="text-brands">React JS</span>
                Library JavaScript front-end untuk membangun antarmuka pengguna
                berdasarkan komponen UI
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-4 bas">
            <div className="row">
              <div className="col-4">
                <i class="fa-brands fa-laravel"></i>
              </div>
              <div className="col-8">
                <span className="text-brands">Laravel</span>
                Kerangka kerja aplikasi web berbasis PHP yang sumber terbuka,
                menggunakan konsep Model-View-Controller (MVC).
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mt-md-4 bas">
            <div className="row">
              <div className="col-4">
                <i class="fa-brands fa-bootstrap"></i>
              </div>
              <div className="col-8">
                <span className="text-brands">Bootstrap</span>
                Kerangka kerja CSS yang sumber terbuka dan bebas untuk merancang
                situs web dan aplikasi web.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basic;
