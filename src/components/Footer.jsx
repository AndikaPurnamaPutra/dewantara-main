import LogoBrand from "../assets/Logo/logo-foot.svg";

export default function Footer() {
  return (
    <section className="bg-darkBlack pt-[72px] pb-8">
      <div className="container mx-auto">
        <div className="footer">
          <div className="footer-top flex justify-between items-start pb-12 border-[#495057] border-b-[1px]">
            <div className="footer-brand">
              <img src={LogoBrand} alt="" />
              <div className="address max-w-[269px] mt-6">
                <a href="/" className="text-base text-whiteText">
                  Jl. DI Panjaitan No.128, Karangreja, Purwokerto Kidul, Kec.
                  Purwokerto Sel., Kabupaten Banyumas, Jawa Tengah
                </a>
              </div>
            </div>
            <div className="footer-menu">
              <h5 className="font-bold text-2xl text-secondary mb-4">
                Menu Navigasi
              </h5>
              <div className="wrapper flex gap-12 items-start">
                <div className="wrap flex flex-col gap-4">
                  <a href="/About" className="footer-link">
                    Tentang Kami
                  </a>
                  <a href="/Event" className="footer-link">
                    Event Wayang
                  </a>
                  <a href="/Wayang" className="footer-link">
                    Para Wayang
                  </a>
                </div>
                <div className="wrap flex flex-col gap-4">
                  <a href="/Museum" className="footer-link">
                    Museum Wayang
                  </a>
                  <a href="/Article" className="footer-link">
                    Artikel
                  </a>
                </div>
              </div>
            </div>
            <div className="footer-about">
              <h5 className="font-bold text-2xl text-secondary mb-4">
                Kenali Dewantara
              </h5>
              <a
                href="https://www.instagram.com/pkmkc.dewantara"
                className="footer-link"
              >
                Instagram Kami
              </a>
            </div>
          </div>
          <div className="footer-bottom text-center mt-8">
            <span className="text-base text-whiteText text-center">
              © 2024 Dewantara | Allright Reserved
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
