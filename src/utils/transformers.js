export const makeBold = ({ section, keyword, withBr }) => {
  if (Array.isArray(keyword)) {
    let modifySection = null;

    keyword.map((text, i) => {
      const re = new RegExp(text, 'g');

      if (!modifySection) {
        modifySection = section;
      }

      const br = withBr[i] ? '<br>' : '';

      const PBold = modifySection.replace(
        re,
        `
        ${br}
        <p class="d-inline font-weight-bold">${text}</p>`
      );

      modifySection = PBold;

      return PBold;
    });

    return modifySection;
  }

  const re = new RegExp(keyword, 'g');

  return section.replace(
    re,
    `<p class="d-inline font-weight-bold">${keyword}</p>`
  );
};
