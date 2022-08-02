/**
 * @param {string} cssSelector
 */
 const getTextFromSelector = cssSelector => {
	const h1 = document.querySelector('h1');
    const h2 = document.querySelector('h2');
    return `${h1?.textContent ?? 'element not found'} ${h2?.textContent ?? 'element not found'}`;

}

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // "element not found"