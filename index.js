const receivesAFunction = receivesFunct => receivesFunct()
function returnsANamedFunction() {
    return function namedFunction() {

    }
}
const returnsAnAnonymousFunction = () => (function () { })