import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/button.module.scss'
import classnames from 'classnames'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean,
  block?: boolean,
  to?: string,
}

const Button: React.FC<ButtonProps> = ({ children, primary, block, to, className, ...props }) => {
  const classes = classnames(styles.button, className, {
    [styles.primary]: primary,
    [styles.block]: block,
  })

  if (to)
    return <Link to={to} className={classes}>{children}</Link>

  return <button className={classes} {...props}>{children}</button>
}

export default Button