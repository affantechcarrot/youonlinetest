import React from 'react'
import {  Icon,View, scale
 } from '../common'
import styles from './Styles/SocialStyle'

const Social = () => {
  return (
    <View style={[styles.socialWrap]}>
      <Icon name={'facebook-f'} size={scale(25)}/>
      <Icon name={'twitter'} size={scale(25)}/>
      <Icon name={'linkedin'} size={scale(25)}/>
      <Icon name={'linkedin'} size={scale(25)}/>
      <Icon name={'facebook-f'} size={scale(25)}/>
  </View>
  )
}

// // Prop type warnings
// Social.propTypes = {
//   someProperty: PropTypes.object,
//   someSetting: PropTypes.bool.isRequired,
// }
//
// // Defaults for props
// Social.defaultProps = {
//   someSetting: false
// }

export default Social
