export type Job = {
  org: string;
  location: string;
  role: string;
  dates: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    org: 'Evolve Media AI',
    location: 'New Orleans, LA',
    role: 'Director of Artificial Intelligence',
    dates: 'Jun 2021 — Present',
    bullets: [
      'Architected production microservices platform with 8 services (Python Flask, Node.js Express, React) deployed on Kubernetes (AWS EKS, GKE, AKS) using Infrastructure-as-Code (Terraform), implementing GraphQL API, WebSocket subscriptions, and Redis pub/sub for real-time collaborative applications serving thousands of users.',
      'Developed sophisticated AI orchestration system using Google Gemini 2.5 Pro with 14+ function calling tools for multi-modal content analysis (video, audio, text), implementing machine learning preference systems with weighted scoring algorithms for personalized recommendations and scalable video intelligence pipelines with parallel processing architectures.',
      'Built comprehensive full-stack applications including real-time video editor with React/Remotion, cross-platform mobile app (React Native/Expo) with biometric authentication, and REST/GraphQL APIs with JWT authentication, PostgreSQL database, automated deployment pipelines, and monitoring achieving 99.9% uptime.',
      'Designed intuitive AI-powered interfaces with conversational assistants, multi-turn dialogue support, real-time progress feedback, and personalized user experiences combining symbolic reasoning with neural generation for adaptive content creation responding to user behavior patterns.',
    ],
  },
  {
    org: 'University of New Orleans',
    location: 'New Orleans, LA',
    role: 'Artificial Intelligence Researcher',
    dates: 'Aug 2019 — Present',
    bullets: [
      'Conducted multi-phase research program spanning 5 implemented systems demonstrating hybrid AI effectiveness across education, entertainment, and worldbuilding domains, integrating neuro-symbolic architectures combining first-order predicate logic with transformer-based language models (GPT-4), validated through three user studies (n=69 total participants) with dissertation research cited 358+ times in scholarly literature.',
      'Developed comprehensive neuro-symbolic AI system (Insimul) with bidirectional information flow between symbolic social state and statistical language generation, implementing rule extraction and compilation pipelines, knowledge graphs with neural embeddings (FAISS), and advanced prompt engineering using DSPy achieving 95%+ consistency in multi-generational social simulations with 40-200+ procedurally-generated characters.',
      'Built full-stack TypeScript application with React frontend, Node.js/Express backend, MongoDB persistence, and Prolog rule engine supporting real-time collaborative editing via WebSocket, implementing social physics engines for emergent narrative in Unity/Unreal Engine 5 with MetaHumans integration and VR language learning systems achieving comparable performance to human tutors with significantly higher confidence gains.',
      'Designed rigorous evaluation frameworks including controlled experiments with statistical modeling (mixed-effects models, R/lme4), multi-generational demographic simulation algorithms, collaborative knowledge engineering workshops with domain experts, and procedural content generation systems for culturally-grounded virtual characters with automatic scaling and production deployment handling 69+ participants.',
    ],
  },
  {
    org: 'Torsh',
    location: 'New Orleans, LA',
    role: 'Lead Engineer',
    dates: 'Dec 2015 — Jun 2021',
    bullets: [
      'Oversaw, from conception to production, the complete rewrite of legacy iOS and Android apps as a single React Native app. Directed other engineers and operationalized organizational engineering standards.',
      'Architected and implemented app navigation, authentication, data persistence, and core UI components. Built bespoke React Native libraries in Objective C and Java for audio/video domain-specific tasks like Bluetooth connectivity and camera management.',
      'Designed, developed, and deployed GraphQL API in Node.js. Integrated Apollo client into application, adding an offline-first local caching system.',
      'Implemented critical fullstack features in a Meteor/Node.js web application: a pub-sub task queuing system, audio-video processing services, an internal reporting library of data analytics, a PDF annotation tool, an OpenWRT video chat tool, and a CMS.',
    ],
  },
];

export type School = {
  org: string;
  location: string;
  degrees: { degree: string; year: string }[];
};

export const education: School[] = [
  {
    org: 'University of New Orleans',
    location: 'New Orleans, LA',
    degrees: [
      { degree: 'Doctor of Philosophy, Computer Science', year: 'Expected May 2026' },
      { degree: 'Master of Science, Computer Science', year: '2018' },
      {
        degree:
          'Bachelor of Arts, English Language & Literature · Bachelor of Arts, Film/Cinema/Video Studies',
        year: '2010',
      },
    ],
  },
  {
    org: 'University of Arizona',
    location: 'Tucson, AZ',
    degrees: [{ degree: 'Master of Fine Arts, Creative Writing', year: '2013' }],
  },
];

