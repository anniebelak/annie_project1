API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/patch?id=${ID}"
# API="${API_ORIGIN:-https://ga-library-api.herokuapp.com}"
# URL_PATH="change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --data ''

echo
