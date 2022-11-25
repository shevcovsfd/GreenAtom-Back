const fs = require('fs');
const dotenv = require('dotenv');
const files = ['.env', '.env.development'];
const SnakeNamingStrategy = require('typeorm-naming-strategies').SnakeNamingStrategy;
const options = { path: null };
for (const file of files) {
    if (fs.existsSync(file)) {
        options.path = file;
        break;
    }
}
dotenv.config(options);
const config = {
    retryAttempts: 1000,
    autoLoadEntities: true,
    type: 'postgres',
    url: process.env.POSTGRES,
    migrations: ['dist/src/migration/**/*.js'],
    entities: ['dist/src/**/entities/*.entity.js'],
    migrationsRun: true,
    synchronize: true,
    logging: true,
    cli: {
        entitiesDir: 'src',
        migrationsDir: 'src/migration',
    },
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map