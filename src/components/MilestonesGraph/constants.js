export const status = {
  skipped: 'SKIPPED',
  completed: 'COMPLETED',
}

const discovery = 'discovery',
  preClinicalStudies = 'pre_clinical_studies',
  leadSelection = 'lead_selection',
  clinicalBatch = 'clinical_batch',
  ind = 'ind',
  phase1 = 'phase_1',
  phase2 = 'phase_2',
  phase3 = 'phase_3',
  nda = 'nda',
  onMarket = 'on_market'

export const phases = {
  discovery,
  preClinicalStudies,
  leadSelection,
  clinicalBatch,
  ind,
  phase1,
  phase2,
  phase3,
  nda,
  onMarket,
}

export const phasesInOrder = [
  discovery,
  preClinicalStudies,
  leadSelection,
  clinicalBatch,
  ind,
  phase1,
  phase2,
  phase3,
  nda,
  onMarket,
]

export const phaseColor = {
  [discovery]: '#fff',
  [preClinicalStudies]: '#797979',
  [leadSelection]: '#941751',
  [clinicalBatch]: '#22528f',
  [ind]: '#3f8c27',
  [phase1]: '#8b551b',
  [phase2]: '#872110',
  [phase3]: '#eb51f7',
  [nda]: '#1431f5',
  [onMarket]: '#f09838',
}

export const timelinesEstimates = (() => {
  const partial = {
    optimistic: {
      [discovery]: 5,
      [preClinicalStudies]: 30,
      [leadSelection]: 5,
      [clinicalBatch]: 26,
      [ind]: 14,
      [phase1]: 75,
      [phase2]: 150,
      [phase3]: 240,
      [nda]: 21,
      [onMarket]: 30,
    },
    pesimistic: {
      [discovery]: 40,
      [preClinicalStudies]: 120,
      [leadSelection]: 25,
      [clinicalBatch]: 60,
      [ind]: 45,
      [phase1]: 180,
      [phase2]: 270,
      [phase3]: 365,
      [nda]: 60,
      [onMarket]: 180,
    },
  }
  const actual = Object.keys(partial.optimistic).reduce((acc, key) => {
    return {
      ...acc,
      [key]: (partial.optimistic[key] + partial.pesimistic[key]) / 2,
    }
  }, {})

  return {
    ...partial,
    actual,
  }
})()
