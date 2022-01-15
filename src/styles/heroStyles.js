const headerHeight = '56px'
const heroStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background:
    'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)',
  color: 'white',
  /* Take up 30% of the viewport's height, (30 out of 100) */
  height: `calc(100vh - ${headerHeight})`,
  maxWidth: '100%',
  margin: '0'
}

export default heroStyles
