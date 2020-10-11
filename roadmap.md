# GPL stack demo

## Create demo scenario to monitor Ganchrow products:

### Tasklist.

1. ~~Set up grafana~~
2. ~~Configure persistency for the container~~
3. ~~Create pm2 powered container with demo app (it should generate random logs using setTimeout)~~
4a. ~~Set up loki/prometail, persist containers, get logs from pm2papp~
4b. ~~Make Loki and promtail to collect their own logs~~
5. Integrate grafana/loki create a simple dashboard and back it up.
6. Set up prometheus
7. Integrate prometheus with pm2 metrics (create simple dashboard)
8. Set up redis and integrate with pm2papp (read and write randomly)
9. Integrate prometheus/redis. Make simple dashboard
9. Send custom metrics from pm2papp using node-prometheus
10. create final dashboard integrating everything
11. Get redis/pm2/logs from real gs network.
12. Show demo

