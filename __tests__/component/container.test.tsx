import * as React from 'react'
import { render } from 'react-native-testing-library'
import Container from '../../src/components/Container'

describe('<Container />', () => {
  it('render the container component', () => {
    const tree = render(<Container />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
