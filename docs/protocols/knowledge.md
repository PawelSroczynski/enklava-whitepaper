---
id: knowledge
title: "Knowledge Protocol"
sidebar_label: "Knowledge"
sidebar_position: 5
---

# Knowledge Protocol

> *If it's not in your hands, it can be taken.*

---

## The Dependency

| What You Rent | The Risk |
|---------------|----------|
| Cloud storage | Terms change. Accounts banned. Data lost. |
| Social platforms | Algorithms control what you see |
| Streaming education | Subscriptions expire. Content disappears. |
| Centralized search | Results filtered by unknown criteria |
| SaaS tools | Vendor lock-in. Price hikes. Shutdown. |

You don't own your knowledge. You access it — at the pleasure of platform owners.

---

## The Solution

Enklava builds **Local-First Knowledge Infrastructure** — documentation, monitoring, and skills that can't be deleted.

### Core Principle

If Enklava disappeared tomorrow, could you:
- Maintain your systems?
- Repair failures?
- Train your neighbors?
- Continue building?

**The answer must be: Yes.**

---

## Components

### 1. Digital Twin ("The Mirror")

Real-time monitoring of all physical systems.

```
┌─────────────────────────────────────────────┐
│               DIGITAL TWIN                   │
│         (Local-First Server)                │
├─────────────────────────────────────────────┤
│                                             │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐     │
│  │ Energy  │  │  Water  │  │ Climate │     │
│  │ Sensors │  │ Sensors │  │ Sensors │     │
│  └────┬────┘  └────┬────┘  └────┬────┘     │
│       │            │            │           │
│       └────────────┼────────────┘           │
│                    │                        │
│              ┌─────▼─────┐                  │
│              │  LOCAL    │                  │
│              │  SERVER   │                  │
│              │           │                  │
│              │ • SQLite  │                  │
│              │ • TimeSeries │                │
│              │ • Dashboard  │               │
│              └─────┬─────┘                  │
│                    │                        │
│              ┌─────▼─────┐                  │
│              │  DISPLAY  │                  │
│              │  (Local)  │                  │
│              └───────────┘                  │
│                                             │
│         Optional: Sync to Bio-Dashboard     │
│                   (stats.enklava.co)        │
└─────────────────────────────────────────────┘
```

| Data Collected | Sensor | Purpose |
|----------------|--------|---------|
| Energy generation | Smart meter | Verify production |
| Battery state | BMS interface | Optimize storage |
| Water levels | Ultrasonic | Prevent shortage |
| Temperature | Thermistors | Climate control |
| Humidity | DHT22 | Greenhouse management |
| Soil moisture | Capacitive | Irrigation timing |
| Air quality | CO₂, VOC | Health monitoring |

**Storage:** Local first. Optional cloud sync for redundancy/sharing.

### 2. Bio-Dashboard ("The Transparency")

Public-facing verification of regenerative impact.

| Metric | Source | Display |
|--------|--------|---------|
| kWh generated | Energy Protocol | Real-time counter |
| CO₂ sequestered | Building materials | Running total |
| Water harvested | Tank sensors | Annual cumulative |
| Food produced | Manual logging | Kg per season |
| EKLV distributed | Blockchain | Verified on-chain |

**URL:** stats.enklava.co (aggregated from all nodes)

**Purpose:** Prove the P/E ratio of regenerative infrastructure without trusting a PDF.

### 3. EnklavaLab ("The Knowledge Engine")

Subscription community for learning and documentation.

| Feature | Description |
|---------|-------------|
| **Blueprints** | Full construction drawings, DXF/PDF |
| **SOPs** | 53+ step-by-step procedures |
| **Video library** | Every build step documented |
| **Live courses** | Monthly workshops, Q&A |
| **Mentorship** | Access to experienced builders |
| **Templates** | Project planning, BOM, timelines |

**Business Model:**

| Tier | Price | Access |
|------|-------|--------|
| Free | €0 | Basic documentation |
| Builder | €19/month | Full library + community |
| Professional | €99/month | Commercial use + priority support |

**Token Link:** 20% of subscription revenue → EKLV buybacks.

### 4. Maker Space ("The Incubator")

On-site fabrication for physical production.

| Equipment | Function |
|-----------|----------|
| CNC router | Wood/metal cutting |
| 3D printers | Prototyping, custom parts |
| Laser cutter | Precision work |
| Welding station | Metal fabrication |
| Woodworking tools | Furniture, construction |
| Electronics bench | Sensor assembly, repair |

**Model:** Shared resource at settlement scale. Members book time, share costs.

**Revenue potential:** Members can launch physical businesses (furniture, ceramics, electronics) and share revenue with the DAO.

### 5. Compute Swarm ("The Hive Mind")

