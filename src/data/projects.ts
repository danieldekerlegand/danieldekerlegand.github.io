export type Project = {
  name: string;
  kind: string;
  blurb: string;
  detail: string;
  stack: string[];
  repo?: string;
  status?: 'public' | 'private';
  featured?: boolean;
  /** Gets its own full-width treatment; excluded from the card grids. */
  spotlight?: boolean;
};

export type ProjectGroup = {
  id: string;
  title: string;
  intro: string;
  projects: Project[];
};

export const ecosystemIntro =
  'A single neuro-symbolic fabric rather than a mesh of point-to-point pipes. One repo specifies the interchange contracts, another implements the runtime, and the products are producers of and consumers from that shared substrate. Transport is MCP and A2A — leveraged, never reinvented — with direct peer-to-peer dialing and no central hub: the registry returns addresses, and peers dial each other.';

export const groups: ProjectGroup[] = [
  {
    id: 'fabric',
    title: 'Shared Fabric',
    intro:
      'The contracts and the runtime commons every other project builds against. koine specifies; agora implements.',
    projects: [
      {
        name: 'koine',
        kind: 'Protocol specification',
        blurb:
          'The contracts source-of-truth for the ecosystem — interchange protocols, a shared relation registry, and the architecture decision records.',
        detail:
          'Five protocols cover identity (KINP), knowledge (KGP), the capability bus (KCB), media (KMI), and conformance (KCS). Deliberately runtime-free: it is specification, TSV/JSON registries, and ADRs, so that every implementation is checked against one authority instead of drifting copies. Cross-repo sharing is vendor-with-drift-gate — a byte-identical mirror plus a test that fails the build when it diverges — never submodules.',
        stack: ['Markdown', 'TSV/JSON', 'ADRs'],
        repo: 'https://github.com/danieldekerlegand/koine',
        status: 'public',
        featured: true,
      },
      {
        name: 'agora',
        kind: 'Runtime commons',
        blurb:
          'The runtime implementing the koine contracts: a provider-router LLM gateway, the capability-bus discovery registry, the identity resolver, and a conformance console.',
        detail:
          'Where the specifications become running services. Includes shared schemas and clients consumed across the ecosystem, plus in-progress ports of the data-translation engine to Rust and the provider-router to Erlang for the concurrency profile that workload wants.',
        stack: ['Python', 'TypeScript', 'Rust', 'Erlang'],
        status: 'private',
        featured: true,
      },
      {
        name: 'tessera',
        kind: 'Inference-memory mesh',
        blurb:
          'A per-node daemon and CLI that pools reserved RAM across modest devices into one shared caching fabric for agentic AI.',
        detail:
          'Thin clients, SBCs, old laptops, and tablets contribute reserved memory to a common pool holding inference-response cache, agent context and state, prompt-prefix/KV state, model artifacts, and — experimentally — pooled-capacity inference. LibreMesh is the design compass: zero-config, self-organizing, graceful under churn, and with no mandatory central coordinator. It joins the fabric as a capability-bus provider, so it is discovered and dialed exactly like any other peer.',
        stack: ['Go'],
        status: 'private',
        featured: true,
      },
    ],
  },
  {
    id: 'products',
    title: 'Products',
    intro:
      'Each one a producer of, or consumer from, the shared fabric. Insimul — the worldbuilding product and the doctoral work — is covered in full above; these are the rest.',
    projects: [
      {
        name: 'insimul',
        kind: 'Hybrid-AI worldbuilding',
        blurb:
          'Fictional worlds turned into games in any genre or engine, with a Prolog core holding the canonical world state.',
        detail:
          'The centerpiece of the doctoral research. Symbolic social state and statistical language generation exchange information bidirectionally: first-order predicate logic constrains what a transformer may assert, and generated narrative is compiled back into rules. A meta-workspace of bare-named submodules spans the browser runtime, platform, server, and native engine bindings for Babylon, Godot, Unity, and Unreal.',
        stack: ['TypeScript', 'Babylon.js', 'Prolog', 'C', 'MongoDB'],
        status: 'private',
        featured: true,
        spotlight: true,
      },
      {
        name: 'pinakes',
        kind: 'Knowledge & data hub',
        blurb:
          'The canonical knowledge authority — scraping, data correspondences, and visualization over a Wikidata-anchored graph.',
        detail:
          'Reconciles heterogeneous sources against one canonical graph so that every downstream consumer resolves an entity the same way. Generic format translation is being factored out into agora, leaving pinakes to do the part that is genuinely its own: deciding what is true and which records refer to the same thing.',
        stack: ['TypeScript', 'React', 'Python', 'Wikidata', 'SPARQL'],
        status: 'private',
      },
      {
        name: 'cuneiform',
        kind: 'Company-as-Code',
        blurb:
          'Templated agentic organizations plus the self-hosted infrastructure to run them.',
        detail:
          'The most deeply A2A- and MCP-integrated project in the ecosystem: a Rust message bus carries agent-to-agent traffic across 18 MCP servers. Organizational structure — roles, hand-offs, escalation — is expressed declaratively and instantiated as a running set of agents rather than assembled by hand.',
        stack: ['Rust', 'Go', 'TypeScript', 'A2A', 'MCP'],
        status: 'private',
        featured: true,
      },
      {
        name: 'argos',
        kind: 'Agentic multimedia',
        blurb:
          'Any-to-any multimedia: files in, analysis plus a neuro-symbolic knowledge base, files out.',
        detail:
          'Exposes both MCP and A2A surfaces, so it is callable as a tool and reachable as a peer. Doubles as the A/V-analysis service behind the game-QA pipeline, which is what pushed its extraction layer to produce structured symbolic facts rather than opaque embeddings.',
        stack: ['Python', 'MCP', 'A2A', 'ffmpeg'],
        status: 'private',
      },
      {
        name: 'formant',
        kind: 'Audio-plugin IDE',
        blurb:
          'A visual DSP environment that compiles signal graphs to VST, AU, and WASM targets, with an agentic layer in design.',
        detail:
          'The furthest-downstream product, and a useful proof that the fabric is worth having: its LLM calls are being realigned from bespoke per-provider integrations onto the shared provider-router, which is exactly the consolidation agora exists to make possible.',
        stack: ['Electron', 'React', 'TypeScript', 'DSP', 'WASM'],
        status: 'private',
      },
    ],
  },
  {
    id: 'tooling',
    title: 'Tooling',
    intro: 'The harness the rest of it is built with, and the QA pipeline that checks the games.',
    projects: [
      {
        name: 'chief',
        kind: 'Autonomous tasklist runner',
        blurb:
          'The agent harness every repo in the ecosystem is built with: write user stories with acceptance criteria, and it drives implement → verify → commit → merge, one story at a time.',
        detail:
          'Not a product but the machinery. Tasklists are JSON user stories with explicit acceptance criteria and dependency edges; chief schedules them, isolates parallel work in git worktrees, and gates every merge on a verification script. The scheduling safety model — what may run concurrently without two agents fighting over the same files — is the interesting part.',
        stack: ['Rust', 'Git worktrees'],
        repo: 'https://github.com/danieldekerlegand/chief',
        status: 'public',
        featured: true,
      },
      {
        name: 'talos',
        kind: 'AI game-QA pipeline',
        blurb:
          'Build, playtest, capture, analyze, feed back — an automated QA loop for Godot, Unity, and Unreal projects.',
        detail:
          'An agent plays the build, the session is captured, and argos performs the A/V analysis that turns footage into structured findings routed back to the developer. Long in planning; implementation has now started from a repository baseline that lands the Python scaffold and Godot fixtures, with the remaining tasklists chained off it in a single strict dependency line.',
        stack: ['Python', 'Godot', 'Unity', 'Unreal'],
        status: 'private',
      },
    ],
  },
];

