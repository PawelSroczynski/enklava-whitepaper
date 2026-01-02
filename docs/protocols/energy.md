---
id: energy
title: "Energy Protocol"
sidebar_label: "Energy"
sidebar_position: 2
---

# Energy Protocol

> *Stop paying for electrons. Start generating them.*

---

## The Dependency

| What You Rent | Annual Cost | The Risk |
|---------------|-------------|----------|
| Electricity | €1,200+ | Price shocks (2022: 3x overnight) |
| Gas/heating | €1,500+ | Geopolitical dependency |
| Grid connection | €200+ | Single point of failure |
| Carbon taxes | Growing | Regulation is coming |

**Total:** €3,000+/year to power your life — with zero control.

2022 proved it: grid dependency is existential risk. One policy decision, one pipeline closure, one war — and you choose between heating and eating.

---

## The Solution

Enklava builds **Energy Islands** — nodes that generate, store, and share power autonomously.

### The Progression

| Stage | What You Build | Result |
|-------|----------------|--------|
| **1. Grid-tied solar** | Panels + grid inverter | Reduce bills 60-80% |
| **2. Battery backup** | Add LFP storage | Survive outages |
| **3. Island mode** | Hybrid inverter | Full disconnect capability |
| **4. Microgrid** | Connect to neighbors | Share surplus, earn EKLV |

Each stage builds on the previous. No wasted investment.

---

## Components

### Generation: Solar Array

| Attribute | Specification |
|-----------|---------------|
| **Type** | Bifacial monocrystalline |
| **Capacity** | 6-15 kWp (household), 30-50 kWp (settlement) |
| **Orientation** | South-facing, 30-35° tilt (Poland optimal) |
| **Output gain** | +10-15% from bifacial rear-side |
| **Lifespan** | 25-30 years (80% output at year 25) |
| **ROI** | 4-6 years at current prices |

### Generation: THRONE-GEMINI Gasifier

For backup power and thermal integration:

| Attribute | Specification |
|-----------|---------------|
| **Fuel** | Wood chips, agricultural waste, pellets |
| **Electrical output** | 3-5 kW continuous |
| **Thermal output** | 15-25 kW (heat recovery) |
| **Efficiency** | 85%+ combined heat and power |
| **Use case** | Winter backup, cloudy periods, PTES charging |

The gasifier turns biomass into syngas, driving a generator. Waste heat charges thermal storage or heats water.

### Storage: Battery Bank

| Attribute | Specification |
|-----------|---------------|
| **Chemistry** | LFP (Lithium Iron Phosphate) |
| **Capacity** | 10-30 kWh (household), 100+ kWh (settlement) |
| **Cycles** | 6,000+ (vs 2,000 for NMC) |
| **Safety** | No thermal runaway risk |
| **Lifespan** | 15-20 years |
| **DoD** | 90%+ usable capacity |

LFP is heavier but safer, longer-lasting, and uses no cobalt.

### Storage: PTES (Pit Thermal Energy Storage)

Seasonal storage for heating/cooling:

```
┌─────────────────────────────────────────────┐
│            INSULATED COVER                  │
│         (prevents heat loss)                │
├─────────────────────────────────────────────┤
│                                             │
│           WATER/GRAVEL MIX                  │
│         (thermal storage mass)              │
│                                             │
│      Summer: Charge to 80-90°C              │
│      Winter: Discharge for heating          │
│                                             │
├─────────────────────────────────────────────┤
│         INSULATED PIT LINER                 │
│        (EPDM + XPS insulation)              │
└─────────────────────────────────────────────┘
```

| Attribute | Specification |
|-----------|---------------|
| **Volume** | 50-200 m³ per household |
| **Temperature** | 80-95°C charged, 40-60°C discharged |
| **Storage duration** | Seasonal (6+ months) |
| **Heat loss** | ≤0.1% per day with proper insulation |
| **Cost** | €50-100/m³ (excavation + liner + fill) |

Excess summer solar heats the pit. Winter extracts heat via heat pump (COP 4-5).

### Management: Hybrid Inverter

| Attribute | Specification |
|-----------|---------------|
| **Capacity** | 6-15 kW (household) |
| **Functions** | Grid-tie, off-grid, hybrid |
| **Island mode** | Automatic switchover ≤20ms |
| **MPPT** | Dual tracker for complex arrays |
| **Monitoring** | WiFi/Ethernet + Modbus |
| **EPS output** | Emergency backup power |

---

## Thermal Systems

### Passive Heating/Cooling

The Climate Fortress thermal envelope does most of the work:

| Strategy | Heating Contribution | Cooling Contribution |
|----------|---------------------|----------------------|
| **Super-insulation** | Reduces demand 80% | Blocks summer heat |
| **Thermal mass** | Stores solar gain | Buffers day/night swing |
| **South glazing** | Solar gain in winter | Shaded by overhang in summer |
| **Earth tubes** | Pre-heats intake air | Pre-cools intake air |

