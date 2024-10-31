function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
  }
  
  function lcm(a, b) {
    return (a * b) / gcd(a, b);
  }
  
  export function generateQuestion() {
    const numbers = [Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1, Math.floor(Math.random() * 50) + 1];
    const question = numbers.join(' ');
    const correctAnswer = numbers.reduce((acc, num) => lcm(acc, num));
    
    return { question, correctAnswer };
  }
  