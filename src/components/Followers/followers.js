import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getData, getIsLoading, getError } from '../../modules/Followers';
import { fetchRequest } from '../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

const mapStateToProps = state => ({
  data: getData(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});
const mapDispatchToProps = { fetchRequest };

function Follower(props) {
  const { login, image } = props;
  return (
    <div className={styles.follower}>
      <img className={styles.followerImg} src={image} />
      <p className={styles.followerLogin}>{login}</p>
    </div>
  );
}

class Followers extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { isLoading, error, data } = this.props;
    if (isLoading) return <div>Данные загружаются</div>;
    if (error) return <p>{error.toString()}</p>;
    if (!data) return null;

    return (
      <div className={cx(styles.root, 't-followers')}>
        {data.map &&
          data.map(follower => {
            const { login, image } = follower;
            return <Follower key={login} login={login} image={image} />;
          })}
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Followers);
