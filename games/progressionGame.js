function generateGeometricProgression(length, ratio) {
    const progression = [Math.floor(Math.random() * 10) + 1];
    for (let i = 1; i < length; i++) {
      progression.push(progression[i - 1] * ratio);
    }
    return progression;
  }
  
  export function generateQuestion() {
    const length = 10;
    const ratio = Math.floor(Math.random() * 5) + 2;
    const progression = generateGeometricProgression(length, ratio);
    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];
    
    progression[hiddenIndex] = '..';
    const question = progression.join(' ');
  
    return { question, correctAnswer };
  }
  