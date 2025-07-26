# leitor_palavra_chave.py

ARQUIVO = "Home/blog.html"

print("🔍 BlogTotal - Leitor de palavras-chave")
print(f"📄 Arquivo alvo: {ARQUIVO}")
print("Digite 'sair' a qualquer momento para encerrar.\n")

def buscar_palavra(palavra_chave):
    try:
        with open(ARQUIVO, "r", encoding="utf-8", errors="ignore") as f:
            linhas = f.readlines()

        encontradas = []

        for i, linha in enumerate(linhas, start=1):
            if palavra_chave in linha.lower():
                encontradas.append((i, linha.strip()))

        if encontradas:
            print(f"\n🔎 Resultados para '{palavra_chave}':")
            for num_linha, conteudo in encontradas:
                print(f"  👉 Linha {num_linha}: {conteudo}")
        else:
            print(f"\n⚠️ Nenhuma ocorrência de '{palavra_chave}' encontrada.")
    except FileNotFoundError:
        print(f"❌ Arquivo '{ARQUIVO}' não encontrado.")
    except Exception as e:
        print(f"❌ Erro ao ler o arquivo: {e}")

# Loop principal
while True:
    entrada = input("\nDigite a palavra-chave: ").strip().lower()
    
    if entrada == "sair":
        print("👋 Encerrando o programa.")
        break

    if entrada == "":
        print("⚠️ Por favor, digite uma palavra válida.")
        continue

    buscar_palavra(entrada)
