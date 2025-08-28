const Timeline = () => (
  <div className="w-full my-6">
    <div className="hidden sm:flex justify-between items-center">
      <div className="text-center flex-1">
        <div className="h-2 bg-accent w-full" />
        <p className="mt-2 text-sm">Completion</p>
      </div>
      <div className="text-center flex-1">
        <div className="h-2 bg-accent w-full" />
        <p className="mt-2 text-sm">IDE Agents</p>
        <p className="text-xs">GitHub Agents Panel<br/>Gemini Agent Mode<br/>Claude Code<br/>Q Developer</p>
      </div>
      <div className="text-center flex-1">
        <div className="h-2 bg-accent w-full" />
        <p className="mt-2 text-sm">SDLC-integrated agents</p>
      </div>
    </div>
    <div className="sm:hidden flex flex-col gap-4">
      <div>
        <div className="w-2 h-full bg-accent" />
        <p className="ml-2 text-sm">Completion</p>
      </div>
      <div>
        <div className="w-2 h-full bg-accent" />
        <p className="ml-2 text-sm">IDE Agents</p>
        <p className="ml-2 text-xs">GitHub Agents Panel, Gemini Agent Mode, Claude Code, Q Developer</p>
      </div>
      <div>
        <div className="w-2 h-full bg-accent" />
        <p className="ml-2 text-sm">SDLC-integrated agents</p>
      </div>
    </div>
  </div>
)

export default Timeline
