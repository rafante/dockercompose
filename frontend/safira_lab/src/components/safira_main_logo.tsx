import React from 'react';
import './css/safira_main_logo.scss';

type SafiraMainLogoProps = { largura: number }

export default function SafiraMainLogo({ largura }: SafiraMainLogoProps) {
    return (
        <div>
            <img
                src={require("../recursos/imagens/logo_site.png")}
                className="safira_main_logo"
                width={largura.toString() + 'px'}
                alt=""
            />
        </div>
    );
}
