export default function invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
}
