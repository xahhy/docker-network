# Docker Containers Share Same IP Address

Run `docker-compose up` to start `app1` and `app2`, these 2 container will share same IP address.

Then run `docker-compose -f docker-compose-external.yml up`, `app3` will use the existing `network_share_pause`'s containers network interface(Share same IP address)

These 3 containers:

- `app1`
- `app2`
- `app3`

used the `pause` container's network interface. The can communicate with each other using `localhost` now.

## Attentions

The port mapping only allowed on the `pause` container. Otherwise `docker-compose` will throw error:

> conflicting options: port publishing and the container type network mode
