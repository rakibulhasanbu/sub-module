import type { Section } from "../../type";

type Props = {
  data?: Section;
};

const Features10 = ({ data }: Props) => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          {data?.subTitle && (
            <p className="mb-2 font-medium text-primary">{data?.subTitle}</p>
          )}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{data?.title}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">{data?.description}</p>
        </div>

        <div className="mx-auto max-w-4xl">
          {data?.sectionList.map((step, index) => (
            <div key={step.id} className="relative pb-12 pl-16 last:pb-0">
              {/* Line connecting steps */}
              {index < data?.sectionList.length - 1 && (
                <div className="absolute bottom-0 left-6 top-10 w-0.5 bg-gray-200"></div>
              )}

              {/* Step number */}
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">
                {index + 1}
              </div>

              {/* Step content */}
              <div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>

                {step.buttonText && step.buttonUrl && (
                  <a
                    href={step.buttonUrl}
                    className="mt-4 inline-block font-medium text-primary"
                  >
                    {step.buttonText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features10;
