import React from 'react';
import { mount } from 'enzyme-adapter-react-16';
import Footer from '../../components/Footer';

describe('<Footer />', () => {
	test('Render del componente Footer', () => {
		const footer = mount(<Footer />);
		expect(footer.length).toEqual(1);
	});
});
