var ghpages = require('gh-pages');

ghpages.publish(
    'public',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/LFCamacho-dev/Svelte-Feedback-App.git',
        user: {
            name: 'LFCamacho-dev',
            email: 'luisfernandoca@hotmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)