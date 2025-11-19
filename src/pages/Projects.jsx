export default function Projects() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Projects</h1>

      {/* 
      ========================================
      STARTER SITES
      ========================================
      */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Starter Sites</h2>
        <p className="text-gray-600 mb-6">
          Clean, simple landing pages for small businesses or one-person crews.
          Live demos and examples will appear here as projects are completed.
        </p>

        {/* Coming soon box */}
        <div className="bg-white shadow rounded-lg p-10 text-center">
          <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
          <p className="text-gray-600">
            Starter site demos will be added here soon.
          </p>
        </div>
      </section>

      {/* 
      ========================================
      BUSINESS SITES
      ========================================
      */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Business Sites</h2>
        <p className="text-gray-600 mb-6">
          Multi-page websites for companies offering multiple services.
          These are perfect for growing teams or contractors with several service areas.
        </p>

        {/* Coming soon box */}
        <div className="bg-white shadow rounded-lg p-10 text-center">
          <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
          <p className="text-gray-600">
            Business site examples will be added here as they are completed.
          </p>
        </div>
      </section>

      {/* 
      ========================================
      PRO SITES
      ========================================
      */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Pro Sites</h2>
        <p className="text-gray-600 mb-6">
          Full-featured sites with galleries, advanced SEO, scheduling tools,
          blogs, or anything needed to compete at a high level.
        </p>

        {/* Coming soon box */}
        <div className="bg-white shadow rounded-lg p-10 text-center">
          <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
          <p className="text-gray-600">
            Pro-level sites will appear here as they are delivered.
          </p>
        </div>
      </section>

      {/* 
      ========================================
      SOFTWARE & TOOLS
      ========================================
      */}
      <section>
        <h2 className="text-3xl font-semibold mb-4">Custom Software & Tools</h2>
        <p className="text-gray-600 mb-6">
          Apps, utilities, dashboard systems, automation tools, and anything
          built outside traditional websites.
        </p>

        {/* Coming soon box */}
        <div className="bg-white shadow rounded-lg p-10 text-center">
          <h3 className="text-xl font-medium mb-2">Coming Soon</h3>
          <p className="text-gray-600">
            Custom software projects will be added here soon (including the
            lineman dashboard you're working on).
          </p>
        </div>
      </section>

      {/* 
      ========================================
      ARCHIVE OF OLD PLACEHOLDER CARDS (COMMENTED OUT)
      ========================================
      */}
      {/*
        Keeping your original project cards for later
        so you can copy pieces out if needed.

        <div className="grid gap-8 md:grid-cols-2 mt-12">
          ...
        </div>
      */}
    </div>
  );
}
