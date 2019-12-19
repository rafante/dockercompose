import React from 'react';
import { Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import './css/dashboard.scss';
import { Card } from '@blueprintjs/core';
// import { BarraPesquisaGeral } from '.';

export default () => {
    const data1 = {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(179,181,198,0.2)',
                borderColor: 'rgba(179,181,198,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                pointBackgroundColor: 'rgba(255,99,132,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255,99,132,1)',
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
    const data2 = {
        labels: [
            'Red',
            'Green',
            'Yellow'
        ],
        datasets: [{
            data: [300, 50, 100],
            backgroundColor: [
                '#AABBCC',
                '#DDEEFF',
                '#ABCDEF'
            ],
            hoverBackgroundColor: [
                '#FEDCBA',
                '#FEDCBA',
                '#FEDCBA',
            ]
        }]
    };
    const data3 = {
        labels: [
            'Anderson',
            'Gleiciano',
            'Bruno',
            'Juscelino'
        ],
        datasets: [{
            data: [150, 150, 100, 80],
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#FFCEC6'
            ],
            hoverBackgroundColor: [
                '#ABCDEF',
                '#ABCDEF',
                '#ABCDEF',
                '#ABCDEF',
            ]
        }]
    };
    const data4 = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Rendimento',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56]
            }
        ]
    };
    return (
        <div style={{ height: 500, overflowY: 'auto' }}>
            {/* <BarraPesquisaGeral /> */}
            <div id="dashboard_main_div">
                <Card>
                    {/* <div className="dashboard_widget1"> */}
                    <Radar data={data1} />
                    {/* </div> */}
                </Card>
                <Card>
                    {/* <div className="dashboard_widget2"> */}
                    <Doughnut data={data2} />
                    {/* </div> */}
                </Card>
                <Card>
                    {/* <div className="dashboard_widget2"> */}
                    <Pie data={data3} />
                    {/* </div> */}
                </Card>
                <Card>
                    {/* <div className="dashboard_widget1"> */}
                    <Bar data={data4} />
                    {/* </div> */}
                </Card>
            </div>
        </div>

    );
}
