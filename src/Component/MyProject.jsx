import img1 from "../../src/asset/absensi.jpg";
import img2 from "../../src/asset/cp.png";
import img3 from "../../src/asset/crud.png";
import img4 from "../../src/asset/blog.png";
import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
function MyProject() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="myproject-container mt-5">
      <div className="row">
        <div className="judul d-flex justify-content-center">
          <h1>Projects History</h1>
        </div>
      </div>
      <div className="row project-secion d-flex justify-content-center">
        {/* Absensi Start */}
        <div className="col-md-6 project">
          <a
            href="https://github.com/tegarsaputradev/absensi-laravel-app"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-section position-relative">
              <img src={img1} alt="" />
              <div className="judul-project">
                Laravel - Absensi dan Jurnal Guru
              </div>
            </div>
          </a>
        </div>

        {/* CRUD start */}
        <div className="col-md-6 project">
          <a
            href="https://nutech-test-tegar.000webhostapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="img-section position-relative">
              <img src={img3} alt="" />
              <div className="judul-project">CRUD - Ajax and PHP</div>
            </div>
          </a>
        </div>

        {/* Company Profil Start */}
        <div className="col-md-6 project">
          <a
            href="https://github.com/tegarsaputradev/Company-Profil"
            target="_blank"
            rel="noreferrer"
          >
            <div className="img-section position-relative">
              <img src={img2} alt="" />
              <div className="judul-project">React - Company Profil</div>
            </div>
          </a>
        </div>

        {/* Pariwisata Start */}
        <div className="col-md-6 project">
          <a
            href="http://pariwisatablog.github.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="img-section position-relative">
              <img src={img4} alt="" />
              <div className="judul-project">
                React - Website Blog Front-End Design
              </div>
            </div>
          </a>
        </div>

        {/* end */}
      </div>
    </div>
  );
}

export default MyProject;
