# APP COCHO CAMPO V1.0 SUPABASE — Coletador Offline

## Objetivo
Primeira versão do App Cocho Campo, coletador operacional para enviar abastecimentos para a Central Supabase.

## Funções
- Config Supabase.
- Login por CHAVE_FAZENDA + usuário + PIN.
- Baixar base da fazenda.
- Operar offline.
- Selecionar cocho.
- Selecionar produto/sal.
- Informar kg colocados.
- Capturar GPS.
- Salvar lançamento offline.
- Sincronizar fila com Supabase.
- Evitar duplicidade por id_operacao_cliente.

## SUPABASE
Não rodar SQL novo se a Central V6.3.1 já foi aprovada.

O App Campo grava na tabela:
`lancamentos_cocho`

## GITHUB
Criar ou atualizar repositório do Campo, por exemplo:
`reprogen-sal-cocho-campo`

Subir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Cria App Cocho Campo V1.0 Supabase Offline`

## Teste oficial
1. Abrir app.
2. Configurar Supabase.
3. Testar conexão.
4. Login com CHAVE_FAZENDA + marcelo + 5544.
5. Baixar Base.
6. Conferir cochos e produtos.
7. Novo lançamento.
8. Capturar GPS.
9. Salvar Offline.
10. Conferir Fila.
11. Sincronizar.
12. Conferir na Central V6.3.1 Histórico.
