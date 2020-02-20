import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { render } from '@testing-library/react';
import { mount } from 'enzyme';
import Brand from '../brand';
import PianoScale from '../scale';
import PianoKey from '../key';

// Configure Enzyme
Enzyme.configure({ adapter: new Adapter() })

describe('<Brand/>', () => {
    it('renders the Brand', () => {
        const container = render(<Brand />)
        expect(container.firstChild).toMatchSnapshot()
    })

    it('renders the piano brand', () => {
        const { getByText } = render(<Brand />);
        const linkElement = getByText(/Roland/i);
        expect(linkElement).toBeInTheDocument();
    });
})

describe('<PianoScale/>', () => {
    it('renders the PianoScale', () => {
        const container = render(<PianoScale />)
        expect(container.firstChild).toMatchSnapshot()
    })
})

describe('<PianoKey/>', () => {
    const mockFn = jest.fn();

    const props = {
        note: 'A', 
        isFlat: false, 
        isHalfStep: false, 
        octave: 2, 
        onStart: mockFn, 
        onStop: mockFn,
        selectedNote: 'A'
    }

    it('renders the PianoKey', () => {
        const container = mount(<PianoKey {...props} />)
        container.find('li').simulate('click')
        expect(mockFn).toHaveBeenCalled()
    })
})

