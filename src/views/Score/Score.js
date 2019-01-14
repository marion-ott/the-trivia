import React from 'react'
import css from './score.scss'

const Score = (props) => (
    <div className={css.component}>
        <p>Score : <span>{props.score}</span></p>
        <p>Nombre d'essais : <span>{props.tries}</span></p>
        <p>Erreurs : <span>{props.errors}</span></p>
    </div>
)

export default Score