import asset from './mocks/asset.json'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import moment from 'moment-timezone'
moment.tz.setDefault('UTC')

it('should return the expected result', () => {
  const now = moment('2020-05-09').toISOString()
  expect(mapAssetToMilestones(now)(asset)).toMatchSnapshot()
})
