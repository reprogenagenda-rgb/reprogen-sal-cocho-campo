# APP COCHO CAMPO V1.2.3 SUPABASE — Sync Provisório UUID Fix

## Correção
O erro era:
`invalid input syntax for type uuid: "PROV-COCHO-..."`

## Causa
O Campo tentava enviar o ID local provisório no campo `cocho_id`, mas no Supabase `cocho_id` é UUID.

## Correção técnica
Antes de sincronizar o lançamento:
1. Se o cocho for provisório (`PROV-COCHO-...`), o Campo cria primeiro um registro na tabela `cochos`.
2. O Supabase retorna um UUID verdadeiro.
3. O lançamento é sincronizado usando esse UUID.
4. O ID provisório local fica registrado na observação.

## GitHub
Substituir no repositório do Campo:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Commit:
`Corrige Campo Cocho V1.2.3 sync provisorio uuid`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.2.3-sync-provisorio-uuid-fix`

## Teste
1. Abrir Campo V1.2.3.
2. Manter o lançamento pendente atual.
3. Clicar Sincronizar Pendentes.
4. Esperado: pendentes 0.
5. Abrir Central V7.1.1.
6. Ir em Cochos Provisórios ou Cochos GPS.
7. O cocho provisório deve aparecer no Supabase/Central.

JS validado: True
