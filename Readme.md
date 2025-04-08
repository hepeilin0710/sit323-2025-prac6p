# 🛠 Requirements
Node.js and npm installed

Docker installed

Minikube installed (local Kubernetes cluster)

kubectl installed (Kubernetes CLI)

Docker Hub account (for pushing images)

# 🚀 Kubernetes Deployment Full Steps

# 1. Start Minikube
minikube start

# 2. Apply Deployment
kubectl apply -f deployment.yaml

# 3. Apply Service
kubectl apply -f service.yaml

# 4. Verify Pods
kubectl get pods

# 5. Verify Services
kubectl get services
# Auto-open Browser
minikube service nodejs-service