export const allProjects = groups.flatMap((g) => g.projects);

/** The doctoral project. Rendered full-width by Spotlight.astro, so the card
 *  grids exclude it rather than showing it twice. */
export const spotlight = {
  project: allProjects.find((p) => p.spotlight)!,
  eyebrow: 'Doctoral research',
  headline: 'A world model a language model is not allowed to contradict',
  degree: 'PhD, Computer Science · University of New Orleans · expected May 2026',
  paragraphs: [
    'Insimul turns fictional worlds into games in any genre or engine, with a Prolog core holding the canonical world state. The research question underneath it is what a language model should and should not be trusted with: generation is fluent but unaccountable, and symbolic logic is accountable but inert. Insimul makes each one answer to the other.',
    'Information flows in both directions. First-order predicate logic constrains what the transformer may assert about the world, so it cannot invent a dead character back into a scene or contradict an established relationship. What the model does generate is put through rule extraction and compilation, so narrative becomes new facts the symbolic engine can reason over. Knowledge graphs with neural embeddings (FAISS) and prompt programs written in DSPy sit between the two.',
    'The evaluation is empirical rather than anecdotal: five implemented systems across education, entertainment, and worldbuilding, three controlled user studies analyzed with mixed-effects models in R, and multi-generational demographic simulation carrying 40–200+ procedurally-generated characters without the world drifting out from under them.',
  ],
  stats: [
    { value: '5', label: 'Implemented systems' },
    { value: '69', label: 'Study participants' },
    { value: '358+', label: 'Citations to the research' },
    { value: '95%+', label: 'Simulation consistency' },
  ],
};

/** Featured cards exclude the spotlight — it is rendered above them in full. */
export const featuredProjects = allProjects.filter((p) => p.featured && !p.spotlight);
