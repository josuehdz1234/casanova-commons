export const COLORS = {
  PRIMARY: '#cf703e',
  SECONDARY: '#007aff',
  WHITE: 'white',
  YELLOW: '#df9505',
  ROYAL_BLUE: 'royalblue',
  WOOD: '#d27b4d',
  BLUE: '#007aff',
  GOLD: '#f2a000',
  PLATINUM: '#8c8ca0',
  BLACK: '#000000',
  DARK_GRAY: '#333333',
  SUCCESS: '#27cb8a',
  NEGATIVE: '#ff0000',
};

export const getTextColor = (text) => {
  switch (text.toLowerCase()) {
    case 'verificada':
      return 'success';
    case 'disponible':
      return 'success';
    case 'rechazada':
      return 'danger';
    case 'vencida':
      return 'warning';
    case 'necesita verificación':
      return 'danger';
    case 'sin verificar':
    default:
      return 'default';
  }
};
