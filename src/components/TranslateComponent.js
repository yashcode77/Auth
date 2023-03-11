// import React, { useState, useEffect } from 'react';
// import { translate } from '@vitalets/google-translate-api';

// const languageOptions = [
//   { code: 'af', name: 'Afrikaans' },
//   { code: 'sq', name: 'Albanian' },
//   { code: 'am', name: 'Amharic' },
//   { code: 'ar', name: 'Arabic' },
//   { code: 'hy', name: 'Armenian' },
//   // Add more languages as needed
// ];

// function TranslateComponent() {
//   const [currentLanguage, setCurrentLanguage] = useState(languageOptions[0].code);
//   const [translatedContent, setTranslatedContent] = useState({});

//   useEffect(() => {
//     const translateContent = async () => {
//       const elementsToTranslate = document.querySelectorAll('[data-translate]');
//       const translations = {};

//       for (const element of elementsToTranslate) {
//         const result = await translate(element.innerText, { to: currentLanguage });
//         translations[element.dataset.translate] = result.text;
//       }

//       setTranslatedContent(translations);
//     };

//     translateContent();
//   }, [currentLanguage]);

//   const handleLanguageChange = (event) => {
//     setCurrentLanguage(event.target.value);
//   };

//   return (
//     <div>
//       <label htmlFor="language-select">Select Language:</label>
//       <select id="language-select" value={currentLanguage} onChange={handleLanguageChange}>
//         {languageOptions.map((option) => (
//           <option key={option.code} value={option.code}>{option.name}</option>
//         ))}
//       </select>
//       <br />

//       <h1 data-translate="heading">Welcome to my website</h1>
//       <p data-translate="description">This is a sample paragraph that needs to be translated.</p>

//       {/* Other content to be translated */}
//       <p data-translate="paragraph1">Another paragraph to be translated.</p>
//       <p data-translate="paragraph2">Yet another paragraph to be translated.</p>

//       {/* Display translated content */}
//       <h1>{translatedContent.heading}</h1>
//       <p>{translatedContent.description}</p>
//       <p>{translatedContent.paragraph1}</p>
//       <p>{translatedContent.paragraph2}</p>
//     </div>
//   );
// }

// export default TranslateComponent;
