import React, { FC } from 'react'
import cl from './Info.module.scss'

export const InfoContent: FC = () => {
    return (
        <div className={cl.InfoCompanyWrapper}>
            <h1 className={cl.InfoTitle}>Наша компания</h1>
            <p className={cl.InfoCompanyText}>
                Наш магазин специализируется на продаже товаров для животных: корма, игрушки, миски и так далее.
            </p>
            <p className={cl.InfoCompanyText}>
                У нас вы можете приобрести товары для разных видов животных: рыбки, собаки, кошки, хомячки, попугаи и прочие домашние животные.
            </p>
            <p className={cl.InfoCompanyText}>
                Мы находимся по адресу: г. Междуреченск, просп. Шахтёров, д. 37, 652873
            </p>
        </div>
    )
}
