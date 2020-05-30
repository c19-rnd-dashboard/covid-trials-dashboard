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

export const phaseDisplayName = {
  [discovery]: {
    label: 'Discovery',
    info:
      'Can include pre-formulation work, reverse vaccinology, antigen creation, pre-clinical ethical approvals',
  },
  [preClinicalStudies]: {
    label: 'Pre-Clinical Studies',
    info:
      'Can include in vitro and in vivo safety and efficacy studies, tox studies, animal challenge studies. Scientists have difficulty infecting mice with SARS-CoV-2 so this step might be skipped by certain companies',
  },
  [leadSelection]: {
    label: 'Lead Selection',
    info:
      'Lead product has been selected among potentially multiple candidates',
  },
  [clinicalBatch]: {
    label: 'Clinical Batch',
    info:
      'The actual vaccine material is manufactured in bulk to provide study drug for the clinical trials, this will need to go through pooling, formulation, sterile filtration, aseptic fill, packaging and labeling and then shipped',
  },
  [ind]: {
    label: 'IND or Equivalent Approval',
    info:
      'Sponsor received approval by the FDA for their Investigational New Drug appplication, allowing them to research an unapproved drug or study an approved drug for a new indication. There are equivalents in Europe (EMA), China (NMPA), Canada (Health Canada), Australia (TGA), UK (MHRA), India (CDSCO), Brazil (Health Ministry) and others. ',
  },
  [phase1]: {
    label: 'Phase 1',
    info:
      'Phase 1 studies are clinical trial in human subjects where the researchers are testing for the safety of the drug (as opposed to efficacy, i.e. if it works). These studies are usually run in healthy volunteers and might test multiple doses either simultaneously or in ascending order. In vaccine Phase 1 trial, researchers can also try to estimate efficacy by collecting data on antibody production.',
  },
  [phase2]: {
    label: 'Phase 2',
    info:
      'Phase 2 studies test fo the efficacy of the drug (i.e. if its works) in patients of the target patient population. Some studies combine Phase 1 and Phase 2 studies into one protocol, or combine Phase 2 and Phase 3 studies to expedite development, although there are typically still distinct stages that cover both phases in the protocol. ',
  },
  [phase3]: {
    label: 'Phase 3',
    info:
      'Phase 3 studies test efficacy and/or safety, but in a much wider population, ideally one that is demographically representative of the target population. The FDA typically requires two Phase 3 studies to be performed but it sometimes waves this requirement given the study drug particulars or past clinical data. ',
  },
  [nda]: {
    label: 'NDA',
    info:
      'In order for sponsors to provide their drugs on the market, they need to receive a New Drug Application approval from the FDA.  There are equivalents in Europe (EMA), China (NMPA), Canada (Health Canada), Australia (TGA), UK (MHRA), India (CDSCO), Brazil (Health Ministry) and others. ',
  },
  [onMarket]: {
    label: 'On The Market',
    info: '',
  },
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
