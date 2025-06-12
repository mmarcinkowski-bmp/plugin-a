const fs = require('fs');

module.exports = {
    branches: ['main'],
    tagFormat: '${version}', // disables v prefix
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', {
            changelogFile: 'CHANGELOG.md',
        }],
        {
            // UPDATE PLUGIN VERSION
            prepare: (pluginConfig, context) => {
                const filePath = './plugin-a.php';
                const contents = fs.readFileSync(filePath, 'utf8');
                const updated = contents.replace(/Version:\s*[0-9.]+/, `Version: ${context.nextRelease.version}`);
                fs.writeFileSync(filePath, updated);
                context.logger.log(`Updated plugin version to ${context.nextRelease.version}`);
            }
        },
        ['@semantic-release/git', {
            assets: ['CHANGELOG.md', 'plugin-a.php'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        }],
        '@semantic-release/github',
    ],
};
