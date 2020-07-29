import React, { useState } from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component'

export const InfiniteScrollWithData = ({
  data,
  component,
  initialLength,
  step,
}) => {
  const Component = component
  const [viewable, setViewable] = useState(data.slice(0, initialLength))
  const [hasMore, setHasMore] = useState(data.length > initialLength)
  const onNext = () => {
    if (viewable.length < data.length) {
      setViewable(data.slice(0, viewable.length - 1 + step))
    } else {
      setHasMore(false)
    }
  }
  return (
    <InfiniteScroll
      dataLength={viewable.length}
      next={onNext}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
    >
      {viewable.map(Component)}
    </InfiniteScroll>
  )
}

InfiniteScrollWithData.propTypes = {
  data: PropTypes.array.isRequired,
  component: PropTypes.node.isRequired,
  initialLength: PropTypes.number,
  step: PropTypes.number,
}

InfiniteScrollWithData.defaultProps = {
  initialLength: 10,
  step: 10,
}
