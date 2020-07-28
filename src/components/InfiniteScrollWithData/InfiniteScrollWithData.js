import React, { useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

export const InfiniteScrollWithData = ({
  data,
  component,
  initialLength = 3,
  step = 2,
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
