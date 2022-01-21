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
    'linear-gradient(45deg, #fdbb2d, #dbca37, #b7d551, #94de71, #6fe393, #46e6b6, #14e8d5, #0ae7ef)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  minHeight: `calc(100vh - ${headerHeight})`
}

export const heroStyles = {
  ...centerStyles,
  ...gradientStyles
}

export default heroStyles
