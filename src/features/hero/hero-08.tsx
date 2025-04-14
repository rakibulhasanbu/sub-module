"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import type { Section } from "../../type";

type Props = {
  data?: Section;
};

const GradientHero = ({ data }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Gradient animation effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    // Create gradient circles
    const circles: {
      x: number;
      y: number;
      radius: number;
      dx: number;
      dy: number;
      color: string;
    }[] = [];

    const colors = [
      "rgba(79, 70, 229, 0.3)", // Indigo
      "rgba(139, 92, 246, 0.3)", // Purple
      "rgba(236, 72, 153, 0.3)", // Pink
      "rgba(59, 130, 246, 0.3)", // Blue
    ];

    // Create initial circles
    for (let i = 0; i < 4; i++) {
      const radius = Math.random() * 200 + 100;
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius,
        dx: (Math.random() - 0.5) * 0.7,
        dy: (Math.random() - 0.5) * 0.7,
        color: colors[i % colors.length],
      });
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw and update circles
      circles.forEach((circle) => {
        // Draw gradient
        const gradient = ctx.createRadialGradient(
          circle.x,
          circle.y,
          0,
          circle.x,
          circle.y,
          circle.radius
        );
        gradient.addColorStop(0, circle.color);
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Update position
        circle.x += circle.dx;
        circle.y += circle.dy;

        // Bounce off edges
        if (
          circle.x - circle.radius < 0 ||
          circle.x + circle.radius > canvas.width
        ) {
          circle.dx = -circle.dx;
        }
        if (
          circle.y - circle.radius < 0 ||
          circle.y + circle.radius > canvas.height
        ) {
          circle.dy = -circle.dy;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Gradient background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        style={{ background: "linear-gradient(to bottom, #f9fafb, #f3f4f6)" }}
      ></canvas>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              {data?.subTitle && (
                <span className="mb-3 inline-block font-semibold text-primary">
                  {data?.subTitle}
                </span>
              )}
              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                {data?.title}
              </h1>
              <p className="mb-8 text-xl leading-relaxed text-gray-600">
                {data?.description}
              </p>

              {/* CTA Buttons */}
              <div className="mb-12 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  href={data?.buttonUrl}
                  className="inline-block w-full rounded-md bg-primary px-8 py-4 text-center font-medium text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
                >
                  {data?.buttonText}
                </a>
                {data?.customizeDescription && (
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-4 font-medium text-gray-700 transition-colors hover:text-primary"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mr-2 h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {data?.customizeDescription}
                  </a>
                )}
              </div>

              {/* Feature badges */}
              {data?.sectionList && data?.sectionList.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {data?.sectionList.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center rounded-full bg-white px-4 py-2 shadow-sm"
                    >
                      {item.imgURL && (
                        <Image
                          src={item.imgURL || "/placeholder.svg"}
                          alt={item.title || "Feature icon"}
                          width={20}
                          height={20}
                          className="mr-2"
                        />
                      )}
                      <span className="font-medium text-gray-800">
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Floating elements */}
            <div className="relative">
              <div className="relative z-10 rounded-2xl bg-white p-4 shadow-xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Dashboard preview"
                  width={600}
                  height={500}
                  className="h-auto w-full rounded-lg"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute left-1/2 top-1/2 -z-10 h-full w-full -translate-x-1/2 -translate-y-1/2 transform">
                <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10"></div>
                <div className="absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-blue-400/10"></div>
              </div>

              {/* Floating cards */}
              <div className="animate-float absolute -left-6 -top-6 rounded-lg bg-white p-4 shadow-lg">
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-green-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Task completed</p>
                    <p className="text-sm text-gray-500">
                      Project launched successfully
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="animate-float absolute -bottom-6 -right-6 rounded-lg bg-white p-4 shadow-lg"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Analytics</p>
                    <p className="text-sm text-gray-500">Traffic up by 24%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradientHero;
