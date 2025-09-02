import AnimatedContent from "../animations/AnimatedContent/AnimatedContent";

{
  /* Minimalistic content and layout */
}
export default function AboutSection() {
  return (
    <section
      id="about"
      className="w-full px-8 py-24 bg-white dark:bg-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About Me
        </h2>
        <AnimatedContent>
          {" "}
          {/* Use AnimatedContent for smooth entry */}
          <div className="space-y-8">
            {" "}
            {/* Increased spacing for airiness */}
            <p className="text-lg text-slate-600 dark:text-slate-300 text-center">
              Passionate software engineer based in Cagayan de Oro, creating
              innovative digital solutions.
            </p>
            <ul className="space-y-4 text-lg text-slate-600 dark:text-slate-300">
              <li>Full-stack developer at Silahis Student Publication.</li>
              <li>Freelance projects including ChartLink clinic system.</li>
              <li>Intern at OneQuantum Philippines.</li>
              <li>
                Director for Code Camps at DEVCON Iligan; involved in ComSoc and
                Silahis.
              </li>
            </ul>
            <div className="border-t border-border my-8"></div>
            <div className="flex justify-center gap-4">
              {" "}
              {/* Centered icons for interests */}
              <div className="text-center">
                <span className="text-3xl">💻</span>
                <p>Full-Stack</p>
              </div>
              <div className="text-center">
                <span className="text-3xl">🤖</span>
                <p>AI/ML</p>
              </div>
              <div className="text-center">
                <span className="text-3xl">☁️</span>
                <p>Cloud Tech</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6 justify-center">
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
