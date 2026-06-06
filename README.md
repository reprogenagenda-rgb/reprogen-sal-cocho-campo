# APP COCHO CAMPO V1.1 SUPABASE — Operação Segura

## Base preservada
Evolução sobre o Campo V1.0 aprovado:
- Login por CHAVE_FAZENDA + usuário + PIN
- Baixar base offline
- Selecionar cocho e produto
- Informar kg
- Capturar GPS
- Salvar offline
- Sincronizar com Supabase
- Central V6.4.2 recebendo/histórico funcionando

## O que entrou
- Conferência antes de salvar: cocho, produto, kg e GPS.
- Alerta visual de GPS: COM GPS / SEM GPS / precisão fraca.
- Botão para ver último lançamento do cocho.
- Bloqueio de possível duplicidade local: mesmo cocho + produto + kg em menos de 5 minutos.
- Mantém GPS do lançamento opcional: se não capturar, salva como SEM_GPS.

## SUPABASE
Não precisa rodar SQL novo.

## GITHUB
No repositório do Campo, subir/substituir:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza App Cocho Campo V1.1 Operacao Segura`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.1-operacao-segura`

## Teste
1. Abrir Campo V1.1.
2. Testar Supabase.
3. Login.
4. Baixar base.
5. Lançar: selecionar cocho, produto e kg.
6. Ver conferência.
7. Capturar GPS.
8. Salvar offline.
9. Tentar salvar igual novamente em menos de 5 min: deve bloquear possível duplicidade.
10. Sincronizar.
11. Conferir na Central V6.4.2.

## Validação técnica
JS validado com node --check: True
