import Mockups from "/images/image-mockups.png";
import BgDesktop from "/images/bg-intro-desktop.svg";
import BgMobile from "/images/bg-intro-mobile.svg";

export default function Hero() {
  return (
    <section className="relative z-20 overflow-visible bg-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center lg:flex-row lg:px-8">
        <div
          className="
              px-6
              pt-16
              pb-28
              text-center

              sm:pb-36

              lg:w-1/2
              lg:px-0
              lg:py-24
              lg:text-left
            "
        >
          <h1 className="text-4xl font-light leading-tight text-primary sm:text-5xl lg:text-6xl">
            Next generation
            <br />
            digital banking
          </h1>

          <p className="mx-auto mt-6 max-w-md text-[15px] leading-6 text-muted lg:mx-0">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <button className="mt-8 rounded-full bg-gradient-to-r from-green-400 to-cyan-400 px-7 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-80">
            Request Invite
          </button>
        </div>

        <div
          className="relative flex h-[320px] w-full 
        items-center justify-center 
        sm:h-[400px] lg:h-[600px] lg:w-1/2"
        >
          <img
            src={BgMobile}
            alt=""
            aria-hidden="true"
            className="absolute -right-24 -top-32 w-[550px] max-w-none lg:hidden"
          />

          <img
            src={BgDesktop}
            alt=""
            aria-hidden="true"
            className="absolute -right-72 -top-72 hidden w-[800px] max-w-none lg:block"
          />

          <img
            src={Mockups}
            alt="Easybank mobile banking app"
            className="
              absolute
              z-30
              w-[95%]
              max-w-[450px]

              -bottom-14

              sm:-bottom-20
              sm:w-[85%]

              lg:-right-32
              lg:top-1/2
              lg:-translate-y-1/2
              lg:w-auto
              lg:max-w-[650px]
             "
          />
        </div>
      </div>
    </section>
  );
}
