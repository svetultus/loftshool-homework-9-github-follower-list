import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';

import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  render() {
    if (!this.props.userData) return null;

    const { login, image, name, summary } = this.props.userData;
    // Покажите статус загрузки
    // Если данные не были загружены - сообщите об этом пользователю
    return (
      <div className={styles.root}>
        <div className={styles.imageWrapper}>
          <img
            className={styles.image}
            src={image}
            alt={summary.slice(0, 150)}
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
export default connect(state => ({}))(UserInfo);
