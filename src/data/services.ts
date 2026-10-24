export interface ServiceOffering {
  id: string;
  title: string;
  category: string;
  tag: string;
  summary: string;
  details: string[];
  icon: string;
}

export const servicesData: ServiceOffering[] = [
  {
    id: 'heavy-products',
    title: 'Heavy Products Import, Storage & Distribution',
    category: 'Downstream Commodities',
    tag: 'Base Oils & Bitumen',
    summary: 'Reliable importation, bulk terminal storage, and distribution of heavy petroleum products including Base Oils, Bitumen, and industrial fuel oils.',
    details: [
      'Industrial grade Base Oils (Group I, II, III) for lubricant blending plants',
      'High-grade paving and industrial Bitumen for national road and civil infrastructure',
      'Low and high sulfur Fuel Oils (LPFO, HPFO) for power generation and maritime bunkering',
      'Strategic tank farm leasing and bonded terminal storage management across Nigerian ports'
    ],
    icon: '⛽'
  },
  {
    id: 'white-products',
    title: 'White Products Import, Storage & Distribution',
    category: 'Downstream Commodities',
    tag: 'PMS • AGO • Jet Fuel',
    summary: 'High-throughput supply chain operations for Premium Motor Spirit (PMS), Automotive Gas Oil (AGO / Diesel), Aviation Turbine Kerosene (Jet A-1), and Naphtha.',
    details: [
      'Bulk cargo procurement aligned with international EN590 and Nigerian NMDPRA standards',
      'Direct depot allocation and distribution to major marketers and commercial fleets',
      'Aviation jet fuel logistics with rigorous quality assurance and water-free filtration',
      'Naphtha sourcing for petrochemical feedstocks and blending requirements'
    ],
    icon: '⚡'
  },
  {
    id: 'gas-sales',
    title: 'Gas Sales & Transition Fuels',
    category: 'Gas Infrastructure',
    tag: 'LPG • LNG • CNG • NGLs',
    summary: 'Accelerating West Africa’s clean energy transition through scalable supply and distribution of Liquefied Petroleum Gas, Natural Gas Liquids, and Compressed Natural Gas.',
    details: [
      'Commercial LPG supply for domestic and industrial thermal applications',
      'Compressed Natural Gas (CNG) virtual pipeline logistics for manufacturing hubs',
      'Liquefied Natural Gas (LNG) small-scale distribution and off-grid power solutions',
      'NGL fractionation off-take agreements with upstream gas processing facilities'
    ],
    icon: '🔥'
  },
  {
    id: 'risk-structuring',
    title: 'Structuring & Product Delivery Risk Management',
    category: 'Financial Engineering',
    tag: 'Counterparty & Credit Mitigation',
    summary: 'Advanced trade finance structuring, collateral management, and delivery risk mitigation designed to navigate volatility in emerging energy markets.',
    details: [
      'Letter of Credit (LC) structuring and documentary credit risk advisory',
      'Price risk mitigation through dynamic collar and fixed-for-floating swap overlays',
      'Foreign exchange hedging synergies backed by capital market partners',
      'Customized offtake agreements with performance guarantees and demurrage protection'
    ],
    icon: '📊'
  },
  {
    id: 'derivatives-trading',
    title: 'Derivatives & Futures Trading (Paper Trading)',
    category: 'Market Intelligence',
    tag: 'Gas Oil Contracts & Swaps',
    summary: 'Sophisticated derivatives execution and paper trading on international exchanges (ICE, NYMEX) to hedge physical exposure and optimize trading margins.',
    details: [
      'Gas Oil (0.1% / 10ppm) crack spread hedging and basis risk management',
      'Brent crude futures, options, and structured OTC derivative contracts',
      'Proprietary technical analysis and quantitative energy price modeling',
      'Real-time position monitoring aligning paper hedging with physical deliveries'
    ],
    icon: '📈'
  },
  {
    id: 'sts-dap-deliveries',
    title: 'STS & DAP Deliveries to Offtakers',
    category: 'Maritime Operations',
    tag: 'Ship-To-Ship & Port Transfers',
    summary: 'Turnkey maritime logistics providing seamless Ship-to-Ship (STS) offshore transfers and Delivered-At-Place (DAP) terminal discharges with zero contamination.',
    details: [
      'Offshore West Africa STS operations adhering strictly to OCIMF and MARPOL guidelines',
      'Licensed fender arrangements, support craft, and accredited mooring masters',
      'DAP discharge management into coastal and river port terminals across the Gulf of Guinea',
      'Rigorous independent inspector supervision (SGS, Saybolt, Intertek) on all transfers'
    ],
    icon: '🚢'
  },
  {
    id: 'product-sourcing',
    title: 'Strategic Product Sourcing & Origination',
    category: 'Global Procurement',
    tag: 'Refinery Relationships',
    summary: 'Global cargo sourcing capabilities unlocking cost-competitive petroleum volumes directly from international refiners and Tier-1 trading desks.',
    details: [
      'Long-term term contracts and spot tender participation across Europe, Middle East, and US Gulf',
      'Custom tailored supply contracts matching specific client delivery windows',
      'Bespoke product blending and specification matching for industrial end-users',
      'Cross-commodity arbitrage identification across regional West African coastal markets'
    ],
    icon: '🌐'
  },
  {
    id: 'crude-brokerage',
    title: 'Crude Oil Sales & Brokerage',
    category: 'Upstream Commercial',
    tag: 'Nigerian Light Sweet Grades',
    summary: 'Institutional brokerage and commercial facilitation for Nigerian crude oil grades (Bonny Light, Qua Iboe, Forcados, Escravos) connecting producers with global refiners.',
    details: [
      'Intermediation between marginal field producers and international off-takers',
      'Equity crude allocation marketing and structured pre-export financing facilities',
      'Comprehensive vessel vetting, stem programming, and terminal clearance coordination',
      'Market-clearing price discovery utilizing Platts and Argus benchmark differentials'
    ],
    icon: '🛢️'
  }
];
