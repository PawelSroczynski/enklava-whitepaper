---
id: water
title: "Water Protocol"
sidebar_label: "Water"
sidebar_position: 3
---

# Water Protocol

> *The sky gives water for free. Stop buying it.*

---

## The Dependency

| What You Rent | Annual Cost | The Risk |
|---------------|-------------|----------|
| Municipal water | €300-500 | Infrastructure decay, contamination |
| Sewage fees | €200-400 | Mandatory even if not using |
| Bottled water | €300-600 | Plastic waste, transport emissions |
| Water heater energy | €200-400 | Tied to energy grid |

**Total:** €1,000-1,900/year for something that falls from the sky.

Municipal water travels through aging pipes, picks up chlorine, fluoride, and whatever leaches from infrastructure. You pay twice — once to get it, once to get rid of it.

---

## The Solution

Enklava builds **Closed-Loop Water Systems** — harvest, use, recycle, repeat.

### The Water Cycle

```
         ☁️ RAIN
            │
            ▼
    ┌───────────────┐
    │     ROOF      │ ──────────────────┐
    │   COLLECTION  │                   │
    └───────┬───────┘                   │
            │                           │
            ▼                           │
    ┌───────────────┐                   │
    │    STORAGE    │                   │
    │   (10-20m³)   │                   │
    └───────┬───────┘                   │
            │                           │
            ▼                           │
    ┌───────────────┐                   │
    │  FILTRATION   │                   │
    │  (Ceramic +   │                   │
    │   UV + Carbon)│                   │
    └───────┬───────┘                   │
            │                           │
            ▼                           │
    ┌───────────────┐                   │
    │   POTABLE     │                   │
    │    WATER      │                   │
    └───────┬───────┘                   │
            │                           │
      ┌─────┴─────┐                     │
      │           │                     │
      ▼           ▼                     │
┌──────────┐ ┌──────────┐               │
│  KITCHEN │ │ BATHROOM │               │
│  (drink) │ │  (wash)  │               │
└────┬─────┘ └────┬─────┘               │
     │            │                     │
     │            ▼                     │
     │     ┌──────────┐                 │
     │     │ GREYWATER│                 │
     │     │ TREATMENT│                 │
     │     └────┬─────┘                 │
     │          │                       │
     ▼          ▼                       │
┌──────────────────────┐                │
│     GARDEN /         │────────────────┘
│   FOOD FOREST        │   (cycle closes)
└──────────────────────┘
```

---

## Components

### 1. Rainwater Harvesting

| Component | Specification |
|-----------|---------------|
| **Collection surface** | Roof (metal or tile preferred) |
| **First flush diverter** | Discards first 0.5mm of rain (debris) |
| **Gutters** | Stainless or aluminum (no zinc/lead) |
| **Leaf guards** | Mesh screens on all inlets |
| **Pre-filter** | 1mm mesh before tank |

#### Capacity Calculation

| Variable | Poland Average |
|----------|----------------|
| Annual rainfall | 600mm |
| Roof area (100m²) | Collection surface |
| Collection efficiency | 85% |
| **Annual harvest** | **51,000 liters** |
| Household demand | 40,000-50,000 liters |
| **Result** | **Surplus** |

Even in dry years (400mm), a well-designed system achieves 80%+ autonomy.

### 2. Storage

| Tank Type | Pros | Cons | Best For |
|-----------|------|------|----------|
| **Underground concrete** | Cool, protected, large | Expensive, permanent | Primary storage |
| **Above-ground plastic** | Cheap, movable | UV degradation, freezing | Backup/overflow |
| **IBC containers** | Modular, stackable | Limited size, plastic | Starter systems |
| **Ferrocement** | DIY-able, durable | Labor intensive | Toloka builds |

**Recommended:** 10-20m³ underground + 2-5m³ above-ground backup.

### 3. Filtration (Potable Water)

Multi-stage treatment for drinking quality:

| Stage | Method | Removes |
|-------|--------|---------|
| **1. Sediment** | 20-50 micron filter | Particles, debris |
| **2. Ceramic** | 0.2 micron candle | Bacteria, protozoa |
| **3. Activated carbon** | Granular/block | Chlorine, VOCs, taste |
| **4. UV sterilization** | 40mJ/cm² dose | Viruses, remaining pathogens |

**Output:** WHO drinking water standards. Tested quarterly.

### 4. Greywater Treatment

Shower, sink, and laundry water — too valuable to waste.

| Stage | Method | Output |
|-------|--------|--------|
| **1. Settling** | Grease trap + tank | Solids removed |
| **2. Reed bed** | Constructed wetland | Biologically cleaned |
| **3. Sand filter** | Slow sand polishing | Irrigation quality |

