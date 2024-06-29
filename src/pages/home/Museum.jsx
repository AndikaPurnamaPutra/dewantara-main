import museum1 from "../../assets/Images/Home/Museum/img-museum1.png";
import museum2 from "../../assets/Images/Home/Museum/img-museum2.png";
import museum3 from "../../assets/images/Home/Museum/img-museum3.png";
import IcArrow from "../../assets/images/Home/Museum/ic-arrow.svg";
import IconLocation from "../../assets/Images/Home/Event/icon-loc.png";

export default function Museum() {
  return (
    <section className="bg-[#E9ECEF] py-[72px]">
      <div className="container mx-auto">
        <div className="event flex flex-col gap-12">
          <div className="content-top flex flex-col gap-2 items-center">
            <h2>Museum</h2>
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
            <button className="btn btn-primary">Lihat Museum Lainnya</button>
          </div>
        </div>
      </div>
    </section>
  );
}
