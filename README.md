# REPROGEN CAMPO V3.4.1 — Sync Corrigido

Pacote completo para subir no GitHub Pages.

## Arquivos incluídos

```text
index.html
manifest.json
service-worker.js
README.md
LEIA_PRIMEIRO.txt
icons/icon-192.png
icons/icon-512.png
```

## Correção principal

O App Campo deixou de enviar pela ação antiga:

```text
syncRegistrosComLote
```

e passa a usar ações compatíveis com o Apps Script V1.4:

```text
salvarRegistro
salvarNota
salvarMovimentacao
cadastrarPropriedade
```

Também foi incluído o botão:

```text
Fila > Reprocessar Erros
```

para transformar registros com `ERRO` em `PENDENTE` e permitir novo envio.

## Como subir no GitHub

No repositório do Campo, envie/substitua:

```text
index.html
manifest.json
service-worker.js
README.md
icons/icon-192.png
icons/icon-512.png
```

Mensagem de commit sugerida:

```text
Atualiza Campo V3.4.1 com sincronização corrigida
```

## Depois de subir

Abra o app com quebra de cache:

```text
https://SEU_USUARIO.github.io/SEU_REPOSITORIO/?v=341
```

No celular:

1. Config > URL do Apps Script V1.4 > Salvar
2. Config > Testar Conexão
3. Fila > Reprocessar Erros
4. Fila > Sincronizar Agora

## Critério de aprovação

```text
Pendentes = 0
Registros com ERRO viram OK
Central recebe registros
Mapa mantém GPS funcionando
```
