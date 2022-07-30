/**
 * @author liuyuan
 * @date 2022-07-30 20:30
 * @since 0.0.0
 */

import React from 'react'
//import classnames from 'classnames'
//import style from './style.module.scss'

interface TimeProps {}

const Time: React.FC<TimeProps> = (props) => {
    return (
        <div>
            <canvas id='canvas' width='500' height='500'></canvas>
        </div>
    )
}

export default React.memo(Time)