**Capacity:** 150-200 liters/day per person.
**Output:** Garden irrigation, toilet flushing, cleaning.

### 5. Blackwater Processing

Toilet waste — the taboo that must be addressed.

| Option | Method | Output | Best For |
|--------|--------|--------|----------|
| **Composting toilet** | Dry separation | Humanure after 2 years | Simple, no infrastructure |
| **Biogas digester** | Anaerobic | Methane + fertilizer | Energy integration |
| **Constructed wetland** | Large reed bed | Discharge to ground | Higher capacity |

**Recommended:** Composting toilet for simplicity. Biogas if already running THRONE-GEMINI.

---

## System Design

### Household Water Budget

| Use | Daily (L) | Annual (L) | % of Total |
|-----|-----------|------------|------------|
| Drinking/cooking | 5 | 1,825 | 4% |
| Shower/bath | 50 | 18,250 | 40% |
| Toilet | 30 | 10,950 | 24% |
| Laundry | 25 | 9,125 | 20% |
| Cleaning | 10 | 3,650 | 8% |
| Garden | 20 | 7,300 | 16%* |
| **Total** | **140** | **51,100** | 100% |

*Garden varies seasonally — higher summer, near zero winter.

### Water Quality Standards

| Use | Standard | Testing |
|-----|----------|---------|
| **Potable** | WHO guidelines | Quarterly lab test |
| **Bathing** | Low coliform | Annual |
| **Irrigation** | BOD < 30 | Visual monitoring |
| **Toilet flush** | Minimal | None required |

---

## Integration

### ← Shelter Protocol
- Roof area determines harvest capacity
- Plumbing designed for dual systems
- Foundation includes tank placement

### ← Energy Protocol
- Solar powers pumping
- Heat pump heats water
- PTES pre-heats incoming water

### → Food Protocol
- Irrigation from greywater
- Aquaponics integration possible
- Greenhouse humidity cycling

### → Knowledge Protocol
- Tank levels monitored
- Quality sensors feeding Digital Twin
- Usage patterns optimized by AI

### → Swarm Protocol
- Shared infrastructure at settlement scale
- Collective reed bed treatment
- Emergency water mutual aid

---

## Economics

### System Costs

| Component | Cost (PLN) | Cost (€) |
|-----------|------------|----------|
| Roof prep + gutters | 3,000 | 700 |
| Underground tank 15m³ | 12,000 | 2,800 |
| Filtration system | 4,000 | 950 |
| Pumping + pressure | 3,000 | 700 |
| Greywater reed bed | 5,000 | 1,200 |
| Composting toilet | 2,000 | 470 |
| **Total** | **29,000** | **6,820** |

### Payback

| Comparison | Annual Cost |
|------------|-------------|
| Municipal water + sewer | €700-1,000 |
| Rainwater system maintenance | €50-100 |
| **Annual savings** | **€600-900** |
| **Payback** | **8-11 years** |

Plus: No dependency. No contamination risk. No rationing.

---

## Emergency Resilience

### Drought Protocol

| Reserve Level | Action |
|---------------|--------|
| 75%+ | Normal operation |
| 50-75% | Reduce irrigation, greywater priority |
| 25-50% | Essential use only, rationing |
| ≤25% | Emergency: potable only, neighbor coordination |

### Redundancy

| System | Backup |
|--------|--------|
| Primary tank | Secondary tank + IBC reserve |
| Pump failure | Gravity-fed bypass |
| Filter clogged | Backup cartridges on-site |
| Power outage | Manual pump option |

---

## Specifications

### Minimum Viable Water System

| Component | Spec | Purpose |
|-----------|------|---------|
| Tank | 5m³ | 30-day reserve |
| Gutters | Basic aluminum | Collection |
| Filter | Ceramic + carbon | Potable water |
| Pump | 12V DC | Solar-compatible |

**Cost:** ~€2,500 | **Covers:** 60-70% autonomy

### Full Autonomy Package

| Component | Spec | Purpose |
|-----------|------|---------|
| Tanks | 20m³ total | Full year coverage |
| Filtration | 4-stage + UV | Medical-grade potable |
| Greywater | Reed bed 10m² | 100% recycling |
| Blackwater | Composting + biogas | Zero discharge |
| Hot water | Solar thermal + heat pump | 100% renewable |

**Cost:** ~€10,000 | **Covers:** 100% autonomy + surplus

---

*Continue to [Food Protocol →](/protocols/food)*
