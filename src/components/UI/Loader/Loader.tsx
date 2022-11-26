import React, {FC} from 'react';
import {CircularProgress} from "@mui/material";
import cl from './Loader.module.scss'

const Loader: FC = () => {
    return (
        <div className={cl.Loader}>
            <CircularProgress />
        </div>
    );
};

export default Loader;