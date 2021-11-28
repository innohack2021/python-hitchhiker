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

(@jeongwhl 셋업 가이드 우리팀에게 맞게 수정 바랍니다.)

## Setup Guide
### Baked versions
`python-hitchhiker` production version is served as `python-hitchhiker-webservice`. If you use `python-hitchhiker-webservice`, you are using latest stable release of `python-hitchhiker`.

### Configuration

(여기 하위 부분 어떻게 적으면 좋을까요?)
Web UI uses `config.toml` located in app root directory. You can prepare many `config.toml.[POSTFIX]` in `configs` directory to switch various configurations.

These are options in `config.toml`.

```
[general]
apiEndpoint = "[Default API Endpoint. If blank, user input field will be shown.]"
apiEndpointText = "[Placeholder text instead of API endpoint input field.]"
defaultSessionEnvironment = "[Default session kernel. If blank, alphabetically first kernel will be default.]"
defaultImportEnvironment = "[Default kernel to use import features. If blank, index.docker.io/lablup/python:3.8-ubuntu18.04 will be used.]"
siteDescription = "[Site description placeholder. It will be at the bottom of 'Backend.AI' at the top left corner.]"
connectionMode = "[Connection mode. Default is API. Currenly supports API and SESSION]"
allowChangeSigninMode = false # Allows user to change signin mode between `API` and `SESSION`
signupSupport = false # Enable / disable signup feature support. Manager plugin is required.
allowSignout = false # Let users signout from service. Signup plugin is required.
allowAnonymousChangePassword = false # Enable / disable anonymous user can send change password email. Manager plugin is required.
allowProjectResourceMonitor = true # Allow users to look up its group monitor statistics
autoLogout = false # If true, user will be automatically logout when they close all Backend.AI tab / window.
allowManualImageNameForSession = false # If true, user will be able to use the specific environment image by typing the exact name.
debug = false # Debug flag. Enable this flag will bypass every error messages from manager to app notification.

[wsproxy]
proxyURL = "[Proxy URL]"
proxyBaseURL = "[Base URL of websocket proxy,]"
proxyListenIP = "[Websocket proxy configuration IP.]"

[resources]
openPortToPublic = true # Show option to open app proxy port to anyone.
maxCPUCoresPerContainer = 256 # Maximum CPU per container.
maxMemoryPerContainer = 64 # Maximum memory per container.
maxCUDADevicesPerContainer = 16  # Maximum CUDA devices per container.
maxCUDASharesPerContainer = 8  # Maximum CUDA shares per container.
maxShmPerContainer = 1 # Maximum shared memory per container.
maxFileUploadSize = 4294967296 # Maximum size of single file upload. Set to -1 for unlimited upload.

[environments]
#allowlist = "" # Comma-separated image name. Image name should contain the repository (registry path and image name) part of the full image URL, excluding the protocol and tag
# e.g. cr.backend.ai/stable/python
# You should pick default_environment in general section too.

[server]
webServerURL = "[Web server website URL. App will use the site instead of local app.]"
                   # Uses websocket proxy in the app

[plugin]
# Reserved to load plugins
#login = "signup-cloud.js"
#page = "test-plugin1,test-plugin2"

```
</br>

## Branches

 * main : Development branch
 * release : Latest release branch   (우리 서비스 release branch 만들 것인가요?)

</br>

## Development Guide

Python-hitchhiker Web UI is built with
 * `npm` as package manager

</br>

## Code of conduct

View [Code of conduct](https://github.com/innohack2021/python-hitchhiker/blob/main/CODE_OF_CONDUCT.md) for community guidelines.


</br>

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


### Adding new examples (@sunghwki @sikang 원래 백엔드닷에이아이에서 언어 추가하는 파트였는데, 문제 추가하는 방법으로 바꿔주세요.)


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
