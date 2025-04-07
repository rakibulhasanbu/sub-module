import { Props } from "@/type";
import Image from "next/image";

const Testimonial09 = ({ data }: Props) => {
    const sectionList = data?.sectionList || [];

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

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
                    {sectionList.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="overflow-hidden rounded-lg bg-gray-50 shadow-sm"
                        >
                            {/* Company logo */}
                            <div className="flex justify-center bg-gray-100 p-4">
                                {testimonial.bgURL && (
                                    <Image
                                        src={
                                            testimonial.bgURL ||
                                            "/placeholder.svg"
                                        }
                                        alt="Company logo"
                                        width={120}
                                        height={40}
                                        className="h-10 w-auto object-contain"
                                    />
                                )}
                            </div>

                            {/* Testimonial content */}
                            <div className="p-6">
                                {testimonial.customizeDescription && (
                                    <div className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-lg font-bold text-primary">
                                        {testimonial.customizeDescription}
                                    </div>
                                )}

                                <p className="mb-6 text-gray-700">
                                    &ldquo;{testimonial.description}&ldquo;
                                </p>

                                <div className="flex items-center">
                                    {testimonial.imgURL && (
                                        <Image
                                            src={
                                                testimonial.imgURL ||
                                                "/placeholder.svg"
                                            }
                                            alt={
                                                testimonial.title || "Customer"
                                            }
                                            width={50}
                                            height={50}
                                            className="mr-4 rounded-full"
                                        />
                                    )}
                                    <div>
                                        <h3 className="font-bold">
                                            {testimonial.title}
                                        </h3>
                                        <p className="text-sm text-gray-600">
                                            {testimonial.subTitle}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Testimonial09 };
