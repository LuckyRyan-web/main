/**
 * @author liuyuan
 * @date 2022-07-30 20:28
 * @since 0.0.0
 */

import React, { useMemo } from 'react'
//import classnames from 'classnames'
import style from './style.module.scss'

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const list = useMemo(() => {
        return [
            {
                label: 'github',
                link: 'https://github.com/',
            },
            {
                label: 'Blog',
                link: 'https://ryan-liu.cn/',
            },
            {
                label: '算法小册',
                link: 'https://ryan-liu.cn/algorithm',
            },
        ]
    }, [])

    return (
        <div>
            <img src='https://ghchart.rshah.org/LuckyRyan-web' alt='ryan-liu github chart'></img>
            <h2>前端切图仔 ryan-liu 的主页</h2>
            <div className={style.line}></div>
            <div className={style.linkList}>
                {list.map((v, k) => (
                    <span key={v.link}>
                        <span
                            className={style.link}
                            onClick={() => {
                                window.open(v.link, '_blank')
                            }}
                        >
                            {v.label}
                        </span>
                        {k !== list.length - 1 && <span> | </span>}
                    </span>
                ))}
            </div>
        </div>
    )
}

export default React.memo(Home)
