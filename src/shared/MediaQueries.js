const sizes = {
  desktopB: '1200px',
  desktopL: '1100px',
  desktopM: '1000px',
  desktopS: '930px',
  tabletL: '800px',
  tabletM: '722px',
  tabletS: '608px',
  mobileB: '500px',
  mobileL: '414px',
  mobileM: '375px',
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
  mobileL: `(max-width: ${sizes.mobileL})`,
  mobileM: `(max-width: ${sizes.mobileM})`,
  mobileS: `(max-width: ${sizes.mobileS})`
};
