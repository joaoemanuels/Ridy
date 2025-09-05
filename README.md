# 🚖 Ridy – MVP de Sistema de Corridas

Ridy é um **MVP inspirado em apps de transporte** (como Uber), desenvolvido para treinar integração entre **frontend em React**, **atualização em tempo real** e **API de mapas**.  
O projeto foca em um caso simples: **apenas um motorista fixo**, permitindo validar usabilidade e funcionalidades essenciais.

---

## ✨ Funcionalidades (MVP)

- 📍 Solicitação de corrida pelo usuário  
- 🚗 Motorista fixo que recebe a corrida  
- 🗺️ Mapa em tempo real com posição do passageiro e do motorista  
- 🔄 Atualização do status da corrida: aguardando → em andamento → finalizada  
- 📱 Layout responsivo para mobile e desktop  

---

## 🛠️ Stack Utilizada

### **Frontend**
- [React](https://react.dev/)  
- [React Router](https://reactrouter.com/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Framer Motion](https://www.framer.com/motion/) (animações)  

### **Realtime e API**
- [Firebase Realtime Database](https://firebase.google.com/)  
- [Mapbox](https://www.mapbox.com/)  

### **Backend**
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/)  
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) para persistência de dados  

---

## 🚀 Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/joaoemanuels/Ridy.git
   cd ridy

2. Instale as dependências:

   ```bash
    npm install


3. Configure variáveis de ambiente (.env):
    ```bash
    REACT_APP_MAPS_API_KEY=sua_chave_google_maps
    REACT_APP_BACKEND_URL=http://localhost:5000


4. Inicie o projeto:

    ```bash
    npm start

---

🎯 Roadmap

 > Autenticação de usuário (login/cadastro)

 > Histórico de corridas

 > Notificações em tempo real

 > Versão mobile (React Native ou PWA)

---

 📌 Status do Projeto

🚧 Em desenvolvimento – MVP funcional em construção.

---

👨‍💻 Autor

Feito com 💙 por João Emanuel
- [LinkedIn](https://www.linkedin.com/in/jo%C3%A3o-emanuel-b4573221b/)
- [Portfólio](https://portfolio-project-rho-ashy.vercel.app/)
- [Email](jemanuel.pi@gmail.com)