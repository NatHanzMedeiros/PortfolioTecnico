private void btnExcluiActionPerformed(java.awt.event.ActionEvent evt) {                                          
        String remover = JOptionPane.showInputDialog(this, "Digite a matricula do aluno que deseja excluir!");
        String mensagem = "Aluno não encontrado!";
        for (Aluno a : lista) {
            if (a.getMatricula().equals(remover)) {
                mensagem = "Aluno excluido com sucesso!";
               lista.remove(a);
                        break;
            }                  
        }
        
        JOptionPane.showMessageDialog(this, mensagem);

