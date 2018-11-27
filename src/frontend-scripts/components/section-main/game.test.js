import React from 'react'; // eslint-disable-line
import { shallow } from 'enzyme';
import Game from './Game';

describe('Game', () => {
	it('should initialize correctly', () => {
		const component = shallow(<Game />);

		expect(component).toHaveLength(1);
	});
});
