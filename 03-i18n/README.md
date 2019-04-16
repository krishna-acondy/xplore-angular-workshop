# i18n

## Principles
* Translated strings stored in JSON resource files
* JSON files are named by language
* Files contain the same keys,
  with values being the string in the specific language
* The target language is determined when the app is initialized
* Strings for the target language are loaded,
  and are available in a shared service

## Angular Concepts
* APP_INITIALIZER
* Factory functions
* Shared Services
* HTTP requests

## References
1. [ngx-translate](https://github.com/ngx-translate)
2. [Angular Internationalization using ngx-translate](https://medium.com/@temekahsay/robust-angular-2-internationalization-using-ngx-translate-behaviorsubject-and-angular-service-56db54da7bc9)
