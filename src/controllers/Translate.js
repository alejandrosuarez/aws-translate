const aws = require('aws-sdk');

const translate = new aws.Translate({ region: 'us-west-1' });

module.exports = {
    doTranslation: function doTranslation(req, res) {
        const { SourceLanguageCode, TargetLanguageCode, Text } = req.body;

        const params = {
            SourceLanguageCode, TargetLanguageCode, Text
        }

        try {

            translate.translateText(params, (err, data) => {

                if (err) {
                    if (err.code == 'MissingRequiredParameter') {
                        return res.status(400).json(err);
                    }

                    if (err.code == 'MultipleValidationErrors') {
                        return res.status(400).json(err.errors);
                    }

                    return res.status(500).json(err);
                }

                return res.json(data);
            });

        } catch (error) {
            console.log(error);
        }
    }
}