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

pRow1.innerHTML = `Olá eu sou charles eduardo, tenho ${years()} anos. Sempre tive um muito forte interessado por tecnologia e informática, mas nunca havia dado muito atenção à programação. Comecei a estudar programação em 2019, mas logo me senti desmotivado e cansado. Não conseguia entender os conceitos e parecia que não estava progredindo. Mas não desisti facilmente. Comecei a me dedicar mais aos estudos, assistindo aulas online, cursos, lendo documentações... Também comecei a praticar programação todos os dias, Experimentando diferentes linguagens de programação, para ver qual eu me adequava melhor. Gradualmente, comecei a me apaixonar pela programação. Comecei a enxergar o quão poderosa e versátil ela era, e como poderia ser usada para resolver problemas complexos e criar coisas incríveis. Minha paixão pela programação cresceu cada vez mais e passei a me dedicar ainda mais aos estudos. Participando de grupos online e fóruns, compartilhando meus conhecimento e aprendendo com outros programadores. Hoje, sou um programador apaixonado pelo que faço desde de algo profissional até algo por simples vontade. Adoro resolver problemas complicados e criar novas soluções com a ajuda da programação. Após conhecer a programação e a comuniade que eu participo nunca mais me senti o mesmo`;
