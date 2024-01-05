import type { FunctionComponent, MouseEventHandler, PropsWithChildren } from 'react';
import React from 'react';
import classNames from 'classnames';
import CheckmarkIcon from '../../static/svgs/CheckmarkIcon';
import XIcon from '../../static/svgs/XIcon';
import WarningIcon from '../../static/svgs/WarningIcon';
import styles from './PopupMessage.scss';

type PopupProps = PropsWithChildren<{
  message: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}>;

const SuccessPopup: FunctionComponent<PopupProps> = ({ message, onClick }) => (
  <div className={classNames(styles.container, styles.success)}>
    <div className={styles.leftIcon}>
      <CheckmarkIcon />
    </div>
    <p>{message}</p>
    <div className={styles.rightIcon}>
      <button type="button" onClick={onClick}>
        <XIcon />
      </button>
    </div>
  </div>
);

const FailurePopup: FunctionComponent<PopupProps> = ({ message, onClick }) => (
  <div className={classNames(styles.container, styles.failure)}>
    <div className={styles.leftIcon}>
      <WarningIcon />
    </div>
    <p>{message}</p>
    <div className={styles.rightIcon}>
      <button type="button" onClick={onClick}>
        <XIcon />
      </button>
    </div>
  </div>
);

export { SuccessPopup, FailurePopup };