import React from 'react'
import PropTypes from 'prop-types'

//import contactData from '../../mocks/contact.json'
import { Nav } from './Nav'
import ProfileScreen from './ProfileScreen'

const ProfileHeader = ({ navigation }) => (
    <ProfileScreen navigation={navigation} />
  )

ProfileHeader.navigationOptions = ({ navigation }) => ({
  header: (
    <Nav
      title="Settings"
      navigation={navigation}
      leftIcon={{
        type: 'ionicon',
        name: 'md-list',
        size: 26,
      }}
    />
  ),
})

ProfileHeader.propTypes = {
  navigation: PropTypes.object.isRequired,
}

export default ProfileHeader;