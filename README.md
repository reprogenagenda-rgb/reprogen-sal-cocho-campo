# APP COCHO CAMPO V1.1.2 SUPABASE — Seleção Persistente Corrigida

## Correção real
O arquivo anterior pode ter ficado igual ao V1.1.  
Este pacote foi recriado a partir do Campo V1.0 aprovado e recebeu a correção novamente, com versão visível V1.1.2.

## O que corrigiu
- Ao escolher cocho e produto, a seleção fica salva como rascunho local.
- Ao capturar GPS, o cocho e o produto não devem sumir.
- Ao voltar para a aba Lançar, o rascunho é recuperado.
- A tela mostra uma Conferência antes de salvar.

## SUPABASE
Não mexer no Supabase.

## GITHUB
Substituir no repositório do Campo:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Corrige Campo Cocho V1.1.2 selecao persistente`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.1.2-selecao-persistente-corrigida`

## Conferência no GitHub
No começo do index.html precisa aparecer:
`APP COCHO CAMPO V1.1.2 SUPABASE`

## Teste
1. Login.
2. Baixar base.
3. Lançar.
4. Selecionar cocho.
5. Selecionar produto.
6. Informar kg.
7. Capturar GPS.
8. Cocho e produto devem continuar selecionados.

## Validação técnica
JS validado com node --check: True
