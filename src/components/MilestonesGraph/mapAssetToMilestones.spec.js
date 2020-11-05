import asset from './mocks/asset.json'
import assets from '../../mocks/assets.json'
import { mapAssetToMilestones } from './mapAssetToMilestones'
import moment from 'moment-timezone'
import { profileTime } from 'utils/utils'
import { status } from './constants'
const { skipped } = status
moment.tz.setDefault('UTC')

const now = moment('2020-05-09').toISOString()

it('should not take too long', () => {
  const assetsWithMilestones = assets.filter(
    ({ milestones = [] }) =>
      milestones.filter(({ status }) => status !== skipped).length > 0
  )
  const { duration } = profileTime(() =>
    assetsWithMilestones.map(asset => mapAssetToMilestones(now)(asset))
  )
  expect(duration).toBeLessThan(3000)
})

it('should return the expected result', () => {
  expect(mapAssetToMilestones(now)(asset)).toMatchSnapshot()
})
