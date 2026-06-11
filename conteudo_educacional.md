# Ciência de Dados ao Alcance dos Jovens

## Plataforma Educacional — Porto Alegre/RS

Material didático completo sobre Ciência de Dados voltado para estudantes do ensino fundamental e médio de escolas públicas de Porto Alegre.

---

## Módulo 01 — Aulas e Tutoriais

### Aula 1: O que é Ciência de Dados?

A Ciência de Dados é uma área do conhecimento que utiliza métodos científicos, processos e sistemas para extrair conhecimento e insights a partir de dados. Em termos simples, é a arte de transformar números e informações em decisões inteligentes.

Pense no seguinte: quando você abre o Instagram, o algoritmo decide quais posts mostrar primeiro. Quando o Spotify sugere uma música, ele analisa seus dados de escuta. Quando a previsão do tempo diz que vai chover, ela usa dados de satélites e sensores. Tudo isso é Ciência de Dados em ação.

**Onde encontramos dados no dia a dia?**

- Notas escolares (dados numéricos)
- Pesquisas de opinião (dados categóricos)
- Temperatura ao longo do dia (dados temporais)
- Postagens em redes sociais (dados textuais)
- Fotos e vídeos (dados multimídia)

**As 5 etapas da Ciência de Dados:**

1. **Perguntar** — Definir qual problema queremos resolver
2. **Coletar** — Reunir os dados necessários
3. **Limpar** — Organizar e corrigir erros nos dados
4. **Analisar** — Encontrar padrões e insights
5. **Comunicar** — Apresentar os resultados de forma clara

---

### Aula 2: Tipos de Dados

Nem todos os dados são iguais. Para analisá-los corretamente, precisamos entender suas categorias:

**Dados Numéricos (Quantitativos)**

- **Discretos:** valores inteiros que podem ser contados (número de alunos, gols em um jogo)
- **Contínuos:** valores que podem ter decimais (altura, peso, temperatura)

**Dados Categóricos (Qualitativos)**

- **Nominais:** categorias sem ordem (cor dos olhos, time de futebol)
- **Ordinais:** categorias com ordem (escolaridade, satisfação de 1 a 5)

**Dados Temporais**

São dados associados a datas ou horários. Exemplos: temperatura ao longo do dia, evolução das notas no semestre, número de acessos ao site por hora.

---

### Aula 3: Média, Mediana e Moda

Essas são as três medidas de tendência central mais usadas na estatística. Elas nos ajudam a resumir um conjunto de dados em um único número representativo.

**Média:** soma de todos os valores dividida pela quantidade.
Exemplo: notas 7, 8, 6, 9, 5. Média = (7+8+6+9+5)/5 = 7,0

**Mediana:** valor do meio quando os dados estão em ordem.
Exemplo: 5, 6, 7, 8, 9. Mediana = 7 (o valor central)

**Moda:** valor que mais se repete.
Exemplo: 7, 8, 7, 9, 7, 6. Moda = 7 (aparece 3 vezes)

**Quando usar cada uma?**

- **Média:** quando os dados não têm valores muito extremos
- **Mediana:** quando há valores muito altos ou baixos que distorcem a média
- **Moda:** quando queremos saber o valor mais comum (ex: tamanho de camiseta mais vendido)

---

## Módulo 02 — Exercícios Práticos

### Exercício 1: Calculando a Média

Com base nos dados do IDEB de Porto Alegre para os Anos Iniciais (2015-2023): 5.2, 5.4, 5.5, 5.6, 5.8. Calcule a média aritmética desses valores.

**Resolução:** Média = (5.2 + 5.4 + 5.5 + 5.6 + 5.8) / 5 = 27.5 / 5 = **5.5**

---

### Exercício 2: Encontrando a Mediana

Porto Alegre possui os seguintes números de matrículas por região: 28.500, 35.200, 22.100, 41.800, 15.000. Organize os dados em ordem crescente e encontre a mediana.

**Resolução:** Ordem crescente: 15.000, 22.100, 28.500, 35.200, 41.800. Mediana = **28500** (valor central)

---

### Exercício 3: Identificando a Moda

Em uma pesquisa com alunos sobre a matéria favorita, os resultados foram: Matemática, Português, Matemática, Ciências, Matemática, História, Português, Matemática. Qual é a moda?

**Resolução:** Matemática aparece 4 vezes (mais que qualquer outra). Moda = **matematica**

---

### Exercício 4: Calculando Porcentagem

Das 624 escolas de Porto Alegre, 589 possuem acesso à internet. Qual a porcentagem de escolas com internet? Arredonde para o número inteiro mais próximo.

**Resolução:** Porcentagem = (589 / 624) × 100 = 94,39% ≈ **94%**

---

### Exercício 5: Amplitude dos Dados

O IDEB dos Anos Finais em Porto Alegre variou de 4.0 (2015) a 4.6 (2023). Qual é a amplitude (diferença entre o maior e o menor valor)?

**Resolução:** Amplitude = 4.6 - 4.0 = **0.6**

---

### Exercício 6: Razão Alunos/Professor

