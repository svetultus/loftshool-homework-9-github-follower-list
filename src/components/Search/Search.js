import React, { PureComponent } from 'react';
import styles from './Search.module.css';
import Input from '../Input';
import { connect } from 'react-redux';
import { fetchRequest as fetchUserRequest } from '../../modules/User';
import { fetchRequest as fetchFollowersRequest } from '../../modules/Followers';
import { getApiKey } from '../../modules/Auth';
import {
  getData as getFollowersData,
  getIsLoading as getFollowersIsLoading,
  getError as getFollowersError
} from '../../modules/Followers';
import UserInfo from '../UserInfo';
import Followers from '../Followers';

const mapStateToProps = state => ({
  ApiKey: getApiKey(state)
  // userData: getUserData(state),
  // userIsLoading: getUserIsLoading(state),
  // userError: getUserError(state),
  // followersData: getFollowersData(state),
  // followersIsLoading: getFollowersIsLoading(state),
  // followersError: getFollowersError(state)
});
const mapDispatchToProps = { fetchUserRequest, fetchFollowersRequest };

class Search extends PureComponent {
  state = {
    user: ''
  };

  input = React.createRef();

  handleChange = event => {
    this.setState({ user: event.target.value });
  };

  handleKeyPress = event => {
    const { fetchUserRequest, fetchFollowersRequest } = this.props;
    const { user } = this.state;

    if (event.key === 'Enter' && user.length > 0) {
      fetchUserRequest(user);
      fetchFollowersRequest(user);
    }
  };

  componentDidMount() {
    this.input.current.focus();
  }

  render() {
    console.log(this.props);
    const { user } = this.state;
    // const { userData, userIsLoading, userError } = this.props;
    // const { followersData, followersIsLoading, followersError } = this.props;

    return (
      <div className={styles.root}>
        <Input
          ref={this.input}
          value={user}
          className="t-search-input"
          placeholder="Ник пользователя"
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <UserInfo />
        <Followers />
        {/* <UserInfo
          userData={userData}
          isLoading={userIsLoading}
          error={userError}
        /> */}
        {/* <Followers
          followersData={followersData}
          isLoading={followersIsLoading}
          error={followersError}
        /> */}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
