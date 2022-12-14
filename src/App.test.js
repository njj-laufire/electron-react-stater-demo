import { render } from '@testing-library/react';

import App from './App';
import context from './core/context';

describe('App', () => {
	test('renders the component appropriately', () => {
		const { container: { children }} = render(App(context));
		const [rootElement] = children;

		expect(rootElement).toBeInTheDocument();
	});
});
