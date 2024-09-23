const API_BASE_URL = "http://localhost:3001";

class AtivSustService {
       async obterTodos() {
        const response = await fetch(`${API_BASE_URL}/criarativsust`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            console.log('Erro ao obter todas as atividades');
        } else {
            const dados = await response.json();
            return dados;
        }
    }

    async obterTipos() {
        try {
            const response = await fetch(`${API_BASE_URL}/criarativsust`, { // Endpoint para obter tipos de atividades
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                console.log('Erro ao obter tipos de atividades.');
                throw new Error('Erro ao obter tipos de atividades.');
            }

            const dados = await response.json();
            return dados;
        } catch (error) {
            console.error('Erro ao obter tipos de atividades:', error);
            throw error;
        }
    }

    async adicionar(atividadeDados) {
        try {
            const response = await fetch(`${API_BASE_URL}/criarativsust`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(atividadeDados) // Certifique-se de que atividadeDados tem o formato correto
            });
    
            if (!response.ok) {
                const errorData = await response.json(); // Captura a resposta de erro do backend
                console.log('Erro ao adicionar:', errorData);
                throw new Error(`Erro ao adicionar atividade: ${errorData.message}`);
            }
    
            const dados = await response.json(); // Supondo que o backend retorna os dados da atividade criada
            return dados; // Retorna os dados para uso posterior
        } catch (error) {
            console.error('Erro ao adicionar atividade:', error);
            throw error; // Lança o erro para o frontend lidar com ele
        }
    }
    

    async atualizar(idAtividade, atividadeDados) {
        try {
            const response = await fetch(`${API_BASE_URL}/criarativsust/${idAtividade}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(atividadeDados) // Certifique-se de que os dados estão corretos
            });
        
            if (!response.ok) {
                const errorData = await response.json(); // Captura a resposta de erro detalhada
                console.log('Erro ao atualizar:', errorData);
                throw new Error(`Erro ao atualizar atividade: ${errorData.message || 'Erro desconhecido.'}`);
            }
    
            const dadosAtualizados = await response.json(); // Supondo que o backend retorne os dados atualizados
            return dadosAtualizados; // Retorne os dados para uso no frontend, se necessário
        } catch (error) {
            console.error('Erro ao atualizar atividade:', error);
            throw error; // Lança o erro para que o frontend lide com ele
        }
    }
    

    async obterPorId(tipo_id) {
        const response = await fetch(`${API_BASE_URL}/criarativsust/${tipo_id}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            console.log('Ocorreu um erro ao editar a atividade');
        }else{
            const dados = await response.json();
            return dados;
        }
    }

    async excluir(criar_id) {
        try {
            const response = await fetch(`${API_BASE_URL}/criarativsust/${criar_id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                const errorData = await response.json(); // Captura os detalhes do erro, se houver
                console.log('Erro ao excluir:', errorData);
                throw new Error(`Erro ao excluir atividade: ${errorData.message || 'Erro desconhecido.'}`);
            }
    
            // Sucesso, retorna alguma confirmação se necessário, ou apenas null
            return { message: 'Atividade excluída com sucesso.' };
        } catch (error) {
            console.error('Erro ao excluir atividade:', error);
            throw error; // Lança o erro para que o frontend lide com ele
        }
    }
    

    async filtrar(termoBusca) {
        const response = await fetch(`${API_BASE_URL}/criarativsust/filtrar/${termoBusca}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            console.log('Ocorreu um erro ao editar a atividade');
        }else{
            const dados = await response.json();
            return dados;
        }
    }
    

}

export default AtivSustService;