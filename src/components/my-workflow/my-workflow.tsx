export default function MyWorkflow() {
  return (
    <div className="text-gray-800">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-2 before:mb-2 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-neutral-300">
              <h3 className="text-3xl font-semibold">
                My workflow to make the web possible.
              </h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-neutral-200">
              {workflows.map((workflow) => (
                <div
                  key={workflow.title}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-neutral-400"
                >
                  <h3 className="text-xl font-semibold tracki">
                    {workflow.title}
                  </h3>
                  <p className="mt-2">{workflow.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const workflows = [
  {
    title: "Project Request 🔥",
    description: `The first step in our collaboration is the project request. This gives me an idea of what you're looking for and helps me determine if I'm the right fit for your project. If so, we will schedule a video call to dive deeper.`,
  },
  {
    title: "First Meeting 🤝",
    description: `Trust is extremely important to me when working together. In our initial meeting, we get to know each other and see if we are a good fit. We also talk about your goals & requirements, clarify questions and define the next steps.`,
  },
  {
    title: "Proposal 💌",
    description: `After I have learned as much as possible about your project, I will create an individual proposal. I don't charge for my work by the hour but on a per-project basis. This way, you'll have a complete overview of the costs upfront.`,
  },
  {
    title: "Implementation 💻",
    description: `Once I have everything needed, I'm ready to start with the implementation. Ensuring transparent communication and regular updates is a priority for me. I'll keep you in the loop using convenient communication channels like Slack.`,
  },
  {
    title: "Launch 🚀",
    description: `Before launching, the finalized website will go through quality assurance to ensure every detail is just right. Depending on the project, I'll help to launch with Webflow's ultra-fast hosting or via code export.`,
  },
];
