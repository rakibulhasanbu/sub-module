"use client";

import { Props } from "@/type";
import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Testimonial08 = ({ data }: Props) => {
    const sectionList = data?.sectionList || [];

    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const openVideo = (url: string) => {
        setActiveVideo(url);
    };

    const closeVideo = () => {
        setActiveVideo(null);
    };

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

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {sectionList.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="overflow-hidden rounded-lg bg-white shadow-sm"
                        >
                            {/* Video thumbnail */}
                            <div className="relative">
                                {testimonial.imgURL && (
                                    <>
                                        <Image
                                            src={
                                                testimonial.imgURL ||
                                                "/placeholder.svg"
                                            }
                                            alt={
                                                testimonial.title ||
                                                "Video thumbnail"
                                            }
                                            width={600}
                                            height={400}
                                            className="h-48 w-full object-cover"
                                        />
                                        <button
                                            onClick={() =>
                                                testimonial.buttonUrl &&
                                                openVideo(testimonial.buttonUrl)
                                            }
                                            className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors hover:bg-black/40"
                                            aria-label="Play video"
                                        >
                                            <div className="rounded-full bg-white/90 p-3">
                                                <Play
                                                    className="h-8 w-8 text-primary"
                                                    fill="currentColor"
                                                />
                                            </div>
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* Testimonial content */}
                            <div className="p-6">
                                <h3 className="mb-1 text-lg font-bold">
                                    {testimonial.title}
                                </h3>
                                <p className="mb-3 text-sm text-gray-600">
                                    {testimonial.subTitle}
                                </p>
                                <p className="mb-4 text-gray-700">
                                    {testimonial.description}
                                </p>

                                {testimonial.buttonText &&
                                    testimonial.buttonUrl && (
                                        <button
                                            onClick={() =>
                                                openVideo(
                                                    testimonial.buttonUrl!
                                                )
                                            }
                                            className="flex items-center font-medium text-primary"
                                        >
                                            <Play className="mr-1 h-4 w-4" />
                                            {testimonial.buttonText}
                                        </button>
                                    )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Modal */}
            {activeVideo && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
                    onClick={closeVideo}
                >
                    <div
                        className="relative w-full max-w-4xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={closeVideo}
                            className="absolute -top-10 right-0 text-white hover:text-gray-300"
                            aria-label="Close video"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                        <div className="relative h-0 overflow-hidden rounded-lg pb-[56.25%]">
                            <iframe
                                src={activeVideo.replace("watch?v=", "embed/")}
                                title="Video testimonial"
                                className="absolute left-0 top-0 h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export { Testimonial08 };