### Active Systems

For the remaining 15-20 kWh/m²/year demand:

| System | Function | Efficiency |
|--------|----------|------------|
| **Heat pump** | PTES → radiant floor | COP 4-5 |
| **Rocket mass heater** | Biomass → thermal mass | 90%+ |
| **Solar thermal** | DHW + PTES charging | 60-70% |

---

## DePIN Integration

The Energy Island is a **Physical Oracle** — verifiable on-chain infrastructure.

### Proof of Generation

| Data Point | Sensor | Verification |
|------------|--------|--------------|
| kWh generated | Smart meter | Signed by TEE |
| Uptime % | Inverter logs | Timestamped chain |
| Grid export | Utility meter | Cross-referenced |
| Self-consumption | Calculated | Derived metric |

### Token Mechanics

| Action | EKLV Impact |
|--------|-------------|
| **Verified generation** | Earn rewards (Proof of Regenerative Work) |
| **Microgrid contribution** | Earn from neighbor consumption |
| **Carbon offset** | Future: carbon credit tokenization |
| **Equipment staking** | Lock EKLV to participate in microgrid |

---

## Microgrid Architecture

When nodes connect, the network gains resilience:

```
┌─────────┐     ┌─────────┐     ┌─────────┐
│  NODE A │◄───►│  NODE B │◄───►│  NODE C │
│  8 kWp  │     │  6 kWp  │     │  10 kWp │
│ 15 kWh  │     │ 10 kWh  │     │ 20 kWh  │
└────┬────┘     └────┬────┘     └────┬────┘
     │               │               │
     └───────────────┼───────────────┘
                     │
              ┌──────┴──────┐
              │  MICROGRID  │
              │  CONTROLLER │
              │             │
              │  • Load     │
              │    balance  │
              │  • Billing  │
              │  • Island   │
              │    mode     │
              └──────┬──────┘
                     │
                     ▼
              ┌─────────────┐
              │    GRID     │
              │ (optional)  │
              └─────────────┘
```

### Benefits

| Metric | Single Node | 4-Node Microgrid |
|--------|-------------|------------------|
| **Uptime** | 95% | 99.5% |
| **Peak capacity** | Limited by single inverter | Shared capacity |
| **Storage effective** | 15 kWh | 60 kWh pooled |
| **Grid dependence** | Backup needed | Optional |

---

## Economics

### System Costs (Household)

| Component | Cost (PLN) | Cost (€) |
|-----------|------------|----------|
| Solar 8 kWp | 32,000 | 7,500 |
| Battery 15 kWh | 30,000 | 7,000 |
| Hybrid inverter | 12,000 | 2,800 |
| Installation | 8,000 | 1,900 |
| PTES 100m³ | 15,000 | 3,500 |
| **Total** | **97,000** | **22,700** |

### Payback Analysis

| Scenario | Annual Savings | Payback |
|----------|----------------|---------|
| **Grid-tied only** | €1,200 | 6-7 years |
| **+ Battery** | €1,800 | 8-9 years |
| **+ PTES (no gas)** | €3,000 | 7-8 years |
| **+ EKLV rewards** | €3,500+ | 6-7 years |

After payback: **€3,000+/year profit** from energy you would have bought.

---

## Integration

### ← Shelter Protocol
- Thermal envelope reduces energy demand 80%
- Roof designed for optimal solar
- Thermal mass integrates with PTES

### → Water Protocol
- Excess solar powers water pumping
- Heat pump provides hot water
- Rainwater reduces energy for municipal pumping

### → Food Protocol
- Greenhouse heating from PTES
- Grow lights for winter production
- Food preservation (drying, freezing)

### → Knowledge Protocol
- All systems monitored via Digital Twin
- Generation data feeds Bio-Dashboard
- Performance feeds carbon verification

### → Swarm Protocol
- Microgrid requires node coordination
- Surplus energy traded via token
- Collective purchasing power

---

## Specifications

### Minimum Viable Energy Island

| Component | Spec | Purpose |
|-----------|------|---------|
| Solar | 6 kWp | Base generation |
| Battery | 10 kWh | Daily cycling |
| Inverter | 6 kW hybrid | Management |
| Monitoring | WiFi logger | Data collection |

**Cost:** ~€15,000 | **Covers:** 80% of typical household demand

### Full Autonomy Package

| Component | Spec | Purpose |
|-----------|------|---------|
| Solar | 12 kWp bifacial | Surplus generation |
| Battery | 25 kWh LFP | Multi-day reserve |
| Inverter | 10 kW hybrid | Full house backup |
| PTES | 100 m³ | Seasonal heating |
| Gasifier | 5 kW CHP | Winter backup |

**Cost:** ~€35,000 | **Covers:** 100% autonomy year-round

---

*Continue to [Water Protocol →](/protocols/water)*
