"use client";

import { Props } from "@/type";

const categories = [
    { id: "general", name: "General" },
    { id: "account", name: "Account" },
    { id: "billing", name: "Billing" },
    { id: "technical", name: "Technical" },
];

const FAQ08 = ({ data }: Props) => {
    // const [activeTab, setActiveTab] = useState(categories[0].id);

    const SectionList = data?.sectionList;
    // Group FAQs by category
    const faqsByCategory = categories.reduce((acc, category) => {
        acc[category.id] =
            SectionList?.filter(
                (faq) => faq.customizeDescription === category.id
            ) || []; // Add fallback to empty array
        return acc;
    }, {} as Record<string, typeof SectionList>);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    {data?.subTitle && (
                        <p className="mb-2 font-medium text-primary">
                            {data?.subTitle}
                        </p>
                    )}
                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                        {data?.title}
                    </h2>
                    <p className="mx-auto max-w-2xl text-gray-600">
                        {data?.description}
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    {/* Tabs */}
                    <div className="mb-8 flex flex-wrap justify-center border-b">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                className={`px-6 py-3 text-sm font-medium transition-colors sm:text-base ${
                                    "general" === category.id
                                        ? "border-b-2 border-primary text-primary"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                                // onClick={() => setActiveTab(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="rounded-lg bg-white p-6 shadow-sm">
                        {categories.map((category) => {
                            const faqs = faqsByCategory[category.id];
                            return (
                                <div
                                    key={category.id}
                                    className={
                                        "general" === category.id
                                            ? "block"
                                            : "hidden"
                                    }
                                >
                                    {faqs && faqs.length > 0 ? (
                                        <div className="space-y-6">
                                            {faqs.map((faq) => (
                                                <div key={faq.id}>
                                                    <h3 className="mb-2 text-lg font-semibold">
                                                        {faq.title}
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        {faq.description}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="py-4 text-center text-gray-500">
                                            No FAQs available in this category.
                                        </p>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { FAQ08 };
