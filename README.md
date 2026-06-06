# APP COCHO CAMPO V1.1.5 SUPABASE — Raio antes de salvar

## Objetivo
Mostrar no próprio App Campo se o operador está dentro ou fora do raio do cocho selecionado antes de registrar o lançamento.

## O que entrou
- Cálculo de distância no Campo usando GPS do cocho + GPS do lançamento.
- Aviso visual:
  - DENTRO_DO_RAIO
  - FORA_DO_RAIO
  - SEM_GPS
  - COCHO_SEM_GPS
- A conferência antes de salvar mostra o raio/distância.
- O lançamento local guarda:
  - distancia_cocho_m
  - status_raio_local
  - raio_aceito_m

## Importante
A Central V6.4.2 continua calculando oficialmente o raio depois da sincronização.
O Campo V1.1.5 mostra o alerta antes de salvar para evitar erro no campo.

## Base preservada
- Botão único: Registrar lançamento + GPS
- Registrar sem GPS como exceção
- Seleção persistente de cocho/produto
- Fazenda registrada offline
- Fila offline
- Sincronização
- Central V6.4.2

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
`Atualiza Campo Cocho V1.1.5 raio antes de salvar`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.1.5-raio-antes-salvar`

## Teste
1. Login.
2. Baixar base.
3. Selecionar cocho.
4. Selecionar produto.
5. Informar kg.
6. Clicar Registrar lançamento + GPS.
7. Antes/sobre o registro deve aparecer DENTRO_DO_RAIO ou FORA_DO_RAIO.
8. Sincronizar.
9. Conferir na Central V6.4.2.

## Validação técnica
JS validado com node --check: True
