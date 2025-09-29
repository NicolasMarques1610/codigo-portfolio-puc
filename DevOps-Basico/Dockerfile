FROM ubuntu
# Juntei tudo na mesma linha para executar tudo de uma vez e não utilizar cache
RUN apt update && apt install curl --yes

# Utilizando cache dessa forma em que cada instrução acontece de forma sequencial, só atualizando de fato quando houver mudança
# RUN apt update
# RUN apt install net-tools
# RUN apt install vim --yes
# RUN apt install curl --yes