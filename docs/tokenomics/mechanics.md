---
id: mechanics
title: Token Mechanics
sidebar_label: Token Mechanics
sidebar_position: 4
---

# Token Mechanics

This section details the precise mechanisms governing EKLV buybacks, burns, governance, and investor protections.

---

## The Buyback Formula

Revenue from ecosystem operations is converted to EKLV buybacks according to this formula:

```
Weekly_Buyback = (Monthly_Subscription_Revenue × 20% ÷ 4)
               + (Monthly_Hardware_Revenue × 2.5% ÷ 4)
```

### Example Calculation (Year 2 Target)

| Revenue Source | Monthly | Rate | Weekly Buyback |
|----------------|---------|------|----------------|
| Subscriptions | €50,000 | 20% | €2,500 |
| Hardware Sales | €83,333 | 2.5% | €520 |
| **Total** | | | **€3,020/week** |

**Annual Impact:** €3,020 × 52 = **€157,040** in annual buybacks

---

## Buyback Execution Protocol

Buybacks are not discretionary—they follow a strict protocol:

| Parameter | Specification |
|-----------|---------------|
| **Frequency** | Weekly (Monday 12:00 UTC) |
| **Method** | Market buy on Uniswap V3 (EKLV/EURC pool) |
| **Authorization** | 2-of-3 Gnosis Safe multisig |
| **Slippage Limit** | Maximum 2% per transaction |
| **Order Splitting** | Buys >€5,000 split into 4-hour intervals |
| **Transparency** | All transactions logged on-chain |
| **Dashboard** | Displayed on stats.enklava.com |
| **Burn Address** | `0x000000000000000000000000000000000000dEaD` |

### Execution Flow

```
Revenue Accrues (Daily)
        ↓
Weekly Total Calculated (Sunday)
        ↓
Multisig Approves (Monday AM)
        ↓
Uniswap Market Buy (Monday 12:00 UTC)
        ↓
Tokens Sent to Burn/Treasury (per Scarcity Floor)
        ↓
Transaction Posted to Dashboard
```

---

## Governance Framework

EKLV holders govern the protocol through on-chain voting.

### Quorum Requirement

**35% of circulating supply** must participate for any vote to be valid.

*Note: Circulating supply, not total supply—tokens in vesting or locked don't count toward quorum calculation.*

### Decision Tiers

| Tier | Threshold | Scope |
|------|-----------|-------|
| **Tier 1: Simple Majority** | >50% | Treasury grants under €10K |
| | | Partnership approvals |
| | | Minor parameter tweaks |
| **Tier 2: Supermajority** | >67% | Buyback formula changes |
| | | Allocation modifications |
| | | Major partnerships (>€50K) |
| **Tier 3: Critical** | >80% + Multisig | Token supply changes |
| | | Emergency actions |
| | | Protocol dissolution |

### Proposal Process

| Stage | Duration | Action |
|-------|----------|--------|
| **1. Discussion** | 7 days minimum | Forum debate, gather feedback |
| **2. Snapshot Vote** | 5 days | On-chain voting via Snapshot |
| **3. Execution** | Within 48 hours | Multisig executes if passed |

### Voting Power

- **1 EKLV = 1 Vote**
- Tokens must be held in wallet (not in LP positions) to vote
- Delegation supported (assign your votes to another address)

---

## Scarcity Floor Mechanism

The protocol enforces a **minimum scarcity level** through differentiated buyback disposition:

| Supply Level | Buyback Disposition |
|--------------|---------------------|
| **>5,000,000 EKLV** | 100% of buybacks are **burned** |
| **≤5,000,000 EKLV** | 50% burned, 50% sent to Treasury |

### Visual

```
10M ────────────────────────────── Total Supply
 │
 │   100% BURN ZONE
 │   (All buybacks burned)
 │
5M ─────────────────────────────── Scarcity Floor
 │
 │   50/50 ZONE
 │   (Half burned, half to treasury)
 │
0  ──────────────────────────────
```

### Treasury Usage (Post-Floor)

Once supply reaches 5M, the 50% treasury allocation can be used for:

| Use Case | Governance Requirement |
|----------|------------------------|
| Ecosystem grants | Tier 1 (>50%) |
| Additional liquidity incentives | Tier 1 (>50%) |
| Strategic acquisitions | Tier 2 (>67%) |
| Emergency reserves | Multisig only |

**Key Constraint:** Treasury tokens cannot be sold on open market—only distributed for ecosystem growth.

---

## Liquidity Priority

The Seed Investor has **first right to liquidity** during the 2-year vesting period, protecting against illiquid markets.

| Parameter | Specification |
|-----------|---------------|
| **Mechanism** | Quarterly "Liquidity Sweeps" |
| **Windows** | Last week of March, June, September, December |
| **Trigger** | If 7-day average DEX volume under €10,000 |
| **Price** | 7-day TWAP minus 5% discount |
| **Volume Cap** | Maximum 50,000 EKLV per sweep |
| **Treasury Source** | Foundation Reserve (not market buys) |

### How It Works

1. At each quarterly window, 7-day average volume is calculated
2. If volume under €10,000, Seed Investor can request Liquidity Sweep
3. Treasury buys up to 50,000 EKLV at TWAP - 5%
4. Tokens come from Foundation Reserve, not market
5. No additional sell pressure on public market

**Purpose:** Ensures early investor has exit path even if DEX liquidity is thin, while protecting other holders from dumps.

---

## Terminal Backstop

In the event of **total protocol dissolution**, the Enklava Foundation holds a legal mandate to protect token holders:

### Dissolution Protocol

1. **Liquidate** physical site improvements (structures, equipment, infrastructure)
2. **Convert** proceeds to EURC
3. **Execute Terminal Buyback** at pro-rata value for all remaining token holders
4. **Burn** all acquired tokens, closing the protocol

### What's Covered

| Asset | Liquidatable | Notes |
|-------|--------------|-------|
| Land (7 ha) | ✗ | Foundation mandate: land cannot be sold |
| Structures (Yurts, Climate Fortress) | ✓ | Movable, sellable |
| Equipment (Solar, Batteries, Tools) | ✓ | Market value |
| Inventory (Materials, KITs) | ✓ | Cost value |
| IP (Software, Designs) | ✓ | Licensable or saleable |

### Effect

EKLV maintains **tangible asset backing** even in worst-case scenarios. You're not buying speculation—you're buying a claim on real infrastructure.

---

## Summary: Mechanic Interactions

```
┌─────────────────────────────────────────────────────────────────┐
│                      TOKEN MECHANICS                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  REVENUE ──► BUYBACK FORMULA ──► WEEKLY EXECUTION               │
│                                        │                        │
│                                        ▼                        │
│                              ┌─────────────────┐                │
│                              │  Supply > 5M?   │                │
│                              └────────┬────────┘                │
│                                       │                         │
│                          YES ─────────┼───────── NO             │
│                           │           │           │             │
│                           ▼           │           ▼             │
│                      100% BURN        │      50% BURN           │
│                                       │      50% TREASURY       │
│                                       │           │             │
│                                       │           ▼             │
│                                       │    GOVERNANCE           │
│                                       │    (Grants, LPs)        │
│                                       │                         │
│  TERMINAL BACKSTOP ◄────── Protocol Dissolution (if ever)      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

*Continue to [Risk Scenarios →](/tokenomics/risk-scenarios)*
