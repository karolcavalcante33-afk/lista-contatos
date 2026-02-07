// Array de objetos com alunos e notas
const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Beatriz", nota: 6 },
    { nome: "João", nota: 4 },
    { nome: "Mariana", nota: 9 }
];

// Função que retorna alunos com nota >= 6
const alunosAprovados = (lista) => {
    return lista.filter(aluno => aluno.nota >= 6);
};

// Teste
console.log(alunosAprovados(alunos));
