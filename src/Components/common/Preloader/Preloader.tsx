import {Container} from "./Preloader.styled"
import React from "react";

interface PreloaderProps {
    initialize: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({initialize}) => {
    return (
        <Container initialize={initialize}>
        <span>
        {/*    <h3>Загрузка...</h3>*/}
        </span>
        </Container>
    )
}

export default Preloader;
