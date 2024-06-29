import Wayang1 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang2 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang3 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang4 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang5 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang6 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang7 from "../../../assets/Images/Wayang/puntadewa.png";
import Wayang8 from "../../../assets/Images/Wayang/puntadewa.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IcSearch from "../../../assets/Icon/icon-search.svg";
import IcScan from "../../../assets/Icon/icon-scan.svg";

export default function Content() {
  return (
    <section className="py-[72px]">
      <div className="container mx-auto">
        <div className="wayang flex flex-col gap-12">
          <div className="content-top flex flex-col items-center justify-center gap-2">
            <h2>Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jelajahi dunia perwayangan agar lebih mengenal wayang di Indonesia
            </span>
          </div>
          <div className="content-bottom flex flex-col gap-12 items-center">
            <div className="wrapper flex items-center gap-4 justify-center">
              <div className="wrap-search">
                <form action="" className="inline-flex">
                  <input
                    type="search"
                    name=""
                    id=""
                    className="outline-none rounded-[8px_0_0_8px] border-2 border-[#ADB5BD] px-4 py-2.5 w-[500px]"
                  />
                  <button className="btn btn-search">
                    <img src={IcSearch} alt="" />
                    Cari
                  </button>
                </form>
              </div>
              <button className="btn btn-scan">
                <img src={IcScan} alt="" />
                Scan Disini
              </button>
            </div>
            <div className="content-card grid grid-cols-4 gap-6">
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang1} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang2} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang3} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang4} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang5} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang6} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang7} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                  <button className="btn btn-icon">
                    <img src={IcArrow} alt="" />
                  </button>
                </div>
              </div>
              <div className="card rounded-lg overflow-hidden">
                <img src={Wayang8} alt="" className="card-img w-full" />
                <div className="card-body flex items-center justify-between pt-4 pb-6 px-6">
                  <div className="wrap">
                    <h4 className="text-base font-semibold text-darkBlack">
                      Werkudara
                    </h4>
                    <span className="text-sm text-gray font-medium">
                      Wayang Kulit
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <nav aria-label="Pagination">
                <ul className="pagination">
                  <li className="pagination-item">
                    <a
                      className="pagination-link"
                      href="/#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">Sebelumnya</span>
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link active" href="/#">
                      1
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link" href="/#">
                      2
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link" href="/#">
                      3
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link" href="/#">
                      4
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link" href="/#">
                      5
                    </a>
                  </li>
                  <li className="pagination-item">
                    <a className="pagination-link" href="/#" aria-label="Next">
                      <span aria-hidden="true">Selanjutnya</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
