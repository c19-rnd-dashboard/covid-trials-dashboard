import asset from './mocks/asset.json'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import moment from 'moment'

it('should return the expected result', () => {
  const now = moment('2020-05-09T20:47:50.756Z')
  expect(mapAssetToMilestones(now)(asset)).toMatchSnapshot()
})
