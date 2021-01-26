const routes = require('express').Router();
const aws = require('aws-sdk');

const translate = new aws.Translate({ region: 'us-west-1' });


routes.post('/translate', (req, res) => {

    const { sourceLanguage: SourceLanguageCode, targetLanguage: TargetLanguageCode, text: Text } = req.body;

    const params = {
        SourceLanguageCode,
        TargetLanguageCode,
        Text
    }

    try {

        translate.translateText(params, (err, data) => {

            if (err) {
                return res.status(500).json(err);
            }

            return res.json(data);
        });

    } catch (error) {
        console.log(error);
    }
});


module.exports = routes;