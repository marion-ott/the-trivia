import React from 'react'
import css from './score.scss'

const Score = (props) => (
    <div className={css.component}>
        <p>Score : <span>{props.score}</span></p>
    </div>
)

export default Score