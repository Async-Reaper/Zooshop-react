import React, { FC } from 'react'
import cl from './Info.module.scss'
import { InfoContent } from './InfoContent'

const InfoWrapper: FC = () => {
    return (
        <div className={cl.InfoWrapper}>
            <InfoContent />
        </div>
    )
}

export default InfoWrapper