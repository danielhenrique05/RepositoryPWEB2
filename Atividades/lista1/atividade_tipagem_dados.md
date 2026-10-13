a) O que caracteriza uma linguagem de tipagem estática? Como ocorre a verificação de tipos?
Uma linguagem de tipagem estática verifica os tipos dos dados antes da execução do programa, geralmente durante a compilação. Isso permite identificar erros de tipo antecipadamente, como tentar somar um número com um objeto incompatível.
Exemplos: Java, C e C++.
b) Quais são os principais benefícios da tipagem estática em termos de performance e segurança?
A tipagem estática oferece maior segurança, pois permite identificar erros de tipo antes da execução. Em relação à performance, o compilador pode realizar otimizações por conhecer antecipadamente os tipos dos dados, reduzindo a necessidade de verificações durante a execução.
c) Como funciona a tipagem dinâmica? Quais são seus principais desafios de performance?
Na tipagem dinâmica, os tipos são verificados durante a execução do programa. Uma variável pode armazenar valores de tipos diferentes ao longo da execução.
O principal desafio de performance é a necessidade de verificar os tipos em tempo de execução, o que pode gerar processamento adicional e dificultar algumas otimizações. Entretanto, mecanismos modernos de otimização conseguem reduzir esse impacto.
Exemplos: Python, JavaScript e Ruby.
d) Quais são as diferenças entre linguagens com tipagem forte e fraca?
- Tipagem forte: possui regras mais rígidas para operações entre tipos diferentes, evitando conversões implícitas que possam causar erros. Exemplo: Python.
- Tipagem fraca: permite mais conversões automáticas entre tipos diferentes, oferecendo flexibilidade, mas podendo gerar resultados inesperados. Exemplo: JavaScript.
e) Como linguagens híbridas combinam características de tipagem estática e dinâmica? Qual o papel da inferência de tipos?
Linguagens híbridas permitem combinar verificações estáticas com recursos de tipagem dinâmica, oferecendo maior flexibilidade ao programador. Um exemplo é o TypeScript, que adiciona verificação estática de tipos ao JavaScript.
A inferência de tipos permite que o compilador identifique automaticamente o tipo de uma variável sem que o programador precise declará-lo explicitamente, mantendo a verificação estática.
f) Como a linguagem JavaScript lida com a tipagem de dados?
O JavaScript é uma linguagem de tipagem dinâmica e geralmente considerada fraca, pois permite que variáveis armazenem valores de diferentes tipos e realiza conversões automáticas entre eles.