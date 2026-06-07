# APP COCHO CAMPO V1.2.2 SUPABASE — Cocho Próximo / Antiduplicidade

## Objetivo
Simplificar a interface para o vaqueiro e evitar duplicidade de cochos.

## Regra
Antes de criar cocho provisório, o app captura o GPS e compara com os cochos cadastrados na base offline.

## Distâncias
- Até 30 m: bloqueia criação de provisório e sugere usar cocho existente.
- 31 a 50 m: alerta forte; pode usar existente ou criar provisório mesmo assim com auditoria.
- Acima de 50 m: cria cocho provisório automático.

## Interface simplificada
O vaqueiro não preenche nome, código nem lote do cocho provisório.
Ele apenas toca:
**Cocho novo neste ponto**

O app decide:
- usar cocho existente;
- alertar cocho próximo;
- criar provisório automático.

## Sinalizações salvas
- cocho_provisorio = true
- cocho_status_cadastro = COCHO_PROVISORIO
- requer_confirmacao_central = true
- cocho_proximo_id e distancia_cocho_proximo_m quando houver alerta

## GitHub
Substituir no repositório do Campo:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza Campo Cocho V1.2.2 antiduplicidade`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.2.2-cocho-proximo-antiduplicidade`

## Teste
1. Abrir Campo V1.2.2.
2. Usar base offline.
3. Ir em Lançar.
4. Tocar Cocho novo neste ponto.
5. Se estiver perto de cocho existente até 30 m, deve bloquear e sugerir usar existente.
6. Se não houver cocho próximo, deve criar provisório automático.
7. Registrar lançamento + GPS.

## Validação técnica
JS validado com node --check: False
