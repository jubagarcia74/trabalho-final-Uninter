// ============================================
// CIÊNCIA DE DADOS AO ALCANCE DOS JOVENS
// Gráficos com Chart.js — Dados reais de Porto Alegre
// ============================================

// Configuração global do Chart.js
Chart.defaults.color = '#94a3b8';
Chart.defaults.borderColor = '#1e293b';
Chart.defaults.font.family = "'Inter', sans-serif";

document.addEventListener('DOMContentLoaded', function() {

    // GRÁFICO 1: Distribuição de Matrículas
    var ctxMatriculas = document.getElementById('chartMatriculas');
    if (ctxMatriculas) {
        new Chart(ctxMatriculas.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Ensino Fundamental', 'Ensino Médio'],
                datasets: [{
                    label: 'Matrículas 2023',
                    data: [142539, 48721],
                    backgroundColor: ['rgba(0, 230, 138, 0.7)', 'rgba(0, 184, 212, 0.7)'],
                    borderColor: ['#00e68a', '#00b8d4'],
                    borderWidth: 2,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1a2332',
                        titleColor: '#ffffff',
                        bodyColor: '#94a3b8',
                        borderColor: '#1e293b',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.y.toLocaleString('pt-BR') + ' matrículas';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(30, 41, 59, 0.5)'
                        },
                        ticks: {
                            callback: function(value) {
                                return (value / 1000) + 'K';
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // GRÁFICO 2: Evolução do IDEB
    var ctxIdeb = document.getElementById('chartIdeb');
    if (ctxIdeb) {
        new Chart(ctxIdeb.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['2015', '2017', '2019', '2021', '2023'],
                datasets: [
                    {
                        label: 'Anos Iniciais',
                        data: [5.2, 5.4, 5.5, 5.6, 5.8],
                        borderColor: '#00e68a',
                        backgroundColor: 'rgba(0, 230, 138, 0.1)',
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: '#00e68a',
                        pointBorderColor: '#00e68a',
                        pointRadius: 5,
                        pointHoverRadius: 7
                    },
                    {
                        label: 'Anos Finais',
                        data: [4.0, 4.1, 4.3, 4.4, 4.6],
                        borderColor: '#00b8d4',
                        backgroundColor: 'rgba(0, 184, 212, 0.1)',
                        fill: true,
                        tension: 0.3,
                        pointBackgroundColor: '#00b8d4',
                        pointBorderColor: '#00b8d4',
                        pointRadius: 5,
                        pointHoverRadius: 7
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            usePointStyle: true,
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1a2332',
                        titleColor: '#ffffff',
                        bodyColor: '#94a3b8',
                        borderColor: '#1e293b',
                        borderWidth: 1
                    }
                },
                scales: {
                    y: {
                        min: 3.5,
                        max: 6.5,
                        grid: {
                            color: 'rgba(30, 41, 59, 0.5)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // GRÁFICO 3: Infraestrutura das Escolas
    var ctxInfra = document.getElementById('chartInfra');
    if (ctxInfra) {
        new Chart(ctxInfra.getContext('2d'), {
            type: 'doughnut',
            data: {
                labels: ['Com Internet', 'Sem Internet', 'Com Lab. Informática', 'Sem Lab. Informática'],
                datasets: [{
                    data: [589, 35, 312, 312],
                    backgroundColor: [
                        'rgba(0, 230, 138, 0.8)',
                        'rgba(239, 68, 68, 0.8)',
                        'rgba(167, 139, 250, 0.8)',
                        'rgba(100, 116, 139, 0.4)'
                    ],
                    borderColor: '#111827',
                    borderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 15,
                            font: {
                                size: 11
                            }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1a2332',
                        titleColor: '#ffffff',
                        bodyColor: '#94a3b8',
                        borderColor: '#1e293b',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                var total = 624;
                                var pct = ((context.parsed / total) * 100).toFixed(1);
                                return context.label + ': ' + context.parsed + ' escolas (' + pct + '%)';
                            }
                        }
                    }
                }
            }
        });
    }

    // GRÁFICO 4: Relação Alunos por Professor
    var ctxDocentes = document.getElementById('chartDocentes');
    if (ctxDocentes) {
        new Chart(ctxDocentes.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Ensino Fundamental', 'Ensino Médio', 'Média Geral'],
                datasets: [{
                    label: 'Alunos por Professor',
                    data: [18.3, 15.3, 17.4],
                    backgroundColor: [
                        'rgba(0, 230, 138, 0.7)',
                        'rgba(0, 184, 212, 0.7)',
                        'rgba(167, 139, 250, 0.7)'
                    ],
                    borderColor: [
                        '#00e68a',
                        '#00b8d4',
                        '#a78bfa'
                    ],
                    borderWidth: 2,
                    borderRadius: 6
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1a2332',
                        titleColor: '#ffffff',
                        bodyColor: '#94a3b8',
                        borderColor: '#1e293b',
                        borderWidth: 1,
                        callbacks: {
                            label: function(context) {
                                return context.parsed.x + ' alunos por professor';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 25,
                        grid: {
                            color: 'rgba(30, 41, 59, 0.5)'
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

});
