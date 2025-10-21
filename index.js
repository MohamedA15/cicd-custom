const core = require('@actions/core');

try {

    const nameToGreet = core.getInput('Who-to-greet');
    console.log(`Hello' ${nameToGreet}!`);
    core.setTimeout('time', new Date().toTimeString());

} catch (error) {
    core.setFailed(error.message);
}