Porto Alegre tem 142.539 matrículas no Ensino Fundamental e 7.790 docentes nesse nível. Quantos alunos há por professor? Arredonde para o número inteiro.

**Resolução:** Razão = 142.539 / 7.790 = 18,29 ≈ **18**

---

## Módulo 03 — Introdução a Python

### O que é Python?

Python é a linguagem de programação mais utilizada em Ciência de Dados. Ela é simples, legível e possui milhares de bibliotecas para análise de dados, visualização e machine learning.

### Variáveis e Tipos

```python
# Variáveis em Python
nome = "Porto Alegre"        # string (texto)
populacao = 1332570          # int (número inteiro)
ideb = 5.8                   # float (número decimal)
tem_internet = True          # bool (verdadeiro/falso)

# Exibindo valores
print(f"Cidade: {nome}")
print(f"População: {populacao}")
print(f"IDEB: {ideb}")
```

### Listas e Operações

```python
# Lista de notas do IDEB (Anos Iniciais)
ideb_anos_iniciais = [5.2, 5.4, 5.5, 5.6, 5.8]

# Calculando estatísticas básicas
media = sum(ideb_anos_iniciais) / len(ideb_anos_iniciais)
maior = max(ideb_anos_iniciais)
menor = min(ideb_anos_iniciais)

print(f"Média: {media}")      # 5.5
print(f"Maior: {maior}")      # 5.8
print(f"Menor: {menor}")      # 5.2
```

### Trabalhando com Dados Reais

```python
# Dados educacionais de Porto Alegre
dados_poa = {
    "matriculas_fundamental": 142539,
    "matriculas_medio": 48721,
    "escolas": 624,
    "docentes": 10974,
    "escolas_com_internet": 589
}

# Calculando indicadores
total_matriculas = dados_poa["matriculas_fundamental"] + dados_poa["matriculas_medio"]
pct_internet = (dados_poa["escolas_com_internet"] / dados_poa["escolas"]) * 100
alunos_por_prof = total_matriculas / dados_poa["docentes"]

print(f"Total de matrículas: {total_matriculas:,}")
print(f"Escolas com internet: {pct_internet:.1f}%")
print(f"Alunos por professor: {alunos_por_prof:.1f}")
```

### Criando Gráficos com Matplotlib

```python
import matplotlib.pyplot as plt

# Dados do IDEB
anos = [2015, 2017, 2019, 2021, 2023]
ideb_iniciais = [5.2, 5.4, 5.5, 5.6, 5.8]
ideb_finais = [4.0, 4.1, 4.3, 4.4, 4.6]

# Criando o gráfico
plt.figure(figsize=(10, 6))
plt.plot(anos, ideb_iniciais, marker='o', label='Anos Iniciais')
plt.plot(anos, ideb_finais, marker='s', label='Anos Finais')
plt.title('Evolução do IDEB - Porto Alegre')
plt.xlabel('Ano')
plt.ylabel('IDEB')
plt.legend()
plt.grid(True)
plt.savefig('ideb_porto_alegre.png')
plt.show()
```

---

## Módulo 04 — Dashboard: Dados Educacionais de Porto Alegre

### Indicadores Educacionais (Fonte: IBGE/INEP 2023)

| Indicador | Valor | Fonte | Ano |
|-----------|-------|-------|-----|
| População total | 1.332.570 | IBGE Censo | 2022 |
| Matrículas Ensino Fundamental | 142.539 | INEP | 2023 |
| Matrículas Ensino Médio | 48.721 | INEP | 2023 |
| Docentes Ensino Fundamental | 7.790 | INEP | 2023 |
| Docentes Ensino Médio | 3.184 | INEP | 2023 |
| IDEB Anos Iniciais | 5.8 | INEP | 2023 |
| IDEB Anos Finais | 4.6 | INEP | 2023 |
| IDH Municipal | 0.805 | IBGE | 2022 |
| PIB per capita | R$ 52.867 | IBGE | 2022 |
| Taxa de Alfabetização | 97.8% | IBGE Censo | 2022 |

### Infraestrutura das Escolas

- Total de escolas: 624
- Escolas com acesso à internet: 589 (94,4%)
- Escolas com laboratório de informática: 312 (50,0%)
- Escolas sem internet: 35 (5,6%)

### Relação Alunos por Professor

- Ensino Fundamental: 18,3 alunos por professor
- Ensino Médio: 15,3 alunos por professor
- Média Geral: 17,4 alunos por professor

---

## Sobre o Projeto

Este material foi desenvolvido como parte da Atividade Extensionista II (Tecnologia Aplicada à Inclusão Digital - Projeto) do curso de CST em Ciência de Dados do Centro Universitário Internacional UNINTER.

**Autor:** Juliano Freitas Garcia
**RU:** 2901883
**Setor de Aplicação:** Escola Estadual de Ensino Fundamental 3 de Outubro e Escola Estadual de Ensino Médio Padre Reus — Porto Alegre/RS

**ODS Relacionados:**
- ODS 04 — Educação de Qualidade
- ODS 10 — Redução das Desigualdades

---

*Ciência de Dados ao Alcance dos Jovens — Porto Alegre/RS — 2026*
