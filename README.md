# 📱 Jorge - Assistent (Frontend)

Aplicativo móvel que conecta você ao seu assistente financeiro **Jorge**, permitindo registrar gastos e solicitar relatórios de forma natural — apenas conversando.

> Exemplo:  
> “Anote um gasto de 120 reais com restaurante.”  
> “Mostre meus gastos da última semana.”

O app envia as mensagens para o backend do **Jorge - Assistent**, que processa, armazena e responde com as informações solicitadas.

## 🚀 Tecnologias

- React Native  
- Expo  
- TypeScript  
- Axios (para comunicação com o backend)  
- React Navigation  

## 📦 Execução local

1. **Instale as dependências:**
   ```bash
   npm install
   
2. Crie um arquivo .env na raiz do projeto com as variáveis de ambiente:
   ```bash
   API_BASE_URL=http://localhost:3000
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   npx expo start
   ```
4. Abra o aplicativo no celular usando o app Expo Go (Android/iOS) e escaneie o QR Code exibido no terminal ou navegador.