# APP COCHO CAMPO V1.1.7 SUPABASE — Base Offline Permanente

## Decisão funcional
Não é necessário baixar a base toda vez para lançar.

## Regra implementada
- Primeiro uso da fazenda: login + baixar base.
- Depois que a base foi baixada: o app pode lançar usando a base offline salva.
- Sem internet: usa a última base offline.
- Com internet: pode atualizar base quando houver novo cocho, produto, lote ou usuário.
- Se a sessão cair, o app restaura a fazenda a partir da base offline salva.

## O que entrou
- Botão: Usar Base Offline Salva.
- Barra de status: Base offline salva com fazenda, data, cochos e produtos.
- Restauração automática da sessão a partir da base offline.
- Lançamento liberado com base offline válida.
- Baixar base virou atualização, não obrigação diária.

## Base preservada
- Botão único: Registrar lançamento + GPS.
- Raio antes de salvar.
- Nome da fazenda no lançamento offline.
- Snapshot da fazenda.
- Seleção persistente.
- Fila offline.
- Sincronização com Supabase.
- Central V6.4.2.

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
`Atualiza Campo Cocho V1.1.7 base offline permanente`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.1.7-base-offline-permanente`

## Teste
1. Com internet, faça login e baixe a base.
2. Feche o app.
3. Abra novamente.
4. Toque em Usar Base Offline Salva.
5. Desligue internet.
6. Faça lançamento.
7. O lançamento deve salvar pendente.
8. Ligue internet.
9. Sincronize.
10. Confira na Central V6.4.2.

## Critério de aprovação
Depois de baixar a base uma vez, o operador não deve precisar baixar novamente para lançar na mesma fazenda.

## Validação técnica
JS validado com node --check: True
