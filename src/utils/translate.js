const translations = {
    "सिरदर्द": "headache",
    "ताप": "fever",
    "सर्दी": "cold",
    "खांसी": "cough",
    "दर्द": "pain"
  };
  
  export function translateToEnglish(input) {
    input = input.trim();
    return translations[input] || input;
  }
   