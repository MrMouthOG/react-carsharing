import React from 'react';

import styles from './Title.module.scss';

export function Title({ title }) {
  return <h2 className={styles.title}>{title}</h2>
}