// ILLUSTRATIVE figures for a UI demo only. Always verify against the broker's official pricing page.
export const brokerageCards = [
  {
    id: 'delivery',
    title: 'Equity delivery',
    price: '₹0',
    unit: 'illustrative brokerage',
    description: 'For shares you buy and hold for more than one day.',
    features: ['Example figure only', 'Statutory charges apply separately'],
  },
  {
    id: 'intraday',
    title: 'Intraday and F&O',
    price: '₹20',
    unit: 'illustrative flat fee per order',
    description: 'For positions opened and closed within a trading session, and for derivatives.',
    features: ['Flat-fee model shown as an example', 'Statutory charges apply separately'],
  },
  {
    id: 'funds',
    title: 'Direct mutual funds',
    price: '₹0',
    unit: 'illustrative platform fee',
    description: 'For investing in direct mutual fund plans.',
    features: ['Fund expense ratios are set by the fund house', 'Check each fund factsheet'],
  },
]

export const chargeRows = [
  { charge: 'Brokerage', applies: 'All segments', details: 'Varies by segment. Shown as an example in the cards above.' },
  { charge: 'Securities transaction tax (STT)', applies: 'Equity and derivatives', details: 'Government levy. Rate depends on the segment and side of the trade.' },
  { charge: 'Exchange transaction charges', applies: 'All exchange-traded segments', details: 'Set by the exchange. Rates differ by exchange and segment.' },
  { charge: 'GST', applies: 'Brokerage and certain charges', details: 'Applied on applicable charges at the prevailing government rate.' },
  { charge: 'SEBI turnover fees', applies: 'All exchange-traded segments', details: 'Regulatory fee charged on traded turnover.' },
  { charge: 'Stamp duty', applies: 'Buy-side trades', details: 'State and central rules apply. Rates vary by segment.' },
  { charge: 'Depository (DP) charges', applies: 'Equity delivery sells', details: 'Charged per scrip when shares are debited from the demat account.' },
]
