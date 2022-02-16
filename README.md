# Argo-CD Bootstrap using Helm

This repo contains a basic example of an Argo-CD configuration that manages itself once it has been deployed with Helm.

The folder `test-cluster/argocd-applications` contails all the applications that will be managed by Argo-CD using the [App Of Apps Pattern](https://argo-cd.readthedocs.io/en/stable/operator-manual/cluster-bootstrapping/).

The bootstrap config can be found in the folder `test-cluster/argocd-bootstrap`.

It is possible to test the setup on a local machine using [minikube](https://minikube.sigs.k8s.io/docs/).

## Install ArgoCD on minikube

Start minikube and use max available resources:

```bash
minikube start --memory=max --cpus=max
```

Install ArgocCD:

```bash
cd test-cluster/argocd-bootstrap
helm install --create-namespace -n argocd argocd .
```
## Access UI

Use [Port Forwarding](https://kubernetes.io/docs/tasks/access-application-cluster/port-forward-access-application-cluster/) to access the UI server:

```bash
kubectl port-forward svc/argocd-server -n argocd 8080:443
```

Open a browser and go to http://localhost:8080.

Use `admin` and password `Secret123` to login.

## Appendix
### Update Argo-CD Admin password

The admin password must be hashed using Bcrypt.

The following [Deno](https://deno.land) script can be used:

```bash
deno run --quiet --allow-net bcrypt.ts "my-secret-123"
```

The password can updated in the file `test-cluster/argocd-bootstrap/values.yaml`.
