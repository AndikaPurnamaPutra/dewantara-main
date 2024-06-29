import museum1 from "../../../assets/Images/Museum/img-museum1.png";
import museum2 from "../../../assets/Images/Museum/img-museum2.png";
import museum3 from "../../../assets/Images/Museum/img-museum3.png";
import museum4 from "../../../assets/Images/Museum/img-museum4.png";
import museum5 from "../../../assets/Images/Museum/img-museum5.png";
import museum6 from "../../../assets/Images/Museum/img-museum6.png";
import IcArrow from "../../../assets/Icon/icon-arrow.svg";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  return (
    <section className="bg-[#E9ECEF] py-[72px]">
      <div className="container mx-auto">
        <div className="event flex flex-col gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2>Kunjungi Museum</h2>
            <span className="text-base text-gray text-center max-w-[511px]">
              Terbukanya pintu untuk Anda menjelajahi budaya yang terwujud dalam
              setiap bayangan wayang
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-14">
            <div className="content-card grid grid-cols-3 gap-6">
              <div className="card flex flex-col gap-2">
                <img src={museum1} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Jakarta
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Jakarta Barat, Jakarta
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img src={IcArrow} alt="" className="max-w-[16px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={museum2} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Banyumas
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Banyumas, Jawa Tengah
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img src={IcArrow} alt="" className="max-w-[16px]" />
                    </button>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={museum3} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <div className="wrapper">
                    <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                      Museum Wayang Kulit Wonogiri
                    </h4>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Wonogiri, Jawa Tengah
                      </span>
                    </div>
                    <button className="btn btn-link">
                      Lihat Museum
                      <img src={IcArrow} alt="" className="max-w-[16px]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-bottom flex flex-col items-center gap-14">
              <div className="content-card grid grid-cols-3 gap-6">
                <div className="card flex flex-col gap-2">
                  <img src={museum4} alt="" className="card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                        Museum Topeng & Wayang Ubud
                      </h4>
                      <div className="wrap flex items-center gap-1">
                        <img
                          src={IconLocation}
                          alt=""
                          className="max-w-[24px]"
                        />
                        <span className="text-sm text-lightBlack font-medium">
                          Gianyar, Bali
                        </span>
                      </div>
                      <button className="btn btn-link">
                        Lihat Museum
                        <img src={IcArrow} alt="" className="max-w-[16px]" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card flex flex-col gap-2">
                  <img src={museum5} alt="" className="card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                        Museum Wayang Gubug Mojokerto
                      </h4>
                      <div className="wrap flex items-center gap-1">
                        <img
                          src={IconLocation}
                          alt=""
                          className="max-w-[24px]"
                        />
                        <span className="text-sm text-lightBlack font-medium">
                          Mojokerto, Jawa Timur
                        </span>
                      </div>
                      <button className="btn btn-link">
                        Lihat Museum
                        <img src={IcArrow} alt="" className="max-w-[16px]" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="card flex flex-col gap-2">
                  <img src={museum6} alt="" className="card-img" />
                  <div className="card-body flex flex-col gap-2">
                    <div className="wrapper">
                      <h4 className="text-base font-semibold text-darkBlack mb-1.5">
                        Galeri Wayang Purwakarta
                      </h4>
                      <div className="wrap flex items-center gap-1">
                        <img
                          src={IconLocation}
                          alt=""
                          className="max-w-[24px]"
                        />
                        <span className="text-sm text-lightBlack font-medium">
                          Purwakarta, Jawa Barat
                        </span>
                      </div>
                      <button className="btn btn-link">
                        Lihat Museum
                        <img src={IcArrow} alt="" className="max-w-[16px]" />
                      </button>
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
                      <a
                        className="pagination-link"
                        href="/#"
                        aria-label="Next"
                      >
                        <span aria-hidden="true">Selanjutnya</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
