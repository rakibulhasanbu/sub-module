"use client";

import { Props } from "@/type";
import {
    ChevronDown,
    CreditCard,
    HelpCircle,
    Settings,
    Shield,
    Users,
} from "lucide-react";

// Define categories with icons
const categories = [
    {
        id: "general",
        name: "General Questions",
        icon: <HelpCircle className="h-6 w-6" />,
    },
    {
        id: "billing",
        name: "Billing & Pricing",
        icon: <CreditCard className="h-6 w-6" />,
    },
    {
        id: "account",
        name: "Account Management",
        icon: <Users className="h-6 w-6" />,
    },
    {
        id: "technical",
        name: "Technical Support",
        icon: <Settings className="h-6 w-6" />,
    },
    {
        id: "security",
        name: "Security & Privacy",
        icon: <Shield className="h-6 w-6" />,
    },
];

const FAQ10 = ({ data }: Props) => {
    // const [openCategory, setOpenCategory] = useState(categories[0].id);
    // const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

    const sectionList = data?.sectionList;
    // Group FAQs by category
    const faqsByCategory = categories.reduce((acc, category) => {
        acc[category.id] = sectionList?.filter(
            (faq) => faq.customizeDescription === category.id
        );
        return acc;
    }, {} as Record<string, typeof sectionList>);

    // const toggleCategory = (categoryId: string) => {
    //     setOpenCategory(categoryId);
    // };

    // const toggleItem = (id: string) => {
    //     setOpenItems((prev) => ({
    //         ...prev,
    //         [id]: !prev[id],
    //     }));
    // };

    return (
        <section className="bg-white py-16">
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

                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-4">
                    {/* Category sidebar */}
                    <div className="md:col-span-1">
                        <div className="rounded-lg bg-gray-50 p-4">
                            <h3 className="mb-4 text-lg font-semibold">
                                Categories
                            </h3>
                            <nav className="space-y-1">
                                {categories.map((category) => (
                                    <button
                                        key={category.id}
                                        className={`flex w-full items-center rounded-md px-3 py-2 text-left transition-colors ${
                                            "general" === category.id
                                                ? "bg-primary text-primary-foreground"
                                                : "text-gray-700 hover:bg-gray-100"
                                        }`}
                                        // onClick={() =>
                                        //     toggleCategory(category.id)
                                        // }
                                    >
                                        <span className="mr-2">
                                            {category.icon}
                                        </span>
                                        <span>{category.name}</span>
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* FAQ content */}
                    <div className="md:col-span-3">
                        <div className="rounded-lg bg-gray-50 p-6">
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
                                        <h3 className="mb-6 flex items-center text-xl font-bold">
                                            <span className="mr-2">
                                                {category.icon}
                                            </span>
                                            {category.name}
                                        </h3>

                                        {faqs && faqs?.length > 0 ? (
                                            <div className="space-y-4">
                                                {faqs.map((faq) => (
                                                    <div
                                                        key={faq.id}
                                                        className="rounded-lg bg-white shadow-sm"
                                                    >
                                                        <button
                                                            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-gray-900 hover:text-primary focus:outline-none"
                                                            // onClick={() =>
                                                            //     toggleItem(faq.id)
                                                            // }
                                                            // aria-expanded={
                                                            //      openItems[
                                                            //         faq.id
                                                            //     ]
                                                            // }
                                                            aria-controls={`faq-content-${faq.id}`}
                                                        >
                                                            <span>
                                                                {faq.title}
                                                            </span>
                                                            <ChevronDown
                                                                className={`h-5 w-5 transition-transform ${
                                                                    // openItems[
                                                                    //     faq.id
                                                                    // ]
                                                                    //     ? "rotate-180"
                                                                    //     : ""
                                                                    ""
                                                                }`}
                                                            />
                                                        </button>
                                                        <div
                                                            id={`faq-content-${faq.id}`}
                                                            className={`overflow-hidden px-6 transition-all duration-300 ${
                                                                // openItems[
                                                                //     faq.id
                                                                // ]
                                                                //     ? "max-h-96 pb-6"
                                                                //     : "max-h-0"
                                                                ""
                                                            }`}
                                                        >
                                                            <p className="text-gray-600">
                                                                {
                                                                    faq.description
                                                                }
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <p className="py-4 text-center text-gray-500">
                                                No FAQs available in this
                                                category.
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Contact support */}
                <div className="mt-12 text-center">
                    <p className="mb-4 text-gray-600">
                        Still have questions? Our support team is here to help.
                    </p>
                    <a
                        href="#"
                        className="inline-block rounded-md bg-primary px-6 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
};

export { FAQ10 };
