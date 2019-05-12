const sizes = {
  desktopB: '1200px',
  desktopL: '1100px',
  desktopM: '1000px',
  desktopS: '930px',
  tabletL: '750px',
  tabletM: '675px',
  tabletS: '608px',
  mobileB: '550px',
  mobileS: '320px'
};

export const below = {
  desktopB: `(max-width: ${sizes.desktopB})`,
  desktopL: `(max-width: ${sizes.desktopL})`,
  desktopM: `(max-width: ${sizes.desktopM})`,
  desktopS: `(max-width: ${sizes.desktopS})`,
  tabletL: `(max-width: ${sizes.tabletL})`,
  tabletM: `(max-width: ${sizes.tabletM})`,
  tabletS: `(max-width: ${sizes.tabletS})`,
  mobileB: `(max-width: ${sizes.mobileB})`,
  mobileS: `(max-width: ${sizes.mobileS})`
};