export type SkillGroup = { label: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    label: 'Symbolic AI & Logic',
    items: [
      'SWI-Prolog', 'Ensemble', 'Insimul DSL', 'Datalog', 'ASP', 'CLIPS', 'Pyke',
      'Knowledge Graphs', 'OWL', 'SPARQL', 'Social Physics',
    ],
  },
  {
    label: 'AI/ML Tooling',
    items: ['PyTorch', 'Keras', 'TensorFlow', 'MLFlow', 'Jupyter', 'HuggingFace'],
  },
  {
    label: 'LLM Inference, Training & Optimization',
    items: [
      'Open R1', 'MinGPT', 'Megatron LM', 'Finetune Transformer LM', 'DSPy',
      'Retrieval-Augmented Generation', 'FAISS', 'ChromaDB', 'Pinecone',
      'Vector Embeddings', 'Semantic Search', 'Prompt Engineering',
      'Few-Shot Learning', 'Chain-of-Thought Prompting', 'LoRA/ControlNet',
    ],
  },
  {
    label: 'Agentic AI',
    items: [
      'Model Context Protocol', 'Agent-to-Agent', 'Agent Development Kit',
      'Google Vertex Agents', 'LangChain', 'LangGraph', 'CrewAI', 'AutoGen',
      'BabyAGI', 'AgentGPT', 'Semantic Kernel', 'ReAct', 'Dify', 'Flowise',
    ],
  },
  {
    label: 'Speech & Audio',
    items: [
      'ffmpeg', 'Whisper STT', 'Coqui TTS', 'Piper TTS', 'ElevenLabs',
      'Google Cloud TTS', 'espeak-ng', 'Oculus Lip Sync', 'SALSA',
      'Azure Speech Services', 'Amazon Polly', 'Wav2Vec', 'DeepSpeech',
      'Tacotron', 'VITS', 'Phoneme Analysis',
    ],
  },
  {
    label: 'Game Engines & VR',
    items: [
      'Unity', 'Unity Sentis', 'Unreal Engine 5', 'MetaHumans', 'Oculus SDK',
      'OpenXR', 'SteamVR', 'XR Interaction Toolkit', 'Godot', 'WebXR',
      'A-Frame', 'Spatial Audio SDK',
    ],
  },
  {
    label: 'Statistical Model Architectures',
    items: [
      'RNN', 'CNN', 'LSTM', 'GAN', 'BERT', 'Transformer', 'T5',
      'Attention Mechanisms', 'Encoder-Decoder Models', 'VAE', 'ResNet',
      'U-Net', 'Graph Neural Networks', 'Diffusion Models',
    ],
  },
  {
    label: 'Procedural Generation',
    items: [
      'Tracery', 'Perlin Noise', 'Wave Function Collapse', 'L-Systems',
      'Markov Chains', 'Context-Free Grammars', 'Cellular Automata',
      'Noise Functions (Simplex, Worley)', 'PCG Algorithms', 'Rule-Based Generation',
    ],
  },
  {
    label: 'Data Analysis & Research',
    items: [
      'R', 'lme4', 'Montreal Forced Aligner', 'NVivo',
      'Python (NumPy, Pandas, SciPy)', 'Matplotlib', 'ggplot2', 'SPSS',
      'Jupyter Notebooks', 'Tableau', 'Statistical Modeling', 'Mixed-Effects Models',
    ],
  },
  {
    label: 'Languages & Frameworks',
    items: [
      'Python', 'Rust', 'Go', 'TypeScript', 'Node.js', 'C#/.NET', 'Clojure',
      'Java', 'React', 'Vue', 'React Native', 'Swift', 'Kotlin',
    ],
  },
  {
    label: 'DevOps/MLOps, Data & Cloud-Native',
    items: [
      'Terraform', 'Helm', 'Chef', 'Ansible', 'Kubernetes', 'Jenkins',
      'Jenkins X', 'CircleCI', 'AWS', 'GCP', 'Grafana', 'Sentry', 'Datadog',
      'Kibana', 'Prometheus', 'GitHub Actions', 'MongoDB', 'PostgreSQL',
      'Drizzle ORM', 'MySQL', 'SQLite', 'Redis', 'Neo4j', 'Prisma',
      'TypeORM', 'Supabase',
    ],
  },
];
