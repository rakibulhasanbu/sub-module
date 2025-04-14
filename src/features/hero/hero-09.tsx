import Image from "next/image";

import type { Section } from "../../type";

type Props = {
  data?: Section;
};

const SplitHero = ({ data }: Props) => {
  return (
    <section className="overflow-hidden bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Content */}
          <div className="w-full lg:w-1/2 lg:pr-8">
            {data?.subTitle && (
              <span className="mb-3 inline-block font-semibold text-primary">
                {data?.subTitle}
              </span>
            )}
            <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              {data?.title}
            </h1>
            <p className="mb-8 text-xl leading-relaxed text-gray-600">
              {data?.description}
            </p>

            {/* Feature list */}
            {data?.sectionList && data?.sectionList.length > 0 && (
              <div className="mb-8 space-y-4">
                {data?.sectionList.map((item) => (
                  <div key={item.id} className="flex items-start">
                    {item.imgURL ? (
                      <div className="mr-3 mt-1">
                        <Image
                          src={item.imgURL || "/placeholder.svg"}
                          alt={item.title || "Feature icon"}
                          width={24}
                          height={24}
                          className="text-primary"
                        />
                      </div>
                    ) : (
                      <div className="mr-3 mt-1 text-primary">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                    )}
                    <div>
                      <h3 className="font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 sm:flex-row">
              <a
                href={data?.buttonUrl}
                className="inline-block w-full rounded-md bg-primary px-8 py-4 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
              >
                {data?.buttonText}
              </a>
              {data?.customizeDescription && (
                <span className="text-sm text-gray-500">
                  {data?.customizeDescription}
                </span>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <Image
                src={data?.imgURL || "/placeholder.svg"}
                alt="Hero image"
                width={600}
                height={600}
                className="h-auto w-full"
              />

              {/* Decorative elements */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-primary/10"></div>
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplitHero;
