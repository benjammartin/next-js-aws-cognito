import defaultTheme from './defaultTheme'


function getTheme(props) {
  return props && Object.keys(props.theme).length > 0 ? props.theme : defaultTheme;
}

function getColor(type, index, theme) {
  return getTheme(theme).colors[type][index]
}

function getSpace(index, theme) {
  return getTheme(theme).space[index] + 'px'
}

function getRadius(index, theme) {
  return getTheme(theme).radius[index] + 'px'
}

function getFont(index, theme) {
  return getTheme(theme).space[index] + 'px'
}

function createSelector(getter) {
  return getter
}


export const color = createSelector(getColor)
export const space = createSelector(getSpace)
export const font = createSelector(getFont)
export const radius = createSelector(getRadius)