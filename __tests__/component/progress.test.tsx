import * as React from 'react'
import { create } from 'react-test-renderer'
import Progress from '../../src/components/Progress'

describe('<Progress />', () => {
  it('render the Progress screen', () => {
    const tree = create(<Progress progressType="Daily" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
