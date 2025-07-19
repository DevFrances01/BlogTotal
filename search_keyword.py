# leitor_palavra_chave.py

arquivo = "Home/blog.html"
print("BlogTotal-pagina,Home/blog.html")


# Solicita a palavra-chave ao usuário
palavra_chave = input("Digite a palavra-chave para buscar no arquivo: ").lower()

with open(arquivo, "r", encoding="utf-8", errors="ignore") as f:
    linhas = f.readlines()

encontradas = []

for i, linha in enumerate(linhas, start=1):
    if palavra_chave in linha.lower():
        encontradas.append((i, linha.strip()))

if encontradas:
    print(f"Linhas contendo a palavra '{palavra_chave}':")
    for num_linha, conteudo in encontradas:
        print(f"Linha {num_linha}: {conteudo}")
else:
    print(f"Nenhuma linha contém a palavra '{palavra_chave}'.")
entrada = input("Digite uma palavra-chave ou 'sair' para encerrar: ").strip()

if entrada.lower() == 'sair':
    print("Encerrando o programa.")
    # Aqui pode usar break, exit() ou outra lógica para encerrar
else:
    # Continua o programa com a entrada fornecida
    print(f"Você digitou: {entrada}")
