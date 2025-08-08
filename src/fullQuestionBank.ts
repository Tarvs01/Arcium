interface questionType{
    id: number,
    question: string,
    options: {
      a: string,
      b: string,
      c: string,
      d: string,
    },
    answer: string
}

export const infrastructure: questionType[] = [
    {
      "id": 1,
      "question": "What does Arcium primarily describe itself as?",
      "options": {
        "a": "A public blockchain",
        "b": "A centralized cloud provider",
        "c": "An encrypted supercomputer",
        "d": "A decentralized social app"
      },
      "answer": "c"
    },
    {
      "id": 2,
      "question": "Which cryptographic technique does Arcium leverage for secure compute?",
      "options": {
        "a": "Trusted Execution Environments (TEEs)",
        "b": "Multi‑Party Computation (MPC)",
        "c": "Zero‑Knowledge Proofs (ZKPs)",
        "d": "Symmetric Encryption"
      },
      "answer": "b"
    },
    {
      "id": 3,
      "question": "What are MXEs in the Arcium architecture?",
      "options": {
        "a": "Centralized compute servers",
        "b": "Multi‑party computation execution environments",
        "c": "Wallet extensions",
        "d": "Smart contract templates"
      },
      "answer": "b"
    },
    {
      "id": 4,
      "question": "What role does arxOS play in Arcium?",
      "options": {
        "a": "User interface for dApps",
        "b": "Distributed operating system for node execution",
        "c": "Mobile app for token trading",
        "d": "Blockchain explorer"
      },
      "answer": "b"
    },
    {
      "id": 5,
      "question": "What are Arx Nodes?",
      "options": {
        "a": "Individual processors participating in MPC clusters",
        "b": "User wallets on Solana",
        "c": "Encrypted data storage services",
        "d": "Front-end UI modules"
      },
      "answer": "a"
    },
    {
      "id": 6,
      "question": "Clusters in Arcium refer to:",
      "options": {
        "a": "Groups of users staking tokens",
        "b": "Sets of Arx Nodes collaborating for computation",
        "c": "Data marketplaces",
        "d": "Smart contract groups"
      },
      "answer": "b"
    },
    {
      "id": 7,
      "question": "Which MPC protocol in Arcium is optimized for high security?",
      "options": {
        "a": "Manticore",
        "b": "Cerberus",
        "c": "SHA‑256",
        "d": "Threshold ECDSA"
      },
      "answer": "b"
    },
    {
      "id": 8,
      "question": "Which MPC protocol in Arcium favors speed and efficiency?",
      "options": {
        "a": "Cerberus",
        "b": "Manticore",
        "c": "RSA‑OAEP",
        "d": "Merkle Proofs"
      },
      "answer": "b"
    },
    {
      "id": 9,
      "question": "Manticore operates under which model?",
      "options": {
        "a": "Dishonest majority",
        "b": "Trusted third party",
        "c": "Honest‑but‑curious (honest majority)",
        "d": "Zero‑trust enclave"
      },
      "answer": "c"
    },
    {
      "id": 10,
      "question": "Cerberus operates under which model?",
      "options": {
        "a": "Honest majority",
        "b": "Dishonest majority",
        "c": "Semi-trusted cloud",
        "d": "Public testnet"
      },
      "answer": "b"
    },
    {
      "id": 11,
      "question": "Which layer acts like virtual machines for computations in Arcium?",
      "options": {
        "a": "Clusters",
        "b": "Arx Nodes",
        "c": "MXEs",
        "d": "Arcis"
      },
      "answer": "c"
    },
    {
      "id": 12,
      "question": "Which component enables developers to define MPC logic?",
      "options": {
        "a": "arxOS",
        "b": "Arcis",
        "c": "Arx Nodes",
        "d": "Cerberus"
      },
      "answer": "b"
    },
    {
      "id": 13,
      "question": "Arcium’s architecture allows computations to remain:",
      "options": {
        "a": "On-chain only",
        "b": "Encrypted throughout execution",
        "c": "Publicly visible",
        "d": "Only in plaintext"
      },
      "answer": "b"
    },
    {
      "id": 14,
      "question": "Only one honest node is required in Arcium to guarantee:",
      "options": {
        "a": "High performance",
        "b": "Privacy of computation",
        "c": "Token price",
        "d": "Cluster formation"
      },
      "answer": "b"
    },
    {
      "id": 15,
      "question": "Clusters provide what key benefit?",
      "options": {
        "a": "Centralized control",
        "b": "Distributed confidential compute",
        "c": "Token minting",
        "d": "Smart contract deployment"
      },
      "answer": "b"
    },
    {
      "id": 16,
      "question": "Which of these is NOT part of Arcium’s confidential compute infrastructure?",
      "options": {
        "a": "Arcis",
        "b": "MXEs",
        "c": "Arx Nodes",
        "d": "Elusiv"
      },
      "answer": "d"
    },
    {
      "id": 17,
      "question": "What ensures honesty in node execution in Arcium?",
      "options": {
        "a": "Manual audits",
        "b": "Staking and slashing mechanisms",
        "c": "User votes",
        "d": "Trusted intermediaries"
      },
      "answer": "b"
    },
    {
      "id": 18,
      "question": "Parallel execution in Arcium refers to:",
      "options": {
        "a": "Sequential MPC steps",
        "b": "Simultaneous cluster computations",
        "c": "Single-threaded compute",
        "d": "Batch transaction signing"
      },
      "answer": "b"
    },
    {
      "id": 19,
      "question": "The encrypted supercomputer metaphor refers to:",
      "options": {
        "a": "Blockchain validators",
        "b": "Decentralized encrypted compute via nodes",
        "c": "Cloud providers",
        "d": "Smart contract libraries"
      },
      "answer": "b"
    },
    {
      "id": 20,
      "question": "Which feature is key to Arcium’s performance advantage over FHE?",
      "options": {
        "a": "Quantum computing",
        "b": "Pre‑processing MPC",
        "c": "Trusted hardware",
        "d": "Smart contracts"
      },
      "answer": "b"
    },
    {
      "id": 21,
      "question": "ArxOS is best described as:",
      "options": {
        "a": "A Solana debank tool",
        "b": "A distributed operating system for Arx nodes",
        "c": "A token swap platform",
        "d": "A blockchain bridge"
      },
      "answer": "b"
    },
    {
      "id": 22,
      "question": "In Arcium, MXEs are admitted by:",
      "options": {
        "a": "Blockchain miners",
        "b": "Arx Nodes",
        "c": "Computation customers",
        "d": "End users"
      },
      "answer": "c"
    },
    {
      "id": 23,
      "question": "What does MPC stand for?",
      "options": {
        "a": "Multi-Party Consensus",
        "b": "Multi-Party Computation",
        "c": "Multi-Private Chain",
        "d": "Modular Privacy Code"
      },
      "answer": "b"
    },
    {
      "id": 24,
      "question": "Clusters can be reused to:",
      "options": {
        "a": "Reduce setup cost and time",
        "b": "Mint tokens",
        "c": "Bypass security",
        "d": "Stake more tokens"
      },
      "answer": "a"
    },
    {
      "id": 25,
      "question": "Arx nodes communicate via:",
      "options": {
        "a": "REST APIs",
        "b": "MPC protocols",
        "c": "Smart wallet connectors",
        "d": "Centralized servers"
      },
      "answer": "b"
    },
    {
      "id": 26,
      "question": "Which article discusses Cerberus and Manticore?",
      "options": {
        "a": "ELI5: Honest Majority vs Dishonest Majority",
        "b": "Arcium ELI5",
        "c": "Architecture Overview",
        "d": "Funding Round"
      },
      "answer": "a"
    },
    {
      "id": 27,
      "question": "Arcium’s infrastructure achieves trustlessness through:",
      "options": {
        "a": "Trusted third parties",
        "b": "MPC and staking incentives",
        "c": "Centralized node control",
        "d": "Government oversight"
      },
      "answer": "b"
    },
    {
      "id": 28,
      "question": "Cerberus is ideal for use cases needing:",
      "options": {
        "a": "Fast AI modeling",
        "b": "Strong security, e.g., financial transactions",
        "c": "Low latency games",
        "d": "Public token transfers"
      },
      "answer": "b"
    },
    {
      "id": 29,
      "question": "Manticore is best suited for:",
      "options": {
        "a": "Privacy-first finance",
        "b": "Speed-intensive applications like AI",
        "c": "Regulated data sharing",
        "d": "Low-security settings"
      },
      "answer": "b"
    },
    {
      "id": 30,
      "question": "Which component makes up the virtual machine layer?",
      "options": {
        "a": "Arcis",
        "b": "MXEs",
        "c": "Cerberus",
        "d": "Solana"
      },
      "answer": "b"
    },
    {
      "id": 31,
      "question": "ArxOS orchestrates:",
      "options": {
        "a": "Token swaps",
        "b": "Encrypted node compute",
        "c": "Social posts",
        "d": "Oracle feeds"
      },
      "answer": "b"
    },
    {
      "id": 32,
      "question": "Clusters are configured by whom?",
      "options": {
        "a": "Computation customers",
        "b": "Staking nodes only",
        "c": "Third-party auditors",
        "d": "End users"
      },
      "answer": "a"
    },
    {
      "id": 33,
      "question": "What ensures Sybil resistance in cluster node selection?",
      "options": {
        "a": "Random node selection mechanisms",
        "b": "Manual entry lists",
        "c": "Single authority",
        "d": "Client-side choice"
      },
      "answer": "a"
    },
    {
      "id": 34,
      "question": "Nodes only see:",
      "options": {
        "a": "Full plaintext data",
        "b": "Encrypted fragments",
        "c": "Public blockchain data",
        "d": "Other nodes’ private keys"
      },
      "answer": "b"
    },
    {
      "id": 35,
      "question": "Arcium’s infrastructure is designed to combine:",
      "options": {
        "a": "Cloud APIs and wallets",
        "b": "Encrypted compute, MPC, and staking",
        "c": "Databases and file storage",
        "d": "Social media and DeFi"
      },
      "answer": "b"
    }
  ]

