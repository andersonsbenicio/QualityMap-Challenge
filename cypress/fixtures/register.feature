Funcionalidade: Registro de Usuário

Cenário: Usuário se registra com sucesso
  Dado que o usuário navega para a página de registro
  Quando o usuário preenche o formulário de registro com dados válidos
  E seleciona uma data de nascimento específica
  E clica no botão de registro
  Então o sistema deve registrar o usuário com sucesso
  E a data de nascimento selecionada deve ser validada corretamente