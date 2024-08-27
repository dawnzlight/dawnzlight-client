//
// hygen domain new
//
module.exports = {
    prompt: ({ inquirer, args }) => {
        const questions = [
            {
                type: 'input',
                name: 'domain_name',
                message: 'What is the name of domain?',
            },
            {
                type: 'input',
                name: 'dir',
                message: 'Where is the directory? (No problem in blank)',
            },
        ];
        return inquirer.prompt(questions).then((answers) => {
            const { domain_name, dir } = answers;
            const path = `${dir ? `${dir}/` : ``}${domain_name}`;
            const abs_path = `lib/Domain/${path}`;
            return { ...answers, abs_path, path };
        });
    },
};