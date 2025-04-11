"use client";

import { Props } from "@/type";
import { Search } from "lucide-react";

const FAQ09 = ({ data }: Props) => {
    // const [searchQuery, setSearchQuery] = useState("");
    // const [openItem, setOpenItem] = useState<string | null>(null);

    // const toggleItem = (id: string) => {
    //     setOpenItem(openItem === id ? null : id);
    // };

    // Filter FAQs based on search query
    // const filteredFAQs = useMemo(() => {
    //     if (!searchQuery.trim()) return data?.sectionList;

    //     const query = searchQuery.toLowerCase();
    //     return data?.sectionList?.filter(
    //         (faq) =>
    //             faq?.title?.toLowerCase().includes(query) ||
    //             faq?.description?.toLowerCase().includes(query)
    //     );
    // }, [searchQuery, data?.sectionList]);

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
                    <p className="mx-auto mb-8 max-w-2xl text-gray-600">
                        {data?.description}
                    </p>

                    {/* Search input */}
                    <div className="relative mx-auto max-w-xl">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-md border border-gray-300 bg-white py-3 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
                            placeholder="Search for questions..."
                            // value={searchQuery}
                            // onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mx-auto max-w-3xl rounded-lg bg-white shadow-sm">
                    {/* {filteredFAQs && filteredFAQs.length > 0 ? (
                        filteredFAQs.map((faq) => (
                            <div
                                key={faq.id}
                                className="border-b border-gray-200 last:border-0"
                            >
                                <button
                                    className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900 hover:text-primary focus:outline-none"
                                    onClick={() => toggleItem(faq.id)}
                                    aria-expanded={openItem === faq.id}
                                    aria-controls={`faq-content-${faq.id}`}
                                >
                                    <span className="text-lg">{faq.title}</span>
                                    <ChevronDown
                                        className={`h-5 w-5 transition-transform ${
                                            openItem === faq.id
                                                ? "rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>
                                <div
                                    id={`faq-content-${faq.id}`}
                                    className={`overflow-hidden px-6 transition-all duration-300 ${
                                        openItem === faq.id
                                            ? "max-h-96 pb-6"
                                            : "max-h-0"
                                    }`}
                                >
                                    <p className="text-gray-600">
                                        {faq.description}
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="px-6 py-8 text-center">
                            <p className="text-gray-500">
                                No results found for &quot;{searchQuery}&quot;
                            </p>
                            <p className="mt-2 text-gray-500">
                                Try a different search term or browse all FAQs
                            </p>
                            <button
                                className="mt-4 text-primary hover:underline"
                                onClick={() => setSearchQuery("")}
                            >
                                Clear search
                            </button>
                        </div>
                    )} */}
                </div>

                {/* Contact support */}
                <div className="mt-10 text-center">
                    <p className="mb-2 text-gray-600">
                        Can&apos;t find what you&apos;re looking for?
                    </p>
                    <a
                        href="#"
                        className="font-medium text-primary hover:underline"
                    >
                        Contact our support team
                    </a>
                </div>
            </div>
        </section>
    );
};

export { FAQ09 };
