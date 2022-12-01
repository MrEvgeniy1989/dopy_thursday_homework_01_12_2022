import React from 'react';
import s from './SuperButton.module.css'

type PropsType = {
    callBack: () => void
    color?: string
    children?: React.ReactNode
    sizeButton?: string
    disabled?: boolean
}

export const SuperButton: React.FC<PropsType> = (props) => {
    const {callBack, color, children, disabled, ...otherProps} = props

    //в зависимости от типа и дизэйбла прицепить нужный класс в SuperButton.tsx
    // const finalClassName = s.button
    //     + (disabled
    //         ? ' ' + s.disabled
    //         : color === 'red'
    //             ? ' ' + s.red
    //             : color === 'secondary'
    //                 ? ' ' + s.secondary
    //                 : ' ' + s.default)
    //     + (className ? ' ' + className : '')

    // const finalClassName = `${s.button} ${s.default}`
    // const finalClassName = `${s.button} ${color === 'red' ? s.red : s.default} ${s.default}`
    const finalClassName = `
    ${s.button}
    ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default}
    ${disabled === true ? s.disabled : ''}
    `

    const callBackHandler = () => {
        callBack()
    }

    return (
        <button className={finalClassName} onClick={callBackHandler}>{children}</button>
    )
}


//------------------------------------------------------------------------------------------------------

// import React from 'react';
//
// type PropsType = {
//     callBack: () => void
//     color: string
//     children?: React.ReactNode
//     sizeButton?: string
// }
//
// export const SuperButton: React.FC<PropsType> = ({
//                                                      callBack,
//                                                      color,
//                                                      children,
//                                                      ...props}) => {
//     const callBackHandler = () => {
//         callBack()
//     }
//
//     return (
//         <button onClick={callBackHandler}>{children}</button>
//     )
// }