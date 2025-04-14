import Image from "next/image";

import type { Section } from "../../type";

type Props = {
  data?: Section;
};

const Hero10 = ({ data }: Props) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={data?.bgURL || "/placeholder.svg"}
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          {data?.subTitle && (
            <span className="mb-4 inline-block rounded-full bg-primary/90 px-4 py-1 text-sm font-medium text-primary-foreground">
              {data?.subTitle}
            </span>
          )}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {data?.title}
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90">
            {data?.description}
          </p>
          <a
            href={data?.buttonUrl}
            className="inline-block rounded-md bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {data?.buttonText}
          </a>
        </div>

        {/* Trusted by logos */}
        {data?.sectionList && data?.sectionList.length > 0 && (
          <div className="mt-16">
            <p className="mb-4 text-sm text-white/80">
              {data?.sectionList[0].title || "Trusted by companies worldwide"}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              {data?.sectionList.map(
                (item) =>
                  item.imgURL && (
                    <div key={item.id} className="h-8">
                      <Image
                        src={item.imgURL || "/placeholder.svg"}
                        alt="Company logo"
                        width={120}
                        height={30}
                        className="h-full w-auto object-contain opacity-80 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                      />
                    </div>
                  )
              )}
            </div>
          </div>
        )}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform">
        <div className="animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-white"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero10;
