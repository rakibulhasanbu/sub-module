"use client";

import { Props } from "@/type";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const Testimonial07 = ({ data }: Props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    const sectionList = data?.sectionList || [];
    // Autoplay functionality
    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % sectionList.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay, sectionList.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? sectionList.length - 1 : prevIndex - 1
        );
        setAutoplay(false);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % sectionList.length);
        setAutoplay(false);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setAutoplay(false);
    };

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

                <div className="relative mx-auto max-w-4xl">
                    {/* Testimonial Slider */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * 100
                                }%)`,
                            }}
                        >
                            {sectionList.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="w-full flex-shrink-0 px-4"
                                >
                                    <div className="rounded-lg bg-gray-50 p-8 text-center">
                                        <div className="mb-6">
                                            <p className="mb-6 text-lg italic text-gray-700">
                                                &quot;{testimonial.description}
                                                &quot;
                                            </p>
                                            {testimonial.imgURL && (
                                                <Image
                                                    src={
                                                        testimonial.imgURL ||
                                                        "/placeholder.svg"
                                                    }
                                                    alt={
                                                        testimonial.title ||
                                                        "Customer"
                                                    }
                                                    width={80}
                                                    height={80}
                                                    className="mx-auto mb-4 rounded-full"
                                                />
                                            )}
                                            <h3 className="text-lg font-bold">
                                                {testimonial.title}
                                            </h3>
                                            <p className="text-gray-600">
                                                {testimonial.subTitle}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2 text-gray-700 shadow-md hover:text-primary focus:outline-none md:-translate-x-6"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white p-2 text-gray-700 shadow-md hover:text-primary focus:outline-none md:translate-x-6"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>

                    {/* Dots Indicator */}
                    <div className="mt-6 flex justify-center space-x-2">
                        {sectionList.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`h-2 w-2 rounded-full transition-colors ${
                                    currentIndex === index
                                        ? "bg-primary"
                                        : "bg-gray-300"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Testimonial07 };
