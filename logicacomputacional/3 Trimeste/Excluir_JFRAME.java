 private void btnEditaActionPerformed(java.awt.event.ActionEvent evt) {                                         
        String mat = JOptionPane.showInputDialog(this, "Digite a matrícula do aluno que deseja editar!");
        String mensagem = "Matrícula não encontrada!";
        for (Aluno a : lista) {
            if (a.getMatricula().equals(mat)) {
                mensagem = "Aluno editado com sucesso!";
                String[] opcoes = {"Nome", "Matrícula", "CPF", "Idade"};
                int escolha = JOptionPane.showOptionDialog(this, "Qual informação deseja editar?", a.getNome(), WIDTH, WIDTH, null, opcoes, opcoes[0]);
                switch (escolha) {
                    case 0:
                        //alterar o nome do aluno
                        a.setNome(JOptionPane.showInputDialog(this, "Digite o novo nome!"));
                        break;
                    case 1:
                        //alterar a matrícula do aluno
                        a.setMatricula(JOptionPane.showInputDialog(this, "Digite a nova matrícula!"));
                        break;
                    case 2:
                        //alterar o CPF do aluno
                        a.setCpf(JOptionPane.showInputDialog(this, "Digite o novo CPF!"));
                        break;
                    case 3:
                        //alterar a idade do aluno
                        try {
                            a.setIdade(Integer.parseInt(JOptionPane.showInputDialog(this, "Digite a nova idade!")));
                        } catch (Exception e) {
                            mensagem = "Idade inválida!";
                        }
                        break;
                }
            }
        }
