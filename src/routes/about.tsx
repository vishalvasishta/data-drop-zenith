import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        About Us
      </h1>
      <p className="mt-6 text-base leading-relaxed text-muted-foreground">
        Welcome to <span className="font-semibold text-foreground">Data Drop</span>, a learning platform dedicated to helping students and aspiring professionals build practical skills in Artificial Intelligence, Machine Learning, Data Science, and related technologies.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Our mission is to bridge the gap between traditional education and industry requirements by providing structured, project-based learning that prepares students for real-world careers.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        Our flagship <span className="font-semibold text-foreground">AI/ML Career Accelerator Program</span> is designed to help learners develop strong technical foundations, gain hands-on experience through practical projects, and build a professional portfolio. The curriculum focuses on industry-relevant tools and technologies including Python, NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch, OpenCV, GitHub, VS Code, and Jupyter Notebook.
      </p>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-foreground">
        Our Mission
      </h2>
      <p className="mt-3 text-base leading-relaxed text-muted-foreground">
        To make high-quality AI and Machine Learning education accessible, practical, and career-focused.
      </p>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-foreground">
        What We Offer
      </h2>
      <ul className="mt-4 space-y-2 text-base text-muted-foreground">
        {[
          "Comprehensive AI & Machine Learning training",
          "Hands-on projects and assignments",
          "Industry-standard tools and technologies",
          "Portfolio development guidance",
          "Resume building support",
          "Interview preparation",
          "Career guidance and mentorship",
          "Student support throughout the learning journey",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.22_258)]" />
            {item}
          </li>
        ))}
      </ul>

      <h2 className="mt-12 text-xl font-bold tracking-tight text-foreground">
        Our Values
      </h2>
      <ul className="mt-4 space-y-2 text-base text-muted-foreground">
        {[
          "Practical Learning",
          "Industry-Relevant Curriculum",
          "Student-Centric Approach",
          "Continuous Improvement",
          "Professional Ethics",
        ].map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[oklch(0.58_0.22_258)]" />
            {item}
          </li>
        ))}
      </ul>

      <p className="mt-10 text-base leading-relaxed text-muted-foreground">
        We are committed to delivering valuable educational content and continuously improving our programs based on industry trends and student feedback.
      </p>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground">
        For any questions, feel free to contact us at{" "}
        <a
          href="mailto:dataddrop@gmail.com"
          className="font-medium text-[oklch(0.58_0.22_258)] hover:underline"
        >
          dataddrop@gmail.com
        </a>
      </p>
    </main>
  );
}
