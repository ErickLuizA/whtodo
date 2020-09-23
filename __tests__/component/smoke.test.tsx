import * as React from 'react'
import { render } from 'react-native-testing-library'
import Teste from '../../src/components/Teste'

describe('Teste', () => {
  it('renders the Teste', () => {
    const { queryByText } = render(<Teste />)

    expect(queryByText(' Teste ')).not.toBeNull()
  })
})
