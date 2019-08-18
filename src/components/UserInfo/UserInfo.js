import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getData, getIsLoading, getError } from '../../modules/User';
import { fetchRequest } from '../../modules/User';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  data: getData(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});
const mapDispatchToProps = { fetchRequest };

class UserInfo extends PureComponent {
  render() {
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    const { isLoading, error, data } = this.props;
    if (isLoading) return <div>Данные загружаются</div>;
    if (error) return <p>{error.toString()}</p>;
    if (!data) return null;

    const { image, name, summary } = data;

    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={image}
            alt={summary ? summary.slice(0, 150) : name}
          />
        </div>
        <div>
          <p className="t-user-name">{name}</p>
          <p className="t-user-bio">{summary}</p>
        </div>
      </div>
    );
  }
}

// Используйте поля data, isLoading из стейта
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
