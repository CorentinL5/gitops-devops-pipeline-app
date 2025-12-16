# GitHub Actions → Docker Hub → Kubernetes

Simple CI/CD pipeline:
- Build Docker image
- Push to Docker Hub
- Deploy to Kubernetes (Docker Desktop)

## Flow
1. Push to GitHub
2. GitHub Actions builds & pushes image
3. Kubernetes pulls and redeploys

