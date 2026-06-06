# APP COCHO CAMPO V1.1.1 SUPABASE — Seleção Persistente

## Diagnóstico corrigido
Na V1.1, ao capturar GPS ou atualizar a tela, os campos de seleção podiam voltar ao vazio:
- Cocho selecionado
- Produto selecionado

## Causa técnica
A função de atualização da interface chamava `preencherSelects()` várias vezes.  
Isso reconstruía o HTML dos selects e perdia o valor selecionado.

## Correção
- O app agora preserva o cocho e o produto selecionados ao reconstruir os selects.
- O rascunho do lançamento fica salvo localmente.
- Ao capturar GPS, a seleção de cocho/produto não deve mais sumir.
- Ao voltar para a aba Lançar, o cocho/produto continuam selecionados.

## SUPABASE
Não precisa rodar SQL.

## GITHUB
Substituir no repositório do Campo:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Corrige selecao persistente Campo Cocho V1.1.1`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.1.1-selecao-persistente`

## Teste
1. Login.
2. Baixar base.
3. Lançar.
4. Selecionar cocho.
5. Selecionar produto.
6. Informar kg.
7. Capturar GPS.
8. Conferir que cocho e produto continuam selecionados.
9. Salvar offline.
10. Sincronizar.

## Validação técnica
JS validado com node --check: True
