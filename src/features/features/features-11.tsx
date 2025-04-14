import Image from "next/image";

import type { Section } from "../../type";

type Props = {
  data?: Section;
};

const Features11 = ({ data }: Props) => {
  //   const [activeTab, setActiveTab] = useState(data?.sectionList[0]?.id || "");

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          {data?.subTitle && (
            <p className="mb-2 font-medium text-primary">{data?.subTitle}</p>
          )}
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">{data?.title}</h2>
          <p className="mx-auto max-w-2xl text-gray-600">{data?.description}</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex flex-wrap justify-center border-b">
          {data?.sectionList.map((tab) => (
            <button
              key={tab.id}
              //   className={`px-6 py-3 text-sm font-medium transition-colors sm:text-base ${
              //     activeTab === tab.id
              //       ? "border-b-2 border-primary text-primary"
              //       : "text-gray-600 hover:text-gray-900"
              //   }`}
              //   onClick={() => setActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="mx-auto max-w-5xl">
          {data?.sectionList.map((tab) => (
            <div
              key={tab.id}
              //   className={`${
              //     activeTab === tab.id ? "block" : "hidden"
              //   } flex flex-col items-center gap-8 md:flex-row`}
            >
              <div className="w-full md:w-1/2">
                <h3 className="mb-4 text-2xl font-bold md:hidden">
                  {tab.title}
                </h3>
                <p className="mb-6 text-gray-600">{tab.description}</p>
                {tab.buttonText && tab.buttonUrl && (
                  <a
                    href={tab.buttonUrl}
                    className="inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    {tab.buttonText}
                  </a>
                )}
              </div>
              <div className="w-full md:w-1/2">
                {tab.imgURL && (
                  <Image
                    src={tab.imgURL || "/placeholder.svg"}
                    alt={tab.title || "Feature illustration"}
                    width={600}
                    height={400}
                    className="h-auto w-full rounded-lg shadow-md"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features11;
