import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import styles from './Card.module.css'

const Card = (props) => {
  return <div className={styles.CardWrapper}>{props.children}</div>
}

export default Card
