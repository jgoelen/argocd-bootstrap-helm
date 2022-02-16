# Argo-CD Bootstrap using Helm


## Initial installation

Argo-CD bootstrapping:

```bash
cd test-cluster/argocd-bootstrap
helm install --create-namespace -n argocd argocd .
```


## Config
### Update Argo-CD Admin password

The admin password must be hashed using Bcrypt.

The following [Deno](https://deno.land) script can be used:

```bash
deno run --quiet --allow-net bcrypt.ts "my-secret-123"
```

The password can updated in the file `argocd-bootstrap/values.yaml`.


