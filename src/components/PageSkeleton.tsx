"use client";

export default function PageSkeleton() {
  return (
    <div className="min-h-screen bg-[var(--background)] pt-16 md:pt-20 lg:pt-24">
      {/* Hero Section Skeleton */}
      <section className="relative w-full py-10 sm:py-10 md:py-10 lg:py-10 xl:py-10 overflow-hidden">
        {/* Background elements skeleton */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-4 w-48 h-48 bg-slate-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-16 left-4 w-40 h-40 bg-slate-200 rounded-full animate-pulse"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center relative z-10 max-w-7xl mx-auto">
          {/* Picture Space Skeleton */}
          <div className="flex justify-center lg:justify-start order-1">
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 group">
              <div className="relative w-full h-full bg-white/80 border-4 border-slate-200 rounded-full shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm">
                <div className="w-16 h-16 bg-slate-200 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Text Content Skeleton */}
          <div className="order-2 space-y-4 sm:space-y-6 md:space-y-8 flex flex-col items-center lg:items-start">
            <div className="space-y-4">
              <div className="w-80 h-12 bg-slate-200 rounded-lg animate-pulse"></div>
              <div className="w-64 h-8 bg-slate-200 rounded-lg animate-pulse"></div>
              <div className="w-72 h-6 bg-slate-200 rounded animate-pulse"></div>
            </div>

            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="w-full h-20 bg-slate-200 rounded-lg animate-pulse"></div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 md:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <div className="w-full sm:w-32 h-12 bg-slate-200 rounded-lg animate-pulse"></div>
              <div className="w-full sm:w-32 h-12 bg-slate-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections Skeleton */}
      <div className="max-w-7xl mx-auto">
        {/* About Section Skeleton */}
        <section className="w-full px-8 py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="w-64 h-12 bg-slate-200 rounded-lg animate-pulse mx-auto mb-6"></div>
              <div className="w-96 h-6 bg-slate-200 rounded animate-pulse mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center group relative">
                  <div className="w-16 h-16 bg-slate-200 rounded-2xl animate-pulse mx-auto mb-4"></div>
                  <div className="w-20 h-6 bg-slate-200 rounded animate-pulse mx-auto mb-2"></div>
                  <div className="w-24 h-4 bg-slate-200 rounded animate-pulse mx-auto"></div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 shadow-xl"
                >
                  <div className="w-24 h-8 bg-slate-200 rounded animate-pulse mb-6"></div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4].map((j) => (
                      <div key={j} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-slate-200 rounded-full animate-pulse"></div>
                        <div className="w-32 h-4 bg-slate-200 rounded animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section Skeleton */}
        <section className="w-full px-8 py-24 bg-white relative overflow-hidden">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="w-80 h-12 bg-slate-200 rounded-lg animate-pulse mx-auto mb-4"></div>
              <div className="w-96 h-6 bg-slate-200 rounded animate-pulse mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-slate-200 shadow-xl"
                >
                  <div className="w-24 h-8 bg-slate-200 rounded animate-pulse mb-6"></div>
                  <div className="grid grid-cols-2 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((j) => (
                      <div key={j} className="text-center">
                        <div className="w-12 h-12 bg-slate-200 rounded-lg animate-pulse mx-auto mb-2"></div>
                        <div className="w-16 h-3 bg-slate-200 rounded animate-pulse mx-auto"></div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section Skeleton */}
        <section className="w-full px-8 py-24 bg-white relative">
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <div className="w-80 h-12 bg-slate-200 rounded-lg animate-pulse mx-auto mb-4"></div>
              <div className="w-96 h-6 bg-slate-200 rounded animate-pulse mx-auto"></div>
            </div>

            <div className="flex justify-center gap-4 mb-12">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-20 h-8 bg-slate-200 rounded-full animate-pulse"
                ></div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-slate-200 shadow-xl"
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 bg-slate-200 aspect-[4/3] animate-pulse"></div>
                  <div className="space-y-4">
                    <div className="w-3/4 h-6 bg-slate-200 rounded animate-pulse"></div>
                    <div className="w-full h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="w-2/3 h-4 bg-slate-200 rounded animate-pulse"></div>
                    <div className="flex gap-2">
                      <div className="w-16 h-6 bg-slate-200 rounded-full animate-pulse"></div>
                      <div className="w-20 h-6 bg-slate-200 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section Skeleton */}
        <section className="w-full px-8 py-24 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <div className="pt-40 mb-2">
              <div className="w-64 h-12 bg-slate-200 rounded-lg animate-pulse mx-auto mb-6"></div>
              <div className="w-96 h-6 bg-slate-200 rounded animate-pulse mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 -my-2 mt-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="group relative bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200 shadow-xl"
                >
                  <div className="w-12 h-12 bg-slate-200 rounded-xl animate-pulse mx-auto mb-4"></div>
                  <div className="w-24 h-6 bg-slate-200 rounded animate-pulse mx-auto mb-2"></div>
                  <div className="w-32 h-4 bg-slate-200 rounded animate-pulse mx-auto mb-4"></div>
                  <div className="w-20 h-8 bg-slate-200 rounded-lg animate-pulse mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer Skeleton */}
      <footer className="w-full px-8 py-12 bg-white border-t border-border">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="w-32 h-6 bg-slate-200 rounded animate-pulse mb-4"></div>
                <div className="space-y-2">
                  {[1, 2, 3].map((j) => (
                    <div
                      key={j}
                      className="w-24 h-4 bg-slate-200 rounded animate-pulse"
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 pt-8 border-t border-slate-200">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 bg-slate-200 rounded-full animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
