module.exports = {
    launch: {
        headless: false,
        slowMo: 50,
        devtools: true,
        args: ["--no-sandbox", "--disable-popup-blocking", "--disable-infobars"]
    },
    browserContext: 'default',

    server: {
        command: `PORT=3000 BROWSER=none npm run start `,
        port: 3000,
        launchTimeout: 4000,
    }
} 