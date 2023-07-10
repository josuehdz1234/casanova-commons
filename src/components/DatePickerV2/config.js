export const getPopperConfig = ({ placement, element, onFirstUpdate }) => ({
  placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [10, 20],
      },
    },
    {
      name: 'arrow',
      options: {
        element,
        padding: 25,
      },
    },
  ],
  strategy: 'fixed',
  onFirstUpdate,
});