export const developer_framework: questionType[] = [
    {
      "id": 1,
      "question": "What is Arcis in the Arcium ecosystem?",
      "options": {
        "a": "A decentralized operating system",
        "b": "A Rust-based developer framework (DSL)",
        "c": "A node coordination tool",
        "d": "A blockchain explorer"
      },
      "answer": "b"
    },
    {
      "id": 2,
      "question": "Arcis is primarily used for:",
      "options": {
        "a": "Managing staking",
        "b": "Defining secure MPC circuits",
        "c": "Encrypting network traffic",
        "d": "Minting tokens"
      },
      "answer": "b"
    },
    {
      "id": 3,
      "question": "Which language is Arcis based on?",
      "options": {
        "a": "Python",
        "b": "TypeScript",
        "c": "Rust",
        "d": "Go"
      },
      "answer": "c"
    },
    {
      "id": 4,
      "question": "Which tool integrates with Arcium's Anchor-based workflow?",
      "options": {
        "a": "Python CLI",
        "b": "Arcis CLI",
        "c": "Solana CLI",
        "d": "Rust CLI"
      },
      "answer": "b"
    },
    {
      "id": 5,
      "question": "What does the Arcis compiler transform a Rust program into?",
      "options": {
        "a": "Vanilla bytecode",
        "b": "MPC bytecode for Arx Nodes",
        "c": "Solidity contracts",
        "d": "FHE circuits"
      },
      "answer": "b"
    },
    {
      "id": 6,
      "question": "Arcis enables developers to write confidential programs using familiar:",
      "options": {
        "a": "Python data science tools",
        "b": "Go frameworks",
        "c": "Rust DSL",
        "d": "JavaScript libraries"
      },
      "answer": "c"
    },
    {
      "id": 7,
      "question": "Which integration helps developers use Arcis for AI workflows?",
      "options": {
        "a": "Rust‑only approach",
        "b": "Arcis‑Py via Python tools like Pandas/TensorFlow",
        "c": "Solidity bindings",
        "d": "Go ML API"
      },
      "answer": "b"
    },
    {
      "id": 8,
      "question": "The Arcis framework was simplified via what acquisition?",
      "options": {
        "a": "ZEUS team",
        "b": "Inpher acquisition",
        "c": "Amazon‑backed startup",
        "d": "GitHub open‑source team"
      },
      "answer": "b"
    },
    {
      "id": 9,
      "question": "What does Arcis help mask in code?",
      "options": {
        "a": "Standard data types (e.g. u8, bool)",
        "b": "Blockchain function calls",
        "c": "Network endpoints",
        "d": "Token identifiers"
      },
      "answer": "a"
    },
    {
      "id": 10,
      "question": "Arcis compiler enables conditional switching between encrypted and unencrypted execution.",
      "options": {
        "a": "True",
        "b": "False",
        "c": "Only unencrypted",
        "d": "Only encrypted"
      },
      "answer": "a"
    },
    {
      "id": 11,
      "question": "Arcis integrates with which popular Web3 framework?",
      "options": {
        "a": "Truffle",
        "b": "Anchor on Solana",
        "c": "Brownie",
        "d": "Hardhat"
      },
      "answer": "b"
    },
    {
      "id": 12,
      "question": "Arcis supports AI model development through:",
      "options": {
        "a": "C# APIs",
        "b": "TensorFlow and PyTorch via Arcis-Py",
        "c": "Rust ML-only frameworks",
        "d": "Go ML packages"
      },
      "answer": "b"
    },
    {
      "id": 13,
      "question": "Arcis lowers developer friction by:",
      "options": {
        "a": "Requiring deep cryptographic knowledge",
        "b": "Enabling private compute without learning crypto",
        "c": "Using new programming languages",
        "d": "Replacing Rust"
      },
      "answer": "b"
    },
    {
      "id": 14,
      "question": "Arcis compiles code into bytecode that is executed by:",
      "options": {
        "a": "Blockchain validators",
        "b": "Arx Nodes",
        "c": "Smart wallets",
        "d": "Centralized servers"
      },
      "answer": "b"
    },
    {
      "id": 15,
      "question": "Which domain does Arcis target?",
      "options": {
        "a": "Web2 apps only",
        "b": "Privacy-preserving Web3 and AI",
        "c": "Public token transfers",
        "d": "File storage"
      },
      "answer": "b"
    },
    {
      "id": 16,
      "question": "Arcis complements what core Arcium component?",
      "options": {
        "a": "ARX Token",
        "b": "arxOS and MXEs",
        "c": "Cerberus protocol",
        "d": "Elusiv layer"
      },
      "answer": "b"
    },
    {
      "id": 17,
      "question": "Arcis allows you to define MPC logic as:",
      "options": {
        "a": "Smart contracts only",
        "b": "Confidential Rust circuits",
        "c": "TEEs",
        "d": "Homomorphic templates"
      },
      "answer": "b"
    },
    {
      "id": 18,
      "question": "Arcis hides complexity for developers by offering:",
      "options": {
        "a": "Zero-code interfaces only",
        "b": "Familiar Rust APIs with encryption baked in",
        "c": "Manual encryption steps",
        "d": "Command-line only"
      },
      "answer": "b"
    },
    {
      "id": 19,
      "question": "Which acquisition enhanced Arcis’ performance optimizations?",
      "options": {
        "a": "ZEUS",
        "b": "Inpher",
        "c": "Amazon ML team",
        "d": "CUDA team"
      },
      "answer": "b"
    },
    {
      "id": 20,
      "question": "Arcis is part of what category for Arcium?",
      "options": {
        "a": "Confidential Compute Infrastructure",
        "b": "Developer Framework",
        "c": "Tokenomics",
        "d": "Use Cases"
      },
      "answer": "b"
    },
    {
      "id": 21,
      "question": "With Arcis, developers need to write custom cryptographic code.",
      "options": {
        "a": "True",
        "b": "False",
        "c": "Sometimes",
        "d": "Only for AI"
      },
      "answer": "b"
    },
    {
      "id": 22,
      "question": "Arcis-Py provides interfaces familiar to data scientists like:",
      "options": {
        "a": "Excel",
        "b": "Pandas and TensorFlow",
        "c": "Spark only",
        "d": "Scikit-learn only"
      },
      "answer": "b"
    },
    {
      "id": 23,
      "question": "Arcis enables multi-mode computation based on:",
      "options": {
        "a": "Blockchain speed only",
        "b": "Data type (scalar, boolean, elliptic curve)",
        "c": "Token price",
        "d": "Developer preference"
      },
      "answer": "b"
    },
    {
      "id": 24,
      "question": "Arcis abstracts over which complex operations?",
      "options": {
        "a": "Staking policies",
        "b": "Encryption and MPC circuits",
        "c": "Wallet creation",
        "d": "Governance votes"
      },
      "answer": "b"
    },
    {
      "id": 25,
      "question": "Arcis is to developers as what is to Arx Nodes?",
      "options": {
        "a": "Token",
        "b": "DSL/compiler",
        "c": "Cluster",
        "d": "CLI"
      },
      "answer": "b"
    },
    {
      "id": 26,
      "question": "The Arcis framework compiles circuits that run on:",
      "options": {
        "a": "Elusiv layer",
        "b": "Arx Node clusters (MXEs)",
        "c": "FHE clusters",
        "d": "Smart contracts"
      },
      "answer": "b"
    },
    {
      "id": 27,
      "question": "Arcis makes private AI development in Arcium:",
      "options": {
        "a": "Difficult",
        "b": "Easy and developer-friendly",
        "c": "Impossible",
        "d": "Manual"
      },
      "answer": "b"
    },
    {
      "id": 28,
      "question": "Arcis masks which of the following to ensure security?",
      "options": {
        "a": "Blockchain addresses",
        "b": "Standard types like u8, bool",
        "c": "Cluster IDs",
        "d": "Transaction fees"
      },
      "answer": "b"
    },
    {
      "id": 29,
      "question": "Arcis workflows integrate directly with:",
      "options": {
        "a": "Anchor and Solana SDKs",
        "b": "Ethereum CLI",
        "c": "Hyperledger tools",
        "d": "Truffle"
      },
      "answer": "a"
    },
    {
      "id": 30,
      "question": "Arcis is essential for:",
      "options": {
        "a": "Writing encrypted compute logic",
        "b": "Token swaps",
        "c": "Node coordination",
        "d": "Cluster setup"
      },
      "answer": "a"
    }
  ]

export const tokenomics: questionType[] = [
    {
      "id": 1,
      "question": "What is the total token supply of Arcium?",
      "options": {
        "a": "500 million",
        "b": "1 billion",
        "c": "2 billion",
        "d": "Unlimited"
      },
      "answer": "b"
    },
    {
      "id": 2,
      "question": "What percentage of tokens was allocated to the community?",
      "options": {
        "a": "10%",
        "b": "20%",
        "c": "30%",
        "d": "40%"
      },
      "answer": "b"
    },
    {
      "id": 3,
      "question": "How much of the supply was allocated to core contributors?",
      "options": {
        "a": "10.8%",
        "b": "20.8%",
        "c": "30.8%",
        "d": "40.8%"
      },
      "answer": "b"
    },
    {
      "id": 4,
      "question": "Which share represents the ecosystem & treasury allocation?",
      "options": {
        "a": "18%",
        "b": "22%",
        "c": "28%",
        "d": "32%"
      },
      "answer": "c"
    },
    {
      "id": 5,
      "question": "What distribution was allocated to VCs?",
      "options": {
        "a": "15.4%",
        "b": "18.4%",
        "c": "20.4%",
        "d": "23.4%"
      },
      "answer": "c"
    },
    {
      "id": 6,
      "question": "What share went to angel investors?",
      "options": {
        "a": "3.8%",
        "b": "5.8%",
        "c": "7.8%",
        "d": "10.8%"
      },
      "answer": "b"
    },
    {
      "id": 7,
      "question": "What percentage was allocated to validators?",
      "options": {
        "a": "3%",
        "b": "5%",
        "c": "7%",
        "d": "9%"
      },
      "answer": "b"
    },
    {
      "id": 8,
      "question": "Which mechanism adjusts token supply based on network demand?",
      "options": {
        "a": "Fixed inflation",
        "b": "Dynamic supply",
        "c": "Static burn only",
        "d": "No adjustment"
      },
      "answer": "b"
    },
    {
      "id": 9,
      "question": "During high demand periods, Arcium's tokenomics can become:",
      "options": {
        "a": "Inflationary only",
        "b": "Deflationary via burning",
        "c": "Unchanged",
        "d": "Disinflationary only"
      },
      "answer": "b"
    },
    {
      "id": 10,
      "question": "Which tokens are eligible for staking?",
      "options": {
        "a": "All tokens",
        "b": "Only unlocked tokens",
        "c": "Only vested tokens",
        "d": "Locked and unlocked"
      },
      "answer": "b"
    },
    {
      "id": 11,
      "question": "What event featured a fully unlocked community round?",
      "options": {
        "a": "Public testnet launch",
        "b": "Token Generation Event (TGE)",
        "c": "Mainnet launch",
        "d": "Fair launch"
      },
      "answer": "b"
    },
    {
      "id": 12,
      "question": "When did the community round happen?",
      "options": {
        "a": "Jan 2025",
        "b": "Mar–Apr 2025",
        "c": "May 2024",
        "d": "Jul 2025"
      },
      "answer": "b"
    },
    {
      "id": 13,
      "question": "Which platform hosted Arcium's community round?",
      "options": {
        "a": "Binance Launchpad",
        "b": "CoinList",
        "c": "Gate.io",
        "d": "CoinGecko"
      },
      "answer": "b"
    },
    {
      "id": 14,
      "question": "Why were locked tokens excluded from staking?",
      "options": {
        "a": "To reduce complexity",
        "b": "To ensure fairness",
        "c": "To penalize early buyers",
        "d": "To centralize control"
      },
      "answer": "b"
    },
    {
      "id": 15,
      "question": "What is one of the primary uses of the ARX token?",
      "options": {
        "a": "Governance voting",
        "b": "Node collateral and computation payments",
        "c": "NFT minting",
        "d": "Identity verification"
      },
      "answer": "b"
    },
    {
      "id": 16,
      "question": "Node operators must stake ARX tokens as:",
      "options": {
        "a": "Fees",
        "b": "Collateral",
        "c": "Donations",
        "d": "Random deposits"
      },
      "answer": "b"
    },
    {
      "id": 17,
      "question": "Node operators earn:",
      "options": {
        "a": "Request volume only",
        "b": "Rewards from computation work",
        "c": "Governance tokens only",
        "d": "No incentives"
      },
      "answer": "b"
    },
    {
      "id": 18,
      "question": "Who can delegate stake to Arx nodes?",
      "options": {
        "a": "Only node operators",
        "b": "Third‑party delegators",
        "c": "Only team members",
        "d": "No delegation allowed"
      },
      "answer": "b"
    },
    {
      "id": 19,
      "question": "Which mechanism enforces execution integrity?",
      "options": {
        "a": "Off‑chain audits",
        "b": "Staking and slashing",
        "c": "User ratings",
        "d": "Central authority"
      },
      "answer": "b"
    },
    {
      "id": 20,
      "question": "What happens if a node misbehaves?",
      "options": {
        "a": "It receives extra rewards",
        "b": "Its stake is slashed",
        "c": "Nothing happens",
        "d": "It’s promoted"
      },
      "answer": "b"
    },
    {
      "id": 21,
      "question": "What ensures operations are transparent and scheduled?",
      "options": {
        "a": "Private forums",
        "b": "Epoch-based orchestration on Solana",
        "c": "Central dashboard",
        "d": "Email alerts"
      },
      "answer": "b"
    },
    {
      "id": 22,
      "question": "Which investor led the $5.5M strategic round?",
      "options": {
        "a": "Coinbase Ventures",
        "b": "Greenfield Capital",
        "c": "Heartcore Capital",
        "d": "LongHash VC"
      },
      "answer": "b"
    },
    {
      "id": 23,
      "question": "What was the total capital raised including prior rounds?",
      "options": {
        "a": "$5 million",
        "b": "$9 million",
        "c": "$14 million",
        "d": "$20 million"
      },
      "answer": "b"
    },
    {
      "id": 24,
      "question": "Which early project did the Arcium team originate from?",
      "options": {
        "a": "Manta Network",
        "b": "Secret Network",
        "c": "Elusiv",
        "d": "Enigma"
      },
      "answer": "c"
    },
    {
      "id": 25,
      "question": "Which of these investors participated in Arcium’s round besides Greenfield?",
      "options": {
        "a": "Binance Labs",
        "b": "Coinbase",
        "c": "Andreessen Horowitz",
        "d": "Sequoia"
      },
      "answer": "b"
    },
    {
      "id": 26,
      "question": "Total fundraising reported by CoinLaunch in 2025 was over:",
      "options": {
        "a": "$5M",
        "b": "$10M",
        "c": "$15M",
        "d": "$20M"
      },
      "answer": "b"
    },
    {
      "id": 27,
      "question": "What unique approach did Arcium take for community incentives?",
      "options": {
        "a": "Airdrop rewards",
        "b": "Rewarding meaningful contributions",
        "c": "Play-to-earn games",
        "d": "Referral bonuses"
      },
      "answer": "b"
    },
    {
      "id": 28,
      "question": "Arcium's dynamic supply mechanism adapts via:",
      "options": {
        "a": "Fixed schedule only",
        "b": "Inflation and burn strategies",
        "c": "VC decisions",
        "d": "Token holder votes"
      },
      "answer": "b"
    },
    {
      "id": 29,
      "question": "Who sets computation pricing each epoch?",
      "options": {
        "a": "Governance council",
        "b": "Node operators",
        "c": "End users",
        "d": "Token holders via airdrop"
      },
      "answer": "b"
    },
    {
      "id": 30,
      "question": "Where is orchestration managed on-chain?",
      "options": {
        "a": "Ethereum",
        "b": "Binance Smart Chain",
        "c": "Solana",
        "d": "Polkadot"
      },
      "answer": "c"
    },
    {
      "id": 31,
      "question": "Network demand increases may trigger:",
      "options": {
        "a": "Token inflation freeze",
        "b": "Token burning (deflation)",
        "c": "Token duplication",
        "d": "Token vesting extension"
      },
      "answer": "b"
    },
    {
      "id": 32,
      "question": "Epochs help manage:",
      "options": {
        "a": "Reward distribution, scheduling, lock-up periods",
        "b": "Token supply only",
        "c": "Governance votes only",
        "d": "Smart contract creation"
      },
      "answer": "a"
    },
    {
      "id": 33,
      "question": "Arx node operators can also:",
      "options": {
        "a": "Set delegation fees",
        "b": "Issue tokens",
        "c": "Execute smart contracts",
        "d": "Control governance alone"
      },
      "answer": "a"
    },
    {
      "id": 34,
      "question": "Dynamic supply helps ensure:",
      "options": {
        "a": "Volatile pricing only",
        "b": "Economic sustainability",
        "c": "Only deflation",
        "d": "Only inflation"
      },
      "answer": "b"
    },
    {
      "id": 35,
      "question": "Why did Arcium prioritize full unlock at TGE?",
      "options": {
        "a": "To centralize control",
        "b": "To maximize airdrop reach",
        "c": "To allow immediate governance and staking participation",
        "d": "To delay user access"
      },
      "answer": "c"
    }
  ]

