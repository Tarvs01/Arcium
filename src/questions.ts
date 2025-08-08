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

export const questions: questionType[] = [
    {
      "id": 1,
      "question": "What is Arcium primarily described as?",
      "options": {
        "a": "A decentralized social network",
        "b": "A public blockchain",
        "c": "An encrypted supercomputer",
        "d": "A cloud storage provider"
      },
      "answer": "c"
    },
    {
      "id": 2,
      "question": "Which cryptographic technique does Arcium mainly use to compute on encrypted data?",
      "options": {
        "a": "Trusted Execution Environments",
        "b": "Multi‑Party Computation (MPC)",
        "c": "Zero‑Knowledge Proofs",
        "d": "Fully Homomorphic Encryption only"
      },
      "answer": "b"
    },
    {
      "id": 3,
      "question": "What are MXEs in the context of Arcium?",
      "options": {
        "a": "Mobile computing engines",
        "b": "Multi‑party computation execution environments",
        "c": "Marketplace exchange entities",
        "d": "Machine learning models"
      },
      "answer": "b"
    },
    {
      "id": 4,
      "question": "Arcium was initially built on which blockchain?",
      "options": {
        "a": "Ethereum",
        "b": "Bitcoin",
        "c": "Solana",
        "d": "Polkadot"
      },
      "answer": "c"
    },
    {
      "id": 5,
      "question": "What framework/language do developers use to build Arcium smart logic?",
      "options": {
        "a": "Python",
        "b": "Arcis (Rust‑based DSL)",
        "c": "Solidity",
        "d": "JavaScript"
      },
      "answer": "b"
    },
    {
      "id": 6,
      "question": "Which of the following is NOT a key component of MXEs?",
      "options": {
        "a": "FHE",
        "b": "ZK‑Proofs",
        "c": "Multi‑Party Computation",
        "d": "Turing machines"
      },
      "answer": "d"
    },
    {
      "id": 7,
      "question": "One honest participant in MPC guarantees what?",
      "options": {
        "a": "Speed",
        "b": "Privacy",
        "c": "Token price stability",
        "d": "Error detection"
      },
      "answer": "b"
    },
    {
      "id": 8,
      "question": "Arcium’s design is chain‑agnostic. What does this mean?",
      "options": {
        "a": "It only runs on one blockchain",
        "b": "It can operate across multiple blockchains",
        "c": "It avoids using any blockchain",
        "d": "It runs on private ledgers only"
      },
      "answer": "b"
    },
    {
      "id": 9,
      "question": "Which of these is Arcium NOT explicitly targeting?",
      "options": {
        "a": "DeFi",
        "b": "AI",
        "c": "Healthcare",
        "d": "Online gaming only"
      },
      "answer": "d"
    },
    {
      "id": 10,
      "question": "Which previous project did the Arcium team originate from?",
      "options": {
        "a": "Enigma",
        "b": "Secret Network",
        "c": "Elusiv",
        "d": "Manta Network"
      },
      "answer": "c"
    },
    {
      "id": 11,
      "question": "When was Arcium founded?",
      "options": {
        "a": "2020",
        "b": "2021",
        "c": "2022",
        "d": "2023"
      },
      "answer": "c"
    },
    {
      "id": 12,
      "question": "What did Arcium acquire to accelerate its stack?",
      "options": {
        "a": "The Inpher team and core tech",
        "b": "A GPU cloud provider",
        "c": "A decentralized exchange",
        "d": "A wallet company"
      },
      "answer": "a"
    },
    {
      "id": 13,
      "question": "Arcium raised a strategic round of how many million USD in May 2025?",
      "options": {
        "a": "4.5M",
        "b": "5.5M",
        "c": "10M",
        "d": "20M"
      },
      "answer": "b"
    },
    {
      "id": 14,
      "question": "Which investor led Arcium’s $5.5M strategic round?",
      "options": {
        "a": "Coinbase Ventures",
        "b": "Solana Foundation",
        "c": "Greenfield Capital",
        "d": "Jump Crypto"
      },
      "answer": "c"
    },
    {
      "id": 15,
      "question": "Which term refers to the data privacy evolution enabling shared confidential computation?",
      "options": {
        "a": "Privacy 1.0",
        "b": "Privacy 2.0",
        "c": "Zero‑privacy",
        "d": "Privacy-less"
      },
      "answer": "b"
    },
    {
      "id": 16,
      "question": "To whom does a computation customer pay fees in Arcium?",
      "options": {
        "a": "Validator nodes",
        "b": "Node operators in ARX network",
        "c": "Blockchain miners",
        "d": "End users"
      },
      "answer": "b"
    },
    {
      "id": 17,
      "question": "What is arxOS in Arcium?",
      "options": {
        "a": "A crypto wallet",
        "b": "The operating system of the distributed network",
        "c": "A file storage solution",
        "d": "A UI front‑end"
      },
      "answer": "b"
    },
    {
      "id": 18,
      "question": "What is the role of third‑party delegators?",
      "options": {
        "a": "Create smart contracts",
        "b": "Delegate stake to ARX nodes and earn rewards",
        "c": "Design MXEs",
        "d": "Verify ZK‑proofs"
      },
      "answer": "b"
    },
    {
      "id": 19,
      "question": "The Arcium token is used mainly for:",
      "options": {
        "a": "Node collateral and payments for computation",
        "b": "Purchasing NFTs",
        "c": "Social governance only",
        "d": "User authentication"
      },
      "answer": "a"
    },
    {
      "id": 20,
      "question": "Which secure computation methods does Arcium combine inside MXEs?",
      "options": {
        "a": "MPC, ZK proofs, FHE",
        "b": "Proof of Work, MPC",
        "c": "TEE, ZK only",
        "d": "TLS, VPN"
      },
      "answer": "a"
    },
    {
      "id": 21,
      "question": "What property does parallelizing MXEs provide?",
      "options": {
        "a": "Lower cost only",
        "b": "Higher throughput and scalability",
        "c": "Better UX design",
        "d": "Token staking"
      },
      "answer": "b"
    },
    {
      "id": 22,
      "question": "Which of these is a major benefit of Arcium for AI?",
      "options": {
        "a": "Unencrypted training",
        "b": "Encrypted data collaboration",
        "c": "Cheap compute only",
        "d": "Standard cloud API access"
      },
      "answer": "b"
    },
    {
      "id": 23,
      "question": "What does “trustless” mean in Arcium’s context?",
      "options": {
        "a": "No trust required between parties",
        "b": "Transactions never fail",
        "c": "Node operators are anonymous",
        "d": "Chain governance is centralized"
      },
      "answer": "a"
    },
    {
      "id": 24,
      "question": "Who defines MXE parameters for a computation?",
      "options": {
        "a": "Blockchain miners",
        "b": "Computation customers",
        "c": "Node hardware providers",
        "d": "Third‑party auditors"
      },
      "answer": "b"
    },
    {
      "id": 25,
      "question": "What ensures execution integrity in the network?",
      "options": {
        "a": "Staking and slashing mechanisms",
        "b": "Manual audits",
        "c": "User reviews",
        "d": "Off‑chain verification"
      },
      "answer": "a"
    },
    {
      "id": 26,
      "question": "Which ecosystem did Arcium officially launch as part of to accelerate adoption?",
      "options": {
        "a": "Ethereum DeFi Ecosystem",
        "b": "Encrypted Ecosystem on Solana",
        "c": "Binance Smart Chain Hub",
        "d": "Polkadot Substrate Suite"
      },
      "answer": "b"
    },
    {
      "id": 27,
      "question": "Arcium’s ecosystem partners include projects from which sectors?",
      "options": {
        "a": "Only DeFi",
        "b": "DeFi, AI, DePIN, gaming and more",
        "c": "Only healthcare",
        "d": "Only NFTs"
      },
      "answer": "b"
    },
    {
      "id": 28,
      "question": "Arcium’s network architecture is best compared to:",
      "options": {
        "a": "A database",
        "b": "An encrypted supercomputer",
        "c": "A blockchain explorer",
        "d": "A messenger app"
      },
      "answer": "b"
    },
    {
      "id": 29,
      "question": "Which component provides a developer‑friendly interface for MPC circuits?",
      "options": {
        "a": "Arcis",
        "b": "MXE console",
        "c": "arxOS shell",
        "d": "Smart contract SDK"
      },
      "answer": "a"
    },
    {
      "id": 30,
      "question": "What does the Parallel Execution feature refer to?",
      "options": {
        "a": "Running MXEs in series",
        "b": "Running MXEs simultaneously across clusters",
        "c": "Running only one MXE per node",
        "d": "Running unrelated MPC protocols"
      },
      "answer": "b"
    },
    {
      "id": 31,
      "question": "Arcium allows computation on encrypted data without:",
      "options": {
        "a": "Revealing the underlying plaintext",
        "b": "Using blockchain",
        "c": "High performance",
        "d": "Developer tools"
      },
      "answer": "a"
    },
    {
      "id": 32,
      "question": "What ensures that only valid computation results are accepted?",
      "options": {
        "a": "ZK proofs and staking",
        "b": "Manual review",
        "c": "Mining power",
        "d": "Public voting"
      },
      "answer": "a"
    },
    {
      "id": 33,
      "question": "Who co‑founded Arcium and serves as CEO?",
      "options": {
        "a": "Yannik Schrade",
        "b": "Anatoly Yakovenko",
        "c": "Balaji Srinivasan",
        "d": "Alexander Miles"
      },
      "answer": "a"
    },
    {
      "id": 34,
      "question": "Which role handles capital staking and network security?",
      "options": {
        "a": "Computation customer",
        "b": "ARX operator (node operator)",
        "c": "Application user",
        "d": "Governance committee"
      },
      "answer": "b"
    },
    {
      "id": 35,
      "question": "Why is Arcium considered high‑performance compared to FHE?",
      "options": {
        "a": "Because it avoids encryption entirely",
        "b": "Because MPC parallel execution is much faster",
        "c": "Due to faster block confirmations",
        "d": "Because it uses TEE exclusively"
      },
      "answer": "b"
    },
    {
      "id": 36,
      "question": "How is the Arcium token deflationary in high‑demand periods?",
      "options": {
        "a": "Burns part of fees paid",
        "b": "Issues more tokens",
        "c": "Pauses transfers",
        "d": "Switches blockchains"
      },
      "answer": "a"
    },
    {
      "id": 37,
      "question": "Which of the following best describes DeCC?",
      "options": {
        "a": "Decentralized computing composite",
        "b": "Decentralized Confidential Computing",
        "c": "Distributed encrypted currency",
        "d": "Digital encryption coin"
      },
      "answer": "b"
    },
    {
      "id": 38,
      "question": "Arcium supports which types of verticals?",
      "options": {
        "a": "Only AI and DeFi",
        "b": "AI, DeFi, DePIN, healthcare and more",
        "c": "Only gaming",
        "d": "Only e‑commerce"
      },
      "answer": "b"
    },
    {
      "id": 39,
      "question": "What ensures computation tasks are coordinated in Arcium?",
      "options": {
        "a": "Off‑chain scripts",
        "b": "On‑chain orchestration via Solana",
        "c": "User‑submitted tickets",
        "d": "Third‑party cloud"
      },
      "answer": "b"
    },
    {
      "id": 40,
      "question": "A computation customer configures what before sending a job?",
      "options": {
        "a": "MXE parameters",
        "b": "Node hardware specs",
        "c": "Validator identities",
        "d": "Transaction fees"
      },
      "answer": "a"
    },
    {
      "id": 41,
      "question": "Arcium refers to itself as enabling what for data?",
      "options": {
        "a": "Full visibility",
        "b": "Full usability while encrypted",
        "c": "Unrestricted public access",
        "d": "Shared public state"
      },
      "answer": "b"
    },
    {
      "id": 42,
      "question": "How many people approximately were on the core Arcium team at founding?",
      "options": {
        "a": "5",
        "b": "10",
        "c": "20",
        "d": "100"
      },
      "answer": "c"
    },
    {
      "id": 43,
      "question": "What does Arcis override in Rust for secure types?",
      "options": {
        "a": "Native types like u8 and bool",
        "b": "Blockchain primitives",
        "c": "Networking stack",
        "d": "File I/O only"
      },
      "answer": "a"
    },
    {
      "id": 44,
      "question": "Arcium’s testnet strategy includes:",
      "options": {
        "a": "Mainnet only",
        "b": "Private incentivized testnet followed by public testnet",
        "c": "Only private testnet",
        "d": "Only public beta test"
      },
      "answer": "b"
    },
    {
      "id": 45,
      "question": "Which technology did Arcium NOT abandon from Elusiv?",
      "options": {
        "a": "ZEUS compliance system",
        "b": "NFT marketplace",
        "c": "Privacy‑preserving features",
        "d": "Confidential transaction layer"
      },
      "answer": "a"
    },
    {
      "id": 46,
      "question": "What benefit does staking provide in Arcium?",
      "options": {
        "a": "Liquidity mining only",
        "b": "Security collateral and earning rewards",
        "c": "Voting rights only",
        "d": "Free computation credits"
      },
      "answer": "b"
    },
    {
      "id": 47,
      "question": "Why does Arcium combine MPC, FHE, and ZK inside MXEs?",
      "options": {
        "a": "Because each offers complementary privacy guarantees",
        "b": "To reduce code size",
        "c": "To increase visibility of data",
        "d": "To avoid staking"
      },
      "answer": "a"
    },
    {
      "id": 48,
      "question": "In an MPC cluster, each node processes:",
      "options": {
        "a": "The full dataset",
        "b": "A fragment of the data",
        "c": "Encrypted code only",
        "d": "Only public inputs"
      },
      "answer": "b"
    },
    {
      "id": 49,
      "question": "Which phase produces online execution resources?",
      "options": {
        "a": "Online phase",
        "b": "Preprocessing phase",
        "c": "Deployment phase",
        "d": "Verification phase"
      },
      "answer": "b"
    },
    {
      "id": 50,
      "question": "Arcium aims to enable computation across encrypted data while maintaining:",
      "options": {
        "a": "Central trust",
        "b": "Transparency of plaintext",
        "c": "Data privacy and usability",
        "d": "Unencrypted analytics"
      },
      "answer": "c"
    }
  ]
  