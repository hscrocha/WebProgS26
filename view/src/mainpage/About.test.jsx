import { render } from '@testing-library/react';
import About from './About';

test("About matches Snapshot", function(){
    const {baseElement} = render( <About /> );
    expect(baseElement).toMatchSnapshot();
});