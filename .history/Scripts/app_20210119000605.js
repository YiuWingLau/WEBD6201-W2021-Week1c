// IIFE - Immediately Invoked Function Expression
// Anonymous Self-Executing Function

(function()
{

    function Start()
    {
        console.log("App Started...");
    }

    // add an eventlistener to the window object
    // when the browser window finishes loading
    // call the Start function
    window.addEventListener("load", Start);

})();