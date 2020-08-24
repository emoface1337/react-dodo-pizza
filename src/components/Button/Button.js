import React from 'react'
import classNames from 'classnames'

const Button = ({ onClick, className, outline, children }) => (
    <button
        onClick={onClick}
        className={classNames('button', className, {
            'button--outline': outline
        })}>
        {children}
    </button>
)

export default Button