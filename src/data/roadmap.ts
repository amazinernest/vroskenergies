export interface RoadmapMilestone {
  stage: string;
  phase: string;
  title: string;
  status: 'active' | 'in-progress' | 'future';
  description: string;
  items: string[];
  metrics: string;
}

export const roadmapData: RoadmapMilestone[] = [
  {
    stage: 'Phase 01',
    phase: 'Current Operational Foundation',
    title: 'Trading, Distribution & Gas Offtake',
    status: 'active',
    description: 'Establishing commercial dominance in physical commodities procurement, wholesale product distribution, and clean gas trading across Nigeria and West Africa.',
    items: [
      'Product Trading: Active import, storage, and nationwide sales of white and heavy refined products (PMS, AGO, DPK, Base Oils, Bitumen)',
      'Crude Brokerage: Facilitating equity crude transactions and export stems for marginal field operators and international refineries',
      'Gas Sales & Commercialization: Wholesale supply of LPG, CNG, and LNG to industrial users and bottling plants',
      'Gas Logistics: Dedicated virtual pipeline trucking networks and regional distribution corridors'
    ],
    metrics: 'Active Nationwide Supply'
  },
  {
    stage: 'Phase 02',
    phase: 'Mid-Term Infrastructure Assets',
    title: 'Coastal Storage Terminals & Inland Depots',
    status: 'in-progress',
    description: 'Transitioning from leased capacity to owned strategic infrastructure to unlock superior margin capture, operational autonomy, and throughput control.',
    items: [
      'Asset Acquisition: Direct acquisition of coastal tank farm assets and product terminal storage in key Nigerian deepwater ports',
      'Inland Storage Terminals: Developing high-capacity regional inland distribution depots for dual-fuel and clean gas (LPG/CNG) bulk storage',
      'Pipeline Interconnects: Establishing dedicated rack loading bays, automated metering skids, and custody transfer systems',
      'Strategic Reserves: Operating sovereign and commercial buffer storage to guarantee uninterrupted national supply during import bottlenecks'
    ],
    metrics: 'Capital Deployment Target: 2026–2028'
  },
  {
    stage: 'Phase 03',
    phase: 'Long-Term Upstream & Downstream Integration',
    title: 'Maritime Shipping, Marginal Fields & Refining',
    status: 'future',
    description: 'Completing full vertical integration by owning maritime logistics assets, equity hydrocarbon reserves, and modern modular refining capacity.',
    items: [
      'Vessel Operations & Shipping: Direct acquisition and time-charter ownership of MR2 product tankers and LPG pressurized carriers',
      'Marginal Field Investment: Equity participation in proven Nigerian onshore and shallow-water marginal fields during NUPRC bid rounds',
      'Refinery Acquisition: Developing and acquiring modular hydro-skimming and condensate refining capacity in the Niger Delta to displace imported fuels',
      'Clean Energy & Power Integration: Capturing associated flare gas to generate captive industrial electric power'
    ],
    metrics: 'Integrated Energy Conglomerate'
  }
];
