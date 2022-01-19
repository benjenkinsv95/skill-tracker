const headerHeight = '56px'
export const centerStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  margin: '0'
}

export const gradientStyles = {
  background:
    'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const heroStyles = {
  ...centerStyles,
  ...gradientStyles
}

export default heroStyles
