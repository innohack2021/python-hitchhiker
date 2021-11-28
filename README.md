# PYTHON HITCHHIKER

Learn python easily: Python practice website (web/app) for end-users and developers.

</br>

## Role

Python-hichhiker focuses to...

 * Serve as desktop app (windows, macOS and Linux) and web service
 * Provide a boilerplate to manage user information based on Express
 * Help developers to build a coding practice website
 * Make learning programming languages easy for everyone
 * Display the result of a code on your browser without any software tools

</br>

## User Features
 * Free membership
    * Sign up
    * Sign in
    * Sign out
 
 * Education
    * Python code examples
    * Display the result of your python code
    * Progress bar to check how much you have learned
 
</br>

## Management Features
 * User management
    * User creation
    * User deletion
    * Key management
 
 * Work with Web server
    * Delegate login to web server
    * Support userid / password login

</br>


## Setup Guide

Python-hitchhiker Web UI is built with
 * `npm` as package manager

## Initializing & excuting python-hitchhiker

```
$ npm install
```

```
$ npm run start
```
</br>

## Developing and testing without bundling

```
$ npm run dev
```
</br>

## Initializing backend.ai 

Install on your PC: [Quick start guidelines](https://docs.backend.ai/en/latest/install/guides.html)

Or run on cloud: [Cloud backend.ai](https://cloud.backend.ai/)

</br>

## Initializing codemirror ( @jasong 코드 미러 셋팅관련 내용 적어주세요. )

</br>

## Branches

 * main : Development branch
 * release : Latest release branch   (우리 서비스 release branch 만들 것인가요?)

</br>


## Code of conduct

View [Code of conduct](https://github.com/innohack2021/python-hitchhiker/blob/main/CODE_OF_CONDUCT.md) for community guidelines.


</br>





## Adding new examples (@sunghwki @sikang 원래 백엔드닷에이아이에서 언어 추가하는 파트였는데, 문제 추가하는 방법으로 바꿔주세요.)


 1. Copy `en.json` to target language. (e.g. `ko.json`)
 2. Add language identifier to `supportLanguageCodes` in `backend-ai-webui.ts`.
e.g.
```javascript
  @property({type: Array}) supportLanguageCodes = ["en", "ko"];
```
 3. Add language information to `supportLanguages` in `backend-ai-usersettings-general-list.ts`.

Note: DO NOT DELETE 'default' language. It is used for browser language.

</br>

### License

Refer to [LICENSE file](https://github.com/innohack2021/python-hitchhiker/blob/main/LICENSE.md).
