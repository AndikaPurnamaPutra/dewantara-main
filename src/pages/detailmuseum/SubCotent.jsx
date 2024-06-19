import IconLocation from "../../assets/images/home/event/icon-loc.png";
import IconCalender from "../../assets/images/home/event/icon-calender.png";
import IconTicket from "../../assets/images/museum/detailmuseum/Ticket.svg";

export default function SubCotent() {
  return (
    <section className="pt-12 pb-[72px]">
      <div className="container mx-auto">
        <div className="detail-museum flex justify-between">
          <div className="content-left flex flex-col gap-4">
            <h2>Tentang Museum</h2>
            <div className="subtext max-w-[662px] text-justify">
              <p>
                Bangunan Museum Wayang dulunya merupakan sebuah gereja tua yang
                didirikan oleh VOC pada tahun 1640 dengan nama 'de oude
                Hollandsche Kerk'. Kemudian, gedung tersebut berfungsi sebagai
                tempat peribadatan penduduk sipil dan tentara Belanda yang
                tinggal di Batavia, Jakarta sampai tahun 1732. Lalu, pada tahun
                1733, gereja tersebut berubah nama menjadi "de nieuwe
                Hollandsche Kerk" yang berdiri sampai tahun 1808. Kemudian,
                bangunan tersebut hancur akibat gempa bumi.{" "}
              </p>
              <br />
              <p>
                Setelah dibedah, bangunan itu diserahkan kepada Stichting Oud
                Batavia untuk dijadikan museum yang diberi nama de Oude
                Bataviasche Museum atau Museum Batavia Lama.
              </p>
              <br />
              <p>
                Dua belas tahun setelah proklamasi kemerdekaan 1945, tepatnya
                pada tahun 1957, pemerintah menyerahkan gedung Museum Batavia
                Lama kepada Lembaga Kebudayaan Indonesia. Nama bangunan itu
                Museum Jakarta Lama, yang kemudian berubah menjadi Museum
                Jakarta pada 1 Agustus 1960.
              </p>
              <br />
              <p>
                Pada tahun 1968, Museum Jakarta kemudian diserahkan kepada
                Pemerintah Provinsi DKI Jakarta. Lalu, Museum Jakarta berubah
                menjadi Museum Wayang yang diresmikan pada tanggal 13 Agustus
                1975 oleh Ali Sadikin, Gubernur DKI Jakarta pada waktu itu.
              </p>
            </div>
          </div>
          <div className="content-right">
            <div className="board py-4 px-6 inline-flex flex-col shadow-[0_3px_16px_rgba(0,0,0,0.3)] gap-6">
              <h2 className="pb-4 border-b-[1px] border-[#CED4DA]">
                Papan Informasi
              </h2>
              <div className="wrapper flex flex-col gap-8">
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[28px] h-[28px] rounded">
                    <img
                      src={IconLocation}
                      alt=""
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Lokasi Museum
                    </h3>
                    <p className="subtext-desc max-w-[362px]">
                      Jalan Pintu Besar Utara No.27 Pinangsia, RT.3/RW.6, Kota
                      Tua, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus
                      Ibukota Jakarta
                    </p>
                  </div>
                </div>
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[28px] h-[28px] rounded">
                    <img
                      src={IconCalender}
                      alt=""
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Lokasi Museum
                    </h3>
                    <p className="subtext-desc max-w-[362px]">
                      Jalan Pintu Besar Utara No.27 Pinangsia, RT.3/RW.6, Kota
                      Tua, Kec. Taman Sari, Kota Jakarta Barat, Daerah Khusus
                      Ibukota Jakarta
                    </p>
                  </div>
                </div>
                <div className="wrap flex items-start gap-4">
                  <div className="icon inline-flex p-1.5 shadow-[0_3px_16px_rgba(0,0,0,0.3)] w-[28px] h-[28px] rounded">
                    <img
                      src={IconTicket}
                      alt=""
                      className="ic w-full h-full object-contain"
                    />
                  </div>
                  <div className="subtext flex flex-col gap-2">
                    <h3 className="subtext-subtext text-[24px] font-semibold">
                      Lokasi Museum
                    </h3>
                    <p className="subtext-desc max-w-[362px]">
                      Perorangan <br /> Anak/Pelajar : Rp2.000 <br /> Mahasiswa
                      : Rp3.000 <br />
                      Dewasa : Rp5.000 <br />
                      <br /> Rombongan <br /> Anak/Pelajar : Rp1.500 <br />{" "}
                      Mahasiswa : Rp2.250 <br /> Dewasa : Rp3.750
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
