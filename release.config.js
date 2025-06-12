module.exports = {
    branches: ['main'],
    tagFormat: '${version}', // disables v prefix
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/changelog', {
            changelogFile: 'CHANGELOG.md',
        }],
        ['@semantic-release/git', {
            assets: ['CHANGELOG.md', 'plugin-a.php'],
            message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
        }],
        '@semantic-release/github',
    ],
};
