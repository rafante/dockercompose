import React from 'react';
import './css/safira_footer_logo.scss'

type SafiraFooterLogoProps = { largura: number }

export default function SafiraFooterLogo({ largura }: SafiraFooterLogoProps) {
    return (
        <div>
            <img
                src={require("../recursos/imagens/logo_site2.png")}
                className="safira_footer_logo"
                width={largura.toString() + 'px'}
                alt=""
            />
        </div>
    );
}
