# APP COCHO CENTRAL V6.9 SUPABASE — Relatório Gerencial da Fazenda

## Base preservada
Evolução sobre a Central V6.8.1 aprovada:
- estoque em nuvem;
- entradas cloud;
- saídas por abastecimento;
- saldo de estoque;
- custo e consumo;
- Campo V1.1.7 preservado.

## Conceito
A coleta acontece no cocho, mas a análise principal é o consumo do lote/fazenda.

## O que entrou
Nova aba **Gerencial**:
- kg consumidos;
- lançamentos;
- animais;
- kg/animal/dia;
- custo total;
- saldo de estoque;
- alertas gerenciais;
- resumo por produto;
- resumo por cocho/lote;
- exportação CSV.

## SUPABASE
Não precisa rodar SQL novo se a V6.8.1 já foi validada.

## GITHUB
Substituir no repositório da Central:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza Central Cocho V6.9 relatorio gerencial`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-central/index.html?v=6.9-relatorio-gerencial`

## Teste
1. Abrir Central V6.9.
2. Ativar FAZENDA TESTE SUPABASE 01.
3. Ir em Gerencial.
4. Gerar relatório.
5. Conferir kg, custo, estoque, GPS e alertas.
6. Exportar CSV.

## Validação técnica
JS validado com node --check: True
