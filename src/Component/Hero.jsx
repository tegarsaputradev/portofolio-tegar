const Hero = () => {
  return (
    <div class="container-hero hero position-relative">
      <div class="hero-content">
        <span class="hello">Hello 👋️</span>
        <br />
        <h1>
          Saya
          <span class="name">&nbsp;Tegar Saputra</span>
          <br />
          Website Programer
        </h1>
        <p>
          Selamat datang di website portofolio saya, dimana saya meletakkan
          <br />
          semua project yang pernah saya buat dan masih banyak lagi.
        </p>
        <a
          href="https://github.com/tegarsaputradev/tegarsaputradev.github.io/raw/main/CV.docx"
          target="_blank"
        >
          <input type="submit" class="btn-cv" value="Download CV" />
        </a>
        <div class="social">
          <a
            class="f-social"
            href="https://facebook.com/tegar7jr"
            target="_blank"
          >
            <i class="fa fa-facebook" aria-hidden="true"></i>
          </a>
          <a
            class="f-social"
            href="https://twitter.com/kaktegar"
            target="_blank"
          >
            <i class="fa fa-twitter" aria-hidden="true"></i>
          </a>
          <a
            class="f-social"
            href="https://twitter.com/kaktegar"
            target="_blank"
          >
            <i class="fa fa-youtube-play" aria-hidden="true"></i>
          </a>
          <a
            class="f-social"
            href="https://instagram.com/kaktegar"
            target="_blank"
          >
            <i class="fa fa-instagram" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
