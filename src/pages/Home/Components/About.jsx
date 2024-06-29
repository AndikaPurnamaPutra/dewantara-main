import Galery1 from "../../../assets/Images/Global/galery-1.png";
import Galery2 from "../../../assets/Images/Global/galery-2.png";
import Galery3 from "../../../assets/Images/Global/galery-3.png";
import Galery4 from "../../../assets/Images/Global/galery-4.png";

export default function About() {
  return (
    <section className="py-[72px]">
      <div className="container mx-auto">
        <div className="about flex justify-between items-center gap-14">
          <div className="content-images grid grid-cols-2 w-6/12">
            <img src={Galery1} alt="" className="img" />
            <img src={Galery2} alt="" className="img" />
            <img src={Galery3} alt="" className="img" />
            <img src={Galery4} alt="" className="img" />
          </div>
          <div className="content-subtext w-6/12 flex flex-col items-start gap-10">
            <div className="subtext flex flex-col gap-4">
              <h2 className="">Tentang Kami</h2>
              <p className="text-justify">
                <span className="text-[24px] font-semibold">Dewantara</span>{" "}
                adalah situs web yang didedikasikan untuk pelestarian dan
                edukasi seni wayang Indonesia. Dewantara sendiri adalah
                singkatan dari “Demen (‘suka’ dalam bahasa jawa) Wayang
                Nusantara” dan nama Dewantara ini diambil dari salah satu tokoh
                pahlawan nasional, yaitu Ki Hajar Dewantara yang dimana beliau
                adalah Bapak Pendidikan Indonesia. Kami menyediakan berbagai
                informasi seputar wayang, mulai dari sejarah, jenis-jenis
                wayang, event-event wayang, hingga museum wayang yang ada di
                Indonesia. Kami bangga mempersembahkan koleksi seni wayang dari
                seluruh nusantara, dan inovasi terbaru kami memungkinkan Anda
                untuk menggali lebih dalam melalui fitur scanner kami.
              </p>
            </div>
            <button className="btn btn-primary">Baca Selengkapnya</button>
          </div>
        </div>
      </div>
    </section>
  );
}
