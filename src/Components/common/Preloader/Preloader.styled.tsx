/*В проелодере буду использовать styled-components*/
import styled from "styled-components";

interface PreloaderProps {
    initialize: boolean;
}

export const Container = styled.div<PreloaderProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: ${({initialize}) => initialize ? 0 : '100vh'};
    overflow: hidden;
    z-index: 20;
    transition: height 0.8s ease-in-out .400s;


    span {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: #111;


        @keyframes load {
            0% {
                opacity: 0.08;
                filter: blur(5px);
                letter-spacing: 3px;
            }
        }

        h3 {
            color: white;
            position: absolute;
            top: 50%;
            transform: translate(-50%, -50%);
            font-family: Helvetica, sans-serif, Arial;
            animation: load 1.5s infinite 0s ease-in-out;
            animation-direction: alternate;
            text-shadow: 0 0 1px white;
        }
    }
`


