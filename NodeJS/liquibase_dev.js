const liquibase = require("./index");

const config = {
  url: "jdbc:postgresql://localhost:5432/test",
  driver=org.postgresql.Driver,
  contexts: 'DEV',
  labels: 'staging,Jira-1200',
  logLevel: 'info',
  // overwriteOutputFile: 'true',
  // logFile: 'dev.log'
};

liquibase(config)
  .run('status', '--verbose')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));

liquibase(config)
  .run('updateSQL')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));

liquibase(config)
  .run('update')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));
