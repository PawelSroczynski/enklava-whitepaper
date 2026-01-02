/**
 * Enklava Whitepaper Sidebar
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  whitepaperSidebar: [
    'intro',
    'the-enklava-way',
    {
      type: 'category',
      label: 'Principles',
      items: [
        'principles/the-philosophy',
        'principles/values',
        'principles/who-we-serve',
        'principles/the-path',
      ],
    },
    {
      type: 'category',
      label: 'System Architecture',
      items: [
        'architecture/overview',
        'architecture/layer-a',
        'architecture/layer-b',
        'architecture/layer-c',
        'architecture/ip-strategy',
      ],
    },
    {
      type: 'category',
      label: 'The Protocol Stack',
      items: [
        'protocols/shelter',
        'protocols/energy',
        'protocols/water',
        'protocols/food',
        'protocols/knowledge',
        'protocols/swarm',
      ],
    },
    {
      type: 'category',
      label: 'Tokenomics',
      items: [
        'tokenomics/overview',
        'tokenomics/engines',
        'tokenomics/allocation',
        'tokenomics/mechanics',
        'tokenomics/risk-scenarios',
        'tokenomics/transparency',
      ],
    },
    {
      type: 'category',
      label: 'Financials',
      items: [
        'financials/overview',
        'financials/activation-protocol',
        'financials/unit-economics',
        'financials/valuation',
      ],
    },
    {
      type: 'category',
      label: 'Execution',
      items: [
        'operations',
        'team',
        'enklava-kinterra-api',
        'roadmap',
        'legal',
        'risks',
      ],
    },
  ],
};

module.exports = sidebars;
