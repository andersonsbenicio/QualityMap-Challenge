Funcionalidade: Validação de Mensagens de Erro no Registro de Usuário

  Cenário: Validação de mensagens de erro ao tentar registrar com campos obrigatórios vazios
    Dado que o usuário navega para a página de registro
    Quando o usuário tenta se registrar sem preencher os campos obrigatórios
    Então o sistema deve exibir uma mensagem de erro para cada campo obrigatório não preenchido
    E as mensagens de erro devem ser compatíveis com os requisitos dos inputs
