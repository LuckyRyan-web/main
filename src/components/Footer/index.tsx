/**
 * @author liuyuan
 * @date 2022-07-30 21:48
 * @since 0.0.0
 */

import React from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'

interface FooterProps {}

const Footer: React.FC<FooterProps> = (props) => {
    return (
        <div
            className={style.footer}
            onClick={() => {
                window.open('https://beian.miit.gov.cn')
            }}
        >
            粤ICP备2022091428号-1
        </div>
    )
}

export default React.memo(Footer)
