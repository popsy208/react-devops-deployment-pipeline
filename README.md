# 🚀 React DevOps CI/CD Deployment Pipeline

A production-ready DevOps project demonstrating automated deployment of a React application using Docker containerization, Terraform Infrastructure as Code (IaC), AWS cloud services, and CI/CD automation.

---

## 📌 Project Overview

This project showcases an end-to-end DevOps workflow for deploying a modern React application to AWS using industry-standard DevOps tools and practices.

The deployment pipeline automates:
- Application build process
- Docker image creation
- Infrastructure provisioning with Terraform
- Continuous Integration & Continuous Deployment (CI/CD)
- Cloud deployment on AWS EC2

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend Framework |
| Docker | Application Containerization |
| Terraform | Infrastructure as Code |
| AWS EC2 | Cloud Hosting |
| GitHub Actions | CI/CD Automation |
| Nginx | Web Server |

---

## ⚙️ Architecture Workflow

```text
Developer Push → GitHub Repository → CI/CD Pipeline →
Docker Build → Terraform Provisioning →
AWS EC2 Deployment → Live React Application
```

---

## 📂 Project Structure

```bash
project-root/
│
├── .github/workflows/ # CI/CD Pipeline Configuration
├── terraform/ # Terraform Infrastructure Files
├── src/ # React Application Source Code
├── public/ # Static Public Assets
├── Dockerfile # Docker Image Configuration
├── nginx.conf # Nginx Configuration
├── package.json # React Dependencies
└── README.md
```

---

## 🐳 Docker Implementation

The application is containerized using Docker to ensure:
- Consistent deployment environments
- Portability across systems
- Simplified deployment workflow
- Scalability and maintainability

### Build Docker Image

```bash
docker build -t react-devops-app .
```

### Run Docker Container

```bash
docker run -d -p 80:80 react-devops-app
```

---

## ☁️ Terraform Infrastructure

Terraform is used to provision AWS infrastructure including:
- EC2 Instance
- Security Groups
- Networking Configuration

### Initialize Terraform

```bash
terraform init
```

### Apply Infrastructure

```bash
terraform apply
```

---

## 🔄 CI/CD Pipeline

The CI/CD pipeline automates:
- Code integration
- Docker image build
- Infrastructure deployment
- Application deployment to AWS

### Pipeline Workflow
1. Push code to GitHub
2. GitHub Actions triggers workflow
3. Docker image is built
4. Terraform provisions infrastructure
5. Application deploys automatically to AWS EC2

---

## 🌍 Deployment

Application deployed on AWS EC2 using:
- Docker containers
- Automated CI/CD workflows
- Infrastructure as Code principles

---

## 🎯 Key DevOps Concepts Demonstrated

- Infrastructure as Code (IaC)
- Containerization
- Cloud Deployment
- Continuous Integration
- Continuous Deployment
- Automated Infrastructure Provisioning
- Production Deployment Workflow



---

## 📌 Repository Purpose

This repository was built to demonstrate practical DevOps engineering skills through real-world cloud deployment automation and scalable infrastructure management
