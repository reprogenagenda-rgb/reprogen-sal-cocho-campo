# APP COCHO CAMPO V1.1.4 SUPABASE — Botão Único GPS + Lançamento

## Correção funcional
O fluxo de campo foi simplificado para evitar duas ações separadas.

Antes:
- Capturar GPS
- Salvar Offline

Agora:
- **Registrar lançamento + GPS**

Esse botão faz:
1. valida cocho/produto/kg;
2. captura GPS;
3. registra o lançamento offline;
4. deixa o registro pendente para sincronizar depois.

## Botão de exceção
Existe também:
- **Registrar sem GPS**

Esse botão deve ser usado somente quando o GPS falhar ou estiver autorizado, para não travar o vaqueiro no campo.

## Base preservada
- Login
- Baixar base
- Seleção persistente de cocho/produto
- Fazenda salva no lançamento offline
- Snapshot da fazenda
- Fila offline
- Sincronização posterior
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
`Atualiza Campo Cocho V1.1.4 botao unico GPS lancamento`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.1.4-botao-unico`

## Teste
1. Login.
2. Baixar base.
3. Desligar internet se quiser testar offline.
4. Selecionar cocho.
5. Selecionar produto.
6. Informar kg.
7. Clicar **Registrar lançamento + GPS**.
8. Confirmar que entrou em pendentes.
9. Voltar internet.
10. Sincronizar.
11. Conferir na Central V6.4.2.

## Validação técnica
JS validado com node --check: True
