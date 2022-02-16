# Argo-CD Bootstrap using Helm





## Config
### Update Argo-CD Admin password

The admin password must be hashed using Bcrypt.

The following [Deno](https://deno.land) script can be used:

```bash
deno run --quiet --allow-net bcrypt.ts "my-secret-123"
```

The password can updated in the file `argocd-bootstrap/values.yaml`.


