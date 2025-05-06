# 🗺️ Roadmap : Budget Perso avec IA (Java + Ionic + Docker)

**Objectif** :  
Créer une application de gestion de budget avec :  
- Import de relevés bancaires (CSV).  
- Catégorisation automatique des dépenses (IA Python).  
- Dashboard avec graphiques (Ionic).  
- Déploiement avec Docker.

**Rythme** : 1-2h/jour → Durée estimée : **8-12 semaines**.

---

## 📅 Phase 1 : Backend (Spring Boot + PostgreSQL)  
**Durée** : 2-3 semaines  
**Objectif** : API REST pour gérer les transactions.

### Semaine 1 : Setup Spring Boot
- [x] Créer un projet Spring Boot avec [Spring Initializr](https://start.spring.io/) (dépendances : `Web`, `JPA`, `PostgreSQL`).  
- [x] Configurer `application.properties` pour PostgreSQL.  
- [x] Tester la connexion à la DB avec un `SELECT 1` dans un `@RestController`.

### Semaine 2 : Entités et API de base
- [x] Créer l’entité `Transaction` (id, description, amount, category, date).  
- [x] Ajouter un `TransactionRepository` (interface JPA).  
- [x] Créer un endpoint `GET /transactions` qui retourne une liste mockée.

### Semaine 3 : Upload de CSV
- [x] Ajouter une méthode pour parser un CSV (ex: `OpenCSV`).  
- [x] Endpoint `POST /upload` qui accepte un fichier et sauvegarde en DB.  
- [x] Tester avec Postman ou cURL.

---

## 📱 Phase 2 : Frontend (Ionic)  
**Durée** : 3-4 semaines  
**Objectif** : Interface utilisateur pour uploader/visualiser les données.

### Semaine 4 : Setup Ionic
- [x] Installer Ionic CLI : `npm install -g @ionic/cli`.  
- [x] Créer l’app : `ionic start budget-front blank --type=angular --capacitor`.  
- [x] Ajouter Angular HttpClient (`ionic g service api`).

### Semaine 5 : Page d’upload
- [x] Créer une page `UploadPage` avec un `<input type="file">`.  
- [x] Envoyer le fichier à l’API Java via `FormData`.  
- [x] Afficher un toast de confirmation.

### Semaine 6 : Dashboard
- [x] Ajouter Chart.js (`npm install chart.js`).  
- [x] Page `HomePage` avec un graphique (dépenses par catégorie).  
- [x] Appeler l’API Java pour récupérer les données.

---

## 🤖 Phase 3 : IA (Python)  
**Durée** : 2 semaines  
**Objectif** : Catégoriser automatiquement les transactions.

### Semaine 7 : Script Python
- [x] Créer `categorize.py` avec scikit-learn (ex: modèle Naive Bayes).  
- [x] Prendre en entrée un CSV et retourner les catégories.  
- [x] Tester en local avec un jeu de données mocké.

### Semaine 8 : Intégration Java-Python
- [x] Option 1 : Lancer le script Python depuis Java via `ProcessBuilder`.  
- [x] Option 2 (avancé) : Créer une API Flask en Python.  
- [x] Modifier l’endpoint `/upload` pour catégoriser automatiquement.

---

## 🐳 Phase 4 : Dockerisation  
**Durée** : 1-2 semaines  
**Objectif** : Tout faire tourner dans des conteneurs.

### Semaine 9 : Backend + DB
- [x] Écrire un `Dockerfile` pour Spring Boot.  
- [x] Ajouter PostgreSQL dans `docker-compose.yml`.  
- [x] Tester avec `docker-compose up`.

### Semaine 10 : Frontend
- [x] Dockeriser l’app Ionic (NGINX pour build Angular).  
- [x] Ajouter au `docker-compose.yml`.  
- [x] Configurer les variables d’environnement pour l’API.

---

## 🚀 Phase 5 : Déploiement (Optionnel)  
**Durée** : 1 semaine  
- [ ] Choisir un VPS (ex: Oracle Cloud Free Tier).  
- [ ] Installer Docker et cloner le dépôt.  
- [ ] Lancer `docker-compose up -d` et configurer Nginx/HTTPS.

---

## 🔧 Répartition du temps quotidien  
Exemple pour **1h/jour** :  
- **Lundi/Mercredi** : Backend (Java).  
- **Mardi/Jeudi** : Frontend (Ionic).  
- **Vendredi** : IA (Python).  
- **Samedi** : Docker/DevOps.  

---

## 📚 Ressources  
- [Spring Boot + JPA](https://spring.io/guides/gs/accessing-data-jpa/)  
- [Ionic HTTP Client](https://ionicframework.com/docs/angular/http)  
- [Dockeriser Spring Boot](https://spring.io/guides/gs/spring-boot-docker/)  