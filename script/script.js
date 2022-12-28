const pRow1 = document.getElementById("row1Message");

const years = () => {
  const dateString = "2002/11/12";
  const today = new Date();
  const birthDate = new Date(dateString);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthValidation = today.getMonth() - birthDate.getMonth();

  if (monthValidation < 0 || (monthValidation === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return age;
};

pRow1.innerHTML = `Meu nome é Charles Eduardo tenho ${years()} anos e sou um estudante de programação. Quando comecei a minha jornada em 2019, enfrentei muitas dificuldades e tive que buscar minha própria paixão na área de tecnologia. Comecei estudando Python, mas depois tive um período de desistência de dois meses.   No entanto, decidi voltar a estudar com determinação e dedicação. Comecei pelo HTML e CSS e após dois meses passei para o JavaScript assim aprendendo react em hackathon. Esses aprenzidos ajudaram muito a ter uma base sólida para continuar meu aprendizado e crescimento profissional.`;