export const applications: questionType[] = [
    {
      "id": 1,
      "question": "Which of the following is a key use case of Arcium?",
      "options": {
        "a": "Email marketing",
        "b": "On-chain computation over encrypted data",
        "c": "Website hosting",
        "d": "Token bridging"
      },
      "answer": "b"
    },
    {
      "id": 2,
      "question": "Arcium allows developers to run computations on encrypted data without:",
      "options": {
        "a": "Sending it to a node",
        "b": "Decrypting it",
        "c": "Paying gas fees",
        "d": "Writing smart contracts"
      },
      "answer": "b"
    },
    {
      "id": 3,
      "question": "What is one application of Arcium in the healthcare sector?",
      "options": {
        "a": "Predicting stock trends",
        "b": "Secure medical data analysis",
        "c": "Advertising new drugs",
        "d": "Insurance billing"
      },
      "answer": "b"
    },
    {
      "id": 4,
      "question": "How does Arcium support AI workflows?",
      "options": {
        "a": "By training neural networks from scratch",
        "b": "By allowing on-chain inference over private data",
        "c": "By building AI LLMs",
        "d": "By running GPU farms"
      },
      "answer": "b"
    },
    {
      "id": 5,
      "question": "Which of the following best describes a computation example for Arcium?",
      "options": {
        "a": "Hashing wallet addresses",
        "b": "Computing a loan approval score using private inputs",
        "c": "Serving web pages",
        "d": "Generating NFTs"
      },
      "answer": "b"
    },
    {
      "id": 6,
      "question": "What role can Arcium play in on-chain voting?",
      "options": {
        "a": "Host voting dashboards",
        "b": "Allow private ballots with verifiable results",
        "c": "Encrypt vote results permanently",
        "d": "Randomize vote weights"
      },
      "answer": "b"
    },
    {
      "id": 7,
      "question": "How does Arcium enhance DeFi privacy?",
      "options": {
        "a": "Through privacy-preserving order books",
        "b": "By hiding wallet balances",
        "c": "Through staking pools",
        "d": "Through on-chain taxes"
      },
      "answer": "a"
    },
    {
      "id": 8,
      "question": "Which computation scenario is ideal for Arcium?",
      "options": {
        "a": "Rendering 3D video",
        "b": "Aggregating credit scores from private data",
        "c": "Tracking token prices",
        "d": "Running Discord bots"
      },
      "answer": "b"
    },
    {
      "id": 9,
      "question": "Arcium’s system can be applied to biometric authentication by:",
      "options": {
        "a": "Storing retina scans on-chain",
        "b": "Attesting liveness and identity without revealing raw data",
        "c": "Issuing ID cards",
        "d": "Broadcasting facial images"
      },
      "answer": "b"
    },
    {
      "id": 10,
      "question": "What does Arcium enable for fintech apps?",
      "options": {
        "a": "Building wallets",
        "b": "Processing encrypted financial records without leaking user data",
        "c": "Creating flash loan bots",
        "d": "Serving fiat payments"
      },
      "answer": "b"
    },
    {
      "id": 11,
      "question": "Which of the following is NOT a primary use case of Arcium?",
      "options": {
        "a": "Encrypted computation",
        "b": "DeFi prediction markets",
        "c": "On-chain generative AI",
        "d": "Token vesting"
      },
      "answer": "d"
    },
    {
      "id": 12,
      "question": "What kind of zk-based attestation can Arcium help build?",
      "options": {
        "a": "Zero-check confirmations",
        "b": "Biometric zk attestations",
        "c": "Wallet syncing proofs",
        "d": "Offline airdrop receipts"
      },
      "answer": "b"
    },
    {
      "id": 13,
      "question": "Which feature makes Arcium ideal for collaborative analytics?",
      "options": {
        "a": "Open source SDK",
        "b": "Ability to run federated analytics on encrypted multi-party data",
        "c": "Private L2 bridge",
        "d": "Blockchain snapshots"
      },
      "answer": "b"
    },
    {
      "id": 14,
      "question": "Which enterprise sector could benefit most from Arcium’s secure computation?",
      "options": {
        "a": "Online gaming",
        "b": "Government census collection",
        "c": "Digital marketing",
        "d": "Content streaming"
      },
      "answer": "b"
    },
    {
      "id": 15,
      "question": "Which type of insurance calculation can Arcium handle privately?",
      "options": {
        "a": "User premium calculation using private health metrics",
        "b": "Premium payments in crypto",
        "c": "Advertisement targeting",
        "d": "Referral scoring"
      },
      "answer": "a"
    },
    {
      "id": 16,
      "question": "How can Arcium support secure payroll systems?",
      "options": {
        "a": "Generating payslips",
        "b": "Computing salary based on encrypted productivity data",
        "c": "Issuing tokens to employees",
        "d": "Running HR surveys"
      },
      "answer": "b"
    },
    {
      "id": 17,
      "question": "How does Arcium support DAOs?",
      "options": {
        "a": "By providing social tools",
        "b": "By enabling privacy-preserving voting and analytics",
        "c": "By issuing DAO tokens",
        "d": "By running Discord moderation"
      },
      "answer": "b"
    },
    {
      "id": 18,
      "question": "What kind of games can benefit from Arcium?",
      "options": {
        "a": "Private multiplayer games with hidden logic or states",
        "b": "Play-to-earn with staking",
        "c": "Open world sandbox only",
        "d": "Text-based card games only"
      },
      "answer": "a"
    },
    {
      "id": 19,
      "question": "How can Arcium support data marketplaces?",
      "options": {
        "a": "Providing visualization dashboards",
        "b": "Enabling compute-over-data without data exposure",
        "c": "Building chat systems",
        "d": "Sending encrypted emails"
      },
      "answer": "b"
    },
    {
      "id": 20,
      "question": "Arcium helps build zk-based recommendation systems by:",
      "options": {
        "a": "Mining blockchain activity",
        "b": "Running encrypted inference without revealing inputs or model weights",
        "c": "Filtering spam comments",
        "d": "Deploying web extensions"
      },
      "answer": "b"
    },
    {
      "id": 21,
      "question": "Which voting use case can be supported by Arcium?",
      "options": {
        "a": "Proof-of-participation only",
        "b": "Secret ballots with zk proofs of vote validity",
        "c": "Snapshot voting on Twitter",
        "d": "Staking rewards for votes"
      },
      "answer": "b"
    },
    {
      "id": 22,
      "question": "Which private computation use case is possible with Arcium?",
      "options": {
        "a": "Running machine learning on-chain over public datasets",
        "b": "Running inference over encrypted user data in DeFi apps",
        "c": "Running cross-chain swaps",
        "d": "Hashing Ethereum transactions"
      },
      "answer": "b"
    },
    {
      "id": 23,
      "question": "Which company category could use Arcium for privacy-preserving analytics?",
      "options": {
        "a": "Telecom providers",
        "b": "Data brokers",
        "c": "Digital advertising agencies",
        "d": "All of the above"
      },
      "answer": "d"
    },
    {
      "id": 24,
      "question": "What kind of DeFi scoring can be done privately using Arcium?",
      "options": {
        "a": "Chain ID generation",
        "b": "Private on-chain credit scoring using encrypted transaction history",
        "c": "Public APY listings",
        "d": "Token minting"
      },
      "answer": "b"
    },
    {
      "id": 25,
      "question": "How can Arcium be used in education?",
      "options": {
        "a": "Building LMS systems",
        "b": "Verifying credentials and test scores privately",
        "c": "Video conferencing",
        "d": "Fee collection"
      },
      "answer": "b"
    },
    {
      "id": 26,
      "question": "What biometric factor can be privately attested using Arcium?",
      "options": {
        "a": "Age",
        "b": "Face ID without revealing the image",
        "c": "Height",
        "d": "Voice pitch"
      },
      "answer": "b"
    },
    {
      "id": 27,
      "question": "What kind of AI is best integrated with Arcium?",
      "options": {
        "a": "Language translation only",
        "b": "Inference models requiring sensitive inputs",
        "c": "Image generation models",
        "d": "Data labeling tools"
      },
      "answer": "b"
    },
    {
      "id": 28,
      "question": "Arcium’s ability to operate on encrypted data supports which zero-trust principle?",
      "options": {
        "a": "Always assume breach",
        "b": "Encrypt and ignore",
        "c": "Hide everything",
        "d": "Open data models"
      },
      "answer": "a"
    },
    {
      "id": 29,
      "question": "How does Arcium contribute to data sovereignty?",
      "options": {
        "a": "By giving users full control over computation on their data",
        "b": "By centralizing compute access",
        "c": "By hiding data location",
        "d": "By archiving all data"
      },
      "answer": "a"
    },
    {
      "id": 30,
      "question": "Which logistics sector task can Arcium improve?",
      "options": {
        "a": "Vehicle leasing",
        "b": "Routing optimization based on encrypted route and demand data",
        "c": "Shipping package wrapping",
        "d": "Label design"
      },
      "answer": "b"
    },
    {
      "id": 31,
      "question": "What makes Arcium different from other ZK platforms?",
      "options": {
        "a": "Its use of GPUs only",
        "b": "Encrypted inputs and outputs with verifiable computation",
        "c": "Low transaction fees",
        "d": "NFT staking tools"
      },
      "answer": "b"
    },
    {
      "id": 32,
      "question": "In what type of app can Arcium’s private compute reduce legal risk?",
      "options": {
        "a": "Wallet apps",
        "b": "Medical records apps",
        "c": "NFT trading platforms",
        "d": "Chat messengers"
      },
      "answer": "b"
    },
    {
      "id": 33,
      "question": "Which feature enables verifiability in Arcium computations?",
      "options": {
        "a": "Off-chain logs",
        "b": "Zero-knowledge proofs",
        "c": "User dashboards",
        "d": "Smart contract receipts"
      },
      "answer": "b"
    },
    {
      "id": 34,
      "question": "How can Arcium be used for confidential business collaboration?",
      "options": {
        "a": "Zoom meetings",
        "b": "Running encrypted joint analytics over shared datasets",
        "c": "Telegram chats",
        "d": "Storing contacts"
      },
      "answer": "b"
    },
    {
      "id": 35,
      "question": "Arcium’s computation model is ideal for apps that require:",
      "options": {
        "a": "Social interactions",
        "b": "Real-time messaging",
        "c": "Trustless execution of private logic",
        "d": "Video editing"
      },
      "answer": "c"
    }
  ]

