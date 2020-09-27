import * as React from 'react'
import { render } from 'react-native-testing-library'
import TaskCard from '../../src/components/TaskCard'

describe('<TaskCard />', () => {
  it('render the TaskCard component', () => {
    const tree = render(<TaskCard taskType="Daily" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
