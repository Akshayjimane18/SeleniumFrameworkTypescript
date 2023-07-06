set tag=dev

set COMMON_CONFIG_FILE=.env

npm run cucumber -- --profile %tag% || npm run postcucumber