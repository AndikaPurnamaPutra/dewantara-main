export default function Hero() {
  return (
    <div>
      <section className="bg-hero-background h-full bg-cover bg-no-repeat relative py-[207px]">
        <div className="bg-dark absolute content-[] w-full h-full bg-black opacity-70 z-0 top-0"></div>
        <div className="container mx-auto">
          <div className="hero relative z-10 flex flex-col items-center gap-12">
            <div className="content-subtext flex flex-col gap-4 items-center">
              <span className="subtext-subtitle text-white text-[40px] font-semibold">
                Selamat Datang di
              </span>
              <h1 className="subtext-title text-white text-9xl font-extrabold">
                DEWANTARA
              </h1>
              <p className="subtext-desc text-darkWhite max-w-[496px] text-center">
                Jelajahi pintu gerbang menuju dunia yang dipenuhi keindahan dan
                pesona warisan nenek moyang kita.
              </p>
            </div>
            <button className="btn btn-primary">Jelajahi</button>
          </div>
        </div>
      </section>
    </div>
  );
}
