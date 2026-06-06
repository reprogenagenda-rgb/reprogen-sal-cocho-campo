# APP COCHO CAMPO V1.2 SUPABASE — Cocho Provisório no Campo

## Base preservada
Evolução sobre o Campo V1.1.7 aprovado:
- base offline permanente;
- botão único Registrar lançamento + GPS;
- raio antes de salvar;
- sincronização com Supabase;
- Central V7.0 preservada.

## Nova regra
O cocho pode nascer no Campo no primeiro lançamento.

## Fluxo
1. Operador está diante de um cocho real que não existe na base.
2. Toca em **Novo cocho provisório neste ponto**.
3. Captura GPS obrigatório do cocho provisório.
4. Cria o cocho provisório localmente.
5. O cocho provisório fica selecionado para o lançamento.
6. Lançamento é salvo offline com sinalização:
   - cocho_provisorio = true
   - status = COCHO_PROVISORIO
   - requer_confirmacao_central = true
7. A Central deverá confirmar, corrigir, nomear/codificar e transformar em cocho oficial.

## Obrigatório
- GPS do cocho provisório.

## Opcional
- nome provisório;
- código provisório;
- lote;
- observação.

## Atenção
Esta versão prepara o Campo. A confirmação final na Central deve entrar na próxima etapa:
**Central V7.1 — Confirmar Cochos Provisórios**.

## GitHub
Substituir no repositório do Campo:
- index.html
- manifest.json
- service-worker.js
- README.md
- icons/icon-192.png
- icons/icon-512.png

Mensagem de commit:
`Atualiza Campo Cocho V1.2 cocho provisorio`

Abrir:
`https://reprogenagenda-rgb.github.io/reprogen-sal-cocho-campo/index.html?v=1.2-cocho-provisorio`

## Teste
1. Abrir Campo V1.2.
2. Usar base offline salva.
3. Ir em lançamento.
4. Tocar Novo cocho provisório neste ponto.
5. Tentar criar sem GPS: deve bloquear.
6. Capturar GPS do cocho provisório.
7. Criar provisório e selecionar.
8. Lançar abastecimento.
9. Conferir pendente/local com cocho_provisorio true.
10. Sincronizar.

## Validação técnica
JS validado com node --check: True
