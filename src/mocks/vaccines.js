export default [
  {
    name: 'Vax 1',
    // 
    milestones: [
      {
        name: 'discovery',
        label: 'Discovery', //this can be internationalized so maybe send a token or we can use the name as a token
        dates: [
          {
            name: 'actual',
            label: 'Actual Progress',
            start: new Date().toISOString(),
            end: new Date().toISOString()
          }, {
            name: 'best',
            label: 'Optimistic Case',
            start: new Date().toISOString(),
            end: new Date().toISOString()
          }, {
            name: 'worst',
            label: 'Pessimistic Case',
            start: new Date().toISOString(),
            end: new Date().toISOString()
          }
        ]
      }, {
        name: 'clinicalBatch',
        dates: [
          {
            name: 'actual',
            label: 'Actual Progress',
            start: new Date().toISOString(),
            end: new Date().toISOString()
          }, {
            name: 'best',
            label: 'Optimistic Case',
            start: new Date().toISOString(),
            end: new Date().toISOString()
          }, {
            name: 'worst',
            label: 'Pessimistic Case',
            start: new Date().toISOString(),
            end: new Date().toISOString()
          }
        ]
      }
    ]
  }
]