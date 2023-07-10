import React from 'react';
import { mount } from 'enzyme';
import { render, fireEvent } from '@testing-library/react';

import Accordion from '../Accordion';
import Collapse from '../Collapse';

const DumbComponent = ({ onRequestClose, name }) => (
  <div id={`dumb-${name}`} onClick={() => onRequestClose(name)}>
    Element div
  </div>
);

describe('Accordion', () => {
  test('should render without crash', () => {
    const wrapper = render(
      <Accordion label="Fecha" name="name">
        <Collapse
          name="collapse-element"
          title="Colapse element"
          titleProps={{ prop1: 'prop1' }}
          show
          onClick={(e) => console.log(e)}
          disabled={false}
          isNew={false}
        >
          <DumbComponent />
        </Collapse>
      </Accordion>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('should close when click on another element', () => {
    const { container } = render(
      <Accordion label="Fecha" name="name">
        <Collapse
          name="collapse-element"
          title="Colapse element"
          titleProps={{ prop1: 'prop1' }}
          show
          onClick={(e) => console.log(e)}
          disabled={false}
          isNew={false}
        >
          <DumbComponent />
        </Collapse>
        <Collapse
          name="collapse-element-2"
          title="Colapse element-2"
          titleProps={{ prop1: 'prop1' }}
          show={false}
          onClick={(e) => console.log(e)}
          disabled={false}
          isNew={false}
        >
          <DumbComponent />
        </Collapse>
      </Accordion>
    );

    const headers = container.querySelectorAll('.card-header');
    fireEvent.click(headers[1]);

    const elements = container.querySelectorAll('.card');

    expect(
      elements[1].querySelector('.collapse').className.includes('show')
    ).toEqual(true);
  });

  test('should close when click on the same element', () => {
    const { container } = render(
      <Accordion label="Fecha" name="name">
        <Collapse
          name="collapse-element"
          title="Colapse element"
          titleProps={{ prop1: 'prop1' }}
          show
          onClick={(e) => console.log(e)}
          disabled={false}
          isNew={false}
        >
          <DumbComponent />
        </Collapse>
        <Collapse
          name="collapse-element-2"
          title="Colapse element-2"
          titleProps={{ prop1: 'prop1' }}
          show={false}
          onClick={(e) => console.log(e)}
          disabled={false}
          isNew={false}
        >
          <DumbComponent />
        </Collapse>
      </Accordion>
    );

    const headers = container.querySelectorAll('.card-header');
    fireEvent.click(headers[0]);
    fireEvent.click(headers[0]);

    const elements = container.querySelectorAll('.card');

    expect(
      elements[0].querySelector('.collapse').className.includes('show')
    ).toEqual(false);
  });
});
