import React from 'react'
import {render, cleanup} from '@testing-library/react'
import Subcategory from './Subcategory'

afterEach(cleanup)

describe('<Subcategory />', () => {
    it("renders Subcategory component", () => {
        const {asFragment} = render(<Subcategory />)
        expect(asFragment()).toMatchSnapshot()
    })

    // it('inserts text in button', () => {
    //     const {getByTestId} = render(<Subcategory />)
    //     expect(getByTestId('showmorebtn')).toHaveTextContent('Show more...')
    // })

    /* 
        Are these Genres, etc. hard coded? or in Database?
        Where is this data?
        Do I need to make a new Collection?
            Or is this a subset of another collection?
    */
})