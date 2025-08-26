"use client";

export default function Home() {
  return (
    <>
      {/* HOME */}
      <section
        id="home"
        className="grid min-h-[calc(100vh-56px)] lg:min-h-screen place-items-center
                   px-4 sm:px-6 md:px-10 text-center
                   bg-gray-100 dark:bg-gray-950 transition-colors"
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight
                         text-gray-900 dark:text-gray-100"
          >
            Hi There! <br />
            I&apos;m <span className="text-purple-600">Wemerson</span>
          </h1>

          <p
            className="mt-5 sm:mt-6 text-lg sm:text-xl font-semibold
                        text-gray-800 dark:text-gray-300"
          >
            Developer passionate about technology, music and coffee
          </p>
        </div>
      </section>
    </>
  );
}
