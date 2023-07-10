import React from 'react';
import { render } from '@testing-library/react';

import Badge from '..';

describe('Badge', () => {
  it('should render Badge with defaults', () => {
    const wrapper = render(<Badge />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render Badge with whole properties', () => {
    const { container } = render(
      <Badge
        pill
        outline
        closeable
        onClose={() => {
          console.log('click event');
        }}
      />
    );
    expect(container.querySelector('.badge-closeable')).toBeTruthy();
  });
});
