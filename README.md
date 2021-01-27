# AWS Translate API
<img src="https://raw.githubusercontent.com/jocbarbosa/aws-translate/master/.github/aws.png" alt="drawing" width="200"/>
Simple code with Node JS using AWS Translate API

## Getting Started

rename .env-sample to .env

set environment variables

APP_PORT=your-port

AWS_ACCESS_KEY_ID=you-access-key

AWS_SECRET_ACCESS_KEY=your-secret-access-key

AWS_DEFAULT_REGION=region-choosen

To see how to get these keys above, visit https://aws.amazon.com/blogs/security/wheres-my-secret-access-key/


Then:

```
git clone https://github.com/jocbarbosa/aws-translate.git

cd aws-translate

docker-compose up
```


### Example request
```
{
    "SourceLanguageCode": "en",
    "TargetLanguageCode": "pt",
    "Text": "Whether you grew up reading Batman comics, watched the campy television show, or eagerly await each new movie, this is the book for you."
}
```

### Example response
```
{
    "TranslatedText": "Se você cresceu lendo quadrinhos Batman, assistiu ao programa de televisão, ou aguardar ansiosamente cada novo filme, este é o livro para você.",
    "SourceLanguageCode": "en",
    "TargetLanguageCode": "pt"
}
```

### Supported languages

To see supported languages, visit https://docs.aws.amazon.com/translate/latest/dg/what-is.html#what-is-languages
