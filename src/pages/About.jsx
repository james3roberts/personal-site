export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">
        About the Builder Behind the Websites
      </h1>

      <div className="text-gray-800 text-lg leading-relaxed space-y-6">
        <p>
          I spent nearly 30 years in construction. I understand long days,
          tight schedules, demanding customers, and what it takes to keep a
          small business running. After years of hands-on work, my body had
          limits — but my drive to build didn’t. So I switched from tools to
          technology.
        </p>

        <p>
          To make that transition real, I earned a four-year Computer Science
          degree fully online while working full time. No shortcuts, no in-person
          help — just me, a laptop, and the determination to learn how to solve
          problems with code. That experience taught me more about discipline,
          troubleshooting, and persistence than any classroom ever could.
        </p>

        <p>
          Today, I use that blend of real-world trade experience and software
          training to build websites for the kinds of businesses I grew up
          around — the ones that keep towns running.
        </p>

        <p>
          Whether you’re a contractor, a shop owner, an accountant, or any other
          small business, your website should make it easy for people to trust
          you. My goal is simple: create clean, modern websites that help you
          look professional, get found online, and bring in steady work.
        </p>

        <p>
          If you’re ready to upgrade your online presence or get your business
          online for the first time, I’m here to help you build something that
          works — the right way.
        </p>

        {/* CTA Section */}
        <div className="pt-10 text-center">
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Contact Me Today
          </a>
        </div>
      </div>
    </div>
  );
}
