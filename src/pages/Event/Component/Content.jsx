import ImageCard1 from "../../../assets/Images/Event/event-1.png";
import ImageCard2 from "../../../assets/Images/Event/event-2.png";
import ImageCard3 from "../../../assets/Images/Event/event-3.png";
import ImageCard4 from "../../../assets/Images/Event/event-4.png";
import ImageCard5 from "../../../assets/Images/Event/event-5.png";
import ImageCard6 from "../../../assets/Images/Event/event-6.png";
import IconCalender from "../../../assets/Icon/icon-calender.png";
import IconLocation from "../../../assets/Icon/icon-loc.png";

export default function Content() {
  return (
    <section className="bg-[#E9ECEF] py-[72px]">
      <div className="container mx-auto">
        <div className="event flex flex-col gap-12  mb-16">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2>Event Wayang</h2>
            <span className="text-base text-gray text-center max-w-[402px]">
              Jangan lewatkan event-event menarik yang akan diselenggarakan.
            </span>
          </div>
          <div className="content-bottom flex flex-col items-center gap-14">
            <div className="content-card grid grid-cols-4 gap-6">
              <div className="card flex flex-col gap-2">
                <img src={ImageCard1} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Pagelaran Wayang Kulit HARJASDA
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img src={IconCalender} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        3 Februari 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Sidoarjo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={ImageCard2} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Festival Wayang Orang Indonesia 2023
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img src={IconCalender} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        18 - 21 Oktober 2023
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Semarang
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={ImageCard3} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Spesial Pagelaran Wayang Jawa Timur
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img src={IconCalender} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        26 - 27 Agustus 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Taman Candra Wilwatikta
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2">
                <img src={ImageCard4} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Pesta Wayang 2023 - “Mewayang Hayu Eksistensi & Konservasi”
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img src={IconCalender} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        3 Februari 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Sidoarjo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 col-start-2">
                <img src={ImageCard5} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Pesta Rakyat Hari Bhayangkara ke-77
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img src={IconCalender} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        1 Juli 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Bali
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card flex flex-col gap-2 col-start-3">
                <img src={ImageCard6} alt="" className="card-img" />
                <div className="card-body flex flex-col gap-2">
                  <h4 className="text-base font-semibold text-darkBlack">
                    Pesta Rakyat Jawa Barat Pagelaran Seni Budaya Siliwangi
                  </h4>
                  <div className="wrapper">
                    <div className="wrap flex items-center gap-1">
                      <img src={IconCalender} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        21 Maret 2024
                      </span>
                    </div>
                    <div className="wrap flex items-center gap-1">
                      <img src={IconLocation} alt="" className="max-w-[24px]" />
                      <span className="text-sm text-lightBlack font-medium">
                        Bandung
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex justify-center items-center">
          <nav aria-label="Pagination">
            <ul className="pagination">
              <li className="pagination-item">
                <a className="pagination-link" href="/#" aria-label="Previous">
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
        </div> */}
      </div>
    </section>
    //////
  );
}
