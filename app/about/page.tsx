// app/about/page.tsx

export default function About() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">About TaskManager</h1>
        <p className="text-lg mb-6 leading-relaxed">
          TaskManager is a simple and efficient productivity tool designed to help you organize
          your day-to-day tasks. Built with performance and usability in mind, it allows users to
          create, manage, and track tasks with ease.
        </p>

        <section className="mb-6">
          <h2 className="text-xl font-medium mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Create and categorize tasks</li>
            <li>Track progress with intuitive task statuses</li>
            <li>Set deadlines and priorities</li>
            <li>Minimal and distraction-free interface</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-medium mb-2">Our Philosophy</h2>
          <p className="text-base leading-relaxed">
            We believe that productivity tools should be simple, beautiful, and serve their core
            purpose without unnecessary complexity. TaskManager was built to help users focus on
            what matters most — getting things done.
          </p>
        </section>
      </div>
    </main>
  );
}