export const general: questionType[] = [
    {
      "id": 1,
      "question": "In which year was the Arcium project publicly introduced?",
      "options": {
        "a": "2021",
        "b": "2022",
        "c": "2023",
        "d": "2024"
      },
      "answer": "c"
    },
    {
      "id": 2,
      "question": "Arcium focuses primarily on what type of computation?",
      "options": {
        "a": "High-performance cloud computing",
        "b": "Confidential and encrypted computation",
        "c": "Gaming compute",
        "d": "Graphics rendering"
      },
      "answer": "b"
    },
    {
      "id": 3,
      "question": "Which company acquired Inpher to strengthen Arcium’s development?",
      "options": {
        "a": "OpenAI",
        "b": "Arcium",
        "c": "Consensys",
        "d": "Parity"
      },
      "answer": "b"
    },
    {
      "id": 4,
      "question": "Who is one of the notable co-founders of Arcium?",
      "options": {
        "a": "Vitalik Buterin",
        "b": "Dmitry Khovratovich",
        "c": "Dan Boneh",
        "d": "Zaki Manian"
      },
      "answer": "d"
    },
    {
      "id": 5,
      "question": "The Arcium project was launched to solve what major challenge?",
      "options": {
        "a": "Blockchain scalability",
        "b": "DeFi composability",
        "c": "Confidential computing at scale",
        "d": "Zero gas transactions"
      },
      "answer": "c"
    },
    {
      "id": 6,
      "question": "Which privacy-focused technology does Arcium heavily rely on?",
      "options": {
        "a": "zk-SNARKs",
        "b": "Multi-party computation (MPC)",
        "c": "FHE only",
        "d": "TEE-only infrastructure"
      },
      "answer": "b"
    },
    {
      "id": 7,
      "question": "Which major funding round did Arcium announce in 2024?",
      "options": {
        "a": "Seed",
        "b": "Series A",
        "c": "Strategic round",
        "d": "Public sale"
      },
      "answer": "c"
    },
    {
      "id": 8,
      "question": "Who led Arcium’s strategic funding round in 2024?",
      "options": {
        "a": "Paradigm",
        "b": "Polychain Capital",
        "c": "a16z",
        "d": "Multicoin Capital"
      },
      "answer": "b"
    },
    {
      "id": 9,
      "question": "Arcium's long-term goal is to enable a:",
      "options": {
        "a": "Decentralized database system",
        "b": "Privacy-first compute network",
        "c": "Global gaming infrastructure",
        "d": "Centralized ML cloud"
      },
      "answer": "b"
    },
    {
      "id": 10,
      "question": "What’s the name of Arcium’s decentralized compute operating system?",
      "options": {
        "a": "Arcos",
        "b": "arxOS",
        "c": "ZKVM OS",
        "d": "ArcNode"
      },
      "answer": "b"
    },
    {
      "id": 11,
      "question": "What does the name 'Arcium' reference?",
      "options": {
        "a": "Advanced Resources for Compute in Unified Models",
        "b": "A fictional mineral in a sci-fi novel",
        "c": "A nod to 'Ark' and 'Secure Compute'",
        "d": "It's a play on 'Arx' and 'ium' to denote a system"
      },
      "answer": "d"
    },
    {
      "id": 12,
      "question": "Which of the following best describes Arcium’s mission?",
      "options": {
        "a": "To build a new L1 blockchain",
        "b": "To enable encrypted compute over private data",
        "c": "To replace cloud storage",
        "d": "To tokenize all real-world assets"
      },
      "answer": "b"
    },
    {
      "id": 13,
      "question": "What background does Zaki Manian bring to Arcium?",
      "options": {
        "a": "Cloud engineering",
        "b": "Zero-knowledge proofs",
        "c": "Blockchain interoperability and crypto infrastructure",
        "d": "Hardware acceleration"
      },
      "answer": "c"
    },
    {
      "id": 14,
      "question": "Before founding Arcium, Zaki Manian was involved with which projects?",
      "options": {
        "a": "Solana and Circle",
        "b": "Sommelier and Cosmos",
        "c": "Polygon and StarkWare",
        "d": "Chainlink and Polkadot"
      },
      "answer": "b"
    },
    {
      "id": 15,
      "question": "What was a key motivation behind Arcium’s formation?",
      "options": {
        "a": "To improve DeFi yield farming",
        "b": "To bring encrypted AI compute on-chain",
        "c": "To launch a decentralized exchange",
        "d": "To offer lower fees on Ethereum"
      },
      "answer": "b"
    },
    {
      "id": 16,
      "question": "The Arcium network is composed of which core unit?",
      "options": {
        "a": "Validator shards",
        "b": "ARX node clusters",
        "c": "Oracles",
        "d": "Layer 2 chains"
      },
      "answer": "b"
    },
    {
      "id": 17,
      "question": "Arcium’s development was strengthened by acquiring which MPC company?",
      "options": {
        "a": "Mina Protocol",
        "b": "Inpher",
        "c": "Evervault",
        "d": "Sismo"
      },
      "answer": "b"
    },
    {
      "id": 18,
      "question": "Which area does Arcium NOT primarily focus on?",
      "options": {
        "a": "Encrypted data processing",
        "b": "Confidential AI inference",
        "c": "Blockchain bridges",
        "d": "Secure multi-party computation"
      },
      "answer": "c"
    },
    {
      "id": 19,
      "question": "Which term is often used to describe Arcium's computation capabilities?",
      "options": {
        "a": "Verifiable delay functions",
        "b": "Encrypted supercomputer",
        "c": "Gasless blockchain",
        "d": "SocialFi engine"
      },
      "answer": "b"
    },
    {
      "id": 20,
      "question": "What unique feature allows Arcium to compute on encrypted data?",
      "options": {
        "a": "ZKML",
        "b": "FHE exclusively",
        "c": "A blend of MPC and ZK",
        "d": "Decentralized file storage"
      },
      "answer": "c"
    },
    {
      "id": 21,
      "question": "Which term best describes Arcium’s go-to-market verticals?",
      "options": {
        "a": "DeFi only",
        "b": "Private AI, KYC, and Health Data",
        "c": "NFTs and Games",
        "d": "DAOs only"
      },
      "answer": "b"
    },
    {
      "id": 22,
      "question": "What kind of applications is Arcium targeting?",
      "options": {
        "a": "Confidential apps across sectors like identity and finance",
        "b": "Only on-chain voting",
        "c": "Gaming DApps",
        "d": "Metaverse integrations"
      },
      "answer": "a"
    },
    {
      "id": 23,
      "question": "Which term is used to refer to Arcium’s privacy compute units?",
      "options": {
        "a": "Smart contracts",
        "b": "MXEs",
        "c": "Zero nodes",
        "d": "ZK clusters"
      },
      "answer": "b"
    },
    {
      "id": 24,
      "question": "Which problem does Arcium aim to solve better than traditional ZK systems?",
      "options": {
        "a": "Token generation",
        "b": "Scaling consensus",
        "c": "Handling complex compute on encrypted data",
        "d": "Simple wallet management"
      },
      "answer": "c"
    },
    {
      "id": 25,
      "question": "What sets Arcium apart from other privacy-preserving compute projects?",
      "options": {
        "a": "Token price stability",
        "b": "User-friendly dashboards",
        "c": "Practical MPC-based compute for real-world data",
        "d": "NFT-based governance"
      },
      "answer": "c"
    }
  ]
  
  