Distributed AI inference across settlement nodes — LLMs without cloud dependency.

```
┌─────────────────────────────────────────────────────────────┐
│              Coordination Layer (Tailscale Mesh)             │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ Coordination│  │    DHT      │  │   DERP Relays       │  │
│  │   Server    │  │  Bootstrap  │  │   (fallback)        │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                    Encrypted WireGuard Mesh
                              │
┌─────────────────────────────────────────────────────────────┐
│                      Compute Nodes                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │ Maker Space │  │Home Desktop │  │   Laptop (idle)     │  │
│  │  RTX 4090   │  │  RTX 3060   │  │    8GB VRAM         │  │
│  │ Layers 0-15 │  │ Layers 16-24│  │   Layers 25-31      │  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

#### The Dependency (AI Edition)

| What You Rent | The Risk |
|---------------|----------|
| OpenAI API | Rate limits. Censorship. Price hikes. Shutdown. |
| Cloud GPU | €2-5/hour. Data leaves your control. |
| Managed AI services | Vendor lock-in. Terms of service changes. |

**Solution:** Run 70B+ parameter models across settlement GPUs using **Petals** — 5-10 tokens/second, sufficient for most applications.

#### How It Works

**Pipeline parallelism** splits transformer layers across devices proportional to VRAM:

| Device | VRAM | Layers Hosted | Role |
|--------|------|---------------|------|
| RTX 4090 (Maker Space) | 24GB | 12-15 layers | Heavy lifting |
| Home desktop | 12GB | 6-8 layers | Regular contributor |
| Idle laptop | 8GB | 4-5 layers | Opportunistic |

**Bandwidth requirements:**
- Single-batch inference: 10-50 Mbps (home internet viable)
- Batch processing: 100-500 Mbps
- Production throughput: 1+ Gbps

#### Software Stack

| Component | Tool | Purpose |
|-----------|------|---------|
| **Inference** | Petals | Distributed LLM, auto-coordination via DHT |
| **Networking** | Tailscale | NAT traversal, encrypted mesh |
| **Orchestration** | Nomad | GPU-aware job scheduling |
| **Idle harvesting** | Custom daemon | Contribute resources only when unused |

#### Idle Resource Harvesting

Workstations contribute GPU cycles when users are away:

| Trigger | Action |
|---------|--------|
| 5 min keyboard/mouse idle + GPU ≤5% | Start Petals server |
| User activity detected | Graceful preemption (30s checkpoint) |
| Power failure | Automatic resume on DHT reconnect |

**Result:** 90-95% individual node reliability through redundancy.

#### Performance Expectations

| Configuration | Model | Speed | Use Case |
|---------------|-------|-------|----------|
| Single RTX 4090 | Llama 3 8B | 50-80 tok/s | Fast local queries |
| 3-node swarm | Llama 70B | 5-6 tok/s | Complex reasoning |
| 6-node heterogeneous | Falcon 180B | 3-4 tok/s | Research, batch |

**Fault tolerance:** Petals caches activations, enabling instant rerouting when nodes disconnect. Swarm remains functional with 30-40% node churn.

#### Security Model

| Swarm Type | Trust Model | Data Protection |
|------------|-------------|-----------------|
| **Private (settlement)** | Trusted participants | Token-authenticated, encrypted libp2p |
| **Public (volunteer)** | Untrusted nodes | Prompts visible to servers, use for non-sensitive |

For sensitive queries, keep inference on trusted local nodes only.

#### Integration with Digital Twin

The Compute Swarm feeds into and consumes from the Digital Twin:

| Flow | Data |
|------|------|
| **In** | Sensor data for predictive analytics |
| **Out** | Inference results, anomaly detection |
| **Monitoring** | GPU utilization, token throughput, node health |

---

## Documentation System

### The SOP Library

Standardized procedures for everything.

| Category | Example SOPs |
|----------|--------------|
| **Construction** | Yurt assembly, Bio-panel fabrication, Foundation |
| **Energy** | Solar installation, Battery commissioning, Inverter setup |
| **Water** | Tank installation, Filter maintenance, Reed bed construction |
| **Food** | Greenhouse setup, Composting, Fermentation |
| **Compute** | Petals node setup, Tailscale mesh config, Idle daemon install |
| **Maintenance** | Seasonal checklists, Troubleshooting, Repair |
| **Safety** | Emergency procedures, First aid, Fire prevention |

### Format

Each SOP includes:
- **Video walkthrough** (YouTube + local backup)
- **Written steps** (Markdown, translatable)
- **Bill of Materials** (exact parts, suppliers)
- **Time estimate** (realistic, not optimistic)
- **Failure modes** (what can go wrong, how to fix)

### Backup Strategy

| Level | Storage | Access |
|-------|---------|--------|
| **Cloud** | EnklavaLab servers | Online, searchable |
| **Node** | Local server (each settlement) | LAN, offline capable |
| **Paper** | Printed manuals | Library, zero tech |
| **Heads** | Trained practitioners | Oral tradition |

If the internet disappears, knowledge survives.

---

## Skill Transfer

### The Apprenticeship Model

Knowledge isn't just documentation. It's embodied.

| Stage | Duration | Outcome |
|-------|----------|---------|
| **Observer** | 1 build | Watch, ask questions |
| **Helper** | 2-3 builds | Assist under supervision |
| **Builder** | 3-5 builds | Lead sections |
| **Master** | 10+ builds | Teach others, innovate |

### Toloka Integration

Every Toloka project is a teaching opportunity:

| Role | Learning |
|------|----------|
| Volunteer | Hands-on skills, real experience |
| Host | Project management, teaching |
| Expert | Pedagogy, curriculum development |

---

## Integration

### ← All Protocols
Knowledge Protocol documents all other protocols. Each system feeds data and learnings back.

### → Swarm Protocol
- EnklavaLab subscribers become community members
- Skills learned enable Toloka participation
- Documentation enables replication at new nodes

---

## DePIN Integration

Knowledge as verifiable infrastructure.

### Data Certification

| Data Type | Verification |
|-----------|--------------|
| Energy generation | TEE-signed sensor data |
| Carbon sequestration | Lifecycle assessment + attestation |
| Skill completion | Mentor signature + build verification |
| Documentation use | Platform analytics |
| **Compute contribution** | Token throughput logs, uptime attestation |

### Compute-as-Infrastructure

The Compute Swarm extends DePIN beyond physical sensors:

| Contribution | Measurement | Reward Mechanism |
|--------------|-------------|------------------|
| GPU-hours contributed | Petals DHT logs | EKLV via Proof of Compute |
| Inference requests served | Token count | Proportional distribution |
| Uptime reliability | Availability % | Reputation multiplier |

**Future:** Federated fine-tuning on local data — train models without data leaving the settlement.

### Future: Carbon Credits

Bio-Dashboard data → third-party verification → tokenized carbon credits.

The documentation proves what we claim.

---

## Economics

### EnklavaLab Revenue

| Metric | Current | Target (2026) |
|--------|---------|---------------|
| Free users | [PLACEHOLDER] | 5,000+ |
| Paid subscribers | [PLACEHOLDER] | 500+ |
| Monthly revenue | [PLACEHOLDER] | €10,000+ |
| To EKLV buybacks | [PLACEHOLDER] | €2,000+ |

### Maker Space Revenue

| Stream | Model |
|--------|-------|
| Membership | €50-100/month access |
| Hourly | €10-20/hour for non-members |
| Production | Revenue share on member businesses |
| Training | Paid workshops on equipment |

---

## Specifications

### Minimum Viable Knowledge System

| Component | Spec | Purpose |
|-----------|------|---------|
| Raspberry Pi | 4GB RAM + SSD | Local server |
| Sensors | Basic kit (temp, energy) | Core monitoring |
| Grafana | Open source | Dashboard |
| PDF library | Critical SOPs | Offline reference |

**Cost:** ~€300 | **Covers:** Basic monitoring + documentation

### Full Digital Twin

| Component | Spec | Purpose |
|-----------|------|---------|
| Mini PC | Intel NUC or equivalent | Server |
| Sensor network | 20+ sensors, LoRa mesh | Full monitoring |
| Display | Always-on dashboard | Visibility |
| Backup power | UPS + battery | Resilience |
| Maker equipment | CNC, 3D printer, tools | Production |

**Cost:** ~€5,000 (shared at settlement scale)

### Minimum Viable Compute Swarm

| Component | Spec | Purpose |
|-----------|------|---------|
| GPU node | RTX 3060 12GB or equivalent | Inference anchor |
| Network | Tailscale mesh (free tier) | Encrypted connectivity |
| Software | Petals + idle daemon | Distributed LLM |

**Cost:** ~€400 (RTX 3060 used) | **Covers:** Local 7-13B models, participation in larger swarms

### Full Compute Swarm

| Component | Spec | Purpose |
|-----------|------|---------|
| Primary GPU | RTX 4090 24GB | Heavy inference (Maker Space) |
| Secondary nodes | 3-5 nodes, 8-12GB VRAM each | Pipeline distribution |
| Orchestration | Nomad cluster | Job scheduling |
| Networking | Headscale (self-hosted) | Full control |
| Storage | NFS share for checkpoints | Fault recovery |

**Cost:** ~€3,000-5,000 | **Covers:** 70B+ models at 5-6 tok/s, full settlement AI autonomy

---

*Continue to [Swarm Protocol →](/protocols/swarm)